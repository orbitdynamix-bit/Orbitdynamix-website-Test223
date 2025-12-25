import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeaderNavigation />
      <main className="container py-32">
        <h1 className="text-5xl font-bold mb-6">
          Graphic <span className="text-primary">Design</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Transform concepts into eye-catching images with our proficiency in graphic design.
        </p>
      </main>
      <Footer />
    </div>
  );
}