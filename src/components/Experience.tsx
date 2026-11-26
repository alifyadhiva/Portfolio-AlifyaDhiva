"use client";
import { useState } from "react";
import { Database, Map, TrendingUp, Users } from "lucide-react";
import { BRING, JOBS } from "@/data/site";
import { Reveal, click } from "@/lib/ui";

const BICONS = [Database, Map, TrendingUp, Users];

export default function Experience() {
  const [id, setId] = useState(JOBS[0].id);
  const job = JOBS.find((j) => j.id === id)!;
  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal>
          <div className="shead">
            <div>
              <span className="eyebrow">Professional journey</span>
              <h2 className="title-lg engraved">Experiences</h2>
            </div>
            <p>My journey from Geologist to Database Engineer, combining geology, GIS, and data engineering to build digital solutions for mining and operational excellence.</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="folder-tabs" role="tablist" aria-label="Experiences">
            {JOBS.map((j) => (
              <button key={j.id} role="tab" aria-selected={j.id === id} className={`ftab ${j.id === id ? "on" : ""}`} onClick={() => { setId(j.id); click("tick"); }}>
                {j.tab}
                <small>{j.period}</small>
              </button>
            ))}
          </div>
          <div className="folder sheet stitch" key={job.id} style={{ animation: "cardin 420ms var(--ease)" }}>
            <div className="job">
              <span className="badge">{job.period}</span>
              <h3 style={{ marginTop: 10 }}>{job.title}</h3>
              <p className="org">{job.org}</p>
              <p style={{ color: "#52483f", maxWidth: 760 }}>{job.blurb}</p>
              <div className="job-grid">
                <div>
                  <h5>Key Responsibilities</h5>
                  <ul>{job.responsibilities.map((r) => <li key={r}><span className="led" />{r}</li>)}</ul>
                </div>
                <div>
                  <h5>Key Achievements</h5>
                  <ul className="achv inset">{job.achievements.map((r) => <li key={r}><span className="led green" />{r}</li>)}</ul>
                  <h5>Tech Stack</h5>
                  <div className="techs">{job.stack.map((t) => <span className="tech" key={t}>{t}</span>)}</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h3 className="engraved" style={{ fontSize: 28, marginTop: 44 }}>What I Bring</h3>
          <div className="bring">
            {BRING.map((b, n) => {
              const I = BICONS[n];
              return (
                <div className="b raised" key={b.t}>
                  <span className="gauge-ico leather" style={{ width: 44, height: 44 }}><I size={22} /></span>
                  <h4>{b.t}</h4>
                  <p>{b.d}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
