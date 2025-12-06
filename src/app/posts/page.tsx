"server-only"
import { createGitHubReader } from '@keystatic/core/reader/github';
import keystaticConfig from '../../../keystatic.config';
import Link from 'next/link';

// Force this route to be completely dynamic - never evaluated at build time
export const dynamic = "force-dynamic";

// 1. Create a reader that reads from GitHub API
const reader = createGitHubReader(keystaticConfig, {
    repo: 'arthrod/1-sama-3',
    token: process.env.KEYSTATIC_GITHUB_TOKEN,
});

export default async function Page() {
  // 2. Read the "Posts" collection
  const posts = await reader.collections.posts.all();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
