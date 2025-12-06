import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { reader } from "@/keystatic/reader";
import Markdoc from "@markdoc/markdoc";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug, {
    resolveLinkedFiles: true,
  });

  if (!post || post.status !== "published") {
    notFound();
  }

  // Get the content from the markdoc field
  // The content field in Keystatic with markdoc type provides the node directly
  const markdocNode = post.content?.node;

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
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map((category) => (
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
            {post.title}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-graphite dark:text-graphite-light">
            <time dateTime={post.publishedDate || ""}>
              {post.publishedDate &&
                new Date(post.publishedDate).toLocaleDateString("pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
              }
            </time>
            {post.author?.name && (
              <span className="font-sans italic">
                por {post.author.name}
              </span>
            )}
          </div>
        </header>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="aspect-[16/9] relative overflow-hidden mb-12 border-2 border-dotted border-graphite-light">
            <Image
              src={post.featuredImage}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Excerpt */}
        {post.excerpt && (
          <div className="mb-12 p-6 bg-paper-200 dark:bg-ink border border-dotted border-graphite">
            <p className="font-serif text-lg text-ink dark:text-paper italic">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-p:font-serif prose-p:leading-relaxed prose-strong:text-ink dark:prose-strong:text-paper prose-a:text-merlot dark:prose-a:text-merlot-light prose-a:no-underline hover:prose-a:underline">
          {markdocNode && (
            <div dangerouslySetInnerHTML={{ __html: Markdoc.renderers.html(Markdoc.transform(markdocNode)) }} />
          )}
        </div>
      </article>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/posts"
          className="inline-flex items-center gap-2 font-serif text-ink-faint dark:text-graphite-lighter hover:text-ink dark:hover:text-paper transition-colors"
        >
          ← Voltar para Crônicas da Adega
        </Link>
      </div>
    </div>
  );
}