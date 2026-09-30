"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Send } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import { LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Partnership");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const topics = [
    "Partnership",
    "Product Idea",
    "Technology",
    "Collaboration",
    "General Inquiry",
  ];

  const handleCopyEmail = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(SITE_DATA.personal.email)
        .catch(() => {})
        .finally(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2500);
        });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectText = `[${selectedTopic}] Inquiry from ${name || "Founder Contact"}`;
    const bodyText = `Hello Aman,\n\nName: ${name || "N/A"}\nEmail: ${email || "N/A"}\nTopic: ${selectedTopic}\n\nMessage:\n${message || "Looking forward to connecting."}\n`;

    const mailtoUrl = `mailto:${SITE_DATA.personal.email}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="connect" className="py-24 md:py-32 relative border-t border-white/[0.06] overflow-hidden scroll-mt-20">
      {/* Target anchor for legacy #contact links */}
      <span id="contact" className="absolute -top-24" />

      {/* Cinematic ambient glow */}
      <div className="ambient-glow w-[550px] h-[550px] bg-[#ff4d2e] bottom-[-100px] left-1/2 -translate-x-1/2 opacity-[0.09]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with exact requested Headline & Supporting Text */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">09</span>
            <span>/</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
            Let&apos;s build something.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-xl">
            For partnerships, technology, products, or interesting ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Email & Copy Action */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Direct Touchpoint
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                Based in Patna, Bihar, India. Always open to conversations with founders, operators, and engineering leaders.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0c0e15] border border-white/[0.08] mb-4 shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Official Email
                  </span>
                  {copied && (
                    <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      Copied
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-base sm:text-lg font-mono font-medium text-white truncate">
                    {SITE_DATA.personal.email}
                  </span>
                  
                  {/* Requested Copy Email button */}
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.06] hover:bg-[#ff4d2e] text-zinc-200 hover:text-white transition-all text-xs font-medium flex-shrink-0 cursor-pointer"
                    title="Copy email address"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-300" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-xl bg-[#0c0e15] border border-white/[0.06] flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff4d2e] flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Patna, Bihar, India
                  </div>
                  <div className="text-xs text-zinc-500 font-mono">
                    Indian Standard Time (IST • UTC+5:30)
                  </div>
                </div>
              </div>

              {/* LinkedIn Direct CTA */}
              <a
                href="https://www.linkedin.com/in/amanxthink11"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#0c0e15] border border-white/[0.06] hover:border-[#0077b5]/50 flex items-center justify-between text-xs text-zinc-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>Connect on LinkedIn (amanxthink11)</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
              <a
                href="https://www.think11.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                Think11.in <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href="https://indtechmark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                indtechmark.com <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href="https://github.com/amanxthink11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Pre-filled Email Composer (Mailto Form) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0c0e15] border border-white/[0.08] shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  Compose Email Note
                </h3>
                <p className="text-xs text-zinc-400">
                  Select your topic and enter details. Submitting opens your email client directly.
                </p>
              </div>

              <form onSubmit={handleOpenEmail} className="space-y-5">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                    Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          selectedTopic === topic
                            ? "bg-[#ff4d2e] text-white shadow-md shadow-[#ff4d2e]/30"
                            : "bg-[#141724] text-zinc-400 hover:text-white border border-white/[0.06]"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe the opportunity, technology collaboration, or product idea..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors resize-none"
                  />
                </div>

                {/* Explicit "Open Email" CTA button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium text-sm shadow-lg shadow-[#ff4d2e]/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Email</span>
                </button>

                <p className="text-center text-[11px] text-zinc-500 font-mono">
                  Transparent mailto flow pre-addressed to contact@amanxthink11.com
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
