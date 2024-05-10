/** @type {import('next').NextConfig} */
const nextConfig = {
    future: {
      webpack5: true, // Habilita Webpack 5
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.devtool = 'source-map';
        config.optimization.minimize = true; // Minimiza el código en producción
        config.optimization.splitChunks = {
          cacheGroups: {
            default: false,
            vendors: false,
            // Divide el código en chunks más pequeños
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 20,
            },
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
              enforce: true,
            },
          },
        };
      }
  
      return config;
    },
  };
  
  module.exports = nextConfig;
  