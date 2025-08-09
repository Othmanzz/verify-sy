import React from 'react';
import { CheckCircle, Users, BookOpen, Award, Globe, Target, Shield, Heart, Brain, Zap, Star, ArrowRight, Eye, Clock, TrendingUp, Database, Search } from 'lucide-react';

interface AboutPageProps {
  // Add props as needed
}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50" dir="rtl">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
        {/* Decorative Background - matching home page */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Enhanced Logo with Animation */}
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl">
                  <Shield className="w-16 h-16 text-blue-900" />
                </div>
              </div>
            </div>
            
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl font-black mb-6 font-arabic-heading">
              من نحن
            </h1>
            
            {/* Subtitle with badges */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
              <p className="text-xl text-cyan-200 font-arabic font-medium">
                رسالتنا هي بناء مجتمع واعٍ قادر على التمييز بين الحقيقة والمعلومات المضللة
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-20"></div>
            </div>

            {/* Mission Badges */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
                <Shield className="w-4 h-4 text-cyan-400" />
                الحماية من المعلومات المضللة
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
                <Database className="w-4 h-4 text-green-400" />
                +50,000 تحقق موثوق
              </span>
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 text-white font-arabic text-sm">
                <Users className="w-4 h-4 text-yellow-400" />
                خدمة المجتمع العربي
              </span>
            </div>
            
            {/* Vision Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">2020</div>
                <div className="text-sm opacity-90 font-arabic">سنة التأسيس</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">15</div>
                <div className="text-sm opacity-90 font-arabic">دولة عربية</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">5M+</div>
                <div className="text-sm opacity-90 font-arabic">مستفيد</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20">
                <div className="text-2xl font-bold mb-1">24/7</div>
                <div className="text-sm opacity-90 font-arabic">خدمة مستمرة</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Mission Section */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  رسالتنا
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                  نسعى لبناء مجتمع عربي واعٍ ومحصن ضد المعلومات المضللة
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group text-center p-8 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 rounded-3xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 font-arabic-heading">الدقة والشفافية</h3>
                  <p className="text-blue-700 font-arabic leading-relaxed">نلتزم بأعلى معايير الدقة في التحقق ونعرض منهجيتنا بشفافية كاملة للجمهور</p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 rounded-3xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-arabic-heading">خدمة المجتمع</h3>
                  <p className="text-green-700 font-arabic leading-relaxed">نعمل بإخلاص لخدمة المجتمع العربي وحمايته من المعلومات المضللة والأخبار الزائفة</p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100 rounded-3xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4 font-arabic-heading">التعليم والتوعية</h3>
                  <p className="text-purple-700 font-arabic leading-relaxed">نسعى لتعليم الجمهور مهارات التحقق والتفكير النقدي والوعي الإعلامي</p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Story Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl mb-8 shadow-lg">
                  <BookOpen className="w-10 h-10 text-orange-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-arabic-heading">قصتنا</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-arabic">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>
                      تأسست منصة "تأكد" في عام 2020 استجابةً للحاجة الملحة لوجود مرجع موثوق للتحقق من المعلومات في العالم العربي، 
                      خاصة مع تزايد انتشار المعلومات المضللة على وسائل التواصل الاجتماعي.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>
                      بدأنا كفريق صغير من الصحفيين والباحثين المتخصصين، والآن أصبحنا منصة رائدة تضم أكثر من 50 خبيراً في مختلف المجالات، 
                      نعمل على مدار الساعة لضمان وصول المعلومات الصحيحة للجمهور العربي.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>
                      حتى اليوم، قمنا بالتحقق من أكثر من 50,000 ادعاء وساعدنا ملايين المستخدمين في التمييز بين الحقيقة والإشاعة.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 via-cyan-100 to-blue-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-blue-800 mb-2 font-arabic-heading">إنجازاتنا بالأرقام</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
                    <div className="text-sm text-gray-600 font-arabic">تحقق مكتمل</div>
                  </div>
                  <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-green-600 mb-2">5M+</div>
                    <div className="text-sm text-gray-600 font-arabic">مستخدم استفاد</div>
                  </div>
                  <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600 font-arabic">خبير متخصص</div>
                  </div>
                  <div className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">15</div>
                    <div className="text-sm text-gray-600 font-arabic">دولة عربية</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Team Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl mb-8 shadow-lg">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
                فريق العمل
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-arabic leading-relaxed">
                نفخر بفريقنا المتنوع من الخبراء والمتخصصين في مختلف المجالات، الذين يعملون بإخلاص لخدمة الحقيقة
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">15+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">الصحفيون المحققون</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">صحفيون متخصصون في التحقق من الأخبار والمعلومات بأعلى معايير المهنية</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-green-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">20+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">الخبراء العلميون</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">خبراء في العلوم والطب والتكنولوجيا لضمان دقة المعلومات العلمية</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-orange-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">10+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">المطورون التقنيون</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">مطورون ومهندسو نظم يعملون على تطوير التقنيات المتقدمة للتحقق</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-purple-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">12+</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">المدربون والأكاديميون</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">أساتذة ومدربون معتمدون لتطوير المحتوى التعليمي وبرامج التدريب</p>
              </div>
            </div>
          </section>

          {/* Enhanced Methodology Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-12 border-2 border-gray-100">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl mb-8 shadow-lg">
                  <Search className="w-10 h-10 text-cyan-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  منهجيتنا في التحقق
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                  نتبع منهجية علمية دقيقة تضمن أعلى مستويات الدقة والموثوقية في التحقق
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mt-6"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Database className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      1
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">جمع المعلومات</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">نجمع الادعاءات من مصادر متنوعة ونصنفها حسب الأولوية والتأثير المحتمل</p>
                </div>

                <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Search className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      2
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">البحث والتقصي</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">نبحث في المصادر الموثوقة والأدبيات العلمية والتقارير الرسمية بعمق</p>
                </div>

                <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      3
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">مراجعة الخبراء</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">يراجع التحقيق خبراء متخصصون في المجال ذي الصلة لضمان الدقة</p>
                </div>

                <div className="group text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      4
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">النشر والمتابعة</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">ننشر النتائج مع التحديث المستمر عند توفر معلومات جديدة</p>
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Values Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-green-100 rounded-3xl mb-8 shadow-lg">
                <Star className="w-10 h-10 text-emerald-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
                قيمنا الأساسية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                نؤمن بمجموعة من القيم الراسخة التي توجه عملنا وتحدد هويتنا المؤسسية
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-3 border-white/30 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm bg-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-arabic-heading">النزاهة والمصداقية</h3>
                <p className="opacity-90 font-arabic leading-relaxed text-lg">نلتزم بأعلى معايير النزاهة المهنية والأخلاقية في جميع أعمالنا، ونضع المصداقية فوق كل اعتبار</p>
              </div>

              <div className="group bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-3 border-white/30 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm bg-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-arabic-heading">التميز والإبداع</h3>
                <p className="opacity-90 font-arabic leading-relaxed text-lg">نسعى للتميز والإبداع في كل ما نقوم به، ونطور أساليب مبتكرة لخدمة جمهورنا بأفضل الطرق</p>
              </div>

              <div className="group bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-3 border-white/30 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm bg-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <Globe className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-arabic-heading">الشمولية والعدالة</h3>
                <p className="opacity-90 font-arabic leading-relaxed text-lg">نخدم جميع أفراد المجتمع العربي دون تمييز، ونؤمن بحق الجميع في الوصول للمعلومات الصحيحة</p>
              </div>
            </div>
          </section>

          {/* Enhanced Partners Section */}
          <section className="text-center">
            <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 rounded-3xl p-12 shadow-2xl border border-gray-200">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mb-8 shadow-lg">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-arabic-heading">
                شركاؤنا في الحقيقة
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto font-arabic leading-relaxed">
                نتعاون مع شبكة واسعة من المؤسسات الموثوقة والمنظمات الرائدة لضمان تقديم أعلى مستويات الجودة والمصداقية في التحقق
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-blue-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">الشبكات الإعلامية</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">شراكات استراتيجية مع كبرى الشبكات الإعلامية العربية والدولية لضمان انتشار المعلومات الموثقة</p>
                </div>
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-green-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">المؤسسات الأكاديمية</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">تعاون مع الجامعات ومراكز البحث المرموقة لتطوير المعايير العلمية في التحقق من المعلومات</p>
                </div>
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-100 hover:border-purple-200">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">المنظمات الدولية</h3>
                  <p className="text-gray-600 font-arabic leading-relaxed">عضوية فاعلة في الشبكات العالمية لمحققي الحقائق وتبادل أفضل الممارسات والخبرات الدولية</p>
                </div>
              </div>
              
              <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-arabic font-medium">عضو في الشبكة الدولية لمحققي الحقائق</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-arabic font-medium">شراكة مع منظمة الشفافية العالمية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-arabic font-medium">معتمد من اتحاد الصحفيين العرب</span>
                  </div>
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