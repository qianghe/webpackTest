const webpack = require('webpack');
const base = require('./webpack.config');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(base, {
  devtool: '#eval',
  devServer: {
    host: '127.0.0.1',
    port: 8090,
    historyApiFallback: true,
    disableHostCheck: true,
    inline: true, // 实时刷新
    hot: true, // 使用热加载插件 HotModuleReplacementPlugin
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: "'development'"
      }
    }),
  ],
})
