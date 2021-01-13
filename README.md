<p align="center">
  <img height="100px" src="./logo.png" center />
</p>

# [🔑 小程序部署密钥转换小工具](https://github.com/TencentCloudBase-Marketplace/mp-key-tool)

将本地下载的小程序密钥转换为 Base64 格式，用于在云开发云端一键部署小程序时填写

## 开发者信息

本应用由 [@binggg](https://github.com/binggg) 开发提供

## 使用

点击一键部署成功后，点击云开发控制台我的应用中对应的访问按钮来使用。

进入页面之后按照提示操作即可

![](https://main.qcloudimg.com/raw/fe79b8db42f61375511abebebfb86079.png)

## 部署

本项目基于腾讯开源项目 [CloudBase Framework](https://github.com/Tencent/cloudbase-framework) [![star](https://img.shields.io/github/stars/Tencent/cloudbase-framework?style=social)](https://github.com/Tencent/cloudbase-framework) 开发部署，支持一键云端部署

[![](https://main.qcloudimg.com/raw/67f5a389f1ac6f3b4d04c7256438e44f.svg)](https://console.cloud.tencent.com/tcb/env/index?action=CreateAndDeployCloudBaseProject&appUrl=https%3A%2F%2Fgithub.com%2FTencentCloudBase-Marketplace%2Fmp-key-tool&branch=master)

### 配置

无需配置


### 依赖

无外部依赖

## 开发

本地开发

```
npm i 
npm run start
```

使用 [CloudBase CLI](https://docs.cloudbase.net/cli-v1/intro.html) 在终端中一键部署。

```
npx @cloudbase/cli framework deploy -e 环境id
```

## 注意事项

无

## 文档

- [CloudBase Framework 文档](https://docs.cloudbase.net/framework/)
- [CloudBase Framework 小程序插件](https://docs.cloudbase.net/framework/plugins/framework-plugin-mp.html)

## Licence

开源协议文档请参阅 [LICENSE](./LICENSE)
