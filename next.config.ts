import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
    remotePatterns : [
      {
        hostname: 'cf.bstatic.com',
        protocol : 'https',
        port : ''
      },
      {
        hostname : 'lh3.googleusercontent.com',
        protocol:"https",
        port:""
      },
        {
        hostname : 'images-assets.nasa.gov',
        protocol:"https",
        port:""
      }
    ]
  }
};

export default nextConfig;

