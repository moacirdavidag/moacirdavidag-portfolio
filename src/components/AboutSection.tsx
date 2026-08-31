'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { calculateAge, calculateDuration } from '@/lib/dateUtils';
import { Briefcase, GraduationCap, Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict : enDict;
  const age = calculateAge('2002-04-18');

  const skills = [
    { name: 'TypeScript / JavaScript (ES6+)', level: '95%', icon: '⚡' },
    { name: 'React / Next.js (App Router)', level: '95%', icon: '⚛️' },
    { name: 'Node.js / NestJS / Express / Fastify', level: '90%', icon: '🚀' },
    { name: 'React Native (Mobile Architecture)', level: '85%', icon: '📱' },
    { name: 'PHP / Laravel', level: '75%', icon: '🐘' },
    { name: 'MySQL & MongoDB & GraphQL', level: '85%', icon: '🗄️' },
    { name: 'Docker & CI/CD Pipelines', level: '60%', icon: '🐳' },
    { name: 'Clean Architecture & Testing', level: '80%', icon: '🛡️' },
  ];

  return (
    <section id="sobre" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/20 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT THE ENGINEER</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
              {dict.common.about.title}
            </h2>

            <p className="text-lg font-medium text-[var(--accent-cyan)] leading-relaxed">
              {dict.common.about.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {dict.common.about.bio}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-mono">
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <span className="text-[var(--text-secondary)]">{dict.common.about.quick_facts.name_label} </span>
                <span className="text-[var(--text-primary)] font-semibold">Moacir David</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <span className="text-[var(--text-secondary)]">{dict.common.about.quick_facts.age_label} </span>
                <span className="text-[var(--accent-green)] font-semibold">{age} {language === 'pt' ? 'anos' : 'years'}</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <span className="text-[var(--text-secondary)]">{dict.common.about.quick_facts.education_label} </span>
                <span className="text-[var(--text-primary)] font-semibold">{dict.common.about.quick_facts.education_val}</span>
              </div>
              <div className="p-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
                <span className="text-[var(--text-secondary)]">{dict.common.about.quick_facts.location_label} </span>
                <span className="text-[var(--text-primary)] font-semibold">{dict.common.about.quick_facts.location_val}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-6 shadow-xl">
            <div className="flex items-center gap-2 border-b border-[var(--border-color)] pb-4">
              <Code2 className="w-5 h-5 text-[var(--accent-purple)]" />
              <h3 className="text-lg font-bold text-[var(--text-primary)]">
                {dict.common.about.skills_title}
              </h3>
            </div>

            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-[var(--text-primary)] flex items-center gap-1.5">
                      <span>{skill.icon}</span>
                      <span>{skill.name}</span>
                    </span>
                    <span className="text-[var(--accent-purple)] font-semibold">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent-purple)] to-[var(--accent-pink)] transition-all duration-500"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 pt-8 border-t border-[var(--border-color)]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/20">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                {dict.common.about.experience_title}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--text-secondary)]">
                {language === 'pt' ? 'Histórico de atuação profissional e entregas de valor.' : 'Professional work history and delivered impact.'}
              </p>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--bg-tertiary)] space-y-10">
            {dict.experiences.map((exp: any) => {
              const duration = calculateDuration(exp.startDate, exp.endDate, exp.current, language);
              return (
                <div key={exp.id} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-purple)] group-hover:bg-[var(--accent-purple)] transition-colors" />

                  <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--accent-purple)]/40 transition-all space-y-3 shadow-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-lg font-bold text-[var(--text-primary)]">
                          {exp.role}
                        </h4>
                        <span className="text-sm font-semibold text-[var(--accent-purple)]">
                          @ {exp.company}
                        </span>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[var(--accent-green)]/10 text-[var(--accent-green)] border border-[var(--accent-green)]/30 font-bold">
                            {language === 'pt' ? 'ATUAL' : 'CURRENT'}
                          </span>
                        )}
                      </div>

                      <span className="text-xs font-mono text-[var(--text-secondary)]">
                        {exp.period} • <strong className="text-[var(--accent-cyan)]">{duration}</strong>
                      </span>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)] italic">
                      📍 {exp.location}
                    </p>

                    <p className="text-xs sm:text-sm text-[var(--text-primary)] leading-relaxed">
                      {exp.summary}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {exp.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-purple)] shrink-0 mt-1" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.techs.map((tech: string, idx: number) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] border border-[var(--border-color)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
