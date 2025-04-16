/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost"],
  },
  // Add this configuration
  experimental: {
    // Exclude auth pages from static generation
    excludeDefaultMomentLocales: false,
    serverActions: true,
  },
};

module.exports = nextConfig;
