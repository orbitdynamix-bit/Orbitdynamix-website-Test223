import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function FunAtWorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Fun At <span className="text-primary">Work</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Discover the vibrant culture at Onqanet Technologies.
        </p>
      </main>
      <Footer />
    </div>
  );
}