import React, { useState } from 'react';
import { BookOpen, Clock, Star, Users, Award, Play, CheckCircle, ArrowLeft, Globe, Download, Target } from 'lucide-react';
import { Course } from '../types';
import { mockCourses } from '../data/mockData';

interface AcademyPageProps {
  setCurrentPage?: (page: string) => void;
}

// LazyImage Component
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => {
  return (
    <div className={className}>
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </div>
  );
};

// Modern CourseCard Component
const CourseCard: React.FC<{ course: Course; featured?: boolean }> = ({ course, featured = false }) => (
  <div className={`group relative bg-white rounded-3xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
    featured ? 'border-blue-200 ring-2 ring-blue-100' : 'border-gray-200'
  }`}>
    {/* Course Image with Overlay */}
    <div className="relative aspect-video overflow-hidden">
      <LazyImage 
        src={course.image} 
        alt={course.title}
        className="w-full h-full group-hover:scale-110 transition-transform duration-500 object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
          <Play className="w-6 h-6 text-white ml-1" />
        </div>
      </div>
      
      {/* Level Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm font-arabic ${
          course.level === 'مبتدئ' ? 'bg-green-500/90 text-white' :
          course.level === 'متوسط' ? 'bg-blue-500/90 text-white' :
          'bg-purple-500/90 text-white'
        }`}>
          {course.level}
        </span>
      </div>
      
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-yellow-500 text-white rounded-2xl text-xs font-bold shadow-lg font-arabic">
            ⭐ مميزة
          </span>
        </div>
      )}
    </div>
    
    {/* Course Content */}
    <div className="p-6">
      {/* Course Meta */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span className="font-arabic">{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium">{course.rating}</span>
        </div>
      </div>
      
      {/* Course Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
        {course.title}
      </h3>
      
      {/* Course Description */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed font-arabic">
        {course.description}
      </p>
      
      {/* Course Features */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {course.certificate && (
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium font-arabic">
              📜 شهادة
            </span>
          )}
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-lg text-xs font-medium font-arabic">
            مجاني
          </span>
        </div>
        <span className="text-lg font-bold text-blue-600">
          {course.price === 0 ? 'مجاني' : `$${course.price}`}
        </span>
      </div>
    </div>
    
    {/* Course CTA */}
    <div className="px-6 pb-6">
      <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-2xl font-bold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-arabic">
        ابدأ الدورة الآن
      </button>
    </div>
  </div>
);

const AcademyPage: React.FC<AcademyPageProps> = ({ setCurrentPage }) => {
  const [activeFilter, setActiveFilter] = useState('جميع المستويات');
  
  const filters = ['جميع المستويات', 'مبتدئ', 'متوسط', 'متقدم'];
  
  const filteredCourses = activeFilter === 'جميع المستويات' 
    ? mockCourses 
    : mockCourses.filter(course => course.level === activeFilter);

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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Academy Icon */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <BookOpen className="w-16 h-16 text-blue-900" />
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-black mb-6 font-arabic-heading">
              أكاديمية تأكد للتعليم
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-8 max-w-4xl mx-auto font-arabic">
              تعلم مهارات التحقق من المعلومات والإعلام الرقمي من خلال دوراتنا المجانية
              <br className="hidden md:block" />
              المصممة من قبل خبراء في المجال
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Users className="w-8 h-8 mx-auto mb-3 text-cyan-300" />
                <div className="text-2xl font-bold mb-1">15,420+</div>
                <div className="text-sm opacity-90 font-arabic">طالب متخرج</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <BookOpen className="w-8 h-8 mx-auto mb-3 text-green-300" />
                <div className="text-2xl font-bold mb-1">25</div>
                <div className="text-sm opacity-90 font-arabic">دورة تدريبية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Award className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                <div className="text-2xl font-bold mb-1">معتمدة</div>
                <div className="text-sm opacity-90 font-arabic">شهادات دولية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Globe className="w-8 h-8 mx-auto mb-3 text-purple-300" />
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-90 font-arabic">مجاني</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-900 px-10 py-4 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 font-arabic">
                استكشف الدورات
              </button>
              <button className="border-2 border-white/60 text-white px-10 py-4 rounded-2xl font-bold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:scale-105 font-arabic">
                <Download className="w-5 h-5 inline mr-2" />
                دليل المتعلم
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-900 mb-4 font-arabic-heading">
                مسار التعلم المتكامل
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
                رحلة تعليمية شاملة تأخذك من المبتدئ إلى الخبير في مجال التحقق من المعلومات
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-green-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">المرحلة الأولى</h3>
                  <p className="text-gray-600 font-arabic mb-6">تعلم أساسيات التحقق من المعلومات وتحديد المصادر الموثوقة</p>
                  <ul className="space-y-2 font-arabic text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      مقدمة في التحقق
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      تحديد المصادر
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      أدوات البحث الأساسية
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-blue-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">المرحلة الثانية</h3>
                  <p className="text-gray-600 font-arabic mb-6">تطوير المهارات المتقدمة واستخدام الأدوات المتخصصة</p>
                  <ul className="space-y-2 font-arabic text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      التحليل المتقدم
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      الأدوات التقنية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                      كشف التلاعب
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-50"></div>
                <div className="relative">
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">المرحلة الثالثة</h3>
                  <p className="text-gray-600 font-arabic mb-6">احتراف المجال والحصول على الشهادة المعتمدة</p>
                  <ul className="space-y-2 font-arabic text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      مشاريع تطبيقية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      ورش عملية
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500" />
                      شهادة معتمدة
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-900 mb-4 font-arabic-heading">
                الدورات التدريبية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic">
                دورات شاملة ومتخصصة في التحقق من المعلومات والإعلام الرقمي
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 rounded-2xl p-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 font-arabic ${
                      activeFilter === filter
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <CourseCard 
                  key={course.id} 
                  course={course} 
                  featured={index === 0}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-4 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 font-arabic">
                عرض المزيد من الدورات
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;