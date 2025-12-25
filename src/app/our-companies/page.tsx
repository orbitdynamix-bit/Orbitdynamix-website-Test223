import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function OurCompaniesPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Our <span className="text-primary">Companies</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the family of companies under our brand.
        </p>
      </main>
      <Footer />
    </div>
  );
}