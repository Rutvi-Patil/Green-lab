import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  trailingSlash: true, // Add trailing slashes for better static hosting compatibility
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'mygreenlab.org',
      },
    ],
    unoptimized: true, // Required for static export with external images
  },
};

export default nextConfig;
