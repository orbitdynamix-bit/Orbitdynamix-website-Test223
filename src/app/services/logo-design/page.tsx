import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function LogoDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Logo <span className="text-primary">Design</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Make a lasting impression with a unique and memorable logo design.
        </p>
      </main>
      <Footer />
    </div>
  );
}