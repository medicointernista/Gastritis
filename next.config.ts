import type { NextConfig } from "next";
import path from "node:path";

const getLoaderPath = (): string | null => {
  try {
    return require.resolve('orchids-visual-edits/loader.js');
  } catch {
    return null;
  }
};

const loaderPath = getLoaderPath();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  ...(loaderPath ? {
    turbopack: {
      rules: {
        "*.{jsx,tsx}": {
          loaders: [loaderPath]
        }
      }
    }
  } : {})
} as NextConfig;

export default nextConfig;
