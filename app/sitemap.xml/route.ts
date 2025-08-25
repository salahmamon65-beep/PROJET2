import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://techpro.example.com'; // Replace with your actual domain
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}/ar</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/fr</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/ar/pricing</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/pricing"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/pricing"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/fr/pricing</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/pricing"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/pricing"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/ar/blog</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/blog"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/blog"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/fr/blog</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/blog"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/blog"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/ar/contact</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/contact"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/contact"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/fr/contact</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/contact"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/contact"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/ar/login</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/login"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/login"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/fr/login</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/login"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/login"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/ar/register</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/register"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/register"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/fr/register</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/register"/>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr/register"/>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}