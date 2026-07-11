// ثمبنيل GuessSync v2 — 1280×720 · شبكة 3×3 صور حقيقية + رقم ضخم + بومة حقيقية + سنة
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont as loadMont } from "@remotion/google-fonts/Montserrat";
const font = loadMont("normal", { weights: ["800", "900"] }).fontFamily;
const G = { blue: "#23429E", blueMid: "#122258", blueDeep: "#0A1436", gold: "#FFC53D", goldDeep: "#A8790A" };

const Bg = () => (
  <AbsoluteFill style={{ background: `radial-gradient(80% 92% at 30% 42%, ${G.blue} 0%, ${G.blueMid} 52%, ${G.blueDeep} 100%)` }}>
    <AbsoluteFill style={{ background: "repeating-conic-gradient(from 90deg at 30% 44%, rgba(255,197,61,0.09) 0deg 4deg, transparent 4deg 12deg)", maskImage: "radial-gradient(circle at 30% 44%, #000 8%, transparent 58%)", WebkitMaskImage: "radial-gradient(circle at 30% 44%, #000 8%, transparent 58%)" }} />
  </AbsoluteFill>
);

// props: mode (topic → asset path/ext/fit), grid (9 slugs/isos; "?" = mystery tile), line1, word, number, year, badge
const ASSET = {
  emoji: { dir: "openmoji", ext: "svg", fit: "contain" },
  carlogos: { dir: "carlogos", ext: "png", fit: "contain" },
  dinos: { dir: "dinos", ext: "jpg", fit: "cover" },
  gaming: { dir: "gaming", ext: "png", fit: "contain" },
  clubbadges: { dir: "clubs", ext: "png", fit: "contain" },
  dogs: { dir: "dogs", ext: "jpg", fit: "cover" },
  airlines: { dir: "airlines", ext: "png", fit: "contain" },
  fish: { dir: "fish", ext: "jpg", fit: "cover" },
  cocktails: { dir: "cocktails", ext: "jpg", fit: "cover" },
  breads: { dir: "breads", ext: "jpg", fit: "cover" },
  nuts: { dir: "nuts", ext: "jpg", fit: "cover" },
  cacti: { dir: "cacti", ext: "jpg", fit: "cover" },
  desserts: { dir: "desserts", ext: "jpg", fit: "cover" },
  kitchen: { dir: "kitchen", ext: "jpg", fit: "cover" },
  spices: { dir: "spices", ext: "jpg", fit: "cover" },
  pasta: { dir: "pasta", ext: "jpg", fit: "cover" },
  cheese: { dir: "cheeses", ext: "jpg", fit: "cover" },
  trains: { dir: "trains", ext: "jpg", fit: "cover" },
  primates: { dir: "primates", ext: "jpg", fit: "cover" },
  boats: { dir: "boats", ext: "jpg", fit: "cover" },
  shells: { dir: "shells", ext: "jpg", fit: "cover" },
  mushrooms: { dir: "mushrooms", ext: "jpg", fit: "cover" },
  aircraft: { dir: "aircraft", ext: "jpg", fit: "cover" },
  space: { dir: "space", ext: "jpg", fit: "cover" },
  sports: { dir: "sports", ext: "jpg", fit: "cover" },
  trees: { dir: "trees", ext: "jpg", fit: "cover" },
  tools: { dir: "tools", ext: "jpg", fit: "cover" },
  reptiles: { dir: "reptiles", ext: "jpg", fit: "cover" },
  horses: { dir: "horses", ext: "jpg", fit: "cover" },
  gems: { dir: "gems", ext: "jpg", fit: "cover" },
  insects: { dir: "insects", ext: "jpg", fit: "cover" },
  cats: { dir: "cats", ext: "jpg", fit: "cover" },
  logos: { dir: "logos", ext: "svg", fit: "contain" },
  flags: { dir: "flags", ext: "svg", fit: "contain" },
  capitals: { dir: "flags", ext: "svg", fit: "contain" },
  countries: { dir: "flags", ext: "svg", fit: "contain" },
  shapes: { dir: "maps", ext: "svg", fit: "contain" },
  countryshapes: { dir: "shapes", ext: "png", fit: "contain" },
  instruments: { dir: "instruments", ext: "jpg", fit: "cover" },
  animals: { dir: "animals", ext: "png", fit: "cover" },
  foods: { dir: "foods", ext: "png", fit: "cover" },
  cars: { dir: "cars", ext: "png", fit: "cover" },
  landmarks: { dir: "landmarks", ext: "png", fit: "cover" },
  birds: { dir: "birds", ext: "jpg", fit: "cover" },
  sea: { dir: "sea", ext: "jpg", fit: "cover" },
  paintings: { dir: "paintings", ext: "jpg", fit: "contain" },
  fruits: { dir: "fruits", ext: "jpg", fit: "cover" },
  flowers: { dir: "flowers", ext: "jpg", fit: "cover" },
  butterflies: { dir: "butterflies", ext: "jpg", fit: "cover" },
  snakes: { dir: "snakes", ext: "jpg", fit: "cover" },
};
export const GsThumbV2 = ({
  mode = "fruits",
  folder,
  grid = ["strawberry", "corn", "carrot", "broccoli", "?", "tomato", "dragon-fruit", "cherry", "?"],
  line1 = "CAN YOU NAME ALL",
  word = "FRUIT OR VEG?",
  number = "100",
  year = "2026",
  badge = "Only 1% get 100%",
}) => {
  const TILE = 138, GAP = 9;
  const A = ASSET[mode] || { dir: folder || mode, ext: "jpg", fit: "cover" };
  return (
    <AbsoluteFill style={{ fontFamily: font, backgroundColor: G.blueDeep }}>
      <Bg />

      {/* بانر علوي أحمر عريض — أسلوب المنافسين */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 90, background: "#FF2A2A", borderBottom: `6px solid ${G.gold}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 26px", boxShadow: "0 8px 20px rgba(0,0,0,0.35)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 900, fontSize: 30, color: "#fff" }}>
          <span style={{ width: 15, height: 15, borderRadius: "50%", border: `4px solid ${G.gold}` }} />GUESS<span style={{ color: G.gold }}>SYNC</span>
        </div>
        <div style={{ fontWeight: 900, fontSize: 54, color: "#fff", WebkitTextStroke: "2px #7a0000", paintOrder: "stroke fill", letterSpacing: 1 }}>{line1} <span style={{ color: G.gold }}>{number}</span>?</div>
        <div style={{ background: G.gold, color: G.blueDeep, fontWeight: 900, fontSize: 28, padding: "4px 18px", borderRadius: 999 }}>{year}</div>
      </div>

      {/* الشبكة 3×3 */}
      <div style={{ position: "absolute", left: 34, top: 122, display: "grid", gridTemplateColumns: `repeat(3, ${TILE}px)`, gap: GAP }}>
        {grid.map((slug, i) => (
          slug === "?" ? (
            <div key={i} style={{ width: TILE, height: TILE, background: G.blueDeep, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", border: `4px solid ${G.gold}`, boxShadow: "0 8px 22px rgba(0,0,0,0.5)" }}>
              <span style={{ fontWeight: 900, fontSize: 90, color: G.gold }}>?</span>
            </div>
          ) : (
            <div key={i} style={{ width: TILE, height: TILE, background: "#fff", borderRadius: 18, padding: A.fit === "contain" ? 12 : 6, boxShadow: "0 8px 22px rgba(0,0,0,0.5)" }}>
              <Img src={staticFile(`${A.dir}/${slug}.${A.ext}`)} style={{ width: "100%", height: "100%", objectFit: A.fit, borderRadius: 12 }} />
            </div>
          )
        ))}
      </div>

      {/* الكلمة الكبيرة — متوسّطة عموديًا ومحاذية للشبكة (top 122، ارتفاع الشبكة 432) */}
      <div style={{ position: "absolute", left: 436, right: 6, top: 122, height: 3 * TILE + 2 * GAP, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        {word.split(" ").map((tok, i) => {
          const conn = /^(or|and|&)$/i.test(tok);
          return (
            <div key={i} style={{
              fontWeight: 900,
              fontSize: conn ? 94 : Math.min(188, Math.floor(760 / (tok.length * 0.74))),
              lineHeight: conn ? 1 : 0.8,
              color: conn ? G.gold : "#FF1E1E",
              WebkitTextStroke: conn ? "4px #FF8080" : "5px #4a0000",
              paintOrder: "stroke fill",
              textShadow: conn ? "0 6px 14px rgba(0,0,0,0.5)" : "0 9px 0 #7a0000, 0 18px 28px rgba(0,0,0,0.6)",
              transform: `rotate(${conn ? 0 : (i % 2 ? 1.5 : -1.5)}deg)`,
              marginTop: i === 0 ? 8 : 0,
            }}>{tok}</div>
          );
        })}
      </div>

      {/* شارة 1% */}
      <div style={{ position: "absolute", bottom: 46, left: 40, transform: "rotate(-7deg)", background: G.blueDeep, color: G.gold, fontWeight: 900, fontSize: 40, padding: "12px 30px", borderRadius: 18, border: `5px solid ${G.gold}`, boxShadow: "0 12px 30px rgba(0,0,0,0.5)" }}>{badge}</div>

      {/* البومة الحقيقية */}
      <Img src={staticFile("brand/owl-cheer.png")} style={{ position: "absolute", right: 6, bottom: -6, width: 238, height: 238, objectFit: "contain", filter: "drop-shadow(0 14px 30px rgba(0,0,0,0.55))" }} />
    </AbsoluteFill>
  );
};
