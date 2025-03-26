/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
    minimumCacheTTL: 60
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  compress: true,
  productionBrowserSourceMaps: false
}

module.exports = nextConfig 