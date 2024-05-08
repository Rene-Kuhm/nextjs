import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'Transformamos ideas en soluciones digitales innovadoras. Somos tu socio en el mundo digital, especializados en desarrollo web, aplicaciones móviles y servicios de IT. ¡Construyamos juntos el futuro digital!',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/TecnoDespegueLive',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/REPARO22',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/tecnodespegue/',
      },
    ],
  },
  columnOne: {
    title: 'Enlaces Utiles',
    links: [
      {
        label: 'Home',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'About',
        href: '/about',
        openNewTab: false,
      },
      {
        label: 'Service',
        href: '/services',
        openNewTab: false,
      },
      {
        label: 'Blog',
        href: 'https:/tecno-blog.com',
        openNewTab: false,
      },
      {
        label: 'Contact',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'DIRECCIÓN',
    location: '6380 Eduardo Castex , (LP) , Plan 5000 ',
    mails: ['tecnodespegue@outlook.com'],
    phoneNumbers: ['(+54) 2334-409838 '],
  },
  footerBottom: {
    copyrightText: '© Tecnodespegue  2024 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/contact',
        openNewTab: false,
      },
    ],
  },
};
