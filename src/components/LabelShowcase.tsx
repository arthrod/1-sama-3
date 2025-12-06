"use client";

import Image from "next/image";

export function LabelShowcase() {
  return (
    <div className="group relative bg-paper dark:bg-paper-dark border-2 border-transparent hover:border-graphite-lighter dark:hover:border-graphite transition-colors duration-500 min-h-[500px] h-auto md:h-[600px] flex flex-col">
      {/* Strict Dotted Border Container */}
      <div
        className={`
        absolute top-4 left-4 right-4 bottom-4
        border-2 border-dotted
        transition-colors duration-500 pointer-events-none z-20
        border-graphite dark:border-graphite-light opacity-40 group-hover:border-merlot group-hover:dark:border-merlot-light group-hover:opacity-100
      `}
      ></div>

      {/* Image Section */}
      <div className="relative flex-1 flex items-center justify-center p-8 md:p-12 overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-paper-texture opacity-50 mix-blend-multiply dark:mix-blend-normal"></div>

        {/* Side-by-side labels container */}
        <div className="relative z-10 flex items-center justify-center gap-4 md:gap-8 w-full max-w-4xl">
          {/* Front Label */}
          <div className="flex-1 flex flex-col items-center relative h-[350px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/label-front.jpeg"
                alt="Frente do Rótulo Sá Dona"
                fill
                className={`
                  object-contain
                  filter grayscale contrast-125
                  group-hover:grayscale-0 group-hover:contrast-100
                  transition-all duration-700 ease-in-out
                  scale-100 group-hover:scale-105
                `}
              />
            </div>
            <p className="mt-4 text-xs font-serif italic text-graphite dark:text-graphite-light opacity-70">
              Frente
            </p>
          </div>

          {/* Back Label */}
          <div className="flex-1 flex flex-col items-center relative h-[350px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/label-back.jpeg"
                alt="Verso do Rótulo Sá Dona"
                fill
                className={`
                  object-contain
                  filter grayscale contrast-125
                  group-hover:grayscale-0 group-hover:contrast-100
                  transition-all duration-700 ease-in-out
                  scale-100 group-hover:scale-105
                `}
              />
            </div>
            <p className="mt-4 text-xs font-serif italic text-graphite dark:text-graphite-light opacity-70">
              Verso
            </p>
          </div>
        </div>

        {/* Floating Year */}
        <div className="absolute top-8 right-8 z-10">
          <span className="font-serif text-4xl md:text-5xl lg:text-6xl text-graphite/10 dark:text-graphite-lighter/10 font-bold select-none">
            2025
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 pb-12 px-8 text-center bg-transparent">
        <div className="space-y-4">
          <div className="flex flex-col items-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-graphite dark:text-graphite-light font-sans mb-2 block">
              Ritápolis - MG
            </span>
            <div className="w-8 h-px bg-merlot/50 dark:bg-merlot-light/50 mb-2"></div>
          </div>

          <h3 className="font-script text-5xl md:text-6xl text-ink dark:text-paper leading-none transition-colors duration-300">
            Sá Dona
          </h3>

          <p className="font-serif text-base md:text-lg italic text-ink-faint dark:text-graphite-lighter transition-colors duration-300">
            Vinho Fino Tinto Seco
          </p>

          <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
            <button
              type="button"
              className="
              bg-ink dark:bg-paper-200 text-paper dark:text-ink px-8 py-3
              font-serif italic text-lg
              hover:bg-merlot dark:hover:bg-merlot-light dark:hover:text-white transition-colors duration-300
              shadow-sharp
            "
            >
              Adquirir — R$ 189,00
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}