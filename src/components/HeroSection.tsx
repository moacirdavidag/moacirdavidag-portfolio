'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import ResumePDFButton from './ResumePDFButton';
import { calculateAge, calculateDuration } from '@/lib/dateUtils';
import { Mail, MessageSquare, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function HeroSection() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict.common.hero : enDict.common.hero;
  const age = calculateAge('2002-04-18');
  const poder360Duration = calculateDuration('2024-07-01', undefined, true, language);

  return (
    <section id="home" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--accent-green)]/30 text-[var(--accent-green)] text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-green)] animate-pulse" />
              <span>{dict.status}</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-mono text-[var(--accent-purple)]">
                {dict.greeting}
              </h2>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
                Moacir David
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-[var(--accent-cyan)]">
                {dict.role}
              </p>
            </div>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              {dict.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contato"
                className="px-6 py-3 rounded-xl bg-[var(--accent-purple)] hover:bg-[var(--accent-pink)] text-[#1e1f29] font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{dict.cta_contact}</span>
              </Link>

              <ResumePDFButton />
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
              <span className="text-xs font-mono text-[var(--text-secondary)]">Social / Contacts:</span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/moacirdavidag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:text-[var(--accent-purple)] border border-[var(--border-color)] transition-colors"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/moacir-david-7735b7158/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:text-[var(--accent-cyan)] border border-[var(--border-color)] transition-colors"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/5583988515604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:text-[var(--accent-green)] border border-[var(--border-color)] transition-colors"
                  title="WhatsApp Contact"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="mailto:moacirdavidag@gmail.com"
                  className="p-2 rounded-lg bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--text-primary)] hover:text-[var(--accent-pink)] border border-[var(--border-color)] transition-colors"
                  title="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm rounded-3xl p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-[var(--border-color)] pb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[var(--accent-purple)]" />
                  <span className="text-xs font-mono text-[var(--text-secondary)]">moacir.config.ts</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[var(--accent-red)]" />
                  <span className="w-3 h-3 rounded-full bg-[var(--accent-yellow)]" />
                  <span className="w-3 h-3 rounded-full bg-[var(--accent-green)]" />
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs text-[var(--text-primary)]">
                <p>
                  <span className="text-[var(--accent-pink)]">const</span> dev = &#123;
                </p>
                <p className="pl-4">
                  name: <span className="text-[var(--accent-yellow)]">&apos;Moacir David&apos;</span>,
                </p>
                <p className="pl-4">
                  currentRole: <span className="text-[var(--accent-yellow)]">&apos;Software Engineer @ Poder360&apos;</span>,
                </p>
                <p className="pl-4">
                  experienceAtPoder360: <span className="text-[var(--accent-green)]">&apos;{poder360Duration}&apos;</span>,
                </p>
                <p className="pl-4">
                  stack: [<span className="text-[var(--accent-cyan)]">&apos;Next.js&apos;</span>, <span className="text-[var(--accent-cyan)]">&apos;Node.js&apos;</span>, <span className="text-[var(--accent-cyan)]">&apos;React Native&apos;</span>],
                </p>
                <p className="pl-4">
                  location: <span className="text-[var(--accent-yellow)]">&apos;Paraíba, Brazil&apos;</span>,
                </p>
                <p className="pl-4">
                  age: <span className="text-[var(--accent-purple)]">{age}</span>,
                </p>
                <p>&#125;;</p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-mono text-[var(--text-secondary)]">CURRENT FOCUS</p>
                  <p className="text-xs font-bold text-[var(--accent-green)]">High Concurrency & Scalable APIs</p>
                </div>
                <Sparkles className="w-5 h-5 text-[var(--accent-yellow)]" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
