# 📤 推送到 GitHub - 三种方法

## ✅ 准备工作

你的 GitHub 仓库已配置：
```
https://github.com/mengchenshi9-boop/ai-tools-hub.git
```

---

## 🚀 方法一：使用 GitHub Desktop（最简单）

### 步骤 1：安装 GitHub Desktop
- 访问：https://desktop.github.com/
- 下载并安装

### 步骤 2：克隆仓库
1. 打开 GitHub Desktop
2. 点击 **"File" → "Clone Repository..."**
3. 输入仓库地址：
   ```
   https://github.com/mengchenshi9-boop/ai-tools-hub.git
   ```
4. 选择本地路径：`/path/to/ai-tools-hub`
5. 点击 **"Clone"**

### 步骤 3：复制项目文件
1. 进入 `ai-tools-hub` 文件夹
2. 复制所有项目文件：
   - index.html
   - detail.html
   - sitemap.xml
   - package.json
   - vercel.json
   - README.md
   - 等等...

### 步骤 4：提交和推送
1. 在 GitHub Desktop 中
2. **"Current repository"** 选项卡
3. 填写提交信息：
   ```
   🎉 部署海梦的AI工具宝库 - 50+ AI工具导航站

   ✨ 功能特性：
   - 50+ 热门AI工具
   - 智能搜索和筛选
   - 夜间模式和收藏
   - 自动采集系统

   📊 分类：聊天、图片、视频、编程、写作、效率、音频、设计、商业
   ```
4. 点击 **"Commit to main"**
5. 点击 **"Push origin"**

### 步骤 5：完成！
✅ 代码已推送到 GitHub

---

## 🚀 方法二：使用命令行（需要 Git 配置）

### 配置 Git 凭名（如果还没有）

```bash
# 配置用户名
git config --global user.name "你的名字"

# 配置邮箱
git config --global user.email "你的邮箱@example.com"
```

### 推送代码

```bash
cd /path/to/ai-tools-hub

# 添加所有文件
git add .

# 提交
git commit -m "🎉 部署海梦的AI工具宝库 - 50+ AI工具导航站"

# 推送到 GitHub
git push -u origin main
```

第一次推送时会提示输入 GitHub 用户名和密码（或 Personal Access Token）。

---

## 🚀 方法三：使用浏览器上传（最简单）

### 步骤 1：访问仓库
1. 打开：https://github.com/mengchens9-boop/ai-tools-hub
2. 点击 **"Add file" → "Upload files"**

### 步骤 2：上传文件
1. 选择所有项目文件：
   - index.html
   - detail.html
   - sitemap.xml
   - package.json
   - vercel.json
   - README.md
   - DEPLOY.md
   - deploy.sh
   - collector.js
   - deploy-guide.html
   - .gitignore

2. 点击 **"Commit changes"**

### 步骤 3：填写提交信息
```
🎉 部署海梦的AI工具宝库 - 50+ AI工具导航站

✨ 功能特性：
- 50+ 热门AI工具
- 智能搜索和筛选
- 夜间模式和收藏
- 自动采集系统

📊 分类：聊天、图片、视频、编程、写作、效率、音频、设计、商业
```

### 步骤 4：提交
点击绿色按钮 **"Commit changes"**

---

## ✅ 推送成功后

### 访问你的仓库
https://github.com/mengchens9-boop/ai-tools-hub

### 下一步：部署到 Vercel

1. 访问：https://vercel.com/new
2. 选择 **"Import Git Repository"**
3. 输入仓库地址：
   ```
   https://github.com/mengchenshi9-boop/ai-tools-hub.git
   ```
4. 点击 **"Import"**
5. 配置项目：
   - Project Name: `ai-tools-hub`
   - Framework: Other
6. 点击 **"Deploy"**

---

## 💡 推荐

**最简单**：方法三（浏览器上传）- 5分钟搞定

**最方便**：方法一（GitHub Desktop）- 图形界面，适合长期维护

**最专业**：方法二（命令行）- 适合开发者

---

**选择一种方式，开始推送吧！** 🚀

Made with ❤️ by 海梦的AI工具宝库 🦞
