// data/projects.js

// ========== WEB DEVELOPMENT PROJECTS ==========
export const webProjects = [
  {
    id: "masoutfits",
    title: "Masoutfits",
    description:
      "A full-featured e-commerce platform built with Next.js and Material-UI.",
    image: "/images/outfit.jpg",
    imageAlt: "Masoutfits.com",
    liveUrl: "https://masoutfits.com/",
    tech: ["Next.js", "Material-UI", "E-commerce"],
  },
  {
    id: "sajida",
    title: "Sajida Hospital",
    description:
      "A responsive healthcare information website developed using Next.js and Material-UI.",
    image: "/images/hospital.jpg",
    imageAlt: "Sajida Hospital",
    liveUrl: "https://sajida.etherstaging.xyz/",
    tech: ["Next.js", "Material-UI", "Healthcare"],
  },
  {
    id: "arete",
    title: "Arete",
    description:
      "A modern corporate landing page created with Next.js and Material-UI.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80",
    imageAlt: "Arete",
    liveUrl: "https://arete-deploy.vercel.app/",
    tech: ["Next.js", "Material-UI", "Corporate"],
  },
  {
    id: "bakkah",
    title: "Bakkah Holdings",
    description: "A corporate site built with React and Tailwind CSS.",
    image: "/images/Section.png",
    imageAlt: "Bakkah Holdings",
    liveUrl: "https://bakkahholdings.com/",
    tech: ["React", "Tailwind CSS", "Corporate"],
  },
];

// ========== UI/UX DESIGN PROJECTS ==========
export const uiuxProjects = [
  {
    id: "uuro-design",
    title: "Uuro | Website",
    description:
      "Full website UI/UX design for Uuro — covering layout, typography, color system, and interactive component states.",
    image: "/images/uuro-figma.png",
    imageAlt: "Uuro website Figma design",
    figmaUrl: "https://www.figma.com/design/H2YagWQeZR6X67FTmEs1Tf/Uuro%7C-website",
    tech: ["UI/UX Design", "Figma", "Website Design", "Prototyping"],
  },
  {
    id: "sajida-design",
    title: "Sajida Hospital | Website",
    description:
      "End-to-end UI/UX design for Sajida Hospital's web presence — information architecture, component library, and high-fidelity screens.",
    image: "/images/sajida-figma.png",
    imageAlt: "Sajida Hospital Figma design",
    figmaUrl: "https://www.figma.com/design/3WpiT5Yb0LUIJIpaCrquxc/Sajida-Hospital-%7C-Website",
    tech: ["UI/UX Design", "Healthcare", "Figma", "Wireframing"],
  },
  {
    id: "kto-design",
    title: "KTO",
    description:
      "Brand-aligned UI/UX design for KTO — visual identity, responsive layouts, and interactive prototypes delivered in Figma.",
    image: "/images/kto-figma.png",
    imageAlt: "KTO Figma design",
    figmaUrl: "https://www.figma.com/design/pQshlyXy2Xt8DwJOobB2ET/KTO",
    tech: ["UI/UX Design", "Branding", "Figma", "Visual Identity"],
  },
  {
    id: "bakkah-design",
    title: "Bakkah Holdings",
    description:
      "UI/UX design system and high-fidelity mockups for Bakkah Holdings — corporate visual language, grid system, and full page designs in Figma.",
    image: "/images/bakkah-figma.png",
    imageAlt: "Bakkah Holdings Figma design",
    figmaUrl: "https://www.figma.com/design/cCFZc9KKde4mU3N2KSmX94/Bakkah-Holdings",
    tech: ["UI/UX Design", "Corporate", "Figma", "Design System"],
  },
];

// For backward compatibility
export const projects = webProjects;