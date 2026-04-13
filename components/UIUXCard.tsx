// components/UIUXCard.tsx
"use client";

import React from "react";
import Image from "next/image";

export type UIUXCardProps = {
  id?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  figmaUrl: string;
  tech: readonly string[];
};

export default function UIUXCard({
  title,
  description,
  image,
  imageAlt,
  figmaUrl,
  tech,
}: UIUXCardProps) {
  const isRemote = image.startsWith("http");
  const isSvg = image.endsWith(".svg");

  return (
    <article className="glass-project-card group">
      <div className="relative h-[200px] overflow-hidden sm:h-[220px]">
        <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-purple-400/40 bg-purple-500/20 px-2.5 py-1.5 shadow-lg backdrop-blur-md">
          <svg
            width="10"
            height="14"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M3 8C3 6.34 4.34 5 6 5C7.66 5 9 6.34 9 8C9 9.66 7.66 11 6 11C4.34 11 3 9.66 3 8Z"
              fill="#a855f7"
            />
            <path
              d="M0 12C0 10.34 1.34 9 3 9H6V12C6 13.66 4.66 15 3 15C1.34 15 0 13.66 0 12Z"
              fill="#00ffaa"
            />
            <path
              d="M6 1H3C1.34 1 0 2.34 0 4C0 5.66 1.34 7 3 7H6V1Z"
              fill="#22d3ee"
            />
            <path
              d="M6 1H9C10.66 1 12 2.34 12 4C12 5.66 10.66 7 9 7H6V1Z"
              fill="#f24e1e"
            />
            <path
              d="M12 8C12 9.66 10.66 11 9 11C7.34 11 6 9.66 6 8C6 6.34 7.34 5 9 5H12V8Z"
              fill="#ff7262"
            />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-wide text-purple-300">
            Figma
          </span>
        </div>

        {isRemote ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          />
        ) : (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className={`object-cover transition duration-500 group-hover:scale-110 ${
              isSvg ? "object-contain bg-palette-bg/90 p-6" : ""
            }`}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
            unoptimized={isSvg}
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-palette-bg/75 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
          <div className="flex gap-4">
            <a
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-purple-500/50 bg-palette-surface/95 text-sm text-purple-400 shadow-glow-purple transition hover:border-palette-neon hover:bg-palette-neon/25 hover:text-white hover:shadow-glow-neon"
              aria-label={`Open ${title} in Figma`}
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
