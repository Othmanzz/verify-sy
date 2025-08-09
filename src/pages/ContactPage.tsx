import React, { useState } from 'react';
import { MessageCircle, Send, Clock, AlertCircle, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  // Add props as needed
}

const ContactPage: React.FC<ContactPageProps> = () => {
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
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
              <MessageCircle className="w-12 h-12" />
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-arabic-heading">
              📞 اتصل بنا
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-12 max-w-3xl mx-auto font-arabic">
              نحن هنا لمساعدتك وللإجابة على جميع استفساراتك
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Contact Options */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">واتساب</h3>
                <p className="text-gray-600 mb-4 font-arabic">تواصل معنا مباشرة</p>
                <a href="https://wa.me/1234567890" className="bg-success-600 text-white px-6 py-3 rounded-xl hover:bg-success-700 transition-colors font-medium font-arabic inline-block">
                  أرسل رسالة
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">البريد الإلكتروني</h3>
                <p className="text-gray-600 mb-4 font-arabic">info@verify-sy.com</p>
                <a href="mailto:info@verify-sy.com" className="bg-accent-600 text-white px-6 py-3 rounded-xl hover:bg-accent-700 transition-colors font-medium font-arabic inline-block">
                  أرسل إيميل
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">ساعات العمل</h3>
                <p className="text-gray-600 mb-2 font-arabic">الأحد - الخميس</p>
                <p className="text-gray-600 font-arabic">9:00 ص - 6:00 م</p>
              </div>

              <div className="bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-arabic-heading">الطوارئ</h3>
                <p className="text-gray-600 mb-4 font-arabic">للبلاغات العاجلة</p>
                <button className="bg-red-600 text-white px-6 py-3 rounded-xl hover:bg-red-700 transition-colors font-medium font-arabic">
                  بلاغ عاجل
                </button>
              </div>
            </div>
          </section>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section>
              <div className="bg-white rounded-3xl shadow-xl p-8 border">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 font-arabic-heading">
                    📝 أرسل لنا رسالة
                  </h2>
                  <p className="text-gray-600 font-arabic">سنرد عليك في أسرع وقت ممكن</p>
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
                          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
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
                          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
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
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
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
                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 font-arabic"
                        placeholder="اكتب رسالتك هنا..."
                        required
                        dir="rtl"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-arabic shadow-lg hover:shadow-xl"
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

            {/* FAQ & Info */}
            <section>
              {/* FAQ */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 font-arabic-heading">
                  ❓ الأسئلة الشائعة
                </h2>
                
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

              {/* Quick Tips */}
              <div className="bg-gradient-to-br from-accent-50 to-accent-100 rounded-3xl p-8 border border-accent-200">
                <h2 className="text-2xl font-bold text-primary-900 mb-6 font-arabic-heading">
                  💡 نصائح سريعة
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-primary-800 font-arabic">
                      <strong>كن واضحاً:</strong> اذكر تفاصيل دقيقة عن المعلومة المشكوك فيها
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-primary-800 font-arabic">
                      <strong>أرفق المصادر:</strong> شارك الروابط أو الصور المتعلقة بالموضوع
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-primary-800 font-arabic">
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
  );
};

export default ContactPage;