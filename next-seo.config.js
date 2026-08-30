export default {
  titleTemplate: '%s | GPTPMT',
  defaultTitle: 'GPTPMT — 免费中文提示工程指南',
  description: '免费中文提示工程指南，系统讲解 Token、任务表达、结构化 Prompt、JSON 输出与复杂任务验证。',
  openGraph: {
    type: 'website',
    url: 'https://gptpmt.com/',
    locale: 'zh_CN',
    siteName: 'GPTPMT',
    images: [{
      url: 'https://gptpmt.com/logo.png',
      alt: 'GPTPMT 中文提示工程指南',
    }],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    { name: 'author', content: 'Luffy Liu' },
  ],
}
