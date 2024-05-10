import Head from 'next/head';
import { Metadata } from 'next';
import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { Hero } from '@/src/sections/hero/v1';
import { AboutSection } from '@/src/sections/about/v1';
import { ContactSection } from '@/src/sections/contact/v1';
import { CtaSection } from '@/src/sections/cta/v1';
import { ProjectSection } from '@/src/sections/project/v1';
import { PricingSection } from '@/src/sections/pricing/version-1';
import { ServiceSection } from '@/src/sections/service/v1';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v2';
import { TestimonialSection } from '@/src/sections/testimonial/v1';
import { projectSectionData } from '@/data/project-section/v1/home-page';
import { serviceSectionData } from '@/data/service-section/v1/home-page';


export const metadata: Metadata = {
  title: 'TDP | Home',
  description: 'Tecnodespegue - IT Solutions and Services Web Design',
};

export default function Page() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
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

