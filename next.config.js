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
    serverComponentsExternalPackages: ["sharp"],
  },
  // Add static file serving
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "/api/uploads/:path*",
      },
    ];
  },
  // Increase body size limit for file uploads
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

module.exports = nextConfig;
