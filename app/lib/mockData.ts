import { FactCheck, Course } from '../types';

export const mockFactChecks: FactCheck[] = [
  {
    id: '2508011650',
    title: 'صور أفيخاي أدرعي في ريف دمشق لا تثبت دخوله مدينة قطنا',
    summary: 'انتشرت صور تزعم وجود المتحدث باسم الجيش الإسرائيلي أفيخاي أدرعي يتجول في قرى درزية قرب جبل الشيخ، وسط ادعاءات حول دخوله مدينة قطنا، مما أثار جدلاً واسعاً حول صحة هذه المعلومات.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2025-08-01',
    category: 'سياسة',
    readTime: '5 دقائق',
    tags: ['السويداء', 'الهجمات الإسرائيلية', 'أفيخاي أدرعي'],
    views: 12420,
    featured: true
  },
  {
    id: '2507230629',
    title: 'هل عُثر على جثة مدير مركز الدفاع المدني في السويداء المختطف "حمزة العمارين"؟',
    summary: 'تداولت منصات التواصل الاجتماعي ادعاءات حول العثور على جثة مدير مركز الدفاع المدني المختطف في السويداء، لكن هذه الادعاءات لم تؤكدها المصادر الرسمية.',
    verdict: 'unproven',
    image: 'https://images.pexels.com/photos/4792073/pexels-photo-4792073.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2025-07-23',
    category: 'أخبار محلية',
    readTime: '4 دقائق',
    tags: ['السويداء', 'الدفاع المدني السوري', 'اختطاف'],
    views: 8230,
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
    id: '2507141324',
    title: 'هذا المقطع قديم ولا يظهر توجه أرتال من دير الزور باتجاه السويداء',
    summary: 'انتشر مقطع فيديو مع ادعاء حول توجه قوافل من دير الزور نحو السويداء لطرد العصابات، لكن هذا الادعاء مضلل حيث أن المقطع قديم ولا علاقة له بالأحداث الحالية.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2025-07-14',
    category: 'أخبار محلية',
    readTime: '4 دقائق',
    tags: ['الأنشطة العسكرية', 'الأقليات'],
    views: 6420,
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
    title: 'كيف يضلل نموذج Grok مستخدمي "إكس"؟ منصة "تأكد" تكشف إحدى تجاربها',
    summary: 'مؤخراً، يلجأ مستخدمو مواقع التواصل الاجتماعي بشكل متزايد إلى أدوات الذكاء الاصطناعي للتحقق من مقاطع الفيديو والصور والأخبار المتداولة، لكن هذه الأدوات قد تقدم معلومات مضللة.',
    verdict: 'confirmed',
    image: 'https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2025-08-08',
    category: 'تكنولوجيا',
    readTime: '6 دقائق',
    tags: ['ذكاء اصطناعي', 'Grok', 'تضليل رقمي'],
    views: 18320,
    featured: true
  },
  {
    id: '9',
    title: 'مصادر موثقة: مؤكد بناءً على مصادر علمية معتبرة',
    summary: 'تم الاعتماد على مصادر علمية معتبرة في التحقق من هذه المعلومة وفقاً لمعايير التحقق الدولية.',
    verdict: 'confirmed',
    image: 'https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-18',
    category: 'تحقق معتمد',
    readTime: '4 دقائق',
    tags: ['مصادر موثقة', 'علمي', 'معتمد'],
    views: 12450,
    featured: false
  },
  {
    id: '10',
    title: 'مراجع متخصص: تمت مراجعته من قبل خبراء في المجال',
    summary: 'تمت مراجعته من قبل خبراء في المجال وفقاً لمعايير التحقق الدولية.',
    verdict: 'confirmed',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-17',
    category: 'تحقق معتمد',
    readTime: '3 دقائق',
    tags: ['خبراء', 'مراجعة', 'متخصص'],
    views: 9870,
    featured: false
  },
  {
    id: '11',
    title: 'معايير دولية: وفقاً لمعايير التحقق الدولية',
    summary: 'تم التحقق من هذه المعلومة وفقاً لمعايير التحقق الدولية المعتمدة من IFCN.',
    verdict: 'confirmed',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-16',
    category: 'تحقق معتمد',
    readTime: '4 دقائق',
    tags: ['معايير دولية', 'IFCN', 'تحقق'],
    views: 8650,
    featured: false
  },
  {
    id: '13',
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
  },
  {
    id: '14',
    title: 'الحكومة السورية تؤكد رسمياً بدء إعادة إعمار المناطق المتضررة',
    summary: 'أعلنت الحكومة السورية رسمياً عن بدء برنامج شامل لإعادة إعمار المناطق المتضررة في عدة محافظات بالتعاون مع المنظمات الدولية.',
    verdict: 'confirmed',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-19',
    category: 'سياسة',
    readTime: '5 دقائق',
    tags: ['إعمار', 'حكومة', 'سوريا'],
    views: 12500,
    featured: true
  },
  {
    id: '15',
    title: 'البنك المركزي السوري يؤكد استقرار سعر الصرف وتحسن الوضع الاقتصادي',
    summary: 'أكد البنك المركزي السوري في بيان رسمي استقرار سعر الصرف وتحسن مؤشرات الاقتصاد الكلي بعد سلسلة من الإجراءات الاقتصادية.',
    verdict: 'confirmed',
    image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2024-12-18',
    category: 'اقتصاد',
    readTime: '4 دقائق',
    tags: ['اقتصاد', 'بنك مركزي', 'عملة'],
    views: 10800,
    featured: false
  },
  {
    id: '2508071245',
    title: 'هذه الصورة ليست لتخريج دفعة جديدة من الجيش السوري',
    summary: 'تداولت على فيسبوك وإكس صورة زُعم أنها تظهر "تخريج جديد من الجيش الأموي"، لكن هذا الادعاء مضلل حيث تبين أن الصورة لا تمت بصلة للجيش السوري الحديث.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/3952224/pexels-photo-3952224.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2025-08-07',
    category: 'أخبار محلية',
    readTime: '5 دقائق',
    tags: ['الجيش السوري', 'صور مضللة', 'تخريج عسكري'],
    views: 11200,
    featured: false
  },
  {
    id: '2508061130',
    title: 'هل هو إنقاذ أم اختطاف؟ القصة الكاملة لعائلة السويداء في فيديو مثير',
    summary: 'انتشر فيديو مثير للجدل يظهر مشهداً لعائلة من السويداء، مما أثار تساؤلات حول طبيعة الحادثة وما إذا كانت عملية إنقاذ أم شيئاً آخر، مما يتطلب توضيحاً شاملاً للقصة.',
    verdict: 'misleading',
    image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'فريق تأكد',
    date: '2025-08-06',
    category: 'أخبار محلية',
    readTime: '7 دقائق',
    tags: ['السويداء', 'فيديو مثير', 'قصة كاملة'],
    views: 9900,
    featured: false
  }
];

export const mockCourses: Course[] = [
  {
    id: 'course-1',
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
    id: 'course-2',
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
    id: 'course-3',
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
    id: 'course-4',
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
  'احتيال',
  'عبث',
  'إرباك',
  'مؤكد'
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