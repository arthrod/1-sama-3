"use client";

import { useEffect, useState } from "react";

export function InlineNewsletterForm() {
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
			// Simulate API call
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
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
			aria-label="Formulário de inscrição na newsletter"
		>
			<div className="relative">
				<label htmlFor="inline-name" className="sr-only">
					Seu nome
				</label>
				<input
					id="inline-name"
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Seu nome"
					required
					disabled={status === "loading" || status === "success"}
					className="w-full bg-transparent border-b border-graphite py-3 text-paper placeholder:text-graphite-light focus:border-merlot-light focus:outline-none transition-colors disabled:opacity-50"
				/>
			</div>
			<div className="relative">
				<label htmlFor="inline-email" className="sr-only">
					Seu e-mail
				</label>
				<input
					id="inline-email"
					type="email"
					name="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Seu e-mail"
					required
					disabled={status === "loading" || status === "success"}
					className="w-full bg-transparent border-b border-graphite py-3 text-paper placeholder:text-graphite-light focus:border-merlot-light focus:outline-none transition-colors disabled:opacity-50"
				/>
			</div>

			<div aria-live="polite" className="mt-6">
				<button
					type="submit"
					disabled={status === "loading" || status === "success"}
					className={`w-full py-4 font-bold uppercase tracking-widest text-xs transition-colors duration-300 ${
						status === "success"
							? "bg-green-700 text-white cursor-default"
							: "bg-merlot text-paper hover:bg-merlot-light disabled:opacity-70 disabled:cursor-not-allowed"
					}`}
				>
					{status === "loading" ? (
						<span className="flex items-center justify-center gap-2">
							<span className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" aria-hidden="true" />
							Enviando...
						</span>
					) : status === "success" ? (
						"Inscrição Confirmada!"
					) : (
						"Inscrever-se"
					)}
				</button>
			</div>

			{/* Screen reader only status message for assertive feedback */}
			{status === "success" && (
				<output className="sr-only">
					Sua inscrição foi confirmada com sucesso.
				</output>
			)}
		</form>
	);
}
