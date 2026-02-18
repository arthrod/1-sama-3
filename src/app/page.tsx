import type { Metadata } from "next";
import { createGitHubReader } from "@keystatic/core/reader/github";
import Image from "next/image";
import Link from "next/link";
import { Footer, HeroSlideshow, Navigation } from "@/components";
import keystaticConfig from "../../keystatic.config";
import "../lib/keystatic-client";

export const dynamic = "force-dynamic";

// Page-specific metadata
export const metadata: Metadata = {
	title: "Sá Marias | Vinhos Finos de Ritápolis",
	description: "Vinhedo familiar em Minas Gerais próximo a Tiradentes. Experimente vinhos finos de colheita de inverno, uma experiência única de enoturismo e hospede-se no Sítio Dutra. Três gerações de tradição vinícola.",
	keywords: [
		"vinho",
		"vinhos finos",
		"vinhedo",
		"Ritápolis",
		"Minas Gerais",
		"vinho brasileiro",
		"colheita de inverno",
		"enoturismo",
		"São João del Rei",
		"Tiradentes",
		"próximo a Tiradentes",
		"vinho perto de Tiradentes",
		"vinhedo próximo a Tiradentes",
		"Caminho Real",
		"Estrada Real",
		"vinho no Caminho Real",
		"vinho mineiro",
		"Sá Marias",
		"vinho artesanal",
		"Sítio Dutra",
		"hospedagem rural",
		"hospedagem perto de Tiradentes",
		"vinho de altitude",
		"vinícola familiar",
		"rota do vinho Minas Gerais",
		"circuito das cidades históricas",
	],
	alternates: {
		canonical: "/",
	},
};

// Helper to fetch data
async function getData() {
	const reader = createGitHubReader(keystaticConfig, {
		repo: "arthrod/1-sama-3",
		token: process.env.KEYSTATIC_GITHUB_TOKEN,
	});

	const [wines, posts] = await Promise.all([
		reader.collections.wines.all(),
		reader.collections.posts.all(),
	]);

	// Sort and slice
	const recentPosts = posts
		.filter((p) => p.entry.status === "published")
		.sort(
			(a, b) =>
				new Date(b.entry.publishedDate).getTime() -
				new Date(a.entry.publishedDate).getTime(),
		)
		.slice(0, 3);

	const featuredWines = wines.slice(0, 3);

	return { wines: featuredWines, posts: recentPosts };
}

