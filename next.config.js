/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com', "bek.org.tr", "www.farmasigorta.com"], // Görüntüleri barındıran ana bilgisayar adları
  },
}

module.exports = nextConfig
