/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nutri-zeus.vercel.app',
  generateRobotsTxt: true, // génère aussi un robots.txt parfait
  sitemapSize: 7000,
  // optionnel : exclure des pages si tu veux
  // exclude: ['/admin/*', '/secret'],
}