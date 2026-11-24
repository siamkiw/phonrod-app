import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { SchemaMarkup } from '@/components/common/SchemaMarkup';
import { FAQSection } from '@/components/common/FAQSection';
import { AuthorBox } from '@/components/common/AuthorBox';
import { GUIDES, getGuideBySlug } from '@/lib/guides-data';
import { BookOpen, Clock, Calculator, CheckCircle2, ArrowRight } from 'lucide-react';

interface GuideDetailPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: GuideDetailPageProps): Metadata {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return { title: 'ไม่พบบทความ' };
  }

  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: {
      canonical: `https://phonrod.com/guides/${guide.slug}`,
    },
    openGraph: {
      type: 'article',
      title: guide.title,
      description: guide.description,
      url: `https://phonrod.com/guides/${guide.slug}`,
    },
  };
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    notFound();
  }

  const otherGuides = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.description,
    datePublished: guide.isoDate,
    dateModified: guide.isoDate,
    author: {
      '@type': 'Organization',
      name: 'PhonRod.com (ผ่อนรถ.คอม)',
      url: 'https://phonrod.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'PhonRod.com (ผ่อนรถ.คอม)',
      url: 'https://phonrod.com',
    },
    mainEntityOfPage: `https://phonrod.com/guides/${guide.slug}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <Breadcrumbs
        items={[
          { name: 'คู่มือตัดสินใจซื้อรถ', url: '/guides' },
          { name: guide.shortTitle, url: `/guides/${guide.slug}` },
        ]}
      />

      <SchemaMarkup
        faqs={guide.faqs}
        breadcrumbs={[
          { name: 'คู่มือตัดสินใจซื้อรถ', url: '/guides' },
          { name: guide.shortTitle, url: `/guides/${guide.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="inline-flex items-center space-x-1.5 bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-bold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{guide.category}</span>
          </span>
          <span className="inline-flex items-center text-slate-500">
            <Clock className="w-3.5 h-3.5 mr-1" />
            ใช้เวลาอ่าน {guide.readTime}
          </span>
          <span className="text-slate-400">อัปเดตล่าสุด: {guide.updatedAt}</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          {guide.title}
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          {guide.description}
        </p>
      </header>

      <article className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed">
        {guide.sections.map((section, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              {idx + 1}. {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, pIdx) => (
              <p key={pIdx} className="text-sm sm:text-base leading-relaxed">
                {paragraph}
              </p>
            ))}

            {section.table && (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 my-4">
                <table className="min-w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold">
                    <tr>
                      {section.table.headers.map((header, hIdx) => (
                        <th key={hIdx} className="px-4 py-3 whitespace-nowrap">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx}>
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`px-4 py-3 ${cIdx === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {section.bullets && (
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-slate-600">
                {section.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* Decision Verdict Card */}
        <div className="rounded-2xl bg-brand-50/70 border border-brand-200 p-6 space-y-3">
          <h2 className="text-base sm:text-lg font-extrabold text-brand-900">
            {guide.verdictTitle}
          </h2>
          <ul className="space-y-2 text-sm sm:text-base text-slate-700">
            {guide.verdictBullets.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="pt-3">
            <Link
              href={`/${guide.relatedToolSlug}`}
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm transition-colors"
            >
              <Calculator className="w-4 h-4" />
              <span>{guide.relatedToolLabel}</span>
            </Link>
          </div>
        </div>
      </article>

      <AuthorBox reviewedDate={guide.updatedAt} />

      <FAQSection faqs={guide.faqs} />

      {/* More Guides */}
      <section className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">คู่มือตัดสินใจอื่นๆ ที่น่าสนใจ</h2>
          <Link href="/guides" className="text-sm font-semibold text-brand-600 hover:underline">
            ดูทั้งหมด →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {otherGuides.map((other) => (
            <Link
              key={other.slug}
              href={`/guides/${other.slug}`}
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-brand-300 hover:shadow-md transition-all flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full">
                  {other.category}
                </span>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 leading-snug">
                  {other.shortTitle}
                </h3>
              </div>
              <span className="inline-flex items-center text-xs font-bold text-brand-600">
                อ่านต่อ <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
