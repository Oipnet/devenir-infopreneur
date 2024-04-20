console.log('robots.config.ts')
export default [
    { UserAgent: '*' },
    { Disallow: '/' },

    // Be aware that this will NOT work on target: 'static' mode
    { Sitemap: (req: any) => `https://${req.headers.host}/sitemap.xml` }
]