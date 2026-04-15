"use client";

import Image from "next/image";

export default function About() {
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
          <div className="order-2 max-w-md space-y-4 text-[15px] leading-[1.65] text-[var(--text-secondary)] text-justify lg:order-1 lg:max-w-lg">
            <p>
              I completed my schooling under the Cambridge Board and earned my Bachelor of
              Science in Computer Science & Engineering (CSE) from North South University.
              My academic journey gave me a strong foundation in algorithms, data structures,
              and software architecture.
            </p>
            <p>
              I&apos;m driven by technology&apos;s power to solve real problems. I constantly learn,
              build, and refine because great code creates experiences people love. I&apos;m
              seeking a role where I can contribute, grow, and build impact.
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

          {/* Two Photos Layout - Mobile: 1 column, Desktop: 2 columns */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-3">
              {/* Photo 1 */}
              <div className="md:mt-8 sm:mt-0 group relative overflow-hidden rounded-xl border border-palette-purple/30 bg-[var(--bg-card)] shadow-xl shadow-black/40 ring-1 ring-palette-cyan/15 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-glow-purple">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/about2.jpg"
                    alt="Mahmud Sakib - Portrait 2"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 90vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Photo 2 */}
              <div className="md:mb-8 sm:mb-0 group relative overflow-hidden rounded-xl border border-palette-purple/30 bg-[var(--bg-card)] shadow-xl shadow-black/40 ring-1 ring-palette-cyan/15 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-glow-purple">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/about1.jpg"
                    alt="Mahmud Sakib - Portrait 1"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 90vw, 25vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}