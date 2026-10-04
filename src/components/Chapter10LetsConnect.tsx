"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  FacebookIcon,
} from "@/components/SocialIcons";

export default function Chapter10LetsConnect() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Partnerships");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { connect } = SITE_DATA;

  const socialLinks = [
    {
      name: "LinkedIn",
      handle: "in/amanxthink11",
      url: "https://www.linkedin.com/in/amanxthink11",
      icon: <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />,
    },
    {
      name: "GitHub",
      handle: "github.com/amanxthink11",
      url: "https://github.com/amanxthink11",
      icon: <GithubIcon className="w-4 h-4 text-white" />,
    },
    {
      name: "X (Twitter)",
      handle: "@amanxthink11",
      url: "https://x.com/amanxthink11",
      icon: <XIcon className="w-4 h-4 text-white" />,
    },
    {
      name: "Instagram",
      handle: "@amanxthink11",
      url: "https://instagram.com/amanxthink11",
      icon: <InstagramIcon className="w-4 h-4 text-[#e1306c]" />,
    },
    {
      name: "Facebook",
      handle: "facebook.com/amanxthink11",
      url: "https://facebook.com/amanxthink11",
      icon: <FacebookIcon className="w-4 h-4 text-[#1877f2]" />,
    },
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
    const subjectText = `[${selectedTopic}] Note for Aman Singh${name ? ` from ${name}` : ""}`;
    const bodyText = `Hello Aman,\n\nName: ${name || "N/A"}\nEmail: ${email || "N/A"}\nTopic: ${selectedTopic}\n\nMessage:\n${message || "Looking forward to connecting."}\n`;

    const mailtoUrl = `mailto:${SITE_DATA.personal.email}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="connect"
      className="py-24 sm:py-36 relative border-t border-white/[0.06] overflow-hidden scroll-mt-16"
    >
      {/* Anchor aliases for backward compatibility */}
      <span id="contact" className="absolute -top-24 pointer-events-none" />

      {/* Subtle ambient lighting */}
      <div className="ambient-glow w-[550px] h-[550px] bg-[#ff4d2e] bottom-[-100px] left-1/2 -translate-x-1/2 opacity-[0.08]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs font-semibold text-[#ff4d2e] tracking-widest uppercase">
            Chapter 10 / 10
          </span>
          <span className="w-8 h-[1px] bg-white/20" />
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
            Let&apos;s Connect
          </span>
        </div>

        {/* Section Headline & Subtitle */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
            {connect.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            {connect.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Touchpoint & Social Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Email Card with Copy button */}
            <div className="p-6 rounded-2xl bg-[#0c0e15] border border-white/[0.08] shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Email
                </span>
                {copied && (
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Copied
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${SITE_DATA.personal.email}`}
                  className="text-base sm:text-lg font-mono font-medium text-white hover:text-[#ff4d2e] transition-colors truncate"
                >
                  {SITE_DATA.personal.email}
                </a>
                
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
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Location Badge */}
            <div className="p-4 rounded-xl bg-[#0c0e15] border border-white/[0.06] flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#ff4d2e] flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Patna, Bihar, India
                </div>
                <div className="text-xs text-zinc-500 font-mono">
                  Indian Standard Time (IST · UTC+5:30)
                </div>
              </div>
            </div>

            {/* Public Channels List */}
            <div className="pt-2">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">
                Public Channels
              </div>
              <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 flex items-center justify-between text-xs text-zinc-300 hover:text-white transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <span className="font-semibold text-white group-hover:text-[#ff8a65] transition-colors">
                        {item.name}
                      </span>
                      <span className="text-zinc-500 font-mono text-[11px]">
                        {item.handle}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Transparent Mailto Composer */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#0c0e15] border border-white/[0.08] shadow-xl">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  Send a Direct Note
                </h3>
                <p className="text-xs text-zinc-400">
                  Select a topic and compose. Submitting opens your email client directly with everything formatted.
                </p>
              </div>

              <form onSubmit={handleOpenEmail} className="space-y-5">
                {/* Topic Selector */}
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                    Topic
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {connect.topics.map((topic) => (
                      <button
                        key={topic}
                        type="button"
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
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

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="connect-name"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="connect-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Anand Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="connect-email"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      id="connect-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. anand@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="connect-message"
                    className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="connect-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the venture, idea, or problem you want to build or solve..."
                    className="w-full px-4 py-3 rounded-xl bg-[#08090d] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors resize-none"
                  />
                </div>

                {/* Transparent "Open Email" Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium text-sm shadow-lg shadow-[#ff4d2e]/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Email Client</span>
                </button>

                <p className="text-center text-[11px] text-zinc-500 font-mono">
                  Transparent mailto behavior pre-addressed to contact@amanxthink11.com
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
