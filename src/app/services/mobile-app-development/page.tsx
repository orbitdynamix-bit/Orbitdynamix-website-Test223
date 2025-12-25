import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Mobile App <span className="text-primary">Development</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Innovative solutions for mobile app development tailored to your needs.
        </p>
      </main>
      <Footer />
    </div>
  );
}