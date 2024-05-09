/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        path: '/_next/image',
        loader: 'default',
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        disableStaticImages: true,
      },
    future: {
      webpack5: true, // Habilita Webpack 5
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
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
  