# 🚀 Vercel 部署指南

## 📋 部署前检查

- ✅ index.html - 主页面（50个工具）
- ✅ detail.html - 详情页
- ✅ sitemap.xml - 站点地图
- ✅ package.json - 项目配置
- ✅ vercel.json - Vercel 配置
- ✅ README.md - 项目说明
- ✅ .gitignore - Git 忽略

---

## 📝 部署步骤

### 方法一：通过 GitHub 部署（推荐）

#### 步骤 1：推送到 GitHub

如果还没有 GitHub 仓库：

```bash
cd /workspace/projects/workspace/ai-tools-nav

# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "🎉 初始化海梦的AI工具宝库 - 50+ AI工具导航站"

# 关联 GitHub 仓库
git remote add origin https://github.com/你的用户名/ai-tools-hub.git

# 推送
git push -u origin main
```

#### 步骤 2：在 Vercel 部署

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"New Project"**
3. 选择 **"Import Git Repository"**
4. 选择刚才推送的 `ai-tools-hub` 仓库
5. 配置项目：
   - **Project Name**: `ai-tools-hub`（或自定义）
   - **Framework Preset**: Other
   - **Root Directory**: `./`
   - **Build Command**: 留空
   - **Output Directory**: 留空
6. 点击 **"Deploy"**

#### 步骤 3：等待部署

等待 1-2 分钟，部署完成后会显示：
```
✅ Congratulations!
🔗 https://ai-tools-hub-你的名字.vercel.app
```

---

### 方法二：通过 Vercel CLI 部署

#### 步骤 1：安装 Vercel CLI

```bash
npm install -g vercel
```

#### 步骤 2：登录 Vercel

```bash
cd /workspace/projects/workspace/ai-tools-nav
vercel login
```

#### 步骤 3：部署

```bash
vercel
```

按照提示操作：
- ? Set up and deploy? **Yes**
- ? Link to existing project? **No**
- ? Project name: **ai-tools-hub**
- ? In which directory is your code? **.** (当前目录)
- ? Want to override the settings? **No**

部署完成后会获得类似链接：
```
✅ Production: https://ai-tools-hub.vercel.app
```

---

### 方法三：直接上传文件（无 GitHub）

如果不想用 GitHub，可以上传文件夹：

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **"New Project"**
3. 选择 **"Upload"** 选项卡
4. 拖拽 `ai-tools-nav` 文件夹
5. 配置项目信息
6. 点击 **"Deploy"**

---

## 🔧 自定义域名（可选）

### 添加自定义域名

1. 在 Vercel 项目中
2. 点击 **"Settings"** → **"Domains"**
3. 点击 **"Add"**
4. 输入你的域名（如 `ai-tools.example.com`）
5. 按照提示配置 DNS：
   ```
   类型: CNAME
   名称: ai-tools (你的项目名称)
   值: cname.vercel-dns.com
   ```

---

## 📊 部署后检查清单

- [ ] 首页加载正常
- [ ] 点击工具卡片能跳转到详情页
- [ ] 搜索功能正常
- [ ] 分类筛选正常
- [ ] 夜间模式切换正常
- [ ] 收藏功能正常
- [ ] 官方 Logo 显示正常（部署后才有外网访问）
- [ ] 移动端显示正常

---

## 🔄 更新部署

### 自动更新

当你推送新代码到 GitHub 时，Vercel 会自动重新部署！

### 手动触发更新

```bash
git add .
git commit -m "更新工具列表"
git push
```

---

## 📈 监控和分析

### 查看部署日志

1. 在 Vercel 项目中
2. 点击 **"Deployments"**
3. 查看最近的部署记录

### 添加 Google Analytics（可选）

在 `index.html` 的 `<head>` 中添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🆘 常见问题

### Q: 部署后 404 错误？
A: 检查文件是否在根目录，路径是否正确。

### Q: Logo 不显示？
A: 这是正常的，当前服务器环境没有外网访问。部署到 Vercel 后会正常显示。

### Q: 想要修改工具列表？
A: 修改 `index.html` 中的 `const tools` 数组，然后提交 Git 或重新部署。

### Q: 想要每天自动采集新工具？
A: Cron 任务已配置，每天早上9点自动运行。要采集新工具，运行：
```bash
node collector.js
```

---

## 🎉 部署成功后

你会得到：
- **网站地址**: https://xxx.vercel.app
- **HTTPS**: 自动配置
- **CDN**: 全球加速
- **自动 HTTPS**: 证书自动续期
- **自动部署**: Git 推送自动更新

---

## 📞 需要帮助？

- Vercel 文档: https://vercel.com/docs
- OpenClaw 文档: https://docs.openclaw.ai

---

Made with ❤️ by 海梦的AI工具宝库 🦞
