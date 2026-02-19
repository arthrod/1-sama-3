"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Newsletter() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
		"idle",
	);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim() || !email.trim()) {
			return;
		}

		setStatus("loading");
	};

	useEffect(() => {
		let successTimer: NodeJS.Timeout;

		if (status === "loading") {
			successTimer = setTimeout(() => {
				setStatus("success");
				setName("");
				setEmail("");
			}, 1000);
		}

		return () => {
			clearTimeout(successTimer);
		};
	}, [status]);

	return (
		<section
			id="newsletter"
			className="py-32 bg-ink text-paper relative overflow-hidden"
		>
			{/* Decorative Elements */}
			<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 border border-paper rounded-full" />
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-paper rounded-full" />
			</div>

			<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
				<div className="inline-block border-2 border-dotted border-graphite px-8 py-16 bg-black/50 backdrop-blur-sm relative min-w-[320px] md:min-w-[480px]">
					{/* Corner Accents */}
					<div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-paper" />
					<div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-paper" />
					<div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-paper" />
					<div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-paper" />

					<span className="text-[10px] uppercase tracking-widest text-merlot-light block mb-6">
						Newsletter Exclusiva
					</span>

					<h2 className="font-serif text-4xl md:text-6xl mb-6 text-paper">
						Crônicas da Adega
					</h2>

					<p className="font-serif italic text-graphite-lighter mb-10 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
						&ldquo;Apenas o essencial permanece.&rdquo;
						<br />
						Junte-se à nossa lista para acesso exclusivo à Colheita de Inverno
						2025.
					</p>

					<div className="relative min-h-[80px]">
						<AnimatePresence mode="wait">
							{status === "success" ? (
								<motion.div
									key="success"
									initial={{ opacity: 0, y: 10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="flex flex-col items-center justify-center space-y-2 py-2"
								>
									<div className="w-12 h-12 rounded-full bg-paper/10 flex items-center justify-center mb-2">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6 text-merlot-light"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											role="img"
											aria-label="Ícone de sucesso"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 className="font-serif text-xl text-paper">
										Bem-vindo à família
									</h3>
									<p className="text-sm text-graphite-lighter">
										Sua inscrição foi confirmada com sucesso.
									</p>
								</motion.div>
							) : (
								<motion.form
									key="form"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									id="newsletter-form"
									onSubmit={handleSubmit}
									className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
								>
									<label htmlFor="subscriber-name" className="sr-only">
										Seu Nome
									</label>
									<input
										type="text"
										id="subscriber-name"
										name="name"
										placeholder="Seu Nome"
										required
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="flex-1 bg-transparent border-b border-graphite py-3 px-4 text-paper placeholder-graphite-light focus:outline-none focus:border-merlot transition-colors font-serif"
										disabled={status === "loading"}
									/>
									<label htmlFor="subscriber-email" className="sr-only">
										Seu E-mail
									</label>
									<input
										type="email"
										id="subscriber-email"
										name="email"
										placeholder="Seu E-mail"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="flex-1 bg-transparent border-b border-graphite py-3 px-4 text-paper placeholder-graphite-light focus:outline-none focus:border-merlot transition-colors font-serif"
										disabled={status === "loading"}
									/>
									<button
										type="submit"
										id="subscribe-btn"
										disabled={status === "loading"}
										aria-label={
											status === "loading" ? "Enviando inscrição" : undefined
										}
										className="bg-paper text-ink hover:bg-merlot hover:text-white font-sans font-bold uppercase tracking-widest text-xs py-4 px-8 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-[140px]"
									>
										{status === "loading" ? (
											<span
												className="inline-block h-4 w-4 border-2 border-current border-r-transparent rounded-full animate-spin"
												aria-hidden="true"
											/>
										) : (
											"Cadastrar"
										)}
									</button>
								</motion.form>
							)}
						</AnimatePresence>
					</div>

					{status !== "success" && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="mt-6 text-xs text-graphite-light"
						>
							Ao se cadastrar, você concorda com nossa{" "}
							<a
								href="/politica-de-privacidade"
								className="text-graphite-lighter underline hover:text-paper"
							>
								Política de Privacidade
							</a>
						</motion.p>
					)}
				</div>

				<p className="mt-12 text-[10px] text-graphite-light uppercase tracking-[0.3em]">
					Ritápolis • Minas Gerais • Brasil
				</p>
			</div>
		</section>
	);
}
