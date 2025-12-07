"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SLIDES = [
	{
		id: 1,
		url: "/images/slideshow/cachos-uvas-sol.jpeg",
		alt: "Cachos de Uvas ao Sol",
		caption: "O Terroir de Ritápolis",
	},
	{
		id: 2,
		url: "/images/slideshow/colheita-trabalhadores-aereo.jpeg",
		alt: "Colheita no Vinhedo",
		caption: "Mãos que fazem história",
	},
	{
		id: 3,
		url: "/images/slideshow/uvas-verdes-capela.jpeg",
		alt: "Capela do Vinhedo",
		caption: "Tradição e Fé",
	},
	{
		id: 4,
		url: "/images/slideshow/vinhedo-por-do-sol-redes.jpeg",
		alt: "Pôr do Sol",
		caption: "Colheita de Inverno",
	},
];

export function HeroSlideshow() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const startTimer = useCallback(() => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
		}, 6000);
	}, []);

	const handleManualChange = (index: number) => {
		setCurrentSlide(index);
		startTimer(); // Reset timer on interaction
	};

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [startTimer]);

	return (
		<div className="relative w-full h-[85vh] bg-paper dark:bg-paper-dark p-4 md:p-8 flex flex-col justify-center overflow-hidden">
			{/* Decorative Outer Frame */}
			<div className="absolute inset-4 md:inset-8 border border-graphite-lighter opacity-50 pointer-events-none z-30"></div>

			{/* Main Content Area */}
			<div className="relative w-full h-full overflow-hidden border-2 border-dotted border-graphite bg-paper-200 shadow-paper-lift">
				<AnimatePresence mode="popLayout">
					<motion.div
						key={currentSlide}
						initial={{ opacity: 0, scale: 1.1 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
						className="absolute inset-0"
					>
						<div className="absolute inset-0 bg-ink/20 mix-blend-multiply z-10 pointer-events-none"></div>
						<Image
							src={SLIDES[currentSlide].url}
							alt={SLIDES[currentSlide].alt}
							fill
							className="object-cover filter sepia-[0.3] contrast-[1.05]"
							priority
							sizes="100vw"
						/>
					</motion.div>
				</AnimatePresence>

				{/* Text Overlay */}
				<div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
					<div className="bg-paper/80 dark:bg-ink/80 backdrop-blur-md p-10 md:p-16 border-y-4 border-double border-graphite max-w-3xl shadow-2xl">
						<motion.span
							key={`sub-${currentSlide}`}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="block font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-merlot mb-6"
						>
							Ritápolis • Minas Gerais
						</motion.span>

						<h1 className="font-script text-7xl md:text-9xl text-ink dark:text-paper mb-4 leading-none">
							Sá Marias
						</h1>

						<motion.p
							key={`cap-${currentSlide}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.5 }}
							className="font-serif italic text-xl md:text-2xl text-graphite-dark dark:text-graphite-lighter"
						>
							{SLIDES[currentSlide].caption}
						</motion.p>
					</div>
				</div>

				{/* Navigation Dots */}
				<div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-4">
					{SLIDES.map((slide, index) => (
						<button
							key={slide.id}
							type="button"
							onClick={() => handleManualChange(index)}
							className="group relative py-4 px-2" // Larger hit area
							aria-label={`Ir para slide ${index + 1}`}
						>
							<div
								className={`
                    h-1 rounded-full transition-all duration-500 shadow-sm
                    ${index === currentSlide ? "bg-paper w-12 opacity-100" : "bg-paper/50 w-2 group-hover:bg-paper/80 group-hover:w-4"}
                `}
							></div>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
