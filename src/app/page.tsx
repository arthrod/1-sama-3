"use client";

import { Navigation, Footer, HeroSlideshow, Newsletter, WineCard } from "@/components";
import type { WineProduct } from "@/types";

const sampleProduct: WineProduct = {
  id: "1",
  name: "Sá Dona",
  year: "2025",
  type: "Vinho Fino Tinto Seco",
  region: "Ritápolis - MG",
  price: 189.0,
  image:
    "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=400",
  tags: ["Inverno", "Syrah", "Exclusive"],
};

export default function Home() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
      <Navigation />

      <main className="pt-16 min-h-screen">
        <div className="animate-fade-in pb-24">
          {/* Full Width Hero Section */}
          <HeroSlideshow />

          <div className="max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Product Column */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="w-8 h-px bg-graphite"></span>
                <span className="font-serif italic text-graphite">
                  A Garrafa
                </span>
              </div>
              <WineCard product={sampleProduct} />
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-16 flex flex-col justify-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-px bg-graphite"></span>
                  <span className="font-serif italic text-graphite">
                    A Comunidade
                  </span>
                </div>
                <Newsletter />
              </div>

              {/* Brand Statement */}
              <div className="bg-paper-200 dark:bg-ink p-8 md:p-12 border border-dotted border-graphite">
                <h3 className="font-serif text-2xl text-ink dark:text-paper mb-4">
                  Colheita de Inverno
                </h3>
                <p className="font-serif text-lg leading-relaxed text-ink-faint dark:text-graphite-lighter">
                  Nossa Syrah reflete o terroir único de Ritápolis. A colheita
                  de inverno concentra os açúcares e acentua os taninos,
                  resultando em um vinho de corpo excepcional e longevidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
