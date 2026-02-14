"use client";

import { useEffect, useState } from "react";

export function Newsletter() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim() || !email.trim()) {
			return;
		}

		setStatus("loading");
	};

	useEffect(() => {
		let successTimer: NodeJS.Timeout;
		let idleTimer: NodeJS.Timeout;

		if (status === "loading") {
			successTimer = setTimeout(() => {
				setStatus("success");
				setName("");
				setEmail("");
			}, 1000);
		} else if (status === "success") {
			idleTimer = setTimeout(() => {
				setStatus("idle");
			}, 3000);
		}

		return () => {
			clearTimeout(successTimer);
			clearTimeout(idleTimer);
		};
	}, [status]);

	return (
		<section id="newsletter" className="py-32 bg-ink text-paper relative overflow-hidden">
			{/* Decorative Elements */}
			<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 border border-paper rounded-full" />
				<div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-paper rounded-full" />
			</div>

			<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
				<div className="inline-block border-2 border-dotted border-graphite px-8 py-16 bg-black/50 backdrop-blur-sm relative">
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

					<form
						id="newsletter-form"
						onSubmit={handleSubmit}
						className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
					>
						<output className="sr-only">
							{status === "loading" && "Enviando inscrição..."}
							{status === "success" && "Inscrição realizada com sucesso!"}
							{status === "error" && "Erro ao realizar inscrição. Tente novamente."}
						</output>
						<label htmlFor="subscriber-name" className="sr-only">Seu Nome</label>
						<input
							type="text"
							id="subscriber-name"
							name="name"
							placeholder="Seu Nome"
							required
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="flex-1 bg-transparent border-b border-graphite py-3 px-4 text-paper placeholder-graphite-light focus:outline-none focus:border-merlot transition-colors font-serif"
						/>
						<label htmlFor="subscriber-email" className="sr-only">Seu E-mail</label>
						<input
							type="email"
							id="subscriber-email"
							name="email"
							placeholder="Seu E-mail"
							required
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="flex-1 bg-transparent border-b border-graphite py-3 px-4 text-paper placeholder-graphite-light focus:outline-none focus:border-merlot transition-colors font-serif"
						/>
						<button
							type="submit"
							id="subscribe-btn"
							disabled={status === "loading"}
							aria-disabled={status === "loading"}
							className="bg-paper text-ink hover:bg-merlot hover:text-white font-sans font-bold uppercase tracking-widest text-xs py-4 px-8 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						>
							{status === "loading" && (
								<svg
									className="animate-spin h-3 w-3"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
							)}
							{status === "loading"
								? "Enviando..."
								: status === "success"
									? "Enviado!"
									: "Cadastrar"}
						</button>
					</form>

					<p className="mt-6 text-xs text-graphite-light">
						Ao se cadastrar, você concorda com nossa{" "}
						<a href="/politica-de-privacidade" className="text-graphite-lighter underline hover:text-paper">
							Política de Privacidade
						</a>
					</p>
				</div>

				<p className="mt-12 text-[10px] text-graphite-light uppercase tracking-[0.3em]">
					Ritápolis • Minas Gerais • Brasil
				</p>
			</div>
		</section>
	);
}
