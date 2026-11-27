"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Menu, Volume2, VolumeX, X } from "lucide-react";
import { PERSON } from "@/data/site";
import { click } from "@/lib/ui";

const ITEMS = [
  ["home", "Home"],
  ["about", "About"],
  ["projects", "Projects"],
  ["experience", "Experiences"],
  ["certificates", "Certificates"],
  ["contact", "Contact"],
] as const;

export default function Nav({ home = false }: { home?: boolean }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [snd, setSnd] = useState(false);

  useEffect(() => {
    setSnd(localStorage.getItem("snd") === "1");
  }, []);

  useEffect(() => {
    if (!home) return;
    const els = ITEMS.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [home]);

  const goTop = (e: React.MouseEvent) => {
    if (!home) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", "/");
    setActive("home");
  };

  const toggleSound = () => {
    const n = !snd;
    setSnd(n);
    localStorage.setItem("snd", n ? "1" : "0");
    if (n) click("press");
  };

  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-bar">
          <Link href="/" className="brand" aria-label="Home" onClick={goTop}>
            <span className="brand-mono leather">AAD</span>
            <span>
              <span className="brand-name">{PERSON.name}</span>
              <br />
              <span className="brand-role">{PERSON.role}</span>
            </span>
          </Link>
          <nav className={`nav-keys ${open ? "open" : ""}`} aria-label="Primary">
            {ITEMS.map(([id, label]) => (
              <Link
                key={id}
                href={id === "home" ? "/" : `/#${id}`}
                className={`navkey ${home && active === id ? "active" : ""}`}
                onClick={(e) => {
                  if (id === "home") goTop(e);
                  click("tick");
                  setOpen(false);
                }}
              >
                {label}
              </Link>
            ))}
            <Link href="/cv/" className="navkey cv-mobile" onClick={() => { click("tick"); setOpen(false); }}>View CV</Link>
          </nav>
          <div className="nav-right">
            <button className="iconkey" onClick={toggleSound} aria-label={snd ? "Mute click sounds" : "Enable click sounds"} title="Click sounds">
              {snd ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
            <Link className="key sm dl-key" href="/cv/" onClick={() => click()}>
              <FileText size={15} /> View CV
            </Link>
            <button className="iconkey burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
