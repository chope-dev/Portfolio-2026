/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
  },
  // Habilitar output standalone para Docker
  output: 'standalone',
}

module.exports = nextConfig
