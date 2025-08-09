import { FactCheck, Course } from '../types';

export const mockFactChecks: FactCheck[] = [
  {
    id: '1',
    title: 'ادعاء حول لقاح كوفيد-19 والآثار الجانبية طويلة المدى',
    summary: 'انتشر ادعاء يزعم أن لقاحات كوفيد-19 تسبب آثاراً جانبية خطيرة طويلة المدى. تم فحص هذا الادعاء بناءً على الأدلة العلمية المتاحة.',
    verdict: 'false',
    image: 'https://images.pexels.com/photos/3873193/pexels-photo-3873193.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. أحمد محمود',
    date: '2024-01-15',
    category: 'صحة',
    readTime: '5 دقائق',
    tags: ['لقاحات', 'كوفيد-19', 'صحة عامة'],
    views: 15420,
    featured: true
  },
  {
    id: '2',
    title: 'تصريح وزير الاقتصاد حول معدلات البطالة الجديدة',
    summary: 'تحقق من صحة التصريح الأخير لوزير الاقتصاد بخصوص انخفاض معدل البطالة إلى 8.5% خلال الربع الأخير من العام.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800',
    author: 'سارة أحمد',
    date: '2024-01-12',
    category: 'اقتصاد',
    readTime: '7 دقائق',
    tags: ['بطالة', 'اقتصاد', 'إحصائيات'],
    views: 8930,
    featured: false
  },
  {
    id: '3',
    title: 'معلومات حول التغيرات المناخية في المنطقة العربية',
    summary: 'فحص دقة البيانات المنشورة حول تأثير التغير المناخي على المنطقة العربية ومعدلات ارتفاع درجات الحرارة.',
    verdict: 'true',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpg?auto=compress&cs=tinysrgb&w=800',
    author: 'محمد العلي',
    date: '2024-01-10',
    category: 'بيئة',
    readTime: '6 دقائق',
    tags: ['مناخ', 'بيئة', 'احتباس حراري'],
    views: 12150,
    featured: false
  },
  {
    id: '4',
    title: 'ادعاءات حول فعالية الأدوية العشبية في علاج السرطان',
    summary: 'انتشرت مؤخراً ادعاءات حول قدرة بعض الأعشاب الطبيعية على علاج السرطان بشكل كامل دون الحاجة للعلاج الطبي التقليدي.',
    verdict: 'false',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. فاطمة الزهراء',
    date: '2024-01-08',
    category: 'صحة',
    readTime: '8 دقائق',
    tags: ['طب بديل', 'سرطان', 'أعشاب'],
    views: 22340,
    featured: true
  },
  {
    id: '5',
    title: 'تقرير حول نسب الأمية في الدول العربية',
    summary: 'تحليل للبيانات الرسمية المنشورة حول معدلات الأمية في الوطن العربي والتقدم المحرز في مجال التعليم.',
    verdict: 'true',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'أمين الكتبي',
    date: '2024-01-05',
    category: 'تعليم',
    readTime: '4 دقائق',
    tags: ['تعليم', 'أمية', 'إحصائيات'],
    views: 6780,
    featured: false
  },
  {
    id: '6',
    title: 'ادعاءات حول تأثير الهواتف الذكية على صحة الأطفال',
    summary: 'فحص الادعاءات المنتشرة حول الآثار الصحية السلبية للهواتف الذكية على نمو وتطور الأطفال.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. ليلى حسن',
    date: '2024-01-03',
    category: 'تكنولوجيا',
    readTime: '6 دقائق',
    tags: ['تكنولوجيا', 'أطفال', 'صحة'],
    views: 18920,
    featured: false
  },
  {
    id: '7',
    title: 'معلومات حول الانتخابات المحلية ونسب المشاركة',
    summary: 'تحقق من صحة البيانات المنشورة حول نسب المشاركة في الانتخابات المحلية الأخيرة.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'خالد المنصوري',
    date: '2024-01-01',
    category: 'سياسة',
    readTime: '5 دقائق',
    tags: ['انتخابات', 'سياسة', 'مشاركة'],
    views: 9450,
    featured: false
  },
  {
    id: '8',
    title: 'ادعاءات حول فوائد الصيام المتقطع للصحة',
    summary: 'تحليل الادعاءات المنتشرة حول الفوائد الصحية للصيام المتقطع وتأثيره على فقدان الوزن.',
    verdict: 'true',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'د. عمر الطبيب',
    date: '2023-12-28',
    category: 'صحة',
    readTime: '7 دقائق',
    tags: ['صيام', 'تغذية', 'صحة'],
    views: 31200,
    featured: true
  }
];

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'أساسيات التحقق من المعلومات',
    description: 'تعلم المهارات الأساسية للتحقق من صحة المعلومات والأخبار على الإنترنت باستخدام الأدوات والتقنيات الحديثة.',
    duration: '4 أسابيع',
    level: 'مبتدئ',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    students: 1250,
    rating: 4.8,
    instructor: 'د. أحمد محمود'
  },
  {
    id: '2',
    title: 'التحليل المتقدم للمحتوى المرئي',
    description: 'طرق متقدمة لتحليل الصور ومقاطع الفيديو والتحقق من أصالتها باستخدام التقنيات الرقمية المتطورة.',
    duration: '6 أسابيع',
    level: 'متقدم',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    students: 890,
    rating: 4.9,
    instructor: 'سارة أحمد'
  },
  {
    id: '3',
    title: 'صحافة البيانات والتحقق الإحصائي',
    description: 'تعلم كيفية تحليل البيانات والإحصائيات والتحقق من صحتها في السياق الصحفي.',
    duration: '5 أسابيع',
    level: 'متوسط',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg?auto=compress&cs=tinysrgb&w=800',
    students: 670,
    rating: 4.7,
    instructor: 'محمد العلي'
  },
  {
    id: '4',
    title: 'التحقق من المصادر الرقمية',
    description: 'دليل شامل للتحقق من موثوقية المصادر الرقمية وتقييم مصداقية المواقع الإلكترونية.',
    duration: '3 أسابيع',
    level: 'مبتدئ',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    students: 1450,
    rating: 4.6,
    instructor: 'د. فاطمة الزهراء'
  }
];

export const categories = [
  'جميع الفئات',
  'صحة',
  'اقتصاد',
  'بيئة',
  'تعليم',
  'تكنولوجيا',
  'سياسة',
  'رياضة',
  'ثقافة'
];

export const verdictOptions = [
  'جميع التصنيفات',
  'صحيح',
  'زائف',
  'مضلل',
  'غير مثبت'
];

export const dateRanges = [
  'جميع التواريخ',
  'آخر يوم',
  'آخر أسبوع',
  'آخر شهر',
  'آخر 3 أشهر',
  'آخر سنة'
];

export const sortOptions = [
  'الأحدث',
  'الأقدم',
  'الأكثر مشاهدة',
  'الأقل مشاهدة'
];