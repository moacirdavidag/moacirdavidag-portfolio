'use client';

import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
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
  },
});

interface ResumeDocumentProps {
  lang: 'pt' | 'en';
}

export default function ResumeDocument({ lang }: ResumeDocumentProps) {
  const dict = lang === 'pt' ? ptDict : enDict;
  const age = calculateAge('2002-04-18');

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>Moacir David de Almeida Gonçalves</Text>
          <Text style={styles.title}>
            {lang === 'pt'
              ? 'Software Engineer Full Stack & Mobile'
              : 'Full Stack & Mobile Software Engineer'}
          </Text>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>moacirdavidag@gmail.com</Text>
            <Text style={styles.contactItem}>+55 (83) 98851-5604</Text>
            <Text style={styles.contactItem}>
              {`Brasil / Paraíba (${age} ${lang === 'pt' ? 'anos' : 'years'})`}
            </Text>
            <Text style={styles.contactItem}>github.com/moacirdavidag</Text>
            <Text style={styles.contactItem}>linkedin.com/in/moacir-david-7735b7158</Text>
          </View>
        </View>

        {/* Resumo Profissional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {lang === 'pt' ? 'Resumo Profissional' : 'Professional Summary'}
          </Text>
          <Text style={styles.summaryText}>
            {lang === 'pt'
              ? 'Software Engineer especializado em desenvolvimento Full Stack e Mobile com foco em sistemas de alta disponibilidade e grande fluxo de acessos. Experiência sólida em arquiteturas resilientes utilizando React, Next.js, Node.js, NestJS, TypeScript, Python e Docker. Histórico comprovado de liderança técnica em projetos móveis e soluções orientadas a dados para jornalismo de grande porte.'
              : 'Software Engineer specializing in Full Stack and Mobile engineering for high-availability systems. Proven expertise in resilient architecture using React, Next.js, Node.js, NestJS, TypeScript, Python, and Docker. Track record of technical leadership in mobile projects and data-driven solutions for major digital media.'}
          </Text>
        </View>

        {/* Experiência */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{dict.common.about.experience_title}</Text>
          {dict.experiences.map((exp: any) => {
            const duration = calculateDuration(exp.startDate, exp.endDate, exp.current, lang);
            return (
              <View key={exp.id} style={styles.jobContainer}>
                <View style={styles.jobHeader}>
                  <Text style={styles.jobRole}>
                    {exp.role}{' '}
                    <Text style={styles.jobCompany}>{`| ${exp.company}`}</Text>
                  </Text>
                  <Text style={styles.jobPeriod}>{`${exp.period} (${duration})`}</Text>
                </View>
                {exp.highlights.map((h: string, idx: number) => (
                  <View key={idx} style={styles.bulletPoint}>
                    <Text style={styles.bullet}>•</Text>
                    <Text style={styles.bulletText}>{h}</Text>
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        {/* Projetos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {lang === 'pt' ? 'Principais Projetos' : 'Key Projects'}
          </Text>
          {dict.projects.slice(0, 4).map((p: any) => (
            <View key={p.id} style={styles.projectContainer}>
              <Text style={styles.projectTitle}>
                {p.title}{' '}
                <Text style={{ fontSize: 8.5, color: '#bd93f9' }}>{`— ${p.role}`}</Text>
              </Text>
              <Text style={styles.projectDesc}>{p.description}</Text>
            </View>
          ))}
        </View>

        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{dict.common.about.skills_title}</Text>
          <View style={styles.skillsGrid}>
            {[
              'TypeScript', 'JavaScript (ES6+)', 'Node.js', 'NestJS', 'Express', 'Fastify',
              'React', 'Next.js (App Router)', 'React Native', 'PHP', 'Laravel', 'Python',
              'MySQL', 'MongoDB', 'GraphQL', 'Docker', 'CI/CD', 'Git / GitHub', 'REST APIs', 'Clean Architecture',
            ].map((s, idx) => (
              <Text key={idx} style={styles.skillBadge}>{s}</Text>
            ))}
          </View>
        </View>

        {/* Educação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            {lang === 'pt' ? 'Educação & Idiomas' : 'Education & Languages'}
          </Text>
          <Text style={{ fontSize: 8.5, color: '#343746' }}>
            {`Análise e Desenvolvimento de Sistemas — Instituto Federal da Paraíba (IFPB Campus Cajazeiras)`}
          </Text>
          <Text style={{ fontSize: 8.5, color: '#343746', marginTop: 2 }}>
            {dict.common.about.quick_facts.languages_val}
          </Text>
        </View>
      </Page>
    </Document>
  );
}
