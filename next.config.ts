import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV;
let hold;

if (isProd === "production") {
  hold = '/ccc-revamped'
} else {
  hold = ''
}

const nextConfig: NextConfig = {
  basePath: hold,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
