const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'vertibar.js',
    path: path.resolve(__dirname, 'dist/umd'),
    library: 'v',
    libraryTarget: 'umd',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
        },
      },
    ],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [new MinifyPlugin()],
};

