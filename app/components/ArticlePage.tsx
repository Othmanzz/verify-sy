'use client'

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, HelpCircle, User, Calendar, Eye, Clock, Share2, BookmarkPlus, ArrowLeft, Shield, Award, Globe, Play, Pause, Volume2, VolumeX, Twitter, Facebook, MessageCircle, Copy, Info, ExternalLink, FileText, Users, MapPin, Clock as ClockIcon, Database } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { subcategoryDefinitions } from '../lib/mockData';
import { getArticleContent, ArticleContent } from '../lib/articleContent';
import { mockFactChecks } from '../lib/mockData';

interface FactCheck {
  id: string;
  title: string;
  summary: string;
  verdict: 'true' | 'false' | 'misleading' | 'unproven' | 'confirmed';
  subVerdict?: string;
  subVerdictExplanation?: string;
  category: string;
  author: string;
  date: string;
  views: number;
  readTime: string;
  image: string;
  tags: string[];
  featured: boolean;
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
      label: 'احتيال',
      glow: 'shadow-red-500/25'
    },
    'misleading': { 
      bg: 'bg-gradient-to-r from-orange-500 to-amber-600', 
      text: 'text-white', 
      icon: '⚠', 
      label: 'عبث',
      glow: 'shadow-orange-500/25'
    },
    'unproven': { 
      bg: 'bg-gradient-to-r from-gray-500 to-slate-600', 
      text: 'text-white', 
      icon: '?', 
      label: 'إرباك',
      glow: 'shadow-gray-500/25'
    },
    'confirmed': { 
      bg: 'bg-gradient-to-r from-blue-500 to-cyan-600', 
      text: 'text-white', 
      icon: '✓', 
      label: 'مؤكد',
      glow: 'shadow-blue-500/25'
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
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);
  const [speechSupported, setSpeechSupported] = useState(false);

  useEffect(() => {
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
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-200 mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlayback}
            disabled={!speechSupported}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              speechSupported
                ? 'bg-blue-600 hover:bg-blue-700 text-white hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 mr-0.5" />}
          </button>
          <button
            onClick={toggleMute}
            disabled={!speechSupported}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              speechSupported
                ? 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
          <div>
            <div className="font-bold text-blue-900 font-arabic text-sm">استماع للمقال</div>
            <div className="text-xs text-blue-600 font-arabic">
              {speechSupported 
                ? (isPlaying ? 'جاري التشغيل...' : 'اضغط للاستماع') 
                : 'غير متاح'
              }
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-blue-700 font-arabic font-medium">عربي</span>
        </div>
      </div>
      
      {isPlaying && (
        <div className="mt-3">
          <div className="w-full bg-blue-200 rounded-full h-1.5 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
    </div>
  );
};

// Simplified Social Share Component
const SimplifiedSocialShare: React.FC<{ article: FactCheck }> = ({ article }) => {
  const [showCopied, setShowCopied] = useState(false);
  const articleUrl = typeof window !== 'undefined' ? `${window.location.origin}/article/${article.id}` : '';
  const shareText = `${article.title} - تحقق من منصة تأكد`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedText = encodeURIComponent(shareText);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText} ${encodedUrl}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  return (
    <div className="flex items-center gap-2">
      {/* Twitter */}
      <button
        onClick={() => handleShare('twitter')}
        className="w-8 h-8 bg-blue-100/80 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        title="مشاركة على تويتر"
      >
        <Twitter className="w-4 h-4 text-blue-600" />
      </button>

      {/* Facebook */}
      <button
        onClick={() => handleShare('facebook')}
        className="w-8 h-8 bg-blue-100/80 hover:bg-blue-200 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        title="مشاركة على فيسبوك"
      >
        <Facebook className="w-4 h-4 text-blue-700" />
      </button>

      {/* WhatsApp */}
      <button
        onClick={() => handleShare('whatsapp')}
        className="w-8 h-8 bg-green-100/80 hover:bg-green-200 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
        title="مشاركة على واتساب"
      >
        <MessageCircle className="w-4 h-4 text-green-600" />
      </button>

      {/* Copy Link */}
      <button
        onClick={copyToClipboard}
        className="w-8 h-8 bg-gray-100/80 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 relative"
        title="نسخ الرابط"
      >
        <Copy className="w-4 h-4 text-gray-600" />
        
        {/* Copied notification */}
        {showCopied && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded font-arabic whitespace-nowrap animate-fadeIn">
            تم النسخ!
          </div>
        )}
      </button>
    </div>
  );
};

