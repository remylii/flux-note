var path = require('path');

module.exports = {
  entry: './src/js/app.jsx',

  output: {
    path: __dirname,
    filename: 'dist/js/bundle.js'
  },
  devtools: 'inline-source-map',

  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
