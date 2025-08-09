import React, { useState, useMemo } from 'react';
import { Search, Menu, X, ExternalLink, Calendar, User, BookOpen, MessageCircle, CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronDown, Filter, Plus, TrendingUp, Eye, Clock, Star, Users, Award, Send, Bell, Globe, Shield } from 'lucide-react';
import { FactCheck, Course, FilterOptions, NewsSubmission } from './types';
import { mockFactChecks, mockCourses, categories, verdictOptions } from './data/mockData';
import SubmissionModal from './components/SubmissionModal';
import FilterPanel from './components/FilterPanel';
import LazyImage from './components/LazyImage';
import { semanticSearch, getSearchSuggestions } from './utils/search';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'article' | 'search' | 'academy' | 'about' | 'contact'>('home');
  const [selectedArticle, setSelectedArticle] = useState<FactCheck | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  
  const [filters, setFilters] = useState<FilterOptions>({
    category: 'جميع الفئات',
    verdict: 'جميع التصنيفات',
    dateRange: 'جميع التواريخ',
    sortBy: 'الأحدث'
  });

  // Enhanced search and filter fact checks
  const filteredFactChecks = useMemo(() => {
    let searchResults = mockFactChecks;
    
    // Apply semantic search if query exists
    if (searchQuery.trim()) {
      searchResults = semanticSearch(searchQuery, mockFactChecks);
    }
    
    // Apply category filter
    if (filters.category !== 'جميع الفئات') {
      searchResults = searchResults.filter(factCheck => factCheck.category === filters.category);
    }
    
    // Apply verdict filter
    if (filters.verdict !== 'جميع التصنيفات') {
      searchResults = searchResults.filter(factCheck => {
        return (filters.verdict === 'صحيح' && factCheck.verdict === 'true') ||
               (filters.verdict === 'زائف' && factCheck.verdict === 'false') ||
               (filters.verdict === 'مضلل' && factCheck.verdict === 'misleading') ||
               (filters.verdict === 'غير مثبت' && factCheck.verdict === 'unproven');
      });
    }

    // Sort results
    const sortedResults = [...searchResults];
    switch (filters.sortBy) {
      case 'الأقدم':
        sortedResults.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'الأكثر مشاهدة':
        sortedResults.sort((a, b) => b.views - a.views);
        break;
      case 'الأقل مشاهدة':
        sortedResults.sort((a, b) => a.views - b.views);
        break;
      default: // الأحدث
        // If we have search results, keep semantic search order, otherwise sort by date
        if (!searchQuery.trim()) {
          sortedResults.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        }
    }

    return sortedResults;
  }, [searchQuery, filters]);

  const handleSubmission = (submission: NewsSubmission) => {
    console.log('New submission:', submission);
    // Here you would typically send to your backend
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length >= 2) {
      const suggestions = getSearchSuggestions(query, mockFactChecks);
      setSearchSuggestions(suggestions);
      setShowSearchSuggestions(suggestions.length > 0);
    } else {
      setShowSearchSuggestions(false);
      setSearchSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
    setSearchSuggestions([]);
  };

  // Breadcrumb Navigation Component
  const Breadcrumb = () => {
    const getBreadcrumbItems = () => {
      const items = [{ label: 'الرئيسية', page: 'home' as const }];
      
      if (currentPage === 'search') {
        items.push({ label: 'قاعدة البيانات', page: 'search' as const });
      } else if (currentPage === 'academy') {
        items.push({ label: 'أكاديمية التحقق', page: 'academy' as const });
      } else if (currentPage === 'about') {
        items.push({ label: 'حولنا', page: 'about' as const });
      } else if (currentPage === 'contact') {
        items.push({ label: 'اتصل بنا', page: 'contact' as const });
      } else if (currentPage === 'article' && selectedArticle) {
        items.push({ label: 'قاعدة البيانات', page: 'search' as const });
        items.push({ label: selectedArticle.title, page: 'article' as const });
      }
      
      return items;
    };

    const items = getBreadcrumbItems();
    
    if (items.length <= 1) return null;

    return (
      <nav className="bg-gray-50 border-b border-gray-200" dir="rtl">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronDown className="w-4 h-4 text-gray-400 rotate-90 rtl-flip" />
                )}
                <button
                  onClick={() => setCurrentPage(item.page)}
                  className={`font-arabic transition-colors ${
                    index === items.length - 1
                      ? 'text-primary-600 font-medium'
                      : 'text-gray-600 hover:text-primary-600'
                  } ${index === items.length - 1 ? 'cursor-default' : 'hover:underline'}`}
                  disabled={index === items.length - 1}
                >
                  {index === items.length - 1 && item.page === 'article' 
                    ? item.label.slice(0, 50) + (item.label.length > 50 ? '...' : '')
                    : item.label
                  }
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>
    );
  };

  // Verdict Component
  const VerdictBadge: React.FC<{ verdict: FactCheck['verdict']; size?: 'sm' | 'md' | 'lg' }> = ({ verdict, size = 'md' }) => {
    const getVerdictConfig = (verdict: string) => {
      switch (verdict) {
        case 'true':
          return { color: 'bg-success-100 text-success-800 border-success-200', icon: CheckCircle, text: 'صحيح' };
        case 'false':
          return { color: 'bg-danger-100 text-danger-800 border-danger-200', icon: XCircle, text: 'زائف' };
        case 'misleading':
          return { color: 'bg-warning-100 text-warning-800 border-warning-200', icon: AlertCircle, text: 'مضلل' };
        case 'unproven':
          return { color: 'bg-gray-100 text-gray-800 border-gray-200', icon: HelpCircle, text: 'غير مثبت' };
        default:
          return { color: 'bg-gray-100 text-gray-800 border-gray-200', icon: HelpCircle, text: 'غير محدد' };
      }
    };

    const config = getVerdictConfig(verdict);
    const Icon = config.icon;
    
    const sizeClasses = {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1.5 text-sm',
      lg: 'px-4 py-2 text-base'
    };

    const iconSizes = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5'
    };

    return (
      <div className={`inline-flex items-center gap-2 rounded-full border font-semibold ${config.color} ${sizeClasses[size]}`}>
        <Icon className={iconSizes[size]} />
        {config.text}
      </div>
    );
  };

  // Enhanced Verdict Card Component
  const VerdictCard: React.FC<{ factCheck: FactCheck; onClick: () => void; featured?: boolean }> = ({ factCheck, onClick, featured = false }) => (
    <article 
      className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group ${
        featured ? 'ring-2 ring-blue-100' : ''
      }`}
      onClick={onClick}
    >
      <div className="aspect-video overflow-hidden relative">
        <LazyImage 
          src={factCheck.image} 
          alt=""
          className="w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
            مميز
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
          {factCheck.readTime}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <VerdictBadge verdict={factCheck.verdict} />
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
            {factCheck.category}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary-600 transition-colors">
          {factCheck.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
          {factCheck.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {factCheck.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs bg-primary-50 text-primary-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {factCheck.author}
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {factCheck.views.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(factCheck.date).toLocaleDateString('ar-SA')}
            </div>
          </div>
        </div>
      </div>
    </article>
  );

  // Enhanced Course Card Component with Modern Design
  const CourseCard: React.FC<{ course: Course; featured?: boolean }> = ({ course, featured = false }) => (
    <div className={`group bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
      featured ? 'border-primary-200 ring-2 ring-primary-100' : 'border-gray-200'
    }`}>
      {/* Course Image with Overlay */}
      <div className="relative aspect-video overflow-hidden">
        <LazyImage 
          src={course.image} 
          alt={course.title}
          className="w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Level Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm ${
            course.level === 'مبتدئ' ? 'bg-success-500/90 text-white' :
            course.level === 'متوسط' ? 'bg-primary-500/90 text-white' :
            'bg-purple-500/90 text-white'
          }`}>
            {course.level}
          </span>
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 left-4">
            <span className="bg-warning-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              ⭐ مميز
            </span>
          </div>
        )}
        
        {/* Duration Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            <Clock className="inline w-3 h-3 ml-1" />
            {course.duration}
          </span>
        </div>
        
        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4">
          <span className="bg-warning-500/90 text-white px-3 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
            <Star className="inline w-3 h-3 ml-1 fill-current" />
            {course.rating}
          </span>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="p-8">
        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary-600 transition-colors font-arabic-heading">
          {course.title}
        </h3>
        
        {/* Course Description */}
        <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3 font-arabic">
          {course.description}
        </p>
        
        {/* Course Stats */}
        <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary-500" />
              <span className="font-medium">{course.students.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-primary-500" />
              <span className="font-medium font-arabic">{course.instructor}</span>
            </div>
          </div>
        </div>
        
        {/* Progress Bar (Mock) */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600 font-arabic">التقدم في الدورة</span>
            <span className="text-sm font-bold text-primary-600">0%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full w-0 transition-all duration-300 group-hover:w-2"></div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 font-bold font-arabic shadow-lg hover:shadow-xl transform hover:scale-105">
            🚀 ابدأ التعلم الآن
          </button>
          
          <div className="flex gap-3">
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors font-medium font-arabic">
              📋 المنهج
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors font-medium font-arabic">
              👥 المجتمع
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Navigation Component with RTL Support
  const Navigation = () => (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95 nav-shadow" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Right side in RTL */}
          <div className="flex items-center gap-3 order-1">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 font-arabic">تحقق</span>
              <div className="text-xs text-gray-500 font-arabic">منصة التحقق من المعلومات</div>
            </div>
          </div>

          {/* Desktop Navigation - Center in RTL */}
          <nav className="hidden lg:flex items-center gap-6 order-2">
            <button 
              onClick={() => setCurrentPage('home')}
              className={`font-medium font-arabic transition-all duration-300 relative px-4 py-2 rounded-lg ${
                currentPage === 'home' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              الرئيسية
              {currentPage === 'home' && (
                <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-8 h-0.5 bg-primary-600 rounded-full" />
              )}
            </button>
            
            <button 
              onClick={() => setCurrentPage('search')}
              className={`font-medium font-arabic transition-all duration-300 relative px-4 py-2 rounded-lg ${
                currentPage === 'search' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              قاعدة البيانات
              {currentPage === 'search' && (
                <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-8 h-0.5 bg-primary-600 rounded-full" />
              )}
            </button>
            
            <button 
              onClick={() => setCurrentPage('academy')}
              className={`font-medium font-arabic transition-all duration-300 relative px-4 py-2 rounded-lg ${
                currentPage === 'academy' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              أكاديمية التحقق
              {currentPage === 'academy' && (
                <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-8 h-0.5 bg-primary-600 rounded-full" />
              )}
            </button>
            
            <div className="w-px h-6 bg-gray-300"></div>
            
            <button 
              onClick={() => setCurrentPage('about')}
              className={`font-medium font-arabic transition-all duration-300 relative px-4 py-2 rounded-lg ${
                currentPage === 'about' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              حولنا
              {currentPage === 'about' && (
                <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-8 h-0.5 bg-primary-600 rounded-full" />
              )}
            </button>
            
            <button 
              onClick={() => setCurrentPage('contact')}
              className={`font-medium font-arabic transition-all duration-300 relative px-4 py-2 rounded-lg ${
                currentPage === 'contact' 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              اتصل بنا
              {currentPage === 'contact' && (
                <div className="absolute -bottom-1 right-1/2 transform translate-x-1/2 w-8 h-0.5 bg-primary-600 rounded-full" />
              )}
            </button>
          </nav>

          {/* Action Buttons - Left side in RTL */}
          <div className="hidden lg:flex items-center gap-3 order-3">
            <button className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300" title="الإشعارات">
              <Bell className="w-5 h-5" />
            </button>

            <button className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300" title="اللغة">
              <Globe className="w-5 h-5" />
            </button>
            
            <div className="w-px h-8 bg-gray-300 mx-2"></div>
            
            <button className="bg-success-600 text-white px-4 py-2.5 rounded-xl hover:bg-success-700 transition-all duration-300 flex items-center gap-2 font-medium font-arabic shadow-lg hover:shadow-xl">
              <MessageCircle className="w-4 h-4" />
              واتساب
            </button>

            <button 
              onClick={() => setIsSubmissionModalOpen(true)}
              className="bg-danger-600 text-white px-5 py-2.5 rounded-xl hover:bg-danger-700 transition-all duration-300 flex items-center gap-2 font-medium font-arabic hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Plus className="w-4 h-4" />
              أرسل للتحقق
            </button>
          </div>

          {/* Mobile Menu Button - Left side for RTL */}
          <button 
            className="lg:hidden p-3 hover:bg-primary-50 rounded-xl transition-all duration-300 order-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-primary-600" /> : <Menu className="w-6 h-6 text-gray-600" />}
          </button>
        </div>

        {/* Enhanced Mobile Menu with RTL Support */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-2">
                {/* Main Navigation */}
                <button 
                  onClick={() => { setCurrentPage('home'); setIsMenuOpen(false); }}
                  className={`text-right font-medium font-arabic py-3 px-4 rounded-xl transition-all duration-300 ${
                    currentPage === 'home' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  🏠 الرئيسية
                </button>
                
                <button 
                  onClick={() => { setCurrentPage('search'); setIsMenuOpen(false); }}
                  className={`text-right font-medium font-arabic py-3 px-4 rounded-xl transition-all duration-300 ${
                    currentPage === 'search' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  🔍 قاعدة البيانات
                </button>
                
                <button 
                  onClick={() => { setCurrentPage('academy'); setIsMenuOpen(false); }}
                  className={`text-right font-medium font-arabic py-3 px-4 rounded-xl transition-all duration-300 ${
                    currentPage === 'academy' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  🎓 أكاديمية التحقق
                </button>
                
                <div className="border-t border-gray-200 my-4"></div>
                
                <button 
                  onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
                  className={`text-right font-medium font-arabic py-3 px-4 rounded-xl transition-all duration-300 ${
                    currentPage === 'about' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  ℹ️ حولنا
                </button>
                
                <button 
                  onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }}
                  className={`text-right font-medium font-arabic py-3 px-4 rounded-xl transition-all duration-300 ${
                    currentPage === 'contact' 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  📞 اتصل بنا
                </button>
                
                {/* Action Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <button 
                    onClick={() => { setIsSubmissionModalOpen(true); setIsMenuOpen(false); }}
                    className="w-full bg-danger-600 text-white px-5 py-4 rounded-xl hover:bg-danger-700 transition-all duration-300 flex items-center justify-center gap-3 font-medium font-arabic shadow-lg"
                  >
                    <Plus className="w-5 h-5" />
                    أرسل للتحقق
                  </button>
                  
                  <button className="w-full bg-success-600 text-white px-5 py-4 rounded-xl hover:bg-success-700 transition-all duration-300 flex items-center justify-center gap-3 font-medium font-arabic shadow-lg">
                    <MessageCircle className="w-5 h-5" />
                    تواصل عبر واتساب
                  </button>
                  
                  <div className="flex justify-center gap-4 pt-2">
                    <button className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300" title="الإشعارات">
                      <Bell className="w-6 h-6" />
                    </button>
                    <button className="p-3 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300" title="اللغة">
                      <Globe className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Enhanced Homepage Component
  const Homepage = () => (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-teal-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-white opacity-5 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal-400 opacity-10 rounded-full"></div>
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-800 bg-opacity-50 px-4 py-2 rounded-full text-sm mb-6">
              <TrendingUp className="w-4 h-4" />
              أكثر من 50,000 تحقق تم إنجازه
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              منصة تأكد للتحقق من المعلومات
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
              نساعدك في التمييز بين الحقيقة والأخبار المزيفة من خلال التحقق المهني والشفاف المبني على الأدلة العلمية
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button 
                onClick={() => setCurrentPage('search')}
                className="bg-white text-primary-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 text-lg shadow-lg hover:scale-105"
              >
                ابحث في قاعدة البيانات
              </button>
              <button 
                onClick={() => setIsSubmissionModalOpen(true)}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary-900 transition-all duration-300 text-lg hover:scale-105"
              >
                أبلغ عن معلومة مشكوك فيها
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold">50K+</div>
                <div className="text-sm opacity-80">تحقق مكتمل</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">15K+</div>
                <div className="text-sm opacity-80">مستخدم نشط</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm opacity-80">دقة التحقق</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm opacity-80">خدمة مستمرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="ابحث في التحققات... (جرب: كوفيد، لقاحات، اقتصاد)"
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
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-right"
                  dir="rtl"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                
                {showSearchSuggestions && searchSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-10 mt-1">
                    {searchSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-right px-4 py-2 hover:bg-primary-50 hover:text-primary-600 transition-colors text-sm border-b border-gray-100 last:border-b-0"
                        dir="rtl"
                      >
                        <Search className="inline w-3 h-3 ml-2" />
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              {categories.slice(1, 6).map((category) => (
                <button
                  key={category}
                  onClick={() => setFilters(prev => ({ ...prev, category }))}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.category === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
              <button
                onClick={() => setIsFilterPanelOpen(true)}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                المزيد
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Fact Check */}
      {mockFactChecks.find(fc => fc.featured) && (
        <section className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <LazyImage 
                  src={mockFactChecks.find(fc => fc.featured)!.image} 
                  alt=""
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <VerdictBadge verdict={mockFactChecks.find(fc => fc.featured)!.verdict} size="lg" />
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    مميز
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {mockFactChecks.find(fc => fc.featured)!.title}
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {mockFactChecks.find(fc => fc.featured)!.summary}
                </p>

                <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {mockFactChecks.find(fc => fc.featured)!.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {mockFactChecks.find(fc => fc.featured)!.views.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {mockFactChecks.find(fc => fc.featured)!.readTime}
                  </div>
                </div>
                
                <button 
                  onClick={() => {
                    setSelectedArticle(mockFactChecks.find(fc => fc.featured)!);
                    setCurrentPage('article');
                  }}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center gap-2"
                >
                  اقرأ التحقق كاملاً
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recent Fact Checks */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">أحدث التحققات</h2>
          <button 
            onClick={() => setCurrentPage('search')}
            className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2"
          >
            عرض الكل
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFactChecks.slice(0, 6).map((factCheck) => (
            <VerdictCard 
              key={factCheck.id} 
              factCheck={factCheck}
              onClick={() => {
                setSelectedArticle(factCheck);
                setCurrentPage('article');
              }}
              featured={factCheck.featured}
            />
          ))}
        </div>

        {filteredFactChecks.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد نتائج</h3>
            <p className="text-gray-500">جرب تغيير معايير البحث أو المرشحات</p>
          </div>
        )}
      </section>

      {/* Academy CTA */}
      <section className="bg-gradient-to-r from-primary-50 to-teal-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              أكاديمية تأكد للتعليم
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              تعلم مهارات التحقق من المعلومات والإعلام الرقمي من خلال دوراتنا المجانية المصممة من قبل خبراء في المجال
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => setCurrentPage('academy')}
                className="bg-primary-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors text-lg"
              >
                استكشف الدورات
              </button>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  +5000 متدرب
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  شهادات معتمدة
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  // Article Page Component (keeping existing implementation)
  const ArticlePage = () => {
    if (!selectedArticle) return null;

    const getVerdictBoxConfig = (verdict: string) => {
      switch (verdict) {
        case 'true':
          return { 
            bg: 'bg-success-50 border-success-300', 
            icon: CheckCircle, 
            iconColor: 'text-success-600',
            title: 'التحقق: صحيح',
            description: 'تم التحقق من صحة هذه المعلومة بناءً على الأدلة المتاحة والمصادر الموثوقة',
            gradientBg: 'bg-gradient-to-r from-success-500 to-success-600'
          };
        case 'false':
          return { 
            bg: 'bg-danger-50 border-danger-300', 
            icon: XCircle, 
            iconColor: 'text-danger-600',
            title: 'التحقق: زائف',
            description: 'هذه المعلومة غير صحيحة ومضللة وقد تم دحضها بالأدلة العلمية',
            gradientBg: 'bg-gradient-to-r from-danger-500 to-danger-600'
          };
        case 'misleading':
          return { 
            bg: 'bg-warning-50 border-warning-300', 
            icon: AlertCircle, 
            iconColor: 'text-warning-600',
            title: 'التحقق: مضلل',
            description: 'تحتوي على معلومات صحيحة جزئياً ولكنها مضللة في السياق العام',
            gradientBg: 'bg-gradient-to-r from-warning-500 to-warning-600'
          };
        default:
          return { 
            bg: 'bg-gray-50 border-gray-300', 
            icon: HelpCircle, 
            iconColor: 'text-gray-600',
            title: 'التحقق: غير مثبت',
            description: 'لا توجد أدلة كافية للتحقق من صحة هذه المعلومة في الوقت الحالي',
            gradientBg: 'bg-gradient-to-r from-gray-500 to-gray-600'
          };
      }
    };

    const config = getVerdictBoxConfig(selectedArticle.verdict);
    const Icon = config.icon;

    return (
      <div className="min-h-screen bg-gray-50" dir="rtl">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <button 
              onClick={() => setCurrentPage('home')}
              className="mb-6 text-primary-600 hover:text-primary-700 flex items-center gap-2"
            >
              <ChevronDown className="w-4 h-4 rotate-90" />
              العودة للرئيسية
            </button>

            {/* Enhanced Verdict Box */}
            <div className={`${config.bg} border-2 rounded-2xl overflow-hidden mb-8 shadow-lg`}>
              {/* Gradient Header */}
              <div className={`${config.gradientBg} p-6`}>
                <div className="flex items-center gap-4 text-white">
                  <Icon className="w-16 h-16 flex-shrink-0" />
                  <div>
                    <h1 className="text-3xl font-bold mb-1">
                      {config.title}
                    </h1>
                    <p className="text-lg opacity-90">
                      نتيجة التحقق النهائية
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">ملخص التحقق:</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {config.description}
                  </p>
                </div>
                
                {/* Claim Summary */}
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">الادعاء الأصلي:</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedArticle.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article className="bg-white rounded-2xl shadow-sm p-8">
              {/* Article Header */}
              <div className="border-b border-gray-200 pb-8 mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <VerdictBadge verdict={selectedArticle.verdict} />
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {selectedArticle.category}
                  </span>
                </div>
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex items-center gap-6 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>بواسطة {selectedArticle.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>نُشر في {new Date(selectedArticle.date).toLocaleDateString('ar-SA')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    <span>{selectedArticle.views.toLocaleString()} مشاهدة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((tag, index) => (
                    <span key={index} className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Article Image */}
              <div className="mb-8 rounded-xl overflow-hidden">
                <LazyImage 
                  src={selectedArticle.image} 
                  alt=""
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Article Sections */}
              <div className="prose prose-lg max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">الادعاء</h2>
                  <div className="bg-gray-50 p-6 rounded-xl border-r-4 border-primary-600">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedArticle.summary}
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">تحقيقنا</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    قام فريق التحقق لدينا بإجراء تحليل شامل لهذا الادعاء من خلال مراجعة المصادر المتاحة والتحقق من الحقائق. 
                    تم الاستعانة بخبراء متخصصين في المجال لضمان دقة التحليل.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    شمل التحقيق مراجعة الأدبيات العلمية، والتواصل مع المؤسسات الرسمية، والاطلاع على التقارير الحديثة في هذا المجال.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">الأدلة</h2>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      تقرير منظمة الصحة العالمية حول هذا الموضوع
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      دراسات علمية محكمة منشورة في مجلات معتمدة
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      بيانات رسمية من الجهات الحكومية المختصة
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">الخلاصة</h2>
                  <div className={`${config.bg} p-6 rounded-xl border`}>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      بناءً على التحقيق الشامل والأدلة المتوفرة، تم تصنيف هذا الادعاء كـ "{config.title.split(': ')[1]}". 
                      ننصح القراء بالتحقق من المصادر الموثوقة قبل مشاركة أي معلومات.
                    </p>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    );
  };

  // Modern Database/Search Page Component
  const SearchPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/20" dir="rtl">
      {/* Hero Search Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-teal-700 text-white py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-32 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-32 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
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
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-violet-500',
                  'from-indigo-500 to-blue-500',
                  'from-yellow-500 to-orange-500',
                  'from-teal-500 to-green-500',
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
                  onClick={() => setIsFilterPanelOpen(true)}
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
                  <VerdictCard 
                    key={factCheck.id} 
                    factCheck={factCheck}
                    onClick={() => {
                      setSelectedArticle(factCheck);
                      setCurrentPage('article');
                    }}
                    featured={factCheck.featured}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-primary-600 to-teal-600 text-white px-12 py-4 rounded-2xl hover:from-primary-700 hover:to-teal-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 font-arabic">
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
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-teal-100 rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-16 h-16 text-primary-400" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-teal-200 rounded-full animate-ping opacity-20"></div>
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

  // Modern Academy Page Component with Enhanced Design
  const AcademyPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30" dir="rtl">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-teal-700 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Icon */}
            <div className="inline-flex items-center justify-center w-28 h-28 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
              <BookOpen className="w-16 h-16" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-arabic-heading">
              🎓 أكاديمية التحقق
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-12 max-w-4xl mx-auto font-arabic">
              منصتك الشاملة لتعلم مهارات التحقق من المعلومات ومكافحة الأخبار المزيفة. 
              <br className="hidden md:block" />
              دورات مجانية عالية الجودة من خبراء متخصصين في المجال
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="bg-white text-primary-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 font-arabic">
                🚀 ابدأ رحلة التعلم
              </button>
              
              <button className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 transform hover:scale-105 font-arabic">
                📚 تصفح الدورات
              </button>
            </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">5K+</div>
                <div className="text-sm opacity-90 font-arabic">متدرب نشط</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-sm opacity-90 font-arabic">دورة شاملة</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">4.9</div>
                <div className="text-sm opacity-90 font-arabic">تقييم ممتاز</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm opacity-90 font-arabic">مجاني تماماً</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Learning Paths Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                🎯 مسارات التعلم
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                اختر المسار المناسب لك واكتسب المهارات اللازمة لتصبح خبيراً في التحقق من المعلومات
              </p>
            </div>

            {/* Learning Path Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-success-50 to-success-100 rounded-3xl p-8 border border-success-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-success-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🌱</span>
                  </div>
                  <h3 className="text-xl font-bold text-success-800 font-arabic-heading">مسار المبتدئين</h3>
                </div>
                <ul className="space-y-3 text-success-700 font-arabic">
                  <li className="flex items-center gap-2">✓ أساسيات التحقق من المعلومات</li>
                  <li className="flex items-center gap-2">✓ التعرف على الأخبار المزيفة</li>
                  <li className="flex items-center gap-2">✓ استخدام أدوات التحقق الأساسية</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 border border-primary-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 font-arabic-heading">مسار المتقدمين</h3>
                </div>
                <ul className="space-y-3 text-primary-700 font-arabic">
                  <li className="flex items-center gap-2">✓ التحليل المتقدم للمحتوى</li>
                  <li className="flex items-center gap-2">✓ تقنيات التحقق الرقمية</li>
                  <li className="flex items-center gap-2">✓ التحقق من الصور والفيديو</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 border border-purple-200">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">🏆</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800 font-arabic-heading">مسار الخبراء</h3>
                </div>
                <ul className="space-y-3 text-purple-700 font-arabic">
                  <li className="flex items-center gap-2">✓ قيادة فرق التحقق</li>
                  <li className="flex items-center gap-2">✓ إنشاء منهجيات التحقق</li>
                  <li className="flex items-center gap-2">✓ تدريب المحققين الجدد</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Featured Courses */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                ⭐ الدورات المميزة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                دورات عالية الجودة تم تطويرها من قبل خبراء معتمدين في مجال التحقق من المعلومات
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 mb-12">
              {mockCourses.map((course, index) => (
                <CourseCard key={course.id} course={course} featured={index === 0} />
              ))}
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border">
              <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center font-arabic-heading">
                🎯 لماذا أكاديمية التحقق؟
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">محتوى عالي الجودة</h3>
                  <p className="text-gray-600 font-arabic">دورات مصممة من قبل خبراء معتمدين في مجال التحقق</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-success-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🆓</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">مجاني بالكامل</h3>
                  <p className="text-gray-600 font-arabic">جميع دوراتنا متاحة مجاناً لخدمة المجتمع العربي</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-warning-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏅</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">شهادات معتمدة</h3>
                  <p className="text-gray-600 font-arabic">احصل على شهادات معتمدة تعزز من مهاراتك المهنية</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">مجتمع نشط</h3>
                  <p className="text-gray-600 font-arabic">انضم إلى مجتمع من المحققين المحترفين والمتعلمين</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">تعلم أينما كنت</h3>
                  <p className="text-gray-600 font-arabic">منصة متجاوبة تعمل على جميع الأجهزة والشاشات</p>
                </div>

                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-danger-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">تحديث مستمر</h3>
                  <p className="text-gray-600 font-arabic">محتوى يتم تحديثه باستمرار لمواكبة أحدث التقنيات</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-primary-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl">
              <h3 className="text-3xl font-bold mb-6 font-arabic-heading">
                🚀 هل أنت مستعد لتصبح خبير تحقق؟
              </h3>
              <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto font-arabic">
                انضم إلى آلاف المتعلمين واكتسب المهارات التي تحتاجها لمكافحة المعلومات المضللة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <button className="bg-white text-primary-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-arabic">
                  📚 تصفح جميع الدورات
                </button>
                
                <button className="border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 font-arabic">
                  💡 اقترح دورة جديدة
                </button>
              </div>
              
              <div className="flex justify-center items-center gap-8 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span className="font-arabic">+5000 متدرب</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span className="font-arabic">شهادات معتمدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-arabic">تقييم 4.9/5</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // About Us Page Component
  const AboutPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/20" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-teal-700 text-white py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-32 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-32 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
              <Shield className="w-12 h-12" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic-heading">
              ℹ️ من نحن
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-12 max-w-3xl mx-auto font-arabic">
              رسالتنا هي بناء مجتمع واعٍ قادر على التمييز بين الحقيقة والمعلومات المضللة
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Mission Section */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl shadow-xl p-12 border">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  رسالتنا
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl">
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-800 mb-3 font-arabic-heading">الدقة والشفافية</h3>
                  <p className="text-primary-700 font-arabic">نلتزم بأعلى معايير الدقة في التحقق ونعرض منهجيتنا بشفافية كاملة</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-success-50 to-success-100 rounded-2xl">
                  <div className="w-12 h-12 bg-success-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-success-800 mb-3 font-arabic-heading">خدمة المجتمع</h3>
                  <p className="text-success-700 font-arabic">نعمل لخدمة المجتمع العربي وحمايته من المعلومات المضللة والأخبار المزيفة</p>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
                  <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-teal-800 mb-3 font-arabic-heading">التعليم والتوعية</h3>
                  <p className="text-teal-700 font-arabic">نسعى لتعليم الجمهور مهارات التحقق والتفكير النقدي</p>
                </div>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-warning-100 rounded-2xl mb-6">
                  <span className="text-3xl">📖</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">قصتنا</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-arabic">
                  <p>
                    تأسست منصة "تحقق" في عام 2020 استجابةً للحاجة الملحة لوجود مرجع موثوق للتحقق من المعلومات في العالم العربي، 
                    خاصة مع تزايد انتشار المعلومات المضللة على وسائل التواصل الاجتماعي.
                  </p>
                  <p>
                    بدأنا كفريق صغير من الصحفيين والباحثين المتخصصين، والآن أصبحنا منصة رائدة تضم أكثر من 50 خبيراً في مختلف المجالات، 
                    نعمل على مدار الساعة لضمان وصول المعلومات الصحيحة للجمهور العربي.
                  </p>
                  <p>
                    حتى اليوم، قمنا بالتحقق من أكثر من 50,000 ادعاء وساعدنا ملايين المستخدمين في التمييز بين الحقيقة والإشاعة.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary-100 to-teal-100 rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                    <div className="text-sm text-gray-600 font-arabic">تحقق مكتمل</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-success-600 mb-2">5M+</div>
                    <div className="text-sm text-gray-600 font-arabic">مستخدم استفاد</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-warning-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600 font-arabic">خبير متخصص</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                    <div className="text-3xl font-bold text-danger-600 mb-2">15</div>
                    <div className="text-sm text-gray-600 font-arabic">دولة عربية</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
                <span className="text-3xl">👥</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                فريق العمل
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                نفخر بفريقنا المتنوع من الخبراء والمتخصصين في مختلف المجالات
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">الصحفيون المحققون</h3>
                <p className="text-gray-600 text-sm font-arabic">15+ صحفي متخصص في التحقق من الأخبار</p>
              </div>

              <div className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🔬</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">الخبراء العلميون</h3>
                <p className="text-gray-600 text-sm font-arabic">20+ خبير في العلوم والطب والتكنولوجيا</p>
              </div>

              <div className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">💻</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">المطورون التقنيون</h3>
                <p className="text-gray-600 text-sm font-arabic">10+ مطور ومهندس نظم</p>
              </div>

              <div className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">🎓</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">المدربون والأكاديميون</h3>
                <p className="text-gray-600 text-sm font-arabic">12+ أستاذ ومدرب معتمد</p>
              </div>
            </div>
          </section>

          {/* Methodology Section */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl shadow-xl p-12 border">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-2xl mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  منهجيتنا في التحقق
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1️⃣</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">جمع المعلومات</h3>
                  <p className="text-gray-600 font-arabic text-sm">نجمع الادعاءات من مصادر متنوعة ونصنفها حسب الأولوية</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2️⃣</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">البحث والتقصي</h3>
                  <p className="text-gray-600 font-arabic text-sm">نبحث في المصادر الموثوقة والأدبيات العلمية والتقارير الرسمية</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3️⃣</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">مراجعة الخبراء</h3>
                  <p className="text-gray-600 font-arabic text-sm">يراجع التحقيق خبراء متخصصون في المجال ذي الصلة</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">4️⃣</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">النشر والمتابعة</h3>
                  <p className="text-gray-600 font-arabic text-sm">ننشر النتائج مع التحديث المستمر عند توفر معلومات جديدة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success-100 rounded-2xl mb-6">
                <span className="text-3xl">💎</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                قيمنا الأساسية
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-arabic-heading">النزاهة</h3>
                <p className="opacity-90 font-arabic">نلتزم بأعلى معايير النزاهة المهنية والأخلاقية في جميع أعمالنا</p>
              </div>

              <div className="bg-gradient-to-br from-success-600 to-success-700 text-white rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-arabic-heading">التميز</h3>
                <p className="opacity-90 font-arabic">نسعى للتميز في كل ما نقوم به لنقدم أفضل خدمة لجمهورنا</p>
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-arabic-heading">الشمولية</h3>
                <p className="opacity-90 font-arabic">نخدم جميع أفراد المجتمع العربي دون تمييز أو تحيز</p>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-gray-100 to-primary-50 rounded-3xl p-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                <span className="text-3xl">🤝</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 font-arabic-heading">
                شركاؤنا
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto font-arabic leading-relaxed">
                نتعاون مع منظمات إعلامية وأكاديمية رائدة لضمان تقديم أعلى مستويات الجودة والمصداقية
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-gray-700">📺 الشبكات الإعلامية</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-gray-700">🏛️ المؤسسات الأكاديمية</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-gray-700">🌐 المنظمات الدولية</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  // Contact Us Page Component
  const ContactPage = () => {
    const [contactForm, setContactForm] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'general'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleContactSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setContactForm({ name: '', email: '', subject: '', message: '', type: 'general' });
        setSubmitStatus('idle');
      }, 3000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setContactForm(prev => ({ ...prev, [name]: value }));
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/20" dir="rtl">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-teal-700 text-white py-20 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-32 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-10 left-32 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
                <MessageCircle className="w-12 h-12" />
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic-heading">
                📞 اتصل بنا
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-12 max-w-3xl mx-auto font-arabic">
                نحن هنا لمساعدتك وللإجابة على جميع استفساراتك
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            
            {/* Contact Options */}
            <section className="mb-20">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">واتساب</h3>
                  <p className="text-gray-600 mb-4 font-arabic">تواصل معنا مباشرة</p>
                  <a href="https://wa.me/1234567890" className="bg-success-600 text-white px-6 py-3 rounded-xl hover:bg-success-700 transition-colors font-medium font-arabic inline-block">
                    أرسل رسالة
                  </a>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">البريد الإلكتروني</h3>
                  <p className="text-gray-600 mb-4 font-arabic">info@verify-sy.com</p>
                  <a href="mailto:info@verify-sy.com" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium font-arabic inline-block">
                    أرسل إيميل
                  </a>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">ساعات العمل</h3>
                  <p className="text-gray-600 mb-2 font-arabic">الأحد - الخميس</p>
                  <p className="text-gray-600 font-arabic">9:00 ص - 6:00 م</p>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">الطوارئ</h3>
                  <p className="text-gray-600 mb-4 font-arabic">للبلاغات العاجلة</p>
                  <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors font-medium font-arabic">
                    بلاغ عاجل
                  </button>
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <section>
                <div className="bg-white rounded-3xl shadow-xl p-8 border">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">
                      📝 أرسل لنا رسالة
                    </h2>
                    <p className="text-gray-600 font-arabic">سنرد عليك في أسرع وقت ممكن</p>
                  </div>

                  {submitStatus === 'success' ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-success-600" />
                      </div>
                      <h3 className="text-xl font-bold text-success-600 mb-2 font-arabic-heading">تم إرسال الرسالة بنجاح!</h3>
                      <p className="text-gray-600 font-arabic">سنتواصل معك قريباً</p>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                            الاسم الكامل *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={contactForm.name}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
                            placeholder="أدخل اسمك الكامل"
                            required
                            dir="rtl"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                            البريد الإلكتروني *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={contactForm.email}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                            placeholder="example@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                          نوع الاستفسار
                        </label>
                        <select
                          name="type"
                          value={contactForm.type}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
                        >
                          <option value="general">استفسار عام</option>
                          <option value="factcheck">طلب تحقق</option>
                          <option value="partnership">شراكة</option>
                          <option value="media">إعلام</option>
                          <option value="technical">دعم تقني</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                          الموضوع *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={contactForm.subject}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
                          placeholder="موضوع الرسالة"
                          required
                          dir="rtl"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 font-arabic">
                          الرسالة *
                        </label>
                        <textarea
                          name="message"
                          value={contactForm.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
                          placeholder="اكتب رسالتك هنا..."
                          required
                          dir="rtl"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-arabic shadow-lg hover:shadow-xl"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            جاري الإرسال...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            إرسال الرسالة
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </section>

              {/* FAQ & Info */}
              <section>
                {/* FAQ */}
                <div className="bg-white rounded-3xl shadow-xl p-8 border mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-arabic-heading">
                    ❓ الأسئلة الشائعة
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                        كم يستغرق التحقق من المعلومة؟
                      </h3>
                      <p className="text-gray-600 font-arabic">
                        عادة ما يستغرق التحقق من 24-72 ساعة حسب تعقيد الموضوع وتوفر المصادر.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                        هل خدماتكم مجانية؟
                      </h3>
                      <p className="text-gray-600 font-arabic">
                        نعم، جميع خدماتنا مجانية بالكامل لخدمة المجتمع العربي.
                      </p>
                    </div>
                    
                    <div className="border-b border-gray-200 pb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                        كيف أعرف أن المعلومة موثوقة؟
                      </h3>
                      <p className="text-gray-600 font-arabic">
                        ابحث عن تحققاتنا أو تعلم مهارات التحقق من خلال أكاديميتنا المجانية.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">
                        هل يمكنني التطوع معكم؟
                      </h3>
                      <p className="text-gray-600 font-arabic">
                        نعم! نرحب بالمتطوعين المؤهلين. تواصل معنا لمعرفة الفرص المتاحة.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Tips */}
                <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-3xl p-8 border border-teal-200">
                  <h2 className="text-2xl font-bold text-teal-800 mb-6 font-arabic-heading">
                    💡 نصائح سريعة
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">1</span>
                      </div>
                      <p className="text-teal-700 font-arabic">
                        <strong>كن واضحاً:</strong> اذكر تفاصيل دقيقة عن المعلومة المشكوك فيها
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">2</span>
                      </div>
                      <p className="text-teal-700 font-arabic">
                        <strong>أرفق المصادر:</strong> شارك الروابط أو الصور المتعلقة بالموضوع
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">3</span>
                      </div>
                      <p className="text-teal-700 font-arabic">
                        <strong>ابحث أولاً:</strong> تحقق من قاعدة بياناتنا قبل إرسال طلب جديد
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Breadcrumb />
      
      {currentPage === 'home' && <Homepage />}
      {currentPage === 'article' && <ArticlePage />}
      {currentPage === 'search' && <SearchPage />}
      {currentPage === 'academy' && <AcademyPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Modals */}
      <SubmissionModal 
        isOpen={isSubmissionModalOpen}
        onClose={() => setIsSubmissionModalOpen(false)}
        onSubmit={handleSubmission}
      />

      <FilterPanel
        isOpen={isFilterPanelOpen}
        onClose={() => setIsFilterPanelOpen(false)}
        filters={filters}
        onFilterChange={setFilters}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 right-4 left-4 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-30 max-w-md mx-auto" dir="rtl">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. بالمتابعة، فإنك توافق على استخدامها.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors flex-1"
              >
                موافق
              </button>
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="text-gray-500 px-4 py-2 rounded-lg text-sm hover:text-gray-700 transition-colors"
              >
                رفض
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button - Right side for RTL */}
      <button
        onClick={() => setIsSubmissionModalOpen(true)}
        className="fixed bottom-6 right-6 bg-danger-600 text-white p-4 rounded-full shadow-lg hover:bg-danger-700 transition-all duration-300 hover:scale-110 z-30 lg:hidden"
        title="أرسل خبراً للتحقق"
        dir="rtl"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}

export default App;