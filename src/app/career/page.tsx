"use client";

import React from "react";
import HeaderNavigation from '@/components/sections/header-navigation';
import Footer from '@/components/sections/footer';

const App = () => {
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

        <div className="text-center mb-16 mt-16">
          <img
            src="/images/chill_guy.png"
            className="mx-auto h-80 w-auto"
            alt=""
          />
          <p className="text-center text-lg text-muted-foreground mb-8">
            Tujhe kya job dunga..main khud unemployed hoon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function CareerPage() {
  return <App />;
}