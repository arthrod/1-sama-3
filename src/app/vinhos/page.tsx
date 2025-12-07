export const dynamic = "force-dynamic";

import { Footer, Navigation } from "@/components";
import { WineCard } from "@/components/WineCard";
import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "../../../keystatic.config";
import "../../lib/keystatic-client";

export default async function WinesPage() {
	const reader = createGitHubReader(keystaticConfig, {
		repo: "arthrod/1-sama-3",
		token: process.env.KEYSTATIC_GITHUB_TOKEN,
	});

	const wines = await reader.collections.wines.all();

	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />

			<main className="pt-40 pb-32">
				<div className="container mx-auto px-6">
					<div className="text-center mb-24 max-w-3xl mx-auto">
						<span className="font-sans text-xs tracking-[0.3em] uppercase text-graphite mb-6 block">
							Nossa Produção
						</span>
						<h1 className="font-serif text-6xl md:text-8xl text-ink dark:text-paper mb-10">
							A Garrafeira
						</h1>
						<p className="font-serif text-xl text-ink-faint dark:text-graphite-lighter leading-relaxed italic">
							"Vinhos que expressam a alma de Ritápolis. A colheita de inverno
							concentra os açúcares e acentua os taninos, resultando em um corpo
							excepcional."
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
						{wines.map((wine) => (
							<WineCard
								key={wine.slug}
								product={{
									name: wine.entry.name,
									year: wine.entry.year,
									type: wine.entry.type,
									region: "Ritápolis - MG",
									price: wine.entry.price || 0,
									image: wine.entry.image || "",
									slug: wine.slug,
								}}
							/>
						))}
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
