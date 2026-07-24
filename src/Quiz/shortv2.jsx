// «GuessSync Short» — قالب شورت عمودي 1080×1920 · ~56 ثانية · 8 أسئلة (2/مستوى)
// ⛔ شرط صارم (المالك 2026-07-07): كل ريل ≤ 58 ثانية، وممنوع يتجاوز 60 ثانية بأي حال.
// mode: "logos" | "flags" | "capitals" | "countries" — يعيد استخدام أصوات وأصول الحلقة.
import React from "react";
import { AbsoluteFill, Audio, Img, Sequence, staticFile, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont as loadMont } from "@remotion/google-fonts/Montserrat";
const font = loadMont("normal", { weights: ["700", "800", "900"] }).fontFamily;

const GAME = { blue: "#23429E", blueMid: "#122258", blueDeep: "#0A1436", gold: "#FFC53D", magenta: "#F35BD0" };
// Background theme palette (mirrors quizv2). theme index 0-7; 0 = ocean (original). New episodes rotate every 10.
const THEMES = [
  { b: "#23429E", m: "#122258", d: "#0A1436" }, { b: "#0E7C86", m: "#08414A", d: "#04262B" },
  { b: "#5B2E9E", m: "#331A58", d: "#1C0E36" }, { b: "#B0316F", m: "#58183D", d: "#360E26" },
  { b: "#B02E3D", m: "#581822", d: "#360E14" }, { b: "#178E52", m: "#0C5230", d: "#06361E" },
  { b: "#3E33B0", m: "#201A58", d: "#120E36" }, { b: "#B06522", m: "#58330F", d: "#361E08" },
];
const LVL = {
  easy: { accent: "#FFD23F", label: "EASY" },
  medium: { accent: "#FF9F40", label: "MEDIUM" },
  hard: { accent: "#FF5C7A", label: "HARD" },
  impossible: { accent: "#B983FF", label: "IMPOSSIBLE" },
};

// v2: 4 خيارات لكل سؤال + شريط تايمر يمتلئ (4 ثواني). هوك 66 + (8 × 190) + خاتمة 90 = 1676 فريم = 55.9s
const ST = { hook: 66, round: 190, reveal: 120, outro: 90 };
const TICKS = [0, 36, 66, 90, 106, 116];
const ABCD = ["A", "B", "C", "D"];
const nameOf = (x, mode) => mode === "emojiword" ? x.answer : (mode === "paintings" || mode === "movies" || mode === "efoods" || mode === "esongs" || mode === "egames" || mode === "ecountries" || mode === "ecountries2" || mode === "etv" || mode === "ebrands" || mode === "ebooks" || mode === "esongs2" || mode === "movies2" || mode === "egames2" || mode === "etv2" || mode === "ebooks2") ? x.title : mode === "capitals" ? x.capital : (x.name || x.country || x.slug);
const buildOptions = (item, all, mode) => {
  const pool = all.filter((x) => x.level === item.level && (x.slug || x.iso || x.id) !== (item.slug || item.iso || item.id));
  const seed = (item.slug || item.iso || item.id || item.name || item.title).split("").reduce((a, c) => a + c.charCodeAt(0), 0);
  const picks = [], used = new Set([item.slug || item.iso || item.id]);
  let k = 1;
  while (picks.length < 3 && k < pool.length * 4) {
    const cand = pool[(seed * 7 + k * 13) % pool.length];
    const key = cand && (cand.slug || cand.iso || cand.id);
    if (cand && !used.has(key)) { used.add(key); picks.push(nameOf(cand, mode)); }
    k++;
  }
  const correctIdx = seed % 4;
  const opts = picks.slice();
  opts.splice(correctIdx, 0, nameOf(item, mode));
  return { opts: opts.slice(0, 4), correctIdx };
};

// يختار 8 عناصر لشورت رقم part (0..4): 2 من كل مستوى، بلا تكرار بين الشورتات (part×2 إزاحة)
// TIER-SIZE-AGNOSTIC: يجمّع العناصر حسب حقل level ديناميكياً ثم يأخذ 2 من كل مستوى عند إزاحة part.
// يعمل مع 25/مستوى (الحلقات القديمة E01-E93) ومع الميجا غير المتساوية (50/49/48/47 · 75/tier)
// بلا أي تغيير في النتيجة للحلقات ذات 100 عنصر (مثبت: OLD === NEW لكل part 0..4).
export const pickShort = (items, part = 0) => {
  const order = ["easy", "medium", "hard", "impossible"];
  const byLevel = { easy: [], medium: [], hard: [], impossible: [] };
  for (const it of items) { if (byLevel[it.level]) byLevel[it.level].push(it); }
  const out = [];
  for (const lvl of order) { const tier = byLevel[lvl]; for (let k = 0; k < 2; k++) { const it = tier[part * 2 + k]; if (it) out.push(it); } }
  return out;
};

const Bg = ({ theme = THEMES[0] }) => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const parts = [];
  for (let i = 0; i < 16; i++) {
    const seed = i * 137.5;
    const x = (seed * 1.7) % width;
    const y = height + 40 - ((frame * (0.6 + (i % 4) * 0.5) + seed * 2.1) % (height + 140));
    const sz = 4 + (i % 4) * 5;
    parts.push(<div key={i} style={{ position: "absolute", left: x + Math.sin(frame / 30 + i) * 16, top: y, width: sz, height: sz, borderRadius: "50%", background: GAME.gold, opacity: 0.18, boxShadow: `0 0 ${sz * 2}px ${GAME.gold}` }} />);
  }
  return (
    <AbsoluteFill style={{ background: `radial-gradient(80% 60% at 50% 32%, ${theme.b} 0%, ${theme.m} 52%, ${theme.d} 100%)`, overflow: "hidden" }}>
      <AbsoluteFill style={{ background: "repeating-conic-gradient(from 90deg at 50% 30%, rgba(255,197,61,0.06) 0deg 4deg, transparent 4deg 13deg)", maskImage: "radial-gradient(circle at 50% 30%, #000 3%, transparent 55%)", WebkitMaskImage: "radial-gradient(circle at 50% 30%, #000 3%, transparent 55%)" }} />
      {parts}
    </AbsoluteFill>
  );
};

