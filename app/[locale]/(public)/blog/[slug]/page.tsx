'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

// Mock blog post data
const blogPost = {
  id: 1,
  slug: 'future-of-digital-business',
  title: 'مستقبل الأعمال الرقمية في العالم العربي',
  content: `
    <p>تشهد الأعمال الرقمية في العالم العربي نمواً متسارعاً ومتطوراً، حيث تتجه الشركات والمؤسسات بشكل متزايد نحو التحول الرقمي لمواكبة التطورات التقنية وتحسين كفاءة العمليات.</p>
    
    <h2>التحديات والفرص</h2>
    <p>رغم التقدم الملحوظ في هذا المجال، لا تزال هناك تحديات تواجه الشركات العربية في رحلة التحول الرقمي، منها:</p>
    
    <ul>
      <li>نقص الخبرات التقنية المتخصصة</li>
      <li>ضعف البنية التحتية الرقمية في بعض المناطق</li>
      <li>مقاومة التغيير من قبل بعض الموظفين</li>
      <li>التحديات الأمنية والخصوصية</li>
    </ul>
    
    <p>في المقابل، تتمتع المنطقة العربية بفرص عديدة للنمو في مجال الأعمال الرقمية:</p>
    
    <ul>
      <li>سوق كبير وشاب يتطلع للتقنيات الحديثة</li>
      <li>استثمارات حكومية ضخمة في التحول الرقمي</li>
      <li>تطور قطاع الاتصالات والإنترنت</li>
      <li>زيادة الوعي بأهمية التحول الرقمي</li>
    </ul>
    
    <h2>التقنيات الناشئة</h2>
    <p>تلعب التقنيات الناشئة دوراً محورياً في تشكيل مستقبل الأعمال الرقمية، ومن أبرزها:</p>
    
    <h3>الذكاء الاصطناعي وتعلم الآلة</h3>
    <p>يمكن للذكاء الاصطناعي تحسين تجربة العملاء، وأتمتة العمليات، وتحليل البيانات بطرق أكثر فعالية من أي وقت مضى.</p>
    
    <h3>إنترنت الأشياء (IoT)</h3>
    <p>تتيح تقنية إنترنت الأشياء ربط الأجهزة والمعدات بالإنترنت، مما يفتح آفاقاً جديدة لتحسين العمليات وخفض التكاليف.</p>
    
    <h3>الحوسبة السحابية</h3>
    <p>توفر الحوسبة السحابية مرونة أكبر وتكاليف أقل للشركات، خاصة الناشئة والصغيرة.</p>
  `,
  author: 'أحمد المالكي',
  publishedAt: '2024-01-15',
  category: 'تقنية',
  tags: ['ذكاء اصطناعي', 'أعمال رقمية', 'تطوير'],
  image: '/placeholder/blog-1.jpg',
  readingTime: '8 دقائق',
};

export default function BlogPostPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="container mx-auto px-4 py-20 max-w-4xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              العودة للمدونة
            </Link>
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="aspect-video relative overflow-hidden rounded-2xl mb-8">
            <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
              <div className="text-center p-12">
                <div className="h-20 w-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-brand-primary to-brand-accent"></div>
                <div className="h-4 bg-white/50 rounded w-32 mx-auto mb-3"></div>
                <div className="h-3 bg-white/30 rounded w-24 mx-auto"></div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{blogPost.category}</Badge>
            <span className="text-sm text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{blogPost.readingTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {blogPost.title}
          </h1>
          
          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(blogPost.publishedAt).toLocaleDateString('ar-SA')}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-16 border-t"
        >
          <h2 className="text-2xl font-bold text-foreground mb-8">مقالات ذات صلة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-full bg-gradient-to-br from-brand-primary/10 to-brand-accent/10"></div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">تقنية</Badge>
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                    عنوان المقال ذو الصلة رقم {i}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    وصف موجز للمقال ذو الصلة يوضح المحتوى والفائدة التي سيحصل عليها القارئ...
                  </p>
                  <Button variant="ghost" className="p-0 h-auto" asChild>
                    <Link href="#" className="group">
                      اقرأ المزيد
                      <ArrowRight className="ml-1 rtl:ml-0 rtl:mr-1 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </article>
      
      <Footer />
    </div>
  );
}