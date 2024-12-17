import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ServiceCard = ({ title, description, icon, subServices }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="mr-4 text-blue-600">{icon}</div>
      <h3 className="text-xl font-bold text-blue-600">{title}</h3>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    {subServices && (
      <ul className="list-disc list-inside text-gray-600">
        {subServices.map((service, index) => (
          <li key={index} className="mb-2">{service}</li>
        ))}
      </ul>
    )}
  </div>
)

export default function Services() {
  const services = [
    {
      title: '跨境电商平台策略',
      description: '为企业提供全球化电商平台的全面解决方案，助力企业高效拓展国际市场。',
      icon: '🌐',
      subServices: [
        '平台选择与入驻策略',
        '跨境电商运营优化',
        '多平台整合管理',
        '国际物流与支付解决方案'
      ]
    },
    {
      title: 'AIGC内容生成服务',
      description: '利用人工智能技术，为电商平台提供智能化的内容生成和营销解决方案。',
      icon: '🤖',
      subServices: [
        '智能产品描述生成',
        'AI营销文案创作',
        '视觉内容智能生成',
        '多语言本地化内容服务'
      ]
    },
    {
      title: '数据分析与商业智能',
      description: '运用大数据和AI技术，为企业提供深入的市场洞察和数据驱动的决策支持。',
      icon: '📊',
      subServices: [
        '市场趋势分析',
        '消费者行为洞察',
        '销售预测与推荐',
        '竞争对手分析'
      ]
    },
    {
      title: '定制化技术解决方案',
      description: '根据企业特定需求，提供个性化的技术开发和系统集成服务。',
      icon: '🛠️',
      subServices: [
        '电商系统定制开发',
        '企业级AI应用集成',
        '数据中台建设',
        '智能客服系统'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>服务 - 杭州云数联算科技</title>
        <meta name="description" content="云数联算科技专业服务，助力企业数字化转型" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">我们的服务</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            云数联算科技致力于为企业提供全面的跨境电商和人工智能解决方案，
            通过创新技术和专业服务，帮助企业在全球数字经济中实现高效增长。
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description}
              icon={service.icon}
              subServices={service.subServices}
            />
          ))}
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-blue-600 mb-6">为什么选择我们</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">专业团队</h3>
              <p>拥有丰富行业经验的专家团队，为您提供高质量服务</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">技术创新</h3>
              <p>持续投入研发，始终站在技术创新的前沿</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">定制解决方案</h3>
              <p>根据企业个性化需求，提供精准的定制化服务</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 