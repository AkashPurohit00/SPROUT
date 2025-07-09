/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-pdf'],

  webpack(config, { isServer }) {
    if (!isServer) {
      // Avoid bundling server-only packages in client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        canvas: false,
        fs: false,
        path: false,
        stream: false,
      };
    }

    // Allow loading PDF worker
    config.module.rules.push({
      test: /pdf\.worker(\.min)?\.js$/,
      use: { loader: 'file-loader' },
    });

    return config;
  },
};

export default nextConfig;
