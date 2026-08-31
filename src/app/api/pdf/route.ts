import { NextResponse } from 'next/server';
import React from 'react';
import { pdf, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import ptDict from '@/dictionaries/pt.json';
import enDict from '@/dictionaries/en.json';
import { calculateAge, calculateDuration } from '@/lib/dateUtils';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: '#FFFFFF',
    fontFamily: 'Helvetica',
    color: '#282a36',
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: '#bd93f9',
    borderBottomStyle: 'solid',
    paddingBottom: 12,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e1f29',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 12,
    color: '#bd93f9',
    fontWeight: 'bold',
    marginTop: 4,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    fontSize: 8.5,
    color: '#6272a4',
    gap: 12,
  },
  contactItem: {
    marginRight: 10,
  },
  section: {
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#bd93f9',
    textTransform: 'uppercase',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    borderBottomStyle: 'solid',
    paddingBottom: 3,
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 9,
    lineHeight: 1.4,
    color: '#343746',
  },
  jobContainer: {
    marginBottom: 10,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  jobRole: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#1e1f29',
  },
  jobCompany: {
    fontSize: 9.5,
    fontWeight: 'bold',
    color: '#6272a4',
  },
  jobPeriod: {
    fontSize: 8.5,
    color: '#6272a4',
    fontStyle: 'italic',
  },
  bulletPoint: {
    flexDirection: 'row',
    marginTop: 3,
    paddingLeft: 6,
  },
  bullet: {
    width: 10,
    fontSize: 8,
    color: '#bd93f9',
  },
  bulletText: {
    fontSize: 8.5,
    lineHeight: 1.3,
    color: '#44475a',
    flex: 1,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
    marginTop: 4,
  },
  skillBadge: {
    backgroundColor: '#f1f3f9',
    borderRadius: 3,
    paddingHorizontal: 6,
    paddingVertical: 3,
    fontSize: 8,
    color: '#282a36',
  },
  projectContainer: {
    marginBottom: 6,
  },
  projectTitle: {
    fontSize: 9.5,
    fontWeight: 'bold',
    color: '#1e1f29',
  },
  projectDesc: {
    fontSize: 8.5,
    color: '#44475a',
    marginTop: 1,
  }
});

interface ResumePDFProps {
  lang: 'pt' | 'en';
}

