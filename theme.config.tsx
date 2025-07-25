import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <>
      <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3753" width="24" height="24">
        <path fill="currentColor" p-id="3754" d="M900.928 430.72a220.608 220.608 0 0 0-19.456-183.36 229.952 229.952 0 0 0-246.4-108.288A227.648 227.648 0 0 0 464.448 64a228.544 228.544 0 0 0-218.24 156.288 226.176 226.176 0 0 0-151.296 108.288 223.488 223.488 0 0 0 28.16 264.704 220.608 220.608 0 0 0 19.392 183.36 229.952 229.952 0 0 0 246.4 108.288A227.52 227.52 0 0 0 559.616 960a228.608 228.608 0 0 0 218.304-156.416 226.176 226.176 0 0 0 151.296-108.288 223.488 223.488 0 0 0-28.16-264.64l-0.064 0.064z m-341.312 470.72a171.008 171.008 0 0 1-108.928-38.848c1.344-0.768 3.776-2.048 5.312-3.008l180.864-103.04a28.928 28.928 0 0 0 14.848-25.408v-251.52l76.416 43.52a2.624 2.624 0 0 1 1.472 2.112v208.256c-0.128 92.672-76.16 167.744-169.984 167.936zM173.696 634.88l5.376 3.136 180.8 103.04c9.152 5.312 20.48 5.312 29.696 0l220.8-125.76v87.04a2.752 2.752 0 0 1-1.088 2.368l-182.784 104.128c-81.408 46.272-185.408 18.752-232.448-61.44a165.12 165.12 0 0 1-20.352-112.512z m61.248-350.592V496.512c-0.128 10.496 5.568 20.224 14.784 25.408l220.8 125.76-76.48 43.52a2.752 2.752 0 0 1-2.56 0.256L208.64 587.2a166.912 166.912 0 0 1-62.272-229.248c19.904-34.112 51.2-60.16 88.576-73.664zM553.6 376.32l76.416-43.52a2.752 2.752 0 0 1 2.56-0.256l182.848 104.128a166.784 166.784 0 0 1 62.208 229.44c-19.84 33.984-51.2 60.032-88.512 73.6V527.424a28.928 28.928 0 0 0-14.72-25.344L553.472 376.32z m291.392 9.6l-180.8-103.04a29.76 29.76 0 0 0-29.696 0l-220.8 125.824v-87.04c0-0.96 0.448-1.792 1.152-2.368l182.784-104.064c81.408-46.336 185.472-18.752 232.384 61.632 19.84 33.92 27.008 73.6 20.288 112.256a152.512 152.512 0 0 0-5.312-3.2zM372.16 544.384l-76.48-43.52a2.624 2.624 0 0 1-1.472-2.112V290.432c0.064-92.8 76.288-167.872 170.304-167.872a171.52 171.52 0 0 1 108.8 38.912 127.36 127.36 0 0 0-5.376 2.944L387.2 267.52a28.864 28.864 0 0 0-14.848 25.408l-0.128 251.392v0.064z m41.472-88.32L512 400l98.304 56v112L512 624l-98.368-56v-112z"></path>
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 600 }}>
        GPT
      </span>
      <div style={{ marginLeft: '.4em' }}>
        <span style={{ fontWeight: 600 }}>P</span>
        <span style={{ opacity: 0.6 }}>ro</span>
        <span style={{ fontWeight: 600 }}>m</span>
        <span style={{ opacity: 0.6 }}>p</span>
        <span style={{ fontWeight: 600 }}>t</span>
      </div>
    </>
  ),
  i18n: [
    { locale: 'zh', text: '中文' },
  ],
  head: function UseHead() {
    const { title } = useConfig()
    return (
      <>
        <title>{title ? title + ' | GPTPMT' : 'GPTPMT'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={title ? title + ' | GPTPMT' : 'GPTPMT'} />
        <meta name="baidu-site-verification" content="codeva-HYkljzisrI" />
        <meta name="msvalidate.01" content="8CC7334366FD7EDEF9575DB293A02096" />
        <meta
          name="og:title"
          content={title ? title + ' | GPTPMT' : 'GPTPMT'}
        />
        <link rel="icon" href="/chatgpt-light.svg" type="image/svg+xml" />

        <link
          rel="icon"
          href="/chatgpt-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  project: {
    link: 'https://github.com/CarGod/gptpmt',
  },
  navbar: {
    extraContent: (
      <a
        href="/gpt-to-image"
        style={{
          marginLeft: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          borderRadius: '0.375rem',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#0051cc'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#0070f3'
        }}
      >
        📸 GPT to Image
      </a>
    )
  },
  docsRepositoryBase: 'https://github.com/CarGod/gptpmt',
  footer: {
    text: 'Copyright © 2023 Luffy Liu',
  },
  search: {
    placeholder: 'Search documentation...',
  }
}

export default config
