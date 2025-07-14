import React, { useState, useRef, useCallback } from 'react';
import html2canvas from 'html2canvas';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

interface Theme {
  name: string;
  background: string;
  color: string;
  borderColor: string;
  codeBackground: string;
  codeColor: string;
}

const themes: Theme[] = [
  {
    name: '默认',
    background: '#ffffff',
    color: '#1a1a1a',
    borderColor: '#e1e5e9',
    codeBackground: '#f6f8fa',
    codeColor: '#1a1a1a',
  },
  {
    name: '深色',
    background: '#1a1a1a',
    color: '#ffffff',
    borderColor: '#30363d',
    codeBackground: '#161b22',
    codeColor: '#e6edf3',
  },
  {
    name: '蓝色',
    background: '#f0f9ff',
    color: '#1e40af',
    borderColor: '#60a5fa',
    codeBackground: '#dbeafe',
    codeColor: '#1e40af',
  },
  {
    name: '绿色',
    background: '#f0fdf4',
    color: '#166534',
    borderColor: '#4ade80',
    codeBackground: '#dcfce7',
    codeColor: '#166534',
  },
];

export const GptToImageConverter: React.FC = () => {
  const [markdownText, setMarkdownText] = useState(`# GPT Prompt 使用指南

欢迎使用 **GPT to Image** 转换器！这是一个强大的工具，可以将你的 Markdown 内容转换为美观的图片。

## 主要功能

- ✅ **实时预览**：左侧输入，右侧立即显示效果
- ✅ **多种主题**：支持默认、深色、蓝色、绿色等主题
- ✅ **字体调节**：可自由调整字体大小
- ✅ **一键导出**：高清 PNG 格式图片下载
- ✅ **快速分享**：直接复制图片到剪切板

---

## 使用场景

### 📱 社交媒体
将 GPT 生成的内容制作成精美卡片，分享到朋友圈、微博等平台。

### 📚 学习笔记
把重要知识点转换为图片，方便保存和复习。

### � 工作汇报
将分析结果、建议方案等内容可视化，提升报告质量。

---

## 示例代码

\`\`\`javascript
// 这是一个示例代码块
function generateImage() {
  console.log("正在生成图片...");
  return "图片生成成功！";
}
\`\`\`

> **提示**：你可以在左侧编辑这些内容，右侧会实时显示渲染效果。试试修改文字、添加列表或代码块吧！

---

**开始你的创作之旅吧！** 🚀`);
  
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [isExporting, setIsExporting] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const currentTheme = themes[selectedTheme];

  const handleExport = useCallback(async () => {
    if (!previewRef.current) return;
    
    setIsExporting(true);
    
    try {
      // 等待渲染完成
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: currentTheme.background,
        scale: 2, // 高质量输出
        useCORS: true,
        allowTaint: true,
        logging: false,
        // 简单可靠的配置
        scrollX: 0,
        scrollY: 0,
        // 增加底部边距来避免截断
        height: previewRef.current.scrollHeight + 100,
      });
      
      const link = document.createElement('a');
      link.download = `gpt-to-image-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('导出失败:', error);
      alert('导出失败，请重试');
    } finally {
      setIsExporting(false);
    }
  }, [currentTheme.background]);

  const handleCopyToClipboard = useCallback(async () => {
    if (!previewRef.current) return;
    
    setIsCopying(true);
    
    try {
      // 等待渲染完成
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const canvas = await html2canvas(previewRef.current, {
        backgroundColor: currentTheme.background,
        scale: 2, // 高质量输出
        useCORS: true,
        allowTaint: true,
        logging: false,
        // 简单可靠的配置
        scrollX: 0,
        scrollY: 0,
        // 增加底部边距来避免截断
        height: previewRef.current.scrollHeight + 100,
      });
      
      // 将 canvas 转换为 blob
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({
                'image/png': blob
              })
            ]);
            alert('图片已复制到剪切板！');
          } catch (error) {
            console.error('复制到剪切板失败:', error);
            // 降级方案：创建临时下载链接
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `gpt-to-image-${Date.now()}.png`;
            link.click();
            URL.revokeObjectURL(url);
            alert('无法复制到剪切板，已自动下载图片');
          }
        }
      }, 'image/png', 1.0);
    } catch (error) {
      console.error('生成图片失败:', error);
      alert('生成图片失败，请重试');
    } finally {
      setIsCopying(false);
    }
  }, [currentTheme.background]);

  const renderedHtml = md.render(markdownText);

  const previewStyle: React.CSSProperties = {
    background: currentTheme.background,
    color: currentTheme.color,
    padding: '2rem 2rem 2.5rem 2rem',
    borderRadius: '8px',
    border: `1px solid ${currentTheme.borderColor}`,
    fontSize: `${fontSize}px`,
    lineHeight: 1.6,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    width: '800px',
    margin: '0 auto',
    overflow: 'visible',
    wordWrap: 'break-word',
    wordBreak: 'break-word',
    boxSizing: 'border-box',
  };

  const codeStyle = `
    .preview-content {
      word-wrap: break-word;
      word-break: break-word;
      hyphens: auto;
    }
    .preview-content pre {
      background: ${currentTheme.codeBackground} !important;
      color: ${currentTheme.codeColor} !important;
      padding: 1rem;
      border-radius: 6px;
      overflow-x: auto;
      border: 1px solid ${currentTheme.borderColor};
      white-space: pre-wrap;
    }
    .preview-content code {
      background: ${currentTheme.codeBackground} !important;
      color: ${currentTheme.codeColor} !important;
      padding: 0.125rem 0.25rem;
      border-radius: 3px;
      font-size: 0.875em;
    }
    .preview-content blockquote {
      border-left: 4px solid ${currentTheme.borderColor};
      margin: 1.5rem 0;
      padding-left: 1.5rem;
      opacity: 0.8;
      font-style: italic;
      background: rgba(0,0,0,0.02);
      padding: 1rem 1.5rem;
      border-radius: 4px;
    }
    .preview-content table {
      border-collapse: collapse;
      width: 100%;
      margin: 1rem 0;
    }
    .preview-content th, .preview-content td {
      border: 1px solid ${currentTheme.borderColor};
      padding: 0.75rem;
      text-align: left;
    }
    .preview-content th {
      background: ${currentTheme.codeBackground};
      font-weight: bold;
    }
    .preview-content ul, .preview-content ol {
      margin: 1.5rem 0;
      padding-left: 2rem;
    }
    .preview-content li {
      margin: 0.75rem 0;
      line-height: 1.7;
    }
    .preview-content h1, .preview-content h2, .preview-content h3, 
    .preview-content h4, .preview-content h5, .preview-content h6 {
      margin: 2rem 0 1.25rem 0;
      font-weight: bold;
      line-height: 1.3;
    }
    .preview-content h1 {
      font-size: 2.25em;
      margin-bottom: 1.5rem;
    }
    .preview-content h2 {
      font-size: 1.75em;
      margin-top: 2.5rem;
    }
    .preview-content h3 {
      font-size: 1.4em;
    }
    .preview-content p {
      margin: 1.25rem 0;
      line-height: 1.7;
    }
    .preview-content hr {
      border: none;
      border-top: 2px solid ${currentTheme.borderColor};
      margin: 2.5rem 0;
    }
    .preview-content strong {
      font-weight: 700;
    }
    .preview-content em {
      font-style: italic;
    }
  `;

  return (
    <div style={{ margin: '2rem 0' }}>
      <style dangerouslySetInnerHTML={{ __html: codeStyle }} />
      
      {/* 控制面板 */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: '1rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #e1e5e9'
      }}>
        <div>
          <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>主题:</label>
          <select 
            value={selectedTheme} 
            onChange={(e) => setSelectedTheme(Number(e.target.value))}
            style={{
              padding: '0.25rem 0.5rem',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          >
            {themes.map((theme, index) => (
              <option key={index} value={index}>{theme.name}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>字体大小:</label>
          <input
            type="range"
            min="12"
            max="24"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
            style={{ marginRight: '0.5rem' }}
          />
          <span>{fontSize}px</span>
        </div>
        
        <button
          onClick={handleExport}
          disabled={isExporting}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isExporting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            opacity: isExporting ? 0.6 : 1,
            marginRight: '0.5rem',
          }}
        >
          {isExporting ? '导出中...' : '📸 导出为图片'}
        </button>
        
        <button
          onClick={handleCopyToClipboard}
          disabled={isCopying}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isCopying ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            opacity: isCopying ? 0.6 : 1,
          }}
        >
          {isCopying ? '复制中...' : '📋 复制到剪切板'}
        </button>
      </div>

      {/* 主要内容区域 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2rem',
        minHeight: '500px'
      }}>
        {/* 输入区域 */}
        <div>
          <h3 style={{ marginTop: 0 }}>Markdown 输入</h3>
          <textarea
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
            placeholder="在这里粘贴你的 Markdown 内容..."
            style={{
              width: '100%',
              height: '500px',
              padding: '1rem',
              border: '1px solid #e1e5e9',
              borderRadius: '8px',
              fontFamily: 'Monaco, Consolas, "Courier New", monospace',
              fontSize: '14px',
              resize: 'vertical',
              outline: 'none'
            }}
          />
        </div>

        {/* 预览区域 */}
        <div style={{ overflow: 'auto' }}>
          <h3 style={{ marginTop: 0 }}>实时预览</h3>
          <div
            ref={previewRef}
            className="preview-content"
            style={previewStyle}
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>
      </div>

      {/* 使用提示 */}
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        background: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <strong>💡 使用提示：</strong>
        <ul style={{ margin: '0.5rem 0 0 1rem' }}>
          <li>支持所有标准 Markdown 语法</li>
          <li>导出的图片为高清 PNG 格式</li>
          <li>可以直接复制图片到剪切板，方便分享</li>
          <li>建议调整合适的字体大小以获得最佳效果</li>
          <li>深色主题适合在深色背景上展示</li>
        </ul>
      </div>
    </div>
  );
};
