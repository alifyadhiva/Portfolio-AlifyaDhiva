"use client";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Database, FolderOpen, Github, Layers, Linkedin, Mail, MessageCircle, TrendingUp } from "lucide-react";
import { LINKS, PERSON, STATS } from "@/data/site";
import { Odometer, click } from "@/lib/ui";

const ICONS = { folder: FolderOpen, db: Database, layers: Layers, trend: TrendingUp } as const;

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const img = useRef<HTMLElement>(null);

  const move = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !stage.current || !img.current) return;
    const r = stage.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    img.current.style.transform = `rotateY(${x * 9}deg) rotateX(${-y * 5}deg) translateX(${x * 8}px)`;
  };
  const leave = () => img.current && (img.current.style.transform = "");

  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Portfolio · 2026</span>
            <p className="engraved" style={{ fontSize: 20, marginTop: 10 }}>Hi, I&apos;m</p>
            <h1 className="title-xl engraved">{PERSON.name}</h1>
            <p className="role">{PERSON.roles}</p>
            <p className="lead">{PERSON.tagline}</p>
            <div className="hero-actions">
              <a href="#projects" className="key" onClick={() => click()}>
                View my projects <ArrowRight size={18} />
              </a>
              <Link href="/cv/" className="key light" onClick={() => click()}>
                <FileText size={18} /> View CV
              </Link>
            </div>
            <div className="social">
              <span className="lbl">Find me on</span>
              <a className="iconkey" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" onClick={() => click()}><Linkedin size={18} /></a>
              <a className="iconkey" href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub" onClick={() => click()}><Github size={18} /></a>
              <a className="iconkey" href={LINKS.emailCompose} target="_blank" rel="noreferrer" aria-label="Email" onClick={() => click()}><Mail size={18} /></a>
              <a className="iconkey" href={LINKS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" onClick={() => click()}><MessageCircle size={18} /></a>
            </div>
          </div>
          <div className="portrait-stage" ref={stage} onPointerMove={move} onPointerLeave={leave}>
            <figure className="frame" ref={img}>
              <span className="screw tl" /><span className="screw tr" /><span className="screw bl" /><span className="screw br" />
              <div className="frame-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/portrait.jpg" alt="Alifya Awalia Dhiva" width={900} height={1125} />
              </div>
              <figcaption className="plate">Alifya Awalia Dhiva · Geologist</figcaption>
            </figure>
          </div>
        </div>

        <div className="gauges raised">
          {STATS.map((s) => {
            const Icon = ICONS[s.icon as keyof typeof ICONS];
            return (
              <div className="gauge-cell" key={s.label}>
                <span className="gauge-ico leather"><Icon size={26} /></span>
                <div>
                  {s.text ? <div className="gauge-big">{s.text}</div> : <Odometer to={s.value} suffix={s.suffix} />}
                  <div className="gauge-sub">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
