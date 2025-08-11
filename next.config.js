/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'source.unsplash.com', 'images.pexels.com'],
    unoptimized: process.env.NODE_ENV === 'development',
  },
}

export default nextConfig