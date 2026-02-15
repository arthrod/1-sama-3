export const dynamic = "force-dynamic";

import Image from "next/image";
import { Footer, Navigation, Newsletter } from "@/components";

export default function SitioDutraPage() {
	return (
		<div className="min-h-screen transition-colors duration-500 bg-paper dark:bg-paper-dark">
			<Navigation />

			<main className="pt-32 pb-24">
				{/* Header */}
				<div className="container mx-auto px-6 mb-20 text-center">
					<span className="font-sans text-xs tracking-[0.4em] uppercase text-graphite dark:text-graphite-lighter mb-4 block">
						Hospedagem Rural
					</span>
					<h1 className="font-serif text-6xl md:text-8xl text-ink dark:text-paper mb-8">
						Sítio Dutra
					</h1>
					<div className="w-24 h-1 bg-merlot mx-auto" />
				</div>

				{/* MAIN CONTENT */}
				<section className="py-24 bg-ink text-paper">
					<div className="max-w-7xl mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							{/* Content */}
							<div>
								<div className="flex items-center gap-6 mb-8 pb-8 border-b border-graphite">
									<div className="flex items-center gap-1">
										<span className="text-2xl">⭐</span>
										<span className="text-3xl font-serif font-bold">4.89</span>
									</div>
									<div className="text-sm text-graphite-lighter">
										<span className="text-paper font-bold">47 avaliações</span>{" "}
										• Guest Favorite no Airbnb
									</div>
								</div>

								<div className="grid grid-cols-3 gap-6 mb-10 text-center">
									<div>
										<span className="text-4xl font-serif font-bold text-paper">
											8
										</span>
										<p className="text-xs uppercase tracking-widest text-graphite-lighter mt-1">
											Hóspedes
										</p>
									</div>
									<div>
										<span className="text-4xl font-serif font-bold text-paper">
											3
										</span>
										<p className="text-xs uppercase tracking-widest text-graphite-lighter mt-1">
											Quartos
										</p>
									</div>
									<div>
										<span className="text-4xl font-serif font-bold text-paper">
											2
										</span>
										<p className="text-xs uppercase tracking-widest text-graphite-lighter mt-1">
											Banheiros
										</p>
									</div>
								</div>

								<p className="text-graphite-lighter leading-relaxed mb-8">
									Para quem curte casa de roça, o Sítio Dutra, com ótima
									localização e fácil acesso, fica a 05 minutos da Praça central
									de Ritápolis, a 30 minutos de São João del Rei e a 30 km de
									Tiradentes. Com muita área verde, ducha e bica de água de
									nascentes e linda trilha para ir ao centro da cidade a pé.
								</p>

								<div className="flex flex-wrap gap-3 mb-10">
									<span className="amenity-tag">🍷 Vista do Vinhedo</span>
									<span className="amenity-tag">🌿 Vista do Jardim</span>
									<span className="amenity-tag">🍳 Cozinha Completa</span>
									<span className="amenity-tag">📶 WiFi</span>
									<span className="amenity-tag">🚗 Estacionamento</span>
									<span className="amenity-tag">🐕 Aceita Pets</span>
									<span className="amenity-tag">🔥 Fogão à Lenha</span>
									<span className="amenity-tag">🥩 Churrasqueira</span>
								</div>

								<a
									href="https://www.airbnb.com.br/h/sitiodutra"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-merlot animate-pulse-glow no-underline"
								>
									Reservar no Airbnb
								</a>
							</div>

							{/* Image Grid */}
							<div className="relative">
								<div className="grid grid-cols-2 gap-4">
									<div className="space-y-4">
										<div className="aspect-[4/5] relative overflow-hidden">
											<Image
												src="/images/slideshow/cachos-uvas-sol.jpeg"
												alt="Sítio Dutra - Vista"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
										<div className="aspect-square relative overflow-hidden">
											<Image
												src="/images/slideshow/colheita-trabalhadores-aereo.jpeg"
												alt="Sítio Dutra - Interior"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
									</div>
									<div className="space-y-4 pt-8">
										<div className="aspect-square relative overflow-hidden">
											<Image
												src="/images/slideshow/uvas-verdes-capela.jpeg"
												alt="Sítio Dutra - Natureza"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
										<div className="aspect-[4/5] relative overflow-hidden">
											<Image
												src="/images/slideshow/vinhedo-por-do-sol-redes.jpeg"
												alt="Sítio Dutra - Varanda"
												fill
												className="object-cover img-hover-color"
											/>
										</div>
									</div>
								</div>

								{/* Floating Review Card */}
								<div className="absolute -bottom-8 -left-8 bg-paper text-ink p-6 max-w-xs shadow-2xl hidden lg:block">
									<p className="font-serif italic text-sm mb-4">
										&ldquo;O que falar do espaço, amamos! Casa uma delícia, a
										varanda um item à parte. O sítio todo é ímpar!&rdquo;
									</p>
									<div className="flex items-center gap-2">
										<div className="w-10 h-10 rounded-full bg-merlot flex items-center justify-center text-paper font-bold">
											S
										</div>
										<div>
											<p className="font-bold text-sm">Suelene</p>
											<p className="text-xs text-graphite">Dezembro 2024</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* The Space Details */}
						<div className="mt-32 pt-16 border-t border-graphite">
							<h3 className="font-serif text-3xl text-paper mb-10">O Espaço</h3>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
								<div>
									<p className="text-graphite-lighter leading-relaxed mb-6">
										A casa do Sítio Dutra tem um charmoso fogão à lenha, para
										quem quiser se aventurar na cozinha, com água da pia da
										cozinha e do chuveiro aquecida com serpentina. Mas também
										possui fogão a gás com forno e chuveiro elétrico.
									</p>
									<p className="text-graphite-lighter leading-relaxed">
										Possui uma área externa ampla, uma rede para dar aquela boa
										descansada e churrasqueira para festas familiares ou reunião
										de amigos. Também possui um forno de cupinzeiro para
										Experiência com Quitandas que pode ser solicitada.
									</p>
								</div>
								<div className="bg-graphite/30 p-8">
									<h4 className="font-serif text-xl text-paper mb-4">
										📍 Localização
									</h4>
									<ul className="space-y-3 text-graphite-lighter">
										<li className="flex items-start gap-3">
											<span className="text-merlot-light">→</span> 5 minutos da
											Praça Central de Ritápolis
										</li>
										<li className="flex items-start gap-3">
											<span className="text-merlot-light">→</span> 30 minutos de
											São João del Rei
										</li>
										<li className="flex items-start gap-3">
											<span className="text-merlot-light">→</span> 30 km de
											Tiradentes
										</li>
									</ul>
									<div className="mt-6 pt-6 border-t border-graphite">
										<p className="text-xs text-graphite font-mono">
											Coordenadas: -21.0165810, -44.3158560
										</p>
									</div>
								</div>
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
