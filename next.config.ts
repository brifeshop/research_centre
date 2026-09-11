import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/research_centre", // Nama repositori GitHub kamu
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
