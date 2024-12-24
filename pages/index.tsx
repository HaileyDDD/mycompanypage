import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

const partnerLogos = [
  {
    name: "阿里巴巴",
    logo: "/images/partners/alibaba.svg",
    link: "https://www.alibaba.com"
  },
  {
    name: "亚马逊",
    logo: "/images/partners/amazon.svg",
    link: "https://www.amazon.com"
  },
  {
    name: "腾讯",
    logo: "/images/partners/tencent.svg",
    link: "https://www.tencent.com"
  },
  {
    name: "字节跳动",
    logo: "/images/partners/bytedance.svg",
    link: "https://www.bytedance.com"
  },
  {
    name: "华为",
    logo: "/images/partners/huawei.svg",
    link: "https://www.huawei.com"
  }
]

const Home: NextPage = () => {
  // 客户案例数据
  const customerCases = [
    {
      name: "跨境电商品牌A",
      challenge: "国际市场拓展困难",
      solution: "AI营销策略+多语言内容",
      impact: "销售额增长45%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 text-blue-600">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="6" />
          <path d="M25,50 Q50,30 75,50 T125,50" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      name: "科技产品公司B",
      challenge: "内容本地化效率低",
      solution: "AIGC多语言内容生成",
      impact: "内容制作效率提升60%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 text-blue-600">
          <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="6" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="4" />
        </svg>
      )
    },
    {
      name: "电商平台C",
      challenge: "数据分析复杂",
      solution: "智能商业分析系统",
      impact: "决策准确率提高35%",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-16 h-16 text-blue-600">
          <path d="M10,90 L40,50 L70,75 L90,20" fill="none" stroke="currentColor" strokeWidth="6" />
        </svg>
      )
    }
  ];

  // 合作伙伴 Logo SVG
  const PartnerLogos = () => (
    <div className="flex flex-wrap justify-center items-center space-x-8 space-y-4">
      {partnerLogos.map((partner) => (
        <a 
          key={partner.name} 
          href={partner.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="opacity-70 hover:opacity-100 transition"
        >
          <img 
            src={partner.logo} 
            alt={partner.name} 
            className="w-32 h-16 object-contain"
          />
        </a>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>云数联算科技 - 跨境电商与AI创新</title>
        <meta name="description" content="云数联算科技专业服务，助力企业数字化转型" />
      </Head>

      <Header />

      <main>
        {/* 首屏banner */}
        <section 
          className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20"
          itemScope 
          itemType="https://schema.org/WebPageElement"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 
              className="text-5xl font-bold mb-6"
              itemProp="headline"
            >
              赋能企业数字化转型，引领全球商业智能革命
            </h1>
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              itemProp="description"
            >
              云数联算科技致力于为中小企业提供先进的跨境电商和人工智能解决方案，
              帮助企业在全球数字经济中实现高效增长和技术创新
            </p>
            <div className="space-x-4">
              <Link 
                href="/services" 
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition"
              >
                了解我们的服务
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition"
              >
                联系我们
              </Link>
            </div>
          </div>
        </section>

        {/* 技术优势 */}
        <section 
          className="bg-white py-16"
          itemScope 
          itemType="https://schema.org/TechArticle"
        >
          <div className="container mx-auto px-4">
            <h2 
              className="text-4xl font-bold text-center text-blue-600 mb-12"
              itemProp="headline"
            >
              我们的技术优势
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 
                  className="text-2xl font-bold text-blue-600 mb-6"
                  itemProp="name"
                >
                  创新驱动的技术研发
                </h3>
                <p 
                  className="text-gray-700 mb-8 leading-relaxed"
                  itemProp="description"
                >
                  云数联算科技汇聚国内顶尖AI算法专家和跨境电商专业人才，
                  依托自主可控的核心技术，为企业提供从数据分析、内容生成到
                  精准营销的全链路数字化解决方案。我们致力于用智能技术重塑
                  企业的全球商业竞争力。
                </p>
                <div 
                  className="grid grid-cols-2 gap-6"
                  itemScope 
                  itemType="https://schema.org/ItemList"
                >
                  {[
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ),
                      title: "多语言AI内容",
                      description: "支持20+语言智能创作"
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      ),
                      title: "精准营销算法",
                      description: "机器学习驱动全球化"
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      ),
                      title: "商业智能",
                      description: "大数据驱动决策"
                    },
                    {
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                      ),
                      title: "云原生架构",
                      description: "高可用性与弹性"
                    }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                      itemProp="itemListElement"
                    >
                      <div className="flex items-center mb-4">
                        {item.icon}
                        <h4 className="ml-4 text-lg font-semibold text-blue-600">{item.title}</h4>
                      </div>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 500 300" 
                  width="500" 
                  height="300"
                  className="w-full"
                >
                  <defs>
                    <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor:'#2563eb', stopOpacity:1}} />
                      <stop offset="100%" style={{stopColor:'#3b82f6', stopOpacity:0.7}} />
                    </linearGradient>
                  </defs>
                  
                  {/* 背景 */}
                  <rect width="500" height="300" fill="url(#techGradient)" />
                  
                  {/* 抽象科技元素 */}
                  <circle cx="100" cy="100" r="40" fill="rgba(255,255,255,0.2)" />
                  <circle cx="400" cy="200" r="60" fill="rgba(255,255,255,0.1)" />
                  
                  {/* 网络连接线 */}
                  <path d="M150,100 Q250,150 350,200" stroke="white" strokeWidth="2" fill="none" opacity="0.5" />
                  
                  {/* 数据块 */}
                  <rect x="50" y="200" width="80" height="40" fill="white" opacity="0.3" rx="5" />
                  <rect x="370" y="50" width="60" height="30" fill="white" opacity="0.3" rx="5" />
                  
                  {/* AI和数据符号 */}
                  <text 
                    x="250" 
                    y="150" 
                    fontFamily="Arial" 
                    fontSize="40" 
                    fill="white" 
                    textAnchor="middle" 
                    opacity="0.8"
                  >
                    AI & DATA
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 新增：客户成功案例 */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
              客户成功案例
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {customerCases.map((caseItem, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {caseItem.icon}
                    <h3 className="ml-4 text-xl font-semibold text-blue-600">
                      {caseItem.name}
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <p><strong>挑战：</strong>{caseItem.challenge}</p>
                    <p><strong>解决方案：</strong>{caseItem.solution}</p>
                    <p className="text-green-600 font-bold">
                      业务影响：{caseItem.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 新增：合作伙伴 */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
              值得信赖的合作伙伴
            </h2>
            <PartnerLogos />
          </div>
        </section>

        {/* 新增：最新资讯预览 */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
              最新技术洞察
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "跨境电���AI趋势报告",
                  excerpt: "深度解析人工智能在跨境电商中的创新应用",
                  date: "2023年12月"
                },
                {
                  title: "AIGC内容生成新突破",
                  excerpt: "多语言智能内容生成技术的最新进展",
                  date: "2023年11月"
                },
                {
                  title: "数据驱动的全球化策略",
                  excerpt: "如何利用大数据制定精准的国际市场拓展方案",
                  date: "2023年10月"
                }
              ].map((article, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{article.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{article.date}</span>
                    <Link 
                      href="/blog" 
                      className="text-blue-600 hover:underline"
                    >
                      阅读更多
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
