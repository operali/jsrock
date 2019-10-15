import projectConfig from './project.config'

import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
const autoprefixer = require("autoprefixer")

const config: webpack.Configuration = {
  entry: {
    'react': ['react', 'react-dom'],
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
    rules: [{
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: ["babel-loader", "ts-loader"]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(le|c)ss$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            importLoaders: 2, //后面还有几个loader
            localIdentName: '[name]_[local]___[hash:base64:5]',
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: ()=>autoprefixer()
          }
        },
        'less-loader'
      ]
    },
    {
      test: /\.(gif|ttf|eot|svg|png|jpg|wav)$/,
      loader: 'url-loader',
      query: {
        limit: 5000,
        /* inline img size limit */
        name: 'assets/images/[name]-[sha512:hash:base64:7].[ext]'
      }
    },
    {
      test: /\.(txt|py|cfg)$/i,
      use: 'raw-loader',
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.svg', '.ts', '.tsx'],
    alias: {
      gui: path.resolve(__dirname, 'src/gui')
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: "node_modules/requirejs/require.js",
      to: "./"
    }]),
    new HtmlWebpackPlugin({
      templateParameters: {
        'moduleName': projectConfig.moduleName
      },
      template: 'example/index.ejs'
    })
  ],
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
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