import { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const validateForm = () => {
    const errors = {}
    
    if (!formData.name.trim()) {
      errors['name'] = '请输入姓名'
    }

    if (!formData.email.trim()) {
      errors['email'] = '请输入邮箱'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors['email'] = '请输入有效的邮箱地址'
    }

    if (formData.phone && !/^1[3-9]\d{9}$/.test(formData.phone)) {
      errors['phone'] = '请输入有效的手机号码'
    }

    if (!formData.message.trim()) {
      errors['message'] = '请输入留言内容'
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setSubmitStatus('sending')

    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // 实际项目中应替换为真实的表单提交逻辑
      setSubmitStatus('success')
      
      // 重置表单
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('表单提交失败', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>联系我们 - 杭州云数联算科技</title>
        <meta name="description" content="联系云数联算科技，获取专业的跨境电商和AI解决方案" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">联系我们</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            我们随时准备倾听您的需求，为您提供专业的解决方案
          </p>
        </section>

        <section className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${formErrors['name'] ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors['name'] && <p className="text-red-500 text-sm mt-1">{formErrors['name']}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">邮箱 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${formErrors['email'] ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors['email'] && <p className="text-red-500 text-sm mt-1">{formErrors['email']}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">手机号码</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 border rounded-md ${formErrors['phone'] ? 'border-red-500' : 'border-gray-300'}`}
                />
                {formErrors['phone'] && <p className="text-red-500 text-sm mt-1">{formErrors['phone']}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-gray-700 mb-2">公司名称</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">留言内容 *</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${formErrors['message'] ? 'border-red-500' : 'border-gray-300'}`}
              />
              {formErrors['message'] && <p className="text-red-500 text-sm mt-1">{formErrors['message']}</p>}
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'sending'}
              className={`w-full mt-6 py-3 rounded-md text-white font-bold transition ${
                submitStatus === 'sending' 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {submitStatus === 'sending' ? '提交中...' : '发送消息'}
            </button>

            {submitStatus === 'success' && (
              <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                感谢您的留言，我们将尽快与您联系！
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                提交失败，请稍后重试
              </div>
            )}
          </form>
        </section>

        {/* 联系方式 */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">联系方式</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-600 mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">电话</h3>
              <p>+86 123 4567 8900</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-600 mb-4">✉️</div>
              <h3 className="text-xl font-bold mb-2">邮箱</h3>
              <p>contact@yunshulian.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl text-blue-600 mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">地址</h3>
              <p>浙江省杭州市西湖区</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 