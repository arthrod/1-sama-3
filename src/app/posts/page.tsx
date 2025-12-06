import Link from 'next/link';
import Image from 'next/image';
import { reader } from '../../keystatic/reader';

export default async function Page() {
  // Read all posts from the collection
  const posts = await reader.collections.posts.all();

  // Filter only published posts
  const publishedPosts = posts.filter(post => post.entry.status === 'published');

  return (
    <div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="font-serif text-4xl md:text-5xl text-ink dark:text-paper mb-12">
          Crônicas da Adega
        </h1>

        {publishedPosts.length === 0 ? (
          <p className="font-serif text-lg text-graphite dark:text-graphite-light">
            Nenhuma crônica publicada ainda. Volte em breve!
          </p>
        ) : (
          <div className="space-y-12">
            {publishedPosts.map(post => (
              <article key={post.slug} className="border-b border-graphite-lighter dark:border-graphite-light pb-8">
                <Link
                  href={`/posts/${post.slug}`}
                  className="group block hover:opacity-80 transition-opacity"
                >
                  {post.entry.featuredImage && (
                    <div className="aspect-[16/9] relative overflow-hidden mb-6 border-2 border-dotted border-graphite-light">
                      <Image
                        src={post.entry.featuredImage}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    {post.entry.categories && post.entry.categories.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.entry.categories.map((category: string) => (
                          <span
                            key={category}
                            className="text-xs font-sans uppercase tracking-wider text-merlot dark:text-merlot-light"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}

                    <h2 className="font-serif text-2xl md:text-3xl text-ink dark:text-paper group-hover:text-merlot dark:group-hover:text-merlot-light transition-colors">
                      {post.entry.title}
                    </h2>

                    {post.entry.excerpt && (
                      <p className="font-serif text-lg text-graphite dark:text-graphite-light line-clamp-3">
                        {post.entry.excerpt}
                      </p>
                    )}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-graphite dark:text-graphite-light">
                      <time dateTime={post.entry.publishedDate || ""}>
                        {post.entry.publishedDate &&
                          new Date(post.entry.publishedDate).toLocaleDateString("pt-BR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })
                        }
                      </time>
                      {post.entry.author?.name && (
                        <span className="font-sans italic">
                          por {post.entry.author.name}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}