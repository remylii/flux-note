const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const wp_plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),

  new ExtractTextPlugin({
    filename: 'bundle.css'
  })
];

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader?importLoaders=1',
            'postcss-loader'
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: process.env.NODE_ENV === 'production' ?
  wp_plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      compressor: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ])
  : wp_plugins,

  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },

  devServer: {
    contentBase: [
      path.join(__dirname, 'public')
    ],
    compress: true,
    inline: true,
    host: 'localhost',
    port: 9000,
    historyApiFallback: true,
    stats: {
      version: false,
      hash: false,
      chunckModules: false
    }
  },

  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map'
};
