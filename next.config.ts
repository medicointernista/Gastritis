import type { NextConfig } from "next";
import path from "node:path";
import fs from "node:fs";

const getLoaderPath = (): string | null => {
  try {
    const { loaderPath } = require('orchids-visual-edits/loader.js');
    if (loaderPath && fs.existsSync(loaderPath)) return loaderPath;
  } catch {}
  return null;
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
