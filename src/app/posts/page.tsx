"use client";

import { reader } from "@/keystatic/reader";
import { Component } from "@markdoc/markdoc";
import { useDocuments } from "@/keystatic/use-documents";
import { Link } from "next/link";
import Image from "next/image";

export default function PostsPage() {
  const posts = useDocuments(reader.collections.posts);

  if (!posts) {
    return (
      <div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark flex items-center justify-center">
        <p className="font-serif text-ink dark:text-paper">Carregando...</p>
      </div>
    );
  }

  // Filter only published posts
  const publishedPosts = posts.filter((post) => {
    const node = post.node;
    if (!node) return false;

    const statusField = node?.fields.find((f: any) => f.name === "status");
    return statusField?.value === "published";
  });

  return (
    <div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-script text-5xl md:text-7xl text-ink dark:text-paper mb-6">
            Crônicas da Adega
          </h1>
          <p className="font-serif text-lg text-ink-faint dark:text-graphite-lighter max-w-3xl mx-auto">
            Histórias, saberes e experiências do nosso vinhedo. Acompanhe a jornada
            dos nossos vinhos desde a colheita até a taça.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => {
            const node = post.node;
            if (!node) return null;

            const titleField = node.fields.find((f: any) => f.name === "title");
            const excerptField = node.fields.find((f: any) => f.name === "excerpt");
            const publishedDateField = node.fields.find((f: any) => f.name === "publishedDate");
            const featuredImageField = node.fields.find((f: any) => f.name === "featuredImage");
            const authorField = node.fields.find((f: any) => f.name === "author");
            const categoriesField = node.fields.find((f: any) => f.name === "categories");

            return (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group block bg-paper dark:bg-paper-dark border-2 border-transparent hover:border-merlot/50 transition-all duration-500"
              >
                {/* Featured Image */}
                {featuredImageField?.value && (
                  <div className="aspect-[4/3] relative overflow-hidden bg-paper-texture">
                    <Image
                      src={featuredImageField.value}
                      alt=""
                      fill
                      className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
                  </div>
                )}

                <div className="p-6">
                  {/* Categories */}
                  {categoriesField?.value && Array.isArray(categoriesField.value) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {categoriesField.value.map((category: string) => (
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
                    {titleField?.value}
                  </h2>

                  {/* Excerpt */}
                  {excerptField?.value && (
                    <p className="font-serif text-ink-faint dark:text-graphite-lighter mb-4 line-clamp-3">
                      {excerptField.value}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-graphite dark:text-graphite-light">
                    <span className="font-sans">
                      {new Date(publishedDateField?.value || "").toLocaleDateString(
                        "pt-BR",
                        { day: "numeric", month: "long", year: "numeric" }
                      )}
                    </span>
                    {authorField?.value?.name && (
                      <span className="font-sans italic">
                        por {authorField.value.name}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {publishedPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="font-serif text-ink-faint dark:text-graphite-lighter text-lg">
              Nenhum post publicado ainda. Volte em breve!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}