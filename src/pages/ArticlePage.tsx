import React from 'react';
import { CheckCircle, XCircle, AlertCircle, HelpCircle, User, Calendar, Eye, Clock, Share2, BookmarkPlus, ArrowLeft, Shield, Award, Globe } from 'lucide-react';
import { FactCheck } from '../types';

interface ArticlePageProps {
  selectedArticle?: FactCheck | null;
  setCurrentPage?: (page: string) => void;
}

// Modern VerdictBadge Component
const VerdictBadge: React.FC<{ verdict: string; size?: 'sm' | 'md' | 'lg' }> = ({ verdict, size = 'md' }) => {
  const config = {
    'true': { 
      bg: 'bg-gradient-to-r from-green-500 to-emerald-600', 
      text: 'text-white', 
      icon: '✓', 
      label: 'صحيح',
      glow: 'shadow-green-500/25'
    },
    'false': { 
      bg: 'bg-gradient-to-r from-red-500 to-rose-600', 
      text: 'text-white', 
      icon: '✗', 
      label: 'زائف',
      glow: 'shadow-red-500/25'
    },
    'misleading': { 
      bg: 'bg-gradient-to-r from-orange-500 to-amber-600', 
      text: 'text-white', 
      icon: '⚠', 
      label: 'مضلل',
      glow: 'shadow-orange-500/25'
    },
    'unproven': { 
      bg: 'bg-gradient-to-r from-gray-500 to-slate-600', 
      text: 'text-white', 
      icon: '?', 
      label: 'غير مثبت',
      glow: 'shadow-gray-500/25'
    }
  }[verdict] || { bg: 'bg-gray-400', text: 'text-white', icon: '?', label: 'غير محدد', glow: 'shadow-gray-500/25' };

  const sizes = {
    sm: 'text-sm px-4 py-2 text-sm',
    md: 'text-base px-6 py-3 text-lg',
    lg: 'text-lg px-8 py-4 text-xl'
  };

  return (
    <span className={`inline-flex items-center gap-2 rounded-2xl font-bold shadow-lg ${config.glow} ${config.bg} ${config.text} ${sizes[size]} font-arabic`}>
      <span className="font-black text-xl">{config.icon}</span>
      {config.label}
    </span>
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
          bg: 'bg-gradient-to-br from-green-50 to-emerald-50', 
          border: 'border-green-200',
          icon: CheckCircle, 
          iconColor: 'text-green-600',
          title: 'معلومة صحيحة ✓',
          description: 'تم التحقق من صحة هذه المعلومة بناءً على الأدلة المتاحة والمصادر الموثوقة',
          headerBg: 'bg-gradient-to-r from-green-500 to-emerald-600'
        };
      case 'false':
        return { 
          bg: 'bg-gradient-to-br from-red-50 to-rose-50', 
          border: 'border-red-200',
          icon: XCircle, 
          iconColor: 'text-red-600',
          title: 'معلومة زائفة ✗',
          description: 'هذه المعلومة غير صحيحة ومضللة وقد تم دحضها بالأدلة العلمية',
          headerBg: 'bg-gradient-to-r from-red-500 to-rose-600'
        };
      case 'misleading':
        return { 
          bg: 'bg-gradient-to-br from-orange-50 to-amber-50', 
          border: 'border-orange-200',
          icon: AlertCircle, 
          iconColor: 'text-orange-600',
          title: 'معلومة مضللة ⚠',
          description: 'تحتوي على معلومات صحيحة جزئياً ولكنها مضللة في السياق العام',
          headerBg: 'bg-gradient-to-r from-orange-500 to-amber-600'
        };
      default:
        return { 
          bg: 'bg-gradient-to-br from-gray-50 to-slate-50', 
          border: 'border-gray-200',
          icon: HelpCircle, 
          iconColor: 'text-gray-600',
          title: 'معلومة غير مثبتة ?',
          description: 'لا توجد أدلة كافية للتحقق من صحة هذه المعلومة في الوقت الحالي',
          headerBg: 'bg-gradient-to-r from-gray-500 to-slate-600'
        };
    }
  };

  const verdictConfig = getVerdictBoxConfig(article.verdict);

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
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                  <span className="text-cyan-200 font-arabic font-medium">{article.category}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-black mb-6 font-arabic-heading leading-tight">
                  {article.title}
                </h1>

                {/* Meta Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <User className="w-6 h-6 mx-auto mb-2 text-cyan-300" />
                    <div className="text-sm text-white font-arabic">المحقق</div>
                    <div className="text-xs text-cyan-200 font-arabic">{article.author}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <Calendar className="w-6 h-6 mx-auto mb-2 text-cyan-300" />
                    <div className="text-sm text-white font-arabic">التاريخ</div>
                    <div className="text-xs text-cyan-200 font-arabic">{article.date}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <Eye className="w-6 h-6 mx-auto mb-2 text-cyan-300" />
                    <div className="text-sm text-white font-arabic">المشاهدات</div>
                    <div className="text-xs text-cyan-200">{article.views.toLocaleString()}</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2 text-cyan-300" />
                    <div className="text-sm text-white font-arabic">وقت القراءة</div>
                    <div className="text-xs text-cyan-200 font-arabic">{article.readTime}</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all font-arabic">
                    <Share2 className="w-4 h-4" />
                    مشاركة
                  </button>
                  <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/20 text-white hover:bg-white/20 transition-all font-arabic">
                    <BookmarkPlus className="w-4 h-4" />
                    حفظ
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
                <img 
                  src={article.image}
                  alt={article.title}
                  className="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Verdict Box */}
            <div className={`${verdictConfig.bg} ${verdictConfig.border} border-2 rounded-3xl overflow-hidden shadow-2xl mb-12`}>
              <div className={`${verdictConfig.headerBg} text-white p-8`}>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <verdictConfig.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black mb-2 font-arabic-heading">{verdictConfig.title}</h2>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span className="font-arabic font-medium">تحقق معتمد من IFCN</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <p className="text-xl leading-relaxed font-arabic text-gray-700 mb-6">
                  {verdictConfig.description}
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Award className="w-8 h-8 text-blue-600 mb-3" />
                    <div className="font-bold text-gray-900 font-arabic-heading">مصادر موثقة</div>
                    <div className="text-sm text-gray-600 font-arabic">تم الاعتماد على مصادر علمية معتبرة</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Globe className="w-8 h-8 text-green-600 mb-3" />
                    <div className="font-bold text-gray-900 font-arabic-heading">معايير دولية</div>
                    <div className="text-sm text-gray-600 font-arabic">وفقاً لمعايير التحقق الدولية</div>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
                    <div className="font-bold text-gray-900 font-arabic-heading">مراجع متخصص</div>
                    <div className="text-sm text-gray-600 font-arabic">تمت مراجعته من قبل خبراء في المجال</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
              <div className="prose prose-lg prose-arabic max-w-none">
                <h2 className="text-3xl font-black mb-8 font-arabic-heading text-gray-900">تفاصيل التحقق</h2>
                
                <div className="text-xl leading-relaxed space-y-6 font-arabic text-gray-700">
                  <p>
                    {article.summary}
                  </p>
                  
                  <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">الادعاء المنتشر</h3>
                  <p>
                    انتشر عبر وسائل التواصل الاجتماعي ادعاء يفيد بأن شرب الماء الدافئ مع الليمون في الصباح يساعد بشكل كبير في إنقاص الوزن وحرق الدهون، وأنه يمكن الاعتماد عليه كحل سحري للتخسيس.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">الحقائق العلمية</h3>
                  <p>
                    بعد مراجعة الدراسات العلمية المتاحة، تبين أن شرب الماء الدافئ مع الليمون له فوائد صحية محدودة، ولكنه ليس حلاً سحرياً لإنقاص الوزن كما يُدّعى.
                  </p>

                  <div className="bg-blue-50 border-r-4 border-blue-500 p-6 rounded-r-2xl">
                    <h4 className="font-bold text-blue-900 mb-2 font-arabic-heading">نتيجة التحقق</h4>
                    <p className="text-blue-800 font-arabic">
                      الادعاء مضلل جزئياً. رغم وجود بعض الفوائد الصحية لهذا المشروب، إلا أن تأثيره على إنقاص الوزن محدود ولا يمكن الاعتماد عليه وحده للتخسيس.
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 font-arabic-heading">التوصيات</h3>
                  <ul className="space-y-2 font-arabic">
                    <li>• اتباع نظام غذائي متوازن ومتنوع</li>
                    <li>• ممارسة الرياضة بانتظام</li>
                    <li>• شرب كمية كافية من الماء يومياً</li>
                    <li>• استشارة أخصائي تغذية للحصول على برنامج مناسب</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-4 font-arabic-heading text-gray-900">العلامات ذات الصلة</h3>
              <div className="flex flex-wrap gap-3">
                {article.tags.map((tag, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl font-arabic font-medium">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Verdict Badge */}
            <div className="text-center">
              <VerdictBadge verdict={article.verdict} size="lg" />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;