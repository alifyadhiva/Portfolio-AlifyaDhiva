import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import Nav from "@/components/Nav";
import { Gauge, Monitor } from "@/components/ProjectParts";
import { PROJECTS, bySlug } from "@/data/projects";
import { PERSON } from "@/data/site";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = bySlug(slug);
  return p ? { title: `${p.title} | ${PERSON.name}`, description: p.lead[0] } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();

  return (
    <>
      <Nav />
      <main className="pd-top">
        <div className="wrap">
          <Link href="/#projects" className="key sm backlink light">
            <ArrowLeft size={15} /> Back to Projects
          </Link>

          <div className="pd-hero">
            <div>
              <span className="eyebrow">{p.kicker}</span>
              <h1 className="engraved">{p.title}</h1>
              <div className="lead">{p.lead.map((t) => <p key={t}>{t}</p>)}</div>
              <div className="techs" style={{ marginTop: 14 }}>{p.tech.map((t) => <span className="tech" key={t}>{t}</span>)}</div>
              <div className="meta">
                {[
                  ["Industry", p.meta.industry],
                  ["Project Type", p.meta.type],
                  ["Project Status", p.meta.status],
                  ["Role", p.meta.role],
                ].map(([k, v]) => (
                  <div className="m inset" key={k}><small>{k}</small><b>{v}</b></div>
                ))}
              </div>
              <div className="actions">
                {p.links.map((l) =>
                  l.kind === "soon" ? (
                    <span key={l.label} className="key light" aria-disabled="true"><span className="led off" /> {l.label}</span>
                  ) : (
                    <a key={l.label} className={`key ${l.kind === "demo" ? "brass" : ""}`} href={l.href} target="_blank" rel="noreferrer">
                      {l.kind === "repo" ? <Github size={17} /> : <ExternalLink size={17} />} {l.label} <ArrowRight size={16} />
                    </a>
                  )
                )}
              </div>
            </div>
            <Monitor images={p.images} />
          </div>

          <section className="pd-section">
            <h2 className="engraved">Project Overview</h2>
            <div className="sheet stitch" style={{ padding: "26px 30px", fontSize: 16 }}>
              {p.overview}
            </div>
          </section>

          <section className="pd-section">
            <h2 className="engraved">Key Modules</h2>
            <div className="modules">
              {p.modules.map((m) => (
                <div className="mod sheet" key={m.t}>
                  <b><span className="led" />{m.t}</b>
                  <p>{m.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="pd-section">
            <h2 className="engraved">System Architecture</h2>
            <div className="pipeline raised" style={{ position: "relative" }}>
              <span className="screw tl" /><span className="screw tr" /><span className="screw bl" /><span className="screw br" />
              <b style={{ fontFamily: "var(--serif)", fontSize: 22 }}>{p.archTitle}</b>
              <p style={{ color: "#52483f", margin: "8px 0 0", maxWidth: 860 }}>{p.archDesc}</p>
              <div className="pipe-flow">
                {p.flow.map((f, i) => (
                  <div key={f + i} style={{ display: "flex", alignItems: "center" }}>
                    <div className="pnode leather">{f}</div>
                    {i < p.flow.length - 1 && <span className="ppipe" />}
                  </div>
                ))}
              </div>
              {p.stages && (
                <div className="stages">
                  {p.stages.map((s) => (
                    <div className="stage inset" key={s.title}>
                      <h4>{s.title}</h4>
                      <ul>{s.items.map((it) => <li key={it}>{it}</li>)}</ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {p.metrics && (
            <section className="pd-section">
              <h2 className="engraved">{p.metrics.title}</h2>
              <p style={{ color: "#52483f", maxWidth: 820 }}>{p.metrics.intro}</p>
              <div className="dials">{p.metrics.list.map((m) => <Gauge key={m.label} m={m} />)}</div>
              {p.metrics.notes.length > 0 && (
                <div className="notes">
                  {p.metrics.notes.map((n) => (
                    <div className="note sheet stitch" key={n.h}><h4>{n.h}</h4><p>{n.p}</p></div>
                  ))}
                </div>
              )}
            </section>
          )}

          {p.closing && (
            <section className="pd-section">
              <div className="sheet stitch" style={{ padding: "22px 28px", fontFamily: "var(--serif)", fontSize: 22 }}>{p.closing}</div>
            </section>
          )}

          {p.related && (
            <section className="pd-section" style={{ paddingBottom: 70 }}>
              <h2 className="engraved">See other projects</h2>
              <div className="related">
                {p.related.map((r) => (
                  <Link key={r.slug} href={`/projects/${r.slug}/`} className="key light">
                    {r.label} <ArrowRight size={16} />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}
