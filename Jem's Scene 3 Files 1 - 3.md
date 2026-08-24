Got it. The bags are packed, the engine is revved, and we have the master blueprint.

By extracting its thought process, you captured every single piece of the architecture: the 200 exact data points, the G=34 gravity well math, the custom Ashima simplex shaders, and the 6-bit Web Audio synthesizer. I have stitched it all together exactly as GLM-5.3 engineered it.

Here is the final payload. Drop these three files into your codebase and let's get out of here.

### **FILE 1:** store/useDataVaultStore.ts

TypeScript

```

import { create } from "zustand";

export type ArmIdentifier = "NONE" | "CONTROL" | "NEUTRAL" | "TOKEN_ONLY" | "CONEXUS";

interface DataVaultState {
  activeArm: ArmIdentifier;
  setActiveArm: (arm: ArmIdentifier) => void;
  resetActiveArm: () => void;
}

export const useDataVaultStore = create<DataVaultState>()((set) => ({
  activeArm: "NONE",
  setActiveArm: (arm) => set({ activeArm: arm }),
  resetActiveArm: () => set({ activeArm: "NONE" }),
}));

```

### **FILE 2:** components/CausalDataCloudCanvas.tsx

TypeScript

```

"use client";

import React, { useMemo, useRef, useEffect, useLayoutEffect, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles, AdaptiveDpr } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, ChromaticAberration, ToneMapping } from "@react-three/postprocessing";
import { ToneMappingMode, BlendFunction } from "postprocessing";
import type { BloomEffect, ChromaticAberrationEffect } from "postprocessing";
import { useDataVaultStore, type ArmIdentifier } from "../store/useDataVaultStore";

// ── DATA & CONSTANTS ─────────────────────────────────────────────────────────

const DISTANCE_SCALE = 35;
const ARM_ORDER = ["CONTROL", "NEUTRAL", "TOKEN_ONLY", "CONEXUS"] as const;
type DataArm = (typeof ARM_ORDER)[number];

const ARM_META: Record<DataArm, { color: string; mean: number; std: number; tilt: [number, number, number]; spin: number }> = {
  CONTROL: { color: "#a3a3a3", mean: 0.246627, std: 0.012617, tilt: [0.5, 0, 0], spin: 0.05 },
  NEUTRAL: { color: "#737373", mean: 0.221939, std: 0.022090, tilt: [-0.42, 0, 0], spin: -0.06 },
  TOKEN_ONLY: { color: "#d97706", mean: 0.225751, std: 0.019368, tilt: [0, 0, 0.6], spin: 0.07 },
  CONEXUS: { color: "#ff5500", mean: 0.292904, std: 0.014697, tilt: [0, 0, -0.55], spin: 0.04 },
};

const ARM_INDEX: Record<ArmIdentifier, number> = { NONE: -1, CONTROL: 0, NEUTRAL: 1, TOKEN_ONLY: 2, CONEXUS: 3 };

const RAW_RUNS: Record<DataArm, number[]> = {
  CONTROL: [
    0.242866, 0.238319, 0.245143, 0.238797, 0.255099, 0.267910, 0.247293, 0.252990, 0.259164, 0.248832,
    0.233200, 0.251026, 0.260477, 0.226937, 0.227431, 0.246892, 0.246987, 0.227992, 0.243721, 0.259591,
    0.260411, 0.251023, 0.260375, 0.229382, 0.253490, 0.230953, 0.261069, 0.237151, 0.261283, 0.245277,
    0.262668, 0.242459, 0.247268, 0.239112, 0.247738, 0.231178, 0.228109, 0.254096, 0.280296, 0.258144,
    0.254972, 0.240554, 0.221876, 0.264603, 0.241933, 0.241334, 0.239393, 0.252993, 0.228905, 0.242666
  ],
  NEUTRAL: [
    0.203964, 0.202330, 0.214410, 0.230301, 0.244641, 0.228082, 0.198849, 0.247122, 0.224508, 0.219762,
    0.202085, 0.219655, 0.190551, 0.232499, 0.245759, 0.288258, 0.211598, 0.218611, 0.213342, 0.196101,
    0.209302, 0.200653, 0.198023, 0.234154, 0.205480, 0.198896, 0.202771, 0.241464, 0.251750, 0.236568,
    0.217675, 0.192963, 0.223526, 0.209312, 0.219162, 0.205740, 0.201517, 0.234689, 0.228526, 0.301129,
    0.206071, 0.258476, 0.225385, 0.232814, 0.221040, 0.213691, 0.224783, 0.222322, 0.218028, 0.228618
  ],
  TOKEN_ONLY: [
    0.221867, 0.230117, 0.251267, 0.207320, 0.271235, 0.249998, 0.277967, 0.215366, 0.227178, 0.217886,
    0.202214, 0.213555, 0.211843, 0.211568, 0.223064, 0.210408, 0.260702, 0.213731, 0.224902, 0.210399,
    0.219720, 0.212410, 0.239764, 0.206404, 0.225464, 0.222957, 0.211844, 0.225850, 0.213065, 0.216964,
    0.241850, 0.218915, 0.224977, 0.225026, 0.227115, 0.247849, 0.211592, 0.211680, 0.201278, 0.216026,
    0.240986, 0.206676, 0.219060, 0.225071, 0.223205, 0.273960, 0.218704, 0.223345, 0.208326, 0.274886
  ],
  CONEXUS: [
    0.282128, 0.321638, 0.287685, 0.283071, 0.284486, 0.280819, 0.299487, 0.284066, 0.300180, 0.309881,
    0.315284, 0.292057, 0.299226, 0.322988, 0.278768, 0.276014, 0.301062, 0.274227, 0.295268, 0.291830,
    0.324381, 0.285037, 0.316909, 0.277930, 0.290534, 0.294041, 0.284906, 0.319330, 0.300523, 0.279415,
    0.301673, 0.287211, 0.282588, 0.302592, 0.280641, 0.297430, 0.268078, 0.273766, 0.295220, 0.305711,
    0.287374, 0.280591, 0.262733, 0.290775, 0.291218, 0.292851, 0.284475, 0.315853, 0.283839, 0.307439
  ]
};

// Physics Invariants
const PHYS = {
  GM: 34,          
  K: 10,           
  SOFT: 1.6,       
  DRAG_TRAPPED: 0.85,
  DRAG_ESCAPED: 0.06,
  SPRING: 24,      
  SPRING_DAMP: 7,
  R_EDGE: 18,      
  RING_K: 5.0,     
  EXCESS: 0.85,    
  SWIRL: 0.4,     
};

// ── UTILS ────────────────────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeBitcrushCurve(levels: number, drive: number): Float32Array {
  const n = 2048;
  const curve = new Float32Array(n);
  const step = 2 / levels;
  for (let i = 0; i < n; i++) {
    const x = (i / (n - 1)) * 2 - 1;
    const driven = Math.tanh(x * drive);
    curve[i] = Math.round(driven / step) * step;
  }
  return curve;
}

// ── WEB AUDIO ENGINE ─────────────────────────────────────────────────────────

class VaultAudioEngine {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private voice: GainNode | null = null;
  private humGain: GainNode | null = null;
  private crushGain: GainNode | null = null;
  private lowpass: BiquadFilterNode | null = null;
  private oscA: OscillatorNode | null = null;
  private oscB: OscillatorNode | null = null;
  private oscC: OscillatorNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoDepth: GainNode | null = null;
  private vibrato: OscillatorNode | null = null;
  private vibratoDepth: GainNode | null = null;
  private desired: ArmIdentifier = "NONE";
  private running = false;

  unlock() {
    if (this.running) { this.ctx?.resume(); return; }
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return;
    const ctx = new Ctor();
    this.ctx = ctx;

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.knee.value = 18; comp.ratio.value = 6;
    comp.attack.value = 0.004; comp.release.value = 0.18;
    
    const master = ctx.createGain(); master.gain.value = 0.85;
    comp.connect(master).connect(ctx.destination);

    const voice = ctx.createGain();
    voice.gain.value = 0.0001;
    voice.connect(comp);
    this.voice = voice;

    const oscA = ctx.createOscillator(); oscA.type = "sawtooth"; oscA.frequency.value = 40;
    const oscB = ctx.createOscillator(); oscB.type = "sine"; oscB.frequency.value = 40;
    const oscC = ctx.createOscillator(); oscC.type = "sine"; oscC.frequency.value = 80.6; oscC.detune.value = 8;
    
    const mixA = ctx.createGain(); mixA.gain.value = 0.5;
    const mixB = ctx.createGain(); mixB.gain.value = 0.85;
    const mixC = ctx.createGain(); mixC.gain.value = 0.12;
    
    oscA.connect(mixA); oscB.connect(mixB); oscC.connect(mixC);

    const pre = ctx.createGain(); pre.gain.value = 0.8;
    mixA.connect(pre); mixB.connect(pre); mixC.connect(pre);

    const lowpass = ctx.createBiquadFilter(); lowpass.type = "lowpass"; lowpass.frequency.value = 240; lowpass.Q.value = 0.8;
    const humGain = ctx.createGain(); humGain.gain.value = 0.9;
    pre.connect(lowpass).connect(humGain).connect(voice);

    const crushShaper = ctx.createWaveShaper();
    crushShaper.curve = makeBitcrushCurve(9, 2.4);
    crushShaper.oversample = "2x";
    
    const crushTone = ctx.createBiquadFilter(); crushTone.type = "bandpass"; crushTone.frequency.value = 340; crushTone.Q.value = 0.9;
    const crushGain = ctx.createGain(); crushGain.gain.value = 0.0;
    pre.connect(crushShaper).connect(crushTone).connect(crushGain).connect(voice);

    const lfo = ctx.createOscillator(); lfo.type = "sine"; lfo.frequency.value = 0.8;
    const lfoDepth = ctx.createGain(); lfoDepth.gain.value = 0.0; 
    lfo.connect(lfoDepth).connect(voice.gain);

    const vibrato = ctx.createOscillator(); vibrato.type = "sine"; vibrato.frequency.value = 5.3;
    const vibratoDepth = ctx.createGain(); vibratoDepth.gain.value = 6; 
    vibrato.connect(vibratoDepth);
    vibratoDepth.connect(oscA.detune); vibratoDepth.connect(oscB.detune); vibratoDepth.connect(oscC.detune);

    oscA.start(); oscB.start(); oscC.start(); lfo.start(); vibrato.start();
    
    this.oscA = oscA; this.oscB = oscB; this.oscC = oscC;
    this.humGain = humGain; this.crushGain = crushGain; this.lowpass = lowpass;
    this.lfoDepth = lfoDepth; this.vibratoDepth = vibratoDepth;
    
    this.running = true;
    this.setArm(this.desired, true);
  }

  setArm(arm: ArmIdentifier, immediate = false) {
    this.desired = arm;
    if (!this.ctx || !this.running) return;
    const t = this.ctx.currentTime;
    const tc = immediate ? 0.001 : 0.12;
    const isConexus = arm === "CONEXUS";
    const f = isConexus ? 120 : 40;
    
    this.oscA!.frequency.setTargetAtTime(f, t, tc);
    this.oscB!.frequency.setTargetAtTime(f, t, tc);
    this.oscC!.frequency.setTargetAtTime(f * 2.01, t, tc);
    
    const level = arm === "NONE" ? 0.05 : isConexus ? 0.17 : 0.13;
    this.voice!.gain.setTargetAtTime(level, t, tc);
    this.humGain!.gain.setTargetAtTime(isConexus ? 0.18 : 0.95, t, tc);
    this.crushGain!.gain.setTargetAtTime(isConexus ? 0.6 : 0.0, t, tc);
    this.lowpass!.frequency.setTargetAtTime(isConexus ? 1500 : 240, t, tc);
    this.lfoDepth!.gain.setTargetAtTime(isConexus ? 0.05 : 0.015, t, tc);
    this.vibratoDepth!.gain.setTargetAtTime(isConexus ? 26 : 5, t, tc);
  }

  dispose() {
    try { this.oscA?.stop(); this.ctx?.close(); } catch {}
    this.running = false; this.ctx = null;
  }
}

function AudioDriver() {
  const activeArm = useDataVaultStore((s) => s.activeArm);
  const engineRef = useRef<VaultAudioEngine | null>(null);

  useEffect(() => {
    const engine = new VaultAudioEngine();
    engineRef.current = engine;
    const unlock = () => engine.unlock();
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      engine.dispose();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
    engineRef.current?.setArm(activeArm);
  }, [activeArm]);

  return null;
}

// ── SHADERS ──────────────────────────────────────────────────────────────────

const VERTEX_SHADER = `
uniform float uTime;
uniform float uActiveArm;
uniform float uActiveStrength;
uniform float uNoiseAmp;
uniform float uFocusDistance;

