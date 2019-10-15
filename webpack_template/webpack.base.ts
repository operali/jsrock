import projectConfig from './project.config'

import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

type config_t = { [key: string]: any }
const config: webpack.Configuration & config_t = {
  entry: {
    [projectConfig.moduleName]: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    library: "[name]",
    libraryTarget: "umd",
    umdNamedDefine: true, // generate: `define('${moduleName}', [...], factory)`
    filename: "[name].js",
    path: path.resolve(__dirname, 'build')
  },
  // externals: ['@babel/polyfill', "core-js", "string_decoder"],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "node_modules/requirejs/require.js",
        to: "./"
      }
    ]),
    new HtmlWebpackPlugin({
      templateParameters: {
        'moduleName': projectConfig.moduleName
      },
      template: 'example/module.ejs'
    })
  ],
  devServer: {
    open: true,
    overlay: { warnings: false, errors: true },
    contentBase: 'build',
    host: 'localhost',
    index: 'index.html',
    port: projectConfig.port,
    disableHostCheck: true, // 解决有些环境(pad)下浏览器对host invalid错误
    stats: { // 过滤控制台编译信息
      assets: false
    }
  }
};

export default config;
