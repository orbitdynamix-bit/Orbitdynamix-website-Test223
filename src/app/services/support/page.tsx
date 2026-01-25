import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-primary">Support</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Reliable and responsive support to ensure your business runs smoothly.
        </p>
      </main>
      <Footer />
    </div>
  );
}