"use client";

import { useEffect, useState } from "react";

export function InlineNewsletterForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

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
			}, 1500);
		} else if (status === "success") {
			// Reset form after showing success message
			idleTimer = setTimeout(() => {
				setStatus("idle");
			}, 3000);
		}

		return () => {
			clearTimeout(successTimer);
			clearTimeout(idleTimer);
		};
	}, [status]);

	if (status === "success") {
		return (
			<output className="flex flex-col items-center justify-center h-full min-h-[200px] text-center space-y-4 animate-fade-in">
				<div className="w-16 h-16 rounded-full bg-paper/10 flex items-center justify-center mb-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8 text-merlot-light"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<h3 className="font-serif text-2xl text-paper">Obrigado!</h3>
				<p className="text-paper/80">Sua inscrição foi confirmada.</p>
			</output>
		);
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4 relative animate-fade-in"
		>
			<div>
				<label htmlFor="inline-newsletter-name" className="sr-only">
					Seu nome
				</label>
				<input
					id="inline-newsletter-name"
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Seu nome"
					required
					disabled={status === "loading"}
					className="w-full bg-transparent border-b border-graphite py-3 text-paper placeholder:text-graphite-light focus:border-merlot-light focus:outline-none transition-colors disabled:opacity-50"
				/>
			</div>
			<div>
				<label htmlFor="inline-newsletter-email" className="sr-only">
					Seu e-mail
				</label>
				<input
					id="inline-newsletter-email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Seu e-mail"
					required
					disabled={status === "loading"}
					className="w-full bg-transparent border-b border-graphite py-3 text-paper placeholder:text-graphite-light focus:border-merlot-light focus:outline-none transition-colors disabled:opacity-50"
				/>
			</div>
			<button
				type="submit"
				disabled={status === "loading"}
				className="mt-6 w-full bg-merlot text-paper py-4 font-bold uppercase tracking-widest text-xs hover:bg-merlot-light transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
			>
				{status === "loading" ? (
					<>
						<span className="w-4 h-4 border-2 border-paper/30 border-t-paper rounded-full animate-spin" />
						Inscrevendo...
					</>
				) : (
					"Inscrever-se"
				)}
			</button>
		</form>
	);
}
