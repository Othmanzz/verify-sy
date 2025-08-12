'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bell, Globe, MessageCircle, Plus, Menu, X, ChevronDown, XCircle, AlertCircle, HelpCircle, CheckCircle } from 'lucide-react'
import { verdictSubcategories } from '../lib/mockData'

interface HeaderProps {
  setIsSubmissionModalOpen: (open: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ setIsSubmissionModalOpen }) => {
  const pathname = usePathname()
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null)

  const isActive = (path: string) => pathname === path

  const getVerdictIcon = (verdict: string) => {
    switch (verdict) {
      case 'احتيال': return <XCircle className="w-4 h-4 text-red-600" />
      case 'عبث': return <AlertCircle className="w-4 h-4 text-orange-600" />
      case 'إرباك': return <HelpCircle className="w-4 h-4 text-gray-600" />
      case 'مؤكد': return <CheckCircle className="w-4 h-4 text-blue-600" />
      default: return null
    }
  }

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'احتيال': return 'text-red-600 hover:bg-red-50'
      case 'عبث': return 'text-orange-600 hover:bg-orange-50'
      case 'إرباك': return 'text-gray-600 hover:bg-gray-50'
      case 'مؤكد': return 'text-blue-600 hover:bg-blue-50'
      default: return 'text-gray-600 hover:bg-gray-50'
    }
  }

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && !(event.target as Element).closest('.relative')) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [openDropdown])

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          {/* Logo - Right side in RTL */}
          <Link 
            href="/"
            className="flex items-center gap-3 order-1 cursor-pointer group"
          >
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white hover:bg-gray-50 transition-all duration-300 group-hover:scale-105 shadow-md group-hover:shadow-lg p-2">
              <img 
                src="/logo_ar.png" 
                alt="تأكد - لأن الخبر أمانة" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-sm text-gray-600 font-arabic font-medium">لأن الخبر أمانة</div>
            </div>
          </Link>

          {/* Desktop Navigation - Center in RTL - Clean Design */}
          <nav className="hidden lg:flex items-center gap-1 order-2">
            <Link 
              href="/"
              className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm ${
                isActive('/') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              الرئيسية
            </Link>
            
            <Link 
              href="/search"
              className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm ${
                isActive('/search') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              قاعدة البيانات
            </Link>
            
            <Link 
              href="/academy"
              className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm ${
                isActive('/academy') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              أكاديمية التحقق
            </Link>
            
            <div className="w-px h-8 bg-gray-200 mx-2"></div>
            
            {/* Verdict Dropdown Menus */}
            {Object.entries(verdictSubcategories).map(([verdict, subcategories]) => {
              // If no subcategories, show as a regular link
              if (subcategories.length === 0) {
                return (
                  <Link
                    key={verdict}
                    href={`/search?verdict=${verdict}`}
                    className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm flex items-center gap-1 ${getVerdictColor(verdict)}`}
                  >
                    {getVerdictIcon(verdict)}
                    {verdict}
                  </Link>
                );
              }
              
              return (
                <div key={verdict} className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === verdict ? null : verdict)}
                    className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm flex items-center gap-1 ${getVerdictColor(verdict)}`}
                  >
                    {getVerdictIcon(verdict)}
                    {verdict}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === verdict ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {openDropdown === verdict && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50">
                      {subcategories.map((subcategory) => (
                        <Link
                          key={subcategory}
                          href={`/search?verdict=${verdict}&subcategory=${subcategory}`}
                          className="block px-4 py-2 text-sm font-arabic text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {subcategory}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            <div className="w-px h-8 bg-gray-200 mx-2"></div>
            
            <Link 
              href="/about"
              className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm ${
                isActive('/about') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              من نحن
            </Link>
            
            <Link 
              href="/contact"
              className={`font-medium font-arabic transition-all duration-300 relative px-3 py-2 rounded-lg text-sm ${
                isActive('/contact') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
              }`}
            >
              اتصل بنا
            </Link>
          </nav>

          {/* Action Buttons - Left side in RTL - Enhanced Design */}
          <div className="hidden lg:flex items-center gap-3 order-3">
            <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-1">
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md" title="الإشعارات">
                <Bell className="w-4 h-4" />
              </button>

              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md" title="اللغة">
                <Globe className="w-4 h-4" />
              </button>
            </div>
            
            <div className="w-px h-10 bg-gray-200 mx-1"></div>
            
            <a 
              href="https://wa.me/963123456789" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 flex items-center gap-1.5 font-medium font-arabic text-sm shadow-md hover:shadow-lg hover:scale-105 transform"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              واتساب
            </a>

            <button 
              onClick={() => setIsSubmissionModalOpen(true)}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 flex items-center gap-1.5 font-medium font-arabic text-sm hover:scale-105 shadow-md hover:shadow-lg transform relative z-50"
            >
              <Plus className="w-3.5 h-3.5" />
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
              <Link 
                href="/"
                onClick={() => setIsHeaderMenuOpen(false)}
                className={`block w-full text-right px-5 py-4 rounded-xl font-medium font-arabic transition-all duration-300 ${
                  isActive('/') 
                    ? 'text-blue-600 bg-blue-50' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50/50'
                }`}
              >
                الرئيسية
              </Link>
              
              <Link 
                href="/search"
                onClick={() => setIsHeaderMenuOpen(false)}
                className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                  isActive('/search') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
                }`}
              >
                قاعدة البيانات
              </Link>
              
              <Link 
                href="/academy"
                onClick={() => setIsHeaderMenuOpen(false)}
                className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                  isActive('/academy') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
                }`}
              >
                أكاديمية التحقق
              </Link>
              
              <Link 
                href="/about"
                onClick={() => setIsHeaderMenuOpen(false)}
                className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                  isActive('/about') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
                }`}
              >
                من نحن
              </Link>
              
              <Link 
                href="/contact"
                onClick={() => setIsHeaderMenuOpen(false)}
                className={`block w-full text-right px-5 py-4 rounded-2xl font-medium font-arabic transition-all duration-300 ${
                  isActive('/contact') 
                    ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg' 
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm'
                }`}
              >
                اتصل بنا
              </Link>
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
                  setIsSubmissionModalOpen(true)
                  setIsHeaderMenuOpen(false)
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
  )
}

export default Header