import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Analytics from '@/components/Analytics';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moacir David | Engenheiro de Software — Sites, Apps & Sistemas Web',
  description: 'Moacir David é Engenheiro de Software: cria sites, aplicativos mobile e sistemas digitais completos. Especializado em Next.js, React Native e Node.js. Disponível para projetos freelance e consultorias.',
  keywords: [
    'Moacir David',
    'Moacir David de Almeida Gonçalves',
    'Software Engineer',
    'Engenheiro de Software',
    'Desenvolvedor Full Stack',
    'Criador de Sites',
    'Desenvolvimento de Aplicativos',
    'Criação de Sistemas Web',
    'Desenvolvedor de Apps',
    'Freelance Dev',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'NestJS',
    'Poder360',
    'eScriptura',
    'Paraíba',
    'Brasil',
    'Portfólio Desenvolvedor'
  ],
  authors: [{ name: 'Moacir David de Almeida Gonçalves' }],
  creator: 'Moacir David',
  openGraph: {
    title: 'Moacir David | Engenheiro de Software — Sites, Apps & Sistemas',
    description: 'Crio sites, aplicativos mobile e sistemas digitais do zero. Engenheiro de Software com experiência em produtos de grande escala, APIs robustas e apps para iOS e Android.',
    url: 'https://moacirdavid.dev',
    siteName: 'Moacir David — Portfólio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moacir David | Engenheiro de Software',
    description: 'Crio sites, aplicativos e sistemas digitais. Engenheiro de Software Full Stack & Mobile disponível para projetos e consultorias.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Moacir David de Almeida Gonçalves',
    givenName: 'Moacir David',
    familyName: 'de Almeida Gonçalves',
    jobTitle: 'Software Engineer — Criação de Sites, Aplicativos e Sistemas Digitais',
    description: 'Engenheiro de Software especializado em criar sites, aplicativos mobile (iOS/Android) e sistemas digitais completos para empresas e negócios. Fundador do eScriptura, SaaS de gestão para igrejas.',
    knowsAbout: [
      'Desenvolvimento Web',
      'Criação de Sites',
      'Aplicativos Mobile',
      'Sistemas Web',
      'React',
      'Next.js',
      'React Native',
      'Node.js',
      'APIs',
      'SaaS',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Poder360',
      url: 'https://poder360.com.br',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Instituto Federal da Paraíba (IFPB)',
      address: { '@type': 'PostalAddress', addressLocality: 'Cajazeiras', addressRegion: 'PB', addressCountry: 'BR' },
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Paraíba',
      addressCountry: 'BR',
    },
    url: 'https://moacirdavid.dev',
    sameAs: [
      'https://github.com/moacirdavidag',
      'https://www.linkedin.com/in/moacir-david-7735b7158/',
      'https://escripturaebd.com.br',
      'https://www.instagram.com/escripturaebd',
    ],
  };

  return (
    <html lang="pt-BR" data-theme="dracula-night" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[var(--accent-purple)] selection:text-[#1e1f29]">
        <AppProvider>
          {children}
        </AppProvider>
        <Analytics />
      </body>
    </html>
  );
}
