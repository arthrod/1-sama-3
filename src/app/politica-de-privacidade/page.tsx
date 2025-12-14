import { Footer, Navigation } from "@/components";
import Link from "next/link";

export const metadata = {
	title: "Política de Privacidade | Sá Marias",
	description: "Política de privacidade do site Sá Marias Vinhos Finos",
};

export default function PoliticaDePrivacidade() {
	return (
		<div className="min-h-screen bg-paper dark:bg-paper-dark transition-colors duration-500">
			<Navigation />

			<main className="pt-32 pb-24">
				{/* Header */}
				<div className="container mx-auto px-6 mb-16 text-center">
					<span className="font-sans text-xs tracking-[0.4em] uppercase text-graphite dark:text-graphite-light mb-4 block">
						Legal
					</span>
					<h1 className="font-serif text-5xl md:text-7xl text-ink dark:text-paper mb-8">
						Política de Privacidade
					</h1>
					<div className="w-24 h-1 bg-merlot mx-auto" />
					<p className="mt-8 text-graphite dark:text-graphite-lighter font-sans text-sm">
						Última atualização: Dezembro de 2024
					</p>
				</div>

				{/* Content */}
				<div className="container mx-auto px-6 max-w-4xl">
					<div className="prose-samarias space-y-12">
						{/* Introduction */}
						<section>
							<p className="text-lg text-ink-faint dark:text-paper-200 leading-relaxed">
								A Sá Marias Vinhos Finos (&ldquo;nós&rdquo;, &ldquo;nosso&rdquo; ou &ldquo;Sá Marias&rdquo;)
								está comprometida em proteger a privacidade dos visitantes do nosso site.
								Esta Política de Privacidade explica como coletamos, usamos e protegemos
								suas informações pessoais quando você visita nosso site.
							</p>
						</section>

						{/* Section 1 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								1. Informações que Coletamos
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									<strong className="text-ink dark:text-paper">Informações fornecidas voluntariamente:</strong>
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Nome e endereço de e-mail (quando você se inscreve em nossa newsletter)</li>
									<li>Informações de contato (quando você nos envia uma mensagem)</li>
									<li>Comentários e feedback sobre nossos produtos</li>
								</ul>
								<p className="mt-4">
									<strong className="text-ink dark:text-paper">Informações coletadas automaticamente:</strong>
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Endereço IP</li>
									<li>Tipo de navegador e dispositivo</li>
									<li>Páginas visitadas e tempo de permanência</li>
									<li>Cookies e tecnologias similares</li>
								</ul>
							</div>
						</section>

						{/* Section 2 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								2. Como Usamos Suas Informações
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>Utilizamos as informações coletadas para:</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Enviar nossa newsletter com novidades sobre vinhos, eventos e promoções</li>
									<li>Responder às suas perguntas e solicitações</li>
									<li>Melhorar a experiência do usuário em nosso site</li>
									<li>Analisar o tráfego e uso do site para aprimorar nossos serviços</li>
									<li>Cumprir obrigações legais</li>
								</ul>
							</div>
						</section>

						{/* Section 3 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								3. Compartilhamento de Informações
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Não vendemos, alugamos ou compartilhamos suas informações pessoais com
									terceiros para fins de marketing. Podemos compartilhar informações apenas:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Com prestadores de serviços que nos auxiliam na operação do site (hospedagem, e-mail marketing)</li>
									<li>Quando exigido por lei ou ordem judicial</li>
									<li>Para proteger nossos direitos legais</li>
								</ul>
							</div>
						</section>

						{/* Section 4 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								4. Cookies
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Nosso site utiliza cookies para melhorar sua experiência de navegação.
									Cookies são pequenos arquivos de texto armazenados em seu dispositivo que nos ajudam a:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Lembrar suas preferências (como modo escuro/claro)</li>
									<li>Entender como você usa nosso site</li>
									<li>Personalizar conteúdo e anúncios</li>
								</ul>
								<p className="mt-4">
									Você pode controlar e/ou excluir cookies através das configurações do seu navegador.
								</p>
							</div>
						</section>

						{/* Section 5 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								5. Segurança dos Dados
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Implementamos medidas de segurança técnicas e organizacionais apropriadas
									para proteger suas informações pessoais contra acesso não autorizado,
									alteração, divulgação ou destruição. No entanto, nenhum método de
									transmissão pela Internet é 100% seguro.
								</p>
							</div>
						</section>

						{/* Section 6 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								6. Seus Direitos (LGPD)
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
								</p>
								<ul className="list-disc list-inside space-y-2 ml-4">
									<li>Confirmar a existência de tratamento de seus dados</li>
									<li>Acessar seus dados pessoais</li>
									<li>Corrigir dados incompletos, inexatos ou desatualizados</li>
									<li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários</li>
									<li>Solicitar a portabilidade dos dados</li>
									<li>Revogar o consentimento a qualquer momento</li>
								</ul>
							</div>
						</section>

						{/* Section 7 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								7. Retenção de Dados
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Mantemos suas informações pessoais apenas pelo tempo necessário para
									cumprir as finalidades para as quais foram coletadas, incluindo
									obrigações legais, contábeis ou de relatórios.
								</p>
							</div>
						</section>

						{/* Section 8 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								8. Links Externos
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Nosso site pode conter links para sites externos (como Airbnb para
									reservas no Sítio Dutra). Não somos responsáveis pelas práticas de
									privacidade desses sites. Recomendamos que você leia as políticas
									de privacidade de cada site que visitar.
								</p>
							</div>
						</section>

						{/* Section 9 */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								9. Alterações nesta Política
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Podemos atualizar esta Política de Privacidade periodicamente.
									Quaisquer alterações serão publicadas nesta página com a data
									de atualização revisada. Recomendamos que você revise esta
									política regularmente.
								</p>
							</div>
						</section>

						{/* Section 10 - Contact */}
						<section>
							<h2 className="font-serif text-2xl text-ink dark:text-paper mb-6 pb-2 border-b border-graphite/20 dark:border-graphite">
								10. Contato
							</h2>
							<div className="space-y-4 text-ink-faint dark:text-paper-200">
								<p>
									Se você tiver dúvidas sobre esta Política de Privacidade ou sobre
									como tratamos seus dados pessoais, entre em contato conosco:
								</p>
								<div className="bg-paper-200 dark:bg-ink p-6 mt-6 border border-graphite/20 dark:border-graphite">
									<p className="font-serif text-lg text-ink dark:text-paper mb-2">
										Sá Marias Vinhos Finos
									</p>
									<p className="text-sm">Ritápolis, Minas Gerais - Brasil</p>
									<p className="text-sm mt-2">
										E-mail: privacidade@samarias.org
									</p>
								</div>
							</div>
						</section>
					</div>

					{/* Back Link */}
					<div className="mt-16 pt-8 border-t border-graphite/20 dark:border-graphite text-center">
						<Link
							href="/"
							className="inline-flex items-center gap-2 font-sans text-sm uppercase tracking-widest text-graphite dark:text-graphite-light hover:text-merlot dark:hover:text-merlot-light transition-colors no-underline"
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
