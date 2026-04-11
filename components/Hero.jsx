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
      className="relative flex min-h-screen items-center overflow-x-hidden bg-gradient-to-br from-palette-bg via-palette-surface/90 to-palette-bg pt-28 pb-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-15%,rgba(0,255,170,0.14),transparent_50%),radial-gradient(ellipse_60%_40%_at_90%_60%,rgba(168,85,247,0.1),transparent)]" />

      <div className="relative mx-auto grid w-[90%] max-w-[1720px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="hero-badge mb-4">
            <span className="hero-badge-dot" aria-hidden="true" />
            Software Developer
          </span>
          <h1 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.2rem] xl:text-5xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Mahmud Sakib
            </span>
          </h1>
          <p className="mb-8 max-w-xl text-base text-[var(--text-secondary)] sm:text-lg lg:max-w-[90%]">
          A motivated Computer Science graduate passionate about building full-stack web applications and SaaS products with a strong UI/UX focus. Experienced in React/Next.js, Node.js/NestJS, and PostgreSQL. Great code deserves great user experience.          </p>
          <div className="mb-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a href="#projects" className="btn-neon-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-neon-outline">
              Get In Touch
            </a>
          </div>
          <div className="flex justify-center gap-3 lg:justify-start">
            <a
              href="https://github.com/Mahmud-Saki6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-palette-surface/80 text-[var(--text-secondary)] shadow-md transition hover:border-palette-purple hover:text-palette-purple hover:shadow-glow-purple"
              aria-label="GitHub"
            >
              <i className="fab fa-github" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahmud-sakib-3096b82b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-palette-surface/80 text-[var(--text-secondary)] shadow-md transition hover:border-palette-purple hover:text-palette-purple hover:shadow-glow-purple"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-palette-surface/80 text-[var(--text-secondary)] shadow-md transition hover:border-palette-purple hover:text-palette-purple hover:shadow-glow-purple"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
          </div>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2">
          <div
            className="relative mx-auto flex min-h-[min(92vw,26rem)] min-w-[min(92vw,26rem)] items-center justify-center px-4 py-10 sm:min-h-[min(85vw,28rem)] sm:min-w-[min(85vw,28rem)] sm:px-6 sm:py-12 md:min-h-[min(80vw,32rem)] md:min-w-[min(80vw,32rem)] md:px-8 md:py-14 lg:min-h-[36rem] lg:min-w-[36rem] lg:px-10 lg:py-16"
            style={{ perspective: "1200px" }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[17.5rem] w-[17.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-palette-neon/[0.09] sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[26rem] lg:w-[26rem]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[14rem] w-[14rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-palette-cyan/[0.07] sm:h-[16rem] sm:w-[16rem] md:h-[18rem] md:w-[18rem]"
              aria-hidden="true"
            />

            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-[8] h-0 w-0 -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d]"
              aria-hidden="true"
            >
              <div className="[transform:rotateX(8deg)]">
                <OrbitSatellite className="hero-orbit-a opacity-[0.88]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-neon/35 bg-palette-surface/95 text-palette-neon shadow-glow-neon ring-1 ring-palette-neon/25 backdrop-blur-sm">
                    <i className="fab fa-react text-base sm:text-lg" />
                  </div>
                </OrbitSatellite>
                <OrbitSatellite className="hero-orbit-b opacity-[0.85]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-purple/40 bg-palette-surface/95 text-palette-purple shadow-glow-purple ring-1 ring-palette-purple/30 backdrop-blur-sm">
                    <i className="fab fa-js text-base sm:text-lg" />
                  </div>
                </OrbitSatellite>
                <OrbitSatellite className="hero-orbit-c opacity-[0.88]">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-cyan/40 bg-palette-surface/95 text-palette-cyan shadow-glow-cyan ring-1 ring-palette-cyan/30 backdrop-blur-sm">
                    <i className="fab fa-figma text-base sm:text-lg" />
                  </div>
                </OrbitSatellite>
                <OrbitSatellite className="hero-orbit-d hidden opacity-80 sm:flex sm:opacity-90">
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-palette-neon/35 bg-palette-surface/95 text-palette-neon shadow-glow-neon ring-1 ring-palette-purple/25 backdrop-blur-sm">
                    <i className="fab fa-python text-base sm:text-lg" aria-hidden="true" />
                  </div>
                </OrbitSatellite>
              </div>
            </div>

            <div className="relative z-20 h-[250px] w-[250px] overflow-hidden rounded-full border-8 border-palette-surface shadow-2xl shadow-black/60 ring-2 ring-palette-neon/25 sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[360px] lg:w-[360px]">
              <Image
                src="/images/hero.jpeg"
                alt="Mahmud Sakib"
                width={360}
                height={360}
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
