"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, Check, AlertCircle, Loader2 } from "lucide-react";
import SectionWrapper, { SectionHeader } from "@/components/ui/SectionWrapper";
import { personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "loading" | "success" | "error";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: Github,
    username: "@" + personalInfo.github.split("/").pop(),
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: Linkedin,
    username: "Connect on LinkedIn",
  },
  {
    label: "Email",
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    username: personalInfo.email,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

    if (!formspreeId || formspreeId === "xxxxxxxx") {
      await new Promise((r) => setTimeout(r, 1200));
      setStatus("success");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        throw new Error(data.error || "Failed to send message.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "An unexpected error occurred.");
    }
  };

  const inputClass =
    "w-full px-4 py-3 text-sm bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border rounded-lg text-ink dark:text-night-text placeholder:text-ink-tertiary dark:placeholder:text-night-secondary-text focus:outline-none focus:border-amber/60 focus:ring-1 focus:ring-amber/20 transition-all duration-200";

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        eyebrow="Get in Touch"
        title="Let's work together."
        subtitle="I'm open to freelance projects, full-time roles, and interesting conversations."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55 }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <div>
            <p className="text-ink-secondary dark:text-night-secondary-text leading-relaxed text-sm md:text-base">
              Whether you have a project in mind, an opportunity to discuss, or just want to
              say hi. My inbox is always open.
            </p>
            <p className="mt-3 text-ink-secondary dark:text-night-secondary-text leading-relaxed text-sm md:text-base">
              I typically reply within 24–48 hours.
            </p>
          </div>

          <div className="space-y-3">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon, username }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-4 p-4 rounded-xl bg-canvas-secondary dark:bg-night-secondary border border-border-light dark:border-night-border hover:border-amber/40 hover:bg-amber/5 transition-all duration-200 group"
                aria-label={`${label}: ${username}`}
              >
                <div className="p-2 rounded-lg bg-amber/10 text-amber shrink-0">
                  <Icon size={16} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-mono text-ink-tertiary dark:text-night-secondary-text uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm text-ink dark:text-night-text group-hover:text-amber transition-colors">
                    {username}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="lg:col-span-3"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center gap-4 rounded-2xl bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border">
              <div className="p-4 rounded-full bg-green-500/10 text-green-500">
                <Check size={28} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink dark:text-night-text mb-2">
                  Message sent!
                </h3>
                <p className="text-sm text-ink-secondary dark:text-night-secondary-text">
                  Thanks for reaching out. I&apos;ll  get back to you soon.
                </p>
              </div>
              <button
                onClick={() => setStatus("idle")}
                className="text-sm text-amber hover:underline mt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 md:p-8 rounded-2xl bg-canvas dark:bg-night-secondary border border-border-light dark:border-night-border space-y-5"
              aria-label="Contact form"
            >

              <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-ink-tertiary dark:text-night-secondary-text uppercase tracking-wider mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Smith"
                    className={inputClass}
                    aria-required="true"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-ink-tertiary dark:text-night-secondary-text uppercase tracking-wider mb-1.5"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className={inputClass}
                    aria-required="true"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono text-ink-tertiary dark:text-night-secondary-text uppercase tracking-wider mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry / Job opportunity / Other"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-ink-tertiary dark:text-night-secondary-text uppercase tracking-wider mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className={cn(inputClass, "resize-none")}
                  aria-required="true"
                />
              </div>

              {status === "error" && (
                <div
                  className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm"
                  role="alert"
                >
                  <AlertCircle size={15} aria-hidden="true" />
                  {errorMessage || "Something went wrong. Please try again."}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-amber text-night font-medium rounded-lg hover:bg-amber/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-amber/20 hover:shadow-amber/30 hover:-translate-y-0.5 active:translate-y-0"
                aria-disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" aria-hidden="true" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
