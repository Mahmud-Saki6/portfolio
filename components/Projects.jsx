// components/Projects.jsx
"use client";

import { useState } from "react";
import {
  applicationProjects,
  uiuxProjects,
  webProjects,
} from "@/data/projects";
import ProjectCard from "./ProjectCard";
import UIUXCard from "./UIUXCard";

const tabs = [
  { id: "web", label: "Web Development", icon: "fa-code" },
  { id: "uiux", label: "UI / UX Design", icon: "fa-pen-nib" },
  { id: "applications", label: "Applications", icon: "fa-rocket" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects" className="relative bg-palette-bg py-12 sm:py-14 lg:py-16">
      <div className="relative z-10 mx-auto w-[92%] max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="section-title-gradient">
            Featured Projects
            <span className="section-title-underline" aria-hidden="true" />
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex max-w-full flex-wrap justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 p-0.5 backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  aria-pressed={isActive}
                >
                  <i className={`fas ${tab.icon} text-[11px]`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: 1 col · Laptop (lg): 3 cols · Desktop (xl+): 4 cols */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 xl:grid-cols-4 lg:gap-5 xl:gap-6">
          {activeTab === "web" &&
            webProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          {activeTab === "uiux" &&
            uiuxProjects.map((project) => (
              <UIUXCard key={project.id} {...project} />
            ))}
          {activeTab === "applications" &&
            applicationProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}