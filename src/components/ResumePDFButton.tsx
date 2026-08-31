'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { FileText, Loader2 } from 'lucide-react';

export default function ResumePDFButton() {
  const { language } = useApp();
  const [downloading, setDownloading] = React.useState(false);
  const dict = language === 'pt' ? ptDict.common.hero : enDict.common.hero;

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const fileName = language === 'pt'
        ? '[Currículo] Moacir David de Almeida Gonçalves - Software Engineer.pdf'
        : '[Resume] Moacir David de Almeida Gonçalves - Software Engineer.pdf';

      const response = await fetch(`/api/pdf?lang=${language}`);
      if (!response.ok) throw new Error('Falha ao gerar PDF');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      console.error(err);
      alert(language === 'pt' ? 'Erro ao baixar o currículo em PDF.' : 'Error downloading resume PDF.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={downloading}
      className="px-6 py-3 rounded-xl bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] text-[var(--accent-cyan)] font-semibold text-sm border border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] transition-all shadow-md flex items-center gap-2.5 group disabled:opacity-50"
    >
      {downloading ? (
        <Loader2 className="w-4 h-4 animate-spin text-[var(--accent-cyan)]" />
      ) : (
        <FileText className="w-4 h-4 text-[var(--accent-cyan)] group-hover:scale-110 transition-transform" />
      )}
      <span>{downloading ? (language === 'pt' ? 'Gerando PDF...' : 'Generating PDF...') : dict.cta_resume}</span>
    </button>
  );
}