const Watermark = () => (
  <div style={{ position: "absolute", top: 60, left: 0, right: 0, textAlign: "center", fontFamily: font, fontWeight: 900, fontSize: 48, color: "rgba(255,255,255,0.92)", letterSpacing: 1 }}>
    GUESS<span style={{ color: GAME.gold }}>SYNC</span>
  </div>
);

// شريط تايمر عمودي يمتلئ (5 ثواني) — أسفل الشورت
const VTimerBar = ({ accent }) => {
  const frame = useCurrentFrame();
  const p = interpolate(frame, [0, ST.reveal], [0, 1], { extrapolateRight: "clamp" });
  const revealed = frame >= ST.reveal;
  const col = revealed ? "#3BE07A" : (p > 0.75 ? "#FF3B3B" : (p > 0.5 ? "#FF9F40" : accent));
  const w = revealed ? 100 : p * 100;
  const secs = Math.max(0, ((ST.reveal - frame) / 30)).toFixed(1);
  return (
    <div style={{ position: "absolute", left: 60, right: 60, top: 1600 }}>
      <div style={{ position: "absolute", right: 0, top: -70, fontFamily: font, fontWeight: 900, fontSize: 52, color: "#fff", background: "rgba(6,10,32,0.5)", padding: "2px 24px", borderRadius: 999 }}>{secs}s</div>
      <div style={{ position: "relative", height: 46, borderRadius: 999, background: "rgba(6,10,32,0.5)", border: `5px solid ${GAME.gold}`, overflow: "hidden", boxShadow: "inset 0 3px 8px rgba(0,0,0,0.45)" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${w}%`, borderRadius: 999, background: col, boxShadow: `0 0 26px ${col}` }}>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(255,255,255,0.45), rgba(255,255,255,0) 52%)" }} />
        </div>
      </div>
      <div style={{ position: "absolute", top: -8, left: `${w}%`, transform: "translateX(-50%)", width: 60, height: 60, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", border: `5px solid ${col}`, fontSize: 30 }}>⚡</div>
    </div>
  );
};

const Owl = ({ revealed }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const bob = Math.sin(frame / 12) * 10;
  const cheer = spring({ frame: frame - ST.reveal, fps, config: { damping: 8, mass: 0.5 } });
  return (
    <Img src={staticFile(revealed ? "brand/owl-cheer.png" : "brand/owl-think.png")}
      style={{ position: "absolute", right: 40, bottom: 360, width: 220, height: 220, objectFit: "contain", transform: `translateY(${bob}px) scale(${revealed ? interpolate(cheer, [0, 1], [0.85, 1.08]) : 1})`, filter: "drop-shadow(0 12px 26px rgba(0,0,0,0.5))" }} />
  );
};

// EXTREME-ZOOM focal (matches quizv2.jsx): deterministic off-center crop from the item key hash.
const zoomFocalShort = (key, sc) => {
  const s = String(key);
  let h = 2166136261 >>> 0;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  const a = (h % 1000) / 1000, b = ((h >>> 10) % 1000) / 1000;
  const maxX = ((sc - 1) / (2 * sc)) * 100 * 0.70, maxY = maxX * 0.45;
  return [(a - 0.5) * 2 * maxX, (b - 0.5) * 2 * maxY];
};
const zoomScaleOf = (z) => (z && typeof z === "object" && z.scale ? z.scale : 3.0);
// Image resolver for the GENERIC zoom crop (STEP 1). Any mode listed here (or covered by the
// jpg/slug/cover default) can be driven into hard-mode by passing a `zoom` prop to the short —
// no per-mode code needed. Mirrors the dir/ext each normal Clue block already uses.
const ZOOM_IMG = {
  animals: { dir: "animals", ext: "png" },
  cars: { dir: "cars", ext: "png" },
  landmarkzoom: { dir: "landmarks", ext: "png" },
  foodzoom: { dir: "foods", ext: "png" },
  animals2: { dir: "animals2", ext: "jpg" },
  foods: { dir: "foods", ext: "png" },
  foods2: { dir: "foods2", ext: "jpg" },
  flags: { dir: "flags", ext: "svg", key: "iso", fit: "contain" },
  logos: { dir: "logos", ext: "svg", fit: "contain" },
  birds: { dir: "birds", ext: "jpg" },
  gems: { dir: "gems", ext: "jpg" },
  reptiles: { dir: "reptiles", ext: "jpg" },
};
const zoomImgOf = (mode) => ZOOM_IMG[mode] || { dir: mode, ext: "jpg" };

// كلمة السؤال + بطاقة الدليل حسب النوع
const Clue = ({ item, mode, revealed, accent, zoom }) => {
  const frame = useCurrentFrame();
  const card = { padding: 24, background: "#fff", borderRadius: 40, boxShadow: revealed ? `0 0 90px ${accent}` : "0 30px 70px rgba(0,0,0,0.5)", border: `7px solid ${revealed ? accent : "rgba(255,255,255,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center" };
  // GENERIC hard-mode zoom: driven by the `zoom` flag on the shorts registry entry, works for ANY
  // image mode (photo/logo/flag). Extreme off-center crop during the question, eases back to the
  // full image at reveal. flagzoom (E73) keeps its own dedicated block below and is untouched.
  if (zoom && mode !== "flagzoom") {
    const { dir, ext, key = "slug", fit = "cover" } = zoomImgOf(mode);
    const sc0 = zoomScaleOf(zoom);
    const [fx, fy] = zoomFocalShort(item[key], sc0);
    const p = revealed ? interpolate(frame, [ST.reveal, ST.reveal + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
    const sc = interpolate(p, [0, 1], [sc0, 1.0]);
    const tx = interpolate(p, [0, 1], [fx, 0]), ty = interpolate(p, [0, 1], [fy, 0]);
    return <div style={{ ...card, width: 620, height: 620, overflow: "hidden" }}><Img src={staticFile(`${dir}/${item[key]}.${ext}`)} style={{ width: 560, height: 560, objectFit: fit, borderRadius: 28, transform: `scale(${sc}) translate(${tx}%, ${ty}%)` }} /></div>;
  }
  // scrambled (E115) / novowels (E116): pure-text clue — no image. Renders item.scrambled or
  // item.novowels as big bold letter-spaced text inside the same white card used by every other
  // mode. GUARD: only mode === "scrambled"/"novowels" hits this branch; every existing image mode
  // below is untouched.
  if (mode === "scrambled" || mode === "novowels" || mode === "reversed" || mode === "capitalscrambled" || mode === "usstatescrambled" || mode === "missingletters" || mode === "slogan") {
    const isSlogan = mode === "slogan";
    const text = isSlogan ? item.slogan : mode === "novowels" ? item.novowels : mode === "reversed" ? item.reversed : mode === "missingletters" ? item.blanked : item.scrambled;
    const len = String(text || "").length;
    const fs = isSlogan ? Math.max(40, Math.min(96, Math.floor(1400 / Math.max(len, 6)))) : Math.max(48, Math.min(120, Math.floor(920 / Math.max(len, 3))));
    return (
      <div style={{ ...card, width: 900, height: 420, padding: 30 }}>
        <div style={{ fontFamily: font, fontWeight: 900, fontStyle: isSlogan ? "italic" : "normal", fontSize: fs, letterSpacing: isSlogan ? 0.5 : Math.max(2, fs * 0.09), color: GAME.blueDeep, textAlign: "center", lineHeight: 1.15, wordBreak: "break-word" }}>{isSlogan ? `“${text}”` : text}</div>
      </div>
    );
  }
  if (mode === "flagzoom") {
    const sc0 = 3.0;
    const [fx, fy] = zoomFocalShort(item.slug, sc0);
    const p = revealed ? interpolate(frame, [ST.reveal, ST.reveal + 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
    const sc = interpolate(p, [0, 1], [sc0, 1.0]);
    const tx = interpolate(p, [0, 1], [fx, 0]), ty = interpolate(p, [0, 1], [fy, 0]);
    return <div style={{ ...card, width: 640, height: 430, overflow: "hidden" }}><Img src={staticFile(`flags/${item.slug}.svg`)} style={{ width: 560, height: 373, objectFit: "contain", transform: `scale(${sc}) translate(${tx}%, ${ty}%)` }} /></div>;
  }
  // emojiword (E122) — Fluent-3D emoji REBUS: item.emojis is an ARRAY of emoji3d slugs rendered as PNGs in a row.
  // GUARD: only mode === "emojiword" hits this branch; the OpenMoji block below (movies/efoods/...) is untouched.
  if (mode === "emojiword") { const arr = item.emojis; const sz = arr.length <= 2 ? 250 : 190; return <div style={{ ...card, width: 700, height: 560, display: "flex", flexWrap: "nowrap", gap: 8, alignItems: "center", justifyContent: "center", padding: 30 }}>{arr.map((slug, i) => <React.Fragment key={i}>{i > 0 && <span style={{ fontFamily: font, fontWeight: 900, fontSize: sz * 0.42, color: GAME.blue, opacity: 0.5 }}>+</span>}<Img src={staticFile(`emoji3d/${slug}.png`)} style={{ width: sz, height: sz, objectFit: "contain" }} /></React.Fragment>)}</div>; }
  if (mode === "movies" || mode === "efoods" || mode === "esongs" || mode === "egames" || mode === "ecountries" || mode === "ecountries2" || mode === "etv" || mode === "ebrands" || mode === "ebooks" || mode === "esongs2" || mode === "movies2" || mode === "egames2" || mode === "etv2" || mode === "ebooks2") { const chars = [...item.emojis]; const sz = chars.length <= 2 ? 280 : chars.length === 3 ? 220 : 170; return <div style={{ ...card, width: 640, height: 640, display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "center", padding: 36 }}>{chars.map((ch, i) => <Img key={i} src={staticFile(`openmoji/${[...ch].map((c) => c.codePointAt(0).toString(16).toUpperCase()).join("-")}.svg`)} style={{ width: sz, height: sz, objectFit: "contain" }} />)}</div>; }
  if (mode === "shapes") return <div style={{ width: 660, height: 560, WebkitMaskImage: `url(${staticFile(`maps/${item.iso}.svg`)})`, maskImage: `url(${staticFile(`maps/${item.iso}.svg`)})`, WebkitMaskSize: "contain", maskSize: "contain", WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat", WebkitMaskPosition: "center", maskPosition: "center", background: revealed ? `linear-gradient(160deg, #FFE888, ${accent})` : "linear-gradient(160deg, #ffffff, #b9cdf0)", filter: revealed ? `drop-shadow(0 0 40px ${accent})` : "drop-shadow(0 12px 30px rgba(0,0,0,0.6))" }} />;
  if (mode === "logos") return <div style={{ ...card, width: 560, height: 560 }}><Img src={staticFile(`logos/${item.slug}.svg`)} style={{ width: 400, height: 400, objectFit: "contain" }} /></div>;
  if (mode === "natteams") return <div style={{ ...card, width: 560, height: 560 }}><Img src={staticFile(`natteams/${item.slug}.svg`)} style={{ width: 400, height: 400, objectFit: "contain" }} /></div>;
  if (mode === "coatofarms") return <div style={{ ...card, width: 560, height: 560 }}><Img src={staticFile(`coatofarms/${item.slug}.svg`)} style={{ width: 400, height: 400, objectFit: "contain" }} /></div>;
  if (mode === "carlogos") return <div style={{ ...card, width: 640, height: 540 }}><Img src={staticFile(`carlogos/${item.slug}.png`)} style={{ width: 540, height: 440, objectFit: "contain" }} /></div>;
  if (mode === "gaming") return <div style={{ ...card, width: 620, height: 560 }}><Img src={staticFile(`gaming/${item.slug}.png`)} style={{ width: 520, height: 460, objectFit: "contain" }} /></div>;
  if (mode === "airlines") return <div style={{ ...card, width: 620, height: 560 }}><Img src={staticFile(`airlines/${item.slug}.png`)} style={{ width: 520, height: 460, objectFit: "contain" }} /></div>;
  if (mode === "fastfood") return <div style={{ ...card, width: 620, height: 560 }}><Img src={staticFile(`fastfood/${item.slug}.png`)} style={{ width: 520, height: 460, objectFit: "contain" }} /></div>;
  if (mode === "countryshapes") return <div style={{ ...card, width: 620, height: 560 }}><Img src={staticFile(`shapes/${item.slug}.png`)} style={{ width: 520, height: 460, objectFit: "contain" }} /></div>;
  if (mode === "countrymap") return <div style={{ ...card, width: 760, height: 400 }}><Img src={staticFile(`countrymap/${item.slug}.svg`)} style={{ width: 700, height: 340, objectFit: "contain" }} /></div>;
  if (mode === "usstates") return <div style={{ ...card, width: 760, height: 400 }}><Img src={staticFile(`usstates/${item.slug}.svg`)} style={{ width: 700, height: 340, objectFit: "contain" }} /></div>;
  if (mode === "instruments") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`instruments/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "fish") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`fish/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "fish2") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`fish2/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "cocktails") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`cocktails/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "drinks") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`drinks/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "breads") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`breads/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "nuts") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`nuts/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "cacti") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`cacti/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "desserts") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`desserts/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "kitchen") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`kitchen/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "spices") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`spices/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "pasta") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`pasta/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "cheese") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`cheeses/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "trains") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`trains/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "primates") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`primates/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "boats") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`boats/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "shells") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`shells/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "mushrooms") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`mushrooms/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "mushrooms2") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`mushrooms2/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "aircraft") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`aircraft/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "space") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`space/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "sports") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`sports/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "trees") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`trees/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "tools") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`tools/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "rocks") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`rocks/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "hats") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`hats/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "reptiles") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`reptiles/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "silhouette") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`silhouette/${item.slug}.png`)} style={{ width: 480, height: 480, objectFit: "contain" }} /></div>;
  if (mode === "dinosilhouette") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`dinosilhouette/${item.slug}.png`)} style={{ width: 480, height: 480, objectFit: "contain" }} /></div>;
  if (mode === "reptiles2") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`reptiles2/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "animals2") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`animals2/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "animals3") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`animals3/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "landmarks2") return <div style={{ ...card, width: 720, height: 560 }}><Img src={staticFile(`landmarks2/${item.slug}.jpg`)} style={{ width: 660, height: 500, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "spiders") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`spiders/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "amphibians") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`amphibians/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "horses") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`horses/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "gems") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`gems/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "insects") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`insects/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "insects2") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`insects2/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "cats") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`cats/${item.slug}.jpg`)} style={{ width: 560, height: 560, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "clubs") return <div style={{ ...card, width: 560, height: 560 }}><Img src={staticFile(`clubs/${item.slug}.png`)} style={{ width: 440, height: 440, objectFit: "contain" }} /></div>;
  if (mode === "clubbadges") return <div style={{ ...card, width: 560, height: 560 }}><Img src={staticFile(`clubs/${item.slug}.png`)} style={{ width: 440, height: 440, objectFit: "contain" }} /></div>;
  if (mode === "animals") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`animals/${item.slug}.png`)} style={{ width: 560, height: 560, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "foods2") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`foods2/${item.slug}.jpg`)} style={{ width: 560, height: 560, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "foods") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`foods/${item.slug}.png`)} style={{ width: 560, height: 560, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "dogs") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`dogs/${item.slug}.jpg`)} style={{ width: 560, height: 560, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "dogs2") return <div style={{ ...card, width: 620, height: 620 }}><Img src={staticFile(`dogs2/${item.slug}.jpg`)} style={{ width: 560, height: 560, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "birds") return <div style={{ ...card, width: 640, height: 600 }}><Img src={staticFile(`birds/${item.slug}.jpg`)} style={{ width: 580, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "birds2") return <div style={{ ...card, width: 640, height: 600 }}><Img src={staticFile(`birds2/${item.slug}.jpg`)} style={{ width: 580, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "sea") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`sea/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "sea2") return <div style={{ ...card, width: 660, height: 600 }}><Img src={staticFile(`sea2/${item.slug}.jpg`)} style={{ width: 600, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "fruits") return <div style={{ ...card, width: 640, height: 600 }}><Img src={staticFile(`fruits/${item.slug}.jpg`)} style={{ width: 580, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "flowers") return <div style={{ ...card, width: 640, height: 600 }}><Img src={staticFile(`flowers/${item.slug}.jpg`)} style={{ width: 580, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "flowers2") return <div style={{ ...card, width: 640, height: 600 }}><Img src={staticFile(`flowers2/${item.slug}.jpg`)} style={{ width: 580, height: 540, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "butterflies") return <div style={{ ...card, width: 660, height: 560 }}><Img src={staticFile(`butterflies/${item.slug}.jpg`)} style={{ width: 600, height: 500, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "butterflies2") return <div style={{ ...card, width: 660, height: 560 }}><Img src={staticFile(`butterflies2/${item.slug}.jpg`)} style={{ width: 600, height: 500, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "snakes") return <div style={{ ...card, width: 660, height: 560 }}><Img src={staticFile(`snakes/${item.slug}.jpg`)} style={{ width: 600, height: 500, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "dinos") return <div style={{ ...card, width: 680, height: 540 }}><Img src={staticFile(`dinos/${item.slug}.jpg`)} style={{ width: 620, height: 480, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "landmarks") return <div style={{ ...card, width: 720, height: 560 }}><Img src={staticFile(`landmarks/${item.key}.png`)} style={{ width: 660, height: 500, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "landmarkzoom") return <div style={{ ...card, width: 720, height: 560 }}><Img src={staticFile(`landmarks/${item.slug}.png`)} style={{ width: 660, height: 500, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "cars") return <div style={{ ...card, width: 740, height: 520 }}><Img src={staticFile(`cars/${item.slug}.png`)} style={{ width: 680, height: 460, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "cars2") return <div style={{ ...card, width: 740, height: 520 }}><Img src={staticFile(`cars2/${item.slug}.jpg`)} style={{ width: 680, height: 460, objectFit: "cover", borderRadius: 28 }} /></div>;
  if (mode === "paintings") return <div style={{ padding: 22, background: "linear-gradient(160deg, #fdfbf4, #efe7d2)", borderRadius: 10, border: `16px solid ${revealed ? accent : "#2a2118"}`, boxShadow: revealed ? `0 0 90px ${accent}` : "0 30px 70px rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}><Img src={staticFile(`paintings/${item.slug}.jpg`)} style={{ maxWidth: 720, maxHeight: 760, width: "auto", height: "auto", objectFit: "contain", display: "block" }} /></div>;
  if (mode === "flags") return <div style={{ ...card, width: 640, height: 430 }}><Img src={staticFile(`flags/${item.iso}.svg`)} style={{ width: 560, height: 373, objectFit: "contain" }} /></div>;
  if (mode === "flagsmega") return <div style={{ ...card, width: 640, height: 430 }}><Img src={staticFile(`flags/${item.slug}.svg`)} style={{ width: 560, height: 373, objectFit: "contain" }} /></div>;
  if (mode === "capitals") return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 26 }}>
      <div style={{ ...card, width: 560, height: 373 }}><Img src={staticFile(`flags/${item.iso}.svg`)} style={{ width: 480, height: 320, objectFit: "contain" }} /></div>
      <div style={{ fontFamily: font, fontWeight: 900, fontSize: 62, color: "#fff", textShadow: "0 3px 16px rgba(0,0,0,0.5)" }}>{item.country}</div>
    </div>
  );
  // countries: يظهر العاصمة نصاً
  return <div style={{ fontFamily: font, fontWeight: 900, fontSize: 92, color: "#fff", textAlign: "center", padding: "0 40px", textShadow: `0 0 40px ${accent}` }}>{item.capital}</div>;
};

const QWORD = { movies: "GUESS THE MOVIE", efoods: "GUESS THE FOOD", esongs: "GUESS THE SONG", egames: "GUESS THE GAME", ecountries: "GUESS THE COUNTRY", ecountries2: "GUESS THE COUNTRY", etv: "GUESS THE TV SHOW", ebrands: "GUESS THE BRAND", ebooks: "GUESS THE BOOK", gaming: "GUESS THE GAME", airlines: "GUESS THE AIRLINE", fastfood: "GUESS THE FAST FOOD", fish: "GUESS THE FISH", fish2: "GUESS THE FISH", cocktails: "GUESS THE COCKTAIL", drinks: "GUESS THE DRINK", breads: "GUESS THE BREAD", nuts: "GUESS THE NUT OR SEED", cacti: "GUESS THE CACTUS OR SUCCULENT", desserts: "GUESS THE DESSERT", kitchen: "GUESS THE KITCHEN UTENSIL", spices: "GUESS THE HERB OR SPICE", pasta: "GUESS THE PASTA", cheese: "GUESS THE CHEESE", trains: "GUESS THE TRAIN", primates: "GUESS THE PRIMATE", boats: "GUESS THE BOAT", shells: "GUESS THE SEASHELL", mushrooms: "GUESS THE MUSHROOM", mushrooms2: "GUESS THE MUSHROOM", aircraft: "GUESS THE AIRCRAFT", space: "GUESS THE SPACE OBJECT", sports: "GUESS THE SPORT", trees: "GUESS THE TREE", tools: "GUESS THE TOOL", rocks: "GUESS THE ROCK", hats: "GUESS THE HAT", reptiles: "GUESS THE REPTILE", reptiles2: "GUESS THE REPTILE", silhouette: "GUESS THE ANIMAL", dinosilhouette: "GUESS THE DINOSAUR", animals2: "GUESS THE ANIMAL", animals3: "GUESS THE ANIMAL", landmarks2: "GUESS THE LANDMARK", spiders: "GUESS THE SPIDER", amphibians: "GUESS THE AMPHIBIAN", horses: "GUESS THE HORSE BREED", gems: "GUESS THE GEMSTONE", insects: "GUESS THE INSECT", insects2: "GUESS THE INSECT", cats: "GUESS THE CAT BREED", carlogos: "GUESS THE CAR", logos: "GUESS THE LOGO", natteams: "GUESS THE TEAM", coatofarms: "GUESS THE COUNTRY", clubs: "GUESS THE CLUB", clubbadges: "GUESS THE FOOTBALL CLUB", animals: "GUESS THE ANIMAL", foods: "GUESS THE FOOD", foods2: "GUESS THE DISH", dogs: "GUESS THE DOG BREED", dogs2: "GUESS THE DOG BREED", cars: "GUESS THE CAR", cars2: "GUESS THE CAR", birds: "GUESS THE BIRD", birds2: "GUESS THE BIRD", sea: "GUESS THE SEA CREATURE", sea2: "GUESS THE SEA CREATURE", fruits: "FRUIT OR VEG?", flowers: "GUESS THE FLOWER", flowers2: "GUESS THE FLOWER", butterflies: "GUESS THE BUTTERFLY", butterflies2: "GUESS THE BUTTERFLY", snakes: "GUESS THE SNAKE", dinos: "GUESS THE DINOSAUR", paintings: "GUESS THE PAINTING", landmarks: "WHICH COUNTRY?", landmarkzoom: "GUESS THE LANDMARK", foodzoom: "GUESS THE FOOD", flags: "GUESS THE COUNTRY", flagsmega: "GUESS THE FLAG", flagzoom: "GUESS THE ZOOMED FLAG", capitals: "GUESS THE CAPITAL", countries: "WHICH COUNTRY?", shapes: "WHAT COUNTRY?", countryshapes: "GUESS THE COUNTRY", countrymap: "WHICH COUNTRY?", usstates: "WHICH STATE?", instruments: "GUESS THE INSTRUMENT", scrambled: "GUESS THE COUNTRY", novowels: "GUESS THE COUNTRY", reversed: "GUESS THE COUNTRY", capitalscrambled: "GUESS THE CAPITAL", usstatescrambled: "WHICH STATE?", missingletters: "GUESS THE COUNTRY", emojiword: "GUESS THE WORD", slogan: "GUESS THE BRAND", esongs2: "GUESS THE SONG", movies2: "GUESS THE MOVIE", egames2: "GUESS THE GAME", etv2: "GUESS THE TV SHOW", ebooks2: "GUESS THE BOOK" };
const voFile = (item, mode) => mode === "movies" ? `sfx/em-${item.id}.wav` : mode === "efoods" ? `sfx/ef-${item.id}.wav` : mode === "esongs" ? `sfx/es-${item.id}.wav` : mode === "egames" ? `sfx/eg-${item.id}.wav` : mode === "ecountries" ? `sfx/ec-${item.id}.wav` : mode === "ecountries2" ? `sfx/ce-${item.id}.wav` : mode === "etv" ? `sfx/et-${item.id}.wav` : mode === "ebrands" ? `sfx/eb-${item.id}.wav` : mode === "ebooks" ? `sfx/bk-${item.id}.wav` : mode === "carlogos" ? `sfx/cl-${item.slug}.wav` : mode === "gaming" ? `sfx/gm-${item.slug}.wav` : mode === "airlines" ? `sfx/al-${item.slug}.wav` : mode === "fastfood" ? `sfx/ff-${item.slug}.wav` : mode === "countryshapes" ? `sfx/cs-${item.slug}.wav` : mode === "countrymap" ? `sfx/wm-${item.slug}.wav` : mode === "usstates" ? `sfx/usst-${item.slug}.wav` : mode === "instruments" ? `sfx/mi-${item.slug}.wav` : mode === "fish" ? `sfx/fh-${item.slug}.wav` : mode === "fish2" ? `sfx/fs-${item.slug}.wav` : mode === "cocktails" ? `sfx/ck-${item.slug}.wav` : mode === "drinks" ? `sfx/dk-${item.slug}.wav` : mode === "breads" ? `sfx/br-${item.slug}.wav` : mode === "nuts" ? `sfx/nt-${item.slug}.wav` : mode === "cacti" ? `sfx/cx-${item.slug}.wav` : mode === "desserts" ? `sfx/ds-${item.slug}.wav` : mode === "kitchen" ? `sfx/kt-${item.slug}.wav` : mode === "spices" ? `sfx/sc-${item.slug}.wav` : mode === "pasta" ? `sfx/pa-${item.slug}.wav` : mode === "cheese" ? `sfx/ch-${item.slug}.wav` : mode === "trains" ? `sfx/tn-${item.slug}.wav` : mode === "primates" ? `sfx/pr-${item.slug}.wav` : mode === "boats" ? `sfx/bt-${item.slug}.wav` : mode === "shells" ? `sfx/sh-${item.slug}.wav` : mode === "mushrooms" ? `sfx/mu-${item.slug}.wav` : mode === "mushrooms2" ? `sfx/mu2-${item.slug}.wav` : mode === "aircraft" ? `sfx/ac-${item.slug}.wav` : mode === "space" ? `sfx/sp-${item.slug}.wav` : mode === "sports" ? `sfx/sr-${item.slug}.wav` : mode === "trees" ? `sfx/tr-${item.slug}.wav` : mode === "tools" ? `sfx/tl-${item.slug}.wav` : mode === "rocks" ? `sfx/rk-${item.slug}.wav` : mode === "hats" ? `sfx/ht-${item.slug}.wav` : mode === "reptiles" ? `sfx/rp-${item.slug}.wav` : mode === "reptiles2" ? `sfx/rp2-${item.slug}.wav` : mode === "silhouette" ? `sfx/sl-${item.slug}.wav` : mode === "dinosilhouette" ? `sfx/dz-${item.slug}.wav` : mode === "animals2" ? `sfx/a2-${item.slug}.wav` : mode === "animals3" ? `sfx/a3-${item.slug}.wav` : mode === "landmarks2" ? `sfx/l2-${item.slug}.wav` : mode === "spiders" ? `sfx/sd-${item.slug}.wav` : mode === "amphibians" ? `sfx/am-${item.slug}.wav` : mode === "horses" ? `sfx/hr-${item.slug}.wav` : mode === "gems" ? `sfx/gem-${item.slug}.wav` : mode === "insects" ? `sfx/in-${item.slug}.wav` : mode === "insects2" ? `sfx/i2-${item.slug}.wav` : mode === "cats" ? `sfx/cat-${item.slug}.wav` : mode === "clubs" ? `sfx/cb-${item.slug}.wav` : mode === "clubbadges" ? `sfx/fc-${item.slug}.wav` : mode === "logos" ? `sfx/nm-${item.slug}.wav` : mode === "natteams" ? `sfx/nt-${item.slug}.wav` : mode === "coatofarms" ? `sfx/coa-${item.slug}.wav` : mode === "animals" ? `sfx/an-${item.slug}.wav` : mode === "foods2" ? `sfx/f2-${item.slug}.wav` : mode === "foods" ? `sfx/fd-${item.slug}.wav` : mode === "dogs" ? `sfx/dog-${item.slug}.wav` : mode === "dogs2" ? `sfx/d2-${item.slug}.wav` : mode === "cars" ? `sfx/cm-${item.slug}.wav` : mode === "cars2" ? `sfx/c2-${item.slug}.wav` : mode === "birds" ? `sfx/bd-${item.slug}.wav` : mode === "birds2" ? `sfx/b2-${item.slug}.wav` : mode === "sea" ? `sfx/sc-${item.slug}.wav` : mode === "sea2" ? `sfx/se2-${item.slug}.wav` : mode === "fruits" ? `sfx/fr-${item.slug}.wav` : mode === "flowers" ? `sfx/fl-${item.slug}.wav` : mode === "flowers2" ? `sfx/w2-${item.slug}.wav` : mode === "butterflies" ? `sfx/bt-${item.slug}.wav` : mode === "butterflies2" ? `sfx/bf2-${item.slug}.wav` : mode === "snakes" ? `sfx/sn-${item.slug}.wav` : mode === "dinos" ? `sfx/dn-${item.slug}.wav` : mode === "paintings" ? `sfx/pt-${item.slug}.wav` : mode === "flagzoom" ? `sfx/fz-${item.slug}.wav` : mode === "landmarkzoom" ? `sfx/lz-${item.slug}.wav` : mode === "foodzoom" ? `sfx/fz2-${item.slug}.wav` : mode === "flagsmega" ? `sfx/fm-${item.slug}.wav` : mode === "capitals" ? `sfx/cp-${item.iso}.wav` : mode === "scrambled" ? `sfx/scr-${item.slug}.wav` : mode === "novowels" ? `sfx/nvw-${item.slug}.wav` : mode === "reversed" ? `sfx/rev-${item.slug}.wav` : mode === "capitalscrambled" ? `sfx/cscr-${item.slug}.wav` : mode === "usstatescrambled" ? `sfx/ussc-${item.slug}.wav` : mode === "missingletters" ? `sfx/mis-${item.slug}.wav` : mode === "emojiword" ? `sfx/ew-${item.slug}.wav` : mode === "slogan" ? `sfx/bs-${item.slug}.wav` : mode === "esongs2" ? `sfx/esg2-${item.id}.wav` : mode === "movies2" ? `sfx/me2-${item.id}.wav` : mode === "egames2" ? `sfx/eg2-${item.id}.wav` : mode === "etv2" ? `sfx/et2-${item.id}.wav` : mode === "ebooks2" ? `sfx/bk2-${item.id}.wav` : `sfx/fl-${item.iso}.wav`;
const answer = (item, mode) => mode === "emojiword" ? item.answer : (mode === "paintings" || mode === "movies" || mode === "efoods" || mode === "esongs" || mode === "egames" || mode === "ecountries" || mode === "ecountries2" || mode === "etv" || mode === "ebrands" || mode === "ebooks" || mode === "esongs2" || mode === "movies2" || mode === "egames2" || mode === "etv2" || mode === "ebooks2") ? item.title : (mode === "logos" || mode === "natteams" || mode === "clubs" || mode === "clubbadges" || mode === "animals" || mode === "foods" || mode === "foods2" || mode === "dogs" || mode === "dogs2" || mode === "cars" || mode === "cars2" || mode === "birds" || mode === "birds2" || mode === "sea" || mode === "sea2" || mode === "fruits" || mode === "flowers" || mode === "flowers2" || mode === "butterflies" || mode === "butterflies2" || mode === "snakes" || mode === "dinos" || mode === "carlogos" || mode === "gaming" || mode === "airlines" || mode === "fastfood" || mode === "fish" || mode === "fish2" || mode === "cocktails" || mode === "drinks" || mode === "breads" || mode === "nuts" || mode === "cacti" || mode === "desserts" || mode === "kitchen" || mode === "spices" || mode === "pasta" || mode === "cheese" || mode === "trains" || mode === "primates" || mode === "boats" || mode === "shells" || mode === "mushrooms" || mode === "mushrooms2" || mode === "aircraft" || mode === "space" || mode === "sports" || mode === "trees" || mode === "tools" || mode === "rocks" || mode === "hats" || mode === "reptiles2" || mode === "reptiles" || mode === "silhouette" || mode === "dinosilhouette" || mode === "animals2" || mode === "animals3" || mode === "landmarks2" || mode === "spiders" || mode === "amphibians" || mode === "horses" || mode === "gems" || mode === "insects" || mode === "insects2" || mode === "cats" || mode === "countryshapes" || mode === "countrymap" || mode === "usstates" || mode === "instruments" || mode === "landmarkzoom" || mode === "foodzoom") ? item.name : mode === "capitals" ? item.capital : item.country || item.name;

const Round = ({ item, mode, num, all, total, zoom }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const accent = LVL[item.level].accent;
  const revealed = frame >= ST.reveal;
  const enter = spring({ frame, fps, config: { damping: 12, mass: 0.7 } });
  const { opts, correctIdx } = buildOptions(item, all, mode);
  const flash = interpolate(frame, [ST.reveal, ST.reveal + 3, ST.reveal + 11], [0, 0.5, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return (
    <AbsoluteFill>
      <div style={{ position: "absolute", top: 120, left: 0, right: 0, textAlign: "center", fontFamily: font, fontWeight: 900, fontSize: 58, color: "#fff", letterSpacing: 1 }}>{QWORD[mode]}</div>
      <div style={{ position: "absolute", top: 208, left: 60, fontFamily: font, fontWeight: 900, fontSize: 40, color: GAME.blueDeep, background: accent, padding: "6px 22px", borderRadius: 12 }}>{num}/{total}</div>
      <div style={{ position: "absolute", top: 208, right: 60, fontFamily: font, fontWeight: 800, fontSize: 40, color: accent }}>{LVL[item.level].label}</div>
      <div style={{ position: "absolute", top: 320, left: 0, right: 0, display: "flex", justifyContent: "center", transform: `scale(${interpolate(enter, [0, 1], [0.6, 1])})`, opacity: enter }}>
        <Clue item={item} mode={mode} revealed={revealed} accent={accent} zoom={zoom} />
      </div>
      {/* 4 خيارات 2×2 */}
      <div style={{ position: "absolute", top: 1030, left: 56, right: 56, display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center" }}>
        {opts.map((nm, i) => {
          const isC = i === correctIdx;
          const os = spring({ frame: frame - 8 - i * 4, fps, config: { damping: 12, mass: 0.6 } });
          const bg = revealed ? (isC ? "#1D9E75" : "rgba(255,60,60,0.14)") : "rgba(255,255,255,0.10)";
          const bd = revealed ? (isC ? "#7CF0C4" : "rgba(255,60,60,0.4)") : "rgba(255,255,255,0.22)";
          const op = (revealed && !isC ? 0.45 : 1) * interpolate(os, [0, 1], [0, 1]);
          return (
            <div key={i} style={{ width: 462, height: 148, display: "flex", alignItems: "center", gap: 16, background: bg, border: `4px solid ${bd}`, borderRadius: 24, padding: "0 24px", opacity: op, transform: `scale(${revealed && isC ? 1.05 : 1}) translateY(${interpolate(os, [0, 1], [24, 0])}px)`, boxShadow: revealed && isC ? `0 0 40px ${accent}` : "none" }}>
              <span style={{ width: 68, height: 68, borderRadius: 16, background: revealed && isC ? "#fff" : GAME.gold, color: GAME.blueDeep, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: font, fontWeight: 900, fontSize: 40, flex: "none" }}>{ABCD[i]}</span>
              <span style={{ fontFamily: font, fontWeight: 900, fontSize: nm.length > 12 ? 38 : 46, color: "#fff", lineHeight: 1 }}>{nm}</span>
              {revealed && isC && <span style={{ marginLeft: "auto", fontFamily: font, fontWeight: 900, fontSize: 52, color: "#fff" }}>✓</span>}
            </div>
          );
        })}
      </div>
      <AbsoluteFill style={{ background: "#fff", opacity: flash, pointerEvents: "none" }} />
      <VTimerBar accent={accent} />
      <Owl revealed={revealed} />
      {TICKS.map((tf) => <Sequence key={tf} from={tf} durationInFrames={12}><Audio src={staticFile("sfx/tick.wav")} volume={0.5} /></Sequence>)}
      <Sequence from={ST.reveal} durationInFrames={40}><Audio src={staticFile("sfx/ding.wav")} volume={0.8} /></Sequence>
      <Sequence from={ST.reveal + 4} durationInFrames={64}><Audio src={staticFile(voFile(item, mode))} volume={1} /></Sequence>
    </AbsoluteFill>
  );
};

const Hook = ({ title }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 11 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", gap: 30, padding: "0 60px" }}>
      <Img src={staticFile("brand/owl-cheer.png")} style={{ width: 300, height: 300, objectFit: "contain", transform: `scale(${interpolate(s, [0, 1], [0.5, 1])})` }} />
      <div style={{ fontFamily: font, fontWeight: 900, fontSize: 96, color: "#fff", textAlign: "center", lineHeight: 1.1 }}>Only <span style={{ color: GAME.gold }}>1%</span> can name these!</div>
      <div style={{ fontFamily: font, fontWeight: 800, fontSize: 54, color: GAME.blueDeep, background: GAME.gold, padding: "14px 40px", borderRadius: 999 }}>{title}</div>
    </AbsoluteFill>
  );
};

const Outro = ({ total }) => {
  const frame = useCurrentFrame();
  const pulse = 1 + 0.05 * Math.sin(frame / 7);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", gap: 40, padding: "0 60px" }}>
      <Img src={staticFile("brand/owl-cheer.png")} style={{ width: 280, height: 280, objectFit: "contain", transform: `translateY(${Math.sin(frame / 10) * 10}px)` }} />
      <div style={{ fontFamily: font, fontWeight: 900, fontSize: 100, color: "#fff", textAlign: "center", lineHeight: 1.1 }}>How many did<br />you get? <span style={{ color: GAME.gold }}>/{total}</span></div>
      <div style={{ fontFamily: font, fontWeight: 800, fontSize: 56, color: "rgba(255,255,255,0.95)" }}>👇 Comment your score</div>
      <div style={{ background: "#FF0000", color: "#fff", fontFamily: font, fontWeight: 800, fontSize: 60, padding: "20px 70px", borderRadius: 999, transform: `scale(${pulse})` }}>SUBSCRIBE</div>
    </AbsoluteFill>
  );
};

const build = (items) => {
  const segs = [{ t: "hook", from: 0, dur: ST.hook }];
  let f = ST.hook, num = 0;
  for (const it of items) { num += 1; segs.push({ t: "round", item: it, num, from: f, dur: ST.round }); f += ST.round; }
  segs.push({ t: "outro", from: f, dur: ST.outro }); f += ST.outro;
  return { segs, total: f };
};

export const ShortV2Quiz = ({ items, mode, title, part = 0, zoom = null, theme = 0 }) => {
  const list = items.length > 8 ? pickShort(items, part) : items;
  const { segs } = build(list);
  const th = THEMES[(theme || 0) % THEMES.length];
  return (
    <AbsoluteFill style={{ backgroundColor: th.d }}>
      <Bg theme={th} />
      <Watermark />
      {segs.map((s, i) => (
        <Sequence key={i} from={s.from} durationInFrames={s.dur}>
          {s.t === "hook" && <Hook title={title} />}
          {s.t === "round" && <Round item={s.item} mode={mode} num={s.num} all={items} total={list.length} zoom={zoom} />}
          {s.t === "outro" && <Outro total={list.length} />}
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

// 8 أسئلة: 66 + 8×190 + 90 = 1676 فريم @30fps = 55.9s (شرط صارم: ≤58s، أبداً >60s)
export const SHORTV2_FRAMES = build(new Array(8).fill(0)).total; // 1676
