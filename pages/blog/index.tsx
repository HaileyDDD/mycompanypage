import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const blogPosts = [
  {
    id: 1,
    title: "跨境电商AI趋势报告",
    excerpt: "深度解析人工智能在跨境电商中的创新应用",
    date: "2023年12月",
    author: "技术研发部",
    tags: ["AI", "跨境电商", "技术趋势"]
  },
  {
    id: 2,
    title: "AIGC内容生成新突破",
    excerpt: "多语言智能内容生成技术的最新进展",
    date: "2023年11月",
    author: "产品创新团队",
    tags: ["AIGC", "内容生成", "多语言"]
  },
  {
    id: 3,
    title: "数据驱动的全球化策略",
    excerpt: "如何利用大数据制定精准的国际市场拓展方案",
    date: "2023年10月",
    author: "数据智能部",
    tags: ["大数据", "全球化", "市场策略"]
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>技术博客 - 云数联算科技</title>
        <meta name="description" content="云数联算科技技术博客，分享AI和跨境电商最新洞察" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            技术博客
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            探索人工智能、跨境电商和数字化转型的前沿技术与实践
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500">{post.date}</span>
                <div className="flex space-x-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  )
} 