'use client';

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { FileText, Loader2 } from 'lucide-react';
import { trackEvent } from './Analytics';
import ResumeDocument from './ResumeDocument';

export default function ResumePDFButton() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict.common.hero : enDict.common.hero;

  const fileName =
    language === 'pt'
      ? '[Currículo] Moacir David de Almeida Gonçalves - Software Engineer.pdf'
      : '[Resume] Moacir David de Almeida Gonçalves - Software Engineer.pdf';

  return (
    <PDFDownloadLink
      document={<ResumeDocument lang={language as 'pt' | 'en'} />}
      fileName={fileName}
      onClick={() => trackEvent('download_resume_pdf', 'engagement', language)}
    >
      {({ loading }) => (
        <button
          disabled={loading}
          className="px-6 py-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] font-semibold text-sm border border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] transition-all shadow-md flex items-center gap-2.5 group disabled:opacity-50"
        >
          {loading ? (
            <Loader2 className="w-4 h-4 animate-spin text-[var(--accent-cyan)]" />
          ) : (
            <FileText className="w-4 h-4 text-[var(--accent-cyan)] group-hover:scale-110 transition-transform" />
          )}
          <span>
            {loading
              ? language === 'pt'
                ? 'Gerando PDF...'
                : 'Generating PDF...'
              : dict.cta_resume}
          </span>
        </button>
      )}
    </PDFDownloadLink>
  );
}
