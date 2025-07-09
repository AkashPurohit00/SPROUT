/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-pdf'],
  webpack(config, { isServer }) {
    if (!isServer) {
      // prevent pdf.js from trying to use canvas module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
      };
    }

    return config;
  },
};

export default nextConfig;
