# Demo v2 发布维护

正式入口为 [GitHub Pages](https://alsc001.github.io/oceanscope-demo-v2/)。完整界面在应用源码库中开发，通过检查后构建到这里。`review/b-case-metrics.js` 支持公开 PR，维护者将通过复核的改动同步回应用源码后发布。

1. 从已通过 CI 的干净源码提交运行 `node scripts/build-demo.mjs`，再运行 `node scripts/verify-static-demo.mjs dist-demo`。
2. 将核对过的静态文件和 `release-manifest.json` 更新到本库。清单记录源码提交和逐文件 SHA-256；个人实验的原始 VDB 由使用者在浏览器中读取。
3. 运行 [Publish OceanScope demo](https://github.com/ALSc001/oceanscope-demo-v2/actions/workflows/pages.yml)。工作流重新校验发布文件，仅将清单列出的文件部署到 Pages。
4. 在正式网址核对线上版本和修改过的页面。已有案例使用同一份恢复文件核对，新 VDB 工作区使用配对的本机原件核对。

**Release scope** · The reference case includes 96 native surface and height frames and three volume frames. Personal VDB comparisons run locally in the visitor’s browser. The release manifest identifies the application source revision and checksums.
