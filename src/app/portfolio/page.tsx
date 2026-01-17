import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';
import PortfolioShowcase from '@/components/sections/portfolio-showcase';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <HeaderNavigation />
      <main className="pt-32">
        <PortfolioShowcase />
      </main>
      <Footer />
    </div>
  );
}