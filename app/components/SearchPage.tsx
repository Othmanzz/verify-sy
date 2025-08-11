'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, TrendingUp, Database, CheckCircle, XCircle, AlertCircle, HelpCircle, User, Eye, Clock, Star, ArrowLeft, Zap, Bot, Brain, Sparkles, Heart, DollarSign, Globe2, BookOpen, Laptop, Building2, Activity, Users2, X, RotateCcw, ChevronDown, Calendar, SortAsc } from 'lucide-react'
import { FactCheck } from '../types'
import { mockFactChecks, categories, verdictOptions } from '../lib/mockData'


// Compact Card Component matching HomePage categories style
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
      className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
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
      <div className="relative z-10 p-6">
        <div className="flex gap-4">
          {/* Compact Image Section */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <img 
              src={factCheck.image}
              alt={factCheck.title}
              className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-md"
            />
            
            {/* Compact Verdict Badge */}
            <div className="absolute -bottom-1 -right-1 z-20">
              <div className={`px-2 py-1 rounded-lg text-xs font-bold shadow-md border border-white ${verdictConfig.bg} text-white`}>
                {verdictConfig.label}
              </div>
            </div>
          </div>
          
          {/* Compact Content Section */}
          <div className="flex-1 min-w-0">
            {/* Category & Date */}
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-1 rounded-lg text-xs font-medium font-arabic border ${
                factCheck.verdict === 'true' ? 'bg-green-50 text-green-700 border-green-100' :
                factCheck.verdict === 'false' ? 'bg-red-50 text-red-700 border-red-100' :
                factCheck.verdict === 'misleading' ? 'bg-orange-50 text-orange-700 border-orange-100' :
                factCheck.verdict === 'confirmed' ? 'bg-blue-50 text-blue-700 border-blue-100' :
                'bg-gray-50 text-gray-700 border-gray-100'
              }`}>
                {factCheck.category}
              </span>
              <div className="flex items-center gap-1 text-gray-500 text-xs">
                <Clock className="w-3 h-3" />
                <span className="font-arabic">{factCheck.readTime}</span>
              </div>
            </div>
            
            {/* Compact Title */}
            <h3 className={`text-lg font-bold text-gray-900 mb-2 leading-tight transition-colors font-arabic-heading line-clamp-2 ${verdictConfig.hoverColor}`}>
              {factCheck.title}
            </h3>
            
            {/* Compact Summary */}
            <p className="text-gray-600 font-arabic text-sm leading-relaxed mb-3 line-clamp-2">
              {factCheck.summary}
            </p>
            
            {/* Compact Metadata */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span className="font-arabic">{factCheck.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
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
                <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

  // Handle click outside to close filter dropdown
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (showFilterDropdown && !target.closest('[data-filter-dropdown]')) {
        setShowFilterDropdown(false);
      }
    };

    // Use a small delay to prevent immediate closure when opening
    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
      {/* Compact Header with Back Button and Title */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Database className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 font-arabic-heading">قاعدة بيانات تأكد</h1>
                <p className="text-xs text-gray-500 font-arabic">قاعدة بيانات التحققات</p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-arabic font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>

      {/* Compact Search Section */}
      <section className="relative py-6 overflow-visible" data-search-section>        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            
            {/* Compact Modern Search Bar */}
            <div className="relative mb-4 z-20">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
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
                      className="w-full pl-16 pr-4 py-4 text-base bg-transparent focus:outline-none text-right text-gray-900 font-arabic border-0"
                      dir="rtl"
                    />
                    
                    {/* Compact Search Icon */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Compact Filter Dropdown Button */}
                  <div className="relative" data-filter-dropdown>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowFilterDropdown(prev => !prev);
                      }}
                      className="flex items-center gap-2 px-4 py-4 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-r border-gray-200"
                    >
                      <Filter className="w-4 h-4 text-gray-600" />
                      <span className="font-arabic font-medium text-gray-700 text-sm">فلترة</span>
                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${showFilterDropdown ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Modern Filter Dropdown */}
                    {showFilterDropdown && (
                      <div 
                        style={{
                          position: 'absolute',
                          top: '100%',
                          right: '0',
                          width: '380px',
                          backgroundColor: 'white',
                          border: '1px solid #e2e8f0',
                          borderRadius: '16px',
                          padding: '0',
                          zIndex: 99999,
                          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                          marginTop: '8px',
                          backdropFilter: 'blur(10px)',
                          background: 'linear-gradient(145deg, rgba(255,255,255,0.95), rgba(248,250,252,0.95))'
                        }}
                      >
                        {/* Modern Header */}
                        <div style={{
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          padding: '20px',
                          borderRadius: '16px 16px 0 0',
                          color: 'white',
                          position: 'relative',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: '-50%',
                            right: '-20%',
                            width: '100px',
                            height: '100px',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '50%',
                            animation: 'pulse 2s infinite'
                          }}></div>
                          <div style={{position: 'relative', zIndex: 2}}>
                            <h3 style={{fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0', textShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>🎯 فلترة ذكية</h3>
                            <p style={{fontSize: '14px', margin: '0', opacity: '0.9'}}>اختر المعايير المناسبة للحصول على أفضل النتائج</p>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div style={{padding: '24px', direction: 'rtl'}}>
                          {/* Category Filter with Colors */}
                          <div style={{marginBottom: '24px'}}>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                              <div style={{
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(45deg, #3b82f6, #1d4ed8)',
                                borderRadius: '6px',
                                marginLeft: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                📂
                              </div>
                              <label style={{
                                fontSize: '16px', 
                                fontWeight: '600', 
                                color: '#1f2937'
                              }}>الفئة</label>
                            </div>
                            
                            {/* Category Grid */}
                            <div style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(2, 1fr)',
                              gap: '8px',
                              marginBottom: '12px'
                            }}>
                              {categories.map((category, index) => {
                                const categoryColors = [
                                  { bg: 'linear-gradient(45deg, #6366f1, #8b5cf6)', emoji: '📊' },
                                  { bg: 'linear-gradient(45deg, #ef4444, #dc2626)', emoji: '🏛️' },
                                  { bg: 'linear-gradient(45deg, #10b981, #059669)', emoji: '📰' },
                                  { bg: 'linear-gradient(45deg, #f59e0b, #d97706)', emoji: '🌱' },
                                  { bg: 'linear-gradient(45deg, #8b5cf6, #7c3aed)', emoji: '🎓' },
                                  { bg: 'linear-gradient(45deg, #06b6d4, #0891b2)', emoji: '💻' },
                                  { bg: 'linear-gradient(45deg, #84cc16, #65a30d)', emoji: '⚽' },
                                  { bg: 'linear-gradient(45deg, #f97316, #ea580c)', emoji: '🎨' }
                                ];
                                const config = categoryColors[index] || categoryColors[0];
                                const isSelected = filters.category === category;
                                
                                return (
                                  <button
                                    key={category}
                                    onClick={() => setFilters(prev => ({ ...prev, category }))}
                                    style={{
                                      padding: '12px',
                                      borderRadius: '12px',
                                      border: isSelected ? '2px solid #3b82f6' : '1px solid #e5e7eb',
                                      background: isSelected ? 'linear-gradient(145deg, #dbeafe, #bfdbfe)' : 'white',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '8px',
                                      fontSize: '13px',
                                      fontWeight: isSelected ? '600' : '500',
                                      color: isSelected ? '#1d4ed8' : '#374151',
                                      boxShadow: isSelected ? '0 4px 12px rgba(59, 130, 246, 0.15)' : '0 2px 4px rgba(0,0,0,0.05)',
                                      transform: isSelected ? 'scale(1.02)' : 'scale(1)'
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isSelected) {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isSelected) {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                                      }
                                    }}
                                  >
                                    <div style={{
                                      width: '24px',
                                      height: '24px',
                                      background: config.bg,
                                      borderRadius: '6px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '12px'
                                    }}>
                                      {config.emoji}
                                    </div>
                                    <span style={{flex: 1, textAlign: 'right'}}>{category}</span>
                                    {isSelected && (
                                      <div style={{
                                        width: '16px',
                                        height: '16px',
                                        background: '#10b981',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '10px'
                                      }}>
                                        ✓
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          
                          {/* Verdict Filter with Colors */}
                          <div style={{marginBottom: '24px'}}>
                            <div style={{display: 'flex', alignItems: 'center', marginBottom: '12px'}}>
                              <div style={{
                                width: '20px',
                                height: '20px',
                                background: 'linear-gradient(45deg, #10b981, #059669)',
                                borderRadius: '6px',
                                marginLeft: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>
                                ✅
                              </div>
                              <label style={{
                                fontSize: '16px', 
                                fontWeight: '600', 
                                color: '#1f2937'
                              }}>نوع التحقق</label>
                            </div>
                            
                            {/* Verdict Buttons */}
                            <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                              {verdictOptions.map((verdict, index) => {
                                const verdictColors = [
                                  { bg: 'linear-gradient(45deg, #6b7280, #4b5563)', emoji: '📋', desc: 'جميع الأنواع' },
                                  { bg: 'linear-gradient(45deg, #10b981, #059669)', emoji: '✅', desc: 'معلومات صحيحة' },
                                  { bg: 'linear-gradient(45deg, #ef4444, #dc2626)', emoji: '❌', desc: 'معلومات خاطئة' },
                                  { bg: 'linear-gradient(45deg, #f59e0b, #d97706)', emoji: '⚠️', desc: 'مشكوك فيها' },
                                  { bg: 'linear-gradient(45deg, #8b5cf6, #7c3aed)', emoji: '❓', desc: 'غير مؤكدة' },
                                  { bg: 'linear-gradient(45deg, #06b6d4, #0891b2)', emoji: '🔍', desc: 'مؤكدة رسمياً' }
                                ];
                                const config = verdictColors[index] || verdictColors[0];
                                const isSelected = filters.verdict === verdict;
                                
                                return (
                                  <button
                                    key={verdict}
                                    onClick={() => setFilters(prev => ({ ...prev, verdict }))}
                                    style={{
                                      padding: '14px 16px',
                                      borderRadius: '12px',
                                      border: isSelected ? '2px solid #10b981' : '1px solid #e5e7eb',
                                      background: isSelected ? 'linear-gradient(145deg, #d1fae5, #a7f3d0)' : 'white',
                                      cursor: 'pointer',
                                      transition: 'all 0.2s ease',
                                      display: 'flex',
                                      alignItems: 'center',
                                      gap: '12px',
                                      fontSize: '14px',
                                      fontWeight: isSelected ? '600' : '500',
                                      color: isSelected ? '#065f46' : '#374151',
                                      boxShadow: isSelected ? '0 4px 12px rgba(16, 185, 129, 0.15)' : '0 2px 4px rgba(0,0,0,0.05)',
                                      transform: isSelected ? 'scale(1.01)' : 'scale(1)'
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isSelected) {
                                        e.currentTarget.style.transform = 'scale(1.01)';
                                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      if (!isSelected) {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                                      }
                                    }}
                                  >
                                    <div style={{
                                      width: '28px',
                                      height: '28px',
                                      background: config.bg,
                                      borderRadius: '8px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '14px'
                                    }}>
                                      {config.emoji}
                                    </div>
                                    <div style={{flex: 1, textAlign: 'right'}}>
                                      <div style={{fontWeight: '600'}}>{verdict}</div>
                                      <div style={{fontSize: '12px', opacity: '0.7', marginTop: '2px'}}>{config.desc}</div>
                                    </div>
                                    {isSelected && (
                                      <div style={{
                                        width: '18px',
                                        height: '18px',
                                        background: '#10b981',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '12px',
                                        color: 'white'
                                      }}>
                                        ✓
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                          
                          {/* Modern Action Buttons */}
                          <div style={{
                            display: 'flex', 
                            gap: '12px', 
                            paddingTop: '16px',
                            borderTop: '1px solid #f3f4f6'
                          }}>
                            <button
                              onClick={() => setFilters({
                                category: 'جميع الفئات',
                                verdict: 'جميع التصنيفات',
                                dateRange: 'جميع التواريخ',
                                sortBy: 'الأحدث'
                              })}
                              style={{
                                flex: 1,
                                padding: '12px 20px',
                                background: 'linear-gradient(145deg, #f8fafc, #e2e8f0)',
                                color: '#475569',
                                border: '1px solid #cbd5e1',
                                borderRadius: '12px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                              }}
                            >
                              🗑️ <span>مسح الكل</span>
                            </button>
                            <button
                              onClick={() => setShowFilterDropdown(false)}
                              style={{
                                flex: 1,
                                padding: '12px 20px',
                                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontSize: '14px',
                                cursor: 'pointer',
                                fontWeight: '600',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '8px',
                                boxShadow: '0 4px 12px rgba(102, 126, 234, 0.25)'
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-1px)';
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.25)';
                              }}
                            >
                              ✨ <span>تطبيق الآن</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
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
            
            {/* Compact Statistics */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-blue-600 font-arabic-heading">50K+</span>
                <span className="text-gray-600 font-arabic">تحقق</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-600 font-arabic-heading">98%</span>
                <span className="text-gray-600 font-arabic">دقة</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-semibold text-purple-600 font-arabic-heading">15</span>
                <span className="text-gray-600 font-arabic">مجال</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-indigo-600 font-arabic-heading">24/7</span>
                <span className="text-gray-600 font-arabic">تحديث</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Sticky Search Bar */}
      <div className={`fixed top-20 left-0 right-0 z-30 transition-all duration-300 ${
        showStickySearch ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                {/* Compact Search Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="بحث ذكي في قاعدة البيانات..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-14 pr-4 py-3 bg-gray-50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-right text-gray-900 font-arabic border border-gray-200"
                    dir="rtl"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Bot className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Compact Filter Button */}
                <button
                  onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors border border-gray-200"
                >
                  <Filter className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-arabic font-medium text-gray-700">فلترة</span>
                  <ChevronDown className={`w-3 h-3 text-gray-500 transition-transform duration-300 ${showFilterDropdown ? 'rotate-180' : ''}`} />
                </button>

                {/* Results Count */}
                <div className="px-4 py-3 bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 rounded-2xl text-sm font-bold font-arabic border border-blue-200">
                  {filteredFactChecks.length} نتيجة
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-white/30 backdrop-blur-sm min-h-screen transition-all duration-300 ${
        showStickySearch ? 'mt-0' : ''
      }`}>
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-7xl mx-auto">

          {/* Results Header */}
          <section className="mb-6">
            <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-white/50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-lg">{filteredFactChecks.length}</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900 font-arabic">نتائج البحث</div>
                  <div className="text-sm text-gray-600 font-arabic">
                    عرض {filteredFactChecks.length} من أصل {mockFactChecks.length} تحقق
                  </div>
                </div>
              </div>
              
              {filteredFactChecks.length > 0 && (
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-xl">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-700 font-medium font-arabic">نتائج عالية الدقة</span>
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
                      console.log('Selected article:', factCheck.id);
                    }}
                    featured={index === 0}
                  />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <button className="bg-gradient-to-r from-blue-600 to-blue-600 text-white px-12 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-700 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 font-arabic">
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
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Search className="w-16 h-16 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-200 rounded-full animate-ping opacity-20"></div>
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
                    className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 font-medium font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    🔄 مسح جميع المرشحات
                  </button>
                  
                  <div className="text-sm text-gray-500 font-arabic">
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