"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import {
  BloomEffect,
  ChromaticAberrationEffect,
  ToneMappingMode,
  VignetteEffect,
} from "postprocessing";
import { useDataVaultStore } from "../store/useDataVaultStore";
import type { ArmIdentifier } from "../store/useDataVaultStore";
import {
  SCENE3_ARM_META,
  SCENE3_ARM_ORDER,
  SCENE3_RUN_COUNT,
  SCENE3_RUNS_PER_ARM,
  type Scene3ArmName,
} from "../data/scene3ValidationData";

/* ============================================================================
 * TYPES — mutable physics state + static instanced attributes for 200 runs
 * ==========================================================================*/

interface FieldArrays {
  /** Current world position per orb (x, y, z) — force-integrated every frame. */
  position: Float32Array;
  /** Current world velocity per orb (x, y, z) — real physical state, never lerped. */
  velocity: Float32Array;
  /** Deterministic rest position: the empirical field at zero scroll energy. */
  home: Float32Array;
  /** Deterministic signed unit tangent used for orbital swirl. */
  tangent: Float32Array;
  /** Empirical launch radius: runDistance * DISTANCE_SCALE (never jittered). */
  radius0: Float32Array;
  /** Escape classification from vLaunch > sqrt((2 * GM) / radius0). */
  escaped: Uint8Array;
  /** Normalized escape excess: min(1, (vLaunch / vEscape - 1) / EXCESS_SPAN). */
  excess: Float32Array;
  /** Arm index: 0 CONTROL, 1 NEUTRAL, 2 TOKEN_ONLY, 3 CONEXUS. */
  arm: Uint8Array;
  /** Deterministic per-orb seed in [0, 1). */
  seed: Float32Array;
  /** Distance-driven base orb scale. */
  baseScale: Float32Array;
}

interface AttrArrays {
  /** Exact run-level semantic distance — the shader's instability input. */
  distance: Float32Array;
  arm: Float32Array;
  seed: Float32Array;
  escape: Float32Array;
  excess: Float32Array;
  /** Linear-space base color per orb (RGB). */
  color: Float32Array;
}

interface FieldBundle {
  field: FieldArrays;
  attrs: AttrArrays;
  escapeCounts: Record<Scene3ArmName, number>;
}

/* ============================================================================
 * LOCKED CONSTANTS
 * ==========================================================================*/

/** Scene 3 root element measured for local scroll progress. */
const SCENE_ELEMENT_ID = "data-vault-scene";

/* --- Empirically derived escape physics (the only classification source) --- */
const GM = 34;
const K = 10;
const DISTANCE_SCALE = 35;

/* --- Cinematic dynamics (applied only AFTER the equation classifies) --- */
const FADE_START = 30;
const FADE_END = 44;
const R_SOFT = 38;
const ESCAPE_THRUST = 3.4;
const TRAPPED_SWIRL = 1.2;
const ESCAPED_SWIRL = 0.8;
const HOME_SPRING = 1.1;
const SPRING_TRAPPED = 0.6;
const DRAG_TRAPPED = 1.5;
const DRAG_ESCAPED = 0.3;
const TRAPPED_TIGHTEN = 0.86;
const REST_DAMP_RATE = 2.2;
const MAX_DELTA = 0.05;

/* --- Deterministic placement --- */
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const ARM_PHASE: readonly [number, number, number, number] = [0.0, 1.7, 3.1, 4.9];
const DIRECTION_JITTER = 0.12;

/* --- Distance-driven scale + escape excess normalization --- */
const INSTABILITY_LOW = 0.2;
const INSTABILITY_HIGH = 0.315;
const BASE_SCALE_MIN = 0.105;
const BASE_SCALE_RANGE = 0.085;
const EXCESS_SPAN = 0.25;

/* --- Focus treatment (indexed by arm index) --- */
const FOCUS_BOOST: readonly [number, number, number, number] = [0.3, 0.3, 0.45, 0.65];
const ARM_INDEX: Record<ArmIdentifier, number> = {
  NONE: -1,
  CONTROL: 0,
  NEUTRAL: 1,
  TOKEN_ONLY: 2,
  CONEXUS: 3,
};

/* --- Camera framing --- */
const CAMERA_FOV = 42;
const CAMERA_FAR = 220;

/* ============================================================================
 * DETERMINISTIC HELPERS
 * ==========================================================================*/

function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp(v: number, min: number, max: number): number {
  return v < min ? min : v > max ? max : v;
}

function clamp01(v: number): number {
  return clamp(v, 0, 1);
}

