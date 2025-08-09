import React from 'react';
import { Bell, Globe, MessageCircle, Plus, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setIsSubmissionModalOpen: (open: boolean) => void;
  isHeaderMenuOpen: boolean;
  setIsHeaderMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  setIsSubmissionModalOpen,
  isHeaderMenuOpen,
  setIsHeaderMenuOpen 
}) => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95 nav-shadow" dir="rtl">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo - Right side in RTL */}
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-4 order-1 cursor-pointer group"
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-xl p-2">
            <svg 
              viewBox="0 0 200 150" 
              className="w-full h-full" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* New Verify-sy Logo based on provided image */}
              <g transform="translate(100,75)">
                {/* Blue gradient background shape */}
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                  <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#3B82F6" />
                  </linearGradient>
                </defs>
                
                {/* Main logo shape */}
                <g opacity="0.95">
                  {/* Large checkmark */}
                  <path d="M-45,-20 L-15,15 L45,-30" stroke="url(#checkGradient)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  
                  {/* Arabic text elements stylized */}
                  <g fill="url(#logoGradient)">
                    {/* أ */}
                    <path d="M-60,25 L-60,45 M-55,35 L-65,35" strokeWidth="3" stroke="url(#logoGradient)" fill="none" strokeLinecap="round"/>
                    {/* ن */}
                    <circle cx="-40" cy="40" r="4" />
                    <path d="M-50,35 C-45,30 -35,30 -30,35 C-30,40 -30,45 -30,45" strokeWidth="3" stroke="url(#logoGradient)" fill="none" strokeLinecap="round"/>
                    
                    {/* الخبر أمانة */}
                    <g transform="translate(20,35)">
                      <rect x="-15" y="0" width="30" height="3" rx="1.5" fill="url(#logoGradient)" opacity="0.8"/>
                      <rect x="-20" y="8" width="20" height="3" rx="1.5" fill="url(#logoGradient)" opacity="0.6"/>
                      <rect x="5" y="8" width="15" height="3" rx="1.5" fill="url(#logoGradient)" opacity="0.6"/>
                    </g>
                  </g>
                  
                  {/* Decorative elements */}
                  <circle cx="55" cy="-25" r="3" fill="url(#logoGradient)" opacity="0.7"/>
                  <circle cx="-55" cy="-10" r="2" fill="url(#checkGradient)" opacity="0.8"/>
                  <circle cx="60" cy="5" r="1.5" fill="url(#logoGradient)" opacity="0.6"/>
                </g>
              </g>
            </svg>
          </div>
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent font-arabic">تأكد</span>
            <div className="text-sm text-gray-600 font-arabic font-medium">لأن الخبر أمانة</div>
          </div>
        </button>

        {/* Desktop Navigation - Center in RTL - Enhanced Design */}
        <nav className="hidden lg:flex items-center gap-2 order-2 bg-white/80 backdrop-blur-sm rounded-2xl px-2 py-2 shadow-lg border border-gray-100">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-3 rounded-xl group ${
              currentPage === 'home' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-200' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="relative z-10">الرئيسية</span>
            {currentPage !== 'home' && (
              <div className="absolute inset-0 bg-blue-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-200" />
            )}
          </button>
          
          <button 
            onClick={() => setCurrentPage('search')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-3 rounded-xl group ${
              currentPage === 'search' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-200' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="relative z-10">قاعدة البيانات</span>
            {currentPage !== 'search' && (
              <div className="absolute inset-0 bg-blue-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-200" />
            )}
          </button>
          
          <button 
            onClick={() => setCurrentPage('academy')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-3 rounded-xl group ${
              currentPage === 'academy' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-200' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="relative z-10">أكاديمية التحقق</span>
            {currentPage !== 'academy' && (
              <div className="absolute inset-0 bg-blue-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-200" />
            )}
          </button>
          
          <div className="w-px h-8 bg-gray-200 mx-2"></div>
          
          <button 
            onClick={() => setCurrentPage('about')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-3 rounded-xl group ${
              currentPage === 'about' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-200' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="relative z-10">حولنا</span>
            {currentPage !== 'about' && (
              <div className="absolute inset-0 bg-blue-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-200" />
            )}
          </button>
          
          <button 
            onClick={() => setCurrentPage('contact')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-3 rounded-xl group ${
              currentPage === 'contact' 
                ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-200' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            <span className="relative z-10">اتصل بنا</span>
            {currentPage !== 'contact' && (
              <div className="absolute inset-0 bg-blue-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-200" />
            )}
          </button>
        </nav>

        {/* Action Buttons - Left side in RTL - Enhanced Design */}
        <div className="hidden lg:flex items-center gap-3 order-3">
          <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-1">
            <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md" title="الإشعارات">
              <Bell className="w-5 h-5" />
            </button>

            <button className="p-3 text-gray-600 hover:text-blue-600 hover:bg-white rounded-xl transition-all duration-300 shadow-sm hover:shadow-md" title="اللغة">
              <Globe className="w-5 h-5" />
            </button>
          </div>
          
          <div className="w-px h-10 bg-gray-200 mx-1"></div>
          
          <a 
            href="https://wa.me/963123456789" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-3 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center gap-2 font-medium font-arabic shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <MessageCircle className="w-4 h-4" />
            واتساب
          </a>

          <button 
            onClick={() => setIsSubmissionModalOpen(true)}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2 font-medium font-arabic hover:scale-105 shadow-lg hover:shadow-xl transform"
          >
            <Plus className="w-4 h-4" />
            تقرير كاذب
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
          className="lg:hidden p-2.5 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all duration-300 order-3"
          aria-label="Toggle menu"
        >
          {isHeaderMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation - Enhanced Design */}
      {isHeaderMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200 bg-gradient-to-b from-white to-gray-50">
          <div className="space-y-1 px-2">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsHeaderMenuOpen(false);
              }}
              className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                currentPage === 'home' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              الرئيسية
            </button>
            
            <button 
              onClick={() => {
                setCurrentPage('search');
                setIsHeaderMenuOpen(false);
              }}
              className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                currentPage === 'search' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              قاعدة البيانات
            </button>
            
            <button 
              onClick={() => {
                setCurrentPage('academy');
                setIsHeaderMenuOpen(false);
              }}
              className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                currentPage === 'academy' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              أكاديمية التحقق
            </button>
            
            <button 
              onClick={() => {
                setCurrentPage('about');
                setIsHeaderMenuOpen(false);
              }}
              className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                currentPage === 'about' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              حولنا
            </button>
            
            <button 
              onClick={() => {
                setCurrentPage('contact');
                setIsHeaderMenuOpen(false);
              }}
              className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                currentPage === 'contact' 
                  ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
              }`}
            >
              اتصل بنا
            </button>
          </div>
          
          <div className="flex gap-3 px-4 pt-6 border-t border-gray-200 mt-6">
            <a 
              href="https://wa.me/963123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 font-medium font-arabic text-center shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              واتساب
            </a>
            <button 
              onClick={() => {
                setIsSubmissionModalOpen(true);
                setIsHeaderMenuOpen(false);
              }}
              className="flex-1 bg-gradient-to-r from-red-600 to-red-700 text-white py-4 rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium font-arabic shadow-lg flex items-center justify-center gap-2"
            >
              <Plus className="w-4 h-4" />
              تقرير كاذب
            </button>
          </div>
        </div>
      )}
    </div>
  </header>
);

export default Header;