'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';
import { Metadata } from 'next';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const t = useTranslations();

  const plans = [
    {
      key: 'basic',
      popular: false,
      monthlyPrice: t('pricing.basic.price'),
      yearlyPrice: String(Math.round(Number(t('pricing.basic.price')) * 12 * 0.8)),
    },
    {
      key: 'pro',
      popular: true,
      monthlyPrice: t('pricing.pro.price'),
      yearlyPrice: String(Math.round(Number(t('pricing.pro.price')) * 12 * 0.8)),
    },
    {
      key: 'enterprise',
      popular: false,
      monthlyPrice: null,
      yearlyPrice: null,
    },
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
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('pricing.subtitle')}
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {t('pricing.monthly')}
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span className={`text-sm ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              {t('pricing.yearly')}
            </span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2 rtl:ml-0 rtl:mr-2">
                {t('pricing.save', { percentage: '20' })}
              </Badge>
            )}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className={`relative h-full ${plan.popular ? 'border-brand-primary shadow-lg' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-brand-primary to-brand-accent text-white px-4 py-1">
                      الأكثر شعبية
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">
                    {t(`pricing.${plan.key}.name`)}
                  </CardTitle>
                  <CardDescription className="mb-6">
                    {t(`pricing.${plan.key}.description`)}
                  </CardDescription>
                  
                  <div className="mb-6">
                    {plan.monthlyPrice ? (
                      <>
                        <span className="text-4xl font-bold text-foreground">
                          {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground ml-1 rtl:ml-0 rtl:mr-1">
                          {t(`pricing.${plan.key}.currency`)}
                        </span>
                        <span className="text-sm text-muted-foreground block">
                          {isYearly ? 'سنوياً' : t(`pricing.${plan.key}.period`)}
                        </span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-foreground">
                        {t(`pricing.${plan.key}.price`)}
                      </span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {t.raw(`pricing.${plan.key}.features`).map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href="/register">
                      {t('pricing.cta')}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}