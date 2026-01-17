import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import TestimonialsSection from '@/components/sections/testimonials-section';
import ContactSection from '@/components/sections/contact-section';

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="pt-32">
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}