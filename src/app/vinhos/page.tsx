import { Footer, Navigation, Newsletter } from "@/components";
import { WineCard } from "@/components/WineCard";
import { reader } from "../../lib/reader";

export default async function WinesPage() {
	const wines = await reader.collections.wines.all();

	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />

			<main className="pt-32 pb-24">
				{/* Header */}
				<div className="container mx-auto px-6 mb-20 text-center">
					<span className="font-sans text-xs tracking-[0.4em] uppercase text-graphite dark:text-graphite-lighter mb-4 block">
						Nossa Produção
					</span>
					<h1 className="font-serif text-6xl md:text-8xl text-ink dark:text-paper mb-8">
						A Garrafeira
					</h1>
					<div className="w-24 h-1 bg-merlot mx-auto" />
				</div>

				{/* TERROIR SECTION */}
				<section className="py-24 bg-paper-200 dark:bg-ink">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							{/* Text Content */}
							<div>
								<span className="text-xs tracking-[0.3em] uppercase text-merlot dark:text-merlot-light mb-4 block">
									O Terroir
								</span>
								<h2 className="font-serif text-4xl md:text-5xl text-ink dark:text-paper mb-8">
									Ritápolis, Minas Gerais
								</h2>
								<div className="space-y-6 text-ink-faint dark:text-paper-200 leading-relaxed">
									<p>
										Nosso vinhedo está situado nas terras altas de Ritápolis, a
										aproximadamente 1.000 metros de altitude, onde o clima ameno
										e as noites frias criam condições ideais para a viticultura
										de qualidade.
									</p>
									<p>
										A colheita de inverno é nossa assinatura. Enquanto a maioria
										dos vinhedos brasileiros colhe no verão, nós aguardamos o
										frio do inverno mineiro, quando as uvas atingem uma
										concentração de açúcares e intensidade de sabores únicos.
									</p>
									<p>
										O solo argiloso e rico em minerais, combinado com a
										tradição de três gerações de viticultores, resulta em
										vinhos de personalidade marcante e autenticidade inconfundível.
									</p>
								</div>
							</div>

							{/* Stats Grid */}
							<div className="grid grid-cols-2 gap-6">
								<div className="bg-paper dark:bg-paper-dark p-8 text-center border border-graphite/10 dark:border-graphite">
									<span className="block font-serif text-5xl md:text-6xl font-bold text-merlot dark:text-merlot-light mb-2">
										1000m
									</span>
									<span className="text-xs uppercase tracking-widest text-graphite dark:text-graphite-lighter">
										Altitude
									</span>
								</div>
								<div className="bg-paper dark:bg-paper-dark p-8 text-center border border-graphite/10 dark:border-graphite">
									<span className="block font-serif text-5xl md:text-6xl font-bold text-merlot dark:text-merlot-light mb-2">
										3
									</span>
									<span className="text-xs uppercase tracking-widest text-graphite dark:text-graphite-lighter">
										Gerações
									</span>
								</div>
								<div className="bg-paper dark:bg-paper-dark p-8 text-center border border-graphite/10 dark:border-graphite">
									<span className="block font-serif text-5xl md:text-6xl font-bold text-merlot dark:text-merlot-light mb-2">
										Inverno
									</span>
									<span className="text-xs uppercase tracking-widest text-graphite dark:text-graphite-lighter">
										Colheita
									</span>
								</div>
								<div className="bg-paper dark:bg-paper-dark p-8 text-center border border-graphite/10 dark:border-graphite">
									<span className="block font-serif text-5xl md:text-6xl font-bold text-merlot dark:text-merlot-light mb-2">
										100%
									</span>
									<span className="text-xs uppercase tracking-widest text-graphite dark:text-graphite-lighter">
										Artesanal
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* WINES COLLECTION */}
				<section className="py-32 bg-paper dark:bg-paper-dark">
					<div className="max-w-7xl mx-auto px-6">
						{/* Section Header */}
						<div className="text-center mb-20">
							<span className="text-xs tracking-[0.3em] uppercase text-graphite dark:text-graphite-lighter mb-4 block">
								Safras Disponíveis
							</span>
							<h2 className="font-serif text-5xl md:text-6xl text-ink dark:text-paper mb-6">
								Nossos Vinhos
							</h2>
							<div className="w-24 h-1 bg-merlot mx-auto" />
						</div>

						{/* Wines Grid */}
						{wines.length > 0 ? (
							<div
								className={`grid gap-12 ${
									wines.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : ""
								} ${wines.length === 2 ? "grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto" : ""} ${wines.length >= 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}`}
							>
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
						) : (
							<div className="text-center py-20 border border-dotted border-graphite dark:border-graphite-light max-w-2xl mx-auto">
								<span className="font-script text-6xl text-merlot/30 block mb-4">
									Sá
								</span>
								<p className="font-serif text-xl italic text-graphite dark:text-graphite-lighter">
									A próxima safra está descansando nas barricas...
								</p>
								<p className="text-sm text-graphite dark:text-graphite-light mt-4">
									Volte em breve para conhecer nossos vinhos.
								</p>
							</div>
						)}
					</div>
				</section>

				{/* TASTING NOTES LEGEND */}
				<section className="py-20 bg-ink text-paper">
					<div className="max-w-4xl mx-auto px-6 text-center">
						<h3 className="font-serif text-3xl mb-10">Guia de Degustação</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							<div className="p-6">
								<div className="w-12 h-12 mx-auto mb-4 rounded-full border border-merlot-light flex items-center justify-center">
									<span className="text-xl">🍷</span>
								</div>
								<h4 className="font-serif text-lg mb-2">Corpo</h4>
								<p className="text-sm text-graphite-lighter">
									Nossos tintos apresentam corpo médio a encorpado, com estrutura
									marcante e final persistente.
								</p>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 mx-auto mb-4 rounded-full border border-merlot-light flex items-center justify-center">
									<span className="text-xl">🌡️</span>
								</div>
								<h4 className="font-serif text-lg mb-2">Temperatura</h4>
								<p className="text-sm text-graphite-lighter">
									Sirva entre 16°C e 18°C para apreciar todos os aromas e sabores
									em sua plenitude.
								</p>
							</div>
							<div className="p-6">
								<div className="w-12 h-12 mx-auto mb-4 rounded-full border border-merlot-light flex items-center justify-center">
									<span className="text-xl">🥩</span>
								</div>
								<h4 className="font-serif text-lg mb-2">Harmonização</h4>
								<p className="text-sm text-graphite-lighter">
									Ideal com carnes vermelhas, queijos curados e a tradicional
									culinária mineira.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* NEWSLETTER */}
				<Newsletter />
			</main>

			<Footer />
		</div>
	);
}
