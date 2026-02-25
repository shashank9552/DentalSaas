import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.iran.liara.run",
      },
    ],
    domains: ["images.unsplash.com"],
  },
};

export default nextConfig;