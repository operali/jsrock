# Jsrock

一个包含常用javascript工程的开发脚手架

## feature

- [x] node module 模板
- [x] node app 模板
- [x] webpack (umd) 模板
- [x] react 模板
- [x] material UI 模板
- [ ] and UI 模板
- [ ] electron 模板
- [ ] cordova 模板
- [ ] wechat 小程序模板
- [x] typescript
- [x] eslint
- [x] jest
- [x] browserlist (浏览器兼容性)
- [x] script utility (克隆，发布工具)


## install
```bash
  # cd <your workspace directory>
  yarn add @jsrock/cli
  npx jsrock clone
  # 根据菜单提示创建你的工程
  
```

```bash
  # 较不推荐全局安装
  yarn global add @jsrock/
  jsrock clone
```

```bash
  # 安装开发依赖
  # cd <your cloned project directory>
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

