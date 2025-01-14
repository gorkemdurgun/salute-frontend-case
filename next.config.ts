import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static.wikia.nocookie.net",
      },
    ],
  },
};

export default nextConfig;
