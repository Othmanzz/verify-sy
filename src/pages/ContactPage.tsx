import React, { useState } from 'react';
import { MessageCircle, Send, Clock, AlertCircle, CheckCircle, ArrowLeft, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage?: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Compact Header with Back Button and Title */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 font-arabic-heading">اتصل بنا</h1>
                <p className="text-xs text-gray-500 font-arabic">تواصل معنا</p>
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

      {/* Compact Contact Section */}
      <section className="relative py-6 overflow-visible">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8">
            
            {/* Hero Title */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-arabic-heading leading-tight mb-4">
                نحن هنا لمساعدتك
              </h2>
              
              {/* Contact Statement */}
              <p className="text-lg text-gray-600 font-arabic leading-relaxed mb-6">
                تواصل معنا للإجابة على استفساراتك أو للحصول على الدعم الذي تحتاجه
              </p>
            </div>
            
            {/* Compact Contact Stats */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-green-600 font-arabic-heading">متاح</span>
                <span className="text-gray-600 font-arabic">24/7</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="font-semibold text-blue-600 font-arabic-heading">أقل من 24 ساعة</span>
                <span className="text-gray-600 font-arabic">وقت الرد</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="font-semibold text-purple-600 font-arabic-heading">مجاني</span>
                <span className="text-gray-600 font-arabic">الدعم</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="font-semibold text-orange-600 font-arabic-heading">متعدد</span>
                <span className="text-gray-600 font-arabic">القنوات</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Modern Background */}
      <div className="bg-white/30 backdrop-blur-sm min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Enhanced Contact Options */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">طرق التواصل</h2>
                <p className="text-gray-600 font-arabic">اختر الطريقة الأنسب للتواصل معنا</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">واتساب</h3>
                  <p className="text-gray-600 mb-4 font-arabic">تواصل معنا مباشرة</p>
                  <a href="https://wa.me/963999123456" target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium font-arabic inline-block">
                    أرسل رسالة
                  </a>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">البريد الإلكتروني</h3>
                  <p className="text-gray-600 mb-4 font-arabic text-sm">info@verify-sy.com</p>
                  <a href="mailto:info@verify-sy.com" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium font-arabic inline-block">
                    أرسل إيميل
                  </a>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">ساعات العمل</h3>
                  <p className="text-gray-600 mb-2 font-arabic">الأحد - الخميس</p>
                  <p className="text-purple-600 font-medium font-arabic">9:00 ص - 6:00 م</p>
                </div>

                <div className="bg-white rounded-3xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <AlertCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">التبليغ السريع</h3>
                  <p className="text-gray-600 mb-4 font-arabic">للمعلومات المضللة</p>
                  <button className="bg-orange-600 text-white px-6 py-3 rounded-xl hover:bg-orange-700 transition-colors font-medium font-arabic">
                    بلّغ الآن
                  </button>
                </div>
              </div>
              
              {/* Social Media Section */}
              <div className="mt-12 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">تابعنا على وسائل التواصل</h3>
                  <p className="text-gray-600 font-arabic">ابق على تواصل معنا للحصول على آخر التحديثات</p>
                </div>
                
                <div className="flex justify-center gap-6">
                  <a href="https://facebook.com/verify-sy" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center hover:bg-blue-200 transition-colors group">
                    <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://twitter.com/verify-sy" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center hover:bg-sky-200 transition-colors group">
                    <Twitter className="w-6 h-6 text-sky-600 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://instagram.com/verify-sy" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center hover:bg-pink-200 transition-colors group">
                    <Instagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://linkedin.com/company/verify-sy" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center hover:bg-indigo-200 transition-colors group">
                    <Linkedin className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </section>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <section>
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Send className="w-5 h-5 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 font-arabic-heading">
                      أرسل لنا رسالة
                    </h2>
                  </div>
                  <p className="text-gray-600 font-arabic">سنتواصل معك خلال 24 ساعة من استلام رسالتك</p>
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
                          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-arabic transition-all duration-200"
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
                          className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-arabic transition-all duration-200"
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
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-arabic transition-all duration-200"
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
                        className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 font-arabic transition-all duration-200 resize-none"
                        placeholder="اكتب رسالتك هنا..."
                        required
                        dir="rtl"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-arabic shadow-lg hover:shadow-xl transform hover:scale-105"
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

            {/* Enhanced FAQ & Info */}
            <section>
              {/* FAQ */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 font-arabic-heading">
                    الأسئلة الشائعة
                  </h2>
                </div>
                
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

              {/* Enhanced Quick Tips */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 border border-blue-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-blue-900 font-arabic-heading">
                    نصائح للتواصل الفعال
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-blue-800 font-arabic">
                      <strong>كن واضحاً:</strong> اذكر تفاصيل دقيقة عن المعلومة المشكوك فيها
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-blue-800 font-arabic">
                      <strong>أرفق المصادر:</strong> شارك الروابط أو الصور المتعلقة بالموضوع
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-blue-800 font-arabic">
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
    </div>
  );
};

export default ContactPage;