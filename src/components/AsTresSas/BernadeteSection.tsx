import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function BernadeteSection() {
	const { ref: patternRef1, y: y1 } = useParallax({ speed: 0.2 });
	const { ref: patternRef2, y: y2 } = useParallax({ speed: -0.1 });

	return (
		<section
			id="bernadete"
			className="section flex items-center relative overflow-visible py-20 bg-ink-light text-paper"
		>
			<div className="container mx-auto px-4 lg:px-12 relative z-10">
				<div className="flex flex-col items-end lg:items-end">
					<motion.h2
						className="font-serif font-black text-paper text-[5rem] lg:text-[8rem] tracking-tighter leading-none mb-16 mr-0 text-right w-[110%] overflow-visible ml-[-10vw]"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.2, ease: "easeOut" }}
						viewport={{ once: true, margin: "-100px" }}
					>
						BERNADETE
					</motion.h2>

					<div className="w-full h-0.5 bg-paper opacity-20 my-16"></div>

					<motion.div
						className="flex flex-col lg:flex-row-reverse justify-between w-full mt-8"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 1.0, delay: 0.3, ease: "easeOut" }}
						viewport={{ once: true, margin: "-100px" }}
					>
						<div className="w-full lg:w-1/3 mb-12 lg:mb-0 lg:pl-12 text-right">
							<span className="font-sans text-sm uppercase tracking-widest text-paper opacity-70">
								A Guardiã da Tradição
							</span>
							<div className="w-12 h-0.5 bg-paper opacity-80 my-6 ml-auto"></div>
							<p className="font-sans font-light italic text-lg text-paper">
								&ldquo;A tradição nos dá raízes; a inovação nos dá asas. O
								verdadeiro artesão do vinho sabe quando plantar os pés e quando
								permitir-se voar.&rdquo;
							</p>
						</div>

						<div className="w-full lg:w-1/2 text-right lg:text-right">
							<p className="font-sans text-base text-paper leading-relaxed mb-8">
								A Samaria que transformou tradição em ciência. Bernadete trouxe
								os estudos formais em enologia para o Vinhedo Samarias,
								mesclando o conhecimento empírico de sua terra com técnicas
								contemporâneas de viticultura.
							</p>
							<p className="font-sans text-base text-paper leading-relaxed">
								Seu sabor é o equilíbrio, a transformação cuidadosa, o respeito
								ao passado com olhos no futuro. Cada taça é um testemunho de
								tradição que não teme a evolução.
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Geometric elements */}
			<motion.div
				ref={patternRef1}
				style={{ y: y1 }}
				className="geometric-pattern absolute top-1/4 left-1/5 w-[30vw] h-[18vw] border border-paper opacity-10"
				initial={{ opacity: 0, x: 50 }}
				whileInView={{ opacity: 0.1, x: 0 }}
				transition={{ duration: 1.5, delay: 0.5 }}
				viewport={{ once: true }}
			></motion.div>
			<motion.div
				ref={patternRef2}
				style={{ y: y2 }}
				className="geometric-pattern absolute bottom-1/3 right-1/6 w-48 h-48 lg:w-64 lg:h-64 rounded-full border border-paper opacity-15"
				initial={{ opacity: 0, x: 30 }}
				whileInView={{ opacity: 0.15, x: 0 }}
				transition={{ duration: 1.5, delay: 0.7 }}
				viewport={{ once: true }}
			></motion.div>
			<motion.div
				className="geometric-pattern absolute bottom-0 right-0 w-full h-1/2 diagonal-lines opacity-5"
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 0.05, x: 0 }}
				transition={{ duration: 1.5, delay: 0.9 }}
				viewport={{ once: true }}
			></motion.div>
		</section>
	);
}
