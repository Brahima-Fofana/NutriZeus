/** @type {import('next-sitemap').IConfig} */ 
module.exports = {
    siteUrl: process.env.BASE_URL,
    generateRobotsTxt: true,
    changefreq: "weekly",
    priority: 0.7,
    sitemapSize: 5000,
    exclude: [],
    robotsTextOptions: {
        policies: [
            {userAgent: '*', allow: '/'},
        ]
    }
}