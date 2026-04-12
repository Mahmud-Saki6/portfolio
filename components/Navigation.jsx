"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Fixed navbar height (adjust to your actual navbar height)
  const NAVBAR_HEIGHT = 64;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      // Adjust scroll position to account for navbar
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
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? "bg-palette-bg/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          : "bg-transparent backdrop-blur-none"
      }`}
    >
      <div className="mx-auto flex w-[92%] max-w-6xl items-center justify-between py-3">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="relative shrink-0 transition-opacity duration-300 hover:opacity-90"
          aria-label="Mahmud Sakib — Home"
        >
          <Image
            src="/images/portfolio-logo.png"
            alt=""
            width={168}
            height={56}
            className="h-8 w-auto max-h-8 object-contain md:h-9 md:max-h-9"
            priority
            sizes="(max-width: 768px) 140px, 168px"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="relative z-[1001] flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 backdrop-blur-sm text-white/90 transition-all hover:bg-white/10 md:hidden"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"} text-xl`} />
        </button>

        {/* Navigation Links */}
        <div
          className={`fixed inset-0 z-[999] flex flex-col items-center justify-center gap-6 bg-palette-bg/60 backdrop-blur-2xl transition-all duration-300 md:static md:inset-auto md:z-auto md:flex md:flex-row md:gap-5 md:bg-transparent md:backdrop-blur-none ${
            menuOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navLinks.map(({ href, label }) => {
            const id = href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`
                  relative px-2 py-1.5 text-sm font-medium transition-all duration-300 cursor-pointer
                  ${
                    isActive
                      ? "text-palette-neon"
                      : "text-white/70 hover:text-white"
                  }
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
  );
}