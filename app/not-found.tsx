import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4" dir="rtl">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">
          الصفحة غير موجودة
        </h2>
        
        <p className="text-gray-600 mb-8 font-arabic text-lg leading-relaxed">
          عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium font-arabic inline-flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            العودة للرئيسية
          </Link>
          
          <Link
            href="/search"
            className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-all duration-300 font-medium font-arabic inline-flex items-center justify-center gap-2"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
              />
            </svg>
            البحث في الموقع
          </Link>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 font-arabic">
            إذا كنت تعتقد أن هذا خطأ، يرجى <Link href="/contact" className="text-blue-600 hover:underline">التواصل معنا</Link>
          </p>
        </div>
      </div>
    </div>
  )
}