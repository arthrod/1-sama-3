import Link from "next/link";
import Image from "next/image";
import { reader } from "@/keystatic/reader";

export default async function PostsPage() {
  const posts = await reader.collections.posts.all();

  // Filter only published posts
  const publishedPosts = posts.filter((post) => post.entry.status === "published");

  return (
    <div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-script text-5xl md:text-7xl text-ink dark:text-paper mb-6">
            Crônicas da Adega
          </h1>
          <p className="font-serif text-lg text-ink-faint dark:text-graphite-lighter max-w-3xl mx-auto">
            Histórias, sabores e experiências do nosso vinhedo. Acompanhe a jornada
            dos nossos vinhos desde a colheita até a taça.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block bg-paper dark:bg-paper-dark border-2 border-transparent hover:border-merlot/50 transition-all duration-500"
            >
              {/* Featured Image */}
              {post.entry.featuredImage && (
                <div className="aspect-[4/3] relative overflow-hidden bg-paper-texture">
                  <Image
                    src={post.entry.featuredImage}
                    alt=""
                    fill
                    className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                </div>
              )}

              <div className="p-6">
                {/* Categories */}
                {post.entry.categories && post.entry.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.entry.categories.map((category) => (
                      <span
                        key={category}
                        className="text-xs font-sans uppercase tracking-wider text-merlot dark:text-merlot-light"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h2 className="font-serif text-2xl text-ink dark:text-paper mb-3 group-hover:text-merlot dark:group-hover:text-merlot-light transition-colors">
                  {post.entry.title}
                </h2>

                {/* Excerpt */}
                {post.entry.excerpt && (
                  <p className="font-serif text-ink-faint dark:text-graphite-lighter mb-4 line-clamp-3">
                    {post.entry.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-graphite dark:text-graphite-light">
                  <span className="font-sans">
                    {post.entry.publishedDate &&
                      new Date(post.entry.publishedDate).toLocaleDateString("pt-BR", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    }
                  </span>
                  {post.entry.author?.name && (
                    <span className="font-sans italic">
                      por {post.entry.author.name}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {publishedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-ink-faint dark:text-graphite-lighter text-lg">
              Nenhum post publicado ainda. Volte em breve!
            </p>
            <p className="font-serif text-ink-faint dark:text-graphite-lighter text-sm mt-4">
              Para gerenciar posts, acesse a área de{" "}
              <Link href="/keystatic" className="text-merlot dark:text-merlot-light underline">
                administração
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
}