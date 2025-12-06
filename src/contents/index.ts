import { reader } from "../keystatic/reader";

export interface Post {
  title: string;
  slug: string;
  link: string;
  excerpt: string;
  featuredImage: string | null;
  categories: readonly string[];
  publishedDate: string | null;
  author: {
    name: string;
    avatar?: string | null;
  } | Record<string, never>;
  content: {
    node: unknown;
  };
  seo: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export const fetcher = {
  posts: async () => {
    const posts = await reader.collections.posts.all();

    // Filter only published posts
    const publishedPosts = posts
      .filter(post => post.entry.status === "published")
      .map(post => ({
        title: post.entry.title,
        slug: post.slug,
        link: `/posts/${post.slug}`,
        excerpt: post.entry.excerpt,
        featuredImage: post.entry.featuredImage,
        categories: post.entry.categories,
        publishedDate: post.entry.publishedDate,
        author: post.entry.author,
        content: post.entry.content,
        seo: post.entry.seo,
      }))
      .sort((a, b) => {
        // Sort by published date, newest first
        const dateA = new Date(a.publishedDate || 0);
        const dateB = new Date(b.publishedDate || 0);
        return dateB.getTime() - dateA.getTime();
      });

    return {
      items: publishedPosts,
      count: publishedPosts.length,
    };
  },
};