import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/Resume-Nextjs" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Resume-Nextjs",
  assetPrefix: "/Resume-Nextjs",
  images: {
    unoptimized: true,
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

export default nextConfig;
