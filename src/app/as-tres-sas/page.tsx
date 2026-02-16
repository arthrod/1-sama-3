import { Footer, Navigation, Newsletter } from "@/components";

export const metadata = {
	title: "As Três Sás | Sá Marias",
	description:
		"Conheça as três mulheres por trás do Vinhedo Sá Marias: Bernadete, Gena e Maria Rita.",
};

export default function AsTresSasPage() {
	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />

			<main className="pt-32 pb-24">
				{/* Header */}
				<div className="container mx-auto px-6 mb-20 text-center">
					<span className="font-sans text-xs tracking-[0.4em] uppercase text-graphite dark:text-graphite-lighter mb-4 block">
						Nossa História
					</span>
					<h1 className="font-serif text-6xl md:text-8xl text-ink dark:text-paper mb-8">
						As Três Sás
					</h1>
					<div className="w-24 h-1 bg-merlot mx-auto" />
				</div>

				{/* BERNADETE SECTION */}
				<section className="py-24 bg-ink text-paper">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div className="order-2 lg:order-1">
								<span className="text-xs tracking-[0.3em] uppercase text-merlot-light mb-4 block">
									A Guardiã da Tradição
								</span>
								<h2 className="font-serif text-5xl md:text-7xl text-paper mb-8">
									Bernadete
								</h2>
								<div className="w-16 h-1 bg-merlot-light mb-8" />
								<p className="text-paper/80 leading-relaxed mb-6">
									A Samaria que transformou tradição em ciência. Bernadete trouxe
									os estudos formais em enologia para o Vinhedo Samarias,
									mesclando o conhecimento empírico de sua terra com técnicas
									contemporâneas de viticultura.
								</p>
								<p className="text-paper/80 leading-relaxed mb-8">
									Seu sabor é o equilíbrio, a transformação cuidadosa, o respeito
									ao passado com olhos no futuro. Cada taça é um testemunho de
									tradição que não teme a evolução.
								</p>
								<blockquote className="border-l-2 border-merlot-light pl-6 italic text-paper/70">
									&ldquo;A tradição nos dá raízes; a inovação nos dá asas. O
									verdadeiro artesão do vinho sabe quando plantar os pés e quando
									permitir-se voar.&rdquo;
								</blockquote>
							</div>
							<div className="order-1 lg:order-2 relative">
								<div className="aspect-[4/5] bg-paper/5 border border-paper/10 flex items-center justify-center">
									<span className="font-script text-9xl text-paper/10">B</span>
								</div>
								<div className="absolute -bottom-4 -right-4 w-32 h-32 border border-merlot-light/30" />
							</div>
						</div>
					</div>
				</section>

				{/* GENA SECTION */}
				<section className="py-24 bg-paper dark:bg-paper-dark">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div className="relative">
								<div className="aspect-[4/5] bg-paper-200 dark:bg-ink border border-graphite/10 dark:border-graphite flex items-center justify-center">
									<span className="font-script text-9xl text-graphite/10 dark:text-paper/10">
										G
									</span>
								</div>
								<div className="absolute -bottom-4 -left-4 w-32 h-32 border border-merlot/30 dark:border-merlot-light/30" />
							</div>
							<div>
								<span className="text-xs tracking-[0.3em] uppercase text-merlot dark:text-merlot-light mb-4 block">
									A Inovadora Visionária
								</span>
								<h2 className="font-serif text-5xl md:text-7xl text-ink dark:text-paper mb-8">
									Gena
								</h2>
								<div className="w-16 h-1 bg-merlot dark:bg-merlot-light mb-8" />
								<p className="text-ink-faint dark:text-paper/80 leading-relaxed mb-6">
									A prima que expande horizontes. Com paixão pela terra, Gena
									traz para o Vinhedo Samarias uma visão que transcende a bebida
									e abrange a experiência completa do vinho.
								</p>
								<p className="text-ink-faint dark:text-paper/80 leading-relaxed mb-8">
									Seu sabor é a ousadia, a ruptura consciente, o futuro que
									honra o passado sem ser aprisionado por ele. Cada taça é um
									convite a perceber novos horizontes.
								</p>
								<blockquote className="border-l-2 border-merlot dark:border-merlot-light pl-6 italic text-graphite dark:text-paper/70">
									&ldquo;Criamos vinho para o futuro, nutrido por nossas raízes.
									Não é uma questão de escolher entre tradição e inovação, mas
									de uni-las com respeito e ousadia.&rdquo;
								</blockquote>
							</div>
						</div>
					</div>
				</section>

				{/* MARIA RITA SECTION */}
				<section className="py-24 bg-paper-200 dark:bg-ink">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div className="order-2 lg:order-1">
								<span className="text-xs tracking-[0.3em] uppercase text-merlot dark:text-merlot-light mb-4 block">
									A Irmã Pragmática
								</span>
								<h2 className="font-serif text-5xl md:text-7xl text-ink dark:text-paper mb-8">
									Maria Rita
								</h2>
								<div className="w-16 h-1 bg-merlot dark:bg-merlot-light mb-8" />
								<p className="text-ink-faint dark:text-paper/80 leading-relaxed mb-6">
									As mãos da irmã maior que plantaram as primeiras videiras em
									solo mineiro. Carregando consigo as tradições mineiras, Maria
									Rita deu início ao legado Samarias com determinação inabalável
									em tempos onde vinicultura era território exclusivamente
									masculino.
								</p>
								<p className="text-ink-faint dark:text-paper/80 leading-relaxed mb-8">
									Seu sabor é a raiz, a base, a tradição que sustenta. Cada taça
									carrega a força primordial que permitiu ao Vinhedo Samarias
									existir.
								</p>
								<blockquote className="border-l-2 border-merlot dark:border-merlot-light pl-6 italic text-graphite dark:text-paper/70">
									&ldquo;O vinho não é apenas o que fermenta nos barris, mas o
									que amadurece em nossas almas.&rdquo;
								</blockquote>
							</div>
							<div className="order-1 lg:order-2 relative">
								<div className="aspect-[4/5] bg-paper dark:bg-paper-dark border border-graphite/10 dark:border-graphite flex items-center justify-center">
									<span className="font-script text-9xl text-graphite/10 dark:text-paper/10">
										MR
									</span>
								</div>
								<div className="absolute -bottom-4 -right-4 w-32 h-32 border border-merlot/30 dark:border-merlot-light/30" />
							</div>
						</div>
					</div>
				</section>

				{/* LEGACY SECTION */}
				<section className="py-24 bg-ink text-paper">
					<div className="max-w-4xl mx-auto px-6 text-center">
						<span className="text-xs tracking-[0.3em] uppercase text-merlot-light mb-4 block">
							O Legado
						</span>
						<h2 className="font-serif text-4xl md:text-5xl text-paper mb-8">
							Três Mulheres, Um Vinhedo
						</h2>
						<p className="text-paper/80 leading-relaxed mb-12 max-w-2xl mx-auto">
							Juntas, Bernadete, Gena e Maria Rita representam a essência do
							Vinhedo Sá Marias: a harmonia entre tradição e inovação, o
							respeito à terra e a ousadia de sonhar. Cada garrafa que produzimos
							carrega um pouco de cada uma delas.
						</p>
						<div className="grid grid-cols-3 gap-8">
							<div className="text-center">
								<span className="block font-serif text-5xl font-bold text-merlot-light mb-2">
									3
								</span>
								<span className="text-xs uppercase tracking-widest text-paper/60">
									Gerações
								</span>
							</div>
							<div className="text-center">
								<span className="block font-serif text-5xl font-bold text-merlot-light mb-2">
									1
								</span>
								<span className="text-xs uppercase tracking-widest text-paper/60">
									Família
								</span>
							</div>
							<div className="text-center">
								<span className="block font-serif text-5xl font-bold text-merlot-light mb-2">
									∞
								</span>
								<span className="text-xs uppercase tracking-widest text-paper/60">
									Paixão
								</span>
							</div>
						</div>
					</div>
				</section>

				{/* NEWSLETTER */}
				<Newsletter />
			</main>

			<Footer />
		</div>
	);
}
