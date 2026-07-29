"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("✓ Message ready — connect a backend or emailjs to send it live.");
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-[120px]">
      <div className="container mx-auto max-w-[1240px] px-8">
        <div className="eyebrow">08 — Contact</div>
        <Reveal>
          <h2 className="mb-3.5 font-display text-[clamp(28px,4vw,44px)]">Let&apos;s talk</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-14 max-w-[560px] text-[15.5px] leading-[1.7] text-text1">
            Have a role, project, or question in mind? I&apos;d love to hear from you.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          <Reveal>
            <form onSubmit={handleSubmit} className="glass flex flex-col gap-4 p-9">
              <Field label="Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="Subject" type="text" placeholder="What's this about?" />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-text2">
                  Message
                </label>
                <textarea
                  required
                  placeholder="Write your message..."
                  className="min-h-[110px] resize-y rounded-[10px] border border-glassBrd bg-white/[0.03] px-4 py-3 text-sm text-text0 outline-none transition-colors focus:border-pulse"
                />
              </div>
              <button
                type="submit"
                className="mt-1 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple to-pulseDim px-6 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.6)] transition-transform hover:-translate-y-1"
              >
                Send Message
              </button>
              <div className="h-4 font-mono text-[12.5px] text-pulse">{message}</div>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col justify-between p-9">
              <div>
                <InfoRow icon={<Mail size={17} className="text-pulse" />} label="Email" value={contactInfo.email} />
                <InfoRow icon={<Phone size={17} className="text-pulse" />} label="Phone" value={contactInfo.phone} />
                <InfoRow icon={<MapPin size={17} className="text-pulse" />} label="Location" value={contactInfo.location} last />
              </div>
              <div>
                <div className="mb-2.5 text-[11px] text-text2">Find me on</div>
                <div className="flex gap-3">
                  <SocialIcon icon={<Github size={16} />} label="GitHub" />
                  <SocialIcon
                    icon={<Linkedin size={16} />}
                    label="LinkedIn"
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                  />
                  <SocialIcon icon={<Mail size={16} />} label="Email" />
                  <SocialIcon icon={<Phone size={16} />} label="Phone" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[11px] uppercase tracking-[0.08em] text-text2">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="rounded-[10px] border border-glassBrd bg-white/[0.03] px-4 py-3 text-sm text-text0 outline-none transition-colors focus:border-pulse"
      />
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
  last = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3.5 py-3.5 ${last ? "" : "border-b border-glassBrd"}`}>
      <div className="glass flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center">{icon}</div>
      <div>
        <div className="text-[11px] text-text2">{label}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}

function SocialIcon({
  icon,
  label,
  href
}: {
  icon: React.ReactNode;
  label: string;
  href?: string;
}) {
  return (
    <a
      href={href ?? "#"}
      onClick={href ? undefined : (e) => e.preventDefault()}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-glassBrd text-text1 transition-all hover:-translate-y-1 hover:border-pulse"
    >
      {icon}
    </a>
  );
}
