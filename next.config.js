/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
