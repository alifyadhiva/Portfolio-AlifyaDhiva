"use client";
import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Metric } from "@/data/projects";
import { Portal, click } from "@/lib/ui";

/* ---------- monitor with gallery ---------- */
export function Monitor({ images }: { images: { src: string; cap: string }[] }) {
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const cur = images[i];
  useEffect(() => {
    if (!zoom) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && setZoom(false);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [zoom]);
  return (
    <div className="monitor">
      <div className="scr">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img key={cur.src} src={`/img/${cur.src}.jpg`} alt={cur.cap} onClick={() => { setZoom(true); click(); }} />
      </div>
      <div className="bar">
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}><span className="led green" />{cur.cap}</span>
        <span style={{ fontFamily: "var(--mono)" }}>{String(i + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span>
      </div>
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((im, n) => (
            <button key={im.src} className={`thumb ${n === i ? "on" : ""}`} onClick={() => { setI(n); click("tick"); }} aria-label={im.cap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/img/${im.src}.jpg`} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
      {zoom && (
        <Portal>
        <div className="lightbox" onClick={() => setZoom(false)} role="dialog" aria-modal="true" aria-label={cur.cap}>
          <button className="iconkey lb-x" onClick={() => setZoom(false)} aria-label="Close"><X size={18} /></button>
          <div className="lb-card" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/img/${cur.src}.jpg`} alt={cur.cap} />
            <div className="t"><b>{cur.cap}</b></div>
          </div>
        </div>
        </Portal>
      )}
    </div>
  );
}

/* ---------- analog gauge ---------- */
export function Gauge({ m }: { m: Metric }) {
  const ref = useRef<SVGSVGElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const frac = Math.max(0, Math.min(1, m.value / m.max));
  const ang = -90 + frac * 180; // -90 .. +90
  const cx = 100, cy = 100, r = 78;
  const pt = (deg: number, rad: number) => {
    const a = ((deg - 90) * Math.PI) / 180;
    return [cx + Math.cos(a) * rad, cy + Math.sin(a) * rad];
  };
  const arc = (a0: number, a1: number, rad: number) => {
    const [x0, y0] = pt(a0, rad);
    const [x1, y1] = pt(a1, rad);
    return `M ${x0} ${y0} A ${rad} ${rad} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}`;
  };
  const ticks = Array.from({ length: 11 }, (_, i) => -90 + i * 18);
  return (
    <div className="dial raised">
      <svg ref={ref} viewBox="0 0 200 128" role="img" aria-label={`${m.label}: ${m.display}`}>
        <defs>
          <radialGradient id="face" cx="50%" cy="30%" r="80%">
            <stop offset="0" stopColor="#fffdf8" /><stop offset="1" stopColor="#e5d9ca" />
          </radialGradient>
          <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f0d9a8" /><stop offset=".5" stopColor="#b9955c" /><stop offset="1" stopColor="#7d5f33" />
          </linearGradient>
        </defs>
        <path d="M 8 108 A 92 92 0 0 1 192 108 L 192 118 L 8 118 Z" fill="url(#brass)" />
        <path d="M 14 108 A 86 86 0 0 1 186 108 L 186 114 L 14 114 Z" fill="url(#face)" />
        <path d={arc(-90, 90, r)} stroke="#d1c3b2" strokeWidth="10" fill="none" strokeLinecap="round" />
        <path d={arc(-90, ang, r)} stroke="#b9955c" strokeWidth="10" fill="none" strokeLinecap="round" style={{ transition: "all 1.2s cubic-bezier(.23,1,.32,1)", opacity: on ? 1 : 0 }} />
        {ticks.map((t, i) => {
          const [x0, y0] = pt(t, r - 12);
          const [x1, y1] = pt(t, r - (i % 5 === 0 ? 24 : 19));
          return <line key={t} x1={x0} y1={y0} x2={x1} y2={y1} stroke="#6a5f57" strokeWidth={i % 5 === 0 ? 2 : 1} />;
        })}
        <g style={{ transform: `rotate(${on ? ang : -90}deg)`, transformOrigin: "100px 100px", transition: "transform 1.4s cubic-bezier(.34,1.56,.64,1)" }}>
          <polygon points="97,100 100,34 103,100" fill="#c0392b" stroke="#7d1f12" strokeWidth=".6" />
          <polygon points="97,100 100,118 103,100" fill="#7d1f12" />
        </g>
        <circle cx="100" cy="100" r="8" fill="url(#brass)" stroke="#5c4421" strokeWidth=".8" />
        <circle cx="98" cy="98" r="2.4" fill="#fff" opacity=".7" />
        <text x="100" y="86" textAnchor="middle" fontFamily="ui-monospace, Menlo, monospace" fontWeight="700" fontSize="15" fill="#3f3731">{m.display}</text>
      </svg>
      <div className="lbl engraved">{m.label}</div>
    </div>
  );
}
