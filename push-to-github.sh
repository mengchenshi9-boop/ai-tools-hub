#!/bin/bash

# 🚀 推送代码到 GitHub - 2026-03-18 作业

echo "============================================================"
echo "📤 推送 ai-tools-hub 到 GitHub"
echo "============================================================"
echo ""

cd /workspace/projects/workspace/ai-tools-nav

echo "📦 查看当前状态..."
git status

echo ""
echo "📊 查看未推送的提交..."
git log origin/main..HEAD --oneline 2>/dev/null || git log HEAD --oneline -3

echo ""
echo "🔑 检查 Git 配置..."
git config user.name
git config user.email
git remote get-url origin

echo ""
echo "============================================================"
echo "⚠️  注意：需要 GitHub 认证"
echo "============================================================"
echo ""
echo "推送时会提示输入："
echo "  - Username: 你的 GitHub 用户名"
echo "  - Password: GitHub Personal Access Token (不是密码)"
echo ""
echo "📖 如何创建 Token："
echo "  1. 访问 https://github.com/settings/tokens"
echo "  2. 点击 'Generate new token' → 'Generate new token (classic)'"
echo "  3. 勾选 repo 权限"
echo "  4. 生成并复制 token（只显示一次）"
echo ""
echo "============================================================"
echo "开始推送..."
echo "============================================================"
echo ""

git push origin main

echo ""
echo "============================================================"
if [ $? -eq 0 ]; then
    echo "✅ 推送成功！"
    echo ""
    echo "⏳ GitHub Actions 将自动触发 Vercel 部署"
    echo "   大约需要 1-2 分钟"
    echo ""
    echo "🌐 部署完成后访问："
    echo "   https://ai-tools-hub.vercel.app"
    echo ""
    echo "📊 查看部署状态："
    echo "   https://github.com/mengchenshi9-boop/ai-tools-hub/actions"
else
    echo "❌ 推送失败"
    echo ""
    echo "💡 可能的原因："
    echo "  - Token 过期或无效"
    echo "  - 网络问题"
    echo "  - 权限不足"
    echo ""
    echo "📖 请检查："
    echo "  - Token 是否正确粘贴"
    echo "  - 是否勾选了 repo 权限"
    echo "  - Token 是否已过期"
fi
echo "============================================================"
