import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const TeamSection = ({ title, description, image }) => (
  <div className="bg-white p-8 rounded-lg shadow-md">
    <h3 className="text-2xl font-bold text-blue-600 mb-4">{title}</h3>
    <div className="flex flex-col md:flex-row items-center">
      {image && (
        <div className="md:mr-8 mb-4 md:mb-0 w-full md:w-1/2">
          <Image 
            src={image} 
            alt="团队照片" 
            width={600} 
            height={400} 
            className="rounded-lg object-cover"
            unoptimized
          />
        </div>
      )}
      <div className={`${image ? 'md:w-1/2' : 'w-full'} text-gray-700`}>
        {description}
      </div>
    </div>
  </div>
)

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>关于我们 - 杭州云数联算科技</title>
        <meta name="description" content="了解云数联算科技的公司历程和使命" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* 公司简介 */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">关于云数联算科技</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            成立于2020年的杭州云数联算科技，是一家专注于跨境电商和人工智能创新的高新技术企业。
            我们致力于为全球中小企业提供数字化转型解决方案，通过先进的技术和创新服务，帮助企业在全球市场中实现高效增长。
          </p>
        </section>

        {/* 公司历史 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">公司发展历程</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">2020年</h3>
              <p>公司成立，专注于跨境电商技术研发</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">2021年</h3>
              <p>获得首轮风险投资，开发首个AIGC应用平台</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-600 mb-4">2022年</h3>
              <p>入选国家高新技术企业，服务客户超过500家</p>
            </div>
          </div>
        </section>

        {/* 核心价值观 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">核心价值观</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '创新驱动', desc: '持续技术创新，引领行业发展' },
              { title: '客户至上', desc: '以客户需求为中心，提供卓越服务' },
              { title: '专业精神', desc: '追求专业极致，不断提升能力' },
              { title: '开放协作', desc: '开放心态，团队协作，共同成长' }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-blue-600 mb-4">{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 管理团队 */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">管理团队</h2>
          <TeamSection 
            title="我们的团队" 
            description={
              <div>
                <p className="mb-4">
                  云数联算科技拥有一支富有激情和创新精神的专业团队。我们的核心管理团队来自知名互联网公司和科技企业，
                  具有丰富的跨境电商、人工智能和大数据领域的从业经验。
                </p>
                <p className="mb-4">
                  团队成员平均拥有8-12年的行业经验，曾在阿里巴巴、腾讯、字节跳动等头部科技公司担任关键技术和管理职位。
                  我们秉承"技术创新、开放协作"的理念，致力于为企业提供最前沿、最高效的数字化解决方案。
                </p>
                <p>
                  团队构成包括资深AI算法专家、跨境电商运营专家、大数据分析师、产品经理和技术开发工程师，
                  形成了一个全方位、跨领域的专业团队。
                </p>
              </div>
            }
            image="/images/team-photo.png"
          />
        </section>
      </main>

      <Footer />
    </div>
  )
} 