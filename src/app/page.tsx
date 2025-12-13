export const dynamic = "force-dynamic";

import { createGitHubReader } from "@keystatic/core/reader/github";
import Image from "next/image";
import Link from "next/link";
import { Footer, HeroSlideshow, Navigation, Newsletter } from "@/components";
import keystaticConfig from "../../keystatic.config";
import "../lib/keystatic-client";

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

	return (
		<div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
			<Navigation />

			<main className="min-h-screen">
				{/* HERO SECTION */}
				<HeroSlideshow />

				{/* WINES SECTION */}
				<section id="vinhos" className="py-32 bg-paper dark:bg-paper-dark">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-center mb-20">
							<span className="text-xs tracking-[0.3em] uppercase text-graphite mb-4 block font-sans">
								A Garrafeira
							</span>
							<h2 className="font-serif text-5xl md:text-7xl text-ink dark:text-paper mb-6">
								Nossos Vinhos
							</h2>
							<div className="section-divider" />
						</div>

						<div
							className={`grid gap-12 ${
								wines.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : ""
							} ${wines.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""} ${wines.length >= 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}`}
						>
							{wines.length > 0 ? (
								wines.map((wine) => (
									<div
										key={wine.slug}
										className="group cursor-pointer"
									>
										<div className="aspect-[3/4] bg-paper-200 overflow-hidden relative border border-paper-300 dark:border-graphite mb-6">
											{wine.entry.image && (
												<Image
													src={wine.entry.image}
													alt={wine.entry.name}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-105 img-hover-color"
												/>
											)}
											<div className="absolute bottom-0 left-0 bg-paper dark:bg-ink px-4 py-2 text-xs font-sans uppercase tracking-widest text-ink dark:text-paper">
												{wine.entry.type}
											</div>
										</div>
										<span className="text-[10px] uppercase tracking-[0.3em] text-graphite block mb-2">
											Ritápolis - MG
										</span>
										<h3 className="font-script text-5xl text-ink dark:text-paper group-hover:text-merlot transition-colors mb-2">
											{wine.entry.name}
										</h3>
										<p className="text-sm text-graphite">
											{wine.entry.year} • Vinho Fino Tinto Seco
										</p>
									</div>
								))
							) : (
								<div className="col-span-full text-center py-20 bg-paper-200 dark:bg-ink border border-dotted border-graphite">
									<p className="font-serif italic text-graphite">
										A próxima safra está descansando...
									</p>
								</div>
							)}
						</div>
					</div>
				</section>

				{/* SÍTIO DUTRA SECTION */}
				<section id="sitio-dutra" className="py-32 bg-ink text-paper overflow-hidden">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							{/* Content */}
							<div>
								<span className="inline-block text-xs tracking-[0.3em] uppercase text-merlot-light mb-6 border-b border-merlot-light/30 pb-2">
									Hospedagem Rural
								</span>
								<h2 className="font-serif text-5xl md:text-7xl text-paper mb-8 leading-tight">
									Sítio Dutra
								</h2>
								<p className="text-xl text-graphite-lighter font-serif italic mb-8">
									Casa na roça, trilha e experiência autêntica no coração de
									Minas Gerais
								</p>

								<div className="flex items-center gap-6 mb-8 pb-8 border-b border-graphite">
									<div className="flex items-center gap-1">
										<span className="text-2xl">⭐</span>
										<span className="text-3xl font-serif font-bold">4.89</span>
									</div>
									<div className="text-sm text-graphite-lighter">
										<span className="text-paper font-bold">47 avaliações</span> •
										Guest Favorite no Airbnb
									</div>
								</div>

								<div className="grid grid-cols-3 gap-6 mb-10 text-center">
									<div>
										<span className="text-4xl font-serif font-bold text-paper">
											8
										</span>
										<p className="text-xs uppercase tracking-widest text-graphite-lighter mt-1">
											Hóspedes
										</p>
									</div>
									<div>
										<span className="text-4xl font-serif font-bold text-paper">
											3
										</span>
										<p className="text-xs uppercase tracking-widest text-graphite-lighter mt-1">
											Quartos
										</p>
									</div>
									<div>
										<span className="text-4xl font-serif font-bold text-paper">
											2
										</span>
										<p className="text-xs uppercase tracking-widest text-graphite-lighter mt-1">
											Banheiros
										</p>
									</div>
								</div>

								<p className="text-graphite-lighter leading-relaxed mb-8">
									Para quem curte casa de roça, o Sítio Dutra, com ótima
									localização e fácil acesso, fica a 05 minutos da Praça central
									de Ritápolis, a 30 minutos de São João del Rei e a 30 km de
									Tiradentes. Com muita área verde, ducha e bica de água de
									nascentes e linda trilha para ir ao centro da cidade a pé.
								</p>

								<div className="flex flex-wrap gap-3 mb-10">
									<span className="amenity-tag">🍷 Vista do Vinhedo</span>
									<span className="amenity-tag">🌿 Vista do Jardim</span>
									<span className="amenity-tag">🍳 Cozinha Completa</span>
									<span className="amenity-tag">📶 WiFi</span>
									<span className="amenity-tag">🚗 Estacionamento</span>
									<span className="amenity-tag">🐕 Aceita Pets</span>
									<span className="amenity-tag">🔥 Fogão à Lenha</span>
									<span className="amenity-tag">🥩 Churrasqueira</span>
								</div>

								<a
									href="https://www.airbnb.com.br/h/sitiodutra"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-merlot animate-pulse-glow no-underline"
								>
									Reservar no Airbnb
								</a>
							</div>

							{/* Image Grid */}
							<div className="relative">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-4">
										<div className="aspect-[4/5] relative overflow-hidden">
											<Image
												src="/images/slideshow/cachos-uvas-sol.jpeg"
												alt="Sítio Dutra - Vista"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
										<div className="aspect-square relative overflow-hidden">
											<Image
												src="/images/slideshow/colheita-trabalhadores-aereo.jpeg"
												alt="Sítio Dutra - Interior"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
									</div>
									<div className="space-y-4 pt-8">
										<div className="aspect-square relative overflow-hidden">
											<Image
												src="/images/slideshow/uvas-verdes-capela.jpeg"
												alt="Sítio Dutra - Natureza"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
										<div className="aspect-[4/5] relative overflow-hidden">
											<Image
												src="/images/slideshow/vinhedo-por-do-sol-redes.jpeg"
												alt="Sítio Dutra - Varanda"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
									</div>
								</div>

								{/* Floating Review Card */}
								<div className="absolute -bottom-8 -left-8 bg-paper text-ink p-6 max-w-xs shadow-2xl hidden lg:block">
									<p className="font-serif italic text-sm mb-4">
										&ldquo;O que falar do espaço, amamos! Casa uma delícia, a
										varanda um item à parte. O sítio todo é ímpar!&rdquo;
									</p>
									<div className="flex items-center gap-2">
										<div className="w-10 h-10 rounded-full bg-merlot flex items-center justify-center text-paper font-bold">
											S
										</div>
										<div>
											<p className="font-bold text-sm">Suelene</p>
											<p className="text-xs text-graphite">Dezembro 2024</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* The Space Details */}
						<div className="mt-32 pt-16 border-t border-graphite">
							<h3 className="font-serif text-3xl text-paper mb-10">O Espaço</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
								<div>
									<p className="text-graphite-lighter leading-relaxed mb-6">
										A casa do Sítio Dutra tem um charmoso fogão à lenha, para
										quem quiser se aventurar na cozinha, com água da pia da
										cozinha e do chuveiro aquecida com serpentina. Mas também
										possui fogão a gás com forno e chuveiro elétrico.
									</p>
									<p className="text-graphite-lighter leading-relaxed">
										Possui uma área externa ampla, uma rede para dar aquela boa
										descansada e churrasqueira para festas familiares ou reunião
										de amigos. Também possui um forno de cupinzeiro para
										Experiência com Quitandas que pode ser solicitada.
									</p>
								</div>
								<div className="bg-graphite/30 p-8">
									<h4 className="font-serif text-xl text-paper mb-4">
										📍 Localização
									</h4>
									<ul className="space-y-3 text-graphite-lighter">
										<li className="flex items-start gap-3">
											<span className="text-merlot-light">→</span> 5 minutos da
											Praça Central de Ritápolis
										</li>
										<li className="flex items-start gap-3">
											<span className="text-merlot-light">→</span> 30 minutos de
											São João del Rei
										</li>
										<li className="flex items-start gap-3">
											<span className="text-merlot-light">→</span> 30 km de
											Tiradentes
										</li>
									</ul>
									<div className="mt-6 pt-6 border-t border-graphite">
										<p className="text-xs text-graphite font-mono">
											Coordenadas: -21.0165810, -44.3158560
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CRÔNICAS (BLOG) SECTION */}
				<section id="cronicas" className="py-32 bg-paper-200 dark:bg-paper-dark">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
							{/* Latest Posts */}
							<div className="lg:col-span-7">
								<div className="flex items-center gap-4 mb-10">
									<span className="w-12 h-px bg-merlot" />
									<span className="text-xs tracking-[0.3em] uppercase text-graphite">
										Blog
									</span>
								</div>
								<h2 className="font-serif text-5xl text-ink dark:text-paper mb-12">
									Crônicas da Adega
								</h2>

								<div className="space-y-12">
									{posts.map((post) => (
										<Link
											key={post.slug}
											href={`/posts/${post.slug}`}
											className="block group no-underline"
										>
											<article className="grid grid-cols-12 gap-6 items-center">
												<div className="col-span-4">
													<div className="aspect-square overflow-hidden bg-paper-300 dark:bg-ink">
														{post.entry.coverImage && (
															<Image
																src={post.entry.coverImage}
																alt={post.entry.title}
																width={400}
																height={400}
																className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 img-hover-color"
															/>
														)}
													</div>
												</div>
												<div className="col-span-8">
													<span className="text-[10px] uppercase tracking-widest text-merlot mb-2 block">
														{post.entry.publishedDate}
													</span>
													<h3 className="font-serif text-2xl text-ink dark:text-paper leading-tight mb-3 group-hover:text-merlot transition-colors">
														{post.entry.title}
													</h3>
													<p className="text-sm text-graphite line-clamp-2">
														{post.entry.excerpt}
													</p>
												</div>
											</article>
										</Link>
									))}
								</div>

								<div className="mt-12">
									<Link
										href="/posts"
										className="inline-flex items-center gap-2 font-serif text-lg text-ink dark:text-paper hover:text-merlot transition-colors no-underline"
									>
										Ver todas as histórias <span className="text-xl">→</span>
									</Link>
								</div>
							</div>

							{/* Sítio Dutra Quick Access */}
							<div className="lg:col-span-5">
								<div className="sticky top-32">
									<div className="bg-ink text-paper p-8 mb-8">
										<span className="text-[10px] uppercase tracking-widest text-merlot-light block mb-4">
											Hospedagem
										</span>
										<h3 className="font-serif text-3xl mb-4">Sítio Dutra</h3>
										<p className="text-graphite-lighter text-sm mb-6">
											Viva a experiência completa. Fique no coração do vinhedo e
											acorde com a vista das videiras.
										</p>
										<div className="flex items-center gap-4 mb-6">
											<span className="text-2xl">⭐</span>
											<div>
												<span className="font-bold">4.89</span>
												<span className="text-graphite-lighter text-sm">
													{" "}
													• 47 avaliações
												</span>
											</div>
										</div>
										<a
											href="#sitio-dutra"
											className="block text-center bg-paper text-ink py-3 font-bold uppercase tracking-widest text-xs hover:bg-merlot hover:text-paper transition-colors no-underline"
										>
											Conhecer o Sítio
										</a>
									</div>

									{/* Quick Stats */}
									<div className="grid grid-cols-2 gap-4">
										<div className="bg-paper dark:bg-ink p-6 text-center border border-paper-300 dark:border-graphite">
											<span className="block text-4xl font-serif font-bold text-merlot">
												3
											</span>
											<span className="text-xs uppercase tracking-widest text-graphite">
												Gerações
											</span>
										</div>
										<div className="bg-paper dark:bg-ink p-6 text-center border border-paper-300 dark:border-graphite">
											<span className="block text-4xl font-serif font-bold text-merlot">
												1
											</span>
											<span className="text-xs uppercase tracking-widest text-graphite">
												Terroir
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* NEWSLETTER SECTION */}
				<Newsletter />
			</main>

			<Footer />
		</div>
	);
}
