# 🚀 GitHub Actions 自动部署到 Vercel

## 📋 配置步骤（10分钟完成）

### 步骤 1：获取 Vercel Token

1. 访问：https://vercel.com/account/tokens
2. 点击 **"Create Token"**
3. Token 名称：`GitHub Actions Deploy`
4. 点击 **"Create"**
5. **复制 Token**（只显示一次！）

### 步骤 2：获取 Vercel Org ID 和 Project ID

**方法一：使用 Vercel CLI**

```bash
# 安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 进入项目目录
cd ai-tools-nav

# 链接到 Vercel 项目
vercel link

# 查看项目信息
vercel project ls
```

**方法二：从项目设置获取**

1. 访问：https://vercel.com/dashboard
2. 点击你的项目
3. 点击 **"Settings"**
4. 在 **"General"** 标签页找到：
   - **Project ID**：例如 `prj_xxxxxxxxxx`
   - **Org ID**：例如 `team_xxxxxxxxxx` 或你的用户 ID

### 步骤 3：在 GitHub 配置 Secrets

1. 访问你的 GitHub 仓库：
   ```
   https://github.com/mengchenshi9-boop/ai-tools-hub/settings/secrets/actions
   ```

2. 点击 **"New repository secret"**

3. 添加以下 3 个 secrets：

   | Secret 名称 | 值 | 说明 |
   |------------|-----|------|
   | `VERCEL_TOKEN` | 步骤1复制的 Token | Vercel 访问令牌 |
   | `VERCEL_ORG_ID` | 你的 Org ID | 组织/用户 ID |
   | `VERCEL_PROJECT_ID` | 你的 Project ID | 项目 ID |

### 步骤 4：推送代码触发部署

```bash
# 添加 GitHub Actions 配置
git add .github/workflows/deploy.yml
git commit -m "🚀 添加 GitHub Actions 自动部署"

# 推送到 GitHub
git push origin main
```

### 步骤 5：查看部署状态

1. 访问 GitHub 仓库
2. 点击 **"Actions"** 标签
3. 查看部署进度
4. 部署完成后会显示 URL

---

## 🎯 部署效果

配置完成后：
- ✅ 每次推送到 `main` 分支，自动部署到 Vercel
- ✅ Pull Request 会自动创建预览链接
- ✅ 在 GitHub Actions 中查看部署日志
- ✅ 部署成功后会显示网站 URL

---

## 📝 文件说明

### `.github/workflows/deploy.yml`

这个文件定义了自动部署流程：
- 触发条件：push 到 main 分支 或 pull_request
- 使用 `amondnet/vercel-action` 进行部署
- 自动输出预览 URL 和生产 URL

---

## 🆘 常见问题

### Q: 部署失败？
A: 检查 Secrets 是否正确配置，Token 是否过期。

### Q: 找不到 Project ID？
A: 先用 `vercel link` 链接项目，或在 Vercel 控制台查看。

### Q: 部署成功但网站打不开？
A: 检查 `vercel.json` 配置，确保路由正确。

### Q: 如何查看部署日志？
A: 访问 GitHub 仓库 → Actions → 点击最新的 workflow run。

---

## 🎉 完成后

配置完成后，你只需要：
1. 修改代码
2. `git push`
3. 自动部署完成！

无需手动操作，完全自动化！

---

Made with ❤️ by 海梦的AI工具宝库 🦞
