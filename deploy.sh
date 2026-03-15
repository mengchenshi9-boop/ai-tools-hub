#!/bin/bash

# 🚀 Vercel 部署脚本
# 使用方法: ./deploy.sh

echo "============================================================"
echo "🤖 海梦的AI工具宝库 - Vercel 部署"
echo "============================================================"
echo ""

# 检查 Git
if ! command -v git &> /dev/null; then
    echo "❌ Git 未安装，请先安装 Git"
    exit 1
fi

# 添加所有文件
echo "📦 添加文件到 Git..."
git add .

# 提交
echo "💾 提交到本地仓库..."
git commit -m "🎉 部署海梦的AI工具宝库 - 50+ AI工具导航站

✨ 功能特性：
- 50+ 热门AI工具
- 智能搜索和筛选
- 夜间模式和收藏
- 自动采集系统

📊 分类：聊天、图片、视频、编程、写作、效率、音频、设计、商业"

if [ $? -ne 0 ]; then
    echo "✅ 提交完成"
else
    echo "ℹ️  没有新的变更需要提交"
fi

echo ""
echo "============================================================"
echo "✅ 准备就绪！"
echo "============================================================"
echo ""
echo "请选择部署方式："
echo ""
echo "📌 方法一：通过 GitHub + Vercel（推荐）"
echo "   1. 推送到 GitHub："
echo "      git remote add origin https://github.com/你的用户名/ai-tools-hub.git"
echo "      git push -u origin main"
echo ""
echo "   2. 访问 https://vercel.com/new"
echo "   3. 导入 GitHub 仓库"
echo "   4. 点击 Deploy"
echo ""
echo "📌 方法二：使用 Vercel CLI"
echo "   1. 安装 Vercel CLI:"
echo "      npm install -g vercel"
echo ""
echo "   2. 登录 Vercel:"
echo "      vercel login"
echo ""
echo "   3. 部署:"
echo "      vercel"
echo ""
echo "📌 方法三：上传文件夹"
echo "   访问 https://vercel.com/new"
echo "   拖拽 ai-tools-nav 文件夹上传"
echo ""
echo "📖 详细部署指南："
echo "   查看 DEPLOY.md 文件"
echo ""
echo "============================================================"
