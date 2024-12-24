import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          {/* 明确指定 UTF-8 编码 */}
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          
          {/* 网站关键词 */}
          <meta name="keywords" content="跨境电商,AI技术,AIGC,人工智能,数据分析,电商解决方案,大数据,机器学习,智能营销,全球电商,内容生成,技术创新" />
          
          {/* 网站描述 */}
          <meta 
            name="description" 
            content="云数联算科技是一家专注于跨境电商和人工智能创新的高新技术企业。我们提供AI内容生成、数据分析、跨境电商解决方案，帮助企业实现全球化数字化转型。" 
          />
          
          {/* 地理和业务范围标签 */}
          <meta name="coverage" content="Worldwide" />
          <meta name="distribution" content="Global" />
          
          {/* 版权和作者信息 */}
          <meta name="copyright" content="杭州云数联算科技有限责任公司" />
          <meta name="author" content="云数联算科技" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yunshulian.com/" />
          <meta property="og:title" content="云数联算科技 - 跨境电商与AI创新解决方案" />
          <meta property="og:description" content="专业的跨境电商和AIGC人工智能技术服务，助力企业全球化数字化转型" />
          <meta property="og:image" content="/logo.png" />
          <meta property="og:locale" content="zh_CN" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.yunshulian.com/" />
          <meta property="twitter:title" content="云数联算科技 - 跨境电商与AI创新解决方案" />
          <meta property="twitter:description" content="专业的跨境电商和AIGC人工智能技术服务，助力企业全球化数字化转型" />
          <meta property="twitter:image" content="/logo.png" />

          {/* 网站验证 */}
          {/* <meta name="google-site-verification" content="your-verification-code" /> */}
          {/* <meta name="baidu-site-verification" content="your-baidu-verification-code" /> */}
          
          {/* 网站图标 */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/logo.png" />

          {/* 网站字体 */}
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet" />
          
          {/* 规范化链接 */}
          <link rel="canonical" href="https://www.yunshulian.com" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument 