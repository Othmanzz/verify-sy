import React, { useState, useRef } from 'react';
import { CheckCircle, XCircle, AlertCircle, HelpCircle, User, Calendar, Eye, Clock, Share2, BookmarkPlus, ArrowLeft, Shield, Award, Globe, Play, Pause, Volume2, VolumeX } from 'lucide-react';
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

// Audio Component for Article Description
const AudioPlayer: React.FC<{ text: string }> = ({ text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [speechSupported, setSpeechSupported] = useState(false);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  React.useEffect(() => {
    setSpeechSupported('speechSynthesis' in window);
  }, []);

  const togglePlayback = () => {
    if (!speechSupported) return;

    if (isPlaying) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    } else {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      utterance.pitch = 1;
      utterance.volume = isMuted ? 0 : 1;
      
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);
      
      speechRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-200 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlayback}
              disabled={!speechSupported}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                speechSupported
                  ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 mr-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              disabled={!speechSupported}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                speechSupported
                  ? 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
          <div>
            <div className="font-bold text-blue-900 font-arabic">استماع للمقال</div>
            <div className="text-sm text-blue-600 font-arabic">
              {speechSupported 
                ? (isPlaying ? 'جاري التشغيل...' : 'اضغط للاستماع للمحتوى صوتياً') 
                : 'التشغيل الصوتي غير متاح في هذا المتصفح'
              }
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-blue-700 font-arabic font-medium">صوت عربي</span>
        </div>
      </div>
      
      {isPlaying && (
        <div className="mt-4">
          <div className="w-full bg-blue-200 rounded-full h-2 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Compact Header with Back Button and Title */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <VerdictBadge verdict={article.verdict} size="sm" />
              <div>
                <h1 className="text-lg font-bold text-gray-900 font-arabic-heading">تحقق من المعلومة</h1>
                <p className="text-xs text-gray-500 font-arabic">{article.category}</p>
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

      {/* Compact Article Section */}
      <section className="relative py-4 overflow-visible">        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto mb-6">
            
            {/* Article Title with Image */}
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-6 items-start mb-6">
                {/* Article Image */}
                <div className="w-full md:w-48 md:flex-shrink-0">
                  <div className="relative group">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 md:h-32 object-cover rounded-2xl shadow-lg border border-gray-200/50 group-hover:shadow-xl transition-all duration-300"
                    />
                    {/* Modern Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Category Badge on Image */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-lg font-arabic border border-white/50">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Title and Meta */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-arabic-heading leading-tight mb-4">
                    {article.title}
                  </h2>
                  
                  {/* Article Summary */}
                  <p className="text-gray-600 font-arabic leading-relaxed mb-4 text-sm md:text-base">
                    {article.summary}
                  </p>
                </div>
              </div>
              
              {/* Compact Meta Info */}
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                  <User className="w-3 h-3 text-blue-500" />
                  <span className="font-semibold text-blue-600 font-arabic-heading">{article.author}</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                  <Calendar className="w-3 h-3 text-green-500" />
                  <span className="font-semibold text-green-600 font-arabic-heading">{article.date}</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                  <Eye className="w-3 h-3 text-purple-500" />
                  <span className="font-semibold text-purple-600 font-arabic-heading">{article.views.toLocaleString()}</span>
                  <span className="text-gray-600 font-arabic">مشاهدة</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/70 px-4 py-2 rounded-full border border-gray-200/50 shadow-sm">
                  <Clock className="w-3 h-3 text-orange-500" />
                  <span className="font-semibold text-orange-600 font-arabic-heading">{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Modern Background */}
      <div className="bg-white/30 backdrop-blur-sm min-h-screen">

        {/* Main Content */}
        <section className="py-6">
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
                  
                  {/* Audio Player for Article Content */}
                  <AudioPlayer text={`${article.title}. ${article.summary}. الادعاء المنتشر: انتشر عبر وسائل التواصل الاجتماعي ادعاء يفيد بأن شرب الماء الدافئ مع الليمون في الصباح يساعد بشكل كبير في إنقاص الوزن وحرق الدهون، وأنه يمكن الاعتماد عليه كحل سحري للتخسيس. الحقائق العلمية: بعد مراجعة الدراسات العلمية المتاحة، تبين أن شرب الماء الدافئ مع الليمون له فوائد صحية محدودة، ولكنه ليس حلاً سحرياً لإنقاص الوزن كما يُدّعى. نتيجة التحقق: الادعاء مضلل جزئياً. رغم وجود بعض الفوائد الصحية لهذا المشروب، إلا أن تأثيره على إنقاص الوزن محدود ولا يمكن الاعتماد عليه وحده للتخسيس.`} />
                  
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
    </div>
  );
};

export default ArticlePage;