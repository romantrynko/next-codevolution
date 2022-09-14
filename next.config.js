/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
