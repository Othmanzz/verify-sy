'use client'

import React from 'react';
import { CheckCircle, Users, BookOpen, Award, Globe, Target, Shield, Heart, Brain, Zap, Star, ArrowRight, Eye, Clock, TrendingUp, Database, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Compact Header with Back Button and Title */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 font-arabic-heading">من نحن</h1>
                <p className="text-xs text-gray-500 font-arabic">قصة تأكد</p>
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

      {/* Compact About Section */}
      <section className="relative py-6 overflow-visible">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            
            {/* Hero Title with Mission */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-arabic-heading leading-tight mb-4">
                تنفّس من رئة الحرية
              </h2>
              
              {/* Mission Statement */}
              <p className="text-lg text-gray-600 font-arabic leading-relaxed mb-6">
                منصة للتحقق من المعلومات، تسعى لبناء مجتمع واعٍ ومحصن ضد المعلومات المضللة
              </p>
            </div>
            
            {/* Compact Statistics */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-blue-600 font-arabic-heading">2011</span>
                <span className="text-gray-600 font-arabic">البداية</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-semibold text-green-600 font-arabic-heading">2016</span>
                <span className="text-gray-600 font-arabic">الإطلاق الرسمي</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-semibold text-purple-600 font-arabic-heading">سوري</span>
                <span className="text-gray-600 font-arabic">أول منصة</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-indigo-600 font-arabic-heading">مستقل</span>
                <span className="text-gray-600 font-arabic">بالكامل</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Modern Background */}
      <div className="bg-white/30 backdrop-blur-sm min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Mission Section */}
          <section className="mb-20">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl mb-6 shadow-lg">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  رسالتنا ورؤيتنا
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-arabic leading-relaxed">
                  الالتزام بنشر الحقائق الكاملة، الاستقلالية التامة، وردم الهوة بين الجماعات المختلفة
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group text-center p-8 bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-100 rounded-3xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 font-arabic-heading">الاستقلالية التامة</h3>
                  <p className="text-blue-700 font-arabic leading-relaxed">نعمل بشكل مستقل تماماً وغير منحاز، ملتزمون بالمعايير المهنية والأخلاقية العليا</p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 rounded-3xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4 font-arabic-heading">لغة الإنسانية الموحدة</h3>
                  <p className="text-green-700 font-arabic leading-relaxed">نسعى لخلق لغة موحدة للإنسانية وردم الهوة بين الجماعات المختلفة</p>
                </div>

                <div className="group text-center p-8 bg-gradient-to-br from-purple-50 via-purple-100 to-indigo-100 rounded-3xl border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-800 mb-4 font-arabic-heading">زراعة الوعي</h3>
                  <p className="text-purple-700 font-arabic leading-relaxed">نسعى لتعزيز الوعي النقدي في المشهد الإعلامي المعقد وكسر الحواجز</p>
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
                      بدأت قصة &ldquo;تأكد&rdquo; في مارس 2011 كموقع إخباري باسم &ldquo;شو الأخبار&rdquo; يسعى لكشف الحقيقة حول الأحداث في سوريا. 
                      اعتُقل أول محرر، ودمرت الأجهزة الأمنية السورية المحتوى الأصلي.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>
                      في يناير 2014، نشرنا أول مقال لمواجهة دعاية داعش. وفي 2016، أطلقنا كصفحة فيسبوك باسم &ldquo;منصة تحقق&rdquo;، 
                      ثم أطلقنا الموقع الرسمي في مارس 2016.
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></div>
                    <p>
                      في مارس 2021، جددنا المنصة لتصبح أول منصة سورية متخصصة في التحقق من المعلومات، 
                      تهدف لمكافحة المعلومات المضللة وبناء الوعي النقدي.
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
                  <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Database className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">50K+</div>
                      <div className="text-sm font-medium text-gray-600 font-arabic">تحقق مكتمل</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Users className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">5M+</div>
                      <div className="text-sm font-medium text-gray-600 font-arabic">مستخدم استفاد</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Star className="w-8 h-8 text-orange-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">50+</div>
                      <div className="text-sm font-medium text-gray-600 font-arabic">خبير متخصص</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-full -translate-y-10 translate-x-10"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Globe className="w-8 h-8 text-purple-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">15</div>
                      <div className="text-sm font-medium text-gray-600 font-arabic">دولة عربية</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Organizational Structure Section */}
          <section className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-3xl mb-8 shadow-lg">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-arabic-heading">
                الهيكل التنظيمي
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-arabic leading-relaxed">
                منظمة تحت إشراف مجلس إدارة يضمن أعلى معايير الحوكمة والشفافية
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mt-6"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-blue-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">مجلس الإدارة</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">يشرف على الاستراتيجية العامة ويضمن الالتزام بأعلى معايير المهنية والأخلاق</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-green-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">الرصد والتحرير</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">قسم مختص برصد المعلومات وتحريرها وفقاً لأعلى المعايير المهنية</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-orange-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">الإنتاج المرئي</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">قسم متخصص في إنتاج المحتوى المرئي والتصاميم الإبداعية</p>
              </div>

              <div className="group bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-2 border-gray-100 hover:border-purple-200">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <Globe className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">المنح والشراكات</h3>
                <p className="text-gray-600 font-arabic leading-relaxed">قسم يدير العلاقات والشراكات والبرامج التمويلية مع المؤسسات</p>
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
                <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Database className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        1
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">جمع المعلومات</h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">نجمع الادعاءات من مصادر متنوعة ونصنفها حسب الأولوية والتأثير المحتمل</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-green-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        2
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">البحث والتقصي</h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">نبحث في المصادر الموثوقة والأدبيات العلمية والتقارير الرسمية بعمق</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-1 -left-1 w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                        3
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">مراجعة الخبراء</h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">يراجع التحقيق خبراء متخصصون في المجال ذي الصلة لضمان الدقة</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
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
                نؤمن بمجموعة من القيم الراسخة التي توجه عملنا ونلتزم بالاعتراف بأخطائنا وتصحيحها
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
                <h3 className="text-2xl font-bold mb-6 font-arabic-heading">الاستقلالية</h3>
                <p className="opacity-90 font-arabic leading-relaxed text-lg">نحافظ على استقلاليتنا التامة ونرفض أي تأثيرات خارجية قد تؤثر على حيادية تقاريرنا</p>
              </div>

              <div className="group bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 text-white rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-3 border-white/30 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm bg-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <Search className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-arabic-heading">البحث عن الحقيقة</h3>
                <p className="opacity-90 font-arabic leading-relaxed text-lg">التزام دائم بالبحث عن الحقيقة مهما كانت التحديات والعقبات</p>
              </div>

              <div className="group bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white rounded-3xl p-10 text-center transform hover:scale-105 transition-all duration-500 shadow-2xl hover:shadow-3xl">
                <div className="relative mb-8">
                  <div className="w-20 h-20 border-3 border-white/30 rounded-3xl flex items-center justify-center mx-auto backdrop-blur-sm bg-white/10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                <h3 className="text-2xl font-bold mb-6 font-arabic-heading">التركيز الإنساني</h3>
                <p className="opacity-90 font-arabic leading-relaxed text-lg">نضع الإنسان في مركز اهتمامنا ونسعى لخدمة المجتمع بكل إخلاص وتفان</p>
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
                <div className="bg-white rounded-3xl p-8 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">الشبكات الإعلامية</h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">شراكات استراتيجية مع كبرى الشبكات الإعلامية العربية والدولية لضمان انتشار المعلومات الموثقة</p>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">المؤسسات الأكاديمية</h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">تعاون مع الجامعات ومراكز البحث المرموقة لتطوير المعايير العلمية في التحقق من المعلومات</p>
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-8 text-center group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-purple-50 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic-heading">المنظمات الدولية</h3>
                    <p className="text-gray-600 font-arabic leading-relaxed">عضوية فاعلة في الشبكات العالمية لمحققي الحقائق وتبادل أفضل الممارسات والخبرات الدولية</p>
                  </div>
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
    </div>
  );
};

export default AboutPage;