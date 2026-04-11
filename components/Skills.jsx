"use client";

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend Mastery",
    icon: "fa-display",
    color: "neon",
    description: "Building responsive, interactive user interfaces",
    skills: ["React", "Next.js", "Tailwind CSS", "Material-UI", "TypeScript", "Framer Motion"],
  },
  {
    title: "Backend & APIs",
    icon: "fa-server",
    color: "purple",
    description: "Creating robust server-side applications",
    skills: ["Node.js", "Express", "NestJS", "RESTful APIs", "GraphQL", "WebSocket"],
  },
  {
    title: "Database",
    icon: "fa-database",
    color: "cyan",
    description: "Designing efficient data structures",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Prisma", "TypeORM"],
  },
  {
    title: "DevOps & Tools",
    icon: "fa-cloud",
    color: "neon",
    description: "Streamlining development workflow",
    skills: ["Git", "Docker", "Vercel", "Netlify", "GitHub Actions", "AWS Basics"],
  },
  {
    title: "UI/UX Design",
    icon: "fa-pen-ruler",
    color: "purple",
    description: "Creating beautiful user experiences",
    skills: ["Figma", "Adobe XD", "Responsive Design", "Wireframing", "Prototyping", "User Research"],
  },
  {
    title: "AI Integration",
    icon: "fa-brain",
    color: "cyan",
    description: "Leveraging AI for smarter applications",
    skills: ["OpenAI API", "Gemini API", "Prompt Engineering", "LLM Integration", "Vector Databases"],
  },
];

const colorMap = {
  neon: {
    gradient: "from-emerald-400 to-cyan-400",
    bg: "from-emerald-500/10 to-cyan-500/10",
    border: "group-hover:border-emerald-500/50",
    iconBg: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  purple: {
    gradient: "from-purple-400 to-pink-400",
    bg: "from-purple-500/10 to-pink-500/10",
    border: "group-hover:border-purple-500/50",
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    glow: "shadow-purple-500/20",
  },
  cyan: {
    gradient: "from-cyan-400 to-blue-400",
    bg: "from-cyan-500/10 to-blue-500/10",
    border: "group-hover:border-cyan-500/50",
    iconBg: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
    glow: "shadow-cyan-500/20",
  },
};

function SkillCard({ category, index }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const colors = colorMap[category.color];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, delay: 100 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`
        group relative overflow-hidden rounded-2xl 
        bg-gradient-to-br ${colors.bg} 
        backdrop-blur-sm border border-white/10 
        transition-all duration-700 hover:-translate-y-2
        ${colors.glow} hover:shadow-2xl
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient border on hover */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-purple-500/50 group-hover:via-cyan-500/50 group-hover:to-emerald-500/50 transition-all duration-500" />
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className={`
            w-12 h-12 rounded-xl 
            bg-gradient-to-br ${colors.bg}
            border border-white/10
            flex items-center justify-center
            transition-all duration-300 group-hover:scale-110
          `}>
            <i className={`fas ${category.icon} text-xl ${colors.iconColor}`} />
          </div>
          <span className="text-xs font-mono text-white/30">0{index + 1}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
          {category.title}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-white/50 mb-4 leading-relaxed">
          {category.description}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-white/0 via-white/10 to-white/0 mb-4" />

        {/* Skills Grid */}
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, idx) => (
            <span
              key={skill}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-medium
                bg-white/5 border border-white/10
                text-white/70 hover:text-white
                transition-all duration-300 hover:scale-105
                hover:border-${category.color}-500/50
                cursor-default
              `}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
          <i className={`fas ${category.icon} text-6xl absolute -bottom-4 -right-4`} />
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 overflow-hidden bg-palette-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-emerald-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-[1480px]">
        {/* Section Header */}
        <div 
          ref={sectionRef}
          className="text-center mb-16"
        >
     
     <h2 className="section-title-gradient">
     Technical Arsenal
          <span className="section-title-underline" aria-hidden="true" />
        </h2>
         
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <SkillCard key={category.title} category={category} index={idx} />
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <i className="fas fa-check-circle text-emerald-400 text-sm" />
              <span className="text-xs text-white/60">6+ Technologies Mastered</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <i className="fas fa-rocket text-purple-400 text-sm" />
              <span className="text-xs text-white/60">Always Learning</span>
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="flex items-center gap-2">
              <i className="fas fa-code text-cyan-400 text-sm" />
              <span className="text-xs text-white/60">Production Ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}