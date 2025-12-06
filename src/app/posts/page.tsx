import Link from "next/link";

export default function PostsPage() {
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

        {/* Empty State */}
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
      </div>
    </div>
  );
}