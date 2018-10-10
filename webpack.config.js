const path = require('path');
const webpack = require('webpack');

const entry = ['./src/index.js'];

const output = {
  path: path.resolve(__dirname + '/dist'),
  publicPath: '/dist/',
  filename: 'bundle.js',
}

module.exports = {
  entry, output, 
  mode: 'development',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['env', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: require.resolve("style-loader")
          },
          {
            loader: require.resolve("css-loader")
          },
        ]
      },
    ]
  }
}