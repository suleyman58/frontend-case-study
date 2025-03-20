import { ModuleFederationPlugin } from 'webpack/container';

const config = {
  entry: './src/index.tsx',
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'basketRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './Basket': './src/basket',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};

export default config;
