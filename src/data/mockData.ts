import { FactCheck, Course } from '../types';

export const mockFactChecks: FactCheck[] = [
  {
    id: '1',
    title: 'صور أفيخاي أدرعي في ريف دمشق لا تثبت دخوله مدينة قطنا',
    summary: 'انتشرت صور تزعم وجود المتحدث باسم الجيش الإسرائيلي أفيخاي أدرعي في قرى درزية سورية قرب جبل الشيخ، لكن الأدلة المتوفرة لا تثبت دخوله مدينة قطنا تحديداً.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-18',
    category: 'سياسة',
    readTime: '4 دقائق',
    tags: ['سياسة', 'سوريا', 'إسرائيل'],
    views: 8420,
    featured: true
  },
  {
    id: '2',
    title: 'هل عُثر على جثة مدير مركز الدفاع المدني في السويداء المختطف',
    summary: 'تداولت وسائل التواصل الاجتماعي أنباء حول العثور على جثة حمزة العمارين مدير مركز الدفاع المدني المختطف في السويداء، لكن المصادر الرسمية لم تؤكد هذه المعلومات.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/4792073/pexels-photo-4792073.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-15',
    category: 'أخبار محلية',
    readTime: '3 دقائق',
    tags: ['السويداء', 'دفاع مدني', 'اختطاف'],
    views: 6230,
    featured: false
  },
  {
    id: '3',
    title: 'حرائق متواصلة في اللاذقية ومؤشرات "فعل متعمد"',
    summary: 'اندلعت حرائق في عدة مناطق بمحافظة اللاذقية، وتشير التقارير الأولية إلى وجود مؤشرات على أن بعض هذه الحرائق قد يكون مفتعلاً، لكن التحقيقات لا تزال جارية.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-12',
    category: 'بيئة وأمان',
    readTime: '5 دقائق',
    tags: ['حرائق', 'اللاذقية', 'بيئة'],
    views: 9150,
    featured: false
  },
  {
    id: '4',
    title: 'فيديو قوافل عسكرية تتوجه للسويداء قديم من آذار الماضي',
    summary: 'انتشر فيديو يزعم أنه يظهر قوافل عسكرية تتوجه إلى السويداء مؤخراً، لكن التحقق من المصدر أظهر أن الفيديو قديم يعود إلى آذار 2024 ويظهر قوافل متوجهة للساحل السوري.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-10',
    category: 'أخبار محلية',
    readTime: '4 دقائق',
    tags: ['السويداء', 'قوافل عسكرية', 'فيديو'],
    views: 5420,
    featured: false
  },
  {
    id: '5',
    title: 'إدعاء إصابات في صفوف القوات الروسية بريف إدلب',
    summary: 'تداولت صفحات على مواقع التواصل الاجتماعي ادعاءات حول سقوط إصابات في صفوف القوات الروسية في منطقة ريف إدلب، لكن لم يتم التأكد من صحة هذه المعلومات من مصادر موثوقة.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-08',
    category: 'أخبار محلية',
    readTime: '3 دقائق',
    tags: ['إدلب', 'قوات روسية', 'إدعاء'],
    views: 7230,
    featured: false
  },
  {
    id: '6',
    title: 'صور تظهر تضرر مشافي في ريف دمشق الشرقي قديمة',
    summary: 'انتشرت صور تزعم أنها تظهر تضرر مشافي في منطقة الغوطة الشرقية بريف دمشق نتيجة قصف حديث، لكن تبين أن الصور قديمة تعود لفترات سابقة من النزاع.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-06',
    category: 'أخبار محلية',
    readTime: '4 دقائق',
    tags: ['ريف دمشق', 'مشافي', 'صور قديمة'],
    views: 4850,
    featured: false
  },
  {
    id: '7',
    title: 'ادعاءات حول انقطاع التيار الكهربائي في حمص غير دقيقة',
    summary: 'تداولت منشورات على مواقع التواصل الاجتماعي ادعاءات حول انقطاع التيار الكهربائي بشكل كامل في مدينة حمص لمدة 48 ساعة، لكن المؤسسة العامة للكهرباء نفت هذه المعلومات.',
    verdict: 'false',
    image: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-04',
    category: 'أخبار محلية',
    readTime: '3 دقائق',
    tags: ['حمص', 'كهرباء', 'انقطاع'],
    views: 6780,
    featured: false
  },
  {
    id: '8',
    title: 'ادعاءات حول وصول مساعدات دولية إلى درعا غير صحيحة',
    summary: 'انتشرت تقارير تزعم وصول مساعدات إنسانية دولية إلى مناطق في محافظة درعا، لكن المنظمات الإنسانية العاملة في المنطقة أكدت عدم صحة هذه المعلومات وأن آخر شحنة مساعدات وصلت قبل أشهر.',
    verdict: 'false',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-02',
    category: 'أخبار محلية',
    readTime: '5 دقائق',
    tags: ['درعا', 'مساعدات إنسانية', 'منظمات دولية'],
    views: 8920,
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
  'سياسة',
  'أخبار محلية',
  'بيئة وأمان',
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