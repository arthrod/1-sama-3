import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function GenaSection() {
	const { ref: circleRef, y: circleY } = useParallax({ speed: -0.05 });

	return (
		<section
			id="gena"
			className="section flex items-center relative overflow-hidden py-20 bg-paper"
		>
			<div className="container mx-auto px-6 lg:px-20 relative z-10">
				<div className="flex flex-col lg:flex-row justify-between items-start">
					<div className="w-full lg:w-2/3">
						<motion.h2
							className="font-serif font-black text-ink-light text-[4rem] lg:text-[6rem] tracking-tighter leading-none mb-16"
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true, margin: "-100px" }}
						>
							GENA
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
									A prima que expande horizontes. Com paixão pela terra, Gena
									traz para o Vinhedo Samarias uma visão que transcende a bebida
									e abrange a experiência completa do vinho.
								</p>
								<p className="font-sans text-base leading-relaxed text-ink-faint">
									Seu sabor é a ousadia, a ruptura consciente, o futuro que
									honra o passado sem ser aprisionado por ele. Cada taça é um
									convite a perceber novos horizontes.
								</p>
							</div>
							<div className="w-full lg:w-1/2">
								<span className="font-sans text-sm uppercase tracking-widest opacity-70 text-ink">
									A Inovadora Visionária
								</span>
								<div className="w-12 h-0.5 bg-merlot my-6"></div>
								<p className="font-sans font-light italic text-lg text-ink">
									&ldquo;Criamos vinho para o futuro, nutrido por nossas raízes. Não é
									uma questão de escolher entre tradição e inovação, mas de
									uni-las com respeito e ousadia.&rdquo;
								</p>
							</div>
						</motion.div>
					</div>
					<div className="w-full lg:w-1/3 mt-20 lg:mt-0 relative min-h-[300px]">
						<motion.div
							className="w-64 h-64 lg:w-96 lg:h-96 rounded-full border-2 border-graphite-light opacity-20 absolute top-0 right-0"
							animate={{ rotate: 360 }}
							transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
						></motion.div>
						<motion.div
							className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border border-graphite-light opacity-10 absolute bottom-0 left-0"
							animate={{
								y: [0, 15, 0],
							}}
							transition={{
								duration: 6,
								repeat: Infinity,
								repeatType: "reverse",
							}}
						></motion.div>
					</div>
				</div>
			</div>

			{/* Geometric elements */}
			<div className="geometric-pattern azulejo absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none"></div>
			<motion.div
				ref={circleRef}
				style={{ y: circleY }}
				className="geometric-pattern absolute bottom-1/4 left-1/3 w-[25vw] h-[25vw] rounded-full bg-graphite-light opacity-5 pointer-events-none"
			></motion.div>
		</section>
	);
}
