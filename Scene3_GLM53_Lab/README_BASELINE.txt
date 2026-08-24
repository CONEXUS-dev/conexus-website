SCENE 3 — GLM-5.3 GREENFIELD LAB BASELINE
=========================================

Purpose
-------
This folder preserves the GLM-5.3 greenfield Scene 3 implementation separately
from Jem's existing Scene 3. It is intended for isolated compile/browser testing
before any replacement decision.

Runtime files
-------------
data/scene3ValidationData.ts
store/useDataVaultStore.ts
components/CausalDataCloudCanvas.tsx
components/scenes/Scene3.tsx

Preservation notes
------------------
- CausalDataCloudCanvas.tsx is the exact concatenation of GLM Stage 1 Chunk A,
  Chunk B, and Chunk C, with only separator newlines inserted between chunks.
- Scene3.tsx is preserved exactly from the GLM Stage 3 output.
- useDataVaultStore.ts is preserved exactly from the GLM Stage 2 output shown in chat.
- scene3ValidationData.ts is the canonical externalized 200-run data module prepared
  for the greenfield build.
- _source_chunks/ contains the raw Stage 1 chunks and raw Stage 3 output for forensic
  comparison. Do not edit those source snapshots.
- No fixes or visual tuning have been applied to this baseline package yet.

Next step
---------
Integrate this folder through a separate development route (for example /scene3-glm)
without modifying Jem's current Scene 3. Compile/typecheck first, then repair only
specific defects found in the preserved baseline.
