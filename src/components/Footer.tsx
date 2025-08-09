import React from 'react';
import { Mail, Phone, MapPin, Twitter, Facebook, Instagram, Youtube, Shield, BookOpen, FileText, Users } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => (
  <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white" dir="rtl">
    <div className="container mx-auto px-4 py-16">
      {/* Main Footer Content */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/15 backdrop-blur-sm border border-white/20 p-3 shadow-xl">
              <img 
                src="/logo_ar.png" 
                alt="تأكد - لأن الخبر أمانة" 
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div>
              <p className="text-primary-200 text-base font-arabic font-medium">لأن الخبر أمانة</p>
            </div>
          </div>
          
          <p className="text-primary-100 leading-relaxed font-arabic">
            منصة مستقلة ومحايدة متخصصة في التحقق من الأخبار والمعلومات ومحاربة الأخبار الزائفة 
            في الوطن العربي، معتمدة من الشبكة الدولية لفحص الحقائق (IFCN).
          </p>
          
          {/* IFCN Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/20">
            <Shield className="w-5 h-5 text-accent-300" />
            <div className="text-sm">
              <div className="font-bold text-white">معتمد من IFCN</div>
              <div className="text-primary-200 text-xs">الشبكة الدولية لفحص الحقائق</div>
            </div>
          </div>
        </div>

        {/* Quick Links - Enhanced Design */}
        <div className="space-y-4">
          <h4 className="text-2xl font-bold text-white mb-6 font-arabic-heading">روابط سريعة</h4>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-primary-100 hover:text-white transition-all duration-300 flex items-center gap-3 font-arabic hover:translate-x-2 transform group py-2 px-3 rounded-xl hover:bg-white/10 w-full text-right"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                الرئيسية
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('search')}
                className="text-primary-100 hover:text-white transition-all duration-300 flex items-center gap-3 font-arabic hover:translate-x-2 transform group py-2 px-3 rounded-xl hover:bg-white/10 w-full text-right"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                قاعدة البيانات
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('academy')}
                className="text-primary-100 hover:text-white transition-all duration-300 flex items-center gap-3 font-arabic hover:translate-x-2 transform group py-2 px-3 rounded-xl hover:bg-white/10 w-full text-right"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                أكاديمية التحقق
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('about')}
                className="text-primary-100 hover:text-white transition-all duration-300 flex items-center gap-3 font-arabic hover:translate-x-2 transform group py-2 px-3 rounded-xl hover:bg-white/10 w-full text-right"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                حولنا
              </button>
            </li>
            <li>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="text-primary-100 hover:text-white transition-all duration-300 flex items-center gap-3 font-arabic hover:translate-x-2 transform group py-2 px-3 rounded-xl hover:bg-white/10 w-full text-right"
              >
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                اتصل بنا
              </button>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-6 font-arabic-heading">خدماتنا</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-primary-100 font-arabic">
              <FileText className="w-4 h-4 text-accent-400" />
              التحقق من الأخبار
            </li>
            <li className="flex items-center gap-3 text-primary-100 font-arabic">
              <BookOpen className="w-4 h-4 text-accent-400" />
              دورات تعليمية مجانية
            </li>
            <li className="flex items-center gap-3 text-primary-100 font-arabic">
              <Users className="w-4 h-4 text-accent-400" />
              مجتمع المدققين
            </li>
            <li className="flex items-center gap-3 text-primary-100 font-arabic">
              <Shield className="w-4 h-4 text-accent-400" />
              تقارير شهرية
            </li>
          </ul>
          
          {/* Newsletter Signup */}
          <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
            <h5 className="font-bold text-white mb-3 font-arabic">النشرة الإخبارية</h5>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 text-sm"
              />
              <button className="bg-accent-600 text-white px-4 py-2 rounded-lg hover:bg-accent-700 transition-colors text-sm font-arabic">
                اشتراك
              </button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white mb-6 font-arabic-heading">تواصل معنا</h4>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-primary-100">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <div className="text-white font-medium">البريد الإلكتروني</div>
                <a href="mailto:info@verify-sy.com" className="text-primary-200 hover:text-white transition-colors">
                  info@verify-sy.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-primary-100">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <div className="text-white font-medium font-arabic">واتساب</div>
                <a href="tel:+963123456789" className="text-primary-200 hover:text-white transition-colors">
                  +963 123 456 789
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-primary-100">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent-400" />
              </div>
              <div>
                <div className="text-white font-medium font-arabic">العنوان</div>
                <div className="text-primary-200 font-arabic">دمشق، سوريا</div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-6">
            <h5 className="text-white font-bold mb-3 font-arabic">تابعنا</h5>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                <Twitter className="w-5 h-5 text-primary-200 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                <Facebook className="w-5 h-5 text-primary-200 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                <Instagram className="w-5 h-5 text-primary-200 group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors group">
                <Youtube className="w-5 h-5 text-primary-200 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 pt-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-200 text-sm font-arabic">
            © {new Date().getFullYear()} منصة تأكد. جميع الحقوق محفوظة.
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <button className="text-primary-200 hover:text-white transition-colors font-arabic">
              سياسة الخصوصية
            </button>
            <button className="text-primary-200 hover:text-white transition-colors font-arabic">
              شروط الاستخدام
            </button>
            <button className="text-primary-200 hover:text-white transition-colors font-arabic">
              معايير التحقق
            </button>
            <button className="text-primary-200 hover:text-white transition-colors font-arabic">
              خريطة الموقع
            </button>
          </div>
          
          <div className="flex items-center gap-2 text-primary-200 text-sm">
            <span className="font-arabic">مصنوع بـ</span>
            <span className="text-red-400">❤️</span>
            <span className="font-arabic">في سوريا</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;