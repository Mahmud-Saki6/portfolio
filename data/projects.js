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
    image: "/images/holdingHero.png",
    imageAlt: "Bakkah Holdings",
    liveUrl: "https://bakkahholdings.com/",
    tech: ["React", "Tailwind CSS", "Corporate"],
  },
];

// ========== APPLICATIONS (full-stack / tools) ==========
export const applicationProjects = [
  {
    id: "task-management-system",
    title: "Task Management System",
    description:
      "A full-stack task management app for organizing and tracking projects.",
    image: "/images/applications/task-management-system.png",
    imageAlt: "TaskFlow task management app — login and features",
    liveUrl: "https://task-management-system-kappa-six.vercel.app/",
    tech: ["NestJS", "Next.js", "PostgreSQL", "MUI", "Docker"],
  },
  {
    id: "crefix-ai",
    title: "Crefix AI (Figma Clone)",
    description:
      "A design tool inspired by Figma, powered by AI for smart design generation.",
    image: "/images/applications/crefix-ai.png",
    imageAlt: "Crefix AI design tool dashboard",
    liveUrl: "https://crefix-ai.vercel.app/",
    tech: ["React", "Next.js 14", "MUI", "Gemini 3.0 API"],
  },
  {
    id: "agriculture-chatbot",
    title: "Agriculture Chatbot",
    description:
      "An AI-powered chatbot for agricultural assistance and crop guidance.",
    image: "/images/applications/agriculture-chatbot.png",
    imageAlt: "AgroBot AI agriculture assistant landing page",
    liveUrl: "https://agriculture-chatbot-kappa.vercel.app/",
    tech: [
      "Python",
      "Rasa 3.6.21",
      "TensorFlow 2.12.0",
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Lucide React",
    ],
  },
  {
    id: "devquiz",
    title: "DevQuiz",
    description:
      "AI-powered programming quiz platform with dynamic questions, code snippets, instant feedback, and performance analytics.",
    image: "/images/applications/devquiz.png",
    imageAlt: "DevQuiz sign-in screen",
    liveUrl: "https://dev-quiz-olive.vercel.app",

    tech: [
      "Next.js 14",
      "TypeScript",
      "MUI",
      "Redux Toolkit",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Gemini API",
    ],
  },
];

// ========== UI/UX DESIGN PROJECTS ==========
export const uiuxProjects = [
  {
    id: "uuro-design",
    title: "Uuro | Website",
    description:
      "Full website UI/UX design for Uuro — covering layout, typography, color system, and interactive component states.",
    image: "/images/uurodesign.png",
    imageAlt: "Uuro website Figma design",
    figmaUrl: "https://www.figma.com/design/H2YagWQeZR6X67FTmEs1Tf/Uuro%7C-website",
    tech: ["UI/UX Design", "Figma", "Website Design", "Prototyping"],
  },
  {
    id: "sajida-design",
    title: "Sajida Hospital | Website",
    description:
      "End-to-end UI/UX design for Sajida Hospital's web presence — information architecture, component library, and high-fidelity screens.",
    image: "/images/sajidadesign.png",
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