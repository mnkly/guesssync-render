// E117 «Guess the US State on the Map» — GuessSync · 50 US states · absolute difficulty by how recognizable
// the state's POSITION/SHAPE is when highlighted on the full US map (easy = huge/iconic-shape/famous states →
// impossible = tiny/plain-rectangle/easy-to-confuse-with-a-neighbor states). US edition of the proven E91
// "Guess the Country on the Map" mechanic. image: usstates/<slug>.svg (base US map highlight).
// Source: Wikimedia Commons "Blank US Map, striped.svg" (Lokal_Profil, CC BY-SA 2.5) — see
// public/usstates/ATTRIBUTIONS-e-usstates.txt. 50 items (not 100) — engine is item-count agnostic.
export const US_STATES = [
  // ===== EASY (13) — huge / iconic shape or position, instantly recognizable when highlighted =====
  { slug: "california", name: "California", level: "easy" },
  { slug: "texas", name: "Texas", level: "easy" },
  { slug: "florida", name: "Florida", level: "easy" },
  { slug: "alaska", name: "Alaska", level: "easy" },
  { slug: "hawaii", name: "Hawaii", level: "easy" },
  { slug: "new-york", name: "New York", level: "easy" },
  { slug: "michigan", name: "Michigan", level: "easy" },
  { slug: "louisiana", name: "Louisiana", level: "easy" },
  { slug: "montana", name: "Montana", level: "easy" },
  { slug: "maine", name: "Maine", level: "easy" },
  { slug: "arizona", name: "Arizona", level: "easy" },
  { slug: "washington", name: "Washington", level: "easy" },
  { slug: "colorado", name: "Colorado", level: "easy" },
  // ===== MEDIUM (13) — familiar states, need a moment to place on the map =====
  { slug: "illinois", name: "Illinois", level: "medium" },
  { slug: "nevada", name: "Nevada", level: "medium" },
  { slug: "oregon", name: "Oregon", level: "medium" },
  { slug: "utah", name: "Utah", level: "medium" },
  { slug: "idaho", name: "Idaho", level: "medium" },
  { slug: "wyoming", name: "Wyoming", level: "medium" },
  { slug: "minnesota", name: "Minnesota", level: "medium" },
  { slug: "wisconsin", name: "Wisconsin", level: "medium" },
  { slug: "georgia", name: "Georgia", level: "medium" },
  { slug: "virginia", name: "Virginia", level: "medium" },
  { slug: "north-carolina", name: "North Carolina", level: "medium" },
  { slug: "south-carolina", name: "South Carolina", level: "medium" },
  { slug: "oklahoma", name: "Oklahoma", level: "medium" },
  // ===== HARD (12) — recognizable to map/geography fans only =====
  { slug: "kansas", name: "Kansas", level: "hard" },
  { slug: "nebraska", name: "Nebraska", level: "hard" },
  { slug: "north-dakota", name: "North Dakota", level: "hard" },
  { slug: "south-dakota", name: "South Dakota", level: "hard" },
  { slug: "missouri", name: "Missouri", level: "hard" },
  { slug: "iowa", name: "Iowa", level: "hard" },
  { slug: "arkansas", name: "Arkansas", level: "hard" },
  { slug: "mississippi", name: "Mississippi", level: "hard" },
  { slug: "alabama", name: "Alabama", level: "hard" },
  { slug: "tennessee", name: "Tennessee", level: "hard" },
  { slug: "kentucky", name: "Kentucky", level: "hard" },
  { slug: "ohio", name: "Ohio", level: "hard" },
  // ===== IMPOSSIBLE (12) — small / plain shape / easily confused with a neighbor =====
  { slug: "indiana", name: "Indiana", level: "impossible" },
  { slug: "pennsylvania", name: "Pennsylvania", level: "impossible" },
  { slug: "west-virginia", name: "West Virginia", level: "impossible" },
  { slug: "maryland", name: "Maryland", level: "impossible" },
  { slug: "delaware", name: "Delaware", level: "impossible" },
  { slug: "new-jersey", name: "New Jersey", level: "impossible" },
  { slug: "connecticut", name: "Connecticut", level: "impossible" },
  { slug: "rhode-island", name: "Rhode Island", level: "impossible" },
  { slug: "massachusetts", name: "Massachusetts", level: "impossible" },
  { slug: "vermont", name: "Vermont", level: "impossible" },
  { slug: "new-hampshire", name: "New Hampshire", level: "impossible" },
  { slug: "new-mexico", name: "New Mexico", level: "impossible" },
];
