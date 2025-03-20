import { NextConfig } from 'next';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js', // Module Federation için gerekli dosya
        exposes: {
          './products': './src/pages/products.tsx', // Paylaşılan bileşen
        },
        shared: {}, // Ortak bağımlılıkları burada tanımlayabilirsiniz
      })
    );
    return config;
  },
};

export default nextConfig;