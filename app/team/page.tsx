import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { TeamSection } from '@/src/sections/team/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TDP | Team',
  description: 'Tecnodespegue - IT Solutions and Services React Nextjs FullStack Developer',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Team"
        breadcrumbItems={[
          {
            label: 'Home',
            href: '/',
          },
          {
            label: 'Team',
          },
        ]}
      />
      <TeamSection />
      <Footer />
    </>
  );
}
