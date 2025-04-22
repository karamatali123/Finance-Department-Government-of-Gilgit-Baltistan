/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the directory for pages
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: "standalone",
  trailingSlash: true,
};

export default nextConfig;
