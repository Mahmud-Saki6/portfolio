import Image from "next/image";

function OrbitSatellite({ className, children }) {
  return (
    <div
      className={`hero-orbit-sat ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(100dvh,880px)] items-center overflow-x-hidden bg-gradient-to-br from-palette-bg via-palette-surface/90 to-palette-bg pt-20 pb-12 sm:pt-24 sm:pb-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(0,255,170,0.14),transparent_50%),radial-gradient(ellipse_60%_40%_at_90%_60%,rgba(168,85,247,0.1),transparent)]" />

      <div className="relative mx-auto grid w-[92%] max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="hero-badge mb-3">
            <span className="hero-badge-dot" aria-hidden="true" />
            Software Developer
          </span>
          <h1 className="mb-4 text-[clamp(1.625rem,4vw,2.25rem)] font-semibold leading-[1.2] tracking-tight text-white">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mahmud Sakib
            </span>
          </h1>
          <p className="mb-6 max-w-xl text-[15px] leading-[1.65] text-[var(--text-secondary)] text-justify lg:max-w-lg lg:text-left">
            I&apos;m a motivated Computer Science graduate who turns ideas into real, functional web applications. I specialize in building full-stack SaaS products from database design to polished UI/UX. My toolkit includes React, Next.js, Node.js, and PostgreSQL, but my real strength is understanding what users need and delivering experiences they genuinely enjoy.
          </p>
          <div className="mb-5 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            <a href="#projects" className="btn-neon-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-neon-outline">
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center gap-2.5 lg:justify-start">
            <a
              href="https://github.com/Mahmud-Saki6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-palette-surface/80 text-sm text-[var(--text-secondary)] shadow-md transition hover:border-palette-purple hover:text-palette-purple hover:shadow-glow-purple"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmud-sakib-3096b82b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-palette-surface/80 text-sm text-[var(--text-secondary)] shadow-md transition hover:border-palette-purple hover:text-palette-purple hover:shadow-glow-purple"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-palette-surface/80 text-sm text-[var(--text-secondary)] shadow-md transition hover:border-palette-purple hover:text-palette-purple hover:shadow-glow-purple"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2">
          <div
            className="relative mx-auto flex min-h-[min(88vw,18rem)] min-w-[min(88vw,18rem)] items-center justify-center px-3 py-8 sm:min-h-[min(82vw,20rem)] sm:min-w-[min(82vw,20rem)] sm:px-4 sm:py-10 md:min-h-[min(78vw,22rem)] md:min-w-[min(78vw,22rem)] md:px-6 md:py-12 lg:min-h-[26rem] lg:min-w-[26rem] lg:px-8 lg:py-12"
            style={{ perspective: "1200px" }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-palette-neon/[0.09] sm:h-[15rem] sm:w-[15rem] md:h-[16.5rem] md:w-[16.5rem] lg:h-[19.5rem] lg:w-[19.5rem]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[10.5rem] w-[10.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-palette-cyan/[0.07] sm:h-48 sm:w-48 md:h-[13.5rem] md:w-[13.5rem]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[8] h-0 w-0 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              aria-hidden="true"
            >
              <div className="[transform:rotateX(8deg)]">
                <OrbitSatellite className="hero-orbit-a opacity-[0.88]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-neon/35 bg-palette-surface/95 text-palette-neon shadow-glow-neon ring-1 ring-palette-neon/25 backdrop-blur-sm">
                    <i className="fab fa-react text-sm sm:text-base" />
                  </div>
                </OrbitSatellite>
                <OrbitSatellite className="hero-orbit-b opacity-[0.85]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-purple/40 bg-palette-surface/95 text-palette-purple shadow-glow-purple ring-1 ring-palette-purple/30 backdrop-blur-sm">
                    <i className="fab fa-js text-sm sm:text-base" />
                  </div>
                </OrbitSatellite>
                <OrbitSatellite className="hero-orbit-c opacity-[0.88]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-cyan/40 bg-palette-surface/95 text-palette-cyan shadow-glow-cyan ring-1 ring-palette-cyan/30 backdrop-blur-sm">
                    <i className="fab fa-figma text-sm sm:text-base" />
                  </div>
                </OrbitSatellite>
                <OrbitSatellite className="hero-orbit-d hidden opacity-80 sm:flex sm:opacity-90">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-neon/35 bg-palette-surface/95 text-palette-neon shadow-glow-neon ring-1 ring-palette-purple/25 backdrop-blur-sm">
                    <i className="fab fa-python text-sm sm:text-base" aria-hidden="true" />
                  </div>
                </OrbitSatellite>
              </div>
            </div>

            <div className="relative z-20 h-[190px] w-[190px] overflow-hidden rounded-full border-[6px] border-palette-surface shadow-xl shadow-black/60 ring-2 ring-palette-neon/25 sm:h-[210px] sm:w-[210px] md:h-[240px] md:w-[240px] lg:h-[270px] lg:w-[270px]">
              <Image
                src="/images/hero.jpeg"
                alt="Mahmud Sakib"
                width={280}
                height={280}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
