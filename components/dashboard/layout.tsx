'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import Sidebar from './sidebar';
import Topbar from './topbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: session } = useSession();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div className={`min-h-screen bg-gray-50 ${isRTL ? 'rtl' : 'ltr'}`}>
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className={`${isRTL ? 'mr-0 lg:mr-64' : 'ml-0 lg:ml-64'} transition-all duration-300`}>
        <Topbar setSidebarOpen={setSidebarOpen} />
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}