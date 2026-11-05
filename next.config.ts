import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Avoid reusing stale CSS across local restarts and Vercel builds.
    turbopackFileSystemCacheForDev: false,
    turbopackFileSystemCacheForBuild: false,
  },
};

export default nextConfig;
