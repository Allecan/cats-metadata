import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "allecan.github.io",
        pathname: "/cats/**",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
