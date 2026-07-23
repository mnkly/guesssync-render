// عرض تجريبي: إطار سؤال إيموجي-ريبَس داخل الفيديو (ستايل GuessSync الحقيقي) — للمعاينة فقط
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { loadFont as loadMont } from "@remotion/google-fonts/Montserrat";
const font = loadMont("normal", { weights: ["700", "800", "900"] }).fontFamily;
const G = { gold: "#FFC53D", deep: "#360E26" };
const TH = { b: "#B0316F", m: "#58183D", d: "#360E26" }; // theme 4 berry

export const RebusDemo = ({ e1 = "sun", e2 = "flower", answer = "Sunflower", opts = ["Marigold", "Sunflower", "Daisy", "Tulip"], correct = 1, num = 3 }) => (
  <AbsoluteFill style={{ fontFamily: font, backgroundColor: TH.d }}>
    {/* خلفية متدرّجة كاللعبة */}
    <AbsoluteFill style={{ background: `radial-gradient(85% 95% at 50% 34%, ${TH.b} 0%, ${TH.m} 52%, ${TH.d} 100%)` }} />
    <AbsoluteFill style={{ background: "repeating-conic-gradient(from 90deg at 50% 38%, rgba(255,197,61,0.06) 0deg 4deg, transparent 4deg 13deg)", maskImage: "radial-gradient(circle at 50% 38%, #000 3%, transparent 52%)", WebkitMaskImage: "radial-gradient(circle at 50% 38%, #000 3%, transparent 52%)" }} />

    {/* عدّاد التقدّم */}
    <div style={{ position: "absolute", top: 54, left: 60, fontWeight: 900, fontSize: 40, color: G.deep, background: "#FFD23F", padding: "8px 24px", borderRadius: 14, boxShadow: "0 0 26px #FFD23F" }}>
      {num}<span style={{ opacity: 0.65, fontSize: 26 }}> / 100</span>
    </div>
    {/* تير */}
    <div style={{ position: "absolute", top: 60, right: 60, fontWeight: 800, fontSize: 40, color: "#FFD23F" }}>EASY</div>

    {/* الهيدر */}
    <div style={{ position: "absolute", top: 150, left: 0, right: 0, textAlign: "center", fontWeight: 900, fontSize: 66, color: "#fff", letterSpacing: 1, textShadow: "0 4px 14px rgba(0,0,0,0.5)" }}>
      GUESS THE <span style={{ color: G.gold }}>WORD</span>
    </div>

    {/* بطاقة الريبَس (الإيموجيان) */}
    <div style={{ position: "absolute", top: 250, left: 340, right: 340, height: 300, background: "#fff", borderRadius: 36, display: "flex", alignItems: "center", justifyContent: "center", gap: 30, boxShadow: "0 18px 50px rgba(0,0,0,0.5)", border: `8px solid ${G.gold}` }}>
      <Img src={staticFile(`emoji3d/${e1}.png`)} style={{ width: 230, height: 230, objectFit: "contain" }} />
      <span style={{ fontWeight: 900, fontSize: 100, color: "#B0316F" }}>+</span>
      <Img src={staticFile(`emoji3d/${e2}.png`)} style={{ width: 230, height: 230, objectFit: "contain" }} />
    </div>

    {/* ٤ خيارات 2×2 */}
    <div style={{ position: "absolute", top: 600, left: 200, right: 200, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
      {opts.map((o, i) => {
        const isC = i === correct;
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 18, background: isC ? "#1FBF5A" : "rgba(10,8,25,0.55)", border: `5px solid ${isC ? "#8CFFB6" : "rgba(255,255,255,0.25)"}`, borderRadius: 22, padding: "18px 28px", boxShadow: isC ? "0 0 30px rgba(31,191,90,0.6)" : "none" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: isC ? "#fff" : G.gold, color: G.deep, fontWeight: 900, fontSize: 34, display: "flex", alignItems: "center", justifyContent: "center" }}>{["A", "B", "C", "D"][i]}</span>
            <span style={{ fontWeight: 800, fontSize: 46, color: "#fff" }}>{o}</span>
            {isC && <span style={{ marginLeft: "auto", fontSize: 46 }}>✅</span>}
          </div>
        );
      })}
    </div>

    {/* شريط تايمر */}
    <div style={{ position: "absolute", left: 360, right: 360, bottom: 92 }}>
      <div style={{ position: "absolute", right: 4, top: -54, fontWeight: 900, fontSize: 40, color: "#fff", background: "rgba(6,10,32,0.5)", padding: "2px 20px", borderRadius: 999 }}>2.1s</div>
      <div style={{ height: 42, borderRadius: 999, background: "rgba(6,10,32,0.5)", border: `4px solid ${G.gold}`, overflow: "hidden" }}>
        <div style={{ width: "62%", height: "100%", borderRadius: 999, background: "#FF9F40", boxShadow: "0 0 24px #FF9F40" }} />
      </div>
    </div>

    {/* بومة تفكّر */}
    <Img src={staticFile("brand/owl-think.png")} style={{ position: "absolute", right: 40, bottom: 24, width: 236, height: 236, objectFit: "contain", filter: "drop-shadow(0 12px 26px rgba(0,0,0,0.5))" }} />
    {/* واترمارك */}
    <div style={{ position: "absolute", bottom: 36, left: 52, display: "flex", alignItems: "center", gap: 11, fontWeight: 900, fontSize: 32, color: "rgba(255,255,255,0.9)" }}>
      <span style={{ width: 16, height: 16, borderRadius: "50%", border: `4px solid ${G.gold}` }} />GUESS<span style={{ color: G.gold }}>SYNC</span>
    </div>
  </AbsoluteFill>
);
