import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "s4.anilist.co",
      },
      {
        hostname: "www.iitkgp.ac.in"
      }
    ]
  }
};

export default nextConfig;
