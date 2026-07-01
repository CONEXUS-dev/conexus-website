export const SAMPLE_IDENTITY = {
  presentation: "feminine",
  skinTone: "fair",
  hairColor: "Blonde",
  hairStyle: "medium",
  bodyFrame: "petite",
  facialHair: "none",
  glasses: false,
  ageAppearance: "current",
  source: "demo_sample",
  photoProvided: false,
};

export interface DemoMirror {
  rank: 1 | 2 | 3;
  tierNumber: number;
  tierName: string;
  variantLabel: string;
  likenessLevel: 0 | 1 | 2 | 3 | 4;
  likenessLabel: string;
  renderingMode: string;
  chosen: boolean;
  imageFile: string;
  reflectionNote: string;
}

export interface DemoDream {
  id: number;
  title: string;
  emotionalLabel: string;
  abbreviatedText: string;
  fullText: string;
  testProof: string;
  confidence: number;
  chosenMirrorRank: 1 | 2 | 3;
  mirrors: DemoMirror[];
}

export const DEMO_DREAMS: DemoDream[] = [
  {
    id: 1,
    title: "The Mirror Hallway",
    emotionalLabel: "Self-recognition · Identity",
    abbreviatedText:
      "Standing before a tall mirror — my reflection stepped forward before I did, calmer, older, surrounded by soft gold light.",
    fullText:
      "I dreamed I was standing in front of a tall mirror in a quiet room. My reflection stepped forward before I did. It looked like me, but calmer, older, and surrounded by soft gold light. I touched my own face in the mirror and felt like I was finally allowed to be seen.",
    testProof:
      "Self-recognition dream — the mirror selected three reflections that preserve the sample likeness at full scale. This tests how ECHOform handles identity-forward dreams where the face matters.",
    confidence: 0.91,
    chosenMirrorRank: 1,
    mirrors: [
      {
        rank: 1,
        tierNumber: 15,
        tierName: "The Worth Mirror",
        variantLabel: "Reflection of Worthiness",
        likenessLevel: 4,
        likenessLabel: "Full Likeness",
        renderingMode: "FULL_LIKENESS",
        chosen: true,
        imageFile: "tier_15_the_worth_mirror.png",
        reflectionNote:
          "The Worth Mirror reveals the self as it deserves to be seen — not as others have named it, but as it has always been beneath the weight of being perceived.",
      },
      {
        rank: 2,
        tierNumber: 19,
        tierName: "Mirror of Self-Love",
        variantLabel: "Dual Faces of Self-Acceptance",
        likenessLevel: 4,
        likenessLabel: "Full Likeness",
        renderingMode: "FULL_LIKENESS",
        chosen: false,
        imageFile: "tier_19_Dual_Faces_of_Self_Acceptance.png",
        reflectionNote:
          "Two selves meet in the glass — the one you show and the one you are becoming. Neither wrong.",
      },
      {
        rank: 3,
        tierNumber: 8,
        tierName: "Clara Obscura",
        variantLabel: "Illuminated Self-Knowing",
        likenessLevel: 3,
        likenessLabel: "Guided Figure",
        renderingMode: "GUIDED_FIGURE",
        chosen: false,
        imageFile: "tier_08_Illuminated_Self_Knowing.png",
        reflectionNote:
          "Light finds what the eye cannot — the shape of knowing that has no name yet.",
      },
    ],
  },
  {
    id: 2,
    title: "The Hotel Gate",
    emotionalLabel: "Protection · Fear · Responsibility",
    abbreviatedText:
      "A lost child near a dangerous gate — I felt scared and responsible for keeping her safe.",
    fullText:
      "I dreamed I was in a hotel hallway looking for a lost child. A gate opened near the end of the hall, and beyond it was a bright interstate. I felt scared because something dangerous was nearby, but I also felt responsible for getting the child somewhere safe.",
    testProof:
      "Protection and fear dream — the mirror stepped back from portrait-scale imagery and chose symbolic, figure-level reflections instead. This tests whether ECHOform reads emotional register, not just content.",
    confidence: 0.87,
    chosenMirrorRank: 1,
    mirrors: [
      {
        rank: 1,
        tierNumber: 6,
        tierName: "Ghosts of the Past",
        variantLabel: "Haunting Search",
        likenessLevel: 2,
        likenessLabel: "Symbolic Figure",
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: true,
        imageFile: "tier_06_haunting_search.png",
        reflectionNote:
          "Something watches from what has already passed. The search is not for the child — it is for the part of you that still feels responsible for everyone.",
      },
      {
        rank: 2,
        tierNumber: 7,
        tierName: "Nexus Obscure",
        variantLabel: "Portal to Light",
        likenessLevel: 2,
        likenessLabel: "Symbolic Figure",
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: false,
        imageFile: "tier_07_portal_to_light.png",
        reflectionNote:
          "The threshold is not a danger — it is the place where fear becomes the form of care.",
      },
      {
        rank: 3,
        tierNumber: 20,
        tierName: "Mirror of Faith and Doubt",
        variantLabel: "Edge of Certainty",
        likenessLevel: 3,
        likenessLabel: "Guided Figure",
        renderingMode: "GUIDED_FIGURE",
        chosen: false,
        imageFile: "tier_20_edge_of_certainty.png",
        reflectionNote:
          "Standing at the edge of what you cannot control — the mirror that knows you have always tried to be enough.",
      },
    ],
  },
  {
    id: 3,
    title: "The Childhood Kitchen",
    emotionalLabel: "Memory · Grief · Nostalgia",
    abbreviatedText:
      "Back in my childhood kitchen — everything glowing, no one home, a photograph that made me cry.",
    fullText:
      "I dreamed I was back in my childhood kitchen. Everything was glowing like late afternoon, but no one was home. I opened a drawer and found an old photograph of myself smiling. When I picked it up, I started crying because I remembered how safe I used to feel there.",
    testProof:
      "Memory and grief dream — the mirror returned its strongest single match across all five prepared dreams. Warm, dissolved imagery throughout. No portrait, just light and presence.",
    confidence: 0.95,
    chosenMirrorRank: 1,
    mirrors: [
      {
        rank: 1,
        tierNumber: 9,
        tierName: "Lucent Memory",
        variantLabel: "Golden Nostalgic Return",
        likenessLevel: 2,
        likenessLabel: "Symbolic Figure",
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: true,
        imageFile: "tier_09_golden_nostalgic_return.png",
        reflectionNote:
          "Memory softens into light here. The kitchen is not a place — it is the feeling of being held before you learned to need anything.",
      },
      {
        rank: 2,
        tierNumber: 6,
        tierName: "Ghosts of the Past",
        variantLabel: "Echoes of Unseen Presence",
        likenessLevel: 2,
        likenessLabel: "Symbolic Figure",
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: false,
        imageFile: "tier_06_echoes_of_unseen_presence.png",
        reflectionNote:
          "The empty room is not empty — it is full of everything that once moved through it.",
      },
      {
        rank: 3,
        tierNumber: 10,
        tierName: "Communion",
        variantLabel: "Warmth in Solitude",
        likenessLevel: 1,
        likenessLabel: "Abstract Presence",
        renderingMode: "ABSTRACT_PRESENCE",
        chosen: false,
        imageFile: "tier_10_warmth_in_solitude.png",
        reflectionNote:
          "Warmth without a body. The feeling of being safe, given form.",
      },
    ],
  },
  {
    id: 4,
    title: "The Red Room",
    emotionalLabel: "Archetypal · Symbolic · No-Likeness Gate",
    abbreviatedText:
      "Stone steps into a red room — a serpent of gold, a door with no handle, a book writing itself.",
    fullText:
      "I dreamed I was walking down stone steps into a red room filled with symbols. There was a serpent made of gold, a door with no handle, and a child holding a candle. I knew the child was me, but they did not have my face. They pointed to a book that was writing itself.",
    testProof:
      "Archetypal dream — the mirror withheld the likeness entirely. The chosen reflection contains no person at all, only symbol and form. This tests the no-likeness constraint.",
    confidence: 0.9,
    chosenMirrorRank: 1,
    mirrors: [
      {
        rank: 1,
        tierNumber: 2,
        tierName: "Redbook",
        variantLabel: "Journey of Symbols",
        likenessLevel: 0,
        likenessLabel: "Archetypal Only",
        renderingMode: "ARCHETYPAL_ONLY",
        chosen: true,
        imageFile: "tier_02_journey_of_symbols.png",
        reflectionNote:
          "The Redbook speaks in symbols only. No face, no form — only the language the dream chose before it became yours.",
      },
      {
        rank: 2,
        tierNumber: 7,
        tierName: "Nexus Obscure",
        variantLabel: "Threshold of Riddles",
        likenessLevel: 2,
        likenessLabel: "Symbolic Figure",
        renderingMode: "SYMBOLIC_FIGURE",
        chosen: false,
        imageFile: "tier_07_threshold_of_riddles.png",
        reflectionNote:
          "A door without a handle is not locked — it opens from the other side.",
      },
      {
        rank: 3,
        tierNumber: 18,
        tierName: "Mirror of Knowing",
        variantLabel: "Paradox of Insight",
        likenessLevel: 3,
        likenessLabel: "Guided Figure",
        renderingMode: "GUIDED_FIGURE",
        chosen: false,
        imageFile: "tier_18_paradox_of_insight.png",
        reflectionNote:
          "The book writes itself because the knowing was always already there.",
      },
    ],
  },
  {
    id: 5,
    title: "Above the Earth",
    emotionalLabel: "Cosmic · Abstract · Scale",
    abbreviatedText:
      "Floating above the earth at night — tiny, then suddenly peaceful, part of something enormous.",
    fullText:
      "I dreamed I was floating above the earth at night. I could see storms moving across the oceans and lights glowing from cities. I felt tiny at first, then suddenly peaceful, like I was part of something enormous that had not forgotten me.",
    testProof:
      "Cosmic scale dream — the mirror rendered the dreamer as scale-presence, not portrait. Two of the three reflections have no face. This tests how ECHOform handles dreams that move beyond the personal.",
    confidence: 0.88,
    chosenMirrorRank: 1,
    mirrors: [
      {
        rank: 1,
        tierNumber: 12,
        tierName: "Cosmic Stunningness",
        variantLabel: "Boundless Cosmic Belonging",
        likenessLevel: 1,
        likenessLabel: "Abstract Presence",
        renderingMode: "ABSTRACT_PRESENCE",
        chosen: true,
        imageFile: "tier_12_boundless_cosmic_belonging.png",
        reflectionNote:
          "The dream knew what smallness actually is: not a diminishment, but the beginning of scale. The enormous thing has not forgotten you.",
      },
      {
        rank: 2,
        tierNumber: 1,
        tierName: "Black Mirror",
        variantLabel: "Infinite Cosmic Unity",
        likenessLevel: 4,
        likenessLabel: "Full Likeness",
        renderingMode: "FULL_LIKENESS",
        chosen: false,
        imageFile: "tier_01_infinite_cosmic_unity.png",
        reflectionNote:
          "The void reflects you at full scale — not smaller for the distance.",
      },
      {
        rank: 3,
        tierNumber: 2,
        tierName: "Redbook",
        variantLabel: "Universal Expansion of Self",
        likenessLevel: 0,
        likenessLabel: "Archetypal Only",
        renderingMode: "ARCHETYPAL_ONLY",
        chosen: false,
        imageFile: "tier_02_universal_expansion_of_self.png",
        reflectionNote:
          "Symbols expand where the self cannot. The cosmos writes its own Redbook.",
      },
    ],
  },
];
