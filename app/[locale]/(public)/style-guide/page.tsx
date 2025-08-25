'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, XCircle, Info, Heart } from 'lucide-react';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

export default function StyleGuidePage() {
  const colors = [
    { name: 'Primary', value: '#1e40af', class: 'bg-brand-primary' },
    { name: 'Primary Light', value: '#3b82f6', class: 'bg-brand-primary-light' },
    { name: 'Primary Dark', value: '#1e3a8a', class: 'bg-brand-primary-dark' },
    { name: 'Accent', value: '#f59e0b', class: 'bg-brand-accent' },
    { name: 'Accent Light', value: '#fbbf24', class: 'bg-brand-accent-light' },
    { name: 'Accent Dark', value: '#d97706', class: 'bg-brand-accent-dark' },
  ];

  const neutrals = [
    { name: 'Neutral 50', value: '#fafafa', class: 'bg-brand-neutral-50' },
    { name: 'Neutral 100', value: '#f5f5f5', class: 'bg-brand-neutral-100' },
    { name: 'Neutral 200', value: '#e5e5e5', class: 'bg-brand-neutral-200' },
    { name: 'Neutral 300', value: '#d4d4d4', class: 'bg-brand-neutral-300' },
    { name: 'Neutral 400', value: '#a3a3a3', class: 'bg-brand-neutral-400' },
    { name: 'Neutral 500', value: '#737373', class: 'bg-brand-neutral-500' },
    { name: 'Neutral 600', value: '#525252', class: 'bg-brand-neutral-600' },
    { name: 'Neutral 700', value: '#404040', class: 'bg-brand-neutral-700' },
    { name: 'Neutral 800', value: '#262626', class: 'bg-brand-neutral-800' },
    { name: 'Neutral 900', value: '#171717', class: 'bg-brand-neutral-900' },
  ];

  const animations = [
    { name: 'Fade In', class: 'animate-fade-in' },
    { name: 'Slide In', class: 'animate-slide-in' },
    { name: 'Bounce Subtle', class: 'animate-bounce-subtle' },
  ];

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
            دليل الهوية البصرية
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            نظام التصميم الشامل لمنصة TechPro - الألوان والخطوط والمكونات والأنميشن
          </p>
        </motion.div>

        {/* Colors Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">الألوان الأساسية</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {colors.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className={`h-20 w-full rounded-lg ${color.class} mb-4`}></div>
                    <h3 className="font-semibold text-foreground">{color.name}</h3>
                    <p className="text-sm text-muted-foreground">{color.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h3 className="text-2xl font-semibold text-foreground mb-6">الألوان المحايدة</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {neutrals.map((color, index) => (
              <motion.div
                key={color.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                className="text-center"
              >
                <div className={`h-16 w-full rounded-lg ${color.class} mb-2 border`}></div>
                <p className="text-xs font-medium">{color.name}</p>
                <p className="text-xs text-muted-foreground">{color.value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">الخطوط</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Playfair Display - العناوين</CardTitle>
                <CardDescription>يستخدم للعناوين الرئيسية والثانوية</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-4xl font-heading font-bold">العنوان الرئيسي</p>
                  <p className="text-3xl font-heading font-semibold">العنوان الثانوي</p>
                  <p className="text-2xl font-heading">العنوان الفرعي</p>
                  <p className="text-xl font-heading">النص التمهيدي</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="font-body">Inter - النص الأساسي</CardTitle>
                <CardDescription>يستخدم لنص المحتوى والوصف</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-lg font-body font-semibold">نص كبير وسميك</p>
                  <p className="text-base font-body">النص الأساسي للمحتوى</p>
                  <p className="text-sm font-body">نص صغير للتفاصيل</p>
                  <p className="text-xs font-body text-muted-foreground">نص مصغر للمعلومات</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">الأزرار</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>الأزرار الأساسية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full">زر كبير</Button>
                <Button className="w-full">زر متوسط</Button>
                <Button size="sm" className="w-full">زر صغير</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>الأزرار الثانوية</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="secondary" size="lg" className="w-full">زر كبير</Button>
                <Button variant="secondary" className="w-full">زر متوسط</Button>
                <Button variant="secondary" size="sm" className="w-full">زر صغير</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>أزرار الحواف</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" size="lg" className="w-full">زر كبير</Button>
                <Button variant="outline" className="w-full">زر متوسط</Button>
                <Button variant="outline" size="sm" className="w-full">زر صغير</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>الأزرار الشفافة</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="ghost" size="lg" className="w-full">زر كبير</Button>
                <Button variant="ghost" className="w-full">زر متوسط</Button>
                <Button variant="ghost" size="sm" className="w-full">زر صغير</Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">عناصر النماذج</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>حقول الإدخال</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="النص العادي" />
                <Input placeholder="البريد الإلكتروني" type="email" />
                <Input placeholder="كلمة المرور" type="password" />
                <Input placeholder="رقم الهاتف" type="tel" />
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>الشارات والملصقات</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge>افتراضي</Badge>
                  <Badge variant="secondary">ثانوي</Badge>
                  <Badge variant="outline">محدد</Badge>
                  <Badge variant="destructive">تحذير</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">التنبيهات</h2>
          <div className="space-y-4">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>معلومات</AlertTitle>
              <AlertDescription>
                هذا تنبيه معلوماتي لعرض معلومات مهمة للمستخدم.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">نجح</AlertTitle>
              <AlertDescription className="text-green-700">
                تم تنفيذ العملية بنجاح.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-yellow-200 bg-yellow-50">
              <AlertCircle className="h-4 w-4 text-yellow-600" />
              <AlertTitle className="text-yellow-800">تحذير</AlertTitle>
              <AlertDescription className="text-yellow-700">
                يرجى الانتباه إلى هذا التحذير المهم.
              </AlertDescription>
            </Alert>
            
            <Alert className="border-red-200 bg-red-50">
              <XCircle className="h-4 w-4 text-red-600" />
              <AlertTitle className="text-red-800">خطأ</AlertTitle>
              <AlertDescription className="text-red-700">
                حدث خطأ في النظام، يرجى المحاولة مرة أخرى.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Animations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">الحركات والتأثيرات</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {animations.map((animation, index) => (
              <Card key={animation.name}>
                <CardHeader>
                  <CardTitle>{animation.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center ${animation.class}`}>
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Cards Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8">البطاقات</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <CardTitle>بطاقة أساسية</CardTitle>
                <CardDescription>وصف البطاقة الأساسية</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  محتوى البطاقة مع تأثير الظل عند التمرير.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-brand-primary">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-accent-light flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <CardTitle>بطاقة مميزة</CardTitle>
                <CardDescription>بطاقة بحدود ملونة</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  بطاقة مميزة بحدود ملونة لجذب الانتباه.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-brand-primary to-brand-accent text-white">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <Info className="h-6 w-6" />
                </div>
                <CardTitle className="text-white">بطاقة متدرجة</CardTitle>
                <CardDescription className="text-white/80">بطاقة بخلفية متدرجة</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">
                  بطاقة بخلفية متدرجة ونص أبيض.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
}