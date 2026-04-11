// components/Projects.jsx
"use client";

import { useState } from "react";
import { webProjects, uiuxProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import UIUXCard from "./UIUXCard";

const tabs = [
  { id: "web", label: "Web Development", icon: "fa-code" },
  { id: "uiux", label: "UI / UX Design", icon: "fa-pen-nib" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("web");

  return (
    <section id="projects" className="bg-palette-bg py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[90%] max-w-[1720px]">
        <h2 className="section-title-gradient">
          Featured Projects
          <span className="section-title-underline" aria-hidden="true" />
        </h2>

        {/* Tab Switcher */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex gap-2 rounded-xl border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 text-emerald-400 shadow-lg shadow-emerald-500/10"
                      : "text-white/40 hover:text-white/70"
                  }`}
                  aria-pressed={isActive}
                >
                  <i className={`fas ${tab.icon} text-sm`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
          {activeTab === "web" &&
            webProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          {activeTab === "uiux" &&
            uiuxProjects.map((project) => (
              <UIUXCard key={project.id} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
}