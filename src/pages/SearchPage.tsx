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
  const [filters, setFilters] = useState({
    category: 'جميع الفئات',
    verdict: 'جميع التصنيفات',
    dateRange: 'جميع التواريخ',
    sortBy: 'الأحدث'
  });

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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        {/* Decorative Background - matching home page */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
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
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
                <Bot className="w-4 h-4 text-cyan-400" />
                بحث ذكي بالذكاء الاصطناعي
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
                <Database className="w-4 h-4 text-green-400" />
                +50,000 تحقق
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                نتائج فورية
              </span>
            </div>
            
            {/* Enhanced AI Search Bar */}
            <div className="relative max-w-4xl mx-auto mb-12">
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
                  className="w-full pl-20 pr-6 py-6 text-lg bg-white/95 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-400/50 focus:bg-white text-right text-gray-900 shadow-2xl border border-white/20 font-arabic"
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
                  <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-2xl z-30 mt-2 border border-gray-200 max-h-80 overflow-y-auto">
                    <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
                      <div className="flex items-center gap-3 text-sm text-blue-700 font-arabic">
                        <Brain className="w-5 h-5 text-purple-600 animate-pulse" />
                        الذكاء الاصطناعي يقترح:
                        <Sparkles className="w-4 h-4 text-cyan-500" />
                      </div>
                    </div>
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-right px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 transition-all duration-300 text-base border-b border-gray-100 last:border-b-0 flex items-center gap-3 group"
                        dir="rtl"
                      >
                        <div className="w-6 h-6 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center transition-colors duration-200">
                          <Bot className="text-blue-600 text-sm w-4 h-4" />
                        </div>
                        <span className="font-arabic font-medium flex-1">{suggestion}</span>
                        <div className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full font-arabic opacity-0 group-hover:opacity-100 transition-opacity">
                          ذكي
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Search Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">50K+</div>
                <div className="text-sm opacity-90 font-arabic">تحقق مكتمل</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">15</div>
                <div className="text-sm opacity-90 font-arabic">مجال متخصص</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">98%</div>
                <div className="text-sm opacity-90 font-arabic">دقة التحقق</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90 font-arabic">تحديث مستمر</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Sticky Filter Bar */}
          <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200 pb-6 mb-10 shadow-sm">
            {/* Quick Categories */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <Filter className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-gray-900 font-arabic">التصنيفات</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 6).map((category, index) => {
                  const categoryIcons = [
                    { icon: Database, color: 'blue' },
                    { icon: Heart, color: 'red' },
                    { icon: DollarSign, color: 'green' },
                    { icon: Globe2, color: 'cyan' },
                    { icon: BookOpen, color: 'purple' },
                    { icon: Laptop, color: 'indigo' },
                    { icon: Building2, color: 'yellow' },
                    { icon: Activity, color: 'pink' }
                  ];
                  
                  const categoryInfo = categoryIcons[index] || categoryIcons[0];
                  const IconComponent = categoryInfo.icon;
                  
                  return (
                    <button
                      key={category}
                      onClick={() => setFilters(prev => ({ ...prev, category }))}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 font-arabic ${
                        filters.category === category
                          ? 'bg-blue-600 text-white shadow-md'
                          : categoryInfo.color === 'blue' ? 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200' :
                            categoryInfo.color === 'red' ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200' :
                            categoryInfo.color === 'green' ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200' :
                            categoryInfo.color === 'cyan' ? 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200' :
                            categoryInfo.color === 'purple' ? 'bg-purple-50 text-purple-700 hover:bg-purple-100 border border-purple-200' :
                            categoryInfo.color === 'indigo' ? 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200' :
                            categoryInfo.color === 'yellow' ? 'bg-yellow-50 text-yellow-700 hover:bg-yellow-100 border border-yellow-200' :
                            'bg-pink-50 text-pink-700 hover:bg-pink-100 border border-pink-200'
                      }`}
                    >
                      <IconComponent className={`w-4 h-4 ${filters.category === category ? 'text-white' : 
                        categoryInfo.color === 'blue' ? 'text-blue-600' :
                        categoryInfo.color === 'red' ? 'text-red-600' :
                        categoryInfo.color === 'green' ? 'text-green-600' :
                        categoryInfo.color === 'cyan' ? 'text-cyan-600' :
                        categoryInfo.color === 'purple' ? 'text-purple-600' :
                        categoryInfo.color === 'indigo' ? 'text-indigo-600' :
                        categoryInfo.color === 'yellow' ? 'text-yellow-600' :
                        'text-pink-600'}`} />
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Verdict Filters */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-gray-900 font-arabic">التحقق:</span>
                {verdictOptions.slice(1).map((verdict, index) => {
                  const verdictIcons = [CheckCircle, XCircle, AlertCircle, HelpCircle];
                  const verdictColors = ['green', 'red', 'orange', 'gray'];
                  
                  const IconComponent = verdictIcons[index] || HelpCircle;
                  const color = verdictColors[index] || 'gray';
                  
                  return (
                    <button
                      key={verdict}
                      onClick={() => setFilters(prev => ({ ...prev, verdict }))}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 font-arabic ${
                        filters.verdict === verdict
                          ? 'bg-blue-600 text-white shadow-sm'
                          : color === 'green' ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200' :
                            color === 'red' ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200' :
                            color === 'orange' ? 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200' :
                            'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      <IconComponent className={`w-3 h-3 ${filters.verdict === verdict ? 'text-white' : 
                        color === 'green' ? 'text-green-600' :
                        color === 'red' ? 'text-red-600' :
                        color === 'orange' ? 'text-orange-600' :
                        'text-gray-600'}`} />
                      {verdict}
                    </button>
                  );
                })}
              </div>

              {/* Active Filters & Clear */}
              <div className="flex items-center gap-2">
                {(filters.category !== 'جميع الفئات' || filters.verdict !== 'جميع التصنيفات') && (
                  <>
                    <span className="text-xs text-gray-500 font-arabic">
                      {filteredFactChecks.length} نتيجة
                    </span>
                    <button
                      onClick={() => setFilters({
                        category: 'جميع الفئات',
                        verdict: 'جميع التصنيفات',
                        dateRange: 'جميع التواريخ',
                        sortBy: 'الأحدث'
                      })}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors font-arabic"
                    >
                      <RotateCcw className="w-3 h-3" />
                      مسح
                    </button>
                  </>
                )}
                
                {/* Sort Dropdown */}
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                  className="px-3 py-1.5 text-xs border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white font-arabic"
                >
                  {['الأحدث', 'الأقدم', 'الأكثر مشاهدة', 'الأقل مشاهدة'].map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

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