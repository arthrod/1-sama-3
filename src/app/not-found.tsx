import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-screen flex items-center justify-center bg-paper dark:bg-paper-dark">
			<div className="text-center">
				<h1 className="font-serif text-6xl text-ink dark:text-paper mb-4">
					404
				</h1>
				<p className="font-sans text-graphite dark:text-graphite-light mb-8">
					Página não encontrada
				</p>
				<Link
					href="/"
					className="bg-merlot text-paper px-6 py-3 font-sans uppercase tracking-widest text-sm hover:bg-merlot-hover transition-colors inline-block no-underline"
				>
					Voltar ao início
				</Link>
			</div>
		</div>
	);
}
