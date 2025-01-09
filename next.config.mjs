/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the directory for pages
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  output: "export",
  trailingSlash: true,
};

export default nextConfig;
