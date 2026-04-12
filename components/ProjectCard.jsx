import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  liveUrl,
  tech,
}) {
  const isRemote = image?.startsWith("http");
  const isSvg = image?.endsWith(".svg");

  return (
    <article className="glass-project-card group">
      <div className="relative h-[200px] overflow-hidden sm:h-[220px]">
        {isRemote ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 34vw, 25vw"
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className={`object-cover transition duration-500 group-hover:scale-110 ${
              isSvg ? "object-contain bg-palette-bg/90 p-6" : ""
            }`}
            sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 34vw, 25vw"
            unoptimized={isSvg}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-palette-bg/75 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
          <div className="flex gap-4">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-palette-neon/50 bg-palette-surface/95 text-sm text-palette-neon shadow-glow-neon transition hover:border-palette-purple hover:bg-palette-purple/25 hover:text-white hover:shadow-glow-purple"
              aria-label={`Visit ${title} live site`}
            >
              <i className="fas fa-external-link-alt" />
            </a>
            <span
              className="flex h-9 w-9 cursor-default items-center justify-center rounded-full border border-white/10 bg-palette-surface/95 text-sm text-palette-cyan shadow-md"
              title="Project details"
              aria-hidden
            >
              <i className="fas fa-info-circle" />
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 p-4">
        <h3 className="project-title-gradient mb-1.5">{title}</h3>
        <p className="mb-3 text-xs leading-relaxed text-[var(--text-secondary)]">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tech.map((tag) => (
            <span key={tag} className="tech-chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
