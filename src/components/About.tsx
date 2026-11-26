"use client";
import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { ABOUT, LINKS } from "@/data/site";
import { Reveal, click } from "@/lib/ui";

const N = ABOUT.skills.length;
const SPAN = 240; // degrees of travel
const angleOf = (i: number) => -SPAN / 2 + (SPAN / (N - 1)) * i;

function Knob({ value, onChange }: { value: number; onChange: (i: number) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(false);
  const [live, setLive] = useState<number | null>(null);

  const calc = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    let a = (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI + 90; // 0 = up
    if (a > 180) a -= 360;
    a = Math.max(-SPAN / 2, Math.min(SPAN / 2, a));
    return a;
  };
  const snap = (a: number) => Math.round(((a + SPAN / 2) / SPAN) * (N - 1));

  const down = (e: React.PointerEvent) => {
    (e.target as Element).setPointerCapture(e.pointerId);
    setDrag(true);
    setLive(calc(e));
  };
  const move = (e: React.PointerEvent) => {
    if (!drag) return;
    const a = calc(e);
    setLive(a);
    const i = snap(a);
    if (i !== value) {
      onChange(i);
      click("tick");
    }
  };
  const up = () => {
    setDrag(false);
    setLive(null);
  };
  const key = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowUp") onChange(Math.min(N - 1, value + 1));
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") onChange(Math.max(0, value - 1));
  };

  const rot = live ?? angleOf(value);
  return (
    <div className="knob-dial">
      <div className="knob-ticks">
        {ABOUT.skills.map((s, i) => {
          const a = ((angleOf(i) - 90) * Math.PI) / 180;
          const x = 50 + Math.cos(a) * 52;
          const y = 50 + Math.sin(a) * 52;
          return (
            <button
              key={s.key}
              className={`tick-lbl ${i === value ? "on" : ""}`}
              style={{ left: `${x}%`, top: `${y}%` }}
              onClick={() => {
                onChange(i);
                click("tick");
              }}
              aria-label={s.key}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          );
        })}
      </div>
      <div
        ref={ref}
        className={`knob ${drag ? "drag" : ""}`}
        style={{ transform: `rotate(${rot}deg)` }}
        role="slider"
        tabIndex={0}
        aria-label="Skill category"
        aria-valuemin={1}
        aria-valuemax={N}
        aria-valuenow={value + 1}
        aria-valuetext={ABOUT.skills[value].key}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        onKeyDown={key}
      />
    </div>
  );
}

export default function About() {
  const [i, setI] = useState(0);
  const sk = ABOUT.skills[i];
  const e = ABOUT.education;
  return (
    <section id="about" className="section">
      <div className="wrap">
        <Reveal>
          <div className="shead">
            <div>
              <span className="eyebrow">About me</span>
              <h2 className="title-lg engraved">{ABOUT.headline}</h2>
            </div>
            <p>{ABOUT.intro}</p>
          </div>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <div className="profile raised">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="photo"><img src="/img/portrait.jpg" alt="Alifya Awalia Dhiva" /></div>
              <div className="edu">
                <span className="eyebrow">Education</span>
                <h4>{e.school}</h4>
                <p style={{ fontWeight: 600 }}>{e.degree}</p>
                <p style={{ margin: "8px 0" }}><span className="badge">GPA {e.gpa}</span></p>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>
                  <b>Final Project:</b> {e.finalProject}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="summary-box sheet stitch">
              <span className="eyebrow">Summary</span>
              <h3>Data Engineer with a Geology foundation</h3>
              <p style={{ fontSize: 15, color: "#52483f" }}>{ABOUT.summary}</p>
              <div className="strengths">
                {ABOUT.strengths.map((s) => (
                  <div key={s} className="strength inset"><Check size={16} /> {s}</div>
                ))}
              </div>
              <p style={{ marginTop: 22 }}>
                <a href="#projects" className="key sm" onClick={() => click()}>See Projects <ArrowRight size={15} /></a>
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="rack raised" style={{ position: "relative" }}>
            <span className="screw tl" /><span className="screw tr" /><span className="screw bl" /><span className="screw br" />
            <div className="knob-wrap">
              <Knob value={i} onChange={setI} />
              <span className="eyebrow">Turn to tune skills</span>
            </div>
            <div className="lcd" aria-live="polite">
              <div className="k"><span className="led" /> TECHNICAL SKILLS · {String(i + 1).padStart(2, "0")}/{String(N).padStart(2, "0")} · {sk.key}</div>
              <div className="keycaps" key={sk.key}>
                {sk.items.map((s, n) => (
                  <span className="keycap" key={s} style={{ animationDelay: `${n * 50}ms` }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p style={{ textAlign: "center", marginTop: 30, fontFamily: "var(--serif)", fontSize: 24 }} className="engraved">
            Let&apos;s build data-driven solutions together!
          </p>
          <p style={{ textAlign: "center", marginTop: 8, fontSize: 14 }}>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">linkedin.com/in/alifyadhiva</a> ·{" "}
            <a href={LINKS.github} target="_blank" rel="noreferrer">github.com/alifyadhiva</a> ·{" "}
            <a href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
