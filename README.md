electron-quick-start

### Electron 安装巨坑

> 报错：

```bash
Electron failed to install correctly, please delete node_modules/electron and try installing again
```

> 解决：

1. 访问 https://github.com/electron/electron/releases

2. 下载对应版本压缩包：macOS 对应 [electron-v13.1.7-darwin-x64.zip](https://github.com/electron/electron/releases/download/v13.1.7/electron-v13.1.7-darwin-x64.zip)

3. 进入 `node_modules/electron` 目录下(执行过安装才会有此文件件)

4. 将压缩包复制到项目 `node_modules/electron` 下（执行过安装命令会生成此目录）

5. 编辑 `install.js`:

```javascript
// 注释掉文件下载代码段：
// // downloads if not cached
// downloadArtifact({
//   version,
//   artifactName: 'electron',
//   force: process.env.force_no_cache === 'true',
//   cacheRoot: process.env.electron_config_cache,
//   platform: process.env.npm_config_platform || process.platform,
//   arch: process.env.npm_config_arch || process.arch
// }).then(extractFile).catch(err => {
//   console.error(err.stack);
//   process.exit(1);
// });

// 加入文件提取执行代码：
extractFile("./electron-v13.1.7-darwin-x64.zip");
```

6. 终端执行 `node install.js` （没有任何提示）
7. 退回到项目根目录，验证是否安装成功：
   `npx electron -v`
