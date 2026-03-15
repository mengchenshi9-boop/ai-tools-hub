#!/usr/bin/env node
/**
 * AI工具自动采集脚本 - 方案2实现
 * 使用方法: node collector.js
 * 
 * 功能：
 * 1. 读取现有的工具列表
 * 2. 模拟/采集新工具数据
 * 3. 去重并合并
 * 4. 生成更新后的 index.html
 */

const fs = require('fs');
const path = require('path');

// 模拟数据源 - 热门AI工具（实际部署时会替换为真实API）
const MOCK_NEW_TOOLS = [
    {
        name: "AutoGPT",
        desc: "自主运行的AI代理，能够自动分解任务并执行，无需人工干预。适合自动化工作流程。",
        category: "productivity",
        price: "free",
        url: "https://autogpt.net",
        rating: "4.6",
        domain: "autogpt.net",
        source: "Product Hunt",
        hot: true,
        features: ["自主任务分解", "无需人工干预", "自动化工作流"]
    },
    {
        name: "Sunshine AI",
        desc: "AI情绪陪伴助手，提供心理健康支持和情感交流，24小时在线陪伴。",
        category: "chat",
        price: "free",
        url: "https://sunshine.ai",
        rating: "4.4",
        domain: "sunshine.ai",
        source: "TAAFT",
        features: ["情绪支持", "情感交流", "24小时在线"]
    },
    {
        name: "Replicate",
        desc: "机器学习模型运行平台，可以运行和微调各种开源AI模型，支持API调用。",
        category: "code",
        price: "paid",
        url: "https://replicate.com",
        rating: "4.7",
        domain: "replicate.com",
        source: "GitHub",
        hot: true,
        features: ["模型运行", "微调", "API调用"]
    },
    {
        name: "Character.AI",
        desc: "与AI角色对话，创建自己的AI角色，支持多种 personality 和场景。",
        category: "chat",
        price: "free",
        url: "https://character.ai",
        rating: "4.5",
        domain: "character.ai",
        source: "Product Hunt",
        features: ["角色对话", "创建AI角色", "多种场景"]
    },
    {
        name: "Playground AI",
        desc: "免费AI图像生成工具，支持多种模型，包括Stable Diffusion和DALL-E。",
        category: "image",
        price: "free",
        url: "https://playgroundai.com",
        rating: "4.6",
        domain: "playgroundai.com",
        source: "Futurepedia",
        features: ["多模型支持", "SD+DALL-E", "免费使用"]
    },
    {
        name: "Hugging Face",
        desc: "AI模型社区，托管数万个开源模型，支持在线试用和下载部署。",
        category: "code",
        price: "free",
        url: "https://huggingface.co",
        rating: "4.8",
        domain: "huggingface.co",
        source: "GitHub",
        hot: true,
        features: ["模型社区", "在线试用", "下载部署"]
    },
    {
        name: "Midjourney Discord",
        desc: "通过Discord使用的AI图像生成工具，社区活跃，每月发布新功能。",
        category: "image",
        price: "paid",
        url: "https://midjourney.com",
        rating: "4.9",
        domain: "midjourney.com",
        source: "Product Hunt",
        features: ["Discord集成", "社区活跃", "持续更新"]
    },
    {
        name: "Perplexity AI",
        desc: "AI搜索引擎，提供准确的答案和引用来源，适合学习和研究。",
        category: "productivity",
        price: "free",
        url: "https://perplexity.ai",
        rating: "4.7",
        domain: "perplexity.ai",
        source: "TAAFT",
        features: ["引用来源", "准确答案", "研究工具"]
    },
    {
        name: "Jasper AI",
        desc: "AI营销文案生成工具，适合广告和社交媒体内容，支持品牌语调自定义。",
        category: "writing",
        price: "paid",
        url: "https://jasper.ai",
        rating: "4.5",
        domain: "jasper.ai",
        source: "Futurepedia",
        features: ["营销文案", "品牌语调", "广告生成"]
    },
    {
        name: "RunwayML",
        desc: "AI视频生成和编辑工具，支持文字生成视频、图片生成视频，专业级质量。",
        category: "video",
        price: "paid",
        url: "https://runwayml.com",
        rating: "4.8",
        domain: "runwayml.com",
        source: "Product Hunt",
        features: ["文字生成视频", "图片生成视频", "专业级"]
    },
    {
        name: "Grammarly",
        desc: "AI语法检查和写作优化工具，支持多种英语变体，适合英语写作。",
        category: "writing",
        price: "free",
        url: "https://grammarly.com",
        rating: "4.7",
        domain: "grammarly.com",
        source: "Futurepedia",
        features: ["语法检查", "写作优化", "多种英语"]
    },
    {
        name: "Otter.ai",
        desc: "AI语音转文字工具，自动转录会议记录，支持多语言识别。",
        category: "audio",
        price: "free",
        url: "https://otter.ai",
        rating: "4.6",
        domain: "otter.ai",
        source: "TAAFT",
        features: ["语音转文字", "会议记录", "多语言"]
    },
    {
        name: "Canva AI",
        desc: "AI设计工具，支持一键生成海报、logo、社交媒体图片，适合非设计师。",
        category: "design",
        price: "free",
        url: "https://canva.com",
        rating: "4.7",
        domain: "canva.com",
        source: "Product Hunt",
        features: ["海报生成", "logo设计", "社交媒体"]
    },
    {
        name: "Figma AI",
        desc: "AI辅助设计协作工具，支持自动布局和配色建议，适合团队协作。",
        category: "design",
        price: "free",
        url: "https://figma.com",
        rating: "4.8",
        domain: "figma.com",
        source: "GitHub",
        features: ["设计协作", "自动布局", "配色建议"]
    },
    {
        name: "Claude Code",
        desc: "Anthropic的代码助手，擅长长文本处理和代码重构，适合大型项目开发。",
        category: "code",
        price: "paid",
        url: "https://www.anthropic.com",
        rating: "4.6",
        domain: "anthropic.com",
        source: "Product Hunt",
        features: ["长文本处理", "代码重构", "项目开发"]
    },
    {
        name: "GitHub Copilot",
        desc: "GitHub的AI代码补全工具，集成在IDE中，实时建议代码，支持多语言。",
        category: "code",
        price: "paid",
        url: "https://github.com/features/copilot",
        rating: "4.8",
        domain: "github.com",
        source: "GitHub",
        features: ["代码补全", "IDE集成", "多语言"]
    }
];

