export const dynamic = "force-dynamic";

// import { WineCard } from "@/components/WineCard"; // Removed to use custom inline card
import { Footer, HeroSlideshow, Navigation, Newsletter } from "@/components";
import { createGitHubReader } from "@keystatic/core/reader/github";
import Image from "next/image";
import Link from "next/link";
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

	const featuredWines = wines.slice(0, 3); // Take up to 3

	return { wines: featuredWines, posts: recentPosts };
}

export default async function Home() {
	const { wines, posts } = await getData();

	return (
		<div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
			<Navigation />

			{/* IMMERSIVE EFFECT: pt-16 removed so Hero slides behind Nav */}
			<main className="min-h-screen">
				<div className="animate-fade-in pb-24">
					<HeroSlideshow />

					{/* === WINES SECTION === */}
					<div className="max-w-7xl mx-auto px-6 pt-32">
						<div className="flex flex-col items-center mb-16">
							<span className="font-sans text-xs tracking-[0.3em] uppercase text-graphite mb-4">
								A Garrafeira
							</span>
							<h2 className="font-serif text-5xl md:text-6xl text-ink dark:text-paper text-center">
								Nossos Vinhos
							</h2>
						</div>

						{/* Smart Grid for 1, 2, or 3 items */}
						<div
							className={`
                grid gap-12 
                ${wines.length === 1 ? "grid-cols-1 max-w-2xl mx-auto" : ""}
                ${wines.length === 2 ? "grid-cols-1 md:grid-cols-2" : ""}
                ${wines.length >= 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : ""}
             `}
						>
							{wines.length > 0 ? (
								wines.map((wine) => (
									/* CUSTOM INLINE CARD (No Price, Big Title) */
									<div
										key={wine.slug}
										className="group cursor-pointer flex flex-col gap-6"
									>
										<div className="aspect-[3/4] bg-paper-200 overflow-hidden relative border border-paper-300">
											{wine.entry.image && (
												<Image
													src={wine.entry.image}
													alt={wine.entry.name}
													fill
													className="object-cover transition-transform duration-700 group-hover:scale-105"
												/>
											)}
											<div className="absolute bottom-0 left-0 bg-white dark:bg-ink px-3 py-1 text-xs font-sans uppercase tracking-widest text-ink dark:text-paper">
												{wine.entry.type}
											</div>
										</div>

										<div className="flex flex-col">
											{/* CHANGE TITLE SIZE HERE: 
                                                Current: text-4xl md:text-5xl (Approx 2.5x standard)
                                                
                                                - For 1.5x size: use "text-2xl md:text-3xl"
                                                - For 3x size: use "text-5xl md:text-6xl"
                                                - For Massive: use "text-6xl md:text-7xl"
                                            */}
											<h3 className="font-serif text-4xl md:text-5xl text-ink dark:text-paper leading-tight group-hover:text-merlot transition-colors mb-2">
												{wine.entry.name}
											</h3>
											<p className="text-sm text-graphite font-sans">
												{wine.entry.year} • Ritápolis - MG
											</p>
											{/* Price removed as requested */}
										</div>
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

					{/* === DIVIDER === */}
					<div className="max-w-xs mx-auto my-32 border-t border-graphite opacity-30"></div>

					{/* === BLOG/COMMUNITY SECTION === */}
					<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
						{/* Left: Newsletter */}
						<div className="lg:col-span-5 flex flex-col justify-center">
							<div className="flex items-center gap-4 mb-8">
								<span className="w-8 h-px bg-graphite"></span>
								<span className="font-serif italic text-graphite text-lg">
									A Comunidade
								</span>
							</div>
							{/* Constrain width to fit container (approx 28rem/450px) */}
							<div className="w-full max-w-md">
								<Newsletter />
							</div>
						</div>

						{/* Right: Latest Posts */}
						<div className="lg:col-span-7 space-y-12">
							<h3 className="font-serif text-3xl text-ink dark:text-paper mb-8 border-b border-graphite pb-4">
								Últimas Crônicas
							</h3>

							<div className="space-y-10">
								{posts.map((post) => (
									<Link
										key={post.slug}
										href={`/posts/${post.slug}`}
										className="block group no-underline hover:no-underline"
									>
										<div className="grid grid-cols-12 gap-6 items-center">
											<div className="col-span-4 aspect-square relative overflow-hidden bg-paper-200">
												{post.entry.coverImage && (
													<Image
														src={post.entry.coverImage}
														alt=""
														fill
														className="object-cover transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
													/>
												)}
											</div>
											<div className="col-span-8">
												<span className="text-[10px] uppercase tracking-widest text-merlot mb-2 block">
													{post.entry.publishedDate}
												</span>
												<h4 className="font-serif text-2xl text-ink dark:text-paper leading-tight mb-3 group-hover:text-merlot transition-colors">
													{post.entry.title}
												</h4>
												<p className="font-sans text-sm text-graphite line-clamp-2">
													{post.entry.excerpt}
												</p>
											</div>
										</div>
									</Link>
								))}
							</div>

							<div className="pt-8">
								<Link
									href="/posts"
									className="inline-flex items-center gap-2 font-serif text-lg text-ink dark:text-paper hover:text-merlot transition-colors"
								>
									Ver todas as histórias <span className="text-xl">→</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
