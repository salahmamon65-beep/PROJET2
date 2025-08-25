'use client';

import { Fragment } from 'react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Dialog, Transition } from '@headlessui/react';
import { 
  X, 
  Home, 
  Settings, 
  Package, 
  ShoppingCart, 
  Users, 
  Tag, 
  Megaphone,
  BarChart3,
  MapPin
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserRole } from '@prisma/client';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dash', icon: Home, roles: ['ADMIN', 'CASHIER', 'COURIER'] },
  { name: 'Orders', href: '/dash/orders', icon: ShoppingCart, roles: ['ADMIN', 'CASHIER', 'COURIER'] },
  { name: 'Menu', href: '/dash/menu', icon: Package, roles: ['ADMIN', 'CASHIER'] },
  { name: 'Clients', href: '/dash/clients', icon: Users, roles: ['ADMIN', 'CASHIER'] },
  { name: 'Promotions', href: '/dash/promotions', icon: Tag, roles: ['ADMIN', 'CASHIER'] },
  { name: 'Campaigns', href: '/dash/campaigns', icon: Megaphone, roles: ['ADMIN'] },
  { name: 'Analytics', href: '/dash/analytics', icon: BarChart3, roles: ['ADMIN'] },
  { name: 'Settings', href: '/dash/settings', icon: Settings, roles: ['ADMIN'] },
];

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const { data: session } = useSession();
  const locale = useLocale();
  const pathname = usePathname();
  const isRTL = locale === 'ar';

  const userRole = session?.user?.role || UserRole.CUSTOMER;
  const filteredNavigation = navigation.filter(item => 
    item.roles.includes(userRole)
  );

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b">
        <Link href="/dash" className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-accent" />
          <span className="text-xl font-bold text-foreground">TechPro</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {filteredNavigation.map((item) => {
            const isActive = pathname === item.href || 
              (item.href !== '/dash' && pathname.startsWith(item.href));
            
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-brand-primary text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  )}
                  onClick={() => setOpen(false)}
                >
                  <item.icon
                    className={cn(
                      'h-5 w-5 shrink-0',
                      isRTL ? 'ml-3' : 'mr-3',
                      isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-500'
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User info */}
      <div className="border-t p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white text-sm font-semibold">
            {session?.user?.name?.charAt(0) || 'U'}
          </div>
          <div className={cn('flex-1', isRTL ? 'mr-3' : 'ml-3')}>
            <p className="text-sm font-medium text-gray-900">
              {session?.user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 capitalize">
              {userRole.toLowerCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile sidebar */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom={isRTL ? "translate-x-full" : "-translate-x-full"}
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo={isRTL ? "translate-x-full" : "-translate-x-full"}
            >
              <Dialog.Panel className={cn(
                "relative flex w-full max-w-xs flex-1 flex-col bg-white",
                isRTL ? "mr-16" : "ml-16"
              )}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className={cn(
                    "absolute top-0 flex w-16 justify-center pt-5",
                    isRTL ? "-left-16" : "-right-16"
                  )}>
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <X className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <SidebarContent />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop sidebar */}
      <div className={cn(
        "hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col bg-white border-r",
        isRTL ? "lg:right-0" : "lg:left-0"
      )}>
        <SidebarContent />
      </div>
    </>
  );
}