// Sticky Social Bar Component
const StickySocialBar: React.FC<{ article: FactCheck; show: boolean }> = ({ article, show }) => {
  const [showCopied, setShowCopied] = useState(false);
  const articleUrl = typeof window !== 'undefined' ? `${window.location.origin}/article/${article.id}` : '';
  const shareText = `${article.title} - تحقق من منصة تأكد`;

  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(articleUrl);
    const encodedText = encodeURIComponent(shareText);
    
    let shareUrl = '';
    
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${encodedText} ${encodedUrl}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  return (
    <div className={`fixed left-4 top-1/2 transform -translate-y-1/2 z-40 transition-all duration-300 ${
      show ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-16 opacity-0 scale-95'
    }`}>
      <div className="bg-white/96 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 p-3 flex flex-col gap-2">
        <div className="text-center pb-2 border-b border-gray-200/50">
          <Share2 className="w-4 h-4 text-gray-600 mx-auto mb-1" />
          <span className="text-xs text-gray-500 font-arabic font-medium">مشاركة</span>
        </div>
        
        {/* Twitter */}
        <button
          onClick={() => handleShare('twitter')}
          className="w-9 h-9 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 group shadow-sm"
          title="مشاركة على تويتر"
        >
          <Twitter className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
        </button>

        {/* Facebook */}
        <button
          onClick={() => handleShare('facebook')}
          className="w-9 h-9 bg-blue-50 hover:bg-blue-100 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 group shadow-sm"
          title="مشاركة على فيسبوك"
        >
          <Facebook className="w-4 h-4 text-blue-600 group-hover:text-blue-700" />
        </button>

        {/* WhatsApp */}
        <button
          onClick={() => handleShare('whatsapp')}
          className="w-9 h-9 bg-green-50 hover:bg-green-100 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 group shadow-sm"
          title="مشاركة على واتساب"
        >
          <MessageCircle className="w-4 h-4 text-green-500 group-hover:text-green-600" />
        </button>

        {/* Copy Link */}
        <button
          onClick={copyToClipboard}
          className="w-9 h-9 bg-gray-50 hover:bg-gray-100 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105 group relative shadow-sm"
          title="نسخ الرابط"
        >
          <Copy className="w-4 h-4 text-gray-500 group-hover:text-gray-600" />
          
          {/* Copied notification */}
          {showCopied && (
            <div className="absolute -right-18 top-1/2 transform -translate-y-1/2 bg-green-600 text-white text-xs px-2 py-1 rounded font-arabic whitespace-nowrap animate-fadeIn shadow-lg">
              تم النسخ!
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

interface ArticlePageProps {
  article: FactCheck;
}

export default function ArticlePage({ article }: ArticlePageProps) {
  const router = useRouter();
  const [showStickySocial, setShowStickySocial] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [articleContent, setArticleContent] = useState<ArticleContent | null>(null);

  // Get detailed article content
  useEffect(() => {
    const content = getArticleContent(article.id);
    setArticleContent(content);
  }, [article.id]);

  // Handle scroll to show/hide sticky social bar and track active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Show sticky social immediately when user starts scrolling down (after 50px)
      setShowStickySocial(scrollY > 50);

      // Track active section for navigation highlighting
      const sections = ['overview', 'details', 'analysis', 'sources'];
      let currentSection = 'overview';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider section active if it's in the top half of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
            currentSection = sectionId;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getVerdictConfig = (verdict: string) => {
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
          title: 'معلومة احتيالية ✗',
          description: 'هذه المعلومة احتيالية وغير صحيحة وقد تم دحضها بالأدلة العلمية',
          headerBg: 'bg-gradient-to-r from-red-500 to-rose-600'
        };
      case 'misleading':
        return { 
          bg: 'bg-gradient-to-br from-orange-50 to-amber-50', 
          border: 'border-orange-200',
          icon: AlertCircle, 
          iconColor: 'text-orange-600',
          title: 'معلومة عابثة ⚠',
          description: 'تحتوي على معلومات عابثة وغير دقيقة في السياق العام',
          headerBg: 'bg-gradient-to-r from-orange-500 to-amber-600'
        };
      case 'confirmed':
        return { 
          bg: 'bg-gradient-to-br from-blue-50 to-cyan-50', 
          border: 'border-blue-200',
          icon: CheckCircle, 
          iconColor: 'text-blue-600',
          title: 'معلومة مؤكدة ✓',
          description: 'تم تأكيد صحة هذه المعلومة من مصادر موثوقة ومعتمدة',
          headerBg: 'bg-gradient-to-r from-blue-500 to-cyan-600'
        };
      default:
        return { 
          bg: 'bg-gradient-to-br from-gray-50 to-slate-50', 
          border: 'border-gray-200',
          icon: HelpCircle, 
          iconColor: 'text-gray-600',
          title: 'معلومة مربكة ?',
          description: 'هذه المعلومة مربكة وغير واضحة وتحتاج لمزيد من التحقق',
          headerBg: 'bg-gradient-to-r from-gray-500 to-slate-600'
        };
    }
  };

  const verdictConfig = getVerdictConfig(article.verdict);

  // Get related articles
  const getRelatedArticles = () => {
    if (articleContent?.relatedArticles) {
      return mockFactChecks.filter(fc => 
        articleContent.relatedArticles.includes(fc.id)
      ).slice(0, 3);
    }
    return mockFactChecks
      .filter(fc => fc.category === article.category && fc.id !== article.id)
      .slice(0, 3);
  };

  const relatedArticles = getRelatedArticles();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50" dir="rtl">
      {/* Regular Header (Non-sticky) */}
      <div className="bg-white border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                <CheckCircle className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 font-arabic-heading">تحقق من المعلومة</h1>
                <p className="text-sm text-gray-500 font-arabic">{article.category}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => router.push('/')}
                className="inline-flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-arabic font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                الرئيسية
              </button>
              <span className="text-gray-400">/</span>
              <button 
                onClick={() => router.push('/search')}
                className="inline-flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-arabic font-medium text-sm"
              >
                قاعدة البيانات
              </button>
              <span className="text-gray-400">/</span>
              <span className="px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-arabic font-medium text-sm">
                {article.category}
              </span>
            </div>
            
            {/* Back to Search Button */}
            <button 
              onClick={() => router.push('/search')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-all duration-200 font-arabic font-medium text-sm shadow-md hover:shadow-lg"
            >
              <Database className="w-4 h-4" />
              العودة للبحث
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Compact Hero Section */}
          <div id="overview" className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6" data-hero-section>
            {/* Enhanced Header with Better Typography */}
            <div className={`${verdictConfig.headerBg} text-white px-6 py-6 text-center relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-3">
                  {/* Enhanced Verdict Badge with White Background */}
                  <div className="bg-white/15 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/20">
                    <VerdictBadge verdict={article.verdict} size="md" />
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1">
                    <Shield className="w-3 h-3" />
                    <span className="font-arabic font-medium text-sm">IFCN معتمد</span>
                  </div>
                </div>
                
                {/* Enhanced Title with Better Contrast */}
                <div className="bg-black/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                  <h2 className="text-2xl lg:text-3xl font-black font-arabic-heading leading-tight text-white drop-shadow-lg">
                    {article.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* Compact Content Section */}
            <div className="p-6">
              <div className="grid lg:grid-cols-3 gap-6 items-start">
                {/* Article Image - Smaller */}
                <div className="lg:col-span-1">
                  <div className="relative group">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-xl shadow-md border border-gray-200/50 group-hover:shadow-lg transition-all duration-300"
                    />
                    {/* Compact Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-bold shadow-md font-arabic">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Summary and Meta - Two Columns */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-lg text-gray-600 font-arabic leading-relaxed">
                    {article.summary}
                  </p>
                  
                  {/* Compact Meta Information */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                      <User className="w-3 h-3 text-blue-500" />
                      <div>
                        <div className="text-xs text-gray-500 font-arabic">بواسطة</div>
                        <div className="font-bold text-blue-600 font-arabic text-sm">{article.author}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                      <Calendar className="w-3 h-3 text-green-500" />
                      <div>
                        <div className="text-xs text-gray-500 font-arabic">تاريخ النشر</div>
                        <div className="font-bold text-green-600 font-arabic text-sm">{article.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                      <Eye className="w-3 h-3 text-purple-500" />
                      <div>
                        <div className="text-xs text-gray-500 font-arabic">المشاهدات</div>
                        <div className="font-bold text-purple-600 text-sm">{article.views.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                      <Clock className="w-3 h-3 text-orange-500" />
                      <div>
                        <div className="text-xs text-gray-500 font-arabic">وقت القراءة</div>
                        <div className="font-bold text-orange-600 font-arabic text-sm">{article.readTime}</div>
                      </div>
                    </div>
                  </div>

                  {/* Inline Social Sharing */}
                  <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 font-arabic font-medium">شارك:</span>
                    </div>
                    <SimplifiedSocialShare article={article} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two-Column Layout for Desktop */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-4">
              
              {/* Article Content - Enhanced with Full Content */}
              <div id="details" className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-black mb-6 font-arabic-heading text-gray-900">تفاصيل التحقق</h2>
                
                {articleContent ? (
                  <div 
                    className="text-lg leading-relaxed space-y-6 font-arabic text-gray-700 prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: articleContent.fullContent }}
                  />
                ) : (
                  <div className="text-lg leading-relaxed space-y-6 font-arabic text-gray-700">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-arabic-heading mb-3">الادعاء المنتشر</h3>
                      <p>
                        انتشر عبر وسائل التواصل الاجتماعي ادعاء يفيد بأن شرب الماء الدافئ مع الليمون في الصباح يساعد بشكل كبير في إنقاص الوزن وحرق الدهون، وأنه يمكن الاعتماد عليه كحل سحري للتخسيس.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-arabic-heading mb-3">الحقائق العلمية</h3>
                      <p>
                        بعد مراجعة الدراسات العلمية المتاحة، تبين أن شرب الماء الدافئ مع الليمون له فوائد صحية محدودة، ولكنه ليس حلاً سحرياً لإنقاص الوزن كما يُدّعى.
                      </p>
                    </div>

                    <div className="bg-blue-50 border-r-4 border-blue-500 p-4 rounded-r-xl">
                      <h4 className="font-bold text-blue-900 mb-2 font-arabic-heading">نتيجة التحقق</h4>
                      <p className="text-blue-800 font-arabic">
                        الادعاء مضلل جزئياً. رغم وجود بعض الفوائد الصحية لهذا المشروب، إلا أن تأثيره على إنقاص الوزن محدود ولا يمكن الاعتماد عليه وحده للتخسيس.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-arabic-heading mb-3">التوصيات</h3>
                      <ul className="space-y-2 font-arabic">
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          اتباع نظام غذائي متوازن ومتنوع
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          ممارسة الرياضة بانتظام
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          شرب كمية كافية من الماء يومياً
                        </li>
                        <li className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                          استشارة أخصائي تغذية للحصول على برنامج مناسب
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {/* Related Articles Section */}
              {relatedArticles.length > 0 && (
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-black mb-6 font-arabic-heading text-gray-900">مقالات ذات صلة</h2>
                  <div className="grid gap-4">
                    {relatedArticles.map((relatedArticle) => (
                      <div 
                        key={relatedArticle.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all duration-200 cursor-pointer"
                        onClick={() => router.push(`/article/${relatedArticle.id}`)}
                      >
                        <div className="flex gap-4">
                          <img 
                            src={relatedArticle.image} 
                            alt={relatedArticle.title}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-gray-900 font-arabic-heading mb-2 line-clamp-2">
                              {relatedArticle.title}
                            </h3>
                            <p className="text-sm text-gray-600 font-arabic line-clamp-2 mb-2">
                              {relatedArticle.summary}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                              <span className="font-arabic">{relatedArticle.date}</span>
                              <span className="font-arabic">{relatedArticle.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-1 space-y-4">
              
              {/* Audio Player in Sidebar */}
              <AudioPlayer text={`${article.title}. ${article.summary}. الادعاء المنتشر: انتشر عبر وسائل التواصل الاجتماعي ادعاء يفيد بأن شرب الماء الدافئ مع الليمون في الصباح يساعد بشكل كبير في إنقاص الوزن وحرق الدهون، وأنه يمكن الاعتماد عليه كحل سحري للتخسيس.`} />
              
              {/* Compact Verdict Analysis */}
              <div id="analysis" className={`${verdictConfig.bg} ${verdictConfig.border} border rounded-xl overflow-hidden shadow-md`}>
                <div className="p-4">
                  <h3 className="text-lg font-black mb-3 font-arabic-heading text-gray-900 flex items-center gap-2">
                    <verdictConfig.icon className={`w-6 h-6 ${verdictConfig.iconColor}`} />
                    تحليل التحقق
                  </h3>
                  <p className="text-sm leading-relaxed font-arabic text-gray-700 mb-4">
                    {verdictConfig.description}
                  </p>
                  
                  {/* Sub-verdict section */}
                  {article.subVerdict && (
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-200/50">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 font-arabic-heading text-sm mb-2">
                            {article.subVerdict}
                          </h4>
                          {article.subVerdictExplanation && (
                            <p className="text-xs leading-relaxed font-arabic text-gray-600">
                              {article.subVerdictExplanation}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <Award className="w-5 h-5 text-blue-600 mb-2" />
                      <div className="font-bold text-gray-900 font-arabic-heading text-sm">مصادر موثقة</div>
                      <div className="text-xs text-gray-600 font-arabic">مصادر علمية معتبرة</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <Globe className="w-5 h-5 text-green-600 mb-2" />
                      <div className="font-bold text-gray-900 font-arabic-heading text-sm">معايير دولية</div>
                      <div className="text-xs text-gray-600 font-arabic">معايير التحقق الدولية</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm">
                      <CheckCircle className="w-5 h-5 text-purple-600 mb-2" />
                      <div className="font-bold text-gray-900 font-arabic-heading text-sm">مراجع متخصص</div>
                      <div className="text-xs text-gray-600 font-arabic">مراجعة من خبراء المجال</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sources Section - Enhanced */}
              {articleContent?.sources && (
                <div className="bg-white rounded-xl shadow-md p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold font-arabic-heading text-gray-900">المصادر</h3>
                  </div>
                  <div className="space-y-3">
                    {articleContent.sources.map((source) => (
                      <div key={source.id} className="bg-gray-50 rounded-lg p-3">
                        <div className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            source.reliability === 'high' ? 'bg-green-500' :
                            source.reliability === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}></div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 font-arabic-heading text-sm mb-1">
                              {source.title}
                            </h4>
                            <p className="text-xs text-gray-600 font-arabic mb-2">
                              {source.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                source.type === 'official' ? 'bg-blue-100 text-blue-700' :
                                source.type === 'expert' ? 'bg-green-100 text-green-700' :
                                source.type === 'media' ? 'bg-purple-100 text-purple-700' :
                                source.type === 'document' ? 'bg-orange-100 text-orange-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {source.type === 'official' ? 'رسمي' :
                                 source.type === 'expert' ? 'خبير' :
                                 source.type === 'media' ? 'إعلامي' :
                                 source.type === 'document' ? 'وثيقة' : 'اجتماعي'}
                              </span>
                              {source.url && (
                                <a 
                                  href={source.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  رابط
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Compact Tags Section */}
              <div className="bg-white rounded-xl shadow-md p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-indigo-600 font-black text-sm">#</span>
                  </div>
                  <h3 className="text-lg font-bold font-arabic-heading text-gray-900">العلامات</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag: string, index: number) => (
                    <span key={index} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-3 py-1 rounded-lg font-arabic font-medium text-sm shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Social Bar */}
      <StickySocialBar article={article} show={showStickySocial} />
    </div>
  );
}