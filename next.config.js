/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', "bek.org.tr"], // Görüntüleri barındıran ana bilgisayar adlarını burada belirtin
  },
}

module.exports = nextConfig
