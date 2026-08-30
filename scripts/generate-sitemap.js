const fs = require('fs');
const globby = require('globby');

const siteUrl = (process.env.WEBSITE_URL || 'https://gptpmt.com').replace(/\/+$/, '');

function addPage(page) {
  let route = page
    .replace(/^pages/, '')
    .replace(/\.(?:js|jsx|ts|tsx|md|mdx)$/, '')
    .replace(/\.zh$/, '');

  if (route === '/index') route = '/';
  if (route.endsWith('/index')) route = route.slice(0, -'/index'.length) || '/';

  const url = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`;

  return `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`;
}

async function generateSitemap() {
  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  const pages = await globby([
    'pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    '!pages/**/_*.*',
    '!pages/api/**',
    '!pages/practice.zh.mdx',
  ]);
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(addPage).join('\n')}
</urlset>
`;

  fs.writeFileSync('public/sitemap.xml', sitemap);
}

generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap:', error);
  process.exitCode = 1;
});
