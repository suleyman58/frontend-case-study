import { NextConfig } from 'next';
import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig: NextConfig = {
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host', // Host uygulamanızın adı
        remotes: {
          // Remote uygulamanızın URL'si
          // productsRemote: 'productsRemote@http://localhost:3001/_next/static/chunks/remoteEntry.js', // Product Remote
         
            basketRemote: 'basketRemote@http://localhost:3002/remoteEntry.js',
        
          //basketRemote: 'basketRemote@http://localhost:3002/_react/static/chunks/remoteEntry.js', // Basket Remote
        },
        shared: {},
        filename: 'remoteEntry.js', // Remote uygulama için dışa açılan dosya
      })
    );
    return config;
  },
};

export default nextConfig;
