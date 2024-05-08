import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '(+54) 2334 409838',
    mail: 'tecnodespegue@outlook.com',
    address: '6380 Eduardo Castex. (LP)',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Consigue una cotización',
    openNewTab: false,
  },
  menuItems: menuItemsProps,
};
