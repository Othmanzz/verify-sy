'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, TrendingUp, Database, CheckCircle, XCircle, AlertCircle, HelpCircle, User, Eye, Clock, Star, ArrowLeft, Zap, Bot, Brain, Sparkles, Heart, DollarSign, Globe2, BookOpen, Laptop, Building2, Activity, Users2, X, RotateCcw, ChevronDown, Calendar, SortAsc } from 'lucide-react'
import { FactCheck } from '../types'
import { mockFactChecks, categories, verdictOptions } from '../lib/mockData'


// Mobile-optimized Compact Card Component
const CompactCard: React.FC<{ factCheck: FactCheck; onClick: () => void; featured?: boolean }> = ({ factCheck, onClick, featured = false }) => {
  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case 'true':
        return { bg: 'bg-green-500', label: 'صحيح', hoverColor: 'group-hover:text-green-600' };
      case 'false':
        return { bg: 'bg-red-500', label: 'احتيال', hoverColor: 'group-hover:text-red-600' };
      case 'misleading':
        return { bg: 'bg-orange-500', label: 'عبث', hoverColor: 'group-hover:text-orange-600' };
      case 'unproven':
        return { bg: 'bg-gray-500', label: 'إرباك', hoverColor: 'group-hover:text-gray-600' };
      case 'confirmed':
        return { bg: 'bg-blue-500', label: 'مؤكد', hoverColor: 'group-hover:text-blue-600' };
      default:
        return { bg: 'bg-gray-500', label: 'غير محدد', hoverColor: 'group-hover:text-gray-600' };
    }
  };

  const verdictConfig = getVerdictConfig(factCheck.verdict);

  return (
    <article 
      className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-0.5 overflow-hidden"
      onClick={onClick}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-2 -right-2 z-20">
          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white p-2 rounded-xl shadow-lg border-2 border-white transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <Star className="w-3 h-3 fill-current" />
          </div>
        </div>
      )}
      
      {/* Card Content */}
      <div className="relative z-10 p-4 sm:p-6">
        <div className="flex gap-3 sm:gap-4">
          {/* Compact Image Section */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
            <img 
              src={factCheck.image}
              alt={factCheck.title}
              className="w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md"
            />
            
            {/* Compact Verdict Badge */}
            <div className="absolute -bottom-1 -right-1 z-20">
              <div className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-bold shadow-md border border-white ${verdictConfig.bg} text-white`}>
                {verdictConfig.label}
              </div>
            </div>
          </div>
          
          {/* Compact Content Section */}
          <div className="flex-1 min-w-0">
            {/* Category & Date */}
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className={`px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium font-arabic border ${
                factCheck.verdict === 'true' ? 'bg-green-50 text-green-700 border-green-100' :
                factCheck.verdict === 'false' ? 'bg-red-50 text-red-700 border-red-100' :
                factCheck.verdict === 'misleading' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                factCheck.verdict === 'confirmed' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                'bg-gray-50 text-gray-700 border-gray-100'
              }`}>
                {factCheck.category}
              </span>
              <div className="flex items-center gap-1 text-gray-500 text-[10px] sm:text-xs">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                <span className="font-arabic">{factCheck.readTime}</span>
              </div>
            </div>
            
            {/* Compact Title */}
            <h3 className={`text-sm sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2 leading-tight transition-colors font-arabic-heading line-clamp-2 ${verdictConfig.hoverColor}`}>
              {factCheck.title}
            </h3>
            
            {/* Compact Summary */}
            <p className="text-gray-600 font-arabic text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3 line-clamp-2 hidden sm:block">
              {factCheck.summary}
            </p>
            
            {/* Compact Metadata */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <User className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span className="font-arabic hidden sm:inline">{factCheck.author}</span>
                </div>
                <div className="flex items-center gap-0.5 sm:gap-1">
                  <Eye className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>{factCheck.views.toLocaleString()}</span>
                </div>
              </div>
              
              {/* Read More Arrow */}
              <div className={`transition-colors ${
                factCheck.verdict === 'true' ? 'text-green-500 group-hover:text-green-600' :
                factCheck.verdict === 'false' ? 'text-red-500 group-hover:text-red-600' :
                factCheck.verdict === 'misleading' ? 'text-orange-500 group-hover:text-orange-600' :
                factCheck.verdict === 'confirmed' ? 'text-blue-500 group-hover:text-blue-600' :
                'text-gray-500 group-hover:text-gray-600'
              }`}>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:-translate-x-0.5 sm:group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

const SearchPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [showStickySearch, setShowStickySearch] = useState(false);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [filters, setFilters] = useState({
    category: 'جميع الفئات',
    verdict: 'جميع التصنيفات',
    dateRange: 'جميع التواريخ',
    sortBy: 'الأحدث'
  });

  // Handle scroll to show sticky search when main search bar is out of view
  React.useEffect(() => {
    const handleScroll = () => {
      const searchSection = document.querySelector('[data-search-section]');
      if (searchSection) {
        const rect = searchSection.getBoundingClientRect();
        // Show sticky search when the main search section goes out of view (top is negative)
        setShowStickySearch(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Debug state changes
  React.useEffect(() => {
    console.log('📊 showFilterDropdown state changed to:', showFilterDropdown);
  }, [showFilterDropdown]);

  // Handle click outside to close filter dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showFilterDropdown && !target.closest('[data-filter-dropdown]') && !target.closest('[data-filter-content]')) {
        console.log('👆 Clicked outside dropdown, closing...');
        setShowFilterDropdown(false);
      }
    };

    if (showFilterDropdown) {
      console.log('🎯 Setting up click outside listener...');
      // Use a small delay to prevent immediate closure when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 200);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showFilterDropdown]);

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
      'احتيال': 'false',
      'عبث': 'misleading',
      'إرباك': 'unproven',
      'مؤكد': 'confirmed'
    };
    
    const matchesVerdict = filters.verdict === 'جميع التصنيفات' || 
      factCheck.verdict === verdictMapping[filters.verdict];
    
    return matchesSearch && matchesCategory && matchesVerdict;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Mobile-Optimized Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-bold text-gray-900 font-arabic-heading">قاعدة بيانات تأكد</h1>
                <p className="text-[10px] sm:text-xs text-gray-500 font-arabic hidden sm:block">قاعدة بيانات التحققات</p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors font-arabic font-medium text-sm sm:text-base"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">العودة للرئيسية</span>
              <span className="sm:hidden">رجوع</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile-Optimized Search Section */}
      <section className="relative py-4 sm:py-6 overflow-visible" data-search-section>        
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Mobile-Optimized Search Bar */}
            <div className="relative mb-3 sm:mb-4 z-20">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                {/* Search Input Container */}
                <div className="flex items-center">
                  {/* Main Search Input */}
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="ابحث في قاعدة البيانات..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() => {
                        setShowSearchSuggestions(true);
                      }}
                      onBlur={() => {
                        setTimeout(() => setShowSearchSuggestions(false), 200);
                      }}
                      className="w-full pl-12 sm:pl-16 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base bg-transparent focus:outline-none text-right text-gray-900 font-arabic border-0"
                      dir="rtl"
                    />
                    
                    {/* Mobile Search Icon */}
                    <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center shadow-md">
                        <Bot className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Compact Filter Dropdown Button */}
                  <div className="relative" data-filter-dropdown>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('🔥 Filter button clicked, current state:', showFilterDropdown);
                        setShowFilterDropdown(prev => {
                          const newState = !prev;
                          console.log('🔄 Toggling from', prev, 'to', newState);
                          return newState;
                        });
                      }}
                      className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-r border-gray-200"
                    >
                      <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                      <span className="font-arabic font-medium text-gray-700 text-xs sm:text-sm hidden sm:inline">فلترة</span>
                      <ChevronDown className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 transition-transform duration-300 ${showFilterDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                  </div>
                </div>
                  
                
                {/* Enhanced AI Search Suggestions */}
                {showSearchSuggestions && (
                  <div className="absolute top-full left-0 right-0 bg-white rounded-2xl shadow-2xl z-30 mt-3 border border-gray-100 animate-fadeIn flex flex-col max-h-96">
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

                {/* Active Filters Display */}
                {(filters.category !== 'جميع الفئات' || filters.verdict !== 'جميع التصنيفات') && (
                  <div className="border-t border-gray-100 pt-4 mt-2">
                    <div className="flex flex-wrap items-center gap-2 justify-center">
                      <span className="text-sm text-gray-600 font-arabic font-medium">المرشحات النشطة:</span>
                      
                      {filters.category !== 'جميع الفئات' && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-arabic font-medium">
                          <span>{filters.category}</span>
                          <button
                            onClick={() => setFilters(prev => ({ ...prev, category: 'جميع الفئات' }))}
                            className="hover:bg-blue-200 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                      
                      {filters.verdict !== 'جميع التصنيفات' && (
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-arabic font-medium">
                          <span>{filters.verdict}</span>
                          <button
                            onClick={() => setFilters(prev => ({ ...prev, verdict: 'جميع التصنيفات' }))}
                            className="hover:bg-green-200 rounded-full p-0.5"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Mobile Filter Interface */}
            {showFilterDropdown && (
              <div 
                className="w-full max-w-4xl mx-auto mt-3 sm:mt-4 animate-in slide-in-from-top-2 duration-300"
                data-filter-content
              >
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg border border-gray-100 p-3 sm:p-4" dir="rtl">
                  {/* Compact Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Filter className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 font-arabic-heading">فلترة النتائج</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-600 font-arabic">
                        <span className="font-bold text-blue-600">{filteredFactChecks.length}</span> نتيجة
                      </span>
                      <button 
                        onClick={() => setShowFilterDropdown(false)}
                        className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {/* Compact Category Filter */}
                    <div>
                      <h4 className="font-medium text-gray-700 font-arabic mb-2 text-xs sm:text-sm">الفئة</h4>
                      <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                        {categories.map((category, index) => {
                          const isSelected = filters.category === category;
                          return (
                            <button
                              key={category}
                              onClick={() => setFilters(prev => ({ ...prev, category }))}
                              className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium font-arabic transition-all duration-200 text-center ${
                                isSelected 
                                  ? 'border-2 border-blue-500 bg-blue-50 text-blue-700' 
                                  : 'border border-gray-200 bg-gray-50 text-gray-700 hover:border-blue-300 hover:bg-blue-50'
                              }`}
                            >
                              {category}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Compact Verdict Filter */}
                    <div>
                      <h4 className="font-medium text-gray-700 font-arabic mb-2 text-xs sm:text-sm">نوع التحقق</h4>
                      <div className="grid grid-cols-2 gap-1 sm:gap-1.5">
                        {verdictOptions.map((verdict) => {
                          const isSelected = filters.verdict === verdict;
                          const getVerdictStyle = (verdict: string) => {
                            if (verdict === 'صحيح') return isSelected ? 'border-green-500 bg-green-50 text-green-700' : 'hover:border-green-300 hover:bg-green-50';
                            if (verdict === 'احتيال') return isSelected ? 'border-red-500 bg-red-50 text-red-700' : 'hover:border-red-300 hover:bg-red-50';
                            if (verdict === 'عبث') return isSelected ? 'border-orange-500 bg-orange-50 text-orange-700' : 'hover:border-orange-300 hover:bg-orange-50';
                            if (verdict === 'إرباك') return isSelected ? 'border-gray-500 bg-gray-50 text-gray-700' : 'hover:border-gray-300 hover:bg-gray-50';
                            if (verdict === 'مؤكد') return isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'hover:border-blue-300 hover:bg-blue-50';
                            return isSelected ? 'border-gray-500 bg-gray-50 text-gray-700' : 'hover:border-gray-300 hover:bg-gray-50';
                          };
                          
                          return (
                            <button
                              key={verdict}
                              onClick={() => setFilters(prev => ({ ...prev, verdict }))}
                              className={`p-1.5 sm:p-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-medium font-arabic transition-all duration-200 text-center ${
                                isSelected 
                                  ? `border-2 ${getVerdictStyle(verdict)}` 
                                  : `border border-gray-200 bg-gray-50 text-gray-700 ${getVerdictStyle(verdict)}`
                              }`}
                            >
                              {verdict}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Compact Action Bar */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-600 font-arabic">
                      {filteredFactChecks.length} من {mockFactChecks.length} مقال
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setFilters({
                          category: 'جميع الفئات',
                          verdict: 'جميع التصنيفات',
                          dateRange: 'جميع التواريخ',
                          sortBy: 'الأحدث'
                        })}
                        className="px-3 py-1.5 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-medium font-arabic transition-colors"
                      >
                        مسح
                      </button>
                      <button
                        onClick={() => setShowFilterDropdown(false)}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium font-arabic transition-colors"
                      >
                        تطبيق
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Mobile Statistics */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-blue-600 font-arabic-heading text-xs sm:text-base">50K+</span>
                <span className="text-gray-600 font-arabic text-[10px] sm:text-sm">تحقق</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-600 font-arabic-heading text-xs sm:text-base">98%</span>
                <span className="text-gray-600 font-arabic text-[10px] sm:text-sm">دقة</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                <span className="font-semibold text-purple-600 font-arabic-heading text-xs sm:text-base">15</span>
                <span className="text-gray-600 font-arabic text-[10px] sm:text-sm">مجال</span>
              </div>
              <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/70 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-indigo-600 font-arabic-heading text-xs sm:text-base">24/7</span>
                <span className="text-gray-600 font-arabic text-[10px] sm:text-sm">تحديث</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Search Bar */}
      <div className={`fixed top-16 sm:top-20 left-0 right-0 z-30 transition-all duration-300 ${
        showStickySearch ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200">
          <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 sm:gap-3">
                {/* Compact Search Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="بحث ذكي في قاعدة البيانات..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-12 sm:pl-14 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-gray-50 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-right text-gray-900 font-arabic border border-gray-200 text-sm sm:text-base"
                    dir="rtl"
                  />
                  <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center">
                      <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Mobile Filter Button */}
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 hover:bg-gray-100 rounded-xl sm:rounded-2xl transition-colors border border-gray-200"
                >
                  <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-600" />
                  <span className="text-xs sm:text-sm font-arabic font-medium text-gray-700 hidden sm:inline">فلترة</span>
                  <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-500 transition-transform duration-300 ${showFilterDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Mobile Results Count */}
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold font-arabic border border-blue-200">
                  <span className="hidden sm:inline">{filteredFactChecks.length} نتيجة</span>
                  <span className="sm:hidden">{filteredFactChecks.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-white/30 backdrop-blur-sm min-h-screen transition-all duration-300 ${
        showStickySearch ? 'mt-0' : ''
      }`}>
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="max-w-7xl mx-auto">

          {/* Mobile Results Header */}
          <section className="mb-4 sm:mb-6">
            <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-white/50">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-xl sm:rounded-2xl flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-sm sm:text-lg">{filteredFactChecks.length}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 font-arabic text-sm sm:text-base">نتائج البحث</div>
                  <div className="text-xs sm:text-sm text-gray-600 font-arabic">
                    عرض {filteredFactChecks.length} من أصل {mockFactChecks.length} تحقق
                  </div>
                </div>
              </div>
              
              {filteredFactChecks.length > 0 && (
                <div className="flex items-center gap-1.5 sm:gap-2 bg-blue-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl">
                  <TrendingUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
                  <span className="text-xs sm:text-sm text-blue-700 font-medium font-arabic hidden sm:inline">نتائج عالية الدقة</span>
                  <span className="text-xs text-blue-700 font-medium font-arabic sm:hidden">دقيقة</span>
                </div>
              )}
            </div>
          </section>

          {/* Enhanced Results Grid */}
          {filteredFactChecks.length > 0 ? (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
                {filteredFactChecks.map((factCheck, index) => (
                  <CompactCard 
                    key={factCheck.id}
                    factCheck={factCheck}
                    onClick={() => {
                      console.log('Selected article:', factCheck.id);
                    }}
                    featured={index === 0}
                  />
                ))}
              </div>

              {/* Mobile Load More */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:from-blue-700 hover:to-blue-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 font-arabic">
                  📥 تحميل المزيد
                </button>
              </div>
            </>
          ) : (
            /* Mobile Empty State */
            <div className="text-center py-12 sm:py-20">
              <div className="max-w-sm sm:max-w-md mx-auto">
                {/* Mobile Search Icon */}
                <div className="relative mb-6 sm:mb-8">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-200 rounded-full animate-ping opacity-20"></div>
                </div>
                
                <h3 className="text-xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-arabic-heading">لم نجد نتائج مطابقة</h3>
                <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed font-arabic text-sm sm:text-base">
                  جرب تغيير كلمات البحث أو استخدام مرشحات مختلفة.
                  <br />يمكنك أيضاً البحث باستخدام مرادفات أو مصطلحات أوسع.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
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
                    className="bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium font-arabic shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                  >
                    🔄 مسح جميع المرشحات
                  </button>
                  
                  <div className="text-xs sm:text-sm text-gray-500 font-arabic">
                    أو جرب البحث عن: 
                    <button 
                      onClick={() => setSearchQuery('كوفيد')}
                      className="text-blue-600 hover:text-blue-700 mx-1 underline"
                    >
                      كوفيد
                    </button>،
                    <button 
                      onClick={() => setSearchQuery('لقاحات')}
                      className="text-blue-600 hover:text-blue-700 mx-1 underline"
                    >
                      لقاحات
                    </button>، أو
                    <button 
                      onClick={() => setSearchQuery('اقتصاد')}
                      className="text-blue-600 hover:text-blue-700 mx-1 underline"
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
    </div>
  );
};

export default SearchPage;