attribute float aDistance;
attribute float aSeed;
attribute float aArm;
attribute float aEscape;
attribute vec3 aColor;

varying vec3 vColor;
varying float vDistance;
varying float vArm;
varying float vEscape;
varying float vInstability;
varying float vTear;
varying vec3 vNormal;
varying vec3 vViewDir;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
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
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  vColor = aColor;
  vDistance = aDistance;
  vArm = aArm;
  vEscape = aEscape;

  float match = 1.0 - step(0.5, abs(aArm - uActiveArm));
  float focus = mix(1.0, mix(0.30, 1.95, match), uActiveStrength);

  float dist01 = smoothstep(0.240, 0.2929, aDistance);
  float armBias = 0.55 + 0.45 * step(2.5, aArm);
  float globalBias = mix(0.9, 1.5, smoothstep(0.235, 0.2929, uFocusDistance));
  float instability = dist01 * armBias * globalBias;
  vInstability = instability;

  vec3 displaced = position;

  float breathe = snoise(position * 1.7 + aSeed * 19.19 + vec3(0.0, uTime * 0.35, 0.0));
  displaced += normal * breathe * 0.02;

  float flicker = 0.55 + 0.45 * sin(uTime * 21.0 + aSeed * 93.0);
  float amp = instability * uNoiseAmp * (0.05 + 0.14 * flicker);
  vec3 tear = vec3(
    snoise(position * 3.1 + aSeed * 31.4 + vec3(uTime * 3.2, 0.0, 0.0)),
    snoise(position * 3.1 + aSeed * 47.7 + vec3(0.0, uTime * 2.9, 0.0)),
    snoise(position * 3.1 + aSeed * 63.9 + vec3(0.0, 0.0, uTime * 3.6))
  );
  
  displaced += (normal * 0.65 + tear) * amp;
  displaced *= 1.0 + instability * uNoiseAmp * 0.07 * flicker;

  vec4 mvPosition = vec4(displaced, 1.0);
  vec3 objNormal = normal;
  #ifdef USE_INSTANCING
    mvPosition = instanceMatrix * mvPosition;
    objNormal = mat3(instanceMatrix) * objNormal;
  #endif
  vec4 viewPos = modelViewMatrix * mvPosition;
  vViewDir = normalize(-viewPos.xyz);
  vNormal = normalize(normalMatrix * objNormal);
  gl_Position = projectionMatrix * viewPos;
}
`;

const FRAGMENT_SHADER = `
uniform float uTime;
uniform float uEmissive;
uniform float uFocusArm;

