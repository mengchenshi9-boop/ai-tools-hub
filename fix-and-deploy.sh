#!/bin/bash

# 🚀 修复 404 错误并重新部署

echo "============================================================"
echo "🐛 修复 Vercel 404 错误"
echo "============================================================"
echo ""

cd /workspace/projects/workspace/ai-tools-nav

echo "📦 添加修改..."
git add vercel.json

echo "💾 提交..."
git commit -m "🐛 修复 404 错误 - 简化 Vercel 配置"

echo "📤 推送到 GitHub..."
git push origin main

echo ""
echo "============================================================"
echo "✅ 推送成功！"
echo "============================================================"
echo ""
echo "⏳ 等待 GitHub Actions 自动部署..."
echo "   大约需要 1-2 分钟"
echo ""
echo "🌐 部署完成后访问："
echo "   https://ai-tools-hub.vercel.app"
echo ""
echo "📊 查看部署状态："
echo "   https://github.com/mengchenshi9-boop/ai-tools-hub/actions"
echo ""
