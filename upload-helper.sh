#!/bin/bash

# 🚀 一键上传脚本
# 使用方法：在本地终端运行此脚本

echo "============================================================"
echo "📤 海梦的AI工具宝库 - GitHub 上传助手"
echo "============================================================"
echo ""

# 项目路径
PROJECT_DIR="/workspace/projects/workspace/ai-tools-nav"

echo "📁 项目位置: $PROJECT_DIR"
echo "📦 文件数量: $(find $PROJECT_DIR -type f -not -path '*/\.git/*' -not -path '*/node_modules/*' | wc -l) 个"
echo ""

echo "============================================================"
echo "📋 请按以下步骤操作："
echo "============================================================"
echo ""
echo "步骤 1: 打开浏览器访问"
echo "   https://github.com/mengchenshi9-boop/ai-tools-hub"
echo ""
echo "步骤 2: 点击 \"Add file\" → \"Upload files\""
echo ""
echo "步骤 3: 选择以下文件（按住 Ctrl 多选）："
echo ""

# 列出所有要上传的文件
find $PROJECT_DIR -maxdepth 1 -type f -not -name '*.backup' | sort | while read file; do
    filename=$(basename "$file")
    size=$(du -h "$file" | cut -f1)
    echo "   ✅ $filename ($size)"
done

echo ""
echo "步骤 4: 填写提交信息"
echo "   标题: 🎉 部署海梦的AI工具宝库 - 50+ AI工具导航站"
echo ""
echo "   描述:"
echo "   ✨ 功能特性："
echo "   - 50+ 热门AI工具"
echo "   - 智能搜索和筛选"
echo "   - 夜间模式和收藏"
echo "   - 自动采集系统"
echo ""
echo "   📊 分类：聊天、图片、视频、编程、写作、效率、音频、设计、商业"
echo ""
echo "步骤 5: 点击绿色按钮 \"Commit changes\""
echo ""
echo "============================================================"
echo "✅ 上传完成后"
echo "============================================================"
echo ""
echo "访问你的仓库："
echo "   https://github.com/mengchenshi9-boop/ai-tools-hub"
echo ""
echo "然后部署到 Vercel："
echo "   1. 访问 https://vercel.com/new"
echo "   2. 导入 GitHub 仓库"
echo "   3. 点击 Deploy"
echo ""
echo "============================================================"
