import React from 'react';
import { Search, CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronDown, Star, User, Eye, Clock, ExternalLink, FileText, Users, GraduationCap, Award, Globe, BookOpen, TrendingUp } from 'lucide-react';
import { FactCheck } from '../types';
import { mockFactChecks, categories } from '../data/mockData';

// Component imports (these would need to be extracted too)
interface VerdictBadgeProps {
  verdict: string;
  size?: 'sm' | 'md' | 'lg';
}

interface CompactCardProps {
  factCheck: FactCheck;
  onClick: () => void;
  featured?: boolean;
}

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface HomePageProps {
  filters: any;
  setFilters: (filters: any) => void;
  filteredFactChecks: FactCheck[];
  setCurrentPage: (page: string) => void;
  setSelectedArticle: (article: FactCheck) => void;
  setIsSubmissionModalOpen: (open: boolean) => void;
  CompactCard: React.ComponentType<CompactCardProps>;
  VerdictBadge: React.ComponentType<VerdictBadgeProps>;
  LazyImage: React.ComponentType<LazyImageProps>;
}

const HomePage: React.FC<HomePageProps> = ({
  filters,
  setFilters,
  filteredFactChecks,
  setCurrentPage,
  setSelectedArticle,
  setIsSubmissionModalOpen,
  CompactCard,
  VerdictBadge,
  LazyImage
}) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50" dir="rtl">
    {/* Creative Animated Hero Section */}
    <section className="container mx-auto px-4 pt-8 pb-12">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-12 shadow-2xl border border-blue-700/30 overflow-hidden">
        {/* Creative News Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated floating news cards */}
          <div className="absolute top-8 right-8 animate-floating-news">
            <div className="bg-green-500/20 backdrop-blur-sm rounded-xl p-3 border border-green-400/30 animate-news-verified">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-400 animate-checkmark-draw" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-green-300 text-xs font-bold font-arabic">صحيح</div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-20 left-8 animate-floating-news" style={{animationDelay: '1s'}}>
            <div className="bg-red-500/20 backdrop-blur-sm rounded-xl p-3 border border-red-400/30 animate-news-fake">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-red-400 animate-x-mark-draw" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div className="text-red-300 text-xs font-bold font-arabic">احتيال</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 animate-floating-news" style={{animationDelay: '2s'}}>
            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-3 border border-yellow-400/30 animate-verification-pulse">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L5.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div className="text-yellow-300 text-xs font-bold font-arabic">عبث</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-12 animate-floating-news" style={{animationDelay: '0.5s'}}>
            <div className="bg-blue-500/20 backdrop-blur-sm rounded-xl p-3 border border-blue-400/30 relative animate-scan-line">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-400 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <div className="text-blue-300 text-xs font-bold font-arabic">جاري التحقق</div>
              </div>
            </div>
          </div>
          
          {/* Verification scanning effects */}
          <div className="absolute top-1/3 right-6 w-20 h-px bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-6 w-24 h-px bg-gradient-to-l from-transparent via-red-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Gentle floating orbs */}
          <div className="absolute top-10 left-1/3 w-16 h-16 bg-gradient-to-br from-green-400/8 to-blue-400/12 rounded-full blur-xl opacity-40 animate-float"></div>
          <div className="absolute bottom-10 right-1/3 w-12 h-12 bg-gradient-to-br from-red-400/6 to-orange-500/10 rounded-full blur-xl opacity-30 animate-float-delayed"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white">
            
          {/* Enhanced Trust Badge with Animation */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 bg-white/12 backdrop-blur-md px-6 py-3 rounded-xl border border-white/25 shadow-lg hover:bg-white/18 transition-all duration-300 group relative animate-scan-line">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-verification-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-sm font-medium font-arabic">منصة مستقلة ومحايدة • معتمدة IFCN</span>
              </div>
              {/* Verification badge */}
              <div className="ml-2">
                <svg className="w-5 h-5 text-blue-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
              
          {/* Animated Main Headline */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4 px-4 pt-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight font-arabic-heading group whitespace-nowrap">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg group-hover:from-cyan-200 group-hover:via-white group-hover:to-blue-200 transition-all duration-500">
                  منصة تأكد
                </span>
              </h1>
              {/* Animated underline - made wider for longer text */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <div className="max-w-3xl mx-auto mb-6">
              <p className="text-xl md:text-2xl font-medium leading-relaxed font-arabic text-white/90 mb-3">
                <span className="font-semibold text-cyan-200 animate-pulse">منصة مستقلة ومحايدة</span> متخصصة في التحقق من الأخبار والمعلومات
              </p>
              <p className="text-base md:text-lg opacity-80 font-arabic">
                معتمدة من الشبكة الدولية لفحص الحقائق (IFCN) • أكثر من 2.8 مليون تحقق
              </p>
            </div>
          </div>

          {/* Animated CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button 
              onClick={() => setCurrentPage('search')}
              className="group relative bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-arabic overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                ابحث في قاعدة البيانات
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button 
              onClick={() => setIsSubmissionModalOpen(true)}
              className="group relative border-2 border-white/60 text-white px-10 py-4 rounded-xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 font-arabic shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                أرسل معلومة للتحقق
              </span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Animated Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">8+</div>
              <div className="text-white/85 font-arabic text-base group-hover:text-cyan-200 transition-colors duration-300">سنوات خبرة</div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">IFCN</div>
              <div className="text-white/85 font-arabic text-base group-hover:text-cyan-200 transition-colors duration-300">عضوية معتمدة</div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">2.8M</div>
              <div className="text-white/85 font-arabic text-base group-hover:text-cyan-200 transition-colors duration-300">تحقق مكتمل</div>
            </div>

            <div className="group hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.6s'}}>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent animate-pulse">100%</div>
              <div className="text-white/85 font-arabic text-base group-hover:text-cyan-200 transition-colors duration-300">محايد ومستقل</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Trending News Section */}
    <section className="container mx-auto px-4 py-16">
      <div className="flex items-center gap-4 mb-12">
        <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-gray-900 font-arabic-heading">
            🔥 الأخبار الرائجة
          </h2>
          <p className="text-gray-600 font-arabic">أهم الأخبار والقضايا المتداولة اليوم</p>
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 px-3 py-2 rounded-xl">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="font-arabic font-medium">مباشر</span>
          </div>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        {mockFactChecks.slice(0, 6).map((factCheck, index) => (
          <div key={`trending-${factCheck.id}`} className="relative">
            {index === 0 && (
              <div className="absolute -top-2 -right-2 z-10 bg-red-500 text-white p-2 rounded-full shadow-lg">
                <span className="text-xs font-bold">🔥</span>
              </div>
            )}
            <CompactCard 
              factCheck={factCheck}
              onClick={() => {
                setSelectedArticle(factCheck);
                setCurrentPage('article');
              }}
              featured={index === 0}
            />
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button 
          onClick={() => setCurrentPage('search')}
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-2xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 font-arabic mx-auto"
        >
          <TrendingUp className="w-5 h-5" />
          عرض مزيد من الأخبار الرائجة
        </button>
      </div>
    </section>

    {/* Categorized Content Sections */}
    <section className="container mx-auto px-4 py-16">
      {/* صحيح (True) Section */}
      {mockFactChecks.filter(fc => fc.verdict === 'true').length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-800 font-arabic-heading">
                صحيح
              </h3>
              <p className="text-green-600 font-arabic">معلومات موثقة ومتحقق منها</p>
            </div>
            <div className="mr-auto bg-green-100 text-green-800 px-4 py-2 rounded-xl font-bold">
              {mockFactChecks.filter(fc => fc.verdict === 'true').length} تحقق
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {mockFactChecks.filter(fc => fc.verdict === 'true').slice(0, 4).map((factCheck, index) => (
              <div key={`true-${factCheck.id}`} style={{ animationDelay: `${index * 30}ms` }} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                <CompactCard 
                  factCheck={factCheck}
                  onClick={() => {
                    setSelectedArticle(factCheck);
                    setCurrentPage('article');
                  }}
                  featured={factCheck.featured}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button 
              onClick={() => {
                setFilters(prev => ({ ...prev, verdict: 'صحيح' }));
                setCurrentPage('search');
              }}
              className="text-green-600 hover:text-green-700 font-arabic font-medium"
            >
              عرض جميع التحققات الصحيحة ←
            </button>
          </div>
        </div>
      )}

      {/* احتيال (False) Section */}
      {mockFactChecks.filter(fc => fc.verdict === 'false').length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-2xl flex items-center justify-center shadow-lg">
              <XCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-800 font-arabic-heading">
                احتيال
              </h3>
              <p className="text-red-600 font-arabic">معلومات احتيالية ومضللة</p>
            </div>
            <div className="mr-auto bg-red-100 text-red-800 px-4 py-2 rounded-xl font-bold">
              {mockFactChecks.filter(fc => fc.verdict === 'false').length} تحقق
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {mockFactChecks.filter(fc => fc.verdict === 'false').slice(0, 4).map((factCheck, index) => (
              <div key={`false-${factCheck.id}`} style={{ animationDelay: `${index * 30}ms` }} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                <CompactCard 
                  factCheck={factCheck}
                  onClick={() => {
                    setSelectedArticle(factCheck);
                    setCurrentPage('article');
                  }}
                  featured={factCheck.featured}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button 
              onClick={() => {
                setFilters(prev => ({ ...prev, verdict: 'احتيال' }));
                setCurrentPage('search');
              }}
              className="text-red-600 hover:text-red-700 font-arabic font-medium"
            >
              عرض جميع التحققات الاحتيالية ←
            </button>
          </div>
        </div>
      )}

      {/* عبث (Misleading) Section */}
      {mockFactChecks.filter(fc => fc.verdict === 'misleading').length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-orange-800 font-arabic-heading">
                عبث
              </h3>
              <p className="text-orange-600 font-arabic">معلومات عابثة أو مضللة</p>
            </div>
            <div className="mr-auto bg-orange-100 text-orange-800 px-4 py-2 rounded-xl font-bold">
              {mockFactChecks.filter(fc => fc.verdict === 'misleading').length} تحقق
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {mockFactChecks.filter(fc => fc.verdict === 'misleading').slice(0, 4).map((factCheck, index) => (
              <div key={`misleading-${factCheck.id}`} style={{ animationDelay: `${index * 30}ms` }} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                <CompactCard 
                  factCheck={factCheck}
                  onClick={() => {
                    setSelectedArticle(factCheck);
                    setCurrentPage('article');
                  }}
                  featured={factCheck.featured}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button 
              onClick={() => {
                setFilters(prev => ({ ...prev, verdict: 'عبث' }));
                setCurrentPage('search');
              }}
              className="text-orange-600 hover:text-orange-700 font-arabic font-medium"
            >
              عرض جميع التحققات العابثة ←
            </button>
          </div>
        </div>
      )}

      {/* إرباك (Unproven) Section */}
      {mockFactChecks.filter(fc => fc.verdict === 'unproven').length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gray-500 rounded-2xl flex items-center justify-center shadow-lg">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 font-arabic-heading">
                إرباك
              </h3>
              <p className="text-gray-600 font-arabic">معلومات مربكة وغير واضحة</p>
            </div>
            <div className="mr-auto bg-gray-100 text-gray-800 px-4 py-2 rounded-xl font-bold">
              {mockFactChecks.filter(fc => fc.verdict === 'unproven').length} تحقق
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-4">
            {mockFactChecks.filter(fc => fc.verdict === 'unproven').slice(0, 4).map((factCheck, index) => (
              <div key={`unproven-${factCheck.id}`} style={{ animationDelay: `${index * 30}ms` }} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
                <CompactCard 
                  factCheck={factCheck}
                  onClick={() => {
                    setSelectedArticle(factCheck);
                    setCurrentPage('article');
                  }}
                  featured={factCheck.featured}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button 
              onClick={() => {
                setFilters(prev => ({ ...prev, verdict: 'إرباك' }));
                setCurrentPage('search');
              }}
              className="text-gray-600 hover:text-gray-700 font-arabic font-medium"
            >
              عرض جميع التحققات المربكة ←
            </button>
          </div>
        </div>
      )}
      
      {/* Load More with AI Suggestions */}
      <div className="text-center mt-8">
        <button 
          onClick={() => setCurrentPage('search')}
          className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-base flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105 font-arabic mx-auto"
        >
          <span className="text-lg">🤖</span>
          عرض مزيد من التحققات الذكية
          <ChevronDown className="w-5 h-5 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
        </button>
        <p className="text-sm text-gray-500 mt-3 font-arabic">الذكاء الاصطناعي يختار لك أهم التحققات</p>
      </div>

      {/* Enhanced Empty State */}
      {filteredFactChecks.length === 0 && (
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            {/* Animated Search Icon */}
            <div className="relative mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-16 h-16 text-primary-400" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full animate-ping opacity-20"></div>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">لم نجد نتائج مطابقة</h3>
            <p className="text-gray-600 mb-8 leading-relaxed font-arabic">
              جرب تغيير كلمات البحث أو استخدام مرشحات مختلفة.
              <br />يمكنك أيضاً البحث باستخدام مرادفات أو مصطلحات أوسع.
            </p>
            
            <button
              onClick={() => {
                setSearchQuery('');
                setFilters({
                  category: 'جميع الفئات',
                  verdict: 'جميع التصنيفات',
                  dateRange: 'جميع التواريخ',
                  sortBy: 'الأحدث'
                });
              }}
              className="bg-primary-600 text-white px-8 py-3 rounded-2xl hover:bg-primary-700 transition-all duration-300 font-medium font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              🔄 مسح جميع المرشحات
            </button>
          </div>
        </div>
      )}
    </section>

    {/* Enhanced Featured Fact Check */}
    {mockFactChecks.find(fc => fc.featured) && (
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic-heading">
            ⭐ التحقق المميز
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
            التحقق الأكثر أهمية وتأثيراً، يستحق اهتمامك الخاص
          </p>
        </div>
        
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-primary-100">
          <div className="lg:flex">
            <div className="lg:w-1/2 relative">
              <LazyImage 
                src={mockFactChecks.find(fc => fc.featured)!.image} 
                alt=""
                className="w-full h-80 lg:h-full object-cover"
              />
              {/* Featured Badge Overlay */}
              <div className="absolute top-6 right-6">
                <div className="bg-warning-500 text-white px-4 py-2 rounded-2xl font-bold shadow-lg backdrop-blur-sm">
                  <Star className="inline w-5 h-5 ml-2 fill-current" />
                  مميز
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 p-10">
              <div className="flex items-center gap-4 mb-6">
                <VerdictBadge verdict={mockFactChecks.find(fc => fc.featured)!.verdict} size="lg" />
                <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-2xl text-sm font-medium font-arabic">
                  {mockFactChecks.find(fc => fc.featured)!.category}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight font-arabic-heading">
                {mockFactChecks.find(fc => fc.featured)!.title}
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed font-arabic">
                {mockFactChecks.find(fc => fc.featured)!.summary}
              </p>

              {/* Enhanced Metadata */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center bg-gray-50 rounded-2xl p-4">
                  <User className="w-5 h-5 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900 font-arabic">
                    {mockFactChecks.find(fc => fc.featured)!.author}
                  </div>
                  <div className="text-xs text-gray-500 font-arabic">المحقق</div>
                </div>
                <div className="text-center bg-gray-50 rounded-2xl p-4">
                  <Eye className="w-5 h-5 text-success-600 mx-auto mb-2" />
                  <div className="text-sm font-bold text-gray-900">
                    {mockFactChecks.find(fc => fc.featured)!.views.toLocaleString()}
                  </div>
                  <div className="text-xs text-gray-500 font-arabic">مشاهدة</div>
                </div>
                <div className="text-center bg-gray-50 rounded-2xl p-4">
                  <Clock className="w-5 h-5 text-warning-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-gray-900 font-arabic">
                    {mockFactChecks.find(fc => fc.featured)!.readTime}
                  </div>
                  <div className="text-xs text-gray-500 font-arabic">للقراءة</div>
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setSelectedArticle(mockFactChecks.find(fc => fc.featured)!);
                  setCurrentPage('article');
                }}
                className="group w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-3 shadow-sm hover:shadow-md transform hover:scale-105 font-arabic"
              >
                📖 اقرأ التحقق كاملاً
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>
    )}

    {/* Enhanced Professional Trust Section */}
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-16">
          {/* Animated Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative bg-white rounded-full p-6 shadow-2xl">
                <svg className="w-16 h-16 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 font-arabic-heading">
            منصة موثوقة ومعتمدة
          </h2>
          
          {/* Subtitle with Badge */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
            <p className="text-xl text-cyan-200 font-arabic font-medium">
              نفخر بكوننا المرجع الأول للتحقق من الأخبار في العالم العربي
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              معتمد من IFCN
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              منصة مستقلة
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              8+ سنوات خبرة
            </span>
          </div>
        </div>

        {/* Modern Statistics Grid with Glass Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {/* Total Articles */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">2,847+</div>
              <div className="text-sm font-medium text-cyan-200 font-arabic">مقال محقق</div>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Monthly Visitors */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">1.2M</div>
              <div className="text-sm font-medium text-cyan-200 font-arabic">زائر شهرياً</div>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Academy Students */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-green-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">15,420</div>
              <div className="text-sm font-medium text-green-200 font-arabic">طالب متخرج</div>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Team Experience */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-orange-400/30 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-black text-white mb-2">8+</div>
              <div className="text-sm font-medium text-orange-200 font-arabic">سنوات خبرة</div>
              <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Professional Partners Section */}
        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-black text-white mb-4 font-arabic-heading">
              شركاؤنا والمنظمات المعتمدة
            </h3>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
              <svg className="w-8 h-8 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-32"></div>
            </div>
            <p className="text-lg text-cyan-200 font-arabic max-w-3xl mx-auto">
              نعمل بالتعاون مع أهم المنظمات الدولية في مجال مكافحة المعلومات المضللة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* International Fact-Checking Network */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-blue-500/30 transition-shadow duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-arabic-heading">
                  الشبكة الدولية للتحقق
                </h4>
                <p className="text-sm text-cyan-200 font-arabic leading-relaxed">
                  عضو معتمد في الشبكة الدولية للتحقق من الأخبار (IFCN)
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full text-xs text-cyan-300 font-arabic">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    معتمد دولياً
                  </span>
                </div>
              </div>
            </div>

            {/* Media Literacy */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-green-500/30 transition-shadow duration-300">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-arabic-heading">
                  تعليم الإعلام الرقمي
                </h4>
                <p className="text-sm text-green-200 font-arabic leading-relaxed">
                  شريك رسمي في مبادرات محو الأمية الإعلامية الرقمية
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-green-500/20 px-3 py-1 rounded-full text-xs text-green-300 font-arabic">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    تعليمي
                  </span>
                </div>
              </div>
            </div>

            {/* Research Collaboration */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-orange-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:shadow-orange-500/30 transition-shadow duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 font-arabic-heading">
                  البحث والتطوير
                </h4>
                <p className="text-sm text-orange-200 font-arabic leading-relaxed">
                  تعاون مع الجامعات الرائدة في أبحاث مكافحة المعلومات المضللة
                </p>
                <div className="mt-6 flex justify-center">
                  <span className="inline-flex items-center gap-2 bg-orange-500/20 px-3 py-1 rounded-full text-xs text-orange-300 font-arabic">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    بحثي
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Enhanced Academy CTA Section */}
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Content Section - Left Side */}
              <div className="flex-1 p-12 lg:p-16">
                <div className="max-w-2xl">
                  {/* Header with Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                    <span className="text-sm font-medium text-blue-600 font-arabic">منصة تعليمية متقدمة</span>
                  </div>

                  {/* Main Title */}
                  <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 font-arabic-heading leading-tight">
                    أكاديمية تأكد للتعليم
                  </h2>
                  
                  {/* Description */}
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed font-arabic">
                    تعلم مهارات التحقق من المعلومات والإعلام الرقمي من خلال دوراتنا المجانية المصممة من قبل خبراء في المجال
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                          <Users className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">15,420+</div>
                          <div className="text-sm text-gray-600 font-arabic">متدرب</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-2xl p-4 border border-green-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
                          <Award className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-gray-900">معتمدة</div>
                          <div className="text-sm text-gray-600 font-arabic">شهادات</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button 
                    onClick={() => setCurrentPage('academy')}
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 font-arabic flex items-center gap-3"
                  >
                    استكشف الدورات
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Icon Section - Right Side */}
              <div className="lg:w-2/5 relative bg-gradient-to-br from-blue-600 to-cyan-600 p-16 lg:p-20 h-full flex items-center justify-center">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10">
                    <div className="w-20 h-20 border-4 border-white rounded-full"></div>
                  </div>
                  <div className="absolute bottom-10 right-10">
                    <div className="w-32 h-32 border-4 border-white rounded-full"></div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-40 h-40 border-4 border-white/30 rounded-full"></div>
                  </div>
                </div>

                {/* Main Icon */}
                <div className="relative">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150"></div>
                  <div className="relative bg-white rounded-3xl p-10 shadow-2xl">
                    <BookOpen className="w-20 h-20 text-blue-600" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-sm rounded-2xl p-3 animate-float">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-20 left-10 bg-white/20 backdrop-blur-sm rounded-2xl p-3 animate-float" style={{animationDelay: '1s'}}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;