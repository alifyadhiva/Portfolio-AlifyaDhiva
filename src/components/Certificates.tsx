"use client";
import { useEffect, useState } from "react";
import { ExternalLink, FolderOpen, X, Award } from "lucide-react";
import { CERTS } from "@/data/site";
import CertGallery from "./CertGallery";
import { CERT_ITEMS } from "@/data/certs";
import { Portal, Reveal, click } from "@/lib/ui";

type Light = { img: string; title: string; sub: string } | null;

export default function Certificates() {
  const [lb, setLb] = useState<Light>(null);
  const [tab, setTab] = useState<"course" | "appreciation">("course");
  const openGallery = (t: "course" | "appreciation") => {
    setTab(t);
    click();
    document.getElementById("cert-gallery")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const count = (k: string) => CERT_ITEMS.filter((c) => c.kind === k).length;

  useEffect(() => {
    if (!lb) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && setLb(null);
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lb]);

  return (
    <section id="certificates" className="section">
      <div className="wrap">
        <Reveal>
          <div className="shead">
            <div>
              <span className="eyebrow">Credentials</span>
              <h2 className="title-lg engraved">Certificates, Honors & Publications</h2>
            </div>
            <p>Courses, awards, conference papers and peer-review activity, with the full certificates one click away.</p>
          </div>
        </Reveal>

        <div className="cert-grid">
          <Reveal>
            <div className="cert-card sheet stitch">
              <span className="eyebrow">Course & certificate</span>
              <h3>Course Certificate</h3>
              <ul className="cert-list">
                {CERTS.course.map((c) => <li key={c}><span className="led" />{c}</li>)}
              </ul>
              <button className="key sm" onClick={() => openGallery("course")}>
                <FolderOpen size={15} /> View All Course Certificates ({count("course")})
              </button>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="cert-card sheet stitch">
              <span className="eyebrow">Honor & awards</span>
              <h3>Certificate of Appreciation</h3>
              <ul className="cert-list">
                {CERTS.appreciation.map((c) => <li key={c}><Award size={16} />{c}</li>)}
              </ul>
              <button className="key sm" onClick={() => openGallery("appreciation")}>
                <FolderOpen size={15} /> View All Certificates of Appreciation ({count("appreciation")})
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div style={{ marginTop: 28 }}><CertGallery tab={tab} setTab={setTab} /></div>
        </Reveal>

        <Reveal>
          <div className="board">
            <h3>Honor &amp; Awards</h3>
            <div className="polaroids">
              {CERTS.honors.map((h) => (
                <button
                  key={h.event}
                  className="polaroid"
                  onClick={() => { setLb({ img: h.img, title: h.event, sub: `${h.what}: ${h.detail}` }); click(); }}
                  aria-label={`Open ${h.event}`}
                >
                  <span className="pin" />
                  <div className="pimg">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={`/img/${h.img}.jpg`} alt={h.event} loading="lazy" /></div>
                  <div className="cap">{h.event}</div>
                  <div className="sub">{h.what}</div>
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="papers">
          {CERTS.papers.map((p, n) => (
            <Reveal key={p.title} delay={n * 90}>
              <article className="paper sheet stitch">
                <span className="eyebrow">Publication · Scientific</span>
                <h4>{p.title}</h4>
                <div className="venue">{p.venue}</div>
                <p>{p.text}</p>
                <a className="key sm" style={{ alignSelf: "flex-start" }} href={p.href} target="_blank" rel="noreferrer" onClick={() => click()}>
                  Read more <ExternalLink size={14} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {lb && (
        <Portal>
        <div className="lightbox" onClick={() => setLb(null)} role="dialog" aria-modal="true" aria-label={lb.title}>
          <button className="iconkey lb-x" onClick={() => setLb(null)} aria-label="Close"><X size={18} /></button>
          <div className="lb-card" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/img/${lb.img}.jpg`} alt={lb.title} />
            <div className="t"><b>{lb.title}</b><span style={{ fontSize: 14, color: "var(--ink-soft)" }}>{lb.sub}</span></div>
          </div>
        </div>
        </Portal>
      )}
    </section>
  );
}
