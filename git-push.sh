#!/bin/bash

# 🚀 GitHub 推送脚本
# 使用方法：bash git-push.sh

echo "============================================================"
echo "🤖 海梦的AI工具宝库 - 推送到 GitHub"
echo "============================================================"
echo ""

REPO="https://github.com/mengchenshi9-boop/ai-tools-hub.git"

echo "📁 进入项目目录..."
cd /workspace/projects/workspace/ai-tools-nav

echo "🔗 配置远程仓库..."
git remote add origin $REPO 2>/dev/null || git remote set-url origin $REPO

echo "📤 推送到 GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "============================================================"
    echo "✅ 推送成功！"
    echo "============================================================"
    echo ""
    echo "📦 仓库地址："
    echo "   $REPO"
    echo ""
    echo "🚀 下一步："
    echo "   1. 访问 https://vercel.com/new"
    echo "   2. 导入这个仓库"
    echo "   3. 点击 Deploy"
    echo ""
else
    echo ""
    echo "============================================================"
    echo "❌ 推送失败"
    echo "============================================================"
    echo ""
    echo "可能原因："
    echo "  1. 需要 Git 凭名（用户名/密码）"
    echo "  2. 仓库访问权限不足"
    echo "  3. 网络连接问题"
    echo ""
    echo "解决方法："
    echo "  1. 配置 Git 凭名"
    echo "  2. 或使用 SSH 方式："
    echo "     git remote set-url origin git@github.com:mengchenshi9-boop/ai-tools-hub.git"
    echo "     git push -u origin main"
    echo ""
fi
