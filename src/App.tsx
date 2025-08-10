import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Search, Filter, Plus } from 'lucide-react';

// Component imports
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ReportModal from './components/ReportModal';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ArticlePage from './pages/ArticlePage';
import AcademyPage from './pages/AcademyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Type imports
import { FactCheck, Course } from './types';
import { mockFactChecks, mockCourses, categories, verdictOptions, dateRanges, sortOptions } from './data/mockData';

// Utility components that will be extracted later
import { User, Eye, Clock, Star } from 'lucide-react';

// Verdict Badge Component
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

// Modern Grid Card Component (matching screenshot design)
const CompactCard: React.FC<{ factCheck: FactCheck; onClick: () => void; featured?: boolean }> = ({ factCheck, onClick, featured = false }) => {
  const getVerdictConfig = (verdict: string) => {
    switch (verdict) {
      case 'true':
        return { bg: 'bg-green-100', text: 'text-green-800', dot: 'bg-green-500', label: 'صحيح' };
      case 'false':
        return { bg: 'bg-red-100', text: 'text-red-800', dot: 'bg-red-500', label: 'زائف' };
      case 'misleading':
        return { bg: 'bg-orange-100', text: 'text-orange-800', dot: 'bg-orange-500', label: 'مضلل' };
      case 'unproven':
        return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500', label: 'غير مثبت' };
      default:
        return { bg: 'bg-gray-100', text: 'text-gray-800', dot: 'bg-gray-500', label: 'غير محدد' };
    }
  };

  const verdictConfig = getVerdictConfig(factCheck.verdict);

  return (
    <article 
      className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 cursor-pointer relative"
      onClick={onClick}
    >
      {/* Image Section - Absolutely Positioned Right */}
      <div className="absolute top-6 right-6 w-24 h-24 flex-shrink-0">
        <LazyImage 
          src={factCheck.image} 
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        {featured && (
          <div className="absolute -top-2 -right-2 bg-yellow-500 text-white p-1 rounded-full text-xs font-bold shadow-lg">
            <Star className="w-3 h-3 fill-current" />
          </div>
        )}
      </div>
      
      {/* Content Section - Full Width with Right Margin */}
      <div className="pr-28">
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${verdictConfig.bg}`}>
              <div className={`w-2 h-2 rounded-full ${verdictConfig.dot}`}></div>
              <span className={`text-sm font-medium font-arabic ${verdictConfig.text}`}>
                {verdictConfig.label}
              </span>
            </div>
            <span className="text-xs text-gray-500 font-arabic">
              {factCheck.category}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors font-arabic-heading line-clamp-2">
            {factCheck.title}
          </h3>
          
          {/* Summary */}
          <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-4 font-arabic">
            {factCheck.summary}
          </p>

          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-2.5 h-2.5 text-blue-600" />
              </div>
              <span className="font-arabic">{factCheck.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span className="font-arabic">{factCheck.readTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3 h-3" />
              <span>{factCheck.views.toLocaleString()}</span>
            </div>
          </div>
        </div>
    </article>
  );
};

// Lazy Image Component
const LazyImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const imgElement = document.getElementById(`img-${src}`);
    if (imgElement) observer.observe(imgElement);

    return () => observer.disconnect();
  }, [src]);

  return (
    <div id={`img-${src}`} className={`${className} ${!loaded ? 'bg-gray-200 animate-pulse' : ''}`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
};

// Main Layout Component that will be used inside Router
const AppLayout: React.FC = () => {
  // State management
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedArticle, setSelectedArticle] = useState<FactCheck | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  
  const [filters, setFilters] = useState({
    category: 'جميع الفئات',
    verdict: 'جميع التصنيفات', 
    dateRange: 'جميع التواريخ',
    sortBy: 'الأحدث'
  });

  // Get current page from URL
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path === '/search') return 'search';
    if (path === '/article') return 'article';
    if (path === '/academy') return 'academy';
    if (path === '/about') return 'about';
    if (path === '/contact') return 'contact';
    return 'home';
  };

  const currentPage = getCurrentPage();

  // Navigation function that uses React Router
  const handleNavigation = (page: string) => {
    const routes: { [key: string]: string } = {
      'home': '/',
      'search': '/search',
      'article': '/article',
      'academy': '/academy',
      'about': '/about',
      'contact': '/contact'
    };
    navigate(routes[page] || '/');
  };

  // AI-Enhanced Search functionality with smart suggestions
  const aiSearchSuggestions = [
    'هل لقاح كوفيد-19 آمن للأطفال؟',
    'ما صحة ارتفاع سعر الذهب اليوم؟',
    'هل يؤثر 5G على صحة الإنسان؟',
    'ما حقيقة الزلزال في تركيا وسوريا؟',
    'هل الذكاء الاصطناعي سيزيح الوظائف؟',
    'ما صحة أخبار الاقتصاد العالمي؟'
  ];
  
  const searchSuggestions = searchQuery.length >= 2 
    ? [
        // AI-powered smart suggestions based on query
        ...aiSearchSuggestions.filter(suggestion => 
          suggestion.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 3),
        // Traditional search results
        ...mockFactChecks
          .filter(fc => fc.title.includes(searchQuery) || fc.summary.includes(searchQuery))
          .slice(0, 3)
          .map(fc => fc.title)
      ].slice(0, 5)
    : searchQuery.length === 0 ? aiSearchSuggestions.slice(0, 3) : [];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSearchSuggestions(query.length >= 2);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSearchSuggestions(false);
    handleNavigation('search');
  };

  // Filter functionality
  const filteredFactChecks = mockFactChecks.filter(factCheck => {
    const matchesSearch = !searchQuery || 
      factCheck.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      factCheck.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      factCheck.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = filters.category === 'جميع الفئات' || factCheck.category === filters.category;
    
    // Map Arabic verdicts to English for filtering
    const verdictMapping: { [key: string]: string } = {
      'جميع التصنيفات': 'all',
      'صحيح': 'true',
      'زائف': 'false', 
      'مضلل': 'misleading',
      'غير مثبت': 'unproven'
    };
    
    const matchesVerdict = filters.verdict === 'جميع التصنيفات' || 
      factCheck.verdict === verdictMapping[filters.verdict];
    
    return matchesSearch && matchesCategory && matchesVerdict;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Header */}
      <Header 
        currentPage={currentPage}
        setCurrentPage={handleNavigation}
        setIsSubmissionModalOpen={setIsSubmissionModalOpen}
        isHeaderMenuOpen={isHeaderMenuOpen}
        setIsHeaderMenuOpen={setIsHeaderMenuOpen}
      />

      {/* Main Content */}
      <main>
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage
                filters={filters}
                setFilters={setFilters}
                filteredFactChecks={filteredFactChecks}
                setCurrentPage={handleNavigation}
                setSelectedArticle={setSelectedArticle}
                setIsSubmissionModalOpen={setIsSubmissionModalOpen}
                CompactCard={CompactCard}
                VerdictBadge={VerdictBadge}
                LazyImage={LazyImage}
              />
            } 
          />
          <Route path="/search" element={
            <SearchPage 
              setCurrentPage={handleNavigation}
              setSelectedArticle={setSelectedArticle}
            />
          } />
          <Route 
            path="/article" 
            element={
              <ArticlePage 
                selectedArticle={selectedArticle} 
                setCurrentPage={handleNavigation} 
              />
            } 
          />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer setCurrentPage={handleNavigation} />

      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-4 right-4 left-4 bg-white border border-gray-200 rounded-xl shadow-lg p-4 z-30 max-w-md mx-auto" dir="rtl">
          <div className="flex flex-col gap-3">
            <p className="text-sm text-gray-600 font-arabic">
              نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. بالمتابعة، فإنك توافق على استخدامها.
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700 transition-colors flex-1 font-arabic"
              >
                موافق
              </button>
              <button 
                onClick={() => setShowCookieBanner(false)}
                className="text-gray-500 px-4 py-2 rounded-lg text-sm hover:text-gray-700 transition-colors font-arabic"
              >
                رفض
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Action Button - Right side for RTL */}
      <button
        onClick={() => setIsSubmissionModalOpen(true)}
        className="fixed bottom-6 right-6 bg-danger-600 text-white p-4 rounded-full shadow-lg hover:bg-danger-700 transition-all duration-300 hover:scale-110 z-30 lg:hidden"
        title="أرسل خبراً للتحقق"
        dir="rtl"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Report Modal */}
      <ReportModal 
        isOpen={isSubmissionModalOpen} 
        onClose={() => setIsSubmissionModalOpen(false)} 
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;