"use client";
import { useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { ArrowRight, Database, Layers, Brain } from "lucide-react";
import { CARDS, type Cat } from "@/data/projects";
import { Reveal, Tilt, click } from "@/lib/ui";

const FILTERS: { id: "all" | Cat; label: string }[] = [
  { id: "all", label: "All" },
  { id: "data", label: "Data" },
  { id: "ml", label: "ML" },
  { id: "gis", label: "GIS" },
];

const GROUPS: { id: Cat; title: string; icon: typeof Database; color: string }[] = [
  { id: "data", title: "Data Projects", icon: Database, color: "leather" },
  { id: "ml", title: "ML Analysis", icon: Brain, color: "leather" },
  { id: "gis", title: "GIS, Geology, and Mining Projects", icon: Layers, color: "leather" },
];

export default function Projects() {
  const [f, setF] = useState<"all" | Cat>("all");
  const refs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [thumb, setThumb] = useState({ left: 6, width: 60 });

  useLayoutEffect(() => {
    const el = refs.current[f];
    if (el) setThumb({ left: el.offsetLeft, width: el.offsetWidth });
  }, [f]);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal>
          <div className="shead">
            <div>
              <span className="eyebrow">Selected work</span>
              <h2 className="title-lg engraved">Projects</h2>
            </div>
            <div style={{ display: "grid", gap: 14, justifyItems: "end" }}>
              <p>A collection of my work in data engineering, GIS Analysis, Geology and Mining</p>
              <div className="switchbar inset" role="tablist" aria-label="Filter projects">
                <span className="sw-thumb" style={{ left: thumb.left, width: thumb.width }} />
                {FILTERS.map((x) => (
                  <button
                    key={x.id}
                    ref={(el) => { refs.current[x.id] = el; }}
                    role="tab"
                    aria-selected={f === x.id}
                    className={`sw-opt ${f === x.id ? "on" : ""}`}
                    onClick={() => { setF(x.id); click("tick"); }}
                  >
                    {x.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {GROUPS.filter((g) => f === "all" || f === g.id).map((g) => (
          <div key={g.id + f}>
            <div className="group-title">
              <span className={`chip ${g.color}`}><g.icon size={22} /></span>
              <h3 className="engraved">{g.title}</h3>
              <span className="rule" />
            </div>
            <div className="cards">
              {CARDS.filter((c) => c.cat === g.id).map((c, n) => (
                <Tilt key={c.id} className="card sheet" max={5}>
                  <div style={{ animationDelay: `${n * 60}ms`, display: "contents" }}>
                    <span className="pin" />
                    <div className="shot">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`/img/${c.img}.jpg`} alt={c.title} loading="lazy" />
                    </div>
                    <h4>{c.title}</h4>
                    <p>{c.text}</p>
                    <div className="techs">{c.tech.map((t) => <span className="tech" key={t}>{t}</span>)}</div>
                    {c.href ? (
                      <Link href={c.href} className="key block" onClick={() => click()}>
                        View Projects <ArrowRight size={16} />
                      </Link>
                    ) : (
                      <span className="key block" aria-disabled="true" style={{ cursor: "default" }}>
                        <span className="led" /> Ongoing Projects
                      </span>
                    )}
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
