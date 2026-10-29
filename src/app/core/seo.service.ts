import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { LANGS, Lang } from '../content/content.model';
import { profile } from '../content/profile';
import { ogImage, seo, siteUrl } from '../content/seo';
import { isSet } from './is-set';

/** Met à jour title, meta, Open Graph, hreflang et données structurées pour une langue. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  update(lang: Lang): void {
    const s = seo[lang];
    const url = pageUrl(lang);
    const image = `${siteUrl}/${ogImage.path}`;

    this.doc.documentElement.lang = lang;
    this.title.setTitle(s.title);

    this.meta.updateTag({ name: 'description', content: s.description });
    this.meta.updateTag({ name: 'author', content: profile.name });

    this.meta.updateTag({ property: 'og:type', content: 'profile' });
    this.meta.updateTag({ property: 'og:site_name', content: profile.name });
    this.meta.updateTag({ property: 'og:title', content: s.title });
    this.meta.updateTag({ property: 'og:description', content: s.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:image:width', content: String(ogImage.width) });
    this.meta.updateTag({ property: 'og:image:height', content: String(ogImage.height) });
    this.meta.updateTag({ property: 'og:image:alt', content: s.ogImageAlt });
    this.meta.updateTag({ property: 'og:locale', content: s.locale });
    this.meta.updateTag({
      property: 'og:locale:alternate',
      content: seo[lang === 'fr' ? 'en' : 'fr'].locale,
    });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: s.title });
    this.meta.updateTag({ name: 'twitter:description', content: s.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    this.setLink('canonical', url);
    for (const l of LANGS) this.setLink('alternate', pageUrl(l), l);
    this.setLink('alternate', pageUrl('fr'), 'x-default');

    this.setJsonLd(lang);
  }

  private setLink(rel: string, href: string, hreflang?: string): void {
    const selector = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
    let link = this.doc.head.querySelector<HTMLLinkElement>(selector);
    if (!link) {
      link = this.doc.createElement('link');
      link.rel = rel;
      if (hreflang) link.hreflang = hreflang;
      this.doc.head.appendChild(link);
    }
    link.href = href;
  }

  private setJsonLd(lang: Lang): void {
    const data = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: profile.name,
      jobTitle: typeof profile.title === 'string' ? profile.title : profile.title[lang],
      url: pageUrl(lang),
      image: `${siteUrl}/${ogImage.path}`,
      sameAs: profile.socials.filter((s) => isSet(s.url)).map((s) => s.url),
      knowsLanguage: ['fr', 'en', 'ff'],
      alumniOf: ['Université de Nouakchott', 'ISCAE'],
    };
    let script = this.doc.head.querySelector<HTMLScriptElement>('script#ld-person');
    if (!script) {
      script = this.doc.createElement('script');
      script.id = 'ld-person';
      script.type = 'application/ld+json';
      this.doc.head.appendChild(script);
    }
    script.textContent = JSON.stringify(data);
  }
}

function pageUrl(lang: Lang): string {
  return `${siteUrl}/${lang}/`;
}
