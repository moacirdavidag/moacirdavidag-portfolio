import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/context/AppContext';

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
  title: 'Moacir David | Software Engineer Full Stack & Mobile',
  description: 'Portfólio profissional de Moacir David — Software Engineer especializado em Next.js, Node.js, React Native, NestJS e arquiteturas de alta concorrência.',
  keywords: [
    'Moacir David',
    'Software Engineer',
    'Desenvolvedor Full Stack',
    'React',
    'Next.js',
    'Node.js',
    'React Native',
    'NestJS',
    'Poder360',
    'Paraíba',
    'Portfólio Dev'
  ],
  authors: [{ name: 'Moacir David de Almeida Gonçalves' }],
  creator: 'Moacir David',
  openGraph: {
    title: 'Moacir David | Software Engineer Full Stack & Mobile',
    description: 'Engenheiro de Software com foco em aplicações web e mobile escaláveis, APIs de alta concorrência e experiências premium.',
    url: 'https://moacirdavid.dev',
    siteName: 'Moacir David Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moacir David | Software Engineer',
    description: 'Portfólio de Engenharia de Software de Moacir David.',
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
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Poder360',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Instituto Federal da Paraíba (IFPB)',
    },
    url: 'https://github.com/moacirdavidag',
    sameAs: [
      'https://github.com/moacirdavidag',
      'https://www.linkedin.com/in/moacir-david-7735b7158/',
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
      </body>
    </html>
  );
}
