const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:3002/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 3002,
    static: path.join(__dirname, 'dist'),
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // TypeScript ve TSX dosyalarını işlemek için
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/, // CSS dosyalarını işlemek için
        use: ['style-loader', 'css-loader'], // CSS yükleyicileri
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'basketRemote',
      filename: 'remoteEntry.js',
      exposes: {
        './basket': './src/basket.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        'react-dom': { singleton: true, requiredVersion: false },
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
};