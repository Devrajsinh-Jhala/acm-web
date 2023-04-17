/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
