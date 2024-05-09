import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import FAQSection from '@/src/sections/faq';
import { HeroSection } from '@/src/sections/hero/v3';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TDP | Faq',
  description: 'Tecnodespegue - IT Solutions and Services React Nextjs FullStack Developer',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Faq"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Faq',
          },
        ]}
      />
      <FAQSection />
      <Footer />
    </>
  );
}
