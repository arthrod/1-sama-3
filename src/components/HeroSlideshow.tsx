"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
	{
		id: 5,
		url: "/images/slideshow/videiras-outono-montanhas.jpeg",
		alt: "Videiras de Outono",
		caption: "Nas Colinas de Minas",
	},
	{
		id: 6,
		url: "/images/slideshow/vinhedo-colinas-ceu-dramatico.jpeg",
		alt: "Céu Dramático",
		caption: "Onde o céu encontra a terra",
	},
];

const SWIPE_THRESHOLD = 50;

export function HeroSlideshow() {
	const [currentSlide, setCurrentSlide] = useState(0);
	const timerRef = useRef<NodeJS.Timeout | null>(null);
	const touchStartX = useRef<number | null>(null);
	const touchEndX = useRef<number | null>(null);

	const startTimer = useCallback(() => {
		if (timerRef.current) clearInterval(timerRef.current);
		timerRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
		}, 6000);
	}, []);

	const goToNext = useCallback(() => {
		setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
		// Reset timer on navigation
		if (timerRef.current) clearInterval(timerRef.current);
		startTimer();
	}, [startTimer]);

	const goToPrev = useCallback(() => {
		setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
		// Reset timer on navigation
		if (timerRef.current) clearInterval(timerRef.current);
		startTimer();
	}, [startTimer]);

	const handleManualChange = (index: number) => {
		setCurrentSlide(index);
		// Reset timer on manual change
		if (timerRef.current) clearInterval(timerRef.current);
		startTimer();
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
		touchEndX.current = null;
	};

	const handleTouchMove = (e: React.TouchEvent) => {
		touchEndX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (touchStartX.current === null || touchEndX.current === null) return;

		const diff = touchStartX.current - touchEndX.current;

		if (Math.abs(diff) > SWIPE_THRESHOLD) {
			if (diff > 0) {
				// Swiped left - go to next
				goToNext();
			} else {
				// Swiped right - go to previous
				goToPrev();
			}
		}

		touchStartX.current = null;
		touchEndX.current = null;
	};

	useEffect(() => {
		startTimer();
		return () => {
			if (timerRef.current) clearInterval(timerRef.current);
		};
	}, [startTimer]);

	return (
		<section
			id="inicio"
			className="relative min-h-screen flex items-center justify-center overflow-hidden touch-pan-y"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{/* Slideshow Background */}
			<AnimatePresence mode="popLayout">
				<motion.div
					key={currentSlide}
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.5, ease: "easeOut" }}
					className="absolute inset-0 z-0"
				>
					<Image
						src={SLIDES[currentSlide].url}
						alt={SLIDES[currentSlide].alt}
						fill
						className="object-cover"
						loading={currentSlide === 0 ? "eager" : "lazy"}
						priority={currentSlide === 0}
						sizes="100vw"
					/>
				</motion.div>
			</AnimatePresence>

			{/* Dark Gradient Overlay */}
			<div className="absolute inset-0 hero-overlay z-10" />

			{/* Floating Decorative Elements */}
			<div
				className="absolute top-1/4 left-10 w-32 h-32 floating-circle animate-float z-20 hidden md:block"
				style={{ animationDelay: "0s" }}
			/>
			<div
				className="absolute bottom-1/3 right-20 w-24 h-24 floating-circle animate-float z-20 hidden md:block"
				style={{ animationDelay: "2s" }}
			/>
			<div
				className="absolute top-1/2 right-1/4 w-16 h-16 floating-circle animate-float z-20 hidden lg:block"
				style={{ animationDelay: "4s", opacity: 0.5 }}
			/>

			{/* Content */}
			<div className="relative z-30 text-center px-6 max-w-5xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.8 }}
				>
					<span className="inline-block text-[10px] md:text-xs uppercase tracking-[0.4em] text-white/70 mb-8 border-b border-white/30 pb-2">
						Ritápolis • Minas Gerais • Brasil
					</span>
				</motion.div>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4, duration: 0.8 }}
					className="font-script text-7xl md:text-9xl lg:text-[12rem] text-white mb-6 leading-none hero-title"
				>
					Sá Marias
				</motion.h1>

				<motion.p
					key={`caption-${currentSlide}`}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.8 }}
					className="font-serif italic text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto"
				>
					{SLIDES[currentSlide].caption} — Vinhos finos de colheita de inverno,
					expressando o terroir único de Ritápolis
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.8 }}
					className="flex flex-col sm:flex-row gap-4 justify-center"
				>
					<Link href="/vinhos" className="btn-primary no-underline">
						Conheça Vinhos
					</Link>
					<Link href="/sitio-dutra" className="btn-outline no-underline">
						Visitar o Sítio
					</Link>
				</motion.div>
			</div>

			{/* Navigation Dots */}
			<div className="absolute bottom-24 left-0 right-0 z-30 flex justify-center gap-3">
				{SLIDES.map((slide, index) => (
					<button
						key={slide.id}
						type="button"
						onClick={() => handleManualChange(index)}
						className="group relative py-3 px-1"
						aria-label={`Ir para slide ${index + 1}`}
					>
						<div
							className={`
                h-1 rounded-full transition-all duration-500
                ${index === currentSlide ? "bg-white w-10 opacity-100" : "bg-white/50 w-2 group-hover:bg-white/80 group-hover:w-4"}
              `}
						/>
					</button>
				))}
			</div>

			{/* Scroll Indicator */}
			<div className="scroll-indicator z-30">
				<div className="flex flex-col items-center text-white/60">
					<span className="text-[10px] uppercase tracking-widest mb-2">
						Explore
					</span>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<title>Role para baixo</title>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
