"use client";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

// Tech stacks as simple groups
const techStacks = [
  { name: "MERN", icon: "fa-react", color: "#22d3ee" },
  { name: "UI/UX Design", icon: "fa-pen-nib", color: "#93BF54" },
  { name: "AI/ML", icon: "fa-brain", color: "#f97316" },
  { name: "DevOps", icon: "fa-cloud", color: "#3b82f6" },

];

const socials = [
  { href: "https://github.com/Mahmud-Saki6", icon: "fa-github", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/mahmud-sakib-3096b82b6/",
    icon: "fa-linkedin-in",
    label: "LinkedIn",
  },
  { href: "#", icon: "fa-twitter", label: "Twitter" },
  { href: "#", icon: "fa-facebook-f", label: "Facebook" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "rgba(5,8,16,0.97)",
        borderTop: "1px solid rgba(168,85,247,0.18)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top glow bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #00ffaa 30%, #a855f7 70%, transparent)",
          boxShadow: "0 0 20px rgba(0,255,170,0.3)",
        }}
        aria-hidden="true"
      />

      {/* Faint grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,170,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,170,0.02) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* MAIN CONTAINER */}
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "1480px",
          margin: "0 auto",
          padding: "56px 0 0",
        }}
      >
        {/* ── 4 Column Grid ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
            marginBottom: "48px",
          }}
        >
          {/* COLUMN 1: Brand */}
          <div style={{ textAlign: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,rgba(0,255,170,0.15),rgba(168,85,247,0.15))",
                  border: "1.5px solid rgba(0,255,170,0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#00ffaa",
                  boxShadow: "0 0 18px rgba(0,255,170,0.2)",
                }}
              >
                MS
              </div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9" }}>Mahmud Sakib</div>
                <div style={{ fontSize: 12, color: "#64748b", letterSpacing: "0.04em" }}>Software Developer</div>
              </div>
            </div>

            <p style={{ fontSize: 12, color: "#94a3b8", lineHeight: 1.6, margin: "0 0 16px", textAlign: "center" }}>
              A motivated CSE graduate building full-stack SaaS products with UI/UX focus.
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 7,
                padding: "5px 12px",
                borderRadius: 999,
                background: "rgba(0,255,170,0.08)",
                border: "1px solid rgba(0,255,170,0.28)",
                fontSize: 11,
                fontWeight: 600,
                color: "#00ffaa",
              }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#00ffaa",
                  boxShadow: "0 0 8px rgba(0,255,170,0.9)",
                  animation: "footer-pulse 2s ease-in-out infinite",
                }}
              />
              Available for hire
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a855f7",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: 13,
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                      display: "inline-block",
                      padding: "2px 0",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#22d3ee";
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#94a3b8";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Tech Stack (as simple groups) */}
          <div>
            <h3
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#22d3ee",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Tech Stack
            </h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
              {techStacks.map((stack) => (
                <li key={stack.name}>
                  <span
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: stack.color,
                      transition: "all 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = "0.8";
                      e.currentTarget.style.transform = "translateX(3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateX(0)";
                    }}
                  >
                    <i className={`fas ${stack.icon}`} style={{ fontSize: 11 }} />
                    {stack.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Location + Connect */}
          <div>
            {/* Location Map Indicator */}
            <h3
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#00ffaa",
                marginBottom: 20,
                textAlign: "center",
              }}
            >
              Location
            </h3>
            
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  background: "rgba(0,255,170,0.1)",
                  border: "1px solid rgba(0,255,170,0.3)",
                  marginBottom: 12,
                }}
              >
                <i className="fas fa-map-marker-alt" style={{ fontSize: 22, color: "#00ffaa" }} />
              </div>
              <p style={{ fontSize: 13, color: "#94a3b8", margin: 0 }}>
                Dhaka, Bangladesh
              </p>
              <p style={{ fontSize: 11, color: "#64748b", marginTop: 6 }}>
                Available for remote work worldwide
              </p>
            </div>

            {/* Connect Section */}
            <h3
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#a855f7",
                marginBottom: 14,
                textAlign: "center",
              }}
            >
              Connect
            </h3>

            <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(168,85,247,0.1)",
                    border: "1px solid rgba(168,85,247,0.25)",
                    color: "#94a3b8",
                    fontSize: 15,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(168,85,247,0.22)";
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.6)";
                    e.currentTarget.style.color = "#a855f7";
                    e.currentTarget.style.boxShadow = "0 0 18px rgba(168,85,247,0.35)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(168,85,247,0.1)";
                    e.currentTarget.style.borderColor = "rgba(168,85,247,0.25)";
                    e.currentTarget.style.color = "#94a3b8";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.transform = "none";
                  }}
                >
                  <i className={`fab ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 12, color: "#475569", margin: 0, textAlign: "center", flex: 1 }}>
            © {year} Mahmud Sakib. All Rights Reserved.
          </p>
          <p style={{ fontSize: 12, color: "#475569", margin: 0, textAlign: "center", flex: 1 }}>
            Built with{" "}
            <span style={{ color: "#00ffaa", fontWeight: 600 }}>Next.js</span>
            {" & "}
            <span style={{ color: "#a855f7", fontWeight: 600 }}>Tailwind CSS</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes footer-pulse {
          0%,100% { opacity:1; transform:scale(1); }
          50% { opacity:.4; transform:scale(.7); }
        }
        
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
}