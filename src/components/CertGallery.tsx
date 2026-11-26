"use client";
import { useMemo, useState } from "react";
import { FileText } from "lucide-react";
import { CERT_ITEMS, type CertItem } from "@/data/certs";
import DocViewer, { type Doc } from "./DocViewer";
import { click } from "@/lib/ui";

const dirOf = (k: CertItem["kind"]) => `/certs/${k}`;

export function toDoc(c: CertItem): Doc {
  const d = dirOf(c.kind);
  return {
    title: c.title,
    subtitle: c.kind === "course" ? `Course certificate · ${c.tag}` : "Certificate of appreciation",
    pages: Array.from({ length: c.pages }, (_, i) => `${d}/pages/${c.id}-${i + 1}.jpg`),
    pdf: `${d}/${c.id}.pdf`,
  };
}

export default function CertGallery({ tab, setTab }: { tab: "course" | "appreciation"; setTab: (t: "course" | "appreciation") => void }) {
  const [tag, setTag] = useState("All");
  const [doc, setDoc] = useState<Doc | null>(null);

  const list = useMemo(() => CERT_ITEMS.filter((c) => c.kind === tab), [tab]);
  const tags = useMemo(() => ["All", ...Array.from(new Set(list.map((c) => c.tag)))], [list]);
  const shown = tag === "All" ? list : list.filter((c) => c.tag === tag);

  return (
    <div id="cert-gallery" className="gallery raised">
      <div className="gal-head">
        <div className="switchbar inset" role="tablist" aria-label="Certificate type">
          {(["course", "appreciation"] as const).map((t) => (
            <button key={t} role="tab" aria-selected={tab === t} className={`sw-opt ${tab === t ? "on" : ""}`} style={tab === t ? { background: "linear-gradient(180deg,#8a7d74,#5d534d 55%,#3f3731)", boxShadow: "inset 0 1.5px 0 rgba(255,255,255,.35), 0 3px 6px rgba(40,28,20,.55)" } : undefined} onClick={() => { setTab(t); setTag("All"); click("tick"); }}>
              {t === "course" ? "Course Certificates" : "Certificates of Appreciation"}
              <span className="count">{CERT_ITEMS.filter((c) => c.kind === t).length}</span>
            </button>
          ))}
        </div>
        {tags.length > 2 && (
          <div className="chips">
            {tags.map((t) => (
              <button key={t} className={`chip-f ${tag === t ? "on" : ""}`} onClick={() => { setTag(t); click("tick"); }}>{t}</button>
            ))}
          </div>
        )}
      </div>

      <div className="cert-tiles">
        {shown.map((c) => (
          <button key={c.id} className="ctile sheet" onClick={() => { setDoc(toDoc(c)); click(); }} aria-label={`View ${c.title}`}>
            <span className="cthumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${dirOf(c.kind)}/pages/${c.id}-thumb.jpg`} alt="" loading="lazy" style={{ aspectRatio: String(c.ratio) }} />
            </span>
            <span className="cmeta">
              <b>{c.title}</b>
              <small><FileText size={12} /> {c.tag}{c.pages > 1 ? ` · ${c.pages} pages` : ""}</small>
            </span>
          </button>
        ))}
      </div>
      {doc && <DocViewer doc={doc} onClose={() => setDoc(null)} />}
    </div>
  );
}
