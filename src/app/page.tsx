import HeaderNavigation from '@/components/sections/header-navigation';
import HeroSection from '@/components/sections/hero-section';
import StatsSection from '@/components/sections/stats-section';
import ServicesOverview from '@/components/sections/services-overview';
import WhyChooseUsSection from '@/components/sections/why-choose-us';
import ExpertiseDetails from '@/components/sections/expertise-details';
import TechnologyStack from '@/components/sections/technology-stack';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';

import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <WhyChooseUsSection />
        <ExpertiseDetails />
        <TechnologyStack />
        <PortfolioShowcase />

        <TestimonialsSection />
        {/* <ContactSection /> */}

      </main>
      <Footer />
    </div>
  );
}