import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true, // temporary for placeholder image
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      }
    ]
  }
};

export default nextConfig;
