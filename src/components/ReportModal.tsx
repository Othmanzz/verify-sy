import React, { useState } from 'react';
import { X, AlertTriangle, Send, FileText, Link, User, Mail, MessageCircle } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    reporterName: '',
    reporterEmail: '',
    claimText: '',
    sourceUrl: '',
    category: 'معلومة زائفة',
    description: '',
    urgency: 'متوسط'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    'معلومة زائفة',
    'معلومة مضللة', 
    'شائعة غير مؤكدة',
    'خبر طبي مشكوك فيه',
    'معلومة سياسية منحازة',
    'أخرى'
  ];

  const urgencyLevels = [
    'عاجل - ينتشر بسرعة',
    'عالي - تأثير كبير',
    'متوسط - تحقق عادي', 
    'منخفض - للمراجعة'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          reporterName: '',
          reporterEmail: '',
          claimText: '',
          sourceUrl: '',
          category: 'معلومة زائفة',
          description: '',
          urgency: 'متوسط'
        });
        onClose();
      }, 3000);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-t-3xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold font-arabic-heading">تقرير معلومة كاذبة</h2>
                <p className="text-red-100 font-arabic">ساعدنا في محاربة المعلومات المضللة</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitSuccess ? (
            // Success State
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-4 font-arabic-heading">تم إرسال التقرير بنجاح!</h3>
              <p className="text-gray-600 font-arabic leading-relaxed">
                شكراً لك على مساهمتك في محاربة المعلومات المضللة. 
                سيقوم فريقنا بمراجعة التقرير في أقرب وقت ممكن.
              </p>
              <div className="mt-6 bg-blue-50 rounded-2xl p-4">
                <p className="text-sm text-blue-800 font-arabic">
                  📧 سيتم إرسال إشعار على بريدك الإلكتروني عند اكتمال التحقق
                </p>
              </div>
            </div>
          ) : (
            // Form State
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Reporter Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                    <User className="w-4 h-4 inline ml-2" />
                    الاسم (اختياري)
                  </label>
                  <input
                    type="text"
                    name="reporterName"
                    value={formData.reporterName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic"
                    placeholder="اسمك الكريم"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                    <Mail className="w-4 h-4 inline ml-2" />
                    البريد الإلكتروني
                  </label>
                  <input
                    type="email"
                    name="reporterEmail"
                    value={formData.reporterEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Claim Text */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                  <FileText className="w-4 h-4 inline ml-2" />
                  نص الادعاء أو المعلومة المشكوك فيها *
                </label>
                <textarea
                  name="claimText"
                  value={formData.claimText}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic resize-none"
                  placeholder="اكتب هنا النص الكامل للمعلومة التي تشك في صحتها..."
                />
              </div>

              {/* Source URL */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                  <Link className="w-4 h-4 inline ml-2" />
                  رابط المصدر (إن وجد)
                </label>
                <input
                  type="url"
                  name="sourceUrl"
                  value={formData.sourceUrl}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic"
                  placeholder="https://example.com/article"
                />
              </div>

              {/* Category and Urgency */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                    نوع التقرير
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                    مستوى الأولوية
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic"
                  >
                    {urgencyLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Description */}
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-2 font-arabic">
                  <MessageCircle className="w-4 h-4 inline ml-2" />
                  معلومات إضافية
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 font-arabic resize-none"
                  placeholder="أي معلومات إضافية تساعدنا في التحقق (مثل: أين رأيت هذه المعلومة، مدى انتشارها...)"
                />
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <AlertTriangle className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-sm text-blue-800 font-arabic leading-relaxed">
                    <p className="font-bold mb-2">ملاحظات مهمة:</p>
                    <ul className="space-y-1">
                      <li>• سيتم التعامل مع تقريرك بسرية تامة</li>
                      <li>• قد تستغرق عملية التحقق من 24-72 ساعة</li>
                      <li>• سيتم إشعارك بالنتيجة عبر البريد الإلكتروني</li>
                      <li>• التقارير الكاذبة قد تؤدي إلى منع الإرسال</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 py-4 px-6 rounded-2xl font-bold font-arabic transition-all duration-300 flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 shadow-lg hover:shadow-xl transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال التقرير
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold font-arabic hover:bg-gray-50 transition-all duration-300"
                >
                  إلغاء
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReportModal;