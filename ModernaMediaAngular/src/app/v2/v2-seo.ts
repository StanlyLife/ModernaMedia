import { ORGANIZATION_ID, SeoService, SITE_ORIGIN } from '../services/seo.service';
import { FaqEntry } from './v2-data';

export interface V2PageSeo {
  path: string;
  title: string;
  description: string;
  /** Breadcrumb trail after «Forside». */
  crumbs?: { name: string; path: string }[];
  faq?: FaqEntry[];
  service?: { name: string; description: string; lowPrice?: number };
  article?: { headline: string; datePublished: string; image: string };
  image?: string;
  noindex?: boolean;
  /** Extra JSON-LD nodes, e.g. the LocalBusiness on the Oslo page. */
  extraNodes?: object[];
}

/** Sets title, meta tags, canonical and one JSON-LD graph (page, breadcrumbs, FAQ, service, article). */
export function applyV2Seo(seo: SeoService, p: V2PageSeo): void {
  const url = `${SITE_ORIGIN}${p.path}`;
  seo.updateSeo({
    title: p.title,
    description: p.description,
    url,
    image: p.image ? `${SITE_ORIGIN}${encodeURI(p.image)}` : undefined,
    type: p.article ? 'article' : 'website',
    robots: p.noindex ? 'noindex, follow' : undefined,
  });

  const graph: object[] = [
    seo.createOrganizationNode(),
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: p.title,
      description: p.description,
      inLanguage: 'nb-NO',
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    },
  ];
  graph.push(...(p.extraNodes ?? []));
  if (p.crumbs?.length) {
    graph.push(seo.createBreadcrumbs([{ name: 'Forside', path: '/' }, ...p.crumbs]));
  }
  if (p.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      inLanguage: 'nb-NO',
      mainEntity: p.faq.map((q) => ({
        '@type': 'Question',
        name: q.question,
        acceptedAnswer: { '@type': 'Answer', text: q.answer },
      })),
    });
  }
  if (p.service) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: p.service.name,
      description: p.service.description,
      url,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: { '@type': 'Country', name: 'Norway' },
      ...(p.service.lowPrice
        ? { offers: { '@type': 'Offer', priceCurrency: 'NOK', price: p.service.lowPrice, priceSpecification: { '@type': 'PriceSpecification', minPrice: p.service.lowPrice, priceCurrency: 'NOK', valueAddedTaxIncluded: false } } }
        : {}),
    });
  }
  if (p.article) {
    graph.push({
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      headline: p.article.headline,
      description: p.description,
      datePublished: p.article.datePublished,
      image: `${SITE_ORIGIN}${encodeURI(p.article.image)}`,
      inLanguage: 'nb-NO',
      mainEntityOfPage: { '@id': `${url}#webpage` },
      author: { '@id': ORGANIZATION_ID },
      publisher: { '@id': ORGANIZATION_ID },
    });
  }
  seo.addStructuredData({ '@context': 'https://schema.org', '@graph': graph });
}
