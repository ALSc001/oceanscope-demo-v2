import{R as e,u as c}from"./workbench-Bt1BfPQd.js";import{e as l}from"./comparisonExport-rG_qP9SP.js";import"./verticalSection-DptfHDZh.js";const d=`# OceanScope Interactive Demo / 公开演示用户手册\r
\r
Version: 2.0.0-demo.7 · 2026-11-04\r
\r
## Start / 开始\r
\r
Open the website; no installation or account is required. The first visit opens Gentle GT / Best_1027 frame 1049 in 3D, loading about 25 MB. The comparison, camera controls and playback occupy the main workspace. Select Chinese or English in the top bar.\r
\r
直接打开网页，无需安装或登录。首次进入即显示 Gentle GT / Best_1027 的1049帧三维，加载约25 MB。对比画面、相机与播放条位于主工作区，顶部可切换中英文。\r
\r
## Four top-level analyses / 顶部四个分析入口\r
\r
| Entry / 入口 | Use / 用途 |\r
| --- | --- |\r
| 3D spatial / 3D 空间分析 | Rotate, zoom, reset or choose a camera preset; compare side by side or overlay through View settings. / 旋转、缩放、重置或选择预设视角；在“视图设置”选择并排或叠加。 |\r
| Height & ROI / 高度与 ROI | Probe a map, drag an ROI or enter X/Z bounds; read errors and common valid counts. / 点击取值、拖拽框选或输入X/Z范围；同时查看误差与共同有效点数。 |\r
| Field slices / 场切片 | Inspect synchronized SDF or velocity slices from the three published volume frames. / 查看三个已发布体积场帧的同步SDF或速度切片。 |\r
| Reports & restore / 报告与恢复 | Create a report, download PNG/CSV/JSON, restore JSON, or save a view. / 生成报告、下载PNG/CSV/JSON、恢复JSON及保存视图。 |\r
\r
Time analysis is directly below the 3D view and playback controls. Scroll down or use “View time analysis”. Select a curve point to change the same 3D frame; “Back to 3D” returns to the canvas. Fixed-protocol 96-frame results and separately folded legacy diagnostics retain their original scopes. The existing #analysis-summary link opens this section.\r
\r
时间分析位于三维画面与播放条正下方，可向下滚动或点击“查看时间分析”。点击曲线上的点会同步切换三维帧，“返回三维画面”回到上方画面。固定协议96帧结果和单独折叠的旧预览诊断仍保持原统计范围。原 #analysis-summary 链接仍可打开这个区域。\r
\r
Switching analyses preserves the frame, section, camera and ROI. Playback pauses when leaving 3D or entering a frame number. View settings opens a right panel; on narrow screens it is a modal with contained keyboard navigation and scrolling. Close settings, Escape or the backdrop closes it and returns focus to the opener. Dataset details is beside the dataset name. Wave Surface, Results Library and User Guide are in the workspace selector beside OceanScope.\r
\r
切换分析保留当前帧、截面、相机与ROI；离开三维或输入跳转帧号时暂停播放。“视图设置”在窄屏以弹窗打开，键盘焦点和长内容滚动留在面板内；用“关闭设置”、Escape或点击遮罩收起，焦点返回入口。“数据详情”位于数据名旁。海浪示例、结果库与手册在OceanScope旁的工作区菜单中。\r
\r
Presentation mode keeps the comparison full-width. View settings opens a temporary modal; close it before returning to the enlarged view. The exit button remains available after resizing to a narrow screen. Escape closes settings first, then exits presentation.\r
\r
汇报模式保持对比画面全宽，视图设置以临时弹窗打开。窄屏仍可点击退出汇报；Escape先关闭设置，再退出汇报。\r
\r
## Frames, sections and metrics / 帧、截面与指标\r
\r
Current frame and SDF playback cover1001–1096:96 actual native-SDF surfaces with Fine (stride1) and Balanced (stride2) display. Additional surface frames load about0.8 MB Balanced or3 MB Fine on demand, with bounded caching; playback waits for verified data and does not interpolate time. Full volume/SDF/velocity slices cover1001,1049,1096. Surface-only frames keep their same-frame height, ROI, section outline and report camera; the slice panel names its narrower coverage. No neighboring frame is substituted. Gray cells and N/A mean missing support, not zero error.\r
\r
顶部选帧及SDF三维播放覆盖1001–1096，共96帧真实原生SDF表面，提供精细（步长1）和均衡（步长2）。新增表面按需加载，均衡约0.8 MB／帧、精细约3 MB／帧；缓存有上限，播放等待数据核验，不插帧。完整体积SDF与速度切片仍覆盖1001、1049、1096。表面帧保留同帧高度、ROI、截面位置标记及报告相机；切片面板明确说明覆盖范围。不会替换为邻帧。灰色与N/A表示无有效支持，不能当作零误差。\r
\r
XY, YZ or a vertical Y-axis oblique section supports a height profile. Volume/SDF differences and surface-height errors use different definitions. Time-analysis values retain their recorded full-sequence or explicitly selected support; camera and ROI do not change them. Units follow the source convention and are not independently calibrated.\r
\r
XY、YZ或绕Y的竖直斜切用于高度剖面。SDF场差值与水面高度误差使用不同定义。时间分析保留已记录的全序列或明确选定范围，不随相机、ROI变化。单位沿用来源约定，未独立标定。\r
\r
## Read height errors / 读懂高度误差\r
\r
Under Height & ROI, each metric has a short explanation. Expand “How to read MAE, Bias and RMSE” for formulas and an example. For paired valid locations, eᵢ = Bᵢ − Aᵢ (prediction minus GT, in cm), N is the number of locations, and Σ sums over those N locations: MAE = Σ|eᵢ| / N; Bias = Σeᵢ / N; RMSE = √(Σeᵢ² / N). Positive bias means higher; negative means lower. Bias can cancel opposite errors; RMSE emphasizes large errors and is not the maximum. For errors −1 and +3 cm, the values are 2, +1 and approximately 2.24 cm. Missing support is excluded; no score is available for N = 0.\r
\r
在“高度与 ROI”里，每个指标下方都有简短解释；展开“MAE、Bias、RMSE 怎么看？说明与公式”可查看公式和例子。对两边都有有效高度的位置，eᵢ = Bᵢ − Aᵢ（预测减GT，统一为cm），N为有效对比点数，Σ为对这N个位置求和：MAE = Σ|eᵢ| / N；Bias = Σeᵢ / N；RMSE = √(Σeᵢ² / N)。Bias正值偏高、负值偏低，正负误差可抵消；RMSE对大误差更敏感，但不是最大误差。若两点误差为−1和+3 cm，三个结果为2、+1、约2.24 cm。缺失位置不补零；N=0不提供误差分数。\r
\r
Full-frame values describe this frame, ROI values describe the applied rectangle, and the probe describes one point. Profiles cover the full section, not just the ROI. X/Z set the horizontal bounds; Y is height. These cm values are surface-height errors, not SDF/velocity errors or the fixed-protocol sequence %R. ROI changes do not alter frame-wide or sequence scores.\r
\r
当前帧全域值、已应用ROI内的值、单点探针值各有范围；剖面显示整条截面，不自动裁剪到ROI。X/Z规定水平范围，Y为高度。这里的cm是水面高度误差，不是SDF/速度误差，也不是全序列%R；选区变化不修改当前帧全域或全序列评分。\r
\r
## Save and restore / 保存与恢复\r
\r
Confirm frame, ROI, section and camera, then create a report under Reports & restore. PNG is for presentations, CSV retains numerical precision, and JSON restores the analysis. Downloads use one frozen snapshot; update it after view changes. The 3D image retains the last view even when its tab is hidden. Restore by choosing a file or pasting JSON, reviewing its scope, then applying it. Rebuild the export snapshot after restoration.\r
\r
确认帧、选区、截面和相机后，进入“报告与恢复”生成报告。PNG用于汇报，CSV保留数值精度，JSON恢复分析。下载使用同一快照，视图改动后需更新；三维页隐藏时仍保留最后画面用于报告。选择文件或粘贴JSON，核对范围后应用，恢复后重新生成导出快照。\r
\r
Reports require matching public source-summary and data identities. Reports from demo.1/demo.2 remain compatible with demo.7 because their data identities are unchanged. New surface reports additionally bind the exact frame, quality and surface resource hashes; reports from a different local edition are rejected. Download help provides selectable JSON when normal download is unavailable. Reload does not restore temporary ROI: save JSON before leaving.\r
\r
报告要求公开来源摘要与数据标识一致。冻结指标与原三帧资源标识保持不变，demo.1／demo.2报告仍可在demo.7恢复。新增表面报告额外绑定帧号、精度与表面资源哈希；不同本机版本的报告会被拒绝。下载不便时可从“下载帮助”复制JSON。刷新不会恢复临时ROI，离开前应保存JSON。\r
\r
## Scope / 范围\r
\r
Wave Surface includes three wave examples. Field analysis publishes the selected Gentle GT / Best_1027 case. This demo displays saved results; it does not run training, new reconstruction or server-side simulation, and does not establish model rankings or independent physical calibration. The source summary distinguishes provided claims from verified data identities.\r
\r
海浪页提供三种海况示例，场分析提供所选Gentle GT / Best_1027。Demo查看已有结果，不运行训练、新重建或云端模拟，不代表模型排名或独立物理标定。来源摘要区分原始实验声明与已核验数据标识。\r
\r
## 浏览与批注 / Browse and annotate\r
\r
普通链接默认浏览。点「批注」后，图标题的 ＋ 可以给整张图写意见。在 96 帧指标曲线上，选择一帧后点读数旁的「批注此帧」保存当前指标和数值。要标记一段趋势，可在批注工具栏选「框选」或「画圈」。桌面上的控件支持悬停或键盘聚焦后按 Alt+Enter，触屏用「选功能」。浏览与批注之间切换时会保留当前分析位置和正在输入的意见。\r
\r
保存的意见保存在本浏览器。标题旁的数字可打开该处意见，也可以从「批注记录」导入或导出 JSON。用定位链接分享，或在 GitHub 草稿中核对后提交。完整源码文件需要私库权限。\r
\r
Choose **Annotate** to review a chart, a selected frame, a range, or a control. A figure title opens its comments. **Pick feature** selects a control on touchscreens. **Browse** returns to the same analysis. Saved comments remain in this browser and can be exported or explicitly shared.\r
\r
## B 区域指标提案 / Region B metric proposals\r
\r
打开 B 区域的「改指标并预览」。默认提案将 ROI 高度 RMSE 加入追踪量。可修改中英文名称、统计量和小数位数。对照表显示 1050 和 1054 的原值、候选值及共同有效点数。展开「查看代码差异」可核对将要提交的行。\r
\r
点「准备提交 PR」核对 GitHub 上的版本。有相同内容的提案分支时，打开 GitHub 比较页确认创建 PR，已提交的提案会给出 PR 链接。新提案可复制候选文件，在 GitHub 编辑器中用新分支或个人 fork 提交，也可下载补丁。评审通过后，维护者把改动同步至源码库，核验发布清单并部署。\r
\r
Every page annotation links to the recorded source revision and to the GitHub file editor on the private repository's main branch. Sign in with repository access to propose a change.\r
`;function u({zh:r,onOpen:o}){const s=r?[["1 · 选择帧","进入场比较，确认数据组合；顶部“当前帧”可选择全部96帧。全部96帧均可查看真实三维表面和高度图；完整体积场与速度切片覆盖1001、1049、1096。"],["2 · 检查空间","先看三维形状，再向下查看时间曲线；点击曲线切换三维帧。高度与 ROI、场切片仍在顶部；“视图设置”调整叠加、旋转轴和角度。"],["3 · 选择局部区域","单击高度图查看点值，拖动框选ROI，或输入X/Z坐标。读取误差时同时查看共同有效点数；灰色和N/A不是零误差。"],["4 · 保存并继续","在顶部“报告与恢复”生成报告。PNG用于汇报，CSV用于数值，JSON用于恢复。改动视图后先更新报告快照，再导出新结果。"]]:[["1 · Choose a frame","Open Field Compare and confirm the dataset. Current frame selects all 96 frames, each with its actual native-SDF surface and height map. Full volume and velocity slices cover 1001, 1049 and 1096."],["2 · Inspect space","Inspect 3D shape, then scroll down to Time analysis. Select a curve point to change the 3D frame. Height & ROI and Field slices stay in the top bar; View settings controls overlay, rotation axis and angle."],["3 · Select a region","Click a height map to probe, drag to select an ROI, or enter X/Z bounds. Read common valid counts with errors. Gray and N/A are not zero error."],["4 · Save and resume","Use the top-level Reports & restore tab. PNG is for presentation, CSV for numbers and JSON for restoration. Update the snapshot after changing the view."]],t=r?[["汇报图片 PNG","用于展示；包含当前帧空间图和单独标明的序列指标。","不能恢复"],["数据表 CSV","保留完整精度、单位、范围及定义，便于分析。","不能恢复"],["可恢复分析 JSON","恢复帧、ROI、探针、截面与可用相机；需要匹配资源。","从“报告与恢复”中的“恢复分析”恢复"]]:[["Presentation PNG","Current-frame spatial figures and separately scoped sequence metrics.","Not restorable"],["Data-table CSV","Full-precision numbers, units, scope and definitions.","Not restorable"],["Restorable-analysis JSON","Frame, ROI, probe, section and available camera; matching resources required.","Use Restore analysis"]];return e.createElement("section",{"data-os-loc":"src/CurrentGuide.jsx:21:9",className:"current-guide","aria-label":r?"当前操作指南":"Current workflow guide"},!1,e.createElement("p",{"data-os-loc":"src/CurrentGuide.jsx:23:16",className:"demo-guide-note"},r?"公开 Demo 默认打开1049帧三维，并加载约25 MB。顶部四个入口切换分析，时间分析就在三维画面与播放条下方；切换时保留相机、截面与 ROI。全部96帧均有真实SDF三维表面；完整体积场切片覆盖1001、1049、1096。新增表面按需加载，均衡约1 MB／帧、精细约3 MB／帧，播放等待当前帧就绪，不补间。报告可在同一公开版本中恢复；本机版本的不同来源标识会被拒绝。":"The public demo opens frame 1049 in 3D and loads about 25 MB. Four top-level tabs switch analyses while retaining camera, section and ROI. Time analysis sits below the 3D view and playback controls. Native SDF surfaces cover all96 frames; full volume slices cover1001,1049,1096. New surface frames load about1 MB Balanced or3 MB Fine on demand; playback waits for each frame, without interpolation. Reports restore in the matching public edition; local-edition reports with different source identities are rejected."),e.createElement("h2",{"data-os-loc":"src/CurrentGuide.jsx:24:3"},r?"一次完整分析，四步完成":"One analysis in four steps"),e.createElement("p",{"data-os-loc":"src/CurrentGuide.jsx:24:59"},r?"以下步骤与帧数适用于 Gentle GT / Best_1027。顶部选帧覆盖96帧，SDF三维播放条覆盖1001–1096的96帧；速度场播放条覆盖1001、1049、1096；其他示例以所选数据的帧范围和可用功能为准。":"These steps and frame counts apply to Gentle GT / Best_1027. The top selector covers 96 frames; SDF3D playback covers all96 frames; velocity playback covers1001,1049,1096. Other samples have their own frame coverage and available tools."),e.createElement("div",{"data-os-loc":"src/CurrentGuide.jsx:25:3",className:"guide-grid"},s.map(([a,n])=>e.createElement("article",{"data-os-loc":"src/CurrentGuide.jsx:25:58",key:a},e.createElement("h3",{"data-os-loc":"src/CurrentGuide.jsx:25:79"},a),e.createElement("p",{"data-os-loc":"src/CurrentGuide.jsx:25:95"},n)))),e.createElement("div",{"data-os-loc":"src/CurrentGuide.jsx:26:3",className:"reference-controls"},e.createElement("button",{"data-os-loc":"src/CurrentGuide.jsx:26:39","data-os-action":"",onClick:()=>o("field")},r?"进入场比较":"Open Field Compare"," ↗"),e.createElement("button",{"data-os-loc":"src/CurrentGuide.jsx:26:121","data-os-action":"",onClick:()=>l("OceanScope-demo-user-guide.md",d,"text/markdown;charset=utf-8")},r?"下载用户手册（中英 Markdown）":"Download user guide (Chinese/English Markdown)")),e.createElement("h2",{"data-os-loc":"src/CurrentGuide.jsx:27:3"},r?"报告怎么选、怎么恢复":"Choose and restore a report"),e.createElement("div",{"data-os-loc":"src/CurrentGuide.jsx:27:59",className:"scope-table"},e.createElement("table",{"data-os-loc":"src/CurrentGuide.jsx:27:88"},e.createElement("thead",{"data-os-loc":"src/CurrentGuide.jsx:27:95"},e.createElement("tr",{"data-os-loc":"src/CurrentGuide.jsx:27:102"},(r?["文件","用途","恢复方式"]:["File","Purpose","Restoration"]).map(a=>e.createElement("th",{"data-os-loc":"src/CurrentGuide.jsx:27:171",key:a},a)))),e.createElement("tbody",{"data-os-loc":"src/CurrentGuide.jsx:27:206"},t.map(a=>e.createElement("tr",{"data-os-loc":"src/CurrentGuide.jsx:27:231",key:a[0]},a.map((n,i)=>e.createElement("td",{"data-os-loc":"src/CurrentGuide.jsx:27:264",key:i},n))))))),e.createElement("p",{"data-os-loc":"src/CurrentGuide.jsx:28:3"},r?"先确认帧号、选区、截面和相机，再生成报告。下载始终使用面板标明的快照帧与时间；视图变化不会自动改写报告。成功导入后需要重新生成导出快照。":"Confirm frame, ROI, section and camera before creating a report. Downloads use the displayed snapshot frame and time; later view changes do not rewrite it. After a successful import, create a new export snapshot."),e.createElement("p",{"data-os-loc":"src/CurrentGuide.jsx:29:3"},r?"“报告与恢复”中的“恢复分析”自动识别完整报告、场比较方案和序列选择。选择文件或粘贴JSON，核对恢复范围后再应用。报告仍需匹配资源；数据说明JSON不能恢复分析。":"Reports & restore contains the restore entry. Restore analysis recognizes reports, field views and sequence selections. Choose a file or paste JSON, review its scope, then restore. Matching resources remain required; data-info JSON cannot restore analysis."),e.createElement("p",{"data-os-loc":"src/CurrentGuide.jsx:30:3"},r?"下载后在浏览器下载列表确认文件。也可展开“下载帮助与 JSON 文本”，选中全部并复制，再粘贴到恢复入口。选区输入减少小数噪声，未编辑边界保留精度，空白或反向范围会就地提示。":"Check saved files in the browser download list. Download help and JSON text lets you select and copy the full JSON into the restore entry. ROI fields show concise values, preserve untouched precision and explain invalid bounds inline."),e.createElement("details",{"data-os-loc":"src/CurrentGuide.jsx:30:341"},e.createElement("summary",{"data-os-loc":"src/CurrentGuide.jsx:30:350"},r?"常见问题与读数提醒":"Troubleshooting and metric scope"),e.createElement("ul",{"data-os-loc":"src/CurrentGuide.jsx:30:420"},e.createElement("li",{"data-os-loc":"src/CurrentGuide.jsx:31:4"},r?"三维加载失败：使用重试；不会用邻帧替代。新表面帧不包含完整体积切片，可继续查看同帧高度与 ROI。":"3D load failure: retry; no adjacent-frame substitution. Surface-only frames retain same-frame height and ROI but do not include volume slices."),e.createElement("li",{"data-os-loc":"src/CurrentGuide.jsx:32:4"},r?"没有高度曲线：检查截面方向与有效数据。空ROI、无效区域不能当作零误差。":"No height profile: check section orientation and valid support. Empty ROI and missing data are not zero error."),e.createElement("li",{"data-os-loc":"src/CurrentGuide.jsx:33:4"},r?"PNG当前帧／ROI高度误差为cm，坐标及色标为m；CSV/JSON按各字段单位读取。SDF距离误差不等于水面高度误差。":"PNG frame/ROI height errors use cm; coordinates and color scales use m. Read CSV/JSON field units. SDF distance error is not surface-height error."),e.createElement("li",{"data-os-loc":"src/CurrentGuide.jsx:34:4"},r?"完整指标中的高度／体积仍为全96帧；速度可选全96帧或固定六帧。固定六帧不是训练／测试划分。":"Complete height/volume metrics retain all 96; velocity can use all 96 or fixed six. Fixed six is not a train/test split."),e.createElement("li",{"data-os-loc":"src/CurrentGuide.jsx:35:4"},r?"刷新不会自动恢复未保存的临时ROI。保存可恢复分析JSON，确认文件可用后再离开。":"Reload does not restore an unsaved temporary ROI. Save restorable-analysis JSON before leaving."))))}function f({onOpen:r}){const{tr:o,language:s}=c(),t=s==="zh";return e.createElement("section",{"data-os-loc":"src/PublicGuide.jsx:7:23",className:"public-guide"},e.createElement("header",{"data-os-loc":"src/PublicGuide.jsx:7:57"},e.createElement("h1",{"data-os-loc":"src/PublicGuide.jsx:7:65","data-review-id":"guide"},t?"用户指南":"User Guide")),e.createElement("div",{"data-os-loc":"src/PublicGuide.jsx:7:130",className:"guide-body"},e.createElement(u,{zh:t,onOpen:r})))}export{f as default};
