# Jsrock

包含常用javascript工程的开发脚手架

## feature

- [x] typescript
- [x] eslint
- [x] jest
- [x] browserlist (浏览器兼容性)
- [x] script utility (克隆，发布工具)
- [x] node module 模板
- [x] node app 模板
- [x] webpack (umd) 模板
- [x] react 模板
- [x] material UI 模板
- [ ] antd UI 模板
- [ ] electron 模板
- [ ] cordova 模板
- [ ] wechat 小程序模板



## install
```bash
  # 全局安装
  yarn global add @jsrock/cli
  # you can update jsrock by 
  # yarn global add @jsrock/cli@latest

  jsrock clone

  cd your_project_cloned
  # install depdencies for developing
  yarn install --prod=false
```
or
```bash
  # cd <your workspace directory>
  yarn add @jsrock/cli
  
  npx jsrock clone

  cd your_project_cloned
  # install depdencies for developing
  yarn install --prod=false  
```


## scripts
```bash
  npm run lint # 静态检查
```
```bash
  npm run test # 测试
```
```bash
  npm start # 调试 & watch
```
```bash
  npm run build # 打包
```
```bash
  npm run dist # 交互式发布
```
```bash
  npm run clean # 
```

## configuration
> 谨慎修改配置
  
```.browserlist.rc # 浏览器兼容性```

## FAQ
> 为什么选择[JSS](https://cssinjs.org/?v=v10.0.0)

sass/scss 依赖较重，jsrock支持 less & jss, 基于css in js的灵活性和动态性，推荐使用jss, matrial UI 也依赖于JSS



