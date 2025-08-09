import React from 'react';
import { BookOpen, Clock, Star, Users, Award } from 'lucide-react';
import { Course } from '../types';
import { mockCourses } from '../data/mockData';

interface AcademyPageProps {
  // Add props as needed
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

// CourseCard Component
const CourseCard: React.FC<{ course: Course; featured?: boolean }> = ({ course, featured = false }) => (
  <div className={`group bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
    featured ? 'border-primary-200 ring-2 ring-primary-100' : 'border-gray-200'
  }`}>
    {/* Course Image with Overlay */}
    <div className="relative aspect-video overflow-hidden">
      <LazyImage 
        src={course.image} 
        alt={course.title}
        className="w-full h-full group-hover:scale-110 transition-transform duration-500 object-cover"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Level Badge */}
      <div className="absolute top-4 right-4">
        <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm font-arabic ${
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
          <span className="bg-warning-500 text-white px-3 py-1 rounded-full text-xs font-bold font-arabic">
            ⭐ مميز
          </span>
        </div>
      )}
      
      {/* Duration Badge */}
      <div className="absolute bottom-4 left-4">
        <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm font-arabic">
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
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-600 transition-colors font-arabic-heading">
        {course.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed font-arabic">
        {course.description}
      </p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Users className="w-4 h-4" />
          <span className="text-sm font-arabic">{course.students} طالب</span>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-success-600 font-arabic">{course.price}</div>
        </div>
      </div>
      
      <button className="w-full bg-primary-600 text-white py-3 rounded-xl hover:bg-primary-700 transition-colors font-medium font-arabic">
        ابدأ الدورة الآن
      </button>
    </div>
  </div>
);

const AcademyPage: React.FC<AcademyPageProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50/30" dir="rtl">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
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
                  <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
            <div className="bg-gradient-to-r from-primary-600 to-primary-600 rounded-3xl p-12 text-white shadow-2xl">
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
};

export default AcademyPage;