function smoothstep01(edge0: number, edge1: number, x: number): number {
  const t = clamp01((x - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
}

/* ============================================================================
 * DATA -> SPACE + EMPIRICALLY DERIVED ESCAPE CLASSIFICATION
 *
 * For each of the 200 canonical runs:
 *
 *   radius0  = runDistance * DISTANCE_SCALE
 *   vLaunch  = armMean * K
 *   vEscape  = sqrt((2 * GM) / radius0)
 *   escaped  = vLaunch > vEscape
 *
 * The escaped flag is computed ONLY from that equation. Arm identity never
 * determines classification; it only contributes the arm mean as a physical
 * launch velocity, exactly as the study measured it.
 *
 * Placement uses a per-arm Fibonacci sphere with deterministic organic
 * direction jitter. radius0 is never jittered — the radial thickness of each
 * arm is the real empirical distribution of its 50 runs.
 * ==========================================================================*/

function buildField(): FieldBundle {
  const field: FieldArrays = {
    position: new Float32Array(SCENE3_RUN_COUNT * 3),
    velocity: new Float32Array(SCENE3_RUN_COUNT * 3),
    home: new Float32Array(SCENE3_RUN_COUNT * 3),
    tangent: new Float32Array(SCENE3_RUN_COUNT * 3),
    radius0: new Float32Array(SCENE3_RUN_COUNT),
    escaped: new Uint8Array(SCENE3_RUN_COUNT),
    excess: new Float32Array(SCENE3_RUN_COUNT),
    arm: new Uint8Array(SCENE3_RUN_COUNT),
    seed: new Float32Array(SCENE3_RUN_COUNT),
    baseScale: new Float32Array(SCENE3_RUN_COUNT),
  };

  const attrs: AttrArrays = {
    distance: new Float32Array(SCENE3_RUN_COUNT),
    arm: new Float32Array(SCENE3_RUN_COUNT),
    seed: new Float32Array(SCENE3_RUN_COUNT),
    escape: new Float32Array(SCENE3_RUN_COUNT),
    excess: new Float32Array(SCENE3_RUN_COUNT),
    color: new Float32Array(SCENE3_RUN_COUNT * 3),
  };

  const escapeCounts: Record<Scene3ArmName, number> = {
    CONTROL: 0,
    NEUTRAL: 0,
    TOKEN_ONLY: 0,
    CONEXUS: 0,
  };

  const armColor = new THREE.Color();
  let index = 0;

  for (const armName of SCENE3_ARM_ORDER) {
    const meta = SCENE3_ARM_META[armName];
    const armIndex = meta.index;
    armColor.set(meta.color);

    for (let runIndex = 0; runIndex < SCENE3_RUNS_PER_ARM; runIndex++) {
      const runDistance = meta.runs[runIndex];

      /* --- Empirically derived escape classification (single source of truth) --- */
      const radius0 = runDistance * DISTANCE_SCALE;
      const vLaunch = meta.mean * K;
      const vEscape = Math.sqrt((2 * GM) / radius0);
      const isEscaped = vLaunch > vEscape;
      const excess = isEscaped
        ? Math.min(1, (vLaunch / vEscape - 1) / EXCESS_SPAN)
        : 0;

      /* --- Deterministic per-orb RNG (stable across reloads) --- */
      const rng = mulberry32(
        (armIndex * SCENE3_RUNS_PER_ARM + runIndex + 1) * 2654435761,
      );
      const seed = rng();

      /* --- Fibonacci-sphere direction + deterministic organic jitter --- */
      const y = 1 - (2 * (runIndex + 0.5)) / SCENE3_RUNS_PER_ARM;
      const horizontal = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = GOLDEN_ANGLE * runIndex + ARM_PHASE[armIndex];

      let dx = Math.cos(theta) * horizontal + (rng() * 2 - 1) * DIRECTION_JITTER;
      let dy = y + (rng() * 2 - 1) * DIRECTION_JITTER;
      let dz = Math.sin(theta) * horizontal + (rng() * 2 - 1) * DIRECTION_JITTER;

      const dirLength = Math.sqrt(dx * dx + dy * dy + dz * dz);
      dx /= dirLength;
      dy /= dirLength;
      dz /= dirLength;

      /* --- Home position: empirical radius, never jittered --- */
      const i3 = index * 3;
      const homeX = dx * radius0;
      const homeY = dy * radius0;
      const homeZ = dz * radius0;

      field.home[i3] = homeX;
      field.home[i3 + 1] = homeY;
      field.home[i3 + 2] = homeZ;
      field.position[i3] = homeX;
      field.position[i3 + 1] = homeY;
      field.position[i3 + 2] = homeZ;
      field.velocity[i3] = 0;
      field.velocity[i3 + 1] = 0;
      field.velocity[i3 + 2] = 0;

      /* --- Deterministic signed tangent (coherent azimuthal swirl) ---
       * cross(worldUp, dir); near the poles fall back to cross(dir, xAxis). */
      let tx = dz;
      let ty = 0;
      let tz = -dx;
      let tangentLength = Math.sqrt(tx * tx + tz * tz);
      if (tangentLength < 1e-4) {
        tx = 0;
        ty = dz;
        tz = -dy;
        tangentLength = Math.sqrt(ty * ty + tz * tz) || 1;
      }
      field.tangent[i3] = tx / tangentLength;
      field.tangent[i3 + 1] = ty / tangentLength;
      field.tangent[i3 + 2] = tz / tangentLength;

      /* --- Distance-driven geometry: instability rises with measured distance --- */
      const instability = smoothstep01(
        INSTABILITY_LOW,
        INSTABILITY_HIGH,
        runDistance,
      );
      const baseScale = BASE_SCALE_MIN + BASE_SCALE_RANGE * instability;

      field.radius0[index] = radius0;
      field.escaped[index] = isEscaped ? 1 : 0;
      field.excess[index] = excess;
      field.arm[index] = armIndex;
      field.seed[index] = seed;
      field.baseScale[index] = baseScale;

      attrs.distance[index] = runDistance;
      attrs.arm[index] = armIndex;
      attrs.seed[index] = seed;
      attrs.escape[index] = isEscaped ? 1 : 0;
      attrs.excess[index] = excess;
      attrs.color[i3] = armColor.r;
      attrs.color[i3 + 1] = armColor.g;
      attrs.color[i3 + 2] = armColor.b;

      if (isEscaped) {
        escapeCounts[armName] += 1;
      }

      index += 1;
    }
  }

  return { field, attrs, escapeCounts };
}

/* ============================================================================
 * MODULE-LEVEL DETERMINISTIC FIELD
 * Built exactly once per page load; identical on every reload.
 * ==========================================================================*/

const { field: FIELD, attrs: ATTRS, escapeCounts: ESCAPE_COUNTS } = buildField();

/* ============================================================================
 * DEVELOPMENT ESCAPE-INVARIANT VERIFICATION
 * Runs once at deterministic data construction — never per frame.
 * The canonical 4-arm dataset must produce 0 / 0 / 0 / 50 escapes under
 * vLaunch = armMean * K vs vEscape = sqrt((2 * GM) / (runDistance * DISTANCE_SCALE)).
 * ==========================================================================*/

if (process.env.NODE_ENV !== "production") {
  const EXPECTED_ESCAPE: Record<Scene3ArmName, number> = {
    CONTROL: 0,
    NEUTRAL: 0,
    TOKEN_ONLY: 0,
    CONEXUS: SCENE3_RUNS_PER_ARM,
  };

  // Independent recount directly from the typed arrays.
  const recount = [0, 0, 0, 0];
  for (let i = 0; i < SCENE3_RUN_COUNT; i++) {
    recount[FIELD.arm[i]] += FIELD.escaped[i];
  }

  const failures: string[] = [];

  SCENE3_ARM_ORDER.forEach((armName, orderIndex) => {
    const meta = SCENE3_ARM_META[armName];
    if (meta.index !== orderIndex) {
      failures.push(
        `${armName}: meta.index (${meta.index}) does not match SCENE3_ARM_ORDER position (${orderIndex}).`,
      );
    }
    if (meta.runs.length !== SCENE3_RUNS_PER_ARM) {
      failures.push(
        `${armName}: expected ${SCENE3_RUNS_PER_ARM} runs, found ${meta.runs.length}.`,
      );
    }
    const expected = EXPECTED_ESCAPE[armName];
    if (
      ESCAPE_COUNTS[armName] !== expected ||
      recount[meta.index] !== expected
    ) {
      failures.push(
        `${armName}: expected ${expected}/${SCENE3_RUNS_PER_ARM} escapes, ` +
          `equation produced ${ESCAPE_COUNTS[armName]}/${SCENE3_RUNS_PER_ARM} ` +
          `(field recount ${recount[meta.index]}/${SCENE3_RUNS_PER_ARM}).`,
      );
    }
  });

  if (failures.length > 0) {
    throw new Error(
      "[CausalDataCloudCanvas] Empirical escape invariant violated — the canonical " +
        "4-arm dataset no longer produces 0 / 0 / 0 / 50 escapes under " +
        `vLaunch = armMean * ${K} vs vEscape = sqrt((2 * ${GM}) / (runDistance * ${DISTANCE_SCALE})).\n` +
        failures.join("\n"),
    );
  }
}

/* ============================================================================
 * GLSL SOURCES
 *
 * ORB — one InstancedMesh, custom ShaderMaterial with a real 3D simplex-noise
 *       implementation in the vertex stage. Per-run empirical distance is an
 *       instanced attribute (aDistance) and is the ONLY driver of geometric
 *       instability: smoothstep(0.20, 0.315, distance). No arm-name branch
 *       exists anywhere in the distortion path.
 * DUST — sparse environmental points, custom point shader.
 * CORE — centroid gravity well with energy pulse.
 * RING — faint measurement instrumentation at empirical radii.
 * ==========================================================================*/

const SIMPLEX_NOISE_GLSL = /* glsl */ `
vec3 snoiseMod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 snoiseMod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 snoisePermute(vec4 x) {
  return snoiseMod289(((x * 34.0) + 1.0) * x);
}
vec4 snoiseTaylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = snoiseMod289(i);
  vec4 p = snoisePermute(snoisePermute(snoisePermute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = snoiseTaylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}
`;

const ORB_VERTEX_SHADER = /* glsl */ `
 ${SIMPLEX_NOISE_GLSL}

attribute float aDistance;
attribute float aArm;
attribute float aSeed;
attribute float aEscape;
attribute float aExcess;
attribute vec3 aColor;

uniform float uTime;
uniform float uEnergy;
uniform float uFocusArmIndex;
uniform float uFocusAmount;
uniform float uFocusBoost;

varying vec3 vColor;
varying vec3 vViewPos;
varying vec3 vViewNormal;
varying float vInstability;
varying float vFade;
varying float vExcess;
varying float vEscape;
varying float vFocusLit;
varying float vSeed;

void main() {
  // The empirical run-level semantic distance is the ONLY driver of geometric
  // instability. 0.20 -> coherent, stable sphere. 0.315 -> unstable body.
  float instability = smoothstep(0.20, 0.315, aDistance);

  // Live instance translation gives the current orbital radius, used for the
  // outer field fade (FADE_START 30 -> FADE_END 44).
  vec3 instanceOffset = instanceMatrix[3].xyz;
  float radius = length(instanceOffset);
  float fade = 1.0 - smoothstep(30.0, 44.0, radius);

  // Deterministic per-run noise coordinates.
  vec3 seedOffset = vec3(aSeed * 137.0, aSeed * 91.0, aSeed * 211.0);

  // Coherent low-frequency displacement, amplified by measured distance.
  float slow = snoise(position * 1.9 + seedOffset + vec3(0.0, uTime * 0.22, 0.0));

  // High-frequency temporal quiver: faster and stronger with distance, and
  // with scroll energy on equation-classified escape runs.
  float quiverSpeed = 1.6 + 5.5 * instability;
  float quiver = snoise(
    position * 9.5 + seedOffset * 1.7 +
    vec3(uTime * quiverSpeed, uTime * quiverSpeed * 0.7, -uTime * quiverSpeed * 0.5)
  );

  float escapeEnergy = uEnergy * aEscape * (0.35 + 0.65 * aExcess);
  float ampSlow = 0.05 + 0.28 * instability;
  float ampQuiver = (0.012 + 0.085 * instability) * (0.55 + 0.45 * escapeEnergy);

  vec3 displaced = position + normal * (slow * ampSlow + quiver * ampQuiver);

  // Focus treatment, resolved per instance in the vertex stage so the
  // fragment stage stays branch-free. uFocusArmIndex is a discrete arm
  // (-1 for NONE); uFocusAmount is animated on the CPU.
  float focused = 1.0 - step(0.5, abs(aArm - uFocusArmIndex));
  float focusScale = 1.0 + uFocusAmount * focused * (0.22 + 0.5 * uFocusBoost);
  displaced *= focusScale;

  float dimmed = mix(1.0, 0.26, uFocusAmount * (1.0 - focused));
  float boosted = 1.0 + uFocusAmount * focused * uFocusBoost * 1.6;
  vFocusLit = dimmed * boosted;

  vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(displaced, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  vViewPos = mvPosition.xyz;
  vViewNormal = normalize(normalMatrix * (mat3(instanceMatrix) * normal));
  vColor = aColor;
  vInstability = instability;
  vFade = fade;
  vExcess = aExcess;
  vEscape = aEscape;
  vSeed = aSeed;
}
`;

const ORB_FRAGMENT_SHADER = /* glsl */ `
uniform float uTime;
uniform float uEnergy;

varying vec3 vColor;
varying vec3 vViewPos;
varying vec3 vViewNormal;
varying float vInstability;
varying float vFade;
varying float vExcess;
varying float vEscape;
varying float vFocusLit;
varying float vSeed;

void main() {
  vec3 normalDir = normalize(vViewNormal);
  vec3 viewDir = normalize(-vViewPos);
  float facing = max(dot(normalDir, viewDir), 0.0);
  float fresnel = pow(1.0 - facing, 2.4);

  // Hot energy: measured distance pushes the palette toward burning
  // orange and finally toward white. This follows the numbers, not the name.
  vec3 hot = mix(vColor, vec3(1.0, 0.36, 0.08), vInstability * 0.6);
  hot = mix(hot, vec3(1.0, 0.85, 0.62), vInstability * vInstability * 0.45);

  // Subtle per-run shimmer.
  float shimmer = 0.92 + 0.08 * sin(uTime * (1.0 + vSeed * 2.0) + vSeed * 43.0);

  // Equation-derived escape excess under scroll energy.
  float escapeEnergy = uEnergy * vEscape * (0.4 + 0.6 * vExcess);

  float body = 0.32 + 0.68 * pow(facing, 1.6);
  float emissive = 0.5 + 1.9 * vInstability + 2.6 * escapeEnergy + 0.5 * vExcess;

  vec3 color = hot * body * emissive * shimmer;
  color += hot * fresnel * (0.55 + 1.6 * vInstability + 1.4 * escapeEnergy);

  // Focus dim/boost and the outer field fade (additive: black is invisible).
  color *= vFocusLit;
  color *= vFade;

  gl_FragColor = vec4(color, 1.0);
}
`;

const DUST_VERTEX_SHADER = /* glsl */ `
attribute float aSeed;
attribute float aScale;

uniform float uTime;

varying float vAlpha;

void main() {
  // Slow deterministic drift so the void breathes without spinning.
  vec3 p = position;
  float t = uTime * 0.06 + aSeed * 6.2831853;
  p.x += sin(t * 1.3 + aSeed * 41.0) * 0.7;
  p.y += sin(t * 0.9 + aSeed * 73.0) * 0.7;
  p.z += cos(t * 1.1 + aSeed * 29.0) * 0.7;

  vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  float depth = max(-mvPosition.z, 1.0);
  gl_PointSize = aScale * (140.0 / depth);

  float twinkle = 0.5 + 0.5 * sin(uTime * (0.35 + aSeed * 0.8) + aSeed * 97.0);
  vAlpha = 0.05 + 0.11 * twinkle;
}
`;

const DUST_FRAGMENT_SHADER = /* glsl */ `
varying float vAlpha;

void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float falloff = 1.0 - smoothstep(0.12, 0.5, d);
  if (falloff <= 0.0) {
    discard;
  }
  vec3 tint = vec3(0.55, 0.6, 0.72);
  gl_FragColor = vec4(tint * falloff * vAlpha, 1.0);
}
`;

const CORE_VERTEX_SHADER = /* glsl */ `
varying vec3 vViewPos;
varying vec3 vViewNormal;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  vViewPos = mvPosition.xyz;
  vViewNormal = normalize(normalMatrix * normal);
}
`;

const CORE_FRAGMENT_SHADER = /* glsl */ `
uniform float uTime;
uniform float uEnergy;

varying vec3 vViewPos;
varying vec3 vViewNormal;

void main() {
  vec3 normalDir = normalize(vViewNormal);
  vec3 viewDir = normalize(-vViewPos);
  float fresnel = pow(1.0 - max(dot(normalDir, viewDir), 0.0), 2.2);

  // The gravity well pulses; its rim heats from cool instrument grey toward
  // burning orange as scroll energy drives the causal separation.
  float pulse = 0.5 + 0.5 * sin(uTime * (0.8 + 2.4 * uEnergy));
  vec3 body = vec3(0.016, 0.017, 0.02);
  vec3 cool = vec3(0.32, 0.38, 0.5);
  vec3 hot = vec3(1.0, 0.32, 0.05);
  vec3 glow = mix(cool, hot, clamp(uEnergy * 1.25, 0.0, 1.0));

  vec3 color = body + glow * fresnel * (0.22 + 0.3 * pulse + 0.55 * uEnergy);
  gl_FragColor = vec4(color, 1.0);
}
`;

const RING_VERTEX_SHADER = /* glsl */ `
varying vec2 vLocal;

void main() {
  vLocal = position.xy;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const RING_FRAGMENT_SHADER = /* glsl */ `
uniform vec3 uColor;
uniform float uOpacity;
uniform float uInner;
uniform float uOuter;

varying vec2 vLocal;

void main() {
  // Soft radial band peaking at the ring centerline.
  float r = length(vLocal);
  float mid = 0.5 * (uInner + uOuter);
  float width = max(mid - uInner, 0.0001);
  float band = 1.0 - smoothstep(0.0, width * 1.7, abs(r - mid));

  // Faint measurement ticks: exactly 45 sine periods per full revolution,
  // so the pattern is seamless across the angular wrap.
  float angle = atan(vLocal.y, vLocal.x);
  float ticks = 0.82 + 0.18 * smoothstep(0.25, 0.95, abs(sin(angle * 45.0)));

  float alpha = band * ticks * uOpacity;
  if (alpha < 0.002) {
    discard;
  }
  gl_FragColor = vec4(uColor * alpha, 1.0);
}
`;

/* ============================================================================
 * WEB AUDIO — NATIVE ENGINE
 *
 * Nothing is audible before a legitimate user activation. The AudioContext is
 * created/resumed only along the unlock() path, which is invoked exclusively
 * from real user-activation events (pointerdown / click / keydown) through the
 * exported unlockVaultAudio().
 *
 * Signal chain:
 *   layers -> bus -> soft saturation (WaveShaper) ->
 *   DynamicsCompressor safety stage -> master -> destination
 *
 * Layers:
 *   1. PeriodicWave foundation rooted at 40 Hz with decaying upper partials
 *      (1x..6x) so the low regime is actually perceptible on laptop speakers.
 *   2. Pure sine sub foundation at the fundamental.
 *   3. TOKEN_ONLY subtle upper partial near 5x fundamental.
 *   4. CONEXUS digital layer: two detuned saws near 2x fundamental into a
 *      quantizing (bitcrush) WaveShaper, level-modulated by a ~6.3 Hz LFO.
 *   5. Low-level filtered noise tension layer.
 * ==========================================================================*/

interface ArmAudioProfile {
  /** Overall foundation level at the bus. */
  bus: number;
  /** Level of the ~5x fundamental partial (TOKEN_ONLY timbral distinction). */
  token: number;
  /** Base level of the digital crush layer. */
  crush: number;
  /** LFO depth applied to the crush layer (controlled vibration). */
  crushLfoDepth: number;
  /** Filtered noise tension level. */
  noise: number;
  /** Fundamental frequency target for this arm. */
  frequency: number;
}

const AUDIO_PROFILES: Record<ArmIdentifier, ArmAudioProfile> = {
  NONE: {
    bus: 0.0001,
    token: 0,
    crush: 0,
    crushLfoDepth: 0,
    noise: 0,
    frequency: 40,
  },
  CONTROL: {
    bus: 0.3,
    token: 0,
    crush: 0,
    crushLfoDepth: 0,
    noise: 0,
    frequency: 40,
  },
  NEUTRAL: {
    bus: 0.28,
    token: 0,
    crush: 0,
    crushLfoDepth: 0,
    noise: 0,
    frequency: 40,
  },
  TOKEN_ONLY: {
    bus: 0.32,
    token: 0.055,
    crush: 0,
    crushLfoDepth: 0,
    noise: 0.008,
    frequency: 40,
  },
  CONEXUS: {
    bus: 0.4,
    token: 0,
    crush: 0.12,
    crushLfoDepth: 0.05,
    noise: 0.05,
    frequency: 119,
  },
};

/** Harmonic weights for the foundation PeriodicWave (index = partial number). */
const FOUNDATION_HARMONICS: readonly number[] = [0, 1, 0.55, 0.3, 0.16, 0.08, 0.045];
/** Quantization steps in the bitcrush approximation. */
const BITCRUSH_STEPS = 12;
/** Controlled-vibration LFO frequency, Hz. */
const LFO_FREQUENCY = 6.3;
/** Conservative master output level. */
const MASTER_GAIN = 0.7;
/** Lowpass cutoff of the noise tension layer, Hz. */
const NOISE_FILTER_FREQUENCY = 850;

function makeSaturationCurve(samples = 2048): Float32Array {
  const curve = new Float32Array(samples);
  for (let i = 0; i < samples; i++) {
    const x = (i / (samples - 1)) * 2 - 1;
    // Unity slope at zero, gently bounded ceiling: transparent at low levels,
    // soft-clipped at peaks.
    curve[i] = Math.tanh(x * 1.25) * 0.8;
  }
  return curve;
}

function makeBitcrushCurve(steps: number, samples = 4096): Float32Array {
  const curve = new Float32Array(samples);
  for (let i = 0; i < samples; i++) {
    const x = (i / (samples - 1)) * 2 - 1;
    // Quantize to `steps` levels, then tanh soft-clip so the crushed signal
    // stays tasteful rather than harsh.
    const quantized = Math.round(x * steps) / steps;
    curve[i] = Math.tanh(quantized * 1.7);
  }
  return curve;
}

const SATURATION_CURVE = makeSaturationCurve();
const BITCRUSH_CURVE = makeBitcrushCurve(BITCRUSH_STEPS);

function createFoundationWave(ctx: AudioContext): PeriodicWave {
  const partialCount = FOUNDATION_HARMONICS.length - 1;
  const real = new Float32Array(partialCount + 1);
  const imag = new Float32Array(partialCount + 1);
  for (let i = 1; i <= partialCount; i++) {
    imag[i] = FOUNDATION_HARMONICS[i];
  }
  return ctx.createPeriodicWave(real, imag, { disableNormalization: false });
}

function createNoiseBuffer(ctx: AudioContext): AudioBuffer {
  const length = Math.floor(ctx.sampleRate * 2);
  const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    data[i] = Math.random() * 2 - 1;
  }
  return buffer;
}

interface AudioGraph {
  bus: GainNode;
  saturate: WaveShaperNode;
  compressor: DynamicsCompressorNode;
  master: GainNode;
  oscHarmonic: OscillatorNode;
  harmonicGain: GainNode;
  oscSub: OscillatorNode;
  subGain: GainNode;
  oscToken: OscillatorNode;
  tokenGain: GainNode;
  oscCrushA: OscillatorNode;
  oscCrushB: OscillatorNode;
  crushSum: GainNode;
  crushGain: GainNode;
  shaperCrush: WaveShaperNode;
  oscLfo: OscillatorNode;
  lfoGain: GainNode;
  noiseSource: AudioBufferSourceNode;
  noiseFilter: BiquadFilterNode;
  noiseGain: GainNode;
}

class VaultAudioEngine {
  private ctx: AudioContext | null = null;
  private graph: AudioGraph | null = null;
  private unlocked = false;
  private visibilityBound = false;
  /** Pending arm memory: the arm active before unlock, applied on unlock. */
  private activeArm: ArmIdentifier = "NONE";

  private readonly onVisibilityChange = () => {
    if (!this.ctx) {
      return;
    }
    if (document.hidden) {
      void this.ctx.suspend().catch(() => {});
    } else if (this.unlocked) {
      void this.ctx.resume().catch(() => {});
    }
  };

  get isUnlocked(): boolean {
    return this.unlocked;
  }

  /**
   * Records the active arm and, once unlocked, sonifies it. Safe to call any
   * number of times before unlock: nothing is created and nothing throws.
   */
  setActiveArm(arm: ArmIdentifier): void {
    this.activeArm = arm;
    if (this.unlocked && this.graph && this.ctx) {
      this.applyProfile(arm);
    }
  }

  /**
   * Must only be reached from a real user-activation path. Creates/resumes
   * the AudioContext, builds the graph lazily, and applies the pending arm.
   * Returns false without touching the store if audio cannot start.
   */
  async unlock(): Promise<boolean> {
    if (this.unlocked && this.ctx && this.ctx.state === "running" && this.graph) {
      return true;
    }
    try {
      if (!this.ctx) {
        const Ctor: typeof AudioContext | undefined =
          typeof window !== "undefined"
            ? window.AudioContext ??
              (window as unknown as { webkitAudioContext?: typeof AudioContext })
                .webkitAudioContext
            : undefined;
        if (!Ctor) {
          return false;
        }
        this.ctx = new Ctor();
      }
      if (this.ctx.state !== "running") {
        await this.ctx.resume();
      }
      if (this.ctx.state !== "running") {
        return false;
      }
      if (!this.graph) {
        this.buildGraph();
      }
      if (!this.graph) {
        return false;
      }
      this.unlocked = true;
      if (!this.visibilityBound && typeof document !== "undefined") {
        document.addEventListener("visibilitychange", this.onVisibilityChange);
        this.visibilityBound = true;
      }
      this.activeArm = useDataVaultStore.getState().activeArm;
      this.applyProfile(this.activeArm);
      return true;
    } catch {
      return false;
    }
  }

  private buildGraph(): void {
    const ctx = this.ctx;
    if (!ctx) {
      return;
    }
    const restFrequency = AUDIO_PROFILES.NONE.frequency;

    // --- Safety chain: bus -> soft saturation -> compressor -> master -> out
    const bus = ctx.createGain();
    bus.gain.value = AUDIO_PROFILES.NONE.bus;

    const saturate = ctx.createWaveShaper();
    saturate.curve = SATURATION_CURVE;
    saturate.oversample = "2x";

    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.knee.value = 24;
    compressor.ratio.value = 4;
    compressor.attack.value = 0.01;
    compressor.release.value = 0.25;

    const master = ctx.createGain();
    master.gain.value = MASTER_GAIN;

    bus.connect(saturate);
    saturate.connect(compressor);
    compressor.connect(master);
    master.connect(ctx.destination);

    // --- Foundation 1: harmonic PeriodicWave rooted at the fundamental.
    const oscHarmonic = ctx.createOscillator();
    oscHarmonic.setPeriodicWave(createFoundationWave(ctx));
    oscHarmonic.frequency.value = restFrequency;
    const harmonicGain = ctx.createGain();
    harmonicGain.gain.value = 0.5;
    oscHarmonic.connect(harmonicGain);
    harmonicGain.connect(bus);

    // --- Foundation 2: pure sine sub at the fundamental.
    const oscSub = ctx.createOscillator();
    oscSub.type = "sine";
    oscSub.frequency.value = restFrequency;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.5;
    oscSub.connect(subGain);
    subGain.connect(bus);

    // --- TOKEN_ONLY timbral partial near 5x fundamental.
    const oscToken = ctx.createOscillator();
    oscToken.type = "sine";
    oscToken.frequency.value = restFrequency * 5;
    const tokenGain = ctx.createGain();
    tokenGain.gain.value = 0;
    oscToken.connect(tokenGain);
    tokenGain.connect(bus);

    // --- CONEXUS digital layer: detuned saws near 2x fundamental into the
    //     quantizing bitcrush shaper.
    const oscCrushA = ctx.createOscillator();
    oscCrushA.type = "sawtooth";
    oscCrushA.frequency.value = restFrequency * 2;
    oscCrushA.detune.value = -7;
    const oscCrushB = ctx.createOscillator();
    oscCrushB.type = "sawtooth";
    oscCrushB.frequency.value = restFrequency * 2;
    oscCrushB.detune.value = 9;
    const crushSum = ctx.createGain();
    crushSum.gain.value = 0.5;
    oscCrushA.connect(crushSum);
    oscCrushB.connect(crushSum);
    const crushGain = ctx.createGain();
    crushGain.gain.value = 0;
    const shaperCrush = ctx.createWaveShaper();
    shaperCrush.curve = BITCRUSH_CURVE;
    shaperCrush.oversample = "2x";
    crushSum.connect(crushGain);
    crushGain.connect(shaperCrush);
    shaperCrush.connect(bus);

    // --- ~6.3 Hz LFO: controlled vibration on the crush layer level.
    const oscLfo = ctx.createOscillator();
    oscLfo.type = "sine";
    oscLfo.frequency.value = LFO_FREQUENCY;
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0;
    oscLfo.connect(lfoGain);
    lfoGain.connect(crushGain.gain);

    // --- Low-level filtered noise tension.
    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = createNoiseBuffer(ctx);
    noiseSource.loop = true;
    const noiseFilter = ctx.createBiquadFilter();
    noiseFilter.type = "lowpass";
    noiseFilter.frequency.value = NOISE_FILTER_FREQUENCY;
    noiseFilter.Q.value = 0.8;
    const noiseGain = ctx.createGain();
    noiseGain.gain.value = 0;
    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(bus);

    const t = ctx.currentTime;
    oscHarmonic.start(t);
    oscSub.start(t);
    oscToken.start(t);
    oscCrushA.start(t);
    oscCrushB.start(t);
    oscLfo.start(t);
    noiseSource.start(t);

    this.graph = {
      bus,
      saturate,
      compressor,
      master,
      oscHarmonic,
      harmonicGain,
      oscSub,
      subGain,
      oscToken,
      tokenGain,
      oscCrushA,
      oscCrushB,
      crushSum,
      crushGain,
      shaperCrush,
      oscLfo,
      lfoGain,
      noiseSource,
      noiseFilter,
      noiseGain,
    };
  }

  private applyProfile(arm: ArmIdentifier): void {
    const ctx = this.ctx;
    const graph = this.graph;
    if (!ctx || !graph) {
      return;
    }
    const profile = AUDIO_PROFILES[arm];
    const now = ctx.currentTime;

    graph.bus.gain.setTargetAtTime(profile.bus, now, 0.4);
    graph.tokenGain.gain.setTargetAtTime(profile.token, now, 0.3);
    graph.crushGain.gain.setTargetAtTime(profile.crush, now, 0.3);
    graph.lfoGain.gain.setTargetAtTime(profile.crushLfoDepth, now, 0.3);
    graph.noiseGain.gain.setTargetAtTime(profile.noise, now, 0.3);

    // The CONEXUS rise toward ~119 Hz is deliberately slower than the level
    // ramps so the tonal shift reads as a physical acceleration.
    const frequencyTc = 0.7;
    graph.oscHarmonic.frequency.setTargetAtTime(profile.frequency, now, frequencyTc);
    graph.oscSub.frequency.setTargetAtTime(profile.frequency, now, frequencyTc);
    graph.oscToken.frequency.setTargetAtTime(profile.frequency * 5, now, frequencyTc);
    const crushFrequency = profile.frequency * 2;
    graph.oscCrushA.frequency.setTargetAtTime(crushFrequency, now, frequencyTc);
    graph.oscCrushB.frequency.setTargetAtTime(crushFrequency, now, frequencyTc);
  }

  /** Full teardown. The engine recreates itself if unlocked again later. */
  dispose(): void {
    if (this.visibilityBound && typeof document !== "undefined") {
      document.removeEventListener("visibilitychange", this.onVisibilityChange);
      this.visibilityBound = false;
    }

    const graph = this.graph;
    const ctx = this.ctx;
    this.graph = null;
    this.unlocked = false;
    this.ctx = null;

    if (graph) {
      const sources: Array<OscillatorNode | AudioBufferSourceNode> = [
        graph.oscHarmonic,
        graph.oscSub,
        graph.oscToken,
        graph.oscCrushA,
        graph.oscCrushB,
        graph.oscLfo,
        graph.noiseSource,
      ];
      for (const source of sources) {
        try {
          source.stop();
        } catch {
          // Already stopped — nothing to do.
        }
        try {
          source.disconnect();
        } catch {
          // Already disconnected — nothing to do.
        }
      }

      const nodes: AudioNode[] = [
        graph.bus,
        graph.saturate,
        graph.compressor,
        graph.master,
        graph.harmonicGain,
        graph.subGain,
        graph.tokenGain,
        graph.crushSum,
        graph.crushGain,
        graph.shaperCrush,
        graph.lfoGain,
        graph.noiseFilter,
        graph.noiseGain,
      ];
      for (const node of nodes) {
        try {
          node.disconnect();
        } catch {
          // Already disconnected — nothing to do.
        }
      }
    }

    if (ctx) {
      void ctx.close().catch(() => {});
    }

    // The context is closed; the store must not keep claiming audio is live.
    useDataVaultStore.getState().setAudioUnlocked(false);
  }
}

/** Module-level singleton: no AudioContext exists until unlock() is called. */
const VAULT_AUDIO = new VaultAudioEngine();

let unsubscribeVaultAudioStore: (() => void) | null = null;

function ensureVaultAudioSubscription(): void {
  if (unsubscribeVaultAudioStore || typeof window === "undefined") {
    return;
  }
  // Sonification follows the store's activeArm. Before unlock this only
  // records the pending arm; it never creates audio resources and never
  // throws.
  unsubscribeVaultAudioStore = useDataVaultStore.subscribe((state, prevState) => {
    if (state.activeArm !== prevState.activeArm) {
      VAULT_AUDIO.setActiveArm(state.activeArm);
    }
  });
}

if (typeof window !== "undefined") {
  ensureVaultAudioSubscription();
}

/**
 * Public unlock entry point. MUST be invoked from a real user activation
 * (onPointerDown / onClick / onKeyDown). Returns true only when the
 * AudioContext has actually reached a usable running state, and updates the
 * Zustand store so `audioUnlocked === true`. Never fakes success.
 */
export async function unlockVaultAudio(): Promise<boolean> {
  ensureVaultAudioSubscription();
  const success = await VAULT_AUDIO.unlock();
  if (success) {
    useDataVaultStore.getState().setAudioUnlocked(true);
  }
  return success;
}

/* ============================================================================
 * RUNTIME — SHARED SCENE STATE + SCROLL / VISIBILITY / POINTER HELPERS
 *
 * One mutable module object holds scroll energy, scene visibility, pointer
 * parallax, and the published focus state. Components read and write it
 * imperatively inside useFrame; React state is never touched per frame.
 * The supplemental react import below extends the hooks imported at the top
 * of this file (duplicate module imports are merged by the bundler).
 * ==========================================================================*/

import { useCallback, useLayoutEffect, useState } from "react";

interface SceneRuntimeState {
  /** Smoothed scroll energy in [0, 1] driving the causal separation. */
  energy: number;
  /** Frame-rate-independent target the energy eases toward. */
  energyTarget: number;
  /** Raw local scene scroll progress in [0, 1]. */
  rawProgress: number;
  /** IntersectionObserver visibility of the scene runway. */
  visible: boolean;
  /** Pointer position in [-1, 1] for camera parallax. */
  pointerX: number;
  pointerY: number;
  /** Discrete focused arm index (-1 = NONE), published by PhysicsField. */
  focusArm: number;
  /** Eased focus amount in [0, 1], published by PhysicsField. */
  focusAmount: number;
}

const RUNTIME: SceneRuntimeState = {
  energy: 0,
  energyTarget: 0,
  rawProgress: 0,
  visible: true,
  pointerX: 0,
  pointerY: 0,
  focusArm: -1,
  focusAmount: 0,
};

/* --- Scroll / focus / camera tuning (architecture-locked values above) --- */
const ENERGY_WINDOW_START = 0.16;
const ENERGY_WINDOW_END = 0.74;
const MEASURE_FALLBACK_MS = 500;
const ELEMENT_RETRY_MS = 600;
const ENERGY_SMOOTH_RATE = 2.2;
const FOCUS_FADE_UP = 2.2;
const FOCUS_FADE_DOWN = 3.2;
const GRAVITY_SOFTEN = 4.0;
const CONTAINMENT = 0.55;
const REST_WANDER_AMP = 0.045;

/* --- Dust environment --- */
const DUST_COUNT = 850;
const DUST_MIN_RADIUS = 14;
const DUST_MAX_RADIUS = 60;

/* --- Reference instrumentation rings --- */
const RING_ARM_OPACITY: readonly number[] = [0.1, 0.1, 0.12, 0.16];
const RING_OUTER_OPACITY = 0.05;
const RING_DESATURATE = 0.45;
const RING_FOCUS_GAIN = 2.1;
const RING_DIM_FACTOR = 0.5;
const RING_ROTATION_RATE = 0.01;

/* --- Cinematic camera --- */
const CAMERA_RADIUS_REST = 17;
const CAMERA_RADIUS_PULL = 16;
const CAMERA_PHI_REST = 1.06;
const CAMERA_PHI_DROP = 0.24;
const CAMERA_DRIFT_RATE = 0.022;
const CAMERA_PARALLAX_AZIMUTH = 0.15;
const CAMERA_PARALLAX_PHI = 0.1;
const CAMERA_POINTER_RATE = 2.5;
const CAMERA_EVOLVE_RATE = 1.4;

/* --- Postprocessing targets --- */
const BLOOM_BASE = 0.52;
const BLOOM_ENERGY_GAIN = 0.5;
const BLOOM_FOCUS_GAIN: readonly number[] = [0.28, 0.28, 0.68, 1.75];
const CA_ENERGY_GAIN = 2.6;
const CA_FOCUS_GAIN = 1.6;
const VIGNETTE_BASE_DARKNESS = 0.78;

/** Reused per-frame matrix — no allocations inside the 200-orb loop. */
const TMP_MATRIX = new THREE.Matrix4();

/**
 * Measures local Scene 3 scroll progress against the element with id
 * "data-vault-scene" (document progress only as a fallback), tracks scene
 * visibility via IntersectionObserver, and captures pointer parallax.
 * Passive listeners only mark dirty; a single requestAnimationFrame loop
 * performs at most one DOM measurement per frame.
 */
function SceneRuntimeController({
  onVisibilityChange,
}: {
  onVisibilityChange: (visible: boolean) => void;
}) {
  useEffect(() => {
    let disposed = false;
    let rafId = 0;
    let retryTimer: ReturnType<typeof setInterval> | null = null;
    let observer: IntersectionObserver | null = null;
    let sceneElement: HTMLElement | null = null;
    let dirty = true;
    let lastMeasure = 0;

    const measure = () => {
      let raw: number;
      if (sceneElement) {
        const rect = sceneElement.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        raw = (viewportHeight - rect.top) / (rect.height + viewportHeight);
      } else {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        raw = max > 1 ? window.scrollY / max : 0;
      }
      RUNTIME.rawProgress = clamp01(raw);
      RUNTIME.energyTarget = smoothstep01(
        ENERGY_WINDOW_START,
        ENERGY_WINDOW_END,
        RUNTIME.rawProgress,
      );
    };

    const attachObserver = (element: HTMLElement) => {
      if (observer) {
        observer.disconnect();
      }
      try {
        observer = new IntersectionObserver(
          (entries) => {
            if (disposed || entries.length === 0) {
              return;
            }
            const visible = entries[entries.length - 1].isIntersecting;
            if (visible) {
              dirty = true;
            }
            if (RUNTIME.visible !== visible) {
              RUNTIME.visible = visible;
              onVisibilityChange(visible);
            }
          },
          { rootMargin: "30% 0px 30% 0px", threshold: 0 },
        );
        observer.observe(element);
      } catch {
        // IntersectionObserver unavailable: keep the scene active.
        observer = null;
      }
    };

    const tryLocateSceneElement = (): boolean => {
      if (sceneElement) {
        return true;
      }
      const element = document.getElementById(SCENE_ELEMENT_ID);
      if (element) {
        sceneElement = element;
        attachObserver(element);
        dirty = true;
        return true;
      }
      return false;
    };

    const markDirty = () => {
      dirty = true;
    };

    const onPointerMove = (event: PointerEvent) => {
      RUNTIME.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
      RUNTIME.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("scroll", markDirty, { passive: true });
    window.addEventListener("resize", markDirty, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    if (!tryLocateSceneElement()) {
      retryTimer = setInterval(() => {
        if (tryLocateSceneElement() && retryTimer) {
          clearInterval(retryTimer);
          retryTimer = null;
        }
      }, ELEMENT_RETRY_MS);
    }

    const tick = (now: number) => {
      if (disposed) {
        return;
      }
      if (RUNTIME.visible && (dirty || now - lastMeasure >= MEASURE_FALLBACK_MS)) {
        measure();
        dirty = false;
        lastMeasure = now;
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", markDirty);
      window.removeEventListener("resize", markDirty);
      window.removeEventListener("pointermove", onPointerMove);
      if (retryTimer) {
        clearInterval(retryTimer);
        retryTimer = null;
      }
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [onVisibilityChange]);

  return null;
}

/* ============================================================================
 * PHYSICS FIELD — ONE InstancedMesh FOR ALL 200 EMPIRICAL RUNS
 *
 * Escape classification was fixed at deterministic data construction by
 * vLaunch > sqrt((2 * GM) / radius0). This loop only integrates real
 * frame-based forces: softened central gravity (emerging with scroll
 * energy), a home spring that reforms the empirical field at rest, radial
 * tightening + swirl for bound runs, outward thrust + swirl + soft
 * containment for equation-classified escape runs, drag, and restoration
 * damping. No position lerping, no per-frame allocations, no setState.
 * ==========================================================================*/

function PhysicsField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const focusRef = useRef({ arm: -1, target: -1, amount: 0 });

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1, 3);
    geo.setAttribute(
      "aDistance",
      new THREE.InstancedBufferAttribute(ATTRS.distance, 1),
    );
    geo.setAttribute("aArm", new THREE.InstancedBufferAttribute(ATTRS.arm, 1));
    geo.setAttribute("aSeed", new THREE.InstancedBufferAttribute(ATTRS.seed, 1));
    geo.setAttribute(
      "aEscape",
      new THREE.InstancedBufferAttribute(ATTRS.escape, 1),
    );
    geo.setAttribute(
      "aExcess",
      new THREE.InstancedBufferAttribute(ATTRS.excess, 1),
    );
    geo.setAttribute(
      "aColor",
      new THREE.InstancedBufferAttribute(ATTRS.color, 3),
    );
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: ORB_VERTEX_SHADER,
        fragmentShader: ORB_FRAGMENT_SHADER,
        uniforms: {
          uTime: { value: 0 },
          uEnergy: { value: 0 },
          uFocusArmIndex: { value: -1 },
          uFocusAmount: { value: 0 },
          uFocusBoost: { value: 0 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  // Seed the instance matrices before the first rendered frame so the
  // empirical field exists immediately, and mark the matrix buffer dynamic.
  useLayoutEffect(() => {
    const mesh = meshRef.current;
    if (!mesh) {
      return;
    }
    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    for (let i = 0; i < SCENE3_RUN_COUNT; i++) {
      const i3 = i * 3;
      const s = FIELD.baseScale[i];
      TMP_MATRIX.makeScale(s, s, s);
      TMP_MATRIX.setPosition(FIELD.home[i3], FIELD.home[i3 + 1], FIELD.home[i3 + 2]);
      mesh.setMatrixAt(i, TMP_MATRIX);
    }
    mesh.instanceMatrix.needsUpdate = true;
  }, []);

  useEffect(() => {
    const mesh = meshRef.current;
    return () => {
      geometry.dispose();
      material.dispose();
      mesh?.dispose();
    };
  }, [geometry, material]);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh || !RUNTIME.visible) {
      return;
    }

    const dt = Math.min(delta, MAX_DELTA);
    const time = state.clock.elapsedTime;

    // Frame-rate-independent scroll energy easing.
    RUNTIME.energy +=
      (RUNTIME.energyTarget - RUNTIME.energy) *
      (1 - Math.exp(-dt * ENERGY_SMOOTH_RATE));

    // Focus state machine: fade the current arm down, switch the discrete
    // arm only near zero, then fade the new arm up. Never interpolates
    // numerically through unrelated arm identifiers.
    const activeArm = useDataVaultStore.getState().activeArm;
    const focus = focusRef.current;
    focus.target = ARM_INDEX[activeArm];
    if (focus.arm !== focus.target) {
      focus.amount = Math.max(0, focus.amount - dt * FOCUS_FADE_DOWN);
      if (focus.amount <= 1e-4) {
        focus.amount = 0;
        focus.arm = focus.target;
      }
    } else if (focus.arm === -1) {
      focus.amount = 0;
    } else {
      focus.amount = Math.min(1, focus.amount + dt * FOCUS_FADE_UP);
    }
    const focusEase =
      focus.amount * focus.amount * (3 - 2 * focus.amount);
    const focusBoost = focus.arm >= 0 && focus.arm < 4 ? FOCUS_BOOST[focus.arm] : 0;

    RUNTIME.focusArm = focus.arm;
    RUNTIME.focusAmount = focusEase;

    const energy = RUNTIME.energy;
    const homeBlend = 1 - energy;

    const pos = FIELD.position;
    const vel = FIELD.velocity;
    const home = FIELD.home;
    const tangent = FIELD.tangent;
    const radius0 = FIELD.radius0;
    const escaped = FIELD.escaped;
    const excess = FIELD.excess;
    const baseScale = FIELD.baseScale;
    const seed = FIELD.seed;

    for (let i = 0; i < SCENE3_RUN_COUNT; i++) {
      const i3 = i * 3;
      let px = pos[i3];
      let py = pos[i3 + 1];
      let pz = pos[i3 + 2];
      let vx = vel[i3];
      let vy = vel[i3 + 1];
      let vz = vel[i3 + 2];

      const r = Math.sqrt(px * px + py * py + pz * pz) || 1e-6;
      const invR = 1 / r;
      const dx = px * invR;
      const dy = py * invR;
      const dz = pz * invR;

      let ax = 0;
      let ay = 0;
      let az = 0;

      // Softened central gravity — the centroid becomes a gravity well as
      // scroll energy rises.
      const gMag = (GM / (r * r + GRAVITY_SOFTEN)) * energy;
      ax -= dx * gMag;
      ay -= dy * gMag;
      az -= dz * gMag;

      // At rest the home spring reforms the exact empirical field.
      if (homeBlend > 0.001) {
        const homeK = HOME_SPRING * homeBlend;
        ax += (home[i3] - px) * homeK;
        ay += (home[i3 + 1] - py) * homeK;
        az += (home[i3 + 2] - pz) * homeK;
      }

      let drag: number;
      if (escaped[i] === 1) {
        // Equation-classified escape run: outward thrust scales with the
        // measured escape excess, tangential swirl spirals it through the
        // field, and soft containment beyond R_SOFT prevents hard stops.
        const thrust = ESCAPE_THRUST * (0.4 + 0.6 * excess[i]) * energy;
        ax += dx * thrust;
        ay += dy * thrust;
        az += dz * thrust;

        const swirl = ESCAPED_SWIRL * energy;
        ax += tangent[i3] * swirl;
        ay += tangent[i3 + 1] * swirl;
        az += tangent[i3 + 2] * swirl;

        if (r > R_SOFT) {
          const contain = (r - R_SOFT) * CONTAINMENT;
          ax -= dx * contain;
          ay -= dy * contain;
          az -= dz * contain;
        }
        drag = DRAG_ESCAPED;
      } else {
        // Gravitationally bound run: tighten toward radius0 * 0.86 while
        // gravity still pulls inward — the bound population stays inside.
        const rTarget = radius0[i] * TRAPPED_TIGHTEN;
        const radial = (rTarget - r) * SPRING_TRAPPED * energy;
        ax += dx * radial;
        ay += dy * radial;
        az += dz * radial;

        const swirl = TRAPPED_SWIRL * energy;
        ax += tangent[i3] * swirl;
        ay += tangent[i3 + 1] * swirl;
        az += tangent[i3 + 2] * swirl;
        drag = DRAG_TRAPPED;
      }

      // Real frame-integrated velocity.
      vx += ax * dt;
      vy += ay * dt;
      vz += az * dt;

      // Regime drag plus low-energy restoration damping.
      let damp = Math.exp(-dt * drag * (0.2 + 0.8 * energy));
      if (homeBlend > 0.001) {
        damp *= Math.exp(-dt * homeBlend * REST_DAMP_RATE);
      }
      vx *= damp;
      vy *= damp;
      vz *= damp;

      px += vx * dt;
      py += vy * dt;
      pz += vz * dt;

      pos[i3] = px;
      pos[i3 + 1] = py;
      pos[i3 + 2] = pz;
      vel[i3] = vx;
      vel[i3 + 1] = vy;
      vel[i3 + 2] = vz;

      // Instance matrix: distance-driven base scale plus a tiny deterministic
      // rest wander that keeps the field alive without touching physics state.
      const s = baseScale[i];
      const wanderAmp = homeBlend * REST_WANDER_AMP;
      const orbSeed = seed[i];
      TMP_MATRIX.makeScale(s, s, s);
      TMP_MATRIX.setPosition(
        px + Math.sin(time * 0.5 + orbSeed * 6.2831853) * wanderAmp,
        py + Math.sin(time * 0.43 + orbSeed * 12.5663706) * wanderAmp,
        pz + Math.cos(time * 0.37 + orbSeed * 9.42477796) * wanderAmp,
      );
      mesh.setMatrixAt(i, TMP_MATRIX);
    }

    mesh.instanceMatrix.needsUpdate = true;

    material.uniforms.uTime.value = time;
    material.uniforms.uEnergy.value = energy;
    material.uniforms.uFocusArmIndex.value = focus.arm;
    material.uniforms.uFocusAmount.value = focusEase;
    material.uniforms.uFocusBoost.value = focusBoost;
  });

  return (
    <instancedMesh
      ref={meshRef}
      args={[geometry, material, SCENE3_RUN_COUNT]}
      frustumCulled={false}
    />
  );
}

/* ============================================================================
 * CENTROID CORE — the embedding centroid / gravity well
 * ==========================================================================*/

function CentroidCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => new THREE.SphereGeometry(0.55, 48, 24), []);
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: CORE_VERTEX_SHADER,
        fragmentShader: CORE_FRAGMENT_SHADER,
        uniforms: {
          uTime: { value: 0 },
          uEnergy: { value: 0 },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    if (!RUNTIME.visible) {
      return;
    }
    const time = state.clock.elapsedTime;
    const energy = RUNTIME.energy;
    material.uniforms.uTime.value = time;
    material.uniforms.uEnergy.value = energy;
    const mesh = meshRef.current;
    if (mesh) {
      const pulse =
        1 + 0.05 * Math.sin(time * 1.7 + Math.sin(time * 0.53) * 1.3) + 0.22 * energy;
      mesh.scale.setScalar(pulse);
    }
  });

  return <mesh ref={meshRef} args={[geometry, material]} />;
}

/* ============================================================================
 * REFERENCE RINGS — empirical measurement instrumentation
 *
 * Four faint rings at armMean * DISTANCE_SCALE (NEUTRAL and TOKEN_ONLY
 * nearly overlap by design — the data places them there) plus a very faint
 * outer ring near the fade boundary. Focus brightens the focused arm's ring
 * and dims the others.
 * ==========================================================================*/

interface RingEntry {
  geometry: THREE.RingGeometry;
  material: THREE.ShaderMaterial;
  baseOpacity: number;
  armIndex: number;
}

function ReferenceRings() {
  const groupRef = useRef<THREE.Group>(null);

  const rings = useMemo<RingEntry[]>(() => {
    const list: RingEntry[] = [];
    const instrumentGray = new THREE.Color("#8a93a6");

    for (const armName of SCENE3_ARM_ORDER) {
      const meta = SCENE3_ARM_META[armName];
      const radius = meta.mean * DISTANCE_SCALE;
      const halfWidth = 0.07;
      const geometry = new THREE.RingGeometry(
        radius - halfWidth,
        radius + halfWidth,
        220,
        1,
      );
      const color = new THREE.Color(meta.color).lerp(instrumentGray, RING_DESATURATE);
      const baseOpacity = RING_ARM_OPACITY[meta.index];
      const material = new THREE.ShaderMaterial({
        vertexShader: RING_VERTEX_SHADER,
        fragmentShader: RING_FRAGMENT_SHADER,
        uniforms: {
          uColor: { value: color },
          uOpacity: { value: baseOpacity },
          uInner: { value: radius - halfWidth },
          uOuter: { value: radius + halfWidth },
        },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.DoubleSide,
      });
      list.push({ geometry, material, baseOpacity, armIndex: meta.index });
    }

    // Very faint outer instrumentation ring near the fade boundary.
    const outerRadius = FADE_END;
    const outerGeometry = new THREE.RingGeometry(
      outerRadius - 0.22,
      outerRadius + 0.22,
      260,
      1,
    );
    const outerMaterial = new THREE.ShaderMaterial({
      vertexShader: RING_VERTEX_SHADER,
      fragmentShader: RING_FRAGMENT_SHADER,
      uniforms: {
        uColor: { value: new THREE.Color("#8a93a6") },
        uOpacity: { value: RING_OUTER_OPACITY },
        uInner: { value: outerRadius - 0.22 },
        uOuter: { value: outerRadius + 0.22 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      side: THREE.DoubleSide,
    });
    list.push({
      geometry: outerGeometry,
      material: outerMaterial,
      baseOpacity: RING_OUTER_OPACITY,
      armIndex: -1,
    });

    return list;
  }, []);

  useEffect(() => {
    return () => {
      for (const ring of rings) {
        ring.geometry.dispose();
        ring.material.dispose();
      }
    };
  }, [rings]);

  useFrame((_, delta) => {
    if (!RUNTIME.visible) {
      return;
    }
    const dt = Math.min(delta, MAX_DELTA);

    // Extremely slow in-plane rotation: instrumentation that feels alive.
    const group = groupRef.current;
    if (group) {
      group.rotation.y += dt * RING_ROTATION_RATE;
    }

    const focusArm = RUNTIME.focusArm;
    const focusAmount = RUNTIME.focusAmount;
    const blend = 1 - Math.exp(-dt * 6);
    for (let i = 0; i < rings.length; i++) {
      const ring = rings[i];
      let target = ring.baseOpacity;
      if (focusArm >= 0 && focusAmount > 0.001) {
        target =
          ring.armIndex === focusArm
            ? ring.baseOpacity * RING_FOCUS_GAIN
            : ring.baseOpacity * RING_DIM_FACTOR;
      }
      const uniform = ring.material.uniforms.uOpacity;
      uniform.value += (target - uniform.value) * blend;
    }
  });

  return (
    <group ref={groupRef}>
      {rings.map((ring, index) => (
        <mesh
          key={index}
          geometry={ring.geometry}
          material={ring.material}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      ))}
    </group>
  );
}

/* ============================================================================
 * DUST FIELD — sparse environmental depth cues (deterministic)
 * ==========================================================================*/

function DustField() {
  const geometry = useMemo(() => {
    const rng = mulberry32(0x5eedd057);
    const positions = new Float32Array(DUST_COUNT * 3);
    const seeds = new Float32Array(DUST_COUNT);
    const scales = new Float32Array(DUST_COUNT);
    for (let i = 0; i < DUST_COUNT; i++) {
      const u = rng() * 2 - 1;
      const angle = rng() * Math.PI * 2;
      const s = Math.sqrt(Math.max(0, 1 - u * u));
      const radius = DUST_MIN_RADIUS + (DUST_MAX_RADIUS - DUST_MIN_RADIUS) * rng();
      const i3 = i * 3;
      positions[i3] = s * Math.cos(angle) * radius;
      positions[i3 + 1] = u * radius;
      positions[i3 + 2] = s * Math.sin(angle) * radius;
      seeds[i] = rng();
      scales[i] = 0.6 + rng() * 1.2;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
    geo.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));
    return geo;
  }, []);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: DUST_VERTEX_SHADER,
        fragmentShader: DUST_FRAGMENT_SHADER,
        uniforms: { uTime: { value: 0 } },
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      }),
    [],
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  useFrame((state) => {
    if (!RUNTIME.visible) {
      return;
    }
    material.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return <points args={[geometry, material]} frustumCulled={false} />;
}

/* ============================================================================
 * CAMERA RIG — cinematic autonomous camera
 *
 * No OrbitControls. Very slow orbital drift, scroll-dependent phi/radius
 * (pulling back as the escape develops), subtle pointer parallax, and tiny
 * handheld sinusoidal drift. Always looks toward the centroid.
 * ==========================================================================*/

function CameraRig() {
  const rigRef = useRef({
    azimuth: 0.65,
    phi: 1.12,
    radius: 18.5,
    pointerX: 0,
    pointerY: 0,
  });

  useFrame((state, delta) => {
    if (!RUNTIME.visible) {
      return;
    }
    const dt = Math.min(delta, MAX_DELTA);
    const time = state.clock.elapsedTime;
    const rig = rigRef.current;

    // Smoothed pointer parallax.
    const pointerBlend = 1 - Math.exp(-dt * CAMERA_POINTER_RATE);
    rig.pointerX += (RUNTIME.pointerX - rig.pointerX) * pointerBlend;
    rig.pointerY += (RUNTIME.pointerY - rig.pointerY) * pointerBlend;

    const energy = RUNTIME.energy;

    // Scroll pulls the camera back and lowers the eye as escape develops.
    const radiusTarget = CAMERA_RADIUS_REST + CAMERA_RADIUS_PULL * energy;
    const phiTarget = CAMERA_PHI_REST + CAMERA_PHI_DROP * energy;
    const evolve = 1 - Math.exp(-dt * CAMERA_EVOLVE_RATE);
    rig.radius += (radiusTarget - rig.radius) * evolve;
    rig.phi += (phiTarget - rig.phi) * evolve;

    // Very slow autonomous orbital drift.
    rig.azimuth += dt * CAMERA_DRIFT_RATE;

    const azimuth =
      rig.azimuth +
      rig.pointerX * CAMERA_PARALLAX_AZIMUTH +
      Math.sin(time * 0.1) * 0.04;
    const phi = clamp(
      rig.phi - rig.pointerY * CAMERA_PARALLAX_PHI + Math.sin(time * 0.13) * 0.02,
      0.32,
      1.46,
    );

    const sinPhi = Math.sin(phi);
    const x = rig.radius * sinPhi * Math.sin(azimuth);
    const y = rig.radius * Math.cos(phi);
    const z = rig.radius * sinPhi * Math.cos(azimuth);

    // Tiny handheld drift keeps the frame alive without spinning.
    const handheldX = Math.sin(time * 0.27) * 0.06 + Math.sin(time * 0.61) * 0.02;
    const handheldY = Math.cos(time * 0.23) * 0.05;

    const camera = state.camera;
    camera.position.set(x + handheldX, y + handheldY, z);
    camera.lookAt(rig.pointerX * 0.7, -rig.pointerY * 0.4, 0);
  });

  return null;
}

/* ============================================================================
 * POSTPROCESSING — Bloom / ChromaticAberration / Vignette / ToneMapping
 *
 * Effect parameters are animated imperatively through effect refs inside a
 * priority-0 useFrame, which always runs before the composer's render pass.
 * ==========================================================================*/

function PostFX() {
  const bloomRef = useRef<BloomEffect | null>(null);
  const chromaticRef = useRef<ChromaticAberrationEffect | null>(null);
  const vignetteRef = useRef<VignetteEffect | null>(null);
  const caOffset = useMemo(() => new THREE.Vector2(0.0005, 0.0007), []);

  useFrame(() => {
    if (!RUNTIME.visible) {
      return;
    }
    const energy = RUNTIME.energy;
    const focusArm = RUNTIME.focusArm;
    const focusAmount = RUNTIME.focusAmount;
    const focusGain =
      focusArm >= 0 && focusArm < BLOOM_FOCUS_GAIN.length
        ? BLOOM_FOCUS_GAIN[focusArm] * focusAmount
        : 0;
    const conexusFocus = focusArm === 3 ? focusAmount : 0;

    // Bloom: restrained at rest, energy adds, focus escalates by condition —
    // CONEXUS focus is dramatically stronger but stays legible.
    const bloom = bloomRef.current;
    if (bloom) {
      bloom.intensity = BLOOM_BASE + BLOOM_ENERGY_GAIN * energy + focusGain;
    }

    // Chromatic aberration: subtle at rest, grows mainly with E^2 and with
    // CONEXUS focus; radial modulation keeps it reading near the edges.
    const chromatic = chromaticRef.current;
    if (chromatic) {
      const growth = 1 + CA_ENERGY_GAIN * energy * energy + CA_FOCUS_GAIN * conexusFocus;
      chromatic.offset.set(0.0005 * growth, 0.0007 * growth);
    }

    // Vignette: darkens the absolute edges, subtly deepening with energy.
    const vignette = vignetteRef.current;
    if (vignette) {
      vignette.darkness = Math.min(
        0.94,
        VIGNETTE_BASE_DARKNESS + 0.07 * energy + 0.06 * conexusFocus,
      );
    }
  });

  return (
    <EffectComposer multisampling={0}>
      <Bloom
        ref={bloomRef}
        mipmapBlur
        intensity={BLOOM_BASE}
        luminanceThreshold={0.19}
        luminanceSmoothing={0.34}
        radius={0.72}
      />
      <ChromaticAberration
        ref={chromaticRef}
        offset={caOffset}
        radialModulation
        modulationOffset={0.41}
      />
      <Vignette
        ref={vignetteRef}
        eskil={false}
        offset={0.23}
        darkness={VIGNETTE_BASE_DARKNESS}
      />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
    </EffectComposer>
  );
}

/* ============================================================================
 * SCENE ROOT
 * ==========================================================================*/

function SceneRoot() {
  return (
    <>
      <color attach="background" args={["#020204"]} />
      <PhysicsField />
      <CentroidCore />
      <ReferenceRings />
      <DustField />
      <CameraRig />
      <PostFX />
    </>
  );
}

/* ============================================================================
 * DEFAULT EXPORT — CAUSAL DATA CLOUD CANVAS
 *
 * The canvas renders a flat linear HDR frame that the postprocessing stack
 * tone-maps coherently. When the scene runway is genuinely offscreen, the
 * render loop pauses entirely (frameloop "never") and the sonification
 * fades to silence; both resume when the scene returns.
 * ==========================================================================*/

export default function CausalDataCloudCanvas() {
  const [active, setActive] = useState(true);

  const handleVisibilityChange = useCallback((visible: boolean) => {
    setActive(visible);
  }, []);

  // Fade sonification to silence while the scene is offscreen and restore
  // the store's focused arm when it returns. Before unlock this only
  // records the pending arm and creates no audio resources.
  useEffect(() => {
    VAULT_AUDIO.setActiveArm(
      active ? useDataVaultStore.getState().activeArm : "NONE",
    );
  }, [active]);

  // Full audio teardown when the scene unmounts; the engine recreates
  // itself if the user returns and unlocks again.
  useEffect(() => {
    return () => {
      VAULT_AUDIO.dispose();
    };
  }, []);

  return (
    <>
      <SceneRuntimeController onVisibilityChange={handleVisibilityChange} />
      <Canvas
        flat
        dpr={[1, 2]}
        frameloop={active ? "always" : "never"}
        gl={{
          antialias: false,
          alpha: false,
          stencil: false,
          powerPreference: "high-performance",
        }}
        camera={{
          fov: CAMERA_FOV,
          near: 0.1,
          far: CAMERA_FAR,
          position: [0, 7.5, 17.5],
        }}
      >
        <SceneRoot />
      </Canvas>
    </>
  );
}
