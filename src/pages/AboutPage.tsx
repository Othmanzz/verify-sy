import React from 'react';
import { CheckCircle, Users, BookOpen, Award, Globe } from 'lucide-react';

interface AboutPageProps {
  // Add props as needed
}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50/20" dir="rtl">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 text-white py-20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-32 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-32 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 border-4 border-white rounded-3xl mb-8 p-4">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(100,100)">
                  <g opacity="0.8">
                    <path d="M-30,-20 L-10,0 L20,-30" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="25" cy="-25" r="3" fill="white"/>
                    <circle cx="30" cy="-15" r="5" fill="white"/>
                    <rect x="-35" y="5" width="25" height="15" fill="white" rx="2"/>
                    <rect x="10" y="-5" width="8" height="25" fill="white" rx="1"/>
                    <rect x="25" y="0" width="15" height="8" fill="white" rx="1"/>
                  </g>
                  <text x="0" y="40" fontSize="20" fontWeight="900" textAnchor="middle" fill="white" fontFamily="serif">
                    تأكد
                  </text>
                  <text x="0" y="60" fontSize="10" fontWeight="500" textAnchor="middle" fill="white" fillOpacity="0.8" fontFamily="serif">
                    لأن الخبر أمانة
                  </text>
                </g>
              </svg>
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

                <div className="text-center p-6 bg-gradient-to-br from-accent-50 to-accent-100 rounded-2xl">
                  <div className="w-12 h-12 bg-primary-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-900 mb-3 font-arabic-heading">التعليم والتوعية</h3>
                  <p className="text-primary-800 font-arabic">نسعى لتعليم الجمهور مهارات التحقق والتفكير النقدي</p>
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
                    تأسست منصة "تأكد" في عام 2020 استجابةً للحاجة الملحة لوجود مرجع موثوق للتحقق من المعلومات في العالم العربي، 
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
              
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8">
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
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white">👨‍💼</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 font-arabic-heading">الصحفيون المحققون</h3>
                <p className="text-gray-600 text-sm font-arabic">15+ صحفي متخصص في التحقق من الأخبار</p>
              </div>

              <div className="bg-white rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
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
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-6">
                  <span className="text-3xl">🔍</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  منهجيتنا في التحقق
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 border-2 border-white rounded-2xl flex items-center justify-center mx-auto mb-6 p-2">
                  <svg 
                    viewBox="0 0 120 120" 
                    className="w-full h-full" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g transform="translate(60,60)">
                      <g opacity="0.7">
                        <path d="M-18,-12 L-6,0 L12,-18" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
                        <circle cx="15" cy="-15" r="2" fill="white"/>
                        <circle cx="18" cy="-9" r="3" fill="white"/>
                        <rect x="-21" y="3" width="15" height="9" fill="white" rx="1"/>
                        <rect x="6" y="-3" width="5" height="15" fill="white" rx="1"/>
                        <rect x="15" y="0" width="9" height="5" fill="white" rx="1"/>
                      </g>
                      <text x="0" y="25" fontSize="14" fontWeight="900" textAnchor="middle" fill="white" fontFamily="serif">
                        تأكد
                      </text>
                    </g>
                  </svg>
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

              <div className="bg-gradient-to-br from-primary-600 to-primary-950 text-white rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-300">
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
                  <div className="text-2xl font-bold text-gray-700 font-arabic">📺 الشبكات الإعلامية</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-gray-700 font-arabic">🏛️ المؤسسات الأكاديمية</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-2xl font-bold text-gray-700 font-arabic">🌐 المنظمات الدولية</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;