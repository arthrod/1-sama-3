"use client";

import { useEffect, useState } from "react";

const SLIDES = [
  {
    id: 1,
    url: "/images/slideshow/cachos-uvas-sol.jpeg",
    alt: "Cachos de Uvas ao Sol",
  },
  {
    id: 2,
    url: "/images/slideshow/colheita-trabalhadores-aereo.jpeg",
    alt: "Colheita no Vinhedo - Vista Aérea",
  },
  {
    id: 3,
    url: "/images/slideshow/uvas-verdes-capela.jpeg",
    alt: "Uvas Verdes com Capela ao Fundo",
  },
  {
    id: 4,
    url: "/images/slideshow/vinhedo-por-do-sol-redes.jpeg",
    alt: "Vinhedo ao Pôr do Sol",
  },
  {
    id: 5,
    url: "/images/slideshow/videiras-outono-montanhas.jpeg",
    alt: "Videiras de Outono nas Montanhas",
  },
  {
    id: 6,
    url: "/images/slideshow/vinhedo-jovem-entardecer.jpeg",
    alt: "Vinhedo Jovem ao Entardecer",
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[85vh] bg-paper dark:bg-paper-dark p-4 md:p-8 flex flex-col justify-center">
      {/* Decorative Outer Frame */}
      <div className="absolute inset-4 md:inset-8 border border-graphite-lighter opacity-50 pointer-events-none z-20"></div>

      {/* Main Content Area with Dotted Border */}
      <div className="relative w-full h-full overflow-hidden border-2 border-dotted border-graphite bg-paper-200 shadow-paper-lift">
        {/* Slides */}
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentSlide ? "opacity-100" : "opacity-0"}
            `}
          >
            <div className="absolute inset-0 bg-ink/10 mix-blend-multiply z-10 pointer-events-none"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-full object-cover filter sepia-[0.5] grayscale-[0.3] contrast-[1.1]"
            />
          </div>
        ))}

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-paper-dark/60 via-transparent to-transparent">
          <div className="bg-paper/90 dark:bg-ink/90 backdrop-blur-sm p-8 md:p-12 border-y-4 border-double border-graphite max-w-2xl shadow-2xl transform transition-all duration-1000 translate-y-0">
            <span className="block font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-merlot mb-4">
              Ritápolis • Minas Gerais
            </span>
            <h1 className="font-script text-6xl md:text-8xl text-ink dark:text-paper mb-2">
              Sá Marias
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-graphite-dark dark:text-graphite-lighter">
              Colheita de Inverno
            </p>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-4">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300 border border-paper
                ${index === currentSlide ? "bg-paper w-8" : "bg-transparent"}
              `}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
