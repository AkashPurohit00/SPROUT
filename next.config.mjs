/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['react-pdf'],
  webpack(config, { isServer }) {
    // Support loading PDF worker
    config.module.rules.push({
      test: /pdf\.worker(\.min)?\.js$/,
      use: { loader: 'file-loader' },
    });

    return config;
  },
};

export default nextConfig;
