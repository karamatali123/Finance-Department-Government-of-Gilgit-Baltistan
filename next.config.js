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
  experimental: {
    serverComponentsExternalPackages: ["sharp"],
  },
};

module.exports = nextConfig;