const ResumeDocument: React.FC<ResumePDFProps> = ({ lang }) => {
  const dict = lang === 'pt' ? ptDict : enDict;
  const age = calculateAge('2002-04-18');

  return React.createElement(
    Document,
    null,
    React.createElement(
      Page,
      { size: "A4", style: styles.page },
      React.createElement(
        View,
        { style: styles.header },
        React.createElement(Text, { style: styles.name }, "Moacir David de Almeida Gonçalves"),
        React.createElement(
          Text,
          { style: styles.title },
          lang === 'pt' ? 'Software Engineer Full Stack & Mobile' : 'Full Stack & Mobile Software Engineer'
        ),
        React.createElement(
          View,
          { style: styles.contactRow },
          React.createElement(Text, { style: styles.contactItem }, "moacirdavidag@gmail.com"),
          React.createElement(Text, { style: styles.contactItem }, "+55 (83) 98851-5604"),
          React.createElement(Text, { style: styles.contactItem }, `Brasil / Paraíba (${age} ${lang === 'pt' ? 'anos' : 'years'})`),
          React.createElement(Text, { style: styles.contactItem }, "github.com/moacirdavidag"),
          React.createElement(Text, { style: styles.contactItem }, "linkedin.com/in/moacir-david-7735b7158")
        )
      ),
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, lang === 'pt' ? 'Resumo Profissional' : 'Professional Summary'),
        React.createElement(
          Text,
          { style: styles.summaryText },
          lang === 'pt'
            ? 'Software Engineer especializado em desenvolvimento Full Stack e Mobile com foco em sistemas de alta disponibilidade e grande fluxo de acessos. Experiência sólida em arquiteturas resilientes utilizando React, Next.js, Node.js, NestJS, TypeScript, Python e Docker. Histórico comprovado de liderança técnica em projetos móveis e soluções orientadas a dados para jornalismo de grande porte.'
            : 'Software Engineer specializing in Full Stack and Mobile engineering for high-availability systems. Proven expertise in resilient architecture using React, Next.js, Node.js, NestJS, TypeScript, Python, and Docker. Track record of technical leadership in mobile projects and data-driven solutions for major digital media.'
        )
      ),
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, dict.common.about.experience_title),
        dict.experiences.map((exp: any) => {
          const duration = calculateDuration(exp.startDate, exp.endDate, exp.current, lang);
          return React.createElement(
            View,
            { key: exp.id, style: styles.jobContainer },
            React.createElement(
              View,
              { style: styles.jobHeader },
              React.createElement(
                Text,
                { style: styles.jobRole },
                exp.role,
                " ",
                React.createElement(Text, { style: styles.jobCompany }, `| ${exp.company}`)
              ),
              React.createElement(
                Text,
                { style: styles.jobPeriod },
                `${exp.period} (${duration})`
              )
            ),
            exp.highlights.map((h: string, idx: number) =>
              React.createElement(
                View,
                { key: idx, style: styles.bulletPoint },
                React.createElement(Text, { style: styles.bullet }, "•"),
                React.createElement(Text, { style: styles.bulletText }, h)
              )
            )
          );
        })
      ),
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, lang === 'pt' ? 'Principais Projetos' : 'Key Projects'),
        dict.projects.slice(0, 4).map((p: any) =>
          React.createElement(
            View,
            { key: p.id, style: styles.projectContainer },
            React.createElement(
              Text,
              { style: styles.projectTitle },
              p.title,
              " ",
              React.createElement(Text, { style: { fontSize: 8.5, color: '#bd93f9' } }, `— ${p.role}`)
            ),
            React.createElement(Text, { style: styles.projectDesc }, p.description)
          )
        )
      ),
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, dict.common.about.skills_title),
        React.createElement(
          View,
          { style: styles.skillsGrid },
          [
            'TypeScript', 'JavaScript (ES6+)', 'Node.js', 'NestJS', 'Express', 'Fastify',
            'React', 'Next.js (App Router)', 'React Native', 'PHP', 'Laravel', 'Python',
            'MySQL', 'MongoDB', 'GraphQL', 'Docker', 'CI/CD', 'Git / GitHub', 'REST APIs', 'Clean Architecture'
          ].map((s, idx) =>
            React.createElement(Text, { key: idx, style: styles.skillBadge }, s)
          )
        )
      ),
      React.createElement(
        View,
        { style: styles.section },
        React.createElement(Text, { style: styles.sectionTitle }, lang === 'pt' ? 'Educação & Idiomas' : 'Education & Languages'),
        React.createElement(
          Text,
          { style: { fontSize: 8.5, color: '#343746' } },
          `🎓 Análise e Desenvolvimento de Sistemas — Instituto Federal da Paraíba (IFPB Campus Cajazeiras)`
        ),
        React.createElement(
          Text,
          { style: { fontSize: 8.5, color: '#343746', marginTop: 2 } },
          `🗣️ ${dict.common.about.quick_facts.languages_val}`
        )
      )
    )
  );
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lang = (searchParams.get('lang') === 'en' ? 'en' : 'pt') as 'pt' | 'en';

  const pdfStream = await pdf(React.createElement(ResumeDocument, { lang }) as any).toBuffer();

  return new NextResponse(pdfStream as any, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${
        lang === 'pt'
          ? '[Currículo] Moacir David de Almeida Gonçalves - Software Engineer.pdf'
          : '[Resume] Moacir David de Almeida Gonçalves - Software Engineer.pdf'
      }"`,
    },
  });
}
