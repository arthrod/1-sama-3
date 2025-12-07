// Force this route to be completely dynamic - never evaluated at build time
export const dynamic = "force-dynamic";

import { Newsletter } from "@/components";
import { createGitHubReader } from "@keystatic/core/reader/github";
import Image from "next/image";
import Link from "next/link";
import keystaticConfig from "../../../keystatic.config";
import "../../lib/keystatic-client";

async function getPosts() {
	const reader = createGitHubReader(keystaticConfig, {
		repo: "arthrod/1-sama-3",
		token: process.env.KEYSTATIC_GITHUB_TOKEN,
	});

	const posts = await reader.collections.posts.all();

	// Filter published posts and sort by date descending
	const published = posts.filter((post) => post.entry.status === "published");
	published.sort(
		(a, b) =>
			new Date(b.entry.publishedDate).getTime() -
			new Date(a.entry.publishedDate).getTime(),
	);

	return published;
}

export default async function BlogPage() {
	const posts = await getPosts();
	const [latestPost, ...otherPosts] = posts;

	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark pt-32 pb-24">
			{/* Header */}
			<div className="container mx-auto px-6 mb-20 text-center">
				<span className="font-sans text-xs tracking-[0.4em] uppercase text-graphite mb-4 block">
					Blog
				</span>
				<h1 className="font-serif text-6xl md:text-8xl text-ink dark:text-paper mb-8">
					Crônicas da Adega
				</h1>
				<div className="w-24 h-1 bg-merlot mx-auto"></div>
			</div>

			<div className="container mx-auto px-6 max-w-7xl">
				{posts.length === 0 ? (
					<div className="text-center py-20 border border-dotted border-graphite">
						<p className="font-serif text-xl italic text-graphite">
							Nossas histórias estão sendo escritas...
						</p>
					</div>
				) : (
					<>
						{/* 1. HERO POST (Big Impact) */}
						{latestPost && (
							<Link
								href={`/posts/${latestPost.slug}`}
								className="group block mb-24 no-underline hover:no-underline"
							>
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-graphite bg-paper-200 dark:bg-ink shadow-paper-lift overflow-hidden">
									{/* Image Side */}
									<div className="relative h-[400px] lg:h-[600px] overflow-hidden">
										<div className="absolute inset-0 bg-merlot/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
										{latestPost.entry.coverImage ? (
											<Image
												src={latestPost.entry.coverImage}
												alt={latestPost.entry.title}
												fill
												className="object-cover transition-transform duration-1000 group-hover:scale-105"
											/>
										) : (
											// Fallback art if no image
											<div className="w-full h-full bg-merlot flex items-center justify-center p-12">
												<span className="font-script text-9xl text-paper/20 rotate-12">
													Sá
												</span>
											</div>
										)}
									</div>

									{/* Content Side */}
									<div className="p-12 lg:p-20 flex flex-col justify-center relative">
										<span className="font-sans text-xs tracking-widest uppercase text-merlot mb-6">
											Última Publicação • {latestPost.entry.publishedDate}
										</span>
										<h2 className="font-serif text-4xl lg:text-5xl text-ink dark:text-paper mb-8 leading-tight group-hover:text-merlot dark:group-hover:text-merlot-light transition-colors">
											{latestPost.entry.title}
										</h2>
										<p className="font-serif text-lg text-ink-faint dark:text-graphite-lighter leading-relaxed mb-8 line-clamp-4">
											{latestPost.entry.excerpt}
										</p>
										<span className="font-sans text-xs font-bold uppercase tracking-widest text-ink dark:text-paper underline underline-offset-8 decoration-merlot">
											Ler crônica completa
										</span>
									</div>
								</div>
							</Link>
						)}

						{/* 2. GRID LIST (Remaining Posts) */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
							{otherPosts.map((post) => (
								<Link
									key={post.slug}
									href={`/posts/${post.slug}`}
									className="group block no-underline hover:no-underline"
								>
									<div className="relative aspect-4/3 mb-6 overflow-hidden border border-graphite-lighter bg-paper-200">
										{post.entry.coverImage ? (
											<Image
												src={post.entry.coverImage}
												alt={post.entry.title}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
											/>
										) : (
											<div className="w-full h-full bg-paper-300 dark:bg-ink-light flex items-center justify-center">
												<span className="font-serif text-6xl text-graphite/20">
													&amp;quot;
												</span>
											</div>
										)}
									</div>
									<div className="pr-4">
										<span className="block font-sans text-[10px] tracking-widest uppercase text-graphite mb-3">
											{post.entry.publishedDate}
										</span>
										<h3 className="font-serif text-2xl text-ink dark:text-paper mb-3 leading-tight group-hover:text-merlot transition-colors">
											{post.entry.title}
										</h3>
										<p className="font-sans text-sm text-graphite dark:text-graphite-light line-clamp-3 leading-relaxed">
											{post.entry.excerpt}
										</p>
									</div>
								</Link>
							))}
						</div>
					</>
				)}
			</div>

			<div className="mt-32">
				<Newsletter />
			</div>
		</div>
	);
}
