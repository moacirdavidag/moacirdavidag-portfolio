'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactForm() {
  const { language } = useApp();
  const dict = language === 'pt' ? ptDict.common.contact : enDict.common.contact;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || dict.error_msg);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMessage(dict.error_msg);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
          {dict.form_name} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-sm"
          placeholder={language === 'pt' ? 'Ex: Maria Silva' : 'Ex: John Doe'}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
          {dict.form_email} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-sm"
          placeholder="seuemail@exemplo.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
          {dict.form_subject}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-sm"
          placeholder={language === 'pt' ? 'Oportunidade / Projeto / Dúvida' : 'Project inquiry / Opportunity'}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-1">
          {dict.form_message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent-purple)] transition-colors text-sm resize-none"
          placeholder={language === 'pt' ? 'Escreva aqui sua mensagem...' : 'Write your message here...'}
        />
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-xl bg-[var(--accent-green)]/10 border border-[var(--accent-green)]/30 text-[var(--accent-green)] text-xs flex items-center gap-2">
          <CheckCircle className="w-4 h-4 shrink-0" />
          <span>{dict.success_msg}</span>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-[var(--accent-red)]/10 border border-[var(--accent-red)]/30 text-[var(--accent-red)] text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3.5 px-6 rounded-xl bg-[var(--accent-purple)] text-[#1e1f29] font-bold text-sm hover:bg-[var(--accent-pink)] transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50"
      >
        {status === 'loading' ? (
          <Loader2 className="w-4 h-4 animate-spin text-[#1e1f29]" />
        ) : (
          <Send className="w-4 h-4 text-[#1e1f29] group-hover:translate-x-1 transition-transform" />
        )}
        <span>{status === 'loading' ? dict.form_sending : dict.form_submit}</span>
      </button>
    </form>
  );
}
