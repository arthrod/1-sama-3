import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Markdoc from "@markdoc/markdoc";
import { reader } from "../../../keystatic/reader";
import type { Node } from "@markdoc/markdoc";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

interface Post {
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
  content: () => Promise<{ node: Node }>;
  seo: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

const query = React.cache(async (_slug: string) => {
  try {
    const posts = await reader.collections.posts.all();
    const publishedPosts = posts
      .filter(post => post.entry.status === "published")
      .map((post: { entry: { status: string; title: string; excerpt: string; featuredImage: string | null; categories: readonly string[]; publishedDate: string | null; author: { name: string; avatar?: string | null } | Record<string, never>; content: () => Promise<{ node: Node }>; seo: { metaTitle?: string; metaDescription?: string } }; slug: string }): Post => {
        return {
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
        };
      })
      .sort((a: Post, b: Post): number => {
        const dateA = new Date(a.publishedDate || 0);
        const dateB = new Date(b.publishedDate || 0);
        return dateB.getTime() - dateA.getTime();
      });

    const slug = decodeURIComponent(_slug).toLowerCase();
    for (let i = 0; i < publishedPosts.length; i++) {
      const prev = publishedPosts[i - 1];
      const curr = publishedPosts[i];
      const next = publishedPosts[i + 1];
      if (curr.slug === slug) {
        return {
          data: curr,
          prev: prev ?
              {
                name: prev.title,
                link: prev.link,
              } :
            undefined,
          next: next ?
              {
                name: next.title,
                link: next.link,
              } :
            undefined,
        };
      }
    }
    return undefined;
  } catch {
    return undefined;
  }
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await query(slug);
  if (!data) {
    return notFound();
  }
  return {
    title: data.data.seo?.metaTitle || data.data.title,
    description: data.data.seo?.metaDescription || data.data.excerpt,
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = await query(slug);
  if (!data) {
    return notFound();
  }

  // Get the content from the post
  const content = await data.data.content();
  const markdocNode = content.node;

  return (
    <div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 pt-24">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 font-serif text-ink-faint dark:text-graphite-lighter hover:text-ink dark:hover:text-paper transition-colors"
        >
          ← Voltar para Crônicas da Adega
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          {/* Categories */}
          {data.data.categories && data.data.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {data.data.categories.map((category: string) => (
                <span
                  key={category}
                  className="text-xs font-sans uppercase tracking-wider text-merlot dark:text-merlot-light"
                >
                  {category}
                </span>
              ))}
            </div>
          )}

          <h1 className="font-serif text-4xl md:text-5xl text-ink dark:text-paper mb-6">
            {data.data.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-graphite dark:text-graphite-light">
            <time dateTime={data.data.publishedDate || ""}>
              {data.data.publishedDate &&
                new Date(data.data.publishedDate).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }
            </time>
            {data.data.author && 'name' in data.data.author && data.data.author.name && (
              <span className="font-sans italic">
                por {data.data.author.name}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {data.data.featuredImage && (
          <div className="aspect-[16/9] relative overflow-hidden mb-12 border-2 border-dotted border-graphite-light">
            <Image
              src={data.data.featuredImage}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Excerpt */}
        {data.data.excerpt && (
          <div className="mb-12 p-6 bg-paper-200 dark:bg-ink border border-dotted border-graphite">
            <p className="font-serif text-lg text-ink dark:text-paper italic">
              {data.data.excerpt}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-p:font-serif prose-p:leading-relaxed prose-strong:text-ink dark:prose-strong:text-paper prose-a:text-merlot dark:prose-a:text-merlot-light prose-a:no-underline hover:prose-a:underline">
          {markdocNode && (
            <div dangerouslySetInnerHTML={{ __html: Markdoc.renderers.html(Markdoc.transform(markdocNode)) }} />
          )}
        </div>

        {/* Navigation */}
        {(data.prev || data.next) && (
          <nav className="mt-16 pt-8 border-t border-graphite-lighter dark:border-graphite-light">
            <div className="flex justify-between items-center">
              {data.prev && (
                <Link
                  href={data.prev.link}
                  className="font-serif text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors"
                >
                  ← {data.prev.name}
                </Link>
              )}
              <div className="flex-1"></div>
              {data.next && (
                <Link
                  href={data.next.link}
                  className="font-serif text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors text-right"
                >
                  {data.next.name} →
                </Link>
              )}
            </div>
          </nav>
        )}
      </article>
    </div>
  );
}