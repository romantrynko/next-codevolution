/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp']
  },
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: '/dashboard',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig
