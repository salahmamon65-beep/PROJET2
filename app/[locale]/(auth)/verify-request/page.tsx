'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/shared/navbar';
import Footer from '@/components/shared/footer';

export default function VerifyRequestPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-[calc(100vh-200px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <CardTitle className="text-2xl">Check your email</CardTitle>
              <CardDescription>
                A sign in link has been sent to your email address
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                Click the link in the email to sign in. The link will expire in 24 hours.
              </p>
              <Button variant="outline" asChild>
                <Link href="/login">Back to login</Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}