"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
    alt: "Coding",
  },
  {
    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
    alt: "Web Development",
  },
  {
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=1764&q=80",
    alt: "Design",
  },
];

export default function About() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const showSlide = (n) => {
    setCurrent((n + slides.length) % slides.length);
  };

  return (
    <section
      id="about"
      className="flex min-h-0 items-center border-t border-white/5 bg-palette-surface/50 py-12 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-[92%] max-w-6xl">
        <h2 className="section-title-gradient">
          About Me
          <span className="section-title-underline" aria-hidden="true" />
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="order-2 max-w-prose space-y-4 text-[15px] leading-[1.65] text-[var(--text-secondary)] text-justify lg:order-1 lg:max-w-none">
            <p>
              I&apos;m a passionate frontend developer with a strong foundation
              in computer science and engineering. I specialize in creating
              responsive, user-friendly web applications using modern
              technologies like React, Next.js, and Tailwind CSS.
            </p>
            <p>
              I&apos;m dedicated to delivering high-quality, user-focused
              results and continuously expanding my skill set to stay current
              with the latest web development trends and best practices.
            </p>

            <div className="flex flex-col gap-3 py-4 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <div className="stat-card">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1</div>
                <div className="stat-label">Years Exp</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Technologies</div>
              </div>
            </div>

            <a
              href="https://drive.google.com/drive/folders/1GNxdi_2MvfqYiWN88izuvWNujBcSW_Le"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neon-primary inline-flex"
            >
              Download Resume
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="overflow-hidden rounded-xl border border-palette-purple/30 bg-[var(--bg-card)] shadow-xl shadow-black/40 ring-1 ring-palette-cyan/15 backdrop-blur-xl">
              <div className="relative h-[220px] overflow-hidden sm:h-[260px] md:h-[300px]">
                {slides.map((slide, i) => (
                  <div
                    key={slide.alt}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      i === current ? "z-[1] opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t border-white/5 bg-palette-bg/60 px-4 py-3 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => showSlide(current - 1)}
                  className="rounded-lg p-2 text-palette-cyan transition hover:bg-white/5 hover:text-palette-purple hover:shadow-glow-purple"
                  aria-label="Previous slide"
                >
                  <i className="fas fa-chevron-left" />
                </button>
                <div className="flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={`dot-${i}`}
                      type="button"
                      onClick={() => setCurrent(i)}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === current
                          ? "bg-palette-cyan shadow-glow-cyan"
                          : "bg-white/20 hover:bg-palette-purple/60"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => showSlide(current + 1)}
                  className="rounded-lg p-2 text-palette-cyan transition hover:bg-white/5 hover:text-palette-purple hover:shadow-glow-purple"
                  aria-label="Next slide"
                >
                  <i className="fas fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
