/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // 如果需要从外部加载图片，可以在这里配置
    unoptimized: true
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
            plugins: [
              ['@babel/plugin-transform-runtime', { corejs: 3 }]
            ]
          }
        }
      ]
    })

    return config
  }
}

module.exports = nextConfig 