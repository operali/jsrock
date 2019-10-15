import merge from 'webpack-merge'
import baseWebpackConfig from './webpack.base'

const webpackConfig = merge(baseWebpackConfig, {
    mode: 'development',
    // webpack——devtool里的7种SourceMap模式
    // https://www.cnblogs.com/wangyingblog/p/7027540.html
    devtool: 'cheap-module-eval-source-map'
});

module.exports = webpackConfig;
