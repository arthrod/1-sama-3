"server-only";
// Import the fetch patch to ensure User-Agent header is set for GitHub API
import { createGitHubReader } from "@keystatic/core/reader/github";
import Link from "next/link";
import keystaticConfig from "../../../keystatic.config";
import "../../lib/keystatic-client";

// Force this route to be completely dynamic - never evaluated at build time
export const dynamic = "force-dynamic";

export default async function Page() {
	// Initialize the reader inside the component to ensure process.env is populated
	// and the fetch patch has been applied.
	const reader = createGitHubReader(keystaticConfig, {
		repo: "arthrod/1-sama-3",
		token: process.env.KEYSTATIC_GITHUB_TOKEN,
	});

	// 2. Read the "Posts" collection
	const posts = await reader.collections.posts.all();

	return (
		<div>
			<h1>Posts</h1>
			<ul>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link href={`/posts/${post.slug}`}>{post.entry.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
