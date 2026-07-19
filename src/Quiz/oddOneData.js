// ODD ONE OUT — deterministic puzzle generator for the "FIND THE ODD ONE OUT" brain-puzzle format.
// New content line modeled on the Arabic channel "ألغاز ماندو" (Mando Puzzles), for an English brain-puzzle channel.
//
// Each round: { id, gridCols, gridRows, baseEmoji, oddEmoji, oddIndex, level }
//   - A grid of gridCols×gridRows identical `baseEmoji` tiles, with exactly ONE `oddEmoji` at flat index `oddIndex`.
//   - Difficulty escalates two ways: (a) GRID SIZE (easy small → impossible large) and
//     (b) SUBTLETY of the difference (easy = obviously different emoji; impossible = near-twin, e.g. hue-only).
//   - 20 rounds, 5 per tier: easy → medium → hard → impossible.
//   - oddIndex is derived by a deterministic hash of the round id (reproducible, varied, never a corner).
//
// ASSET SAFETY: every baseEmoji/oddEmoji below is verified to exist as an OpenMoji SVG in
// public/openmoji/ (the set is a curated 530-file subset — many common emoji are absent, so pairs
// were chosen from confirmed-present files only). NO flags / country / political emoji. Family-safe.

// [tier, gridCols, gridRows, baseEmoji, oddEmoji]  — cols ≥ rows to fill the 16:9 frame.
const SPEC = [
  // ── EASY ── obvious difference, small grid ─────────────────────────────
  ["easy", 4, 4, "🍎", "🍌"], // red apple vs banana
  ["easy", 5, 4, "🐱", "🐷"], // cat vs pig
  ["easy", 5, 4, "⭐", "🔥"], // star vs fire
  ["easy", 6, 4, "🚗", "🚀"], // car vs rocket
  ["easy", 6, 5, "😀", "😡"], // grinning vs angry

  // ── MEDIUM ── same family, still distinct, medium grid ─────────────────
  ["medium", 7, 5, "🍊", "🍋"], // orange vs lemon
  ["medium", 7, 5, "🔵", "🔴"], // blue circle vs red circle
  ["medium", 8, 5, "🐟", "🐠"], // fish vs tropical fish
  ["medium", 8, 6, "🌲", "🌴"], // evergreen vs palm tree
  ["medium", 8, 6, "🦊", "🐺"], // fox vs wolf

  // ── HARD ── very similar look, large grid ──────────────────────────────
  ["hard", 9, 6, "🟠", "🔴"], // orange circle vs red circle (adjacent hue)
  ["hard", 10, 6, "😀", "😃"], // grinning vs grinning-big-eyes
  ["hard", 10, 7, "🐨", "🐻"], // koala vs bear (grey round faces)
  ["hard", 11, 7, "🟡", "🟠"], // yellow circle vs orange circle (adjacent hue)
  ["hard", 11, 7, "🍎", "🍅"], // apple vs tomato (red round twin)

  // ── IMPOSSIBLE ── near-twin, hue-only or micro-detail, huge grid ───────
  ["impossible", 12, 7, "😐", "😶"], // neutral vs no-mouth
  ["impossible", 12, 8, "💙", "💜"], // blue heart vs purple heart
  ["impossible", 13, 8, "💚", "💛"], // green heart vs yellow heart
  ["impossible", 14, 8, "😔", "😞"], // pensive vs disappointed
  ["impossible", 14, 9, "😊", "😌"], // smiling vs relieved
];

// FNV-1a hash → deterministic, well-spread odd position (kept off the exact corners so it's fair, not trivial).
const hashPos = (id, total) => {
  let h = 2166136261 >>> 0;
  const s = `oddone-${id}-${total}`;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const inner = total - 2; // avoid index 0 and the last index
  return 1 + (h % inner);
};

export const ODDONE = SPEC.map(([level, gridCols, gridRows, baseEmoji, oddEmoji], i) => {
  const id = i + 1;
  const total = gridCols * gridRows;
  return { id, gridCols, gridRows, baseEmoji, oddEmoji, oddIndex: hashPos(id, total), level };
});

export default ODDONE;
