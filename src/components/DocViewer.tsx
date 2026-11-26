"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Download, ExternalLink, X } from "lucide-react";
import { Portal, click } from "@/lib/ui";

export type Doc = {
  title: string;
  /** page image urls */
  pages: string[];
  pdf: string;
  subtitle?: string;
};

/** Modal viewer: page images work on every device (iOS cannot embed PDFs), PDF stays one click away. */
export default function DocViewer({ doc, onClose }: { doc: Doc; onClose: () => void }) {
  const [i, setI] = useState(0);
  const n = doc.pages.length;

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setI((x) => Math.min(n - 1, x + 1));
      if (e.key === "ArrowLeft") setI((x) => Math.max(0, x - 1));
    };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", h);
      document.body.style.overflow = "";
    };
  }, [n, onClose]);

  return (
    <Portal>
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={doc.title}>
      <div className="viewer" onClick={(e) => e.stopPropagation()}>
        <div className="viewer-bar leather">
          <div style={{ minWidth: 0 }}>
            <b className="viewer-title">{doc.title}</b>
            {doc.subtitle && <small>{doc.subtitle}</small>}
          </div>
          <div className="viewer-actions">
            <a className="iconkey" href={doc.pdf} target="_blank" rel="noreferrer" aria-label="Open PDF in new tab" title="Open PDF"><ExternalLink size={17} /></a>
            <a className="iconkey" href={doc.pdf} download aria-label="Download PDF" title="Download PDF"><Download size={17} /></a>
            <button className="iconkey" onClick={onClose} aria-label="Close"><X size={18} /></button>
          </div>
        </div>
        <div className="viewer-stage">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={doc.pages[i]} src={doc.pages[i]} alt={`${doc.title}, page ${i + 1}`} />
        </div>
        {n > 1 && (
          <div className="viewer-pager">
            <button className="key sm" disabled={i === 0} onClick={() => { setI(i - 1); click("tick"); }}><ChevronLeft size={16} /> Prev</button>
            <span className="lcd-mini">{String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}</span>
            <button className="key sm" disabled={i === n - 1} onClick={() => { setI(i + 1); click("tick"); }}>Next <ChevronRight size={16} /></button>
          </div>
        )}
      </div>
    </div>
    </Portal>
  );
}
