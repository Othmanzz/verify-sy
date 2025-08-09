import React, { useState } from 'react';
import { Search, Filter, TrendingUp, Database, CheckCircle, XCircle, AlertCircle, HelpCircle, User, Eye, Clock, Star, ArrowLeft, Zap, Bot, Brain, Sparkles, Heart, DollarSign, Globe2, BookOpen, Laptop, Building2, Activity, Users2, X, RotateCcw } from 'lucide-react';
import { FactCheck } from '../types';
import { mockFactChecks, categories, verdictOptions } from '../data/mockData';

interface SearchPageProps {
  setCurrentPage?: (page: string) => void;
  setSelectedArticle?: (article: FactCheck) => void;
}

// Modern CompactCard Component matching HomePage style
const CompactCard: React.FC<{ factCheck: FactCheck; onClick: () => void; featured?: boolean }> = ({ factCheck, onClick, featured = false }) => {
  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case 'true':
        return { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500', label: 'صحيح' };
      case 'false':
        return { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500', label: 'زائف' };
      case 'misleading':
        return { bg: 'bg-orange-100', text: 'text-orange-800', dot: 'bg-orange-500', label: 'مضلل' };
      case 'unproven':
        return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500', label: 'غير مثبت' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500', label: 'غير محدد' };
    }
  };

  const verdictConfig = getVerdictConfig(factCheck.verdict);

  return (
    <article 
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-4">
        {/* Content Section - Left Side */}
        <div className="flex-1">
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${verdictConfig.bg}`}>
              <div className={`w-2 h-2 rounded-full ${verdictConfig.dot}`}></div>
              <span className={`text-sm font-medium font-arabic ${verdictConfig.text}`}>
                {verdictConfig.label}
              </span>
            </div>
            <span className="text-xs text-gray-500 font-arabic">
              {factCheck.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors font-arabic-heading line-clamp-2">
            {factCheck.title}
          </h3>
          
          {/* Summary */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 font-arabic">
            {factCheck.summary}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="font-arabic">{factCheck.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              <span>{factCheck.views.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-arabic">{factCheck.readTime}</span>
            </div>
          </div>
        </div>

        {/* Image Section - Right Side */}
        <div className="w-24 h-24 relative flex-shrink-0">
          <img 
            src={factCheck.image}
            alt={factCheck.title}
            className="w-full h-full object-cover rounded-xl"
          />
          {featured && (
            <div className="absolute -top-2 -right-2 bg-yellow-500 text-white p-1 rounded-full shadow-lg">
              <Star className="w-3 h-3 fill-current" />
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const SearchPage: React.FC<SearchPageProps> = ({ setCurrentPage, setSelectedArticle }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showStickySearch, setShowStickySearch] = useState(false);
  const [filters, setFilters] = useState({
    category: 'جميع الفئات',
    verdict: 'جميع التصنيفات',
    dateRange: 'جميع التواريخ',
    sortBy: 'الأحدث'
  });

  // Handle scroll to show sticky search
  React.useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 600; // Approximate hero section height
      setShowStickySearch(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced AI Search functionality with mock responses
  const aiSuggestions = [
    "هل لقاحات كورونا آمنة وفعالة؟",
    "ما صحة أخبار التغير المناخي الأخيرة؟", 
    "هل شرب الماء الدافئ مع الليمون ينقص الوزن؟",
    "ما حقيقة فوائد العسل الطبية؟",
    "هل الذكاء الاصطناعي يهدد الوظائف البشرية؟"
  ];

  const searchSuggestions = searchQuery.length >= 2 
    ? [
        ...aiSuggestions.filter(suggestion => 
          suggestion.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 3),
        ...mockFactChecks
          .filter(fc => fc.title.includes(searchQuery) || fc.summary.includes(searchQuery))
          .slice(0, 3)
          .map(fc => fc.title)
      ].slice(0, 6)
    : aiSuggestions.slice(0, 5);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSearchSuggestions(query.length >= 2);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
  };

  // Filter functionality
  const filteredFactChecks = mockFactChecks.filter(factCheck => {
    const matchesSearch = !searchQuery || 
      factCheck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      factCheck.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      factCheck.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = filters.category === 'جميع الفئات' || factCheck.category === filters.category;
    
    const verdictMapping: { [key: string]: string } = {
      'جميع التصنيفات': 'all',
      'صحيح': 'true',
      'زائف': 'false',
      'مضلل': 'misleading',
      'غير مثبت': 'unproven'
    };
    
    const matchesVerdict = filters.verdict === 'جميع التصنيفات' || 
      factCheck.verdict === verdictMapping[filters.verdict];
    
    return matchesSearch && matchesCategory && matchesVerdict;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50" dir="rtl">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <button 
          onClick={() => setCurrentPage?.('home')}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-arabic font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          العودة للرئيسية
        </button>
      </div>

      {/* Enhanced Hero Search Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-visible">
        {/* Decorative Background - matching home page */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-40">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Search Icon with Animation */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl">
                  <Database className="w-16 h-16 text-blue-900" />
                </div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 font-arabic-heading">
              قاعدة بيانات التحققات
            </h1>
            
            {/* Subtitle with badges */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
              <p className="text-xl text-cyan-200 font-arabic font-medium">
                ابحث في أكبر أرشيف للتحققات في العالم العربي
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
            </div>

            {/* AI Badge */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full border border-white/30 text-white font-arabic text-sm font-medium">
                <Bot className="w-4 h-4 text-cyan-400" />
                بحث ذكي بالذكاء الاصطناعي
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full border border-white/30 text-white font-arabic text-sm font-medium">
                <Database className="w-4 h-4 text-green-400" />
                +50,000 تحقق
              </span>
              <span className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full border border-white/30 text-white font-arabic text-sm font-medium">
                <Zap className="w-4 h-4 text-yellow-400" />
                نتائج فورية
              </span>
            </div>
            
            {/* Enhanced AI Search Bar with Integrated Filters */}
            <div className="relative max-w-5xl mx-auto mb-12 z-50">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 p-2 relative">
                {/* Main Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="🤖 اسأل الذكاء الاصطناعي... مثل: هل لقاحات كورونا آمنة؟ أم ما صحة أخبار التغير المناخي؟"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => {
                      setShowSearchSuggestions(true);
                    }}
                    onBlur={() => {
                      setTimeout(() => setShowSearchSuggestions(false), 200);
                    }}
                    className="w-full pl-20 pr-6 py-6 text-lg bg-transparent rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-400/50 text-right text-gray-900 font-arabic"
                    dir="rtl"
                  />
                  
                  {/* AI Search Icon */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs text-gray-500 font-arabic">AI</div>
                  </div>
                  
                  {/* Enhanced AI Search Suggestions */}
                  {showSearchSuggestions && (
                    <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-2xl z-[9999] mt-3 border border-gray-100 animate-fadeIn flex flex-col max-h-96">
                      {/* Header - Fixed at top */}
                      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-2xl flex-shrink-0 relative z-20">
                        <div className="flex items-center gap-3 text-white">
                          <div className="bg-white/30 p-2 rounded-lg border border-white/20">
                            <Brain className="w-5 h-5 text-white animate-pulse" />
                          </div>
                          <span className="font-arabic font-semibold text-white">الذكاء الاصطناعي يقترح لك</span>
                          <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow ml-auto" />
                        </div>
                      </div>
                      
                      {/* Suggestions List - Scrollable section */}
                      <div className="flex-1 overflow-y-auto p-2 relative z-10">
                        {searchSuggestions.map((suggestion, index) => (
                          <button
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="w-full text-right px-5 py-4 text-gray-900 hover:bg-blue-50 hover:text-blue-800 transition-all duration-200 rounded-xl mb-1 flex items-center gap-3 group border border-transparent hover:border-blue-200"
                            dir="rtl"
                          >
                            {/* Icon */}
                            <div className="relative w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110">
                              <Bot className="w-4 h-4 text-blue-700" />
                            </div>
                            
                            {/* Text */}
                            <span className="font-arabic font-medium flex-1 text-gray-900 group-hover:text-blue-800 transition-colors duration-200">
                              {suggestion}
                            </span>
                            
                            {/* Badge */}
                            <div className="flex items-center gap-2">
                              <div className="text-xs text-gray-600 bg-gray-100 group-hover:bg-blue-100 group-hover:text-blue-700 px-3 py-1 rounded-full font-arabic font-medium transition-all duration-200">
                                <span>AI</span>
                              </div>
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                            </div>
                          </button>
                        ))}
                      </div>
                      
                      {/* Footer - Fixed at bottom */}
                      <div className="bg-gray-50 p-3 border-t border-gray-200 rounded-b-2xl flex-shrink-0 relative z-20">
                        <div className="flex items-center justify-center gap-2 text-xs text-gray-600 font-arabic font-medium">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>مدعوم بالذكاء الاصطناعي</span>
                          </div>
                          <span className="text-gray-400">•</span>
                          <span>دقة عالية</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Integrated Quick Filters */}
                <div className="border-t border-gray-200 pt-4 mt-2">
                  <div className="flex flex-wrap items-center gap-3 justify-center">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-gray-600 font-arabic font-medium">تصفية سريعة:</span>
                    </div>
                    
                    {/* Quick Category Filters */}
                    {categories.slice(0, 4).map((category, index) => {
                      const categoryIcons = [Database, Heart, DollarSign, Globe2];
                      const IconComponent = categoryIcons[index] || Database;
                      
                      return (
                        <button
                          key={category}
                          onClick={() => setFilters(prev => ({ ...prev, category }))}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-arabic ${
                            filters.category === category
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                          }`}
                        >
                          <IconComponent className="w-3 h-3" />
                          {category}
                        </button>
                      );
                    })}

                    {/* Quick Verdict Filters */}
                    <div className="h-6 w-px bg-gray-300 mx-2"></div>
                    
                    {verdictOptions.slice(1, 5).map((verdict, index) => {
                      const verdictIcons = [CheckCircle, XCircle, AlertCircle, HelpCircle];
                      const verdictStyles = [
                        { bg: 'bg-green-50', text: 'text-green-700', hover: 'hover:bg-green-100' },
                        { bg: 'bg-red-50', text: 'text-red-700', hover: 'hover:bg-red-100' },
                        { bg: 'bg-orange-50', text: 'text-orange-700', hover: 'hover:bg-orange-100' },
                        { bg: 'bg-gray-50', text: 'text-gray-700', hover: 'hover:bg-gray-100' }
                      ];
                      
                      const IconComponent = verdictIcons[index] || HelpCircle;
                      const style = verdictStyles[index] || verdictStyles[3];
                      
                      return (
                        <button
                          key={verdict}
                          onClick={() => setFilters(prev => ({ ...prev, verdict }))}
                          className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 font-arabic ${
                            filters.verdict === verdict
                              ? 'bg-blue-600 text-white shadow-sm'
                              : `${style.bg} ${style.text} ${style.hover}`
                          }`}
                        >
                          <IconComponent className="w-3 h-3" />
                          {verdict}
                        </button>
                      );
                    })}

                    {/* Clear Filters Button */}
                    {(filters.category !== 'جميع الفئات' || filters.verdict !== 'جميع التصنيفات') && (
                      <>
                        <div className="h-6 w-px bg-gray-300 mx-2"></div>
                        <button
                          onClick={() => setFilters({
                            category: 'جميع الفئات',
                            verdict: 'جميع التصنيفات',
                            dateRange: 'جميع التواريخ',
                            sortBy: 'الأحدث'
                          })}
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium bg-gray-200 text-gray-600 hover:bg-gray-300 transition-colors font-arabic"
                        >
                          <RotateCcw className="w-3 h-3" />
                          مسح الكل
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Search Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/15 rounded-2xl p-4 text-center border border-white/30">
                <div className="text-2xl font-bold mb-1 text-white">50K+</div>
                <div className="text-sm text-white/90 font-arabic font-medium">تحقق مكتمل</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center border border-white/30">
                <div className="text-2xl font-bold mb-1 text-white">15</div>
                <div className="text-sm text-white/90 font-arabic font-medium">مجال متخصص</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center border border-white/30">
                <div className="text-2xl font-bold mb-1 text-white">98%</div>
                <div className="text-sm text-white/90 font-arabic font-medium">دقة التحقق</div>
              </div>
              <div className="bg-white/15 rounded-2xl p-4 text-center border border-white/30">
                <div className="text-2xl font-bold mb-1 text-white">24/7</div>
                <div className="text-sm text-white/90 font-arabic font-medium">تحديث مستمر</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Search Bar */}
      <div className={`fixed top-20 left-0 right-0 z-40 transition-all duration-300 ${
        showStickySearch ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white shadow-xl border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                {/* Compact Search Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="🤖 بحث ذكي..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-right text-gray-900 font-arabic"
                    dir="rtl"
                  />
                  <div className="absolute left-3 top-3">
                    <Bot className="w-5 h-5 text-blue-600" />
                  </div>
                </div>

                {/* Quick Filter Pills */}
                <div className="flex items-center gap-2">
                  {/* Category Filter */}
                  <select
                    value={filters.category}
                    onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                    className="px-3 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-arabic"
                  >
                    {categories.slice(0, 5).map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>

                  {/* Verdict Filter */}
                  <select
                    value={filters.verdict}
                    onChange={(e) => setFilters(prev => ({ ...prev, verdict: e.target.value }))}
                    className="px-3 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-arabic"
                  >
                    {verdictOptions.slice(0, 5).map(verdict => (
                      <option key={verdict} value={verdict}>{verdict}</option>
                    ))}
                  </select>

                  {/* Results Count */}
                  <div className="px-4 py-3 bg-blue-100 text-blue-800 rounded-xl text-sm font-bold font-arabic">
                    {filteredFactChecks.length} نتيجة
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">

          {/* Results Header */}
          <section className="mb-8">
            <div className="flex justify-between items-center bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <span className="text-primary-600 font-bold text-lg">{filteredFactChecks.length}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 font-arabic">نتائج البحث</div>
                  <div className="text-sm text-gray-600 font-arabic">
                    عرض {filteredFactChecks.length} من أصل {mockFactChecks.length} تحقق
                  </div>
                </div>
              </div>
              
              {filteredFactChecks.length > 0 && (
                <div className="flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-xl">
                  <TrendingUp className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-primary-700 font-medium font-arabic">نتائج عالية الدقة</span>
                </div>
              )}
            </div>
          </section>

          {/* Enhanced Results Grid */}
          {filteredFactChecks.length > 0 ? (
            <>
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {filteredFactChecks.map((factCheck, index) => (
                  <CompactCard 
                    key={factCheck.id}
                    factCheck={factCheck}
                    onClick={() => {
                      setSelectedArticle?.(factCheck);
                      setCurrentPage?.('article');
                    }}
                    featured={index === 0}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-primary-600 to-primary-600 text-white px-12 py-4 rounded-2xl hover:from-primary-700 hover:to-primary-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 font-arabic">
                  📥 تحميل المزيد من النتائج
                </button>
              </div>
            </>
          ) : (
            /* Enhanced Empty State */
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
                
                <div className="space-y-4">
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
                    className="bg-primary-600 text-white px-8 py-3 rounded-xl hover:bg-primary-700 transition-all duration-300 font-medium font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    🔄 مسح جميع المرشحات
                  </button>
                  
                  <div className="text-sm text-gray-500 font-arabic">
                    أو جرب البحث عن: 
                    <button 
                      onClick={() => setSearchQuery('كوفيد')}
                      className="text-primary-600 hover:text-primary-700 mx-1 underline"
                    >
                      كوفيد
                    </button>،
                    <button 
                      onClick={() => setSearchQuery('لقاحات')}
                      className="text-primary-600 hover:text-primary-700 mx-1 underline"
                    >
                      لقاحات
                    </button>، أو
                    <button 
                      onClick={() => setSearchQuery('اقتصاد')}
                      className="text-primary-600 hover:text-primary-700 mx-1 underline"
                    >
                      اقتصاد
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;