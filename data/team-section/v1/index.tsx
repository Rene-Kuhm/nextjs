import { TeamSectionProps } from '@/src/sections/team/v1';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'our active members',
    title: 'Transforming Challenges into Seamless Solutions',
  },
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-1.png',
        alt: 'Brooklyn Simmons',
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
          href: 'https://www.instagram.com/tecnodespegue/',
          icon: <FaInstagram />,
        },
      ],
      name: 'René Kuhm',
      about: 'FullStack Developer , Creador de Tecnodespegue',
    },
  ],
};
