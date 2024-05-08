import { TeamSectionProps } from '@/src/sections/team/v2';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'Equipo',
    title:
      'Equipo innovador siempre actualizado para brindar un servicio de excelencia',
  },
  description:
    'Con el compromiso de impulsar la evolución tecnológica, nuestras soluciones y servicios de TI son la piedra angular de su progresión digital. Trascendemos las fronteras, permitiendo a las empresas no sólo adaptarse sino también prosperar en entornos dinámicos. ',
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/rene.png',
        alt: 'René Kuhm',
      },
      socials: [
        {
          href: 'https://www.facebook.com/TecnoDespegueLive',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/REPARO22',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/in/ren%C3%A9-kuhm-1aa88818a/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.instagram.com/tecnodespegue/',
          icon: <FaInstagram />,
        },
      ],
      name: 'René Kuhm',
      about: 'FullStack Developer',
    },
  ],
};
