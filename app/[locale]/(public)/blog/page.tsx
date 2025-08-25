'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    slug: 'future-of-digital-business',
    title: 'مستقبل الأعمال الرقمية في العالم العربي',
    excerpt: 'نظرة شاملة على كيفية تطور الأعمال الرقمية والتقنيات الناشئة التي تشكل مستقبل السوق',
    author: 'أحمد المالكي',
    publishedAt: '2024-01-15',
    category: 'تقنية',
    tags: ['ذكاء اصطناعي', 'أعمال رقمية', 'تطوير'],
    image: '/placeholder/blog-1.jpg',
  },
  {
    id: 2,
    slug: 'ai-automation-tools',
    title: 'أدوات الذكاء الاصطناعي للأتمتة',
    excerpt: 'كيف يمكن للشركات الاستفادة من أدوات الذكاء الاصطناعي لتحسين العمليات وزيادة الكفاءة',
    author: 'فاطمة الزهراني',
    publishedAt: '2024-01-12',
    category: 'ذكاء اصطناعي',
    tags: ['أتمتة', 'كفاءة', 'تقنية'],
    image: '/placeholder/blog-2.jpg',
  },
  {
    id: 3,
    slug: 'cybersecurity-best-practices',
    title: 'أفضل ممارسات الأمن السيبراني',
    excerpt: 'دليل شامل لحماية بياناتك وأنظمتك من التهديدات السيبرانية المتزايدة',
    author: 'محمد العتيبي',
    publishedAt: '2024-01-10',
    category: 'أمان',
    tags: ['أمان', 'حماية', 'بيانات'],
    image: '/placeholder/blog-3.jpg',
  },
  {
    id: 4,
    slug: 'cloud-migration-strategy',
    title: 'استراتيجية الانتقال للحوسبة السحابية',
    excerpt: 'خطة مفصلة للانتقال الآمن والفعال من البنية التحتية التقليدية إلى الحوسبة السحابية',
    author: 'سارة الحربي',
    publishedAt: '2024-01-08',
    category: 'حوسبة سحابية',
    tags: ['سحابة', 'هجرة', 'بنية تحتية'],
    image: '/placeholder/blog-4.jpg',
  },
];

const categories = ['الكل', 'تقنية', 'ذكاء اصطناعي', 'أمان', 'حوسبة سحابية'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const t = useTranslations();

  const filteredPosts = selectedCategory === 'الكل' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <div className="w-full h-full bg-gradient-to-br from-brand-primary/20 to-brand-accent/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="h-12 w-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent"></div>
                      <div className="h-3 bg-white/50 rounded w-24 mx-auto mb-2"></div>
                      <div className="h-2 bg-white/30 rounded w-16 mx-auto"></div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-brand-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('ar-SA')}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" className="group p-0 h-auto font-normal" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      {t('blog.readMore')}
                      <ArrowRight className="ml-1 rtl:ml-0 rtl:mr-1 h-4 w-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex gap-2">
            <Button variant="outline" disabled>السابق</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">التالي</Button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}