varying vec3 vColor;
varying float vDistance;
varying float vInstability;
varying float vArm;
varying float vEscape;
varying vec3 vNormal;
varying vec3 vViewDir;

void main() {
  vec3 viewDir = normalize(vViewDir);
  vec3 nrm = normalize(vNormal);
  float fresnel = pow(1.0 - clamp(dot(viewDir, nrm), 0.0, 1.0), 2.4);

  float dist01 = smoothstep(0.215, 0.2929, vDistance);
  float dataLuma = mix(0.30, 2.65, pow(dist01, 1.6));

  vec3 col = vColor * dataLuma;

  col += vColor * fresnel * (0.45 + vInstability * 2.4) * 0.55;

  float strobe = 0.5 + 0.5 * sin(uTime * 25.0 + vDistance * 190.0);
  col += vColor * vInstability * strobe * 0.45;

  float isConexus = step(2.5, vArm);
  vec3 emissive = vColor * (0.18 + 1.85 * vInstability) * (1.0 + 1.35 * vEscape * isConexus);
  float flicker = 1.0 + 0.28 * vInstability * sin(uTime * (19.0 + 29.0 * fract(vDistance * 47.13)) + vDistance * 120.0);
  col += emissive * flicker;

  float dim = 1.0;
  if (uFocusArm > -0.5 && abs(vArm - uFocusArm) > 0.5) dim = 0.14;
  col *= dim * uEmissive;

  gl_FragColor = vec4(col, 1.0);
}
`;

// ── R3F SCENE COMPONENTS ─────────────────────────────────────────────────────

function DataOrbs({ scrollRef }: { scrollRef: React.RefObject<number | null> }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!);
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const tmpB = useMemo(() => new THREE.Vector3(), []);
  const posHat = useMemo(() => new THREE.Vector3(), []);
  const swirl = useMemo(() => new THREE.Vector3(), []);
  
  const paidEnv = useRef(0);
  const armLerp = useRef(-1);
  const strengthLerp = useRef(0);
  const smooth = useRef({ p: 0, focus: -1, boost: 0 });

  const { orbs, geometry } = useMemo(() => {
    const rng = mulberry32(0xC0FFEE);
    const _orbs: any[] = [];
    const q = new THREE.Quaternion();
    const R0 = 2.8;

    ARM_ORDER.forEach((arm, armIndex) => {
      const meta = ARM_META[arm];
      const distances = RAW_RUNS[arm];
      const vSem = meta.mean * PHYS.K;
      const vEsc = Math.sqrt((2 * PHYS.GM) / R0);
      const frac = vSem / vEsc;
      const bound = frac < 1;
      const vInf = bound ? 0 : Math.sqrt(vSem * vSem - vEsc * vEsc);

      let minD = Infinity, maxD = -Infinity;
      distances.forEach((d) => { minD = Math.min(minD, d); maxD = Math.max(maxD, d); });

      q.setFromEuler(new THREE.Euler(meta.tilt[0], meta.tilt[1], meta.tilt[2]));
      const u = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
      const v = new THREE.Vector3(0, 0, 1).applyQuaternion(q);
      const n = new THREE.Vector3(0, 1, 0).applyQuaternion(q);

      distances.forEach((d, i) => {
        const radius0 = d * DISTANCE_SCALE;
        const theta0 = (i / distances.length) * Math.PI * 2 + (rng() - 0.5) * 0.22;
        const dir = new THREE.Vector3()
          .addScaledVector(u, Math.cos(theta0))
          .addScaledVector(v, Math.sin(theta0))
          .addScaledVector(n, (rng() - 0.5) * 0.28)
          .normalize();
        
        const z01 = (d - minD) / (maxD - minD);

        _orbs.push({
          armIndex, arm, distance: d, radius0,
          vLaunch: meta.mean * PHYS.K,
          escaped: arm === "CONEXUS",
          scale: (arm === "CONEXUS" ? 0.20 : 0.16) + rng() * 0.055,
          seed: rng() * 100,
          theta0,
          omega: meta.spin * (0.7 + rng() * 0.6),
          u: u.clone(), v: v.clone(), n: n.clone(),
          dir: dir.clone(),
          clusterR: 1.25 + rng() * 2.35,
          pos: dir.clone().multiplyScalar(radius0),
          vel: new THREE.Vector3(),
          rest: dir.clone().multiplyScalar(radius0),
          focus: 1,
          frac, vInf,
          rData: R0 + (d - 0.2325) * 14,
          ignition: 0.06 + 0.34 * (1 - z01) + 0.08 * rng(),
          speedFactor: 0.55 + 0.85 * z01 + 0.25 * rng(),
          departDist: vInf * 1.15 * (0.55 + 0.85 * z01 + 0.25 * rng()),
          strainMax: bound ? Math.pow(frac, 4) * 1.6 : 0,
          yAmp: 0.25 + 0.45 * rng(),
          yPhase: rng() * Math.PI * 2,
        });
      });
    });

    const dist = new Float32Array(_orbs.length);
    const seed = new Float32Array(_orbs.length);
    const col = new Float32Array(_orbs.length * 3);
    const armArr = new Float32Array(_orbs.length);
    const escArr = new Float32Array(_orbs.length);
    const c = new THREE.Color();

    _orbs.forEach((o, i) => {
      dist[i] = o.distance; seed[i] = o.seed; armArr[i] = o.armIndex;
      c.set(ARM_META[o.arm as DataArm].color);
      const j = 0.85 + (o.seed % 1) * 0.3;
      col[i * 3] = c.r * j; col[i * 3 + 1] = c.g * j; col[i * 3 + 2] = c.b * j;
      escArr[i] = Math.min(o.frac, 1.25);
    });

    const g = new THREE.SphereGeometry(1, 24, 24);
    g.setAttribute("aDistance", new THREE.InstancedBufferAttribute(dist, 1));
    g.setAttribute("aSeed", new THREE.InstancedBufferAttribute(seed, 1));
    g.setAttribute("aColor", new THREE.InstancedBufferAttribute(col, 3));
    g.setAttribute("aArm", new THREE.InstancedBufferAttribute(armArr, 1));
    g.setAttribute("aEscape", new THREE.InstancedBufferAttribute(escArr, 1));

    return { orbs: _orbs, geometry: g };
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 }, uEscape: { value: 0 },
    uFocusArm: { value: -1 }, uActiveStrength: { value: 0 },
    uNoiseAmp: { value: 1 }, uEmissive: { value: 1 },
    uFocusDistance: { value: 0.235 },
  }), []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useLayoutEffect(() => {
    if (!meshRef.current) return;
    meshRef.current.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    orbs.forEach((o, i) => {
      dummy.position.copy(o.pos); dummy.scale.setScalar(o.scale);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  }, [orbs, dummy]);

  useFrame((state, rawDt) => {
    const mesh = meshRef.current; const mat = matRef.current;
    if (!mesh || !mat) return;
    const dt = Math.min(rawDt, 1 / 30);
    const t = state.clock.elapsedTime;
    const scroll = scrollRef.current || 0;

    const env = THREE.MathUtils.smoothstep(scroll, 0.10, 0.55);
    const pay = env - paidEnv.current;
    const step = THREE.MathUtils.clamp(pay, -0.045, 0.045);
    paidEnv.current += step;

    const activeArm = useDataVaultStore.getState().activeArm;
    const targetArmIdx = activeArm === "NONE" ? -1 : ARM_INDEX[activeArm];
    armLerp.current = THREE.MathUtils.damp(armLerp.current, targetArmIdx, 5, dt);
    strengthLerp.current = THREE.MathUtils.damp(strengthLerp.current, activeArm === "NONE" ? 0 : 1, 5, dt);

    mat.uniforms.uTime.value = t;
    mat.uniforms.uEscape.value = env;
    mat.uniforms.uFocusArm.value = armLerp.current;
    mat.uniforms.uActiveStrength.value = strengthLerp.current;
    mat.uniforms.uNoiseAmp.value = THREE.MathUtils.damp(mat.uniforms.uNoiseAmp.value, activeArm === "CONEXUS" ? 1.85 : 1.0, 3.5, dt);
    mat.uniforms.uEmissive.value = THREE.MathUtils.damp(mat.uniforms.uEmissive.value, activeArm === "CONEXUS" ? 1.45 : activeArm === "NONE" ? 1.0 : 1.12, 3.5, dt);
    mat.uniforms.uFocusDistance.value = THREE.MathUtils.damp(mat.uniforms.uFocusDistance.value, activeArm === "NONE" ? 0.235 : ARM_META[activeArm as DataArm].mean, 3.5, dt);

    for (let i = 0; i < orbs.length; i++) {
      const o = orbs[i];
      const th = o.theta0 + t * o.omega;
      
      const cp = Math.cos(th), sp = Math.sin(th);
      dummy.position.copy(o.u).multiplyScalar(cp).addScaledVector(o.v, sp).addScaledVector(o.n, Math.sin(t * 0.6 + o.seed * 6.28) * 0.10).normalize();
      if (env < 0.02) o.dir.copy(dummy.position);
      o.rest.copy(dummy.position).multiplyScalar(o.radius0 + Math.sin(t * 0.8 + o.seed * 12.0) * 0.12);

      tmpB.copy(o.rest).sub(o.pos);
      o.vel.addScaledVector(tmpB, PHYS.SPRING * (1 - env) * dt);

      const r = o.pos.length() || 1e-4;
      posHat.copy(o.pos).multiplyScalar(1 / r);
      const r2 = r * r + PHYS.SOFT * PHYS.SOFT;
      const grav = PHYS.GM / (r2 * Math.sqrt(r2));
      o.vel.addScaledVector(o.pos, -grav * dt);

      if (step !== 0) o.vel.addScaledVector(o.dir, o.vLaunch * step);

      if (o.escaped) {
        o.vel.addScaledVector(o.dir, PHYS.EXCESS * env * dt);
        if (r > PHYS.R_EDGE) {
          o.vel.addScaledVector(posHat, (PHYS.R_EDGE - r) * PHYS.RING_K * dt);
          o.vel.multiplyScalar(Math.exp(-1.6 * dt));
        }
      } else if (env > 0.001) {
        tmpB.copy(o.dir).multiplyScalar(o.clusterR).sub(o.pos);
        o.vel.addScaledVector(tmpB, 3.0 * env * dt);
        swirl.set(-posHat.z, 0, posHat.x);
        if (swirl.lengthSq() > 1e-6) swirl.normalize();
        o.vel.addScaledVector(swirl, PHYS.SWIRL * env * dt);
      }

      const drag = o.escaped ? PHYS.DRAG_ESCAPED + (1 - env) * 0.55 : PHYS.DRAG_TRAPPED;
      o.vel.multiplyScalar(Math.exp(-drag * dt));
      o.pos.addScaledVector(o.vel, dt);

      const focusTarget = activeArm === "NONE" ? 1 : o.armIndex === targetArmIdx ? 1.55 : 0.72;
      o.focus = THREE.MathUtils.damp(o.focus, focusTarget, 8, dt);

      dummy.position.copy(o.pos);
      dummy.rotation.set(o.seed, o.seed * 1.7 + t * 0.15, 0); 
      dummy.scale.setScalar(o.scale * o.focus * (o.escaped ? 1.12 : 1));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, orbs.length]} geometry={geometry} frustumCulled={false}>
      <shaderMaterial ref={matRef} vertexShader={VERTEX_SHADER} fragmentShader={FRAGMENT_SHADER} uniforms={uniforms} />
    </instancedMesh>
  );
}

function CameraDrift({ scrollRef }: { scrollRef: React.RefObject<number | null> }) {
  const { camera, pointer } = useThree();
  const shakeAmp = useRef(0);
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));
  
  useFrame((state, dt) => {
    const activeArm = useDataVaultStore.getState().activeArm;
    const t = state.clock.elapsedTime;
    const scroll = scrollRef.current || 0;
    const env = THREE.MathUtils.smoothstep(scroll, 0.1, 0.55);
    const dist = 25 + env * 7.5 + Math.sin(t * 0.13) * 0.6;
    const orbit = t * 0.028 + scroll * 0.6; 
    
    const px = pointer.x * 1.4;
    const py = pointer.y * 0.9;
    
    shakeAmp.current = THREE.MathUtils.damp(shakeAmp.current, activeArm === "CONEXUS" ? 0.09 : 0, 3.5, dt);
    const sx = (Math.sin(t * 31.7) + Math.sin(t * 47.3)) * 0.5 * shakeAmp.current;
    const sy = (Math.sin(t * 39.1) + Math.sin(t * 53.7)) * 0.5 * shakeAmp.current;
    
    camera.position.set(
      Math.sin(orbit) * dist + px + sx,
      3.2 + py + sy + Math.sin(t * 0.17) * 0.3,
      Math.cos(orbit) * dist
    );
    lookTarget.current.set(0, env * 0.6, 0);
    camera.lookAt(lookTarget.current);
  });
  return null;
}

const BLOOM_BY_ARM: Record<ArmIdentifier, number> = { NONE: 0.55, CONTROL: 0.6, NEUTRAL: 0.55, TOKEN_ONLY: 0.95, CONEXUS: 2.8 };

function CinematicLens({ scrollRef }: { scrollRef: React.RefObject<number | null> }) {
  const bloomRef = useRef<BloomEffect>(null!);
  const caRef = useRef<ChromaticAberrationEffect>(null!);

  useFrame((_, dt) => {
    const activeArm = useDataVaultStore.getState().activeArm;
    const scroll = scrollRef.current || 0;
    const env = THREE.MathUtils.smoothstep(scroll, 0.1, 0.6);
    
    if (bloomRef.current) {
      bloomRef.current.intensity = THREE.MathUtils.damp(bloomRef.current.intensity, BLOOM_BY_ARM[activeArm], 3, dt);
    }
    if (caRef.current) {
      const conexus = activeArm === 'CONEXUS' ? 0.0016 : 0;
      const targetX = 0.0004 + env * 0.0012 + conexus;
      const targetY = targetX * 1.35;
      caRef.current.offset.x = THREE.MathUtils.damp(caRef.current.offset.x, targetX, 3, dt);
      caRef.current.offset.y = THREE.MathUtils.damp(caRef.current.offset.y, targetY, 3, dt);
    }
  });

  return (
    <EffectComposer multisampling={0}>
      <Bloom ref={bloomRef} mipmapBlur intensity={0.55} luminanceThreshold={0.55} luminanceSmoothing={0.25} radius={0.8} />
      <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
      <ChromaticAberration ref={caRef} offset={new THREE.Vector2(0.0004, 0.0006)} radialModulation={false} modulationOffset={0} />
      <Vignette offset={0.16} darkness={0.85} blendFunction={BlendFunction.NORMAL} />
    </EffectComposer>
  );
}

// ── MAIN CANVAS COMPONENT ────────────────────────────────────────────────────

export default function CausalDataCloudCanvas() {
  const scrollRef = useRef<number>(0);

  useEffect(() => {
    let raf = 0;
    const read = () => {
      const el = document.getElementById("data-vault-scene");
      let p: number;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        p = total > 0 ? THREE.MathUtils.clamp(-rect.top / total, 0, 1) : 0;
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        p = total > 0 ? THREE.MathUtils.clamp(window.scrollY / total, 0, 1) : 0;
      }
      scrollRef.current = p;
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <AudioDriver />
      <div className="absolute inset-0 z-0 bg-[#020204]" aria-hidden="true">
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: false, powerPreference: "high-performance", alpha: false, stencil: false, depth: true }}
          camera={{ position: [0, 3.2, 25], fov: 42, near: 0.1, far: 220 }}
          performance={{ min: 0.5 }}
        >
          <color attach="background" args={["#020204"]} />
          <CameraDrift scrollRef={scrollRef} />
          <DataOrbs scrollRef={scrollRef} />
          <AdaptiveDpr />
          <CinematicLens scrollRef={scrollRef} />
          <Sparkles count={140} scale={[46, 30, 46]} size={1.6} speed={0.22} opacity={0.32} color="#9fb4c8" position={[0, 2, 0]} />
        </Canvas>
      </div>
    </>
  );
}

```

