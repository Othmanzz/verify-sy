'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search, CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronDown, Star, User, Eye, Clock, ExternalLink, FileText, Users, GraduationCap, Award, Globe, BookOpen, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'
import { FactCheck } from '../types'
import { mockFactChecks, categories } from '../lib/mockData'
import CompactCard from './CompactCard'
import VerdictBadge from './VerdictBadge'
import LazyImage from './LazyImage'

const HomePage: React.FC = () => {
  const router = useRouter()
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false)
  const filteredFactChecks = mockFactChecks

  // Helper function to get verdict colors and labels
  const getVerdictInfo = (verdict: string) => {
    switch (verdict) {
      case 'confirmed':
        return {
          label: 'مؤكد',
          bg: 'bg-green-100',
          text: 'text-green-700',
          border: 'border-green-200',
          hover: 'group-hover:text-green-600',
          cardBorder: 'group-hover:border-green-300'
        }
      case 'false':
        return {
          label: 'احتيال',
          bg: 'bg-red-100',
          text: 'text-red-700',
          border: 'border-red-200',
          hover: 'group-hover:text-red-600',
          cardBorder: 'group-hover:border-red-300'
        }
      case 'misleading':
        return {
          label: 'عبث',
          bg: 'bg-orange-100',
          text: 'text-orange-700',
          border: 'border-orange-200',
          hover: 'group-hover:text-orange-600',
          cardBorder: 'group-hover:border-orange-300'
        }
      case 'unproven':
        return {
          label: 'إرباك',
          bg: 'bg-yellow-100',
          text: 'text-yellow-700',
          border: 'border-yellow-200',
          hover: 'group-hover:text-yellow-600',
          cardBorder: 'group-hover:border-yellow-300'
        }
      default:
        return {
          label: 'غير مؤكد',
          bg: 'bg-gray-100',
          text: 'text-gray-700',
          border: 'border-gray-200',
          hover: 'group-hover:text-gray-600',
          cardBorder: 'group-hover:border-gray-300'
        }
    }
  }

  return (
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
              <Link 
                href="/search"
                className="group relative bg-white text-blue-900 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-arabic overflow-hidden inline-block"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Search className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  ابحث في قاعدة البيانات
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

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

      {/* Modern Horizontal Scrollable Trending News Section */}
      <section className="container mx-auto px-4 pt-8 pb-16" style={{paddingLeft: '70px', paddingRight: '70px'}}>
        {/* Enhanced Modern Header */}
        <div className="flex items-center justify-between mb-12">
          {/* Title Section - Left Side */}
          <div className="text-left">
            <div className="flex items-center justify-start gap-4 mb-2">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-arabic-heading">
                  الأخبار الرائجة
                </h2>
                <p className="text-gray-600 font-arabic text-sm">أهم القضايا المتداولة اليوم</p>
              </div>
            </div>
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-3 py-1.5 rounded-xl">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-600 font-arabic font-medium text-xs">
                تحديث مباشر • {mockFactChecks.length} مقال
              </span>
            </div>
          </div>
          
          {/* Read More Button - Right Side */}
          <Link 
            href="/search"
            className="group text-red-600 hover:text-red-700 font-arabic font-medium flex items-center gap-2 transition-colors duration-300"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span>عرض المزيد</span>
          </Link>
        </div>
        
        {/* Horizontal Scrollable Carousel with External Navigation */}
        <div className="relative px-16">
          {/* External Navigation Buttons */}
          <button
            onClick={() => {
              const container = document.getElementById('trending-scroll-container');
              if (container) {
                container.scrollBy({ left: 400, behavior: 'smooth' });
              }
            }}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-red-500 to-orange-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white group"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
          </button>
          
          <button
            onClick={() => {
              const container = document.getElementById('trending-scroll-container');
              if (container) {
                container.scrollBy({ left: -400, behavior: 'smooth' });
              }
            }}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-orange-500 to-red-500 text-white p-4 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 border-2 border-white group"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-all duration-300" />
          </button>
          
          {/* Horizontal Scroll Container */}
          <div 
            id="trending-scroll-container"
            className="flex gap-6 overflow-x-auto py-4 px-2 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {mockFactChecks.slice(0, 12).map((factCheck, index) => (
              <div 
                key={`trending-${factCheck.id}`}
                className="flex-none w-80"
              >
                <article 
                  className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-1 overflow-hidden h-full ${getVerdictInfo(factCheck.verdict).cardBorder}`}
                  onClick={() => {
                    console.log('Selected article:', factCheck.id);
                  }}
                >

                  {/* Image with Modern Overlay */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-48">
                    <LazyImage
                      src={factCheck.image}
                      alt={factCheck.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Verdict Badge - Top Right */}
                    <div className="absolute top-3 right-3 z-10">
                      {(() => {
                        const verdictInfo = getVerdictInfo(factCheck.verdict);
                        return (
                          <span className={`${verdictInfo.bg} ${verdictInfo.text} ${verdictInfo.border} px-3 py-1.5 rounded-lg text-xs font-bold font-arabic border shadow-lg backdrop-blur-sm transform hover:scale-105 transition-transform duration-200`}>
                            {verdictInfo.label}
                          </span>
                        );
                      })()}
                    </div>
                    
                    {/* Views Counter Overlay */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-lg text-white text-xs">
                      <Eye className="w-3 h-3" />
                      <span>{factCheck.views.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 space-y-3">
                    {/* Category Tag */}
                    <div className="inline-flex items-center gap-1 bg-gray-50 text-gray-600 px-2 py-1 rounded-lg text-xs font-medium font-arabic">
                      <span>{factCheck.category}</span>
                    </div>
                    
                    {/* Title */}
                    {(() => {
                      const verdictInfo = getVerdictInfo(factCheck.verdict);
                      return (
                        <h3 className={`text-base font-bold text-gray-900 line-clamp-2 leading-tight font-arabic-heading ${verdictInfo.hover} transition-colors duration-300`}>
                          {factCheck.title}
                        </h3>
                      );
                    })()}

                    {/* Summary */}
                    <p className="text-sm text-gray-600 line-clamp-2 font-arabic leading-relaxed">
                      {factCheck.summary}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-xs text-gray-500 font-arabic">{factCheck.author}</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs text-gray-500 font-arabic">
                        <Clock className="w-3 h-3" />
                        <span>{factCheck.readTime}</span>
                      </div>
                    </div>

                    {/* Read More Button */}
                    <div className="pt-2">
                      <div className="group-hover:bg-red-50 group-hover:text-red-600 text-gray-600 px-3 py-2 rounded-lg border border-gray-200 group-hover:border-red-200 transition-all duration-300 text-center flex items-center justify-center gap-2 font-arabic text-sm">
                        <span>اقرأ المزيد</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
          
          {/* Scroll Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <div className="text-xs text-gray-500 font-arabic">اسحب لرؤية المزيد</div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-1 h-1 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Categories Section - Exactly Like Original */}
      <section className="container mx-auto px-4 py-12" style={{paddingLeft: '70px', paddingRight: '70px'}}>
        {/* مؤكد (Confirmed) Section - Horizontal Cards */}
        {mockFactChecks.filter(fc => fc.verdict === 'confirmed').length > 0 && (
          <div className="mb-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">مؤكد</h3>
                <span className="text-sm text-gray-500 font-arabic">أخبار مؤكدة من مصادر رسمية</span>
              </div>
              <Link href="/search" className="text-blue-500 hover:text-blue-600 font-arabic text-sm transition-colors">
                عرض المزيد ←
              </Link>
            </div>
            
            {/* Horizontal Cards Grid - 2x4 layout */}
            <div className="grid md:grid-cols-2 gap-6 px-8">
              {mockFactChecks.filter(fc => fc.verdict === 'confirmed').slice(0, 8).map((factCheck, index) => (
                <article 
                  key={`confirmed-${factCheck.id}`}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => router.push(`/article/${factCheck.id}`)}
                >
                  {/* Enhanced Card Content */}
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
                          <div className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md border border-white">
                            مؤكد
                          </div>
                        </div>
                      </div>
                      
                      {/* Compact Content Section */}
                      <div className="flex-1 min-w-0">
                        {/* Category & Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium font-arabic border border-blue-100">
                            {factCheck.category}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <span className="font-arabic">{factCheck.publishDate}</span>
                          </div>
                        </div>
                        
                        {/* Compact Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors font-arabic-heading line-clamp-2">
                          {factCheck.title}
                        </h3>
                        
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
                          <div className="text-blue-500 group-hover:text-blue-600 transition-colors">
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* احتيال (False) Section - Red Theme */}
        {mockFactChecks.filter(fc => fc.verdict === 'false').length > 0 && (
          <div className="mb-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center">
                  <XCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">احتيال</h3>
                <span className="text-sm text-gray-500 font-arabic">معلومات احتيالية ومضللة</span>
              </div>
              <Link href="/search" className="text-red-500 hover:text-red-600 font-arabic text-sm transition-colors">
                عرض المزيد ←
              </Link>
            </div>
            
            {/* Cards Grid - Red Theme */}
            <div className="grid md:grid-cols-2 gap-6 px-8">
              {mockFactChecks.filter(fc => fc.verdict === 'false').slice(0, 8).map((factCheck, index) => (
                <article 
                  key={`false-${factCheck.id}`}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => router.push(`/article/${factCheck.id}`)}
                >
                  {/* Enhanced Card Content */}
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
                          <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md border border-white">
                            احتيال
                          </div>
                        </div>
                      </div>
                      
                      {/* Compact Content Section */}
                      <div className="flex-1 min-w-0">
                        {/* Category & Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-red-50 text-red-700 px-2 py-1 rounded-lg text-xs font-medium font-arabic border border-red-100">
                            {factCheck.category}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <span className="font-arabic">{factCheck.publishDate}</span>
                          </div>
                        </div>
                        
                        {/* Compact Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors font-arabic-heading line-clamp-2">
                          {factCheck.title}
                        </h3>
                        
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
                          <div className="text-red-500 group-hover:text-red-600 transition-colors">
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* عبث (Misleading) Section - Orange Theme */}
        {mockFactChecks.filter(fc => fc.verdict === 'misleading').length > 0 && (
          <div className="mb-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">عبث</h3>
                <span className="text-sm text-gray-500 font-arabic">معلومات مضللة جزئياً</span>
              </div>
              <Link href="/search" className="text-orange-500 hover:text-orange-600 font-arabic text-sm transition-colors">
                عرض المزيد ←
              </Link>
            </div>
            
            {/* Cards Grid - Orange Theme */}
            <div className="grid md:grid-cols-2 gap-6 px-8">
              {mockFactChecks.filter(fc => fc.verdict === 'misleading').slice(0, 8).map((factCheck, index) => (
                <article 
                  key={`misleading-${factCheck.id}`}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => router.push(`/article/${factCheck.id}`)}
                >
                  {/* Enhanced Card Content */}
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
                          <div className="bg-orange-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md border border-white">
                            عبث
                          </div>
                        </div>
                      </div>
                      
                      {/* Compact Content Section */}
                      <div className="flex-1 min-w-0">
                        {/* Category & Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-orange-50 text-orange-700 px-2 py-1 rounded-lg text-xs font-medium font-arabic border border-orange-100">
                            {factCheck.category}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <span className="font-arabic">{factCheck.publishDate}</span>
                          </div>
                        </div>
                        
                        {/* Compact Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-orange-600 transition-colors font-arabic-heading line-clamp-2">
                          {factCheck.title}
                        </h3>
                        
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
                          <div className="text-orange-500 group-hover:text-orange-600 transition-colors">
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* إرباك (Unproven) Section - Yellow Theme */}
        {mockFactChecks.filter(fc => fc.verdict === 'unproven').length > 0 && (
          <div className="mb-12">
            {/* Section Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">إرباك</h3>
                <span className="text-sm text-gray-500 font-arabic">معلومات غير مؤكدة</span>
              </div>
              <Link href="/search" className="text-yellow-500 hover:text-yellow-600 font-arabic text-sm transition-colors">
                عرض المزيد ←
              </Link>
            </div>
            
            {/* Cards Grid - Yellow Theme */}
            <div className="grid md:grid-cols-2 gap-6 px-8">
              {mockFactChecks.filter(fc => fc.verdict === 'unproven').slice(0, 8).map((factCheck, index) => (
                <article 
                  key={`unproven-${factCheck.id}`}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer transform hover:scale-[1.01] hover:-translate-y-1 overflow-hidden"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => router.push(`/article/${factCheck.id}`)}
                >
                  {/* Enhanced Card Content */}
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
                          <div className="bg-yellow-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-md border border-white">
                            إرباك
                          </div>
                        </div>
                      </div>
                      
                      {/* Compact Content Section */}
                      <div className="flex-1 min-w-0">
                        {/* Category & Date */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="bg-yellow-50 text-yellow-700 px-2 py-1 rounded-lg text-xs font-medium font-arabic border border-yellow-100">
                            {factCheck.category}
                          </span>
                          <div className="flex items-center gap-1 text-gray-500 text-xs">
                            <Clock className="w-3 h-3" />
                            <span className="font-arabic">{factCheck.publishDate}</span>
                          </div>
                        </div>
                        
                        {/* Compact Title */}
                        <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-yellow-600 transition-colors font-arabic-heading line-clamp-2">
                          {factCheck.title}
                        </h3>
                        
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
                          <div className="text-yellow-500 group-hover:text-yellow-600 transition-colors">
                            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

      </section>

      {/* Featured Article Section */}
      {mockFactChecks.find(fc => fc.featured) && (
        <section className="container mx-auto px-4 py-16" style={{paddingLeft: '70px', paddingRight: '70px'}}>
          {/* Compact Title Header */}
          <div className="flex items-center justify-between mb-12">
            {/* Title Section - Left Side */}
            <div className="text-left">
              <div className="flex items-center justify-start gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-arabic-heading">
                    التحقق المميز
                  </h2>
                  <p className="text-gray-600 font-arabic text-sm">التحقق الأكثر أهمية وتأثيراً</p>
                </div>
              </div>
              {/* Special Indicator */}
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 px-3 py-1.5 rounded-xl">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                <span className="text-yellow-600 font-arabic font-medium text-xs">يستحق اهتمامك الخاص</span>
              </div>
            </div>
            
            {/* Read Article Button - Right Side */}
            <button 
              onClick={() => {
                console.log('Featured article clicked');
              }}
              className="group text-yellow-600 hover:text-yellow-700 font-arabic font-medium flex items-center gap-2 transition-colors duration-300"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
              <span>قراءة المقال</span>
            </button>
          </div>
          
          {/* Enhanced Professional Card */}
          <div className="max-w-7xl mx-auto">
            <article className="group bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 transform hover:scale-[1.01] hover:-translate-y-2 transition-all duration-500 relative">
              {/* Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              
              {/* Featured Floating Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white p-4 rounded-2xl shadow-2xl border-4 border-white transform rotate-12 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center gap-2">
                    <Star className="w-6 h-6 fill-current animate-pulse" />
                    <span className="text-sm font-bold font-arabic">مميز</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:flex h-full">
                {/* Enhanced Image Section */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/20 to-amber-100/20"></div>
                  <LazyImage 
                    src={mockFactChecks.find(fc => fc.featured)!.image}
                    alt={mockFactChecks.find(fc => fc.featured)!.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Enhanced Verdict Badge */}
                  <div className="absolute bottom-6 right-6">
                    <VerdictBadge verdict={mockFactChecks.find(fc => fc.featured)!.verdict} size="lg" />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3 border border-white/30 shadow-lg animate-float">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="lg:w-1/2 p-10 lg:p-12 relative z-10">
                  {/* Category and Date Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 px-4 py-2 rounded-2xl text-sm font-medium font-arabic border border-yellow-200 shadow-sm">
                      {mockFactChecks.find(fc => fc.featured)!.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span className="font-arabic">{mockFactChecks.find(fc => fc.featured)!.date}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced Title */}
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-amber-600 transition-colors font-arabic-heading">
                    {mockFactChecks.find(fc => fc.featured)!.title}
                  </h2>
                  
                  {/* Enhanced Summary */}
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed font-arabic">
                    {mockFactChecks.find(fc => fc.featured)!.summary}
                  </p>

                  {/* Enhanced Professional Metadata Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-10">
                    <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 group-hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <User className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-sm font-bold text-gray-900 font-arabic mb-1">
                        {mockFactChecks.find(fc => fc.featured)!.author}
                      </div>
                      <div className="text-xs text-gray-500 font-arabic">المحقق</div>
                    </div>
                    
                    <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 group-hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Eye className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="text-sm font-bold text-gray-900 mb-1">
                        {mockFactChecks.find(fc => fc.featured)!.views.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500 font-arabic">مشاهدة</div>
                    </div>
                    
                    <div className="text-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 group-hover:shadow-lg transition-shadow duration-300 border border-gray-200">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Clock className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="text-sm font-bold text-gray-900 mb-1 font-arabic">
                        {mockFactChecks.find(fc => fc.featured)!.readTime}
                      </div>
                      <div className="text-xs text-gray-500 font-arabic">للقراءة</div>
                    </div>
                  </div>
                  
                  {/* Enhanced Premium CTA Button */}
                  <button 
                    onClick={() => {
                      console.log('Featured article button clicked');
                    }}
                    className="group w-full bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white px-10 py-5 rounded-3xl hover:from-yellow-600 hover:via-amber-600 hover:to-orange-600 transition-all duration-300 font-bold text-lg flex items-center justify-center gap-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 font-arabic border border-yellow-400/20 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span>📖 اقرأ التحقق كاملاً</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Premium Indicator Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 opacity-30 group-hover:opacity-70 transition-opacity duration-300"></div>
            </article>
          </div>
        </section>
      )}

      {/* Complete Trust Section - Matching Original Design */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          {/* Blue Header Badge */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl px-12 py-8 mb-6 inline-block shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                  <svg className="w-6 h-6 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-arabic-heading">
                    منصة موثوقة ومعتمدة
                  </h2>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-200 text-sm font-arabic">معتمدة دولياً</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Subtitle Text */}
            <p className="text-lg text-gray-700 font-arabic max-w-4xl mx-auto leading-relaxed mb-12">
              نفخر بكوننا المرجع الأول للتحقق من الأخبار في العالم العربي، معتمدون من الشبكة الدولية لفحص الحقائق
            </p>
          </div>

          {/* Statistics Grid Section - Matching Original Design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
            {/* Years of Experience */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">8+</div>
              <div className="text-sm text-gray-600 font-arabic">سنوات خبرة</div>
            </div>

            {/* Students */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">15,420</div>
              <div className="text-sm text-gray-600 font-arabic">طالب متدرب</div>
            </div>

            {/* Monthly Visitors */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">1.2M</div>
              <div className="text-sm text-gray-600 font-arabic">زائر شهريا</div>
            </div>

            {/* Completed Checks */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-all duration-300">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">2,847+</div>
              <div className="text-sm text-gray-600 font-arabic">فحص مكتمل</div>
            </div>
          </div>

          {/* Partners and Services Section */}
          <div className="relative">
            {/* Partners Icon */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            
            {/* Partners Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 font-arabic-heading">شركاؤنا والمنظمات المعتمدة</h3>
              <p className="text-lg text-gray-600 font-arabic max-w-3xl mx-auto leading-relaxed">
                نعمل بالتعاون مع أهم المنظمات الدولية في مجال مكافحة المعلومات المضللة وتعزيز البيانات الرقمية
              </p>
            </div>

            {/* Service Cards - Matching Original Design */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Research and Development */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">البحث والتطوير</h3>
                <p className="text-gray-600 mb-6 font-arabic leading-relaxed">
                  نعمل على البحث المتقدم في مجال مكافحة المعلومات المضللة وتطوير أحدث التقنيات في هذا المجال
                </p>
                <Link href="/research" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium font-arabic transition-colors">
                  <span>تعرف على أبحاثنا</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>

              {/* Digital Media Education */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">تعليم الإعلام الرقمي</h3>
                <p className="text-gray-600 mb-6 font-arabic leading-relaxed">
                  شريك رسمي في مبادرات تعزيز الوعي بالإعلام الرقمي وتطوير مهارات التحقق من المعلومات
                </p>
                <Link href="/academy" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium font-arabic transition-colors">
                  <span>تعلم معنا</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
              </div>

              {/* International Verification Network */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">الشبكة الدولية للتحقق</h3>
                <p className="text-gray-600 mb-6 font-arabic leading-relaxed">
                  عضو معتمد في الشبكة الدولية للتحقق من الحقائق (IFCN) والملتزم بأعلى معايير الجودة والشفافية
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium font-arabic transition-colors">
                  <span>معتمدون دولياً</span>
                  <ChevronLeft className="w-4 h-4" />
                </Link>
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
                    <Link 
                      href="/academy"
                      className="group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 font-arabic flex items-center gap-3 inline-flex"
                    >
                      استكشف الدورات
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
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
  )
}

export default HomePage