import React, { useState } from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';
import { FactCheck } from '../types';
import { mockFactChecks, categories, verdictOptions } from '../data/mockData';

interface SearchPageProps {
  // Add any props needed from parent
}

const SearchPage: React.FC<SearchPageProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [filters, setFilters] = useState({
    category: 'جميع الفئات',
    verdict: 'جميع التصنيفات',
    dateRange: 'جميع التواريخ',
    sortBy: 'الأحدث'
  });

  // Search functionality
  const searchSuggestions = searchQuery.length >= 2 
    ? mockFactChecks
        .filter(fc => fc.title.includes(searchQuery) || fc.summary.includes(searchQuery))
        .slice(0, 5)
        .map(fc => fc.title)
    : [];

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/20" dir="rtl">
      {/* Hero Search Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-32 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-32 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Search Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
              <Search className="w-12 h-12" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic-heading">
              🗃️ قاعدة بيانات التحققات
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-12 max-w-3xl mx-auto font-arabic">
              ابحث في أكبر أرشيف للتحققات في العالم العربي
              <br className="hidden md:block" />
              أكثر من 50,000 تحقق بتقنية الذكاء الاصطناعي
            </p>
            
            {/* Enhanced Search Bar */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 ابحث بالذكاء الاصطناعي... مثل: هل اللقاحات آمنة؟ أم معلومات عن تغيرات المناخ"
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
                  className="w-full pl-16 pr-6 py-5 text-lg bg-white/95 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-4 focus:ring-white/50 text-right text-gray-900 shadow-2xl"
                  dir="rtl"
                />
                <Search className="absolute left-6 top-6 h-6 w-6 text-primary-500" />
                
                {/* Advanced Search Suggestions */}
                {showSearchSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-2xl z-20 mt-2 border border-gray-200 max-h-64 overflow-y-auto">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-right px-6 py-4 hover:bg-primary-50 hover:text-primary-700 transition-colors text-sm border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                        dir="rtl"
                      >
                        <Search className="w-4 h-4 text-primary-400" />
                        <span className="font-arabic">{suggestion}</span>
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Quick Categories */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">
                🎯 ابحث حسب المجال
              </h2>
              <p className="text-gray-600 font-arabic">اختر المجال المناسب للبحث السريع</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {categories.slice(1).map((category, index) => {
                const categoryIcons = ['🩺', '💰', '🌍', '📚', '💻', '🏛️', '⚽', '🎭'];
                const categoryColors = [
                  'from-red-500 to-pink-500',
                  'from-green-500 to-emerald-500',
                  'from-primary-600 to-cyan-500',
                  'from-purple-500 to-violet-500',
                  'from-indigo-500 to-primary-600',
                  'from-yellow-500 to-orange-500',
                  'from-primary-900 to-success-500',
                  'from-pink-500 to-rose-500'
                ];
                
                return (
                  <button
                    key={category}
                    onClick={() => setFilters(prev => ({ ...prev, category }))}
                    className={`group p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                      filters.category === category
                        ? 'bg-primary-600 text-white shadow-xl'
                        : 'bg-white hover:bg-primary-50 text-gray-700 shadow-lg'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 text-xl bg-gradient-to-r ${
                      filters.category === category ? 'bg-white/20' : categoryColors[index % categoryColors.length]
                    }`}>
                      {categoryIcons[index % categoryIcons.length]}
                    </div>
                    <div className="font-medium font-arabic text-sm">{category}</div>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Advanced Filters */}
          <section className="mb-12">
            <div className="bg-white rounded-3xl shadow-xl p-8 border">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Verdict Filters */}
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-arabic">🔍 تصفية حسب نتيجة التحقق:</label>
                  <div className="flex flex-wrap gap-2">
                    {verdictOptions.map((verdict, index) => {
                      const verdictIcons = ['🔄', '✅', '❌', '⚠️', '❓'];
                      const verdictColors = [
                        'bg-gray-100 text-gray-700 hover:bg-gray-200',
                        'bg-success-100 text-success-800 hover:bg-success-200',
                        'bg-danger-100 text-danger-800 hover:bg-danger-200',
                        'bg-warning-100 text-warning-800 hover:bg-warning-200',
                        'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      ];
                      
                      return (
                        <button
                          key={verdict}
                          onClick={() => setFilters(prev => ({ ...prev, verdict }))}
                          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 font-arabic ${
                            filters.verdict === verdict
                              ? 'bg-primary-600 text-white shadow-lg'
                              : verdictColors[index]
                          }`}
                        >
                          {verdictIcons[index]} {verdict}
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                {/* Sort Options */}
                <div className="lg:w-64">
                  <label className="block text-sm font-semibold text-gray-700 mb-3 font-arabic">📊 ترتيب النتائج:</label>
                  <select
                    value={filters.sortBy}
                    onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
                  >
                    {['الأحدث', 'الأقدم', 'الأكثر مشاهدة', 'الأقل مشاهدة'].map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                {/* Advanced Filter Button */}
                <button 
                  className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center gap-2 font-medium font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Filter className="w-5 h-5" />
                  فلاتر متقدمة
                </button>
              </div>
            </div>
          </section>

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

          {/* Results Grid */}
          {filteredFactChecks.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
                {filteredFactChecks.map((factCheck) => (
                  <article 
                    key={factCheck.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 cursor-pointer"
                  >
                    <div className="relative">
                      <img 
                        src={factCheck.image} 
                        alt=""
                        className="w-full h-48 object-cover"
                      />
                      {factCheck.featured && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-warning-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            ⭐ مميز
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium font-arabic">
                          {factCheck.verdict === 'true' ? '✓ صحيح' : 
                           factCheck.verdict === 'false' ? '✗ زائف' :
                           factCheck.verdict === 'misleading' ? '⚠ مضلل' : '? غير مثبت'}
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-full font-arabic">
                          {factCheck.category}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight font-arabic-heading line-clamp-2">
                        {factCheck.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 font-arabic">
                        {factCheck.summary}
                      </p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-arabic">{factCheck.author}</span>
                        <span>{factCheck.views.toLocaleString()} مشاهدة</span>
                      </div>
                    </div>
                  </article>
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