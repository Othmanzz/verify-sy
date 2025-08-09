import React from 'react';
import { Search, Filter, CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronDown, Star, User, Eye, Clock, ExternalLink, FileText, Users, GraduationCap, Award, Globe, BookOpen, TrendingUp } from 'lucide-react';
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
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchSuggestions: string[];
  showSearchSuggestions: boolean;
  setShowSearchSuggestions: (show: boolean) => void;
  handleSuggestionClick: (suggestion: string) => void;
  filters: any;
  setFilters: (filters: any) => void;
  setIsFilterPanelOpen: (open: boolean) => void;
  filteredFactChecks: FactCheck[];
  setCurrentPage: (page: string) => void;
  setSelectedArticle: (article: FactCheck) => void;
  setIsSubmissionModalOpen: (open: boolean) => void;
  CompactCard: React.ComponentType<CompactCardProps>;
  VerdictBadge: React.ComponentType<VerdictBadgeProps>;
  LazyImage: React.ComponentType<LazyImageProps>;
}

const HomePage: React.FC<HomePageProps> = ({
  searchQuery,
  setSearchQuery,
  handleSearchChange,
  searchSuggestions,
  showSearchSuggestions,
  setShowSearchSuggestions,
  handleSuggestionClick,
  filters,
  setFilters,
  setIsFilterPanelOpen,
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
    <section className="container mx-auto px-4 py-16">
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
                <div className="text-red-300 text-xs font-bold font-arabic">زائف</div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-12 right-12 animate-floating-news" style={{animationDelay: '2s'}}>
            <div className="bg-yellow-500/20 backdrop-blur-sm rounded-xl p-3 border border-yellow-400/30 animate-verification-pulse">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L5.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div className="text-yellow-300 text-xs font-bold font-arabic">مضلل</div>
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
            <div className="relative inline-block mb-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight font-arabic-heading group">
                <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent drop-shadow-lg group-hover:from-cyan-200 group-hover:via-white group-hover:to-blue-200 transition-all duration-500">
                  تأكد
                </span>
              </h1>
              {/* Animated underline */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
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

    {/* Enhanced Integrated Search & Content Section */}
    <section className="container mx-auto px-4 py-20">
      {/* Enhanced Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl mb-6 shadow-lg">
          <Search className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
          استكشف وابحث في التحققات
        </h2>
        <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-arabic leading-relaxed">
          ابحث واستكشف نتائج التحققات المصنفة بدقة من قبل خبرائنا المتخصصين
        </p>
      </div>

      {/* Enhanced Search Section */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 border-2 border-blue-100 mb-16 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle at 3px 3px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="text-center mb-10 relative z-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl mb-4">
            <Search className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-3 font-arabic-heading">
            ابحث بسرعة في التحققات
          </h3>
          <p className="text-lg text-gray-600 font-arabic">استخدم البحث الذكي للعثور على التحقق المناسب</p>
        </div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 ابحث عن أي موضوع... (مثال: لقاح كورونا، الاقتصاد العالمي، تغير المناخ)"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => {
                    if (searchSuggestions.length > 0) {
                      setShowSearchSuggestions(true);
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => setShowSearchSuggestions(false), 200);
                  }}
                  className="w-full pl-16 pr-6 py-6 text-xl border-3 border-gray-300 rounded-3xl focus:outline-none focus:ring-4 focus:ring-blue-200 focus:border-blue-500 text-right font-arabic shadow-xl hover:shadow-2xl transition-all duration-300 bg-gray-50 focus:bg-white"
                  dir="rtl"
                />
                <div className="absolute left-6 top-6 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Search className="h-5 w-5 text-white" />
                </div>
              
                {showSearchSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border-3 border-blue-200 rounded-3xl shadow-3xl z-30 mt-3 max-h-80 overflow-y-auto">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-right px-8 py-5 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 text-xl border-b border-gray-100 last:border-b-0 flex items-center gap-4 group"
                        dir="rtl"
                      >
                        <div className="w-6 h-6 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-colors duration-200">
                          <Search className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="font-arabic font-medium flex-1">{suggestion}</span>
                        <ExternalLink className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap lg:flex-nowrap">
              {categories.slice(1, 5).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilters(prev => ({ ...prev, category }))}
                  className={`px-8 py-4 rounded-2xl text-base font-semibold transition-all duration-300 transform hover:scale-105 font-arabic shadow-lg ${
                    filters.category === category
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-xl'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-xl'
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setIsFilterPanelOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center gap-3 font-semibold font-arabic shadow-xl transform hover:scale-105"
              >
                <Filter className="w-5 h-5" />
                المزيد
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Quick Search Tags */}
        <div className="mt-12 text-center relative z-10">
          <p className="text-lg text-gray-600 mb-6 font-arabic font-medium">المواضيع الشائعة:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['كوفيد-19', 'لقاحات', 'صحة', 'اقتصاد', 'سياسة', 'تكنولوجيا', 'بيئة', 'تغير المناخ'].map((tag, index) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-6 py-3 rounded-full text-base hover:from-blue-100 hover:to-blue-200 transition-all duration-300 font-arabic font-medium shadow-sm hover:shadow-lg transform hover:scale-105 border border-blue-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Status Categorization Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Enhanced True/Correct Status */}
        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 border-2 border-green-200 hover:border-green-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-green-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-3 font-arabic-heading">صحيح</h3>
            <p className="text-green-700 text-sm mb-6 font-arabic leading-relaxed">
              معلومات تم التأكد من صحتها بناءً على الأدلة والمصادر الموثوقة
            </p>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 mb-6 border border-green-200">
              <div className="text-3xl font-black text-green-600 mb-2">
                {mockFactChecks.filter(fc => fc.verdict === 'true').length}
              </div>
              <div className="text-sm text-green-600 font-arabic font-medium">تحقق مكتمل</div>
            </div>
            <button 
              onClick={() => setFilters(prev => ({ ...prev, verdict: 'صحيح' }))}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-semibold text-base font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              عرض التحققات
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-green-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-green-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Enhanced False/Incorrect Status */}
        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 border-2 border-red-200 hover:border-red-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-red-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
              <XCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-red-800 mb-3 font-arabic-heading">زائف</h3>
            <p className="text-red-700 text-sm mb-6 font-arabic leading-relaxed">
              معلومات غير صحيحة تم دحضها بالأدلة والمصادر الموثوقة
            </p>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-4 mb-6 border border-red-200">
              <div className="text-3xl font-black text-red-600 mb-2">
                {mockFactChecks.filter(fc => fc.verdict === 'false').length}
              </div>
              <div className="text-sm text-red-600 font-arabic font-medium">تحقق مكتمل</div>
            </div>
            <button 
              onClick={() => setFilters(prev => ({ ...prev, verdict: 'زائف' }))}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white py-3 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-semibold text-base font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              عرض التحققات
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-red-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-red-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Enhanced Misleading Status */}
        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 border-2 border-yellow-200 hover:border-yellow-300 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-yellow-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-yellow-800 mb-3 font-arabic-heading">مضلل</h3>
            <p className="text-yellow-700 text-sm mb-6 font-arabic leading-relaxed">
              معلومات تحتوي على حقائق جزئية أو سياق مضلل
            </p>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-4 mb-6 border border-yellow-200">
              <div className="text-3xl font-black text-yellow-600 mb-2">
                {mockFactChecks.filter(fc => fc.verdict === 'misleading').length}
              </div>
              <div className="text-sm text-yellow-600 font-arabic font-medium">تحقق مكتمل</div>
            </div>
            <button 
              onClick={() => setFilters(prev => ({ ...prev, verdict: 'مضلل' }))}
              className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 text-white py-3 rounded-xl hover:from-yellow-700 hover:to-yellow-800 transition-all duration-300 font-semibold text-base font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              عرض التحققات
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>

        {/* Enhanced Unproven Status */}
        <div className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-3xl transition-all duration-500 border-2 border-gray-300 hover:border-gray-400 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
          {/* Subtle background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="text-center relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3 font-arabic-heading">غير مثبت</h3>
            <p className="text-gray-700 text-sm mb-6 font-arabic leading-relaxed">
              لا توجد أدلة كافية للتحقق من صحة المعلومة
            </p>
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 mb-6 border border-gray-200">
              <div className="text-3xl font-black text-gray-600 mb-2">
                {mockFactChecks.filter(fc => fc.verdict === 'unproven').length}
              </div>
              <div className="text-sm text-gray-600 font-arabic font-medium">تحقق مكتمل</div>
            </div>
            <button 
              onClick={() => setFilters(prev => ({ ...prev, verdict: 'غير مثبت' }))}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-3 rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 font-semibold text-base font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              عرض التحققات
            </button>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-gray-200/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-6 h-6 bg-gray-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>

      {/* Enhanced Content Cards Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-2 font-arabic-heading">
              أحدث التحققات
            </h3>
            <p className="text-xl text-gray-600 font-arabic">آخر ما توصل إليه فريقنا من تحققات مهمة وموثوقة</p>
          </div>
        </div>
        <button 
          onClick={() => setCurrentPage('search')}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg flex items-center gap-3 shadow-xl hover:shadow-2xl transform hover:scale-105 font-arabic group"
        >
          عرض جميع التحققات
          <ChevronDown className="w-6 h-6 rotate-[-90deg] group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
      
      {/* Enhanced Articles Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredFactChecks.slice(0, 12).map((factCheck, index) => (
          <div key={factCheck.id} style={{ animationDelay: `${index * 100}ms` }} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
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

    {/* Enhanced Trust & Statistics Section */}
    <section className="bg-gradient-to-br from-slate-50 via-primary-50 to-accent-50 py-20">
      <div className="container mx-auto px-4">
        {/* Trust Indicators Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 border-4 border-primary-900 rounded-2xl bg-white mb-6 shadow-lg p-3">
            <svg 
              viewBox="0 0 150 150" 
              className="w-full h-full" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Official Verify-sy Logo - Medium Version */}
              <g transform="translate(75,75)">
                {/* Logo design based on provided image */}
                <g opacity="0.9">
                  {/* Main checkmark */}
                  <path d="M-30,-12 L-8,12 L30,-15" stroke="#1E40AF" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Arabic calligraphy elements */}
                  <path d="M-35,20 C-35,12 -28,8 -20,8 C-10,8 -5,12 5,20" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
                  <path d="M12,20 L22,8 L35,20" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Decorative elements */}
                  <circle cx="28" cy="-12" r="3" fill="#3B82F6"/>
                  <circle cx="-28" cy="-5" r="2" fill="#60A5FA"/>
                  <circle cx="32" cy="0" r="1.5" fill="#93C5FD"/>
                </g>
                
                {/* Main text */}
                <text x="0" y="42" fontSize="18" fontWeight="900" textAnchor="middle" fill="#1E40AF" fontFamily="serif">
                  تأكد
                </text>
                <text x="0" y="58" fontSize="10" fontWeight="500" textAnchor="middle" fill="#1E40AF" fillOpacity="0.75" fontFamily="serif">
                  لأن الخبر أمانة
                </text>
              </g>
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-arabic-heading">
            🏆 منصة موثوقة ومعتمدة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
            نفخر بكوننا المرجع الأول للتحقق من الأخبار والمعلومات في العالم العربي
          </p>
        </div>

        {/* Trust Statistics Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {/* Total Articles */}
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <FileText className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">+2,847</div>
            <div className="text-xs md:text-sm font-medium text-gray-600 font-arabic">مقال تحقق</div>
          </div>

          {/* Monthly Visitors */}
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-accent-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-900 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Users className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">1.2M</div>
            <div className="text-xs md:text-sm font-medium text-gray-600 font-arabic">زائر شهرياً</div>
          </div>

          {/* Academy Students */}
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-success-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">15,420</div>
            <div className="text-xs md:text-sm font-medium text-gray-600 font-arabic">طالب متخرج</div>
          </div>

          {/* Team Experience */}
          <div className="bg-white rounded-3xl p-6 md:p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-warning-100">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-warning-500 to-warning-600 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
              <Award className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-2">8+</div>
            <div className="text-xs md:text-sm font-medium text-gray-600 font-arabic">سنوات خبرة</div>
          </div>
        </div>

        {/* Certifications & Partners */}
        <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">
              🤝 شركاؤنا والمنظمات المعتمدة
            </h3>
            <p className="text-lg text-gray-600 font-arabic">
              نعمل بالتعاون مع أهم المنظمات الدولية في مجال مكافحة المعلومات المضللة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* International Fact-Checking Network */}
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-900 to-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                الشبكة الدولية للتحقق
              </h4>
              <p className="text-sm text-gray-600 font-arabic">
                عضو معتمد في الشبكة الدولية للتحقق من الأخبار (IFCN)
              </p>
            </div>

            {/* Media Literacy */}
            <div className="text-center p-6 bg-gradient-to-br from-success-50 to-accent-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-success-600 to-success-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                تعليم الإعلام الرقمي
              </h4>
              <p className="text-sm text-gray-600 font-arabic">
                شريك رسمي في مبادرات محو الأمية الإعلامية الرقمية
              </p>
            </div>

            {/* Research Collaboration */}
            <div className="text-center p-6 bg-gradient-to-br from-warning-50 to-accent-50 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-warning-600 to-warning-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                البحث والتطوير
              </h4>
              <p className="text-sm text-gray-600 font-arabic">
                تعاون مع الجامعات الرائدة في أبحاث مكافحة المعلومات المضللة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Academy CTA */}
    <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">
            أكاديمية تأكد للتعليم
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed font-arabic">
            تعلم مهارات التحقق من المعلومات والإعلام الرقمي من خلال دوراتنا المجانية المصممة من قبل خبراء في المجال
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setCurrentPage('academy')}
              className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors text-lg font-arabic"
            >
              استكشف الدورات
            </button>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span className="font-arabic">+15,420 متدرب</span>
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4" />
                <span className="font-arabic">شهادات معتمدة</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomePage;