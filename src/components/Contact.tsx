"use client";
import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { LINKS } from "@/data/site";
import { Reveal, click } from "@/lib/ui";

const KEYS = [
  { l: "LinkedIn", v: "linkedin.com/in/alifyadhiva", h: LINKS.linkedin, I: Linkedin },
  { l: "Email", v: LINKS.email, h: LINKS.emailCompose, I: Mail },
  { l: "WhatsApp", v: LINKS.phone, h: LINKS.whatsapp, I: MessageCircle },
  { l: "Instagram", v: "@alifyaaw", h: LINKS.instagram, I: Instagram },
  { l: "GitHub", v: "github.com/alifyadhiva", h: LINKS.github, I: Github },
  { l: "Phone", v: LINKS.phone, h: `tel:+6287734828411`, I: Phone },
];

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <Reveal>
          <div className="desk">
            <div className="bg" />
            <span className="screw tl" /><span className="screw tr" /><span className="screw bl" /><span className="screw br" />
            <span className="eyebrow" style={{ color: "#d9c7ad", textShadow: "none" }}>Contact</span>
            <h2>Reach Out to Me</h2>
            <p>Have a data, GIS, or mining project in mind? Press a key to start the conversation.</p>
            <div className="contact-keys">
              {KEYS.map(({ l, v, h, I }) => (
                <a key={l} className="ckey" href={h} target={h.startsWith("tel") ? undefined : "_blank"} rel="noreferrer" onClick={() => click()}>
                  <span className="ci leather"><I size={20} /></span>
                  <span><small>{l}</small><b>{v}</b></span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="footer">© 2026 Alifya Awalia Dhiva · Data Engineer | GIS Analyst | Geologist</p>
      </div>
    </section>
  );
}
