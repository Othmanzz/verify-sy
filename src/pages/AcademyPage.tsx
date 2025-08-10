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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Compact Header with Back Button and Title */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 font-arabic-heading">أكاديمية تأكد</h1>
                <p className="text-xs text-gray-500 font-arabic">التعليم والتدريب</p>
              </div>
            </div>
            <button 
              onClick={() => setCurrentPage?.('home')}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-arabic font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              العودة للرئيسية
            </button>
          </div>
        </div>
      </div>

      {/* Compact Academy Section */}
      <section className="relative py-6 overflow-visible">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            
            {/* Professional Subtitle */}
            <p className="text-lg text-gray-600 font-arabic font-medium mb-8 leading-relaxed">
              تعلم مهارات التحقق من المعلومات والإعلام الرقمي من خلال دوراتنا المجانية المصممة من قبل خبراء
            </p>

            {/* Compact Statistics */}
            <div className="flex flex-wrap justify-center gap-4 text-sm mb-8">
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-blue-600 font-arabic-heading">15,420+</span>
                <span className="text-gray-600 font-arabic">طالب</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-600 font-arabic-heading">25</span>
                <span className="text-gray-600 font-arabic">دورة</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="font-semibold text-yellow-600 font-arabic-heading">معتمدة</span>
                <span className="text-gray-600 font-arabic">شهادات</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-purple-600 font-arabic-heading">100%</span>
                <span className="text-gray-600 font-arabic">مجاني</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area with Modern Background */}
      <div className="bg-white/30 backdrop-blur-sm min-h-screen">
        
        {/* Learning Path Section */}
        <section className="py-10">
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
        <section className="py-8 bg-white/50 backdrop-blur-sm">
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
    </div>
  );
};

export default AcademyPage;