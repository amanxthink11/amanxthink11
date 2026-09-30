"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, MapPin, MessageSquare, Send, Sparkles } from "lucide-react";
import { SITE_DATA } from "@/data/site-data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Partnership");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const topics = [
    "Partnership",
    "Product Idea",
    "Technology",
    "Collaboration",
    "General Conversation",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_DATA.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    
    // Simulate swift client submission & mailto preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      const mailtoUrl = `mailto:${SITE_DATA.personal.email}?subject=${encodeURIComponent(
        `[${selectedTopic}] Note from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Sender: ${formState.name}\nEmail: ${formState.email}\nTopic: ${selectedTopic}\n\nMessage:\n${formState.message}`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative border-t border-white/[0.06]">
      {/* Cinematic ambient glow */}
      <div className="ambient-glow w-[500px] h-[500px] bg-[#ff4d2e] bottom-[-100px] left-1/2 -translate-x-1/2 opacity-[0.08]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-400 mb-4">
            <span className="text-[#ff4d2e]">09</span>
            <span>/</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Let&apos;s build something.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Whether you&apos;re exploring strategic partnerships, discussing a new product concept, evaluating technology infrastructure, or simply want to exchange ideas—my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Touchpoints & Context */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">
                Direct Channels
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-8">
                Based out of Patna, Bihar, India. Operating across global time zones for software development, product architectures, and venture collaborations.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-5 rounded-2xl bg-[#0e1017] border border-white/[0.08] mb-6">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-2">
                  Official Contact Email
                </span>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-base sm:text-lg font-mono font-medium text-white truncate">
                    {SITE_DATA.personal.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-lg bg-white/[0.06] hover:bg-[#ff4d2e] text-zinc-300 hover:text-white transition-all flex-shrink-0"
                    title="Copy Email"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <span className="text-xs text-emerald-400 font-mono mt-2 block">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Location Badge */}
              <div className="p-5 rounded-2xl bg-[#0e1017] border border-white/[0.08] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-[#ff4d2e]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Patna, Bihar, India
                  </div>
                  <div className="text-xs text-zinc-400 font-mono">
                    IST (UTC +5:30) • Tech Entrepreneur
                  </div>
                </div>
              </div>
            </div>

            {/* Quick links to core companies */}
            <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-400 font-mono">
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
                IND Tech Mark <ArrowUpRight className="w-3 h-3" />
              </a>
              <span className="text-zinc-600">•</span>
              <a
                href="https://www.linkedin.com/in/amanxthink11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Professional Form */}
          <div className="lg:col-span-7">
            <div className="founder-card p-7 sm:p-9">
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Message Dispatched
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-md mb-6">
                    Thank you, {formState.name}. Your email client should now be open with your inquiry. You can also reach out directly at {SITE_DATA.personal.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] text-xs font-mono text-white transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Topic Selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2.5">
                      Inquiry Focus
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
                        htmlFor="name"
                        className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                      >
                        Your Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                    >
                      Message / Proposal *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Share a brief overview of the collaboration, idea, or challenge..."
                      className="w-full px-4 py-3 rounded-xl bg-[#0a0b10] border border-white/[0.08] text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-[#ff4d2e] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#ff4d2e] to-[#ff6242] text-white font-medium text-sm shadow-lg shadow-[#ff4d2e]/25 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
