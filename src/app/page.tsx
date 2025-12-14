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
										<Link
											href="/sitio-dutra"
											className="block text-center bg-paper text-ink py-3 font-bold uppercase tracking-widest text-xs hover:bg-merlot hover:text-paper transition-colors no-underline"
										>
											Conhecer o Sítio
										</Link>
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
