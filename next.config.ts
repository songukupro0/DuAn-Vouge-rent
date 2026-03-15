/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  turbopack: {
    // If your workspace root is indeed the parent "React" directory:
    root: path.join(process.cwd(), '..'), 
    
    // OR, if you want to force the root to be just the "vouge-rent" directory:
    // root: process.cwd(),
  },
};

export default nextConfig;
