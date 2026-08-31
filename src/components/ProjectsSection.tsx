'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { ExternalLink, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { trackEvent } from './Analytics';

export default function ProjectsSection() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict : enDict;
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'freelance'>('all');

  const filteredProjects = dict.projects.filter((p: any) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const categoryIcons: Record<string, string> = {
    all: '✨',
    web: '⚡',
    mobile: '📱',
    freelance: '💼',
  };

  return (
    <section id="projetos" className="py-20 bg-[var(--bg-secondary)]/40 border-y border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/20 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {dict.common.projects.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            {dict.common.projects.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {(['all', 'web', 'mobile', 'freelance'] as const).map((cat) => {
            const labelKey = `filter_${cat}` as keyof typeof dict.common.projects;
            const label = dict.common.projects[labelKey];
            const active = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${active
                    ? 'bg-[var(--accent-purple)] text-[#1e1f29] font-bold shadow-md'
                    : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                  }`}
              >
                <span>{categoryIcons[cat]}</span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: any) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-purple)]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:-translate-y-1"
            >
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] font-semibold border border-[var(--border-color)]">
                      {project.role}
                    </span>
                    {project.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--accent-pink)]/20 text-[var(--accent-pink)] border border-[var(--accent-pink)]/30">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[var(--border-color)]/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techs.map((tech: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[var(--bg-primary)] text-[var(--accent-green)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('click_project_demo', 'engagement', project.title)}
                        className="text-xs font-semibold text-[var(--accent-cyan)] hover:text-[var(--accent-pink)] flex items-center gap-1 transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>{dict.common.projects.live_demo}</span>
                      </a>
                    )}
                    <a
                      href="https://github.com/moacirdavidag"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('click_project_github', 'engagement', project.title)}
                      className="text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] flex items-center gap-1 transition-colors ml-auto"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
