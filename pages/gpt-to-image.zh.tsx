import React from 'react';
import { GptToImageConverter } from '../components/gpt-to-image-converter';

export default function GptToImagePage() {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* 顶部导航栏 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        padding: '1rem 0',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a 
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#1a1a1a',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0070f3'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#1a1a1a'
            }}
          >
            <svg 
              viewBox="0 0 1024 1024" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24"
              style={{ marginRight: '0.5rem' }}
            >
              <path 
                fill="currentColor" 
                d="M900.928 430.72a220.608 220.608 0 0 0-19.456-183.36 229.952 229.952 0 0 0-246.4-108.288A227.648 227.648 0 0 0 464.448 64a228.544 228.544 0 0 0-218.24 156.288 226.176 226.176 0 0 0-151.296 108.288 223.488 223.488 0 0 0 28.16 264.704 220.608 220.608 0 0 0 19.392 183.36 229.952 229.952 0 0 0 246.4 108.288A227.52 227.52 0 0 0 559.616 960a228.608 228.608 0 0 0 218.304-156.416 226.176 226.176 0 0 0 151.296-108.288 223.488 223.488 0 0 0-28.16-264.64l-0.064 0.064z m-341.312 470.72a171.008 171.008 0 0 1-108.928-38.848c1.344-0.768 3.776-2.048 5.312-3.008l180.864-103.04a28.928 28.928 0 0 0 14.848-25.408v-251.52l76.416 43.52a2.624 2.624 0 0 1 1.472 2.112v208.256c-0.128 92.672-76.16 167.744-169.984 167.936zM173.696 634.88l5.376 3.136 180.8 103.04c9.152 5.312 20.48 5.312 29.696 0l220.8-125.76v87.04a2.752 2.752 0 0 1-1.088 2.368l-182.784 104.128c-81.408 46.272-185.408 18.752-232.448-61.44a165.12 165.12 0 0 1-20.352-112.512z m61.248-350.592V496.512c-0.128 10.496 5.568 20.224 14.784 25.408l220.8 125.76-76.48 43.52a2.752 2.752 0 0 1-2.56 0.256L208.64 587.2a166.912 166.912 0 0 1-62.272-229.248c19.904-34.112 51.2-60.16 88.576-73.664zM553.6 376.32l76.416-43.52a2.752 2.752 0 0 1 2.56-0.256l182.848 104.128a166.784 166.784 0 0 1 62.208 229.44c-19.84 33.984-51.2 60.032-88.512 73.6V527.424a28.928 28.928 0 0 0-14.72-25.344L553.472 376.32z m291.392 9.6l-180.8-103.04a29.76 29.76 0 0 0-29.696 0l-220.8 125.824v-87.04c0-0.96 0.448-1.792 1.152-2.368l182.784-104.064c81.408-46.336 185.472-18.752 232.384 61.632 19.84 33.92 27.008 73.6 20.288 112.256a152.512 152.512 0 0 0-5.312-3.2zM372.16 544.384l-76.48-43.52a2.624 2.624 0 0 1-1.472-2.112V290.432c0.064-92.8 76.288-167.872 170.304-167.872a171.52 171.52 0 0 1 108.8 38.912 127.36 127.36 0 0 0-5.376 2.944L387.2 267.52a28.864 28.864 0 0 0-14.848 25.408l-0.128 251.392v0.064z m41.472-88.32L512 400l98.304 56v112L512 624l-98.368-56v-112z"
              />
            </svg>
            GPT Prompt
          </a>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              backgroundColor: '#f8f9fa',
              color: '#666',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500',
              transition: 'all 0.2s',
              border: '1px solid #e1e5e9'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#e9ecef'
              e.currentTarget.style.color = '#495057'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8f9fa'
              e.currentTarget.style.color = '#666'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>←</span>
            返回首页
          </a>
        </div>
      </div>


      
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        📸 GPT to Image 转换器
      </h1>
      
      <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#666' }}>
        将你的 GPT 输出的 Markdown 内容轻松转换为美观的图片！
      </p>

      <GptToImageConverter />

      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          使用说明
        </h2>
        
        <ol style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>粘贴内容</strong>：将 GPT 生成的 Markdown 格式内容粘贴到左侧文本框中
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>实时预览</strong>：右侧会实时显示渲染后的效果
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>自定义样式</strong>：可以选择不同的主题和字体大小
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>导出图片</strong>：点击"导出为图片"按钮，将内容保存为 PNG 图片
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>复制分享</strong>：点击"复制到剪切板"按钮，直接复制图片用于分享
          </li>
        </ol>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          支持的 Markdown 语法
        </h2>
        
        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.25rem' }}><strong>标题</strong>：# ## ### 等各级标题</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>粗体</strong>：**粗体文本**</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>斜体</strong>：*斜体文本*</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>代码块</strong>：```语言 代码 ```</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>行内代码</strong>：`代码`</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>列表</strong>：有序和无序列表</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>链接</strong>：[链接文本](URL)</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>图片</strong>：![图片](URL)</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>表格</strong>：Markdown 表格语法</li>
          <li style={{ marginBottom: '0.25rem' }}><strong>引用</strong>：{'>'} 引用文本</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          应用场景
        </h2>
        
        <ul style={{ marginBottom: '2rem', paddingLeft: '1.5rem' }}>
          <li style={{ marginBottom: '0.25rem' }}>📱 社交媒体分享</li>
          <li style={{ marginBottom: '0.25rem' }}>📖 制作学习笔记卡片</li>
          <li style={{ marginBottom: '0.25rem' }}>💼 工作汇报和展示</li>
          <li style={{ marginBottom: '0.25rem' }}>📝 博客文章配图</li>
          <li style={{ marginBottom: '0.25rem' }}>🎨 创意内容设计</li>
        </ul>

        <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #e5e5e5' }} />
        
        <p style={{ fontStyle: 'italic', textAlign: 'center', color: '#666' }}>
          让你的 GPT 输出更具视觉冲击力！
        </p>
      </div>
    </div>
  );
}
