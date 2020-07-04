const assetPrefixForNamespace = require('../config');
const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const myConfig = assetPrefixForNamespace(process.env.NAMESPACE);

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc');

  // Ignore Next.js specific files (e.g., _app.js) and API routes.
  // const pages = await globby(['pages/**/*{.jsx,.mdx}', '!pages/_*.jsx', '!pages/api']);
  const pages = await globby([`${myConfig.filesystem}/**/*{.html, .mdx}`]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page.replace(`${myConfig.filesystem}`, '').replace('/index.html', '');
          const route = path === '/index' ? '' : path;

          return `
            <url>
              <loc>${`${myConfig.domain}${myConfig.folder}${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  // If you're not using Prettier, you can remove this.
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  const robots = `User-agent: *
Sitemap: ${myConfig.domain}${myConfig.folder}/sitemap.xml
  `;

  fs.writeFileSync('public/sitemap.xml', formatted);
  fs.writeFileSync('public/robots.txt', robots);

  if (myConfig.filesystem) {
    fs.writeFileSync(`${myConfig.filesystem}/sitemap.xml`, formatted);
    fs.writeFileSync(`${myConfig.filesystem}/robots.txt`, robots);
  }
})();
