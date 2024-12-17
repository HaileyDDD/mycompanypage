import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="zh-CN">
        <Head>
          {/* SEO基础配置 */}
          <meta charSet="utf-8" />
          
          {/* 网站关键词 */}
          <meta name="keywords" content="跨境电商,AI技术,AIGC,人工智能,数据分析,电商解决方案" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.yunshulian.com/" />
          <meta property="og:title" content="杭州云数联算科技 - 跨境电商与AI创新" />
          <meta property="og:description" content="专注于跨境电商和AIGC人工智能应用的创新科技公司" />
          <meta property="og:image" content="/logo.png" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.yunshulian.com/" />
          <meta property="twitter:title" content="杭州云数联算科技 - 跨境电商与AI创新" />
          <meta property="twitter:description" content="专注于跨境电商和AIGC人工智能应用的创新科技公司" />
          <meta property="twitter:image" content="/logo.png" />

          {/* 网站验证 */}
          {/* <meta name="google-site-verification" content="your-verification-code" /> */}
          
          {/* 网站图标 */}
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/logo.png" />

          {/* 网站字体 */}
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet" />
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