export default async function Home() {
	const { wines, posts } = await getData();

	// Structured data for homepage
	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "WebSite",
				"@id": "https://samarias.org/#website",
				url: "https://samarias.org/",
				name: "Sá Marias",
				description: "Vinhedo familiar em Minas Gerais. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis através de três gerações de conhecimento.",
				inLanguage: "pt-BR",
				potentialAction: {
					"@type": "SearchAction",
					target: "https://samarias.org/?q={search_term_string}",
					"query-input": "required name=search_term_string",
				},
			},
			{
				"@type": "Winery",
				"@id": "https://samarias.org/#winery",
				name: "Sá Marias",
				alternateName: "Vinhedo Sá Marias",
				description: "Vinhedo familiar pioneiro em colheita de inverno no Brasil, localizado em Ritápolis, Minas Gerais.",
				url: "https://samarias.org",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Rua Belo Horizonte, 74",
					addressLocality: "Ritápolis",
					addressRegion: "MG",
					addressCountry: "BR",
				},
				geo: {
					"@type": "GeoCoordinates",
					latitude: -21.016581,
					longitude: -44.315856,
				},
				telephone: "+55 (32) 99988-8075",
				email: "contato@samarias.org",
				sameAs: [
					"https://instagram.com/vinhedosamarias",
					"https://facebook.com/vinhedosamarias",
				],
				amenityFeature: [
					{
						"@type": "LocationFeatureSpecification",
						name: "Adegas",
						value: true,
					},
					{
						"@type": "LocationFeatureSpecification",
						name: "Degustação de vinhos",
						value: true,
					},
					{
						"@type": "LocationFeatureSpecification",
						name: "Tour guiado",
						value: true,
					},
				],
			},
			{
				"@type": "TouristAttraction",
				"@id": "https://samarias.org/sitio-dutra/#touristattraction",
				name: "Sítio Dutra - Hospedagem Rural",
				description: "Hospedagem rural autêntica no coração do vinhedo Sá Marias. Experiência imersiva de enoturismo em Minas Gerais.",
				url: "https://samarias.org/sitio-dutra",
				photo: "https://samarias.org/images/slideshow/vinhedo-por-do-sol-redes.jpeg",
				amenityFeature: [
					{
						"@type": "LocationFeatureSpecification",
						name: "Capacidade",
						value: "8 hóspedes",
					},
					{
						"@type": "LocationFeatureSpecification",
						name: "Quartos",
						value: 3,
					},
					{
						"@type": "LocationFeatureSpecification",
						name: "Aceita animais",
						value: true,
					},
					{
						"@type": "LocationFeatureSpecification",
						name: "Avaliação",
						value: "4.89 estrelas",
					},
				],
				geo: {
					"@type": "GeoCoordinates",
					latitude: -21.016581,
					longitude: -44.315856,
				},
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD needs this
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
				<Navigation />

				<main className="min-h-screen">
				{/* HERO SECTION */}
				<HeroSlideshow />

				{/* CRÔNICAS + SÍTIO DUTRA - Side by Side */}
				<section className="py-24 bg-paper dark:bg-paper-dark">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{/* CRÔNICAS CARD */}
							<div className="bg-paper-200 dark:bg-ink p-8 lg:p-12 border border-graphite/10 dark:border-graphite">
								<div className="flex items-center gap-4 mb-8">
									<span className="w-12 h-px bg-merlot" />
									<span className="text-xs tracking-[0.3em] uppercase text-graphite dark:text-graphite-lighter">
										Blog
									</span>
								</div>
								<h2 className="font-serif text-4xl lg:text-5xl text-ink dark:text-paper mb-8">
									Crônicas da Adega
								</h2>

								<div className="space-y-6 mb-8">
									{posts.slice(0, 2).map((post) => (
										<Link
											key={post.slug}
											href={`/posts/${post.slug}`}
											className="block group no-underline"
										>
											<article className="flex gap-4 items-start">
												<div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-paper-300 dark:bg-paper-dark">
													{post.entry.coverImage && (
														<Image
															src={post.entry.coverImage}
															alt={post.entry.title}
															width={80}
															height={80}
															className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
														/>
													)}
												</div>
												<div className="flex-1 min-w-0">
													<span className="text-[10px] uppercase tracking-widest text-merlot dark:text-merlot-light mb-1 block">
														{post.entry.publishedDate}
													</span>
													<h3 className="font-serif text-lg text-ink dark:text-paper leading-tight group-hover:text-merlot dark:group-hover:text-merlot-light transition-colors line-clamp-2">
														{post.entry.title}
													</h3>
												</div>
											</article>
										</Link>
									))}
								</div>

								<Link
									href="/posts"
									className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors no-underline"
								>
									Ver todas as histórias <span className="text-lg">→</span>
								</Link>
							</div>

							{/* SÍTIO DUTRA CARD */}
							<div className="relative overflow-hidden">
								<div className="absolute inset-0">
									<Image
										src="/images/slideshow/vinhedo-por-do-sol-redes.jpeg"
										alt="Sítio Dutra"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-ink/70" />
								</div>
								<div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-between min-h-[400px]">
									<div>
										<span className="text-xs tracking-[0.3em] uppercase text-merlot-light mb-4 block">
											Hospedagem Rural
										</span>
										<h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
											Sítio Dutra
										</h2>
										<p className="text-paper/80 text-lg font-serif italic mb-6">
											Casa na roça, trilha e experiência autêntica
										</p>
										<div className="flex items-center gap-4 mb-6">
											<span className="text-xl">⭐</span>
											<div className="text-paper">
												<span className="font-bold text-xl">4.89</span>
												<span className="text-paper/70 text-sm ml-2">
													• 47 avaliações
												</span>
											</div>
										</div>
									</div>
									<div className="flex flex-wrap gap-3 mb-6">
										<span className="px-3 py-1 border border-paper/30 text-paper/80 text-xs">
											8 Hóspedes
										</span>
										<span className="px-3 py-1 border border-paper/30 text-paper/80 text-xs">
											3 Quartos
										</span>
										<span className="px-3 py-1 border border-paper/30 text-paper/80 text-xs">
											Aceita Pets
										</span>
									</div>
									<Link
										href="/sitio-dutra"
										className="inline-block text-center bg-paper text-ink py-3 px-6 font-bold uppercase tracking-widest text-xs hover:bg-merlot hover:text-paper transition-colors no-underline"
									>
										Conhecer o Sítio
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* VINHOS + NEWSLETTER - Side by Side */}
				<section className="py-24 bg-paper-200 dark:bg-ink">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{/* VINHOS CARD */}
							<div className="relative overflow-hidden min-h-[500px]">
								<div className="absolute inset-0">
									<Image
										src="/images/slideshow/cachos-uvas-sol.jpeg"
										alt="Vinhos Sá Marias"
										fill
										className="object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/30" />
								</div>
								<div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-end">
									<span className="text-xs tracking-[0.3em] uppercase text-merlot-light mb-4 block">
										A Garrafeira
									</span>
									<h2 className="font-serif text-4xl lg:text-5xl text-paper mb-4">
										Nossos Vinhos
									</h2>
									<p className="text-paper/80 mb-8 max-w-md">
										Vinhos de colheita de inverno, expressando o terroir único de
										Ritápolis através de três gerações de conhecimento.
									</p>

									{/* Wine preview */}
									<div className="flex gap-4 mb-8">
										{wines.slice(0, 3).map((wine) => (
											<div
												key={wine.slug}
												className="w-16 h-20 bg-paper/10 backdrop-blur-sm border border-paper/20 flex items-center justify-center overflow-hidden"
											>
												{wine.entry.image ? (
													<Image
														src={wine.entry.image}
														alt={wine.entry.name}
														width={60}
														height={80}
														className="object-contain"
													/>
												) : (
													<span className="font-script text-paper/50 text-2xl">
														Sá
													</span>
												)}
											</div>
										))}
									</div>

									{/* Stats */}
									<div className="flex gap-8 mb-8">
										<div>
											<span className="block font-serif text-3xl font-bold text-paper">
												1000m
											</span>
											<span className="text-xs uppercase tracking-widest text-paper/60">
												Altitude
											</span>
										</div>
										<div>
											<span className="block font-serif text-3xl font-bold text-paper">
												Inverno
											</span>
											<span className="text-xs uppercase tracking-widest text-paper/60">
												Colheita
											</span>
										</div>
									</div>

									<Link
										href="/vinhos"
										className="inline-block text-center bg-merlot text-paper py-3 px-6 font-bold uppercase tracking-widest text-xs hover:bg-merlot-light transition-colors no-underline w-fit"
									>
										Explorar Vinhos
									</Link>
								</div>
							</div>

							{/* NEWSLETTER CARD */}
							<div className="bg-ink text-paper p-8 lg:p-12 flex flex-col justify-center min-h-[500px]">
								<span className="text-xs tracking-[0.3em] uppercase text-merlot-light mb-4 block">
									Fique por Dentro
								</span>
								<h2 className="font-serif text-4xl lg:text-5xl text-paper mb-6">
									Newsletter
								</h2>
								<p className="text-graphite-lighter mb-8 max-w-md">
									Receba novidades sobre safras, eventos no vinhedo, receitas
									harmonizadas e histórias da nossa família direto no seu e-mail.
								</p>

								<form className="space-y-4">
									<div>
										<input
											type="text"
											placeholder="Seu nome"
											className="w-full bg-transparent border-b border-graphite py-3 text-paper placeholder:text-graphite-light focus:border-merlot-light focus:outline-none transition-colors"
										/>
									</div>
									<div>
										<input
											type="email"
											placeholder="Seu e-mail"
											className="w-full bg-transparent border-b border-graphite py-3 text-paper placeholder:text-graphite-light focus:border-merlot-light focus:outline-none transition-colors"
										/>
									</div>
									<button
										type="submit"
										className="mt-6 w-full bg-merlot text-paper py-4 font-bold uppercase tracking-widest text-xs hover:bg-merlot-light transition-colors"
									>
										Inscrever-se
									</button>
								</form>

								<p className="text-xs text-graphite-light mt-6">
									Ao se inscrever, você concorda com nossa{" "}
									<Link
										href="/politica-de-privacidade"
										className="text-merlot-light hover:text-paper transition-colors"
									>
										Política de Privacidade
									</Link>
									.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
		</>
	);
}