// 读取现有的工具列表
function loadExistingTools() {
    const indexPath = path.join(__dirname, 'index.html');
    const content = fs.readFileSync(indexPath, 'utf-8');
    
    // 提取 tools 数组
    const match = content.match(/const tools = \[([\s\S]*?)\];/);
    if (!match) {
        console.error('❌ 无法找到工具列表');
        return [];
    }
    
    // 使用 eval 安全地解析数组（仅用于本地文件）
    try {
        const toolsStr = match[0].replace('const tools = ', '');
        // 这是一个简化的解析，实际可能需要更复杂的处理
        return [];
    } catch (e) {
        console.error('❌ 解析工具列表失败:', e.message);
        return [];
    }
}

// 从 index.html 提取工具数据
function extractToolsFromHTML() {
    const indexPath = path.join(__dirname, 'index.html');
    let content = fs.readFileSync(indexPath, 'utf-8');
    
    // 提取 tools 数组的开始和结束位置
    const startMarker = 'const tools = [';
    const endMarker = '];';
    
    const startIdx = content.indexOf(startMarker);
    if (startIdx === -1) {
        console.error('❌ 无法找到工具数组');
        return { tools: [], before: '', after: '' };
    }
    
    // 找到对应的结束位置
    let bracketCount = 0;
    let endIdx = startIdx + startMarker.length;
    
    for (let i = endIdx; i < content.length; i++) {
        if (content[i] === '[') bracketCount++;
        if (content[i] === ']') {
            if (bracketCount === 0) {
                endIdx = i + 1;
                break;
            }
            bracketCount--;
        }
    }
    
    const before = content.substring(0, startIdx);
    const toolsStr = content.substring(startIdx, endIdx);
    const after = content.substring(endIdx);
    
    return { before, toolsStr, after };
}

// 模拟采集（实际部署时会调用真实API）
async function collectNewTools() {
    console.log('🚀 开始采集新工具...\n');
    
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 随机选择 3-5 个新工具（模拟每天发现的新工具）
    const count = Math.floor(Math.random() * 3) + 3;
    const shuffled = [...MOCK_NEW_TOOLS].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);
    
    console.log(`✅ 采集完成！发现 ${selected.length} 个新工具:\n`);
    selected.forEach((tool, i) => {
        console.log(`  ${i + 1}. ${tool.name} (${tool.source})`);
        console.log(`     分类: ${tool.category} | 价格: ${tool.price} | 评分: ${tool.rating}`);
    });
    
    return selected;
}

