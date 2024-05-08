import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Service',
    href: '/services',
  },
  {
    label: 'Blog',
    href:'https://tecno-blog.com'
  },
  {
    title: 'Pages',
    subMenuItems: [
      {
        label: 'Testimonial',
        href: '/testimonial',
      },
      {
        label: 'Team',
        href: '/team',
      },
      {
        label: 'Pricing',
        href: '/pricing',
      },
      {
        label: 'FAQ',
        href: '/faq',
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];
