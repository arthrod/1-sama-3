import { Footer, Navigation } from "@/components";
import Link from "next/link";

export const metadata = {
	title: "Termos e Condições | Sá Marias",
	description: "Termos e condições de uso do site Sá Marias Vinhos Finos",
};

export default function TermosECondicoes() {
	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />

			<main id="main-content" className="pt-32 pb-24">
				{/* Header */}
				<div className="container mx-auto px-6 mb-20 text-center">
					<span className="font-sans text-xs tracking-[0.4em] uppercase text-graphite dark:text-graphite-lighter mb-4 block">
						Legal
					</span>
					<h1 className="font-serif text-6xl md:text-8xl text-ink dark:text-paper mb-8">
						Termos e Condições
					</h1>
					<div className="w-24 h-1 bg-merlot mx-auto" />
					<p className="mt-8 text-graphite dark:text-graphite-lighter font-sans text-sm">
						Última atualização: Dezembro de 2025
					</p>
				</div>

				{/* Content */}
				<div className="container mx-auto px-6 max-w-4xl">
					<div className="prose-samarias space-y-12">
						{/* Introduction */}
						<section>
							<p className="text-lg text-ink-faint dark:text-paper-200 leading-relaxed">
								Bem-vindo ao site da Sá Marias Vinhos Finos. Ao acessar e utilizar
								este site, você concorda com os seguintes termos e condições.
								Por favor, leia-os atentamente antes de continuar navegando.
							</p>
						</section>

						{/* Section 1 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								1. Aceitação dos Termos
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Ao acessar ou usar o site samarias.org, você concorda em
									cumprir e estar vinculado a estes Termos e Condições de Uso,
									bem como à nossa Política de Privacidade. Se você não concordar
									com qualquer parte destes termos, não deverá usar nosso site.
								</p>
							</div>
						</section>

						{/* Section 2 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								2. Uso do Site
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Você concorda em usar este site apenas para fins legais e de
									maneira que não infrinja os direitos de terceiros ou restrinja
									ou iniba o uso e aproveitamento do site por qualquer pessoa.
								</p>
								<p>É proibido:</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>
										Usar o site de qualquer forma que possa danificar, desabilitar,
										sobrecarregar ou prejudicar o servidor ou a rede
									</li>
									<li>
										Tentar obter acesso não autorizado ao site, contas de usuários
										ou sistemas de computador
									</li>
									<li>
										Usar qualquer robô, spider ou outro dispositivo automático
										para monitorar ou copiar o conteúdo do site
									</li>
									<li>
										Transmitir vírus, malware ou qualquer código de natureza
										destrutiva
									</li>
								</ul>
							</div>
						</section>

						{/* Section 3 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								3. Propriedade Intelectual
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Todo o conteúdo presente neste site, incluindo mas não limitado
									a textos, gráficos, logotipos, ícones, imagens, clipes de áudio,
									downloads digitais e compilações de dados, é propriedade da
									Sá Marias ou de seus fornecedores de conteúdo e está protegido
									pelas leis brasileiras e internacionais de direitos autorais.
								</p>
								<p>
									A marca &ldquo;Sá Marias&rdquo;, o logotipo e todos os nomes de produtos
									relacionados são marcas registradas da Sá Marias. Não é
									permitido usar essas marcas sem autorização prévia por escrito.
								</p>
							</div>
						</section>

						{/* Section 4 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								4. Conteúdo do Usuário
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Ao enviar comentários, avaliações ou qualquer outro conteúdo
									para o site, você concede à Sá Marias uma licença não exclusiva,
									livre de royalties, perpétua e irrevogável para usar, reproduzir,
									modificar, adaptar, publicar, traduzir e distribuir tal conteúdo
									em qualquer mídia.
								</p>
								<p>
									Você declara e garante que possui ou controla todos os direitos
									sobre o conteúdo que envia e que tal conteúdo não viola os
									direitos de terceiros.
								</p>
							</div>
						</section>

						{/* Section 5 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								5. Venda de Bebidas Alcoólicas
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									De acordo com a legislação brasileira, a venda de bebidas
									alcoólicas é proibida para menores de 18 anos. Ao realizar
									qualquer compra de produtos alcoólicos através de nosso site
									ou diretamente conosco, você declara ter 18 anos ou mais.
								</p>
								<p className="font-bold text-ink dark:text-paper">
									BEBA COM MODERAÇÃO. SE BEBER, NÃO DIRIJA.
								</p>
							</div>
						</section>

						{/* Section 6 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								6. Reservas no Sítio Dutra
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									As reservas de hospedagem no Sítio Dutra são realizadas através
									da plataforma Airbnb. Ao fazer uma reserva, você está sujeito
									aos termos e condições do Airbnb, além destes termos.
								</p>
								<p>
									Políticas de cancelamento, reembolso e regras da casa são
									especificadas na listagem do Airbnb e devem ser consultadas
									antes da reserva.
								</p>
							</div>
						</section>

						{/* Section 7 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								7. Isenção de Garantias
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Este site é fornecido &ldquo;como está&rdquo; e &ldquo;conforme disponível&rdquo;.
									A Sá Marias não faz representações ou garantias de qualquer
									tipo, expressas ou implícitas, quanto à operação do site ou
									às informações, conteúdo, materiais ou produtos incluídos nele.
								</p>
								<p>
									Na extensão máxima permitida pela lei aplicável, a Sá Marias
									renuncia a todas as garantias, expressas ou implícitas,
									incluindo, mas não se limitando a, garantias implícitas de
									comercialização e adequação a um propósito específico.
								</p>
							</div>
						</section>

						{/* Section 8 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								8. Limitação de Responsabilidade
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									A Sá Marias não será responsável por quaisquer danos diretos,
									indiretos, incidentais, especiais, consequenciais ou punitivos
									resultantes do uso ou incapacidade de usar este site ou seus
									serviços.
								</p>
							</div>
						</section>

						{/* Section 9 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								9. Links para Sites de Terceiros
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Nosso site pode conter links para sites de terceiros. Esses
									links são fornecidos apenas para sua conveniência. A Sá Marias
									não tem controle sobre o conteúdo desses sites e não assume
									nenhuma responsabilidade por eles ou por qualquer perda ou
									dano que possa surgir do seu uso.
								</p>
							</div>
						</section>

						{/* Section 10 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								10. Modificações dos Termos
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									A Sá Marias reserva-se o direito de modificar estes termos a
									qualquer momento. As alterações entrarão em vigor imediatamente
									após a publicação no site. O uso continuado do site após
									quaisquer alterações constitui sua aceitação dos novos termos.
								</p>
							</div>
						</section>

						{/* Section 11 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								11. Lei Aplicável
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Estes termos serão regidos e interpretados de acordo com as
									leis da República Federativa do Brasil. Qualquer disputa
									decorrente destes termos será submetida à jurisdição exclusiva
									dos tribunais de São João del Rei, Minas Gerais.
								</p>
							</div>
						</section>

						{/* Section 12 - Contact */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								12. Contato
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Se você tiver dúvidas sobre estes Termos e Condições, entre
									em contato conosco:
								</p>
								<div className="bg-paper-200 dark:bg-ink p-6 mt-6 border border-graphite/20 dark:border-graphite">
									<p className="font-serif text-lg text-ink dark:text-paper mb-2">
										Sá Marias Vinhos Finos
									</p>
									<p className="text-sm">Ritápolis, Minas Gerais - Brasil</p>
									<p className="text-sm mt-2">
										E-mail: contato@samarias.org
									</p>
								</div>
							</div>
						</section>
					</div>

					{/* Back Link */}
					<div className="mt-16 pt-8 border-t border-graphite/20 dark:border-graphite text-center">
						<Link
							href="/"
							className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-graphite dark:text-graphite-lighter hover:text-merlot dark:hover:text-merlot-light transition-colors no-underline"
						>
							<span>←</span> Voltar ao Início
						</Link>
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
}
