import merge from 'webpack-merge'
import base from './webpack.base'
import webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'development',
    // webpack——devtool里的7种SourceMap模式
    // https://www.cnblogs.com/wangyingblog/p/7027540.html
    devtool: 'cheap-module-eval-source-map'
}
const webConfig = merge(base.webConfig, config);
const nodeConfig = merge(base.nodeConfig, config);
console.log(JSON.stringify(webConfig));

module.exports = [webConfig, nodeConfig];
