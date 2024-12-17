import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="云数联算科技logo" 
            width={50} 
            height={50} 
          />
          <span className="ml-3 text-xl font-bold text-blue-600">
            云数联算科技
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="hover:text-blue-600">首页</Link></li>
            <li><Link href="/services" className="hover:text-blue-600">服务</Link></li>
            <li><Link href="/about" className="hover:text-blue-600">关于我们</Link></li>
            <li><Link href="/careers" className="hover:text-blue-600">招聘</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">联系</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
} 