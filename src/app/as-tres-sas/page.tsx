"use client";

import BernadeteSection from "@/components/AsTresSas/BernadeteSection";
import GenaSection from "@/components/AsTresSas/GenaSection";
import MariaRitaSection from "@/components/AsTresSas/MariaRitaSection";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function AsTresSasPage() {
	return (
		<main className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />
			<BernadeteSection />
			<GenaSection />
			<MariaRitaSection />
			<Footer />
		</main>
	);
}