'use client';

import { Fragment } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Menu, Bell, Search, Globe, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';

interface TopbarProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Topbar({ setSidebarOpen }: TopbarProps) {
  const { data: session } = useSession();
  const locale = useLocale();
  const pathname = usePathname();
  const isRTL = locale === 'ar';

  // Generate breadcrumbs from pathname
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs = pathSegments.slice(2).map((segment, index) => ({
    name: segment.charAt(0).toUpperCase() + segment.slice(1),
    href: '/' + pathSegments.slice(0, index + 3).join('/'),
    current: index === pathSegments.length - 3,
  }));

  const switchLocale = (newLocale: string) => {
    const segments = window.location.pathname.split('/');
    segments[1] = newLocale;
    window.location.href = segments.join('/');
  };

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {/* Separator */}
      <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

      {/* Breadcrumbs */}
      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="flex items-center">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 rtl:space-x-reverse">
              <li>
                <div className="text-gray-400">
                  <span className="text-sm font-medium text-gray-500 hover:text-gray-700">
                    Dashboard
                  </span>
                </div>
              </li>
              {breadcrumbs.map((item) => (
                <li key={item.name}>
                  <div className="flex items-center">
                    <span className="text-gray-300 mx-2">/</span>
                    <span
                      className={`text-sm font-medium ${
                        item.current
                          ? 'text-gray-900'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>

        {/* Search */}
        <div className="flex flex-1 justify-end">
          <div className="w-full max-w-lg lg:max-w-xs">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className={`pointer-events-none absolute inset-y-0 ${isRTL ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center`}>
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <Input
                id="search"
                name="search"
                className={`block w-full rounded-md border-0 py-1.5 ${isRTL ? 'pr-10 pl-3' : 'pl-10 pr-3'} text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-primary sm:text-sm sm:leading-6`}
                placeholder="Search..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-4 lg:gap-x-6">
        {/* Notifications */}
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500 relative"
        >
          <span className="sr-only">View notifications</span>
          <Bell className="h-6 w-6" aria-hidden="true" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
            3
          </Badge>
        </button>

        {/* Separator */}
        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

        {/* Language switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-2">
              <Globe className="h-4 w-4" />
              <span className="sr-only">Language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align={isRTL ? 'start' : 'end'}>
            <DropdownMenuItem onClick={() => switchLocale('ar')}>
              العربية
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => switchLocale('fr')}>
              Français
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Profile dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white text-sm font-semibold">
                {session?.user?.name?.charAt(0) || 'U'}
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align={isRTL ? 'start' : 'end'} forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {session?.user?.name || 'User'}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {session?.user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => signOut()}>
              <LogOut className="mr-2 rtl:mr-0 rtl:ml-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}