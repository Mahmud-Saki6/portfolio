const items = [
  {
    date: "02/2025 – 08/2025",
    title: "Software Development",
    company: "Ether Technologies Limited",
    body: `Developed dynamic, responsive user interfaces for live client websites including Uuro, Bakkah Holdings, and Sajida Hospital using React, Next.js, Tailwind, and MUI.`,
    bullets: [
      "Designed client-approved mockups in Figma",
      "Managed website content using headless CMS",
      "Performed manual QA testing using BugHerd",
    ],
  },
  {
    date: "09/2024 – 12/2024",
    title: "Data Analyst",
    company: "SEBPO",
    body: `Executed comprehensive background research to identify potential criminal data, leveraging multiple sources for verification.`,
    bullets: [
      "Maintained accuracy of intelligence database",
      "Performed precise and timely data entry",
      "Verified data from multiple sources",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 bg-palette-surface/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-[90%] max-w-[1720px]">
        <h2 className="section-title-gradient">
          Experience
          <span className="section-title-underline" aria-hidden="true" />
        </h2>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute bottom-0 left-[19px] top-0 w-0.5 md:left-1/2 md:w-0.5 md:-translate-x-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--cyan-blue) 15%, var(--electric-purple) 85%, transparent)",
              boxShadow: "0 0 12px var(--glow-cyan)",
            }}
            aria-hidden
          />

          <ul className="relative space-y-12">
            {items.map((item, index) => (
              <li
                key={item.date}
                className={`relative pl-12 md:w-1/2 md:pl-10 ${
                  index % 2 === 0 ? "md:pr-10" : "md:left-1/2 md:pl-10"
                }`}
              >
                <span
                  className={`timeline-dot absolute top-2 ${
                    index % 2 === 0
                      ? "left-[11px] md:left-auto md:right-[-7px]"
                      : "left-[11px] md:left-[-7px]"
                  }`}
                />
                <div className="experience-card">
                  <span className="mb-3 inline-block rounded-full border border-palette-neon/30 bg-palette-neon/10 px-4 py-1 text-sm font-semibold text-palette-neon shadow-glow-neon">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
                  <h4 className="mb-3 text-base font-medium text-[var(--text-secondary)]">
                    {item.company}
                  </h4>
                  <p className="mb-4 text-[var(--text-secondary)]">{item.body}</p>
                  <ul className="ml-4 list-disc space-y-2 text-[var(--text-secondary)]">
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
