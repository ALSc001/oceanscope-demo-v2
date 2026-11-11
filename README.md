# OceanScope Demo v2

用 OceanScope 比较海浪重建的水面高度和速度场，定位一帧内的误差，并导出可复查的结果。

[打开中文 Demo](https://alsc001.github.io/oceanscope-demo-v2/?lang=zh) · [分析自己的 VDB](https://alsc001.github.io/oceanscope-demo-v2/?lang=zh#workspace-experiments) · [Open in English](https://alsc001.github.io/oceanscope-demo-v2/?lang=en)

| 我想做什么 | 操作 |
| --- | --- |
| 分析自己的 GT 和预测 | 在「我的实验」输入场景名，两边分别选择 VDB。可一次选择多帧，按文件末尾的帧号配对。计算在浏览器中进行，完成后可以点水面图、导出统计，在同一浏览器重新打开实验。 |
| 试用已发布案例 | 打开 Demo 后从 1049 帧开始。Best_1027 有 96 帧水面与高度数据，1001、1049、1096 三帧还有完整体积场。 |
| 给界面提意见 | 在示例工作区切到「批注」，圈选后写意见。选择本机保存，或在 GitHub 提交公开意见。[公开讨论](https://github.com/ALSc001/oceanscope-demo-v2/issues) |
| 修改 B 区域指标 | 在[协作案例](https://alsc001.github.io/oceanscope-demo-v2/?review=b-pair&metric=rmse#analysis-height)预览 1050 和 1054，按[贡献指南](https://github.com/ALSc001/oceanscope-demo-v2/blob/main/review/CONTRIBUTING.md)提交 PR。 |

**仓库目录** · [review/](https://github.com/ALSc001/oceanscope-demo-v2/tree/main/review) 存放可读的指标代码和贡献指南。`assets/` 是编译后的界面，`data/` 是已发布样例。[来源说明](https://github.com/ALSc001/oceanscope-demo-v2/blob/main/public-source-summary.md)记录数据声明，[发布清单](https://github.com/ALSc001/oceanscope-demo-v2/blob/main/release-manifest.json)记录版本和文件校验值。维护者操作见[发布说明](https://github.com/ALSc001/oceanscope-demo-v2/blob/main/DEPLOYMENT.md)。

**For collaborators** · [Compare your own VDB files](https://alsc001.github.io/oceanscope-demo-v2/?lang=en#workspace-experiments) or [review the sample case](https://alsc001.github.io/oceanscope-demo-v2/?lang=en). Invited developers work in the application source repository and propose changes there.
