'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations();

  const quickLinks = [
    { name: t('navigation.home'), href: '/' },
    { name: t('navigation.pricing'), href: '/pricing' },
    { name: t('navigation.blog'), href: '/blog' },
    { name: t('navigation.contact'), href: '/contact' },
  ];

  const supportLinks = [
    { name: t('footer.help'), href: '/help' },
    { name: t('footer.privacy'), href: '/privacy' },
    { name: t('footer.terms'), href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent" />
              <span className="text-xl font-bold text-foreground">TechPro</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-brand-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={item.name}
                >
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {t('footer.support')}
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-brand-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              {t('navigation.contact')}
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>{t('contact.info.address')}</p>
              <p>{t('contact.info.phone')}</p>
              <p>{t('contact.info.email')}</p>
            </div>
          </div>
        </div>

        <hr className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TechPro. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
}