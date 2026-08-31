'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { Moon, Sun, Globe, Menu, X, FileText, Send } from 'lucide-react';

export default function Navbar() {
  const { theme, toggleTheme, language, toggleLanguage } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const dict = language === 'pt' ? ptDict.common : enDict.common;

  const navLinks = [
    { href: '#home', label: dict.nav.home },
    { href: '#sobre', label: dict.nav.about },
    { href: '#projetos', label: dict.nav.projects },
    { href: '#contato', label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--bg-primary)]/80 border-b border-[var(--border-color)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        <Link href="#home" className="flex items-center gap-2 group">
          <Image
            src="/MD_LOGO_TRANSPARENTE.png"
            alt="Moacir David Logo"
            width={38}
            height={38}
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform"
          />
          <span className="font-semibold text-lg tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-pink)] transition-colors">
            Moacir<span className="text-[var(--accent-purple)]">.David</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[var(--accent-cyan)] hover:after:w-full after:transition-all"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent-yellow)] border border-[var(--border-color)] transition-colors flex items-center gap-1.5 text-xs font-mono"
            title={theme === 'dracula-night' ? 'Mudar para Dracula Soft' : 'Mudar para Dracula Night'}
          >
            {theme === 'dracula-night' ? <Moon className="w-4 h-4 text-[var(--accent-purple)]" /> : <Sun className="w-4 h-4 text-[var(--accent-yellow)]" />}
            <span className="hidden lg:inline">{theme === 'dracula-night' ? 'Night' : 'Soft'}</span>
          </button>

          <button
            onClick={toggleLanguage}
            className="p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent-green)] border border-[var(--border-color)] transition-colors flex items-center gap-1.5 text-xs font-mono"
            title="Alternar idioma / Toggle language"
          >
            <Globe className="w-4 h-4 text-[var(--accent-green)]" />
            <span>{language.toUpperCase()}</span>
          </button>

          <Link
            href="#contato"
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-[var(--accent-purple)] text-[#1e1f29] hover:bg-[var(--accent-pink)] transition-all flex items-center gap-1.5 shadow-md"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{dict.hero.cta_contact}</span>
          </Link>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-secondary)] border-b border-[var(--border-color)] px-4 pt-2 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[var(--text-primary)] hover:text-[var(--accent-cyan)] py-2 border-b border-[var(--border-color)]/50"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] flex items-center gap-1 text-xs font-mono"
              >
                {theme === 'dracula-night' ? <Moon className="w-4 h-4 text-[var(--accent-purple)]" /> : <Sun className="w-4 h-4 text-[var(--accent-yellow)]" />}
                <span>{theme === 'dracula-night' ? 'Night' : 'Soft'}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="p-2 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-primary)] border border-[var(--border-color)] flex items-center gap-1 text-xs font-mono"
              >
                <Globe className="w-4 h-4 text-[var(--accent-green)]" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
