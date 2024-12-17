/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // 如果需要从外部加载图片，可以在这里配置
    unoptimized: true
  },
}

module.exports = nextConfig 