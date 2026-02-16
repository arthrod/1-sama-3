export function SkipLink() {
	return (
		<a
			href="#main-content"
			className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-paper focus:text-ink focus:px-6 focus:py-3 focus:font-bold focus:shadow-lg focus:rounded-md transition-all duration-300 ease-in-out"
		>
			Pular para o conteúdo principal
		</a>
	);
}
