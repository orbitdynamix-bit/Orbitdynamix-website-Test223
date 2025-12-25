import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-primary">Career</span> Opportunities
        </h1>
        <p className="text-lg text-muted-foreground">
          Join our team and grow with Onqanet Technologies.
        </p>
      </main>
      <Footer />
    </div>
  );
}