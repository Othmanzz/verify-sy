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
  <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm" dir="rtl">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between py-4">
        {/* Logo - Right side in RTL */}
        <button 
          onClick={() => setCurrentPage('home')}
          className="flex items-center gap-3 order-1 cursor-pointer group"
        >
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 shadow-lg group-hover:shadow-xl p-2">
            <img 
              src="/logo_ar.png" 
              alt="تأكد - لأن الخبر أمانة" 
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="text-sm text-gray-600 font-arabic font-medium">لأن الخبر أمانة</div>
          </div>
        </button>

        {/* Desktop Navigation - Center in RTL - Clean Design */}
        <nav className="hidden lg:flex items-center gap-1 order-2">
          <button 
            onClick={() => setCurrentPage('home')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-4 rounded-xl ${
              currentPage === 'home' 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            الرئيسية
          </button>
          
          <button 
            onClick={() => setCurrentPage('search')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-4 rounded-xl ${
              currentPage === 'search' 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            قاعدة البيانات
          </button>
          
          <button 
            onClick={() => setCurrentPage('academy')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-4 rounded-xl ${
              currentPage === 'academy' 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            أكاديمية التحقق
          </button>
          
          <div className="w-px h-8 bg-gray-200 mx-2"></div>
          
          <button 
            onClick={() => setCurrentPage('about')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-4 rounded-xl ${
              currentPage === 'about' 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            من نحن
          </button>
          
          <button 
            onClick={() => setCurrentPage('contact')}
            className={`font-medium font-arabic transition-all duration-300 relative px-5 py-4 rounded-xl ${
              currentPage === 'contact' 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
            }`}
          >
            اتصل بنا
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
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-5 py-4 rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center gap-2 font-medium font-arabic shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <MessageCircle className="w-4 h-4" />
            واتساب
          </a>

          <button 
            onClick={() => setIsSubmissionModalOpen(true)}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-2xl hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-2 font-medium font-arabic hover:scale-105 shadow-lg hover:shadow-xl transform"
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

      {/* Mobile Navigation - Clean Design */}
      {isHeaderMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 py-4 space-y-1 animate-in slide-in-from-top-2 duration-200 bg-white">
          <div className="space-y-1 px-2">
            <button 
              onClick={() => {
                setCurrentPage('home');
                setIsHeaderMenuOpen(false);
              }}
              className={`block w-full text-right px-5 py-4 rounded-xl font-medium font-arabic transition-all duration-300 ${
                currentPage === 'home' 
                  ? 'text-blue-600 bg-blue-50' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
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
              من نحن
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