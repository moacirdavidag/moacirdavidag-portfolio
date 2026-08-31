'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import ContactForm from './ContactForm';
import { Mail, MessageSquare, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function ContactSection() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict.common.contact : enDict.common.contact;

  return (
    <section id="contato" className="py-20 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] border border-[var(--accent-purple)]/20 text-xs font-mono">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {dict.title}
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            {dict.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-[var(--text-primary)] border-b border-[var(--border-color)] pb-4">
                {language === 'pt' ? 'Canais Diretos' : 'Direct Channels'}
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/5583988515604"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-green)] transition-all group"
                >
                  <div className="p-3 rounded-lg bg-[var(--accent-green)]/10 text-[var(--accent-green)] group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[var(--text-secondary)]">WhatsApp</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-green)] transition-colors">
                      +55 (83) 98851-5604
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:moacirdavidag@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--accent-purple)] transition-all group"
                >
                  <div className="p-3 rounded-lg bg-[var(--accent-purple)]/10 text-[var(--accent-purple)] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[var(--text-secondary)]">E-mail</p>
                    <p className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-purple)] transition-colors">
                      moacirdavidag@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <div className="p-3 rounded-lg bg-[var(--accent-cyan)]/10 text-[var(--accent-cyan)]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-[var(--text-secondary)]">{language === 'pt' ? 'Localização' : 'Location'}</p>
                    <p className="text-sm font-bold text-[var(--text-primary)]">
                      Paraíba, Brasil (Remoto / Hybrid)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)] space-y-3">
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  {language === 'pt' ? 'Conecte-se também pelas redes:' : 'Connect on social media:'}
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/moacirdavidag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--accent-purple)] hover:border-[var(--accent-purple)] transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/moacir-david-7735b7158/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--accent-cyan)] hover:border-[var(--accent-cyan)] transition-all flex items-center gap-2 text-xs font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-color)] shadow-xl">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
