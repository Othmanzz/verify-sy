import React from 'react';
import { CheckCircle, XCircle, AlertCircle, HelpCircle, ChevronDown, User, Calendar, Eye, Clock } from 'lucide-react';
import { FactCheck } from '../types';

interface ArticlePageProps {
  selectedArticle?: FactCheck | null;
  setCurrentPage?: (page: string) => void;
}

// VerdictBadge Component
const VerdictBadge: React.FC<{ verdict: string; size?: 'sm' | 'md' | 'lg' }> = ({ verdict, size = 'md' }) => {
  const config = {
    'true': { bg: 'bg-success-100', text: 'text-success-700', icon: '✓', label: 'صحيح' },
    'false': { bg: 'bg-danger-100', text: 'text-danger-700', icon: '✗', label: 'زائف' },
    'misleading': { bg: 'bg-warning-100', text: 'text-warning-700', icon: '⚠', label: 'مضلل' },
    'unproven': { bg: 'bg-gray-100', text: 'text-gray-700', icon: '?', label: 'غير مثبت' }
  }[verdict] || { bg: 'bg-gray-100', text: 'text-gray-700', icon: '?', label: 'غير محدد' };

  const sizes = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full font-medium font-arabic ${config.bg} ${config.text} ${sizes[size]}`}>
      <span className="font-bold">{config.icon}</span>
      {config.label}
    </span>
  );
};

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

const ArticlePage: React.FC<ArticlePageProps> = ({ selectedArticle, setCurrentPage }) => {
  // Mock article if none provided
  const mockArticle: FactCheck = {
    id: '1',
    title: 'هل شرب الماء الدافئ مع الليمون يساعد في إنقاص الوزن؟',
    summary: 'ادعاء يقول أن شرب الماء الدافئ مع الليمون يساعد بشكل كبير في إنقاص الوزن وحرق الدهون',
    verdict: 'misleading',
    category: 'الصحة',
    author: 'د. أحمد سالم',
    date: '2024-01-15',
    views: 15420,
    readTime: '5 دقائق',
    image: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tags: ['تغذية', 'إنقاص الوزن', 'صحة عامة'],
    featured: false
  };

  const article = selectedArticle || mockArticle;

  const getVerdictBoxConfig = (verdict: string) => {
    switch (verdict) {
      case 'true':
        return { 
          bg: 'bg-success-50 border-success-300', 
          icon: CheckCircle, 
          iconColor: 'text-success-600',
          title: 'التحقق: صحيح',
          description: 'تم التحقق من صحة هذه المعلومة بناءً على الأدلة المتاحة والمصادر الموثوقة',
          gradientBg: 'bg-gradient-to-r from-success-500 to-success-600'
        };
      case 'false':
        return { 
          bg: 'bg-danger-50 border-danger-300', 
          icon: XCircle, 
          iconColor: 'text-danger-600',
          title: 'التحقق: زائف',
          description: 'هذه المعلومة غير صحيحة ومضللة وقد تم دحضها بالأدلة العلمية',
          gradientBg: 'bg-gradient-to-r from-danger-500 to-danger-600'
        };
      case 'misleading':
        return { 
          bg: 'bg-warning-50 border-warning-300', 
          icon: AlertCircle, 
          iconColor: 'text-warning-600',
          title: 'التحقق: مضلل',
          description: 'تحتوي على معلومات صحيحة جزئياً ولكنها مضللة في السياق العام',
          gradientBg: 'bg-gradient-to-r from-warning-500 to-warning-600'
        };
      default:
        return { 
          bg: 'bg-gray-50 border-gray-300', 
          icon: HelpCircle, 
          iconColor: 'text-gray-600',
          title: 'التحقق: غير مثبت',
          description: 'لا توجد أدلة كافية للتحقق من صحة هذه المعلومة في الوقت الحالي',
          gradientBg: 'bg-gradient-to-r from-gray-500 to-gray-600'
        };
    }
  };

  const config = getVerdictBoxConfig(article.verdict);
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={() => setCurrentPage && setCurrentPage('home')}
            className="mb-6 text-primary-600 hover:text-primary-700 flex items-center gap-2 font-arabic transition-colors"
          >
            <ChevronDown className="w-4 h-4 rotate-90" />
            العودة للرئيسية
          </button>

          {/* Enhanced Verdict Box */}
          <div className={`${config.bg} border-2 rounded-2xl overflow-hidden mb-8 shadow-lg`}>
            {/* Gradient Header */}
            <div className={`${config.gradientBg} p-6`}>
              <div className="flex items-center gap-4 text-white">
                <Icon className="w-16 h-16 flex-shrink-0" />
                <div>
                  <h1 className="text-3xl font-bold mb-1 font-arabic-heading">
                    {config.title}
                  </h1>
                  <p className="text-lg opacity-90 font-arabic">
                    نتيجة التحقق النهائية
                  </p>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-2 font-arabic">ملخص التحقق:</h2>
                <p className="text-gray-700 text-lg leading-relaxed font-arabic">
                  {config.description}
                </p>
              </div>
              
              {/* Claim Summary */}
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2 font-arabic">الادعاء الأصلي:</h3>
                <p className="text-gray-700 text-sm leading-relaxed font-arabic">
                  {article.title}
                </p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <article className="bg-white rounded-2xl shadow-sm p-8">
            {/* Article Header */}
            <div className="border-b border-gray-200 pb-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <VerdictBadge verdict={article.verdict} />
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-arabic">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-6 leading-tight font-arabic-heading">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-600 mb-4 font-arabic">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>بواسطة {article.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>نُشر في {new Date(article.date).toLocaleDateString('ar-SA')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>{article.views.toLocaleString()} مشاهدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-arabic">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Article Image */}
            <div className="mb-8 rounded-xl overflow-hidden">
              <LazyImage 
                src={article.image} 
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Article Sections */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">الادعاء</h2>
                <div className="bg-gray-50 p-6 rounded-xl border-r-4 border-primary-600">
                  <p className="text-gray-700 leading-relaxed font-arabic">
                    {article.summary}
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">تحقيقنا</h2>
                <p className="text-gray-700 leading-relaxed mb-4 font-arabic">
                  قام فريق التحقق لدينا بإجراء تحليل شامل لهذا الادعاء من خلال مراجعة المصادر المتاحة والتحقق من الحقائق. 
                  تم الاستعانة بخبراء متخصصين في المجال لضمان دقة التحليل.
                </p>
                <p className="text-gray-700 leading-relaxed font-arabic">
                  شمل التحقيق مراجعة الأدبيات العلمية، والتواصل مع المؤسسات الرسمية، والاطلاع على التقارير الحديثة في هذا المجال.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">الأدلة</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-arabic">تقرير منظمة الصحة العالمية حول هذا الموضوع</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-arabic">دراسات علمية محكمة منشورة في مجلات معتمدة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-arabic">بيانات رسمية من الجهات الحكومية المختصة</span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 font-arabic-heading">الخلاصة</h2>
                <div className={`${config.bg} p-6 rounded-xl border`}>
                  <p className="text-gray-700 leading-relaxed font-medium font-arabic">
                    بناءً على التحقيق الشامل والأدلة المتوفرة، تم تصنيف هذا الادعاء كـ "{config.title.split(': ')[1]}". 
                    ننصح القراء بالتحقق من المصادر الموثوقة قبل مشاركة أي معلومات.
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;