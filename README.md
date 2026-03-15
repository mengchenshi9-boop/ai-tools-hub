# 海梦的AI工具宝库 🤖

一个现代化、功能丰富的AI工具导航站，帮助用户发现和使用最好的AI工具。

🌐 **在线预览**: https://ai-tools-hub.vercel.app/

---

## ✨ 功能特性

### 🎯 核心功能
- ✅ **50+ 热门AI工具** - 涵盖聊天、图片、视频、编程等9大分类
- ✅ **智能搜索** - 支持关键词搜索、分类筛选、价格筛选
- ✅ **多维度排序** - 默认/评分/热度排序
- ✅ **工具详情页** - 详细介绍、截图展示、替代推荐
- ✅ **每周热门榜单** - TOP 5 热门工具实时更新

### 🎨 用户体验
- ✅ **夜间模式** - 一键切换深色主题，自动保存偏好
- ✅ **本地收藏** - 使用 localStorage 持久化收藏数据
- ✅ **一键分享** - 支持原生分享API和链接复制
- ✅ **骨架屏加载** - 流畅的加载动画体验
- ✅ **图片懒加载** - 优化页面加载性能

### 📱 技术特性
- ✅ **响应式设计** - 完美适配手机、平板、桌面
- ✅ **纯静态HTML** - 无需后端服务器
- ✅ **SEO优化** - Meta标签、Open Graph、Sitemap
- ✅ **性能优化** - 懒加载、动画优化、移动端适配

---

## 📁 文件结构

```
ai-tools-nav/
├── index.html          # 首页（工具列表）
├── detail.html         # 详情页（工具介绍）
├── sitemap.xml         # SEO站点地图
├── README.md           # 项目说明
└── package.json        # Vercel配置
```

---

## 🚀 部署指南

### 方式一：Vercel（推荐）

1. **Fork/Clone 项目**
   ```bash
   git clone https://github.com/yourusername/ai-tools-hub.git
   cd ai-tools-hub
   ```

2. **推送到 GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **部署到 Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 导入 GitHub 仓库
   - 框架选择 "Other"
   - 点击 "Deploy"

4. **自定义域名（可选）**
   - 在 Vercel 控制台添加自定义域名
   - 或使用默认的 `xxx.vercel.app`

### 方式二：Cloudflare Pages

1. 登录 [dash.cloudflare.com](https://dash.cloudflare.com)
2. 点击 "Pages" → "Create a project"
3. 选择 "Upload assets"
4. 上传所有文件
5. 点击 "Deploy site"

### 方式三：GitHub Pages

1. 在 GitHub 创建仓库
2. 上传代码到仓库
3. Settings → Pages → Source → Deploy from a branch
4. 选择 `main` 分支和 `/ (root)` 文件夹
5. 保存后获得 `xxx.github.io/ai-tools-hub` 链接

---

## 📊 收录工具列表

| 分类 | 数量 | 热门工具 |
|------|------|----------|
| 🤖 AI聊天 | 5 | ChatGPT、Claude、Gemini、Kimi |
| 🎨 图片生成 | 5 | Midjourney、DALL·E 3、Stable Diffusion |
| 🎬 视频编辑 | 5 | CapCut、Runway、Pika、HeyGen |
| 💻 编程开发 | 5 | GitHub Copilot、Cursor、Claude Code |
| ✍️ 写作助手 | 5 | Jasper、Copy.ai、Notion AI |
| ⚡ 效率工具 | 5 | Perplexity、Otter.ai、Gamma |
| 🎵 音频处理 | 5 | ElevenLabs、Descript、Whisper |
| 🎨 设计工具 | 3 | Canva AI、Figma AI、Adobe Firefly |
| 🏢 商业办公 | 2 | Microsoft Copilot、Google Duet AI |

**总计: 40+ 工具**

---

## 🔧 本地开发

```bash
# 进入项目目录
cd ai-tools-nav

# 启动本地服务器
npx serve .
# 或
python3 -m http.server 8080
# 或
php -S localhost:8080

# 访问 http://localhost:8080
```

---

## 📈 SEO 配置

### 已配置的 SEO 元素
- ✅ Title & Meta Description
- ✅ Open Graph 标签（Facebook/微信分享）
- ✅ Twitter Card 标签
- ✅ Sitemap.xml
- ✅ Favicon & Apple Touch Icon
- ✅ 结构化数据（Schema.org）

### 需要替换的内容
部署前请修改以下内容：

1. **域名**: 将所有 `ai-tools-hub.vercel.app` 替换为你的实际域名
2. **Open Graph 图片**: 创建 `og-image.png`（1200x630px）放在根目录
3. **Google Analytics**: 添加你的 GA 追踪代码（可选）

---

## 🔄 更新工具数据

工具数据在 `index.html` 和 `detail.html` 中的 JavaScript 数组里：

```javascript
const tools = [
    { 
        name: "工具名称",
        desc: "工具描述",
        category: "分类",
        price: "free/paid",
        url: "官网链接",
        rating: "评分",
        domain: "域名",
        features: ["功能1", "功能2"],
        hot: true,      // 热门标记
        new: true       // 新工具标记
    },
    // ...
];
```

---

## 🗺️ 版本迭代

### 005版本 ✅ (当前)
- SEO优化（Meta标签、Open Graph、Sitemap）
- Favicon配置
- 部署文档完善

### 004版本 ✅
- 工具截图展示
- 替代工具推荐
- 每周热门榜单

### 003版本 ✅
- 多维度排序
- 价格筛选
- 用户评分显示

### 002版本 ✅
- 夜间模式
- 本地收藏功能
- 一键分享

### 001版本 ✅
- 骨架屏加载
- 图片懒加载
- 移动端优化

---

## 📝 更新日志

### 2026-03-15
- ✅ 完成5个版本迭代（001-005）
- ✅ 收录40+热门AI工具
- ✅ 实现骨架屏、懒加载、夜间模式等高级功能
- ✅ 完成SEO优化和部署文档

---

## 🤝 贡献

欢迎提交 Issue 和 PR！

---

## 📄 许可证

MIT License

---

Made with ❤️ by 海梦的AI工具宝库 🦞
