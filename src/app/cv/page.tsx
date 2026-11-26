import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import Nav from "@/components/Nav";
import { PERSON } from "@/data/site";

export const metadata: Metadata = {
  title: `Curriculum Vitae | ${PERSON.name}`,
  description: `Curriculum vitae of ${PERSON.name}: geologist, GIS analyst and data engineer.`,
};

const PDF = "/certs/cv/Alifya-Awalia-Dhiva-CV.pdf";

export default function CvPage() {
  return (
    <>
      <Nav />
      <main className="pd-top">
        <div className="wrap">
          <Link href="/" className="key sm backlink light"><ArrowLeft size={15} /> Back to Home</Link>
          <div className="shead">
            <div>
              <span className="eyebrow">Curriculum Vitae</span>
              <h1 className="title-lg engraved">{PERSON.name}</h1>
            </div>
            <div className="actions" style={{ marginTop: 0 }}>
              <a className="key brass" href={PDF} download><Download size={17} /> Download CV</a>
              <a className="key light" href={PDF} target="_blank" rel="noreferrer"><ExternalLink size={17} /> Open PDF</a>
            </div>
          </div>
          <div className="cv-desk raised">
            <span className="screw tl" /><span className="screw tr" /><span className="screw bl" /><span className="screw br" />
            {[1, 2].map((p) => (
              <div className="cv-page sheet" key={p}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/certs/cv/pages/cv-${p}.jpg`} alt={`CV page ${p}`} width={1500} height={2121} loading={p === 1 ? "eager" : "lazy"} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
