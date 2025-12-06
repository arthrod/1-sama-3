"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper dark:bg-paper-dark">
      <div className="text-center">
        <h1 className="font-serif text-4xl text-ink dark:text-paper mb-4">
          Algo deu errado
        </h1>
        <p className="font-sans text-graphite dark:text-graphite-light mb-8">
          {error.message || "Ocorreu um erro inesperado."}
        </p>
        <button
          onClick={() => reset()}
          className="bg-merlot text-paper px-6 py-3 font-sans uppercase tracking-widest text-sm hover:bg-merlot-hover transition-colors"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}
