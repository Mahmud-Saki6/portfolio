"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const NAVBAR_HEIGHT = 64;

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + 20;

      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.getBoundingClientRect().top + window.scrollY;
          if (offsetTop <= scrollPos) {
            setActive(id);
            break;
          }
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - NAVBAR_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const mobileOverlay =
    mounted && menuOpen
      ? createPortal(
          <div
            className="fixed inset-0 z-[2990] flex md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
          >
            <button
              type="button"
              className="absolute inset-0 bg-palette-bg/95 backdrop-blur-xl"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div className="relative z-[1] flex w-full flex-col items-center justify-center gap-2 px-6 py-8">
              <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-palette-surface/90 p-6 shadow-2xl shadow-black/40 ring-1 ring-white/5">
                <p className="mb-4 text-center text-xs font-medium uppercase tracking-[0.2em] text-white/40">
                  Navigate
                </p>
                <nav className="flex flex-col items-stretch gap-1">
                  {navLinks.map(({ href, label }) => {
                    const id = href.replace("#", "");
                    const isActive = active === id;
                    return (
                      <a
                        key={href}
                        href={href}
                        onClick={(e) => handleNavClick(e, href)}
                        className={`
                          rounded-lg px-4 py-3 text-center text-base font-medium transition-all duration-300
                          ${isActive ? "bg-white/10 text-palette-neon" : "text-white/80 hover:bg-white/5 hover:text-white"}
                        `}
                      >
                        {label}
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${
          menuOpen ? "z-[3000]" : "z-[1000]"
        } ${
          scrolled
            ? "bg-palette-bg/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
            : "bg-transparent backdrop-blur-none"
        }`}
      >
        <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-3">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="relative shrink-0 transition-opacity duration-300 hover:opacity-90"
            aria-label="Mahmud Sakib — Home"
          >
            <Image
              src="/images/logo.png"
              alt="Mahmud Sakib portfolio logo"
              width={168}
              height={56}
              style={{ width: "auto", height: 50, objectFit: "contain" }}
            />
          </a>

          <button
            type="button"
            className="relative z-[3001] flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white/90 shadow-inner ring-1 ring-white/10 backdrop-blur-sm transition-all hover:bg-white/15 md:hidden"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`} />
          </button>

          <div className="hidden items-center gap-5 md:flex">
            {navLinks.map(({ href, label }) => {
              const id = href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`
                  relative px-2 py-1.5 text-sm font-medium transition-all duration-300
                  ${isActive ? "text-palette-neon" : "text-white/70 hover:text-white"}
                  before:absolute before:bottom-0 before:left-1/2 before:h-[2px] before:w-0 before:-translate-x-1/2 before:bg-gradient-to-r before:from-palette-neon before:to-palette-purple before:transition-all before:duration-300
                  hover:before:w-full
                  ${isActive ? "before:w-full" : ""}
                `}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      {mobileOverlay}
    </>
  );
}
