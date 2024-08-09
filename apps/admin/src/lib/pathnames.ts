import type { NavItemProps } from '@components/nav/side-nav';

export const NavMenu: NavItemProps[] = [
  { path: '/', name: 'Dashboard', iconKey: 'dashboard' },
  { path: '/product-list', name: 'Products', iconKey: 'products' },
  { path: '/category-list', name: 'Categories', iconKey: 'categories' },
  { path: '/brand-list', name: 'Brands', iconKey: 'brands' },
  { path: '/order-list', name: 'Orders', iconKey: 'orders' },
  { path: '/customer-list', name: 'Customers', iconKey: 'customers' },
  { separator: 'separator-before-personalization' }, // Unique key for the separator
  {
    path: '/personalization',
    name: 'Personalization',
    iconKey: 'personalization',
  },
  { path: '/setting', name: 'Settings', iconKey: 'settings' },
];
