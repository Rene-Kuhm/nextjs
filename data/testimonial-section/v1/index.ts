import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Testimonios de Clientes',
    title: 'Tu Socio de IT para un Futuro Dinámico',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.jpg',
          alt: 'Jane Cooper',
        },
        name: 'Carlos Rodríguez',
        about: 'Experto en Seguridad Informática',
      },
      speech:
        'La seguridad de la información es fundamental en el mundo digital actual. Mi objetivo es garantizar que nuestros sistemas estén protegidos contra cualquier amenaza, proporcionando tranquilidad a nuestros clientes.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.jpg',
          alt: 'Robert Fox',
        },
        name: 'Alejandro Martínez',
        about: 'Consultor de Transformación Digital',
      },
      speech:
        'La transformación digital es un proceso continuo que impulsa la evolución de las organizaciones. Mi objetivo es guiar a nuestros clientes en este viaje, ayudándoles a alcanzar nuevos niveles de eficiencia y competitividad.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-11.jpeg',
          alt: 'April Cabrera',
        },
        name: 'María Fernández',
        about: 'Especialista en Desarrollo Web',
      },
      speech:
        'Creo firmemente en la importancia de la innovación y la calidad en cada proyecto que emprendemos. Estoy comprometida en ofrecer soluciones creativas y eficientes para nuestros clientes.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-12.jpeg',
          alt: 'Kevin Martin',
        },
        name: 'Pablo Navarro',
        about: 'Analista de Datos',
      },
      speech:
        'Los datos son el activo más valioso en la era digital. Mi misión es analizar y interpretar datos para extraer información valiosa que guíe las decisiones estratégicas de nuestros clientes, impulsando su éxito.',
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-13.jpeg',
          alt: 'Jada Christian',
        },
        name: 'Juan García',
        about: 'Desarrollador Full Stack',
      },
      speech:
        'La tecnología avanza rápidamente y es emocionante ser parte de este progreso. Me dedico a crear soluciones tecnológicas sólidas y versátiles que satisfagan las necesidades de nuestros clientes en este entorno digital cambiante.',
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-14.jpeg',
          alt: 'Kevin Deen',
        },
        name: 'Adrian Morales',
        about: 'Especialista en Experiencia del Cliente',
      },
      speech:
        'La experiencia del cliente es el corazón de cualquier negocio exitoso. Mi objetivo es garantizar que cada interacción que tengan nuestros clientes con nuestra marca sea memorable y satisfactoria.',
      rating: 5,
    },
  ],
};
