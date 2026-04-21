import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // required for static hosting
  images: {
    unoptimized: true, // important for GitHub Pages
  },
};

export default nextConfig;