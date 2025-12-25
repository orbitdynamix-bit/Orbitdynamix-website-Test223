import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Digital <span className="text-primary">Marketing</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Boost your online presence with our comprehensive digital marketing services including SEO, PPC, Social Media Marketing, and more.
        </p>
      </main>
      <Footer />
    </div>
  );
}