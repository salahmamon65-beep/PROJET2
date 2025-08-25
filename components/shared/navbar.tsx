'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations();
  const isRTL = locale === 'ar';

  const navigation = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.pricing'), href: '/pricing' },
    { name: t('navigation.blog'), href: '/blog' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const switchLocale = (newLocale: string) => {
    const segments = window.location.pathname.split('/');
    segments[1] = newLocale;
    window.location.href = segments.join('/');
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <motion.div
              className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="text-xl font-bold text-foreground">TechPro</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
          <nav className="flex items-center space-x-6 rtl:space-x-reverse">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop Auth & Language */}
        <div className="hidden md:flex md:items-center md:space-x-4 rtl:md:space-x-reverse">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
                <Globe className="h-4 w-4" />
                <span className="sr-only">{t('common.language')}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
              <DropdownMenuItem onClick={() => switchLocale('ar')}>
                {t('common.arabic')}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => switchLocale('fr')}>
                {t('common.french')}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">{t('navigation.login')}</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/register">{t('navigation.register')}</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="px-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t('common.menu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? 'left' : 'right'}>
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <hr className="my-4" />
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" onClick={() => switchLocale('ar')}>
                    {t('common.arabic')}
                  </Button>
                  <Button variant="ghost" onClick={() => switchLocale('fr')}>
                    {t('common.french')}
                  </Button>
                </div>
                <hr className="my-4" />
                <Button variant="outline" asChild>
                  <Link href="/login">{t('navigation.login')}</Link>
                </Button>
                <Button asChild>
                  <Link href="/register">{t('navigation.register')}</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}