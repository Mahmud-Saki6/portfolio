"use client";

import { useRef, useState } from "react";

const items = [
  {
    iconClass: "fas fa-envelope",
    title: "Email",
    content: "mahmudgazi46@gmail.com",
    href: "mailto:mahmudgazi46@gmail.com",
    external: false,
  },
  {
    iconClass: "fas fa-phone",
    title: "Phone",
    content: "01534844704",
    href: "tel:01534844704",
    external: false,
  },
  {
    iconClass: "fas fa-map-marker-alt",
    title: "Location",
    content: "Dhaka, 1206, Bangladesh",
    href: null,
    external: false,
  },
  {
    iconClass: "fab fa-github",
    title: "GitHub",
    content: "github.com/Mahmud-Saki6",
    href: "https://github.com/Mahmud-Saki6",
    external: true,
  },
];

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => {
        setStatus("idle");
        formRef.current?.reset();
      }, 2000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="border-t border-white/5 bg-palette-surface/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-[90%] max-w-[1720px]">
        <h2 className="section-title-gradient">
          Get In Touch
          <span className="section-title-underline" aria-hidden="true" />
        </h2>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div
                key={item.title}
                className="contact-info-card flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5"
              >
                <div className="contact-icon-circle mx-auto text-xl sm:mx-0">
                  <i className={item.iconClass} />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="mb-1 bg-gradient-to-r from-palette-neon to-palette-cyan bg-clip-text font-bold text-transparent">
                    {item.title}
                  </h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                      className="text-[var(--text-secondary)] transition hover:text-[var(--neon-green)]"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-[var(--text-secondary)]">{item.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form-panel flex flex-col gap-5"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-[var(--text-primary)]">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-[var(--text-primary)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm font-medium text-[var(--text-primary)]">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="form-input"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-[var(--text-primary)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="form-input resize-y"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="btn-neon-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "sending" && "Sending..."}
              {status === "sent" && "Message Sent!"}
              {status === "idle" && "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
