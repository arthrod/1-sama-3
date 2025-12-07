import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function MariaRitaSection() {
	const { ref: circleRef, y: circleY } = useParallax({ speed: 0.05 });

	return (
		<section
			id="maria-rita"
			className="section flex items-center relative overflow-hidden py-20 bg-paper-200"
		>
			<div className="container mx-auto px-6 lg:px-20 relative z-10">
				<div className="flex flex-col lg:flex-row justify-between items-center">
					<div className="w-full lg:w-2/3">
						<motion.h2
							className="font-serif font-black text-ink-light text-[5rem] lg:text-[7rem] tracking-tighter leading-none mb-10"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							MARIA RITA
						</motion.h2>
						<motion.div
							className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-16 mt-16"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							<div className="w-full lg:w-1/2">
								<p className="font-sans text-base leading-relaxed mb-8 text-ink-faint">
									As mãos da irmã maior que plantaram as primeiras videiras em
									solo mineiro. Carregando consigo as tradições mineiras, Maria
									Rita deu início ao legado Samarias com determinação inabalável
									em tempos onde vinicultura era território exclusivamente
									masculino.
								</p>
								<p className="font-sans text-base leading-relaxed text-ink-faint">
									Seu sabor é a raiz, a base, a tradição que sustenta. Cada taça
									carrega a força primordial que permitiu ao Vinhedo Samarias
									existir.
								</p>
							</div>
							<div className="w-full lg:w-1/2">
								<span className="font-sans text-sm uppercase tracking-widest opacity-70 text-ink">
									A Irmã Pragmática
								</span>
								<div className="w-12 h-0.5 bg-merlot my-6"></div>
								<p className="font-sans font-light italic text-lg text-ink">
									&ldquo;O vinho não é apenas o que fermenta nos barris, mas o
									que amadurece em nossas almas.&rdquo;
								</p>
							</div>
						</motion.div>
					</div>
					<div className="w-full lg:w-1/3 mt-20 lg:mt-0 relative min-h-[300px]">
						<motion.div
							className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-2 border-graphite-light opacity-30 absolute top-0 right-0"
							animate={{
								y: [0, -15, 0],
							}}
							transition={{
								duration: 4,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						></motion.div>
						<motion.div
							className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border border-graphite-light opacity-20 absolute bottom-0 left-0"
							animate={{
								y: [0, 15, 0],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						></motion.div>
					</div>
				</div>
			</div>

			{/* Geometric elements */}
			<motion.div
				ref={circleRef}
				style={{ y: circleY }}
				className="geometric-pattern absolute top-1/3 right-1/4 w-[38vw] h-[38vw] rounded-full bg-graphite-light opacity-5 pointer-events-none"
			></motion.div>
			<div className="geometric-pattern azulejo absolute bottom-0 left-0 w-full h-1/2 opacity-5 pointer-events-none"></div>
		</section>
	);
}
