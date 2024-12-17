import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const JobCard = ({ title, department, description, requirements, onApply }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-bold text-blue-600">{title}</h3>
      <span className="text-gray-600 bg-blue-100 px-3 py-1 rounded-full text-sm">
        {department}
      </span>
    </div>
    <p className="text-gray-700 mb-4">{description}</p>
    <div>
      <h4 className="font-semibold text-blue-600 mb-2">岗位要求：</h4>
      <ul className="list-disc list-inside text-gray-700">
        {requirements.map((req, index) => (
          <li key={index}>{req}</li>
        ))}
      </ul>
    </div>
    <button 
      onClick={onApply}
      className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
    >
      投递简历
    </button>
  </div>
)

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobOpenings = [
    {
      title: '高级AI算法工程师',
      department: '技术研发部',
      description: '负责AI算法的研究、开发和优化，推动公司人工智能技术创新',
      requirements: [
        '计算机科学、机器学习或相关专业硕士及以上学历',
        '3年以上AI算法研发经验',
        '精通Python、深度学习框架',
        '有NLP或计算机视觉相关项目经验'
      ]
    },
    {
      title: '跨境电商运营专家',
      department: '业务拓展部',
      description: '负责跨境电商平台策略制定和运营优化，协助客户实现全球市场拓展',
      requirements: [
        '电子商务、国际贸易等相关专业',
        '3年以上跨境电商运营经验',
        '熟悉主流跨境电商平台',
        '优秀的英语沟通能力'
      ]
    },
    {
      title: '大数据分析师',
      department: '数据智能部',
      description: '负责数据挖掘、分析和可视化，为业务决策提供数据支持',
      requirements: [
        '统计学、数据科学或相关专业',
        '熟练使用SQL、Python等数据分析工具',
        '具备数据可视化和商业智能分析能力',
        '有电商或AI行业数据分析经验优先'
      ]
    }
  ]

  const handleApply = (job) => {
    setSelectedJob(job)
  }

  const closeModal = () => {
    setSelectedJob(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>招贤纳士 - 杭州云数联算科技</title>
        <meta name="description" content="加入云数联算科技，与顶尖人才一起推动技术创新" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            加入云数联算科技
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            我们相信人才是推动企业创新和发展的核心力量。
            如果你热爱技术、充满创造力，并渴望在跨境电商和AI领域实现自我价值，
            那就快来加入我们吧！
          </p>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, index) => (
            <JobCard 
              key={index}
              title={job.title}
              department={job.department}
              description={job.description}
              requirements={job.requirements}
              onApply={() => handleApply(job)}
            />
          ))}
        </section>

        <section className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            我们的人才理念
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-5xl text-blue-600 mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">持续成长</h3>
              <p>提供完善的培训体系和职业发展通道</p>
            </div>
            <div>
              <div className="text-5xl text-blue-600 mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">创新文化</h3>
              <p>鼓励创新，尊重每一个人的想法</p>
            </div>
            <div>
              <div className="text-5xl text-blue-600 mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">团队协作</h3>
              <p>扁平化管理，开放、互信的团队氛围</p>
            </div>
          </div>
        </section>
      </main>

      {/* 简历投递弹窗 */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-blue-600 mb-4">投递简历</h2>
            <p className="text-gray-700 mb-6">
              您正在申请：{selectedJob.title} - {selectedJob.department}
            </p>
            <div className="bg-blue-50 p-4 rounded-md mb-6">
              <p className="text-blue-700 font-semibold">
                请将您的简历发送至：
              </p>
              <p className="text-blue-600 text-lg font-bold">
                yunshudata@hotmail.com
              </p>
            </div>
            <p className="text-gray-600 mb-6">
              邮件主题请注明：「应聘{selectedJob.title} - 姓名」
            </p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => {
                  // 复制邮箱到剪贴板
                  navigator.clipboard.writeText('yunshudata@hotmail.com')
                  alert('邮箱地址已复制到剪贴板')
                }}
                className="bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition"
              >
                复制邮箱
              </button>
              <button 
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
} 