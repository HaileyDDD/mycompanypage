import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="text-4xl text-blue-600 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-blue-600 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
)

export default function Home() {
  const features = [
    {
      icon: '🌐',
      title: '跨境电商解决方案',
      description: '助力企业高效拓展全球市场，提供全方位电商平台策略'
    },
    {
      icon: '🤖',
      title: 'AI内容生成',
      description: '利用人工智能技术，智能生成营销内容和产品描述'
    },
    {
      icon: '📊',
      title: '数据智能分析',
      description: '提供深入的市场洞察和数据驱动的商业决策支持'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>杭州云数联算科技 - 跨境电商与AI创新</title>
        <meta name="description" content="专注于跨境电商和AIGC人工智能应用的创新科技公司" />
      </Head>

      <Header />

      <main>
        {/* 首屏banner */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              赋能企业数字化转型，驱动全球商业创新
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              云数联算科技致力于为中小企业提供先进的跨境电商和人工智能解决方案，
              帮助企业在全球数字经济中实现高效增长
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

        {/* 核心服务 */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            我们的核心服务
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </section>

        {/* 技术优势 */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
              我们的技术优势
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  创新驱动的技术研发
                </h3>
                <p className="text-gray-700 mb-6">
                  我们拥有行业领先的技术研发团队，持续投入AI和大数据技术创新，
                  为企业提供前沿的数字化解决方案。
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ 自主研发的AI内容生成技术</li>
                  <li>✓ 先进的跨境电商运营算法</li>
                  <li>✓ 精准的市场洞察与预测模型</li>
                </ul>
              </div>
              <div className="flex justify-center">
                <Image 
                  src="/images/tech-illustration.svg" 
                  alt="技术创新" 
                  width={500} 
                  height={300} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 行业案例 */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            成功案例
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: '电子商务平台', 
                description: '帮助中小卖家实现跨境销售增长50%',
                icon: '🛒'
              },
              { 
                title: '制造业企业', 
                description: 'AI智能营销提升品牌曝光率和转化率',
                icon: '🏭'
              },
              { 
                title: '零售品牌', 
                description: '数据分析驱动精准营销策略',
                icon: '🛍️'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-blue-600 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 