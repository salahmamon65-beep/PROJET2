'use client';

import { useSession } from 'next-auth/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Users, 
  DollarSign, 
  TrendingUp,
  Clock,
  CheckCircle,
  Truck,
  AlertCircle
} from 'lucide-react';

const stats = [
  {
    name: 'Total Orders',
    value: '1,234',
    change: '+12%',
    changeType: 'positive',
    icon: ShoppingCart,
  },
  {
    name: 'Revenue',
    value: '45,678 MAD',
    change: '+8%',
    changeType: 'positive',
    icon: DollarSign,
  },
  {
    name: 'Customers',
    value: '892',
    change: '+5%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Growth',
    value: '23%',
    change: '+2%',
    changeType: 'positive',
    icon: TrendingUp,
  },
];

const recentOrders = [
  {
    id: '1',
    customer: 'Ahmed Benali',
    status: 'pending',
    total: '198 MAD',
    time: '5 min ago',
  },
  {
    id: '2',
    customer: 'Fatima Zahra',
    status: 'preparing',
    total: '132 MAD',
    time: '12 min ago',
  },
  {
    id: '3',
    customer: 'Youssef Alami',
    status: 'ready',
    total: '89 MAD',
    time: '18 min ago',
  },
  {
    id: '4',
    customer: 'Khadija Mansouri',
    status: 'on_the_way',
    total: '245 MAD',
    time: '25 min ago',
  },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'pending':
      return <Clock className="h-4 w-4" />;
    case 'preparing':
      return <AlertCircle className="h-4 w-4" />;
    case 'ready':
      return <CheckCircle className="h-4 w-4" />;
    case 'on_the_way':
      return <Truck className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'pending':
      return 'bg-yellow-100 text-yellow-800';
    case 'preparing':
      return 'bg-blue-100 text-blue-800';
    case 'ready':
      return 'bg-green-100 text-green-800';
    case 'on_the_way':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div className="space-y-6">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {session?.user?.name || 'User'}!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your restaurant today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-600">
                <span className={`${
                  stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>
              Latest orders from your customers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent flex items-center justify-center text-white text-sm font-semibold">
                      {order.customer.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {order.customer}
                      </p>
                      <p className="text-xs text-gray-500">{order.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Badge className={`${getStatusColor(order.status)} flex items-center gap-1`}>
                      {getStatusIcon(order.status)}
                      {order.status.replace('_', ' ')}
                    </Badge>
                    <span className="text-sm font-medium text-gray-900">
                      {order.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <ShoppingCart className="h-8 w-8 text-brand-primary mb-2" />
                <span className="text-sm font-medium">New Order</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Users className="h-8 w-8 text-brand-primary mb-2" />
                <span className="text-sm font-medium">Add Client</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <TrendingUp className="h-8 w-8 text-brand-primary mb-2" />
                <span className="text-sm font-medium">View Analytics</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <DollarSign className="h-8 w-8 text-brand-primary mb-2" />
                <span className="text-sm font-medium">Revenue Report</span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}