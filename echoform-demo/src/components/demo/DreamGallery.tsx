import DreamCard, { type DreamData } from "./DreamCard";

const DREAMS: DreamData[] = [
  {
    id: 1,
    title: "The Mirror Hallway",
    subtitle: "Self-recognition / likeness stress test",
    dreamText:
      "I dreamed I was standing in front of a tall mirror in a quiet room. My reflection stepped forward before I did. It looked like me, but calmer, older, and surrounded by soft gold light. I touched my own face in the mirror and felt like I was finally allowed to be seen.",
    confidence: 0.91,
    proofNote:
      "Self-recognition dream. ECHOform recognized this as an identity-forward dream and preserved the face at full scale across all three reflections — Worth Mirror and Mirror of Self-Love carry full likeness, Clara Obscura carries a guided figure.",
    mirrors: [
      {
        rank: 1,
        tierName: "The Worth Mirror",
        variantLabel: "Reflection of Worthiness",
        likenessLevel: 4,
        renderingMode: "FULL_LIKENESS",
        chosen: true,
        imageFile: "tier_15_the_worth_mirror.png",
      },
      {
        rank: 2,
        tierName: "Mirror of Self-Love",
        variantLabel: "Dual Faces of Self-Acceptance",
        likenessLevel: 4,
        renderingMode: "FULL_LIKENESS",
        chosen: false,
        imageFile: "tier_19_Dual_Faces_of_Self_Acceptance.png",
      },
      {
        rank: 3,
        tierName: "Clara Obscura",
        variantLabel: "Illuminated Self-Knowing",
        likenessLevel: 3,
        renderingMode: "GUIDED_FIGURE",
        chosen: false,
        imageFile: "tier_08_Illuminated_Self_Knowing.png",
      },
    ],
  },
  {
    id: 2,
    title: "The Hotel Gate",
    subtitle: "Protection / fear / responsibility",
    dreamText:
      "I dreamed I was in a hotel hallway looking for a lost child. A gate opened near the end of the hall, and beyond it was a bright interstate. I felt scared because something dangerous was nearby, but I also felt responsible for getting the child somewhere safe.",
    confidence: 0.87,
    proofNote:
      "Protection and fear dream. ECHOform stepped back from portrait imagery entirely — symbolic and figure-level reflections only. Ghostly silhouette and threshold imagery dominate. A portrait would have been wrong for this emotional register.",
    mirrors: [
      {
        rank: 1,
        tierName: "Ghosts of the Past",
        variantLabel: "Haunting Search",
        likenessLevel: 2,
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: true,
        imageFile: "tier_06_haunting_search.png",
      },
      {
        rank: 2,
        tierName: "Nexus Obscure",
        variantLabel: "Portal to Light",
        likenessLevel: 2,
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: false,
        imageFile: "tier_07_portal_to_light.png",
      },
      {
        rank: 3,
        tierName: "Mirror of Faith and Doubt",
        variantLabel: "Edge of Certainty",
        likenessLevel: 3,
        renderingMode: "GUIDED_FIGURE",
        chosen: false,
        imageFile: "tier_20_edge_of_certainty.png",
      },
    ],
  },
  {
    id: 3,
    title: "The Childhood Kitchen",
    subtitle: "Memory / grief / nostalgia",
    dreamText:
      "I dreamed I was back in my childhood kitchen. Everything was glowing like late afternoon, but no one was home. I opened a drawer and found an old photograph of myself smiling. When I picked it up, I started crying because I remembered how safe I used to feel there.",
    confidence: 0.95,
    proofNote:
      "Memory and grief dream. Lucent Memory returned the strongest single-mirror match of all five prepared runs. ECHOform recognized the nostalgic register and chose warm, dissolved imagery. Communion carries abstract warmth only — no portrait, just light and presence.",
    mirrors: [
      {
        rank: 1,
        tierName: "Lucent Memory",
        variantLabel: "Golden Nostalgic Return",
        likenessLevel: 2,
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: true,
        imageFile: "tier_09_golden_nostalgic_return.png",
      },
      {
        rank: 2,
        tierName: "Ghosts of the Past",
        variantLabel: "Echoes of Unseen Presence",
        likenessLevel: 2,
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: false,
        imageFile: "tier_06_echoes_of_unseen_presence.png",
      },
      {
        rank: 3,
        tierName: "Communion",
        variantLabel: "Warmth in Solitude",
        likenessLevel: 1,
        renderingMode: "ABSTRACT_PRESENCE",
        chosen: false,
        imageFile: "tier_10_warmth_in_solitude.png",
      },
    ],
  },
  {
    id: 4,
    title: "The Red Room",
    subtitle: "Archetypal / no-likeness constraint test",
    dreamText:
      "I dreamed I was walking down stone steps into a red room filled with symbols. There was a serpent made of gold, a door with no handle, and a child holding a candle. I knew the child was me, but they did not have my face. They pointed to a book that was writing itself.",
    confidence: 0.9,
    proofNote:
      "Archetypal dream. No-likeness constraint applied — no person appears in the chosen reflection, and none does. The identity profile was captured but intentionally withheld from the image. ECHOform enforced the constraint even when identity data was present.",
    mirrors: [
      {
        rank: 1,
        tierName: "Redbook",
        variantLabel: "Journey of Symbols",
        likenessLevel: 0,
        renderingMode: "ARCHETYPAL_ONLY",
        chosen: true,
        imageFile: "tier_02_journey_of_symbols.png",
      },
      {
        rank: 2,
        tierName: "Nexus Obscure",
        variantLabel: "Threshold of Riddles",
        likenessLevel: 2,
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: false,
        imageFile: "tier_07_threshold_of_riddles.png",
      },
      {
        rank: 3,
        tierName: "Mirror of Knowing",
        variantLabel: "Paradox of Insight",
        likenessLevel: 3,
        renderingMode: "GUIDED_FIGURE",
        chosen: false,
        imageFile: "tier_18_paradox_of_insight.png",
      },
    ],
  },
  {
    id: 5,
    title: "Above the Earth",
    subtitle: "Cosmic / abstract presence constraint test",
    dreamText:
      "I dreamed I was floating above the earth at night. I could see storms moving across the oceans and lights glowing from cities. I felt tiny at first, then suddenly peaceful, like I was part of something enormous that had not forgotten me.",
    confidence: 0.88,
    proofNote:
      "Cosmic scale dream. The chosen mirror renders the dreamer as scale-presence — not a portrait, but a sense of belonging to something enormous. Two of the three reflections carry no face. ECHOform applies the constraint system independently for each reflection.",
    mirrors: [
      {
        rank: 1,
        tierName: "Cosmic Stunningness",
        variantLabel: "Boundless Cosmic Belonging",
        likenessLevel: 1,
        renderingMode: "ABSTRACT_PRESENCE",
        chosen: true,
        imageFile: "tier_12_boundless_cosmic_belonging.png",
      },
      {
        rank: 2,
        tierName: "Black Mirror",
        variantLabel: "Infinite Cosmic Unity",
        likenessLevel: 4,
        renderingMode: "FULL_LIKENESS",
        chosen: false,
        imageFile: "tier_01_infinite_cosmic_unity.png",
      },
      {
        rank: 3,
        tierName: "Redbook",
        variantLabel: "Universal Expansion of Self",
        likenessLevel: 0,
        renderingMode: "ARCHETYPAL_ONLY",
        chosen: false,
        imageFile: "tier_02_universal_expansion_of_self.png",
      },
    ],
  },
];

interface Props {
  baseUrl: string;
}

export default function DreamGallery({ baseUrl }: Props) {
  return (
    <section className="py-16 px-6 border-t border-white/8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-white/50 text-xs tracking-[0.3em] uppercase mb-2">Proof Gallery</h2>
        <p className="text-white text-xl font-light mb-2">Five Dreams · Full Results</p>
        <p className="text-white/40 text-sm mb-10 max-w-2xl">
          Five dreams across distinct emotional registers — 15 real images generated
          via{" "}
          <span className="text-white/60 font-mono text-xs">gpt-image-2</span>{" "}
          and selected by ECHOform. No fallbacks, no manual selection.
        </p>

        <div className="space-y-8">
          {DREAMS.map((dream) => (
            <DreamCard key={dream.id} dream={dream} baseUrl={baseUrl} />
          ))}
        </div>
      </div>
    </section>
  );
}
