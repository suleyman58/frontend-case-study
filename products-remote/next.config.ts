import { NextConfig } from 'next';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';
//import { NextFederationPlugin } from './src/pages/products/productdetails/index.tsx';


const nextConfig: NextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'productsRemote',
        filename: 'static/chunks/remoteEntry.js', // Module Federation için gerekli dosya

        exposes: {
          //paylaşılan bileşenler
          './Topbar': './src/container/layout/Topbar.tsx',
          './Navbar': './src/container/layout/Navbar.tsx',
          './Footer': './src/container/layout/Footer.tsx',
          // Paylaşılan tüm sayfalar
          './products': './src/pages/products/index.tsx',
          './productsdetails': './src/pages/products/productdetails/index.tsx',
          './about': './src/pages/about/index.tsx',
          './accessories': './src/pages/accessories/index.tsx',
          './collections': './src/pages/collections/index.tsx',
          './collectionsdetails': './src/pages/collections/collectiondetails/index.tsx',
          './contact': './src/pages/contact/index.tsx',
          './giftcards': './src/pages/giftcards/index.tsx',
          './profile': './src/pages/profile/index.tsx',
          './basket': './src/pages/basket/index.tsx',
        },
        shared: {}, // Ortak bağımlılıkları burada tanımlayabilirsiniz
        experimental: {
          turbo: false, // Bu satırı kaldırın veya false yapın
        },
      })
    );
    return config;
  },
};

export default nextConfig;