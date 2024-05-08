import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Acción de Precios',
    title: 'Innovando para un mejor mañana',
  },
  cards: [
    {
      title: 'Plan Básico',
      description:
        'Ideal para empezar, con las funciones básicas que necesitas para lanzar tu proyecto.',
      features: [
        'Asesoramiento personalizado',
        'Diseño web básico',
        'Hosting y dominio incluidos',
        'Soporte técnico por email',
      ],
      price: '$49',
      duration: '/mes',
      isPopular: false,
      button: {
        href: '/',
        label: 'Seleccionar Plan',
      },
    },
    {
      title: 'Plan Estándar',
      description:
        'Nuestro plan más popular, con todo lo que necesitas para hacer crecer tu negocio en línea.',
      features: [
        'Asesoramiento personalizado',
        'Diseño web avanzado',
        'Hosting y dominio incluidos',
        'Soporte técnico prioritario',
        'Integración con redes sociales',
      ],
      price: '$79',
      duration: '/mes',
      isPopular: true,
      button: {
        href: '/',
        label: 'Seleccionar Plan',
      },
    },
    {
      title: 'Plan Premium',
      description:
        'Para empresas que buscan destacar en línea, con funciones avanzadas y soporte premium.',
      features: [
        'Asesoramiento personalizado',
        'Diseño web premium',
        'Hosting y dominio incluidos',
        'Soporte técnico 24/7',
        'Analítica web avanzada',
      ],
      price: '$99',
      duration: '/mes',
      isPopular: false,
      button: {
        href: '/',
        label: 'Seleccionar Plan',
      },
    },
  ],
};
