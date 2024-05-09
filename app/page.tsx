// En cualquier otro archivo .tsx
import { Footer, MainHeader, AboutSection, ContactSection, CtaSection, Hero, ProjectSection, PricingSection, ServiceSection, StatisticsSection, TeamSection, TestimonialSection} from '@/app/index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TDP | Home',
  description: 'Tecnodespegue - IT Solutions and Services Web Design',
};

export default function Page() {
  return (
    <>
      <MainHeader version="1" />
      <Hero />
      <ServiceSection className="!pb-0" {...serviceSectionData} />
      <AboutSection />
      <CtaSection />
      <ProjectSection {...projectSectionData} />
      <StatisticsSection />
      <TestimonialSection />
      <PricingSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
