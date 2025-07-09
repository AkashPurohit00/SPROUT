/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-pdf'],
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false, // ✅ lowercase
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
