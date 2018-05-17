var path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isProduct = process.env.NODE_ENV === 'production';

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/app.jsx'),
  },
  output: {
    filename: isProduct ? 'static/[name].[chunkhash].js' : 'static/[name].js',
    path: path.resolve(__dirname, './dist'),
    chunkFilename : isProduct ? 'static/[id].[chunkhash:7].js' : 'static/[id].js',
  },
  resolve: {
    extensions: [".js", ".jsx" ,".json"],
    alias: {
      "@src": path.resolve(__dirname, './src'),
    },
    modules: [
      path.resolve(__dirname, './src'),
      'node_modules'
    ]
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: false
        },
      },
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: {
          loader: 'css-loader',
          options: {
            sourceMap: true,
          }
        },
      })
    }]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './template.html'),
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename:'static/[name].[contenthash].css',
      disable: isProduct,
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(path.join(__dirname, './node_modules')) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor'],
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'main',
      children: true,
      async: true,
      minChunks: 2,
    }),
    // new BundleAnalyzerPlugin()
  ]
  // optimization: {
  //   splitChunks: {
  //     chunks: 'initial',
  //     cacheGroups: {
  //       vendor: { // split `node_modules`目录下被打包的代码到 `dist/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
  //         test: /node_modules\//,
  //         name: 'dist/vendor',
  //         priority: 10,
  //         enforce: true
  //       },
  //       commons: { // split `common`和`components`目录下被打包的代码到`dist/commons.js && .css`
  //         test: /common\/|components\//,
  //         name: 'dist/commons',
  //         priority: 10,
  //         enforce: true
  //       }
  //     }
  //   },
  //   runtimeChunk: {
  //     name: 'dist/manifest'
  //   }
  // },
};