// 检查工具是否已存在
function isToolExists(existingTools, newTool) {
    // 从工具字符串中提取名称进行比较
    const namePattern = /name:\s*"([^"]+)"/;
    const existingNames = existingTools.match(new RegExp(namePattern, 'g')) || [];
    
    return existingNames.some(nameStr => {
        const match = nameStr.match(/name:\s*"([^"]+)"/);
        return match && match[1].toLowerCase() === newTool.name.toLowerCase();
    });
}

// 生成工具对象字符串
function generateToolString(tool) {
    const features = tool.features ? `, features: [${tool.features.map(f => `"${f}"`).join(', ')}]` : '';
    const hot = tool.hot ? ', hot: true' : '';
    const newFlag = tool.new ? ', new: true' : '';
    
    return `            { name: "${tool.name}", desc: "${tool.desc}", category: "${tool.category}", price: "${tool.price}", url: "${tool.url}", rating: "${tool.rating}", domain: "${tool.domain}"${features}${hot}${newFlag} }`;
}

// 主函数
async function main() {
    console.log('='.repeat(60));
    console.log('🤖 海梦的AI工具宝库 - 自动采集系统');
    console.log('='.repeat(60));
    console.log();
    
    // 1. 读取现有工具
    console.log('📖 读取现有工具列表...');
    const { before, toolsStr, after } = extractToolsFromHTML();
    
    if (!toolsStr) {
        console.error('❌ 读取失败，退出');
        process.exit(1);
    }
    
    // 统计现有工具数量
    const existingCount = (toolsStr.match(/name:\s*"/g) || []).length;
    console.log(`✅ 现有工具: ${existingCount} 个\n`);
    
    // 2. 采集新工具
    const newTools = await collectNewTools();
    
    if (newTools.length === 0) {
        console.log('📭 没有发现新工具，退出');
        return;
    }
    
    // 3. 去重检查
    console.log('\n🔍 检查重复...');
    const uniqueTools = [];
    let duplicateCount = 0;
    
    for (const tool of newTools) {
        if (isToolExists(toolsStr, tool)) {
            console.log(`  ⚠️  已存在: ${tool.name}`);
            duplicateCount++;
        } else {
            uniqueTools.push(tool);
        }
    }
    
    if (uniqueTools.length === 0) {
        console.log('\n✅ 所有工具都已存在，无需更新');
        return;
    }
    
    console.log(`\n✅ 发现 ${uniqueTools.length} 个新工具，${duplicateCount} 个重复\n`);
    
    // 4. 生成新的工具列表
    console.log('📝 生成更新后的工具列表...');
    const newToolsStr = uniqueTools.map(generateToolString).join(',\n');
    
    // 在最后一个工具之前插入新工具
    const insertPosition = toolsStr.lastIndexOf('}') + 1;
    const updatedToolsStr = 
        toolsStr.slice(0, insertPosition) + 
        ',\n' + newToolsStr + 
        toolsStr.slice(insertPosition);
    
    // 5. 保存更新
    console.log('💾 保存到 index.html...');
    const newContent = before + updatedToolsStr + after;
    
    // 备份原文件
    const backupPath = path.join(__dirname, 'index.html.backup');
    fs.copyFileSync(path.join(__dirname, 'index.html'), backupPath);
    console.log(`  📦 已备份到: index.html.backup`);
    
    // 写入新文件
    fs.writeFileSync(path.join(__dirname, 'index.html'), newContent, 'utf-8');
    
    // 6. 生成报告
    const totalCount = existingCount + uniqueTools.length;
    console.log('\n' + '='.repeat(60));
    console.log('📊 采集报告');
    console.log('='.repeat(60));
    console.log(`  原有工具: ${existingCount} 个`);
    console.log(`  新增工具: ${uniqueTools.length} 个`);
    console.log(`  重复工具: ${duplicateCount} 个`);
    console.log(`  现在总计: ${totalCount} 个`);
    console.log('='.repeat(60));
    
    console.log('\n✨ 新增工具列表:');
    uniqueTools.forEach((tool, i) => {
        console.log(`  ${i + 1}. ${tool.name} - ${tool.desc.substring(0, 40)}...`);
    });
    
    console.log('\n🎉 采集完成！请刷新网页查看更新。');
    console.log('📝 如需回滚，请使用备份文件: index.html.backup');
}

// 运行
main().catch(console.error);