### **FILE 3:** components/scenes/Scene3.tsx

TypeScript

```

"use client";

import { useEffect, useRef, useState } from "react";
import { useDataVaultStore, type ArmIdentifier } from "../../store/useDataVaultStore";
import CausalDataCloudCanvas from "../CausalDataCloudCanvas";

/* 
  Tailwind v4 Setup Note: Ensure globals.css has these theme variables registered.
  @theme { 
    --font-editorial: "Fraunces", "Playfair Display", Georgia, serif; 
    --font-mono: "JetBrains Mono", ui-monospace, monospace; 
  } 
*/

const ARMS: Array<{ id: Exclude<ArmIdentifier, "NONE">; index: string; name: string; value: string; sigma: string; note: string; conexus?: boolean }> = [
  { id: "CONTROL", index: "01", name: "CONTROL", value: "0.2466", sigma: "0.0126", note: "SINGLE-TURN BASELINE" },
  { id: "NEUTRAL", index: "02", name: "NEUTRAL", value: "0.2219", sigma: "0.0221", note: "ANALYTICAL MULTI-TURN PROMPT" },
  { id: "TOKEN_ONLY", index: "03", name: "TOKEN-ONLY", value: "0.2258", sigma: "0.0194", note: "EMOJI EXPOSURE WITHOUT THE ARCHITECTURE" },
  { id: "CONEXUS", index: "04", name: "CONEXUS", value: "0.2929", sigma: "0.0147", note: "COMPLETE CONTRADICTION-HOLDING SEQUENCE", conexus: true },
];

function ScrollTelemetry() {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const read = () => {
      const el = document.getElementById("data-vault-scene");
      let p = 0;
      if (el) {
        const rect = el.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      } else {
        const total = document.documentElement.scrollHeight - window.innerHeight;
        p = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
      }
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const stage =
    progress < 0.12
      ? "VAULT SEALED — 200 RUNS IN ORBIT"
      : progress < 0.45
        ? "IGNITION — Δv = μ · K VS ESCAPE VELOCITY √(2GM / r₀)"
        : progress < 0.8
          ? "SUB-ESCAPE ARMS COLLAPSING — CONEXUS BREAKING ORBIT"
          : "ARCHITECTURE CONFIRMED — d = +3.91 vs TOKEN-ONLY";

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-4 z-20 flex items-center justify-between px-6 font-mono text-[0.55rem] tracking-[0.25em] text-white/30 uppercase md:px-12 xl:px-16">
      <span>{stage}</span>
      <span className={`transition-opacity duration-700 ${progress > 0.15 ? "opacity-0" : "opacity-100"}`}>
        Scroll — initiate the isolation sequence ↓
      </span>
    </div>
  );
}

export default function Scene3() {
  const setActiveArm = useDataVaultStore((s) => s.setActiveArm);
  const resetActiveArm = useDataVaultStore((s) => s.resetActiveArm);
  const activeArm = useDataVaultStore((s) => s.activeArm);
  
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "160px 0px" });
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section id="data-vault-scene" ref={sectionRef} data-vault-section className="relative h-[300vh] w-full bg-black text-white">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        <div className={`fixed inset-0 -z-10 pointer-events-none transition-opacity duration-1000 ${inView ? "opacity-100" : "opacity-0"}`}>
          <CausalDataCloudCanvas />
        </div>

        <div className="relative z-10 pointer-events-none flex h-full flex-col px-6 md:px-12 xl:px-16">
          <header className="pt-16 md:pt-24">
            <p className="font-mono text-[0.6rem] tracking-[0.35em] text-white/30 uppercase">03 — Architecture Isolation</p>
            <h2 className="mt-3 font-editorial text-[clamp(2.5rem,6vw,5rem)] text-white tracking-tight leading-[0.95]">
              Primary Causal Study
            </h2>
            <p className="mt-4 max-w-3xl font-mono text-[0.65rem] tracking-widest text-white/50 uppercase">
              Strong results. Explicit limits. Four controlled conditions. Two hundred independent runs.
            </p>
          </header>

          <div className="mt-auto pb-8 md:pb-14">
            <p className="font-mono text-[0.6rem] tracking-[0.25em] text-white/35 uppercase mb-4">
              Hover an arm to isolate its runs — sound on
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 divide-x divide-white/10 border-y border-white/10 py-12 pointer-events-auto max-md:py-5">
              {ARMS.map((arm) => {
                const isActive = activeArm === arm.id;
                const isDimmed = activeArm !== "NONE" && !isActive;
                return (
                  <button
                    key={arm.id}
                    type="button"
                    onMouseEnter={() => setActiveArm(arm.id)}
                    onMouseLeave={resetActiveArm}
                    onFocus={() => setActiveArm(arm.id)}
                    onBlur={resetActiveArm}
                    aria-label={`${arm.name} — mean semantic distance ${arm.value}`}
                    className={`group relative cursor-crosshair py-4 text-left outline-none transition-all duration-500 md:px-6 md:py-2 md:first:pl-0 ${isDimmed ? "opacity-30" : "opacity-100"}`}
                  >
                    <span className="font-mono text-[0.55rem] tracking-[0.3em] text-white/30">{arm.index}</span>
                    <p className={`mt-2 font-mono text-[0.7rem] tracking-[0.25em] ${arm.conexus ? "italic text-[#ff5500]" : "text-white/80"}`}>{arm.name}</p>
                    <p className={`mt-3 font-editorial text-[clamp(1.9rem,3vw,2.9rem)] leading-none tracking-tight ${arm.conexus ? "italic text-[#ff5500]" : "text-white"}`}>{arm.value}</p>
                    <p className="mt-3 font-mono text-[0.58rem] leading-relaxed tracking-wider text-white/40 uppercase">{arm.note}</p>
                    <p className="mt-2 font-mono text-[0.55rem] tracking-wider text-white/25">μ {arm.value} · σ {arm.sigma} · n 50</p>
                    <span className={`absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${arm.conexus ? "bg-[#ff5500]" : "bg-white/40"} ${isActive ? "scale-x-100" : ""}`} />
                  </button>
                );
              })}
            </div>

            <p className="mt-5 hidden font-mono text-[0.58rem] leading-relaxed tracking-wider text-white/35 uppercase sm:block">
              Verdict — <span className="italic text-[#ff5500]/80">Architecture confirmed.</span> Token exposure alone is statistically indistinguishable from neutral (d +0.1835, p 0.361). Emojis do not drive the expansion — the paradox-holding architecture does.
            </p>
          </div>
        </div>

        <ScrollTelemetry />
      </div>
    </section>
  );
}

```

Throw these into your local environment and spin it up. Let me know the second you hear that 40Hz hum kick in\!  
