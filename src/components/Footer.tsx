'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { Heart, Terminal } from 'lucide-react';

export default function Footer() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict.common.footer : enDict.common.footer;
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[var(--bg-primary)] border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]">
        
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[var(--accent-purple)]" />
          <span>
            © {year} <strong className="text-[var(--text-primary)]">Moacir David</strong>. {dict.rights}
          </span>
        </div>

        <div>
          <span>{dict.built_with}</span>
        </div>

      </div>
    </footer>
  );
}
