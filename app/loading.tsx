export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center" dir="rtl">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-200 rounded-full mx-auto"></div>
          <div className="w-20 h-20 border-4 border-blue-600 rounded-full mx-auto absolute top-0 left-1/2 -translate-x-1/2 animate-spin border-t-transparent"></div>
        </div>
        <p className="mt-6 text-gray-600 font-arabic text-lg">جاري التحميل...</p>
      </div>
    </div>
  )
}