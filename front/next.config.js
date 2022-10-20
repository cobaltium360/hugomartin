/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    locales: ["fr"],
    defaultLocale: "fr",
  },
  images: {
    domains:['hugomartin.lol', 'www.hugomartin.lol']
  }
};
// module.exports = nextConfig