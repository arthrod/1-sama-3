import Markdoc from "@markdoc/markdoc";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Footer, Navigation } from "@/components";
import { getReader } from "@/lib/reader";

export async function generateStaticParams() {
	const reader = await getReader();
	const posts = await reader.collections.posts.all();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

type PostParams = {
	params: Promise<{
		slug: string;
	}>;
};

export default async function Post({ params }: PostParams) {
	const reader = await getReader();
	const { slug } = await params;
	const post = await reader.collections.posts.read(slug);

	if (!post) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-paper">
				<h1 className="font-serif text-4xl">Crônica não encontrada</h1>
			</div>
		);
	}

	const { node } = await post.content();
	const errors = Markdoc.validate(node);
	if (errors.length) console.error(errors);
	const renderable = Markdoc.transform(node);

	// LAYOUT DECISION: Does it have a cover image?
	const hasCover = !!post.coverImage;

	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />

			<main>
				{/* HEADER SECTION - DISTINCTIVE IMPACT */}
				{hasCover ? (
					// OPTION A: RICH VISUAL HEADER
					<div className="relative h-[80vh] w-full">
						<div className="absolute inset-0">
							{post.coverImage && (
								<Image
									src={post.coverImage}
									alt={post.title}
									fill
									className="object-cover"
								/>
							)}
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
						</div>
						<div className="absolute bottom-0 left-0 w-full p-8 md:p-20 text-paper">
							<div className="max-w-4xl">
								<span className="inline-block px-3 py-1 border border-paper/30 backdrop-blur-sm text-xs tracking-widest uppercase mb-6">
									{post.publishedDate}
								</span>
								<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none mb-8 text-balance">
									{post.title}
								</h1>
								<p className="font-serif text-xl md:text-2xl italic opacity-90 max-w-2xl text-balance">
									{post.excerpt}
								</p>
							</div>
						</div>
					</div>
				) : (
					// OPTION B: TYPOGRAPHIC POSTER (No Image)
					<div className="relative min-h-[70vh] w-full bg-merlot dark:bg-black text-paper flex items-center justify-center p-8 md:p-20 overflow-hidden">
						{/* Abstract Background Elements */}
						<div className="absolute top-0 right-0 w-[50vw] h-[50vw] border border-paper/10 rounded-full translate-x-1/3 -translate-y-1/3"></div>
						<div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] border border-paper/10 rounded-full -translate-x-1/3 translate-y-1/3"></div>

						<div className="relative z-10 max-w-5xl text-center">
							<div className="mb-8 flex justify-center">
								<span className="h-16 w-px bg-paper/50"></span>
							</div>
							<span className="font-sans text-xs tracking-[0.3em] uppercase opacity-70 mb-6 block">
								{post.publishedDate}
							</span>
							<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] mb-12 text-balance">
								{post.title}
							</h1>
							<div className="w-24 h-1 bg-paper/30 mx-auto mb-12"></div>
							<p className="font-serif italic text-2xl opacity-80 max-w-2xl mx-auto">
								{post.excerpt}
							</p>
						</div>
					</div>
				)}

				{/* CONTENT SECTION - EDITORIAL LAYOUT */}
				<article className="max-w-3xl mx-auto px-6 py-20 md:py-32">
					{/* Metadata */}
					<div className="flex items-center justify-between border-b border-dotted border-graphite pb-8 mb-12 font-sans text-xs tracking-widest text-graphite uppercase">
						<span>Por {post.author}</span>
						<span>Sá Marias</span>
					</div>

					{/* Markdoc Content */}
					<div className="prose-samarias">
						{Markdoc.renderers.react(renderable, React)}
					</div>

					{/* End Signoff */}
					<div className="mt-20 flex justify-center opacity-50">
						<span className="font-script text-4xl text-merlot">~ Sá ~</span>
					</div>
				</article>

				{/* NAVIGATION FOOTER */}
				<div className="bg-paper-200 dark:bg-ink py-20 text-center border-t border-graphite">
					<h3 className="font-serif text-2xl mb-8 text-ink dark:text-paper">
						Continue Lendo
					</h3>
					<Link
						href="/posts"
						className="inline-block px-8 py-3 border border-graphite text-graphite hover:bg-merlot hover:text-paper hover:border-merlot transition-all duration-300 uppercase tracking-widest text-xs no-underline"
					>
						Voltar para a Lista
					</Link>
				</div>
			</main>
			<Footer />
		</div>
	);
}
