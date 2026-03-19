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
        name: "Cursor 2.0",
        desc: "新一代AI代码编辑器，支持MCP协议，可深度集成多种AI模型，提供智能代码生成、重构和调试功能，被誉为VS Code的AI升级版。",
        category: "code",
        price: "免费版可用，Pro版$20/月",
        url: "https://cursor.sh",
        rating: "4.9",
        domain: "cursor.sh",
        source: "Product Hunt",
        hot: true,
        new: true,
        features: ["MCP协议支持", "多模型集成", "智能重构"]
    },
    {
        name: "Bolt.new",
        desc: "StackBlitz推出的AI全栈开发平台，一句话即可生成完整Web应用，支持实时预览和部署，零配置开发。",
        category: "code",
        price: "免费版可用",
        url: "https://bolt.new",
        rating: "4.8",
        domain: "bolt.new",
        source: "Product Hunt",
        hot: true,
        new: true,
        features: ["全栈生成", "实时预览", "一键部署"]
    },
    {
        name: "v0.dev",
        desc: "Vercel推出的AI UI生成工具，通过自然语言描述生成React组件，支持Tailwind CSS，设计系统级组件。",
        category: "code",
        price: "免费",
        url: "https://v0.dev",
        rating: "4.8",
        domain: "v0.dev",
        source: "GitHub",
        hot: true,
        new: true,
        features: ["UI生成", "React组件", "Tailwind CSS"]
    },
    {
        name: "Lovable",
        desc: "AI全栈开发平台，可以快速构建和部署完整的Web应用，支持Next.js和Supabase，5分钟内上线产品。",
        category: "code",
        price: "免费版可用",
        url: "https://lovable.dev",
        rating: "4.7",
        domain: "lovable.dev",
        source: "Product Hunt",
        hot: true,
        new: true,
        features: ["全栈开发", "快速部署", "Next.js支持"]
    },
    {
        name: "Suno v4",
        desc: "2025年推出的AI音乐生成模型，支持多语言歌词创作，音乐质量大幅提升，可生成专业级歌曲。",
        category: "audio",
        price: "免费版可用，Pro版$10/月",
        url: "https://suno.com",
        rating: "4.8",
        domain: "suno.com",
        source: "Product Hunt",
        hot: true,
        new: true,
        features: ["多语言歌词", "专业级音质", "快速生成"]
    },
    {
        name: "Udio v2",
        desc: "AI音乐创作平台，支持多种音乐风格，可以生成完整的歌曲，包括歌词、旋律和编曲。",
        category: "audio",
        price: "免费版可用",
        url: "https://www.udio.com",
        rating: "4.7",
        domain: "udio.com",
        source: "TAAFT",
        new: true,
        features: ["多种风格", "完整歌曲", "智能编曲"]
    },
    {
        name: "OpenAI o1",
        desc: "OpenAI推出的推理模型，擅长复杂问题解决，支持链式思维，在数学和编程任务上表现出色。",
        category: "productivity",
        price: "按Token计费",
        url: "https://openai.com/o1",
        rating: "4.9",
        domain: "openai.com",
        source: "OpenAI",
        hot: true,
        new: true,
        features: ["复杂推理", "链式思维", "数学编程"]
    },
    {
        name: "Claude 4.0",
        desc: "Anthropic推出的最新Claude模型，支持200万Token上下文，具备更强的多模态能力和推理能力。",
        category: "productivity",
        price: "按Token计费",
        url: "https://www.anthropic.com/claude",
        rating: "4.9",
        domain: "anthropic.com",
        source: "Anthropic",
        hot: true,
        new: true,
        features: ["200万上下文", "多模态", "强推理"]
    },
    {
        name: "Supabase AI",
        desc: "Supabase的AI助手，支持自然语言生成SQL查询、数据库优化和API设计，让开发更高效。",
        category: "code",
        price: "免费",
        url: "https://supabase.com/ai",
        rating: "4.7",
        domain: "supabase.com",
        source: "GitHub",
        new: true,
        features: ["SQL生成", "数据库优化", "API设计"]
    },
    {
        name: "Linear AI",
        desc: "项目管理工具Linear的AI助手，支持智能任务分配、进度预测和优先级排序，提升团队效率。",
        category: "productivity",
        price: "付费",
        url: "https://linear.app/ai",
        rating: "4.8",
        domain: "linear.app",
        source: "Product Hunt",
        new: true,
        features: ["任务分配", "进度预测", "优先级排序"]
    },
    {
        name: "Stable Diffusion 3",
        desc: "Stability AI推出的新一代图像生成模型，支持更高分辨率和更精细的细节，文字生成能力大幅提升。",
        category: "image",
        price: "免费开源",
        url: "https://stability.ai",
        rating: "4.8",
        domain: "stability.ai",
        source: "GitHub",
        hot: true,
        new: true,
        features: ["高分辨率", "精细细节", "文字生成"]
    },
    {
        name: "Midjourney v7",
        desc: "Midjourney最新版本，支持更自然的风格、更好的提示词理解和更快的生成速度。",
        category: "image",
        price: "$10-120/月",
        url: "https://midjourney.com",
        rating: "4.9",
        domain: "midjourney.com",
        source: "Product Hunt",
        hot: true,
        new: true,
        features: ["自然风格", "提示词理解", "快速生成"]
    },
    {
        name: "Replit AI 2.0",
        desc: "Replit的AI编程助手升级版，支持多文件编辑、测试生成和代码审查，适合完整项目开发。",
        category: "code",
        price: "免费版可用",
        url: "https://replit.com/ai",
        rating: "4.7",
        domain: "replit.com",
        source: "GitHub",
        new: true,
        features: ["多文件编辑", "测试生成", "代码审查"]
    },
    {
        name: "AutoGPT Next",
        desc: "AutoGPT的升级版本，支持更强大的任务规划和执行能力，可自主完成复杂的工作流程。",
        category: "productivity",
        price: "免费",
        url: "https://autogpt.net",
        rating: "4.7",
        domain: "autogpt.net",
        source: "GitHub",
        new: true,
        features: ["任务规划", "工作流程", "自主执行"]
    },
    {
        name: "Fireworks AI",
        desc: "高性能AI推理平台，提供快速、低成本的模型托管服务，支持自定义模型部署。",
        category: "code",
        price: "按使用计费",
        url: "https://fireworks.ai",
        rating: "4.6",
        domain: "fireworks.ai",
        source: "GitHub",
        new: true,
        features: ["快速推理", "低成本", "自定义部署"]
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
