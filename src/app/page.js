import React from "react";
import Footer from "@/components/Footer";
import PortfolioGrid from "@/components/PortfolioGrid";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4 pt-4 pb-0 bg-black">
      <header className="w-full flex justify-center py-5">
        <p className="text-2xl text-primary">
          &lt;
          <span className="font-pixel px-1 text-3xl text-white">Abdullah</span>
          &#47;&gt;
        </p>
      </header>
      
      <main className="flex-grow flex items-center justify-center">
        <PortfolioGrid />
      </main>

      <Footer />
    </div>
  );
}
