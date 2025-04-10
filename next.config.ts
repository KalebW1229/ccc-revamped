import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/ccc-revamped' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
