import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Markdoc from "@markdoc/markdoc";
import { reader } from "../../../keystatic/reader";

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
  content: {
    node: unknown;
  };
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
      .map((post: unknown): Post => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const p = post as { entry: any; slug: string };
        return {
          title: p.entry.title,
          slug: p.slug,
          link: `/posts/${p.slug}`,
          excerpt: p.entry.excerpt,
          featuredImage: p.entry.featuredImage,
          categories: p.entry.categories,
          publishedDate: p.entry.publishedDate,
          author: p.entry.author,
          content: p.entry.content,
          seo: p.entry.seo,
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

  const PostLayout = ({ data, prev, next }: { data: Post; prev?: { name: string; link: string }; next?: { name: string; link: string } }) => {

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
            {data.categories && data.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {data.categories.map((category: string) => (
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
              {data.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-graphite dark:text-graphite-light">
              <time dateTime={data.publishedDate || ""}>
                {data.publishedDate &&
                  new Date(data.publishedDate).toLocaleDateString("pt-BR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })
                }
              </time>
              {data.author && 'name' in data.author && data.author.name && (
                <span className="font-sans italic">
                  por {data.author.name}
                </span>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {data.featuredImage && (
            <div className="aspect-[16/9] relative overflow-hidden mb-12 border-2 border-dotted border-graphite-light">
              <Image
                src={data.featuredImage}
                alt=""
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Excerpt */}
          {data.excerpt && (
            <div className="mb-12 p-6 bg-paper-200 dark:bg-ink border border-dotted border-graphite">
              <p className="font-serif text-lg text-ink dark:text-paper italic">
                {data.excerpt}
              </p>
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-p:font-serif prose-p:leading-relaxed prose-strong:text-ink dark:prose-strong:text-paper prose-a:text-merlot dark:prose-a:text-merlot-light prose-a:no-underline hover:prose-a:underline">
            {data.content?.node && (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              <div dangerouslySetInnerHTML={{ __html: Markdoc.renderers.html(Markdoc.transform(data.content.node as any)) }} />
            )}
          </div>

          {/* Navigation */}
          {(prev || next) && (
            <nav className="mt-16 pt-8 border-t border-graphite-lighter dark:border-graphite-light">
              <div className="flex justify-between items-center">
                {prev && (
                  <Link
                    href={prev.link}
                    className="font-serif text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors"
                  >
                    ← {prev.name}
                  </Link>
                )}
                <div className="flex-1"></div>
                {next && (
                  <Link
                    href={next.link}
                    className="font-serif text-ink dark:text-paper hover:text-merlot dark:hover:text-merlot-light transition-colors text-right"
                  >
                    {next.name} →
                  </Link>
                )}
              </div>
            </nav>
          )}
        </article>
      </div>
    );
  };

  return <PostLayout data={data.data} prev={data.prev} next={data.next} />;
}