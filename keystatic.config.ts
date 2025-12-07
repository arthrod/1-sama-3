import { collection, config, fields, singleton } from "@keystatic/core";

export default config({
	storage: {
		kind: "github",
		repo: "arthrod/1-sama-3",
	},
	ui: {
		brand: { name: "Sá Marias" },
		navigation: {
			Conteúdo: ["posts", "wines"],
			Configurações: ["site", "home"],
		},
	},
	collections: {
		posts: collection({
			label: "Crônicas (Blog)",
			slugField: "title",
			path: "src/content/posts/*",
			format: { contentField: "content" },
			schema: {
				title: fields.slug({ name: { label: "Título" } }),
				status: fields.select({
					label: "Status",
					options: [
						{ label: "Rascunho", value: "draft" },
						{ label: "Publicado", value: "published" },
					],
					defaultValue: "draft",
				}),
				publishedDate: fields.date({
					label: "Data de Publicação",
					validation: { isRequired: true },
				}),
				excerpt: fields.text({
					label: "Resumo (Chamada)",
					multiline: true,
				}),
				coverImage: fields.image({
					label: "Capa do Post",
					directory: "public/images/blog",
					publicPath: "/images/blog",
				}),
				author: fields.text({
					label: "Autor",
					defaultValue: "As Três Sás",
				}),
				content: fields.markdoc({
					label: "Conteúdo",
					options: {
						image: {
							directory: "public/images/blog/content",
							publicPath: "/images/blog/content",
						},
					},
				}),
			},
		}),
		wines: collection({
			label: "Vinhos (Garrafeira)",
			slugField: "name",
			path: "src/content/wines/*",
			schema: {
				name: fields.slug({ name: { label: "Nome do Vinho" } }),
				year: fields.text({ label: "Safra (Ano)" }),
				type: fields.text({ label: "Tipo (ex: Tinto Seco)" }),
				price: fields.number({ label: "Preço (Reais)" }),
				description: fields.text({ label: "Descrição Curta", multiline: true }),
				image: fields.image({
					label: "Foto da Garrafa (Fundo Transparente ou Recortada)",
					directory: "public/images/wines",
					publicPath: "/images/wines",
				}),
				notes: fields.object(
					{
						body: fields.text({ label: "Corpo" }),
						tannin: fields.text({ label: "Taninos" }),
						acidity: fields.text({ label: "Acidez" }),
					},
					{ label: "Notas de Prova" },
				),
			},
		}),
	},
	singletons: {
		site: singleton({
			label: "Configurações do Site",
			path: "src/content/site/site",
			schema: {
				siteName: fields.text({ label: "Nome do Site" }),
				siteDescription: fields.text({
					label: "Descrição do Site",
					multiline: true,
				}),
			},
		}),
		home: singleton({
			label: "Página Inicial",
			path: "src/content/home/home",
			schema: {
				heroTitle: fields.text({ label: "Título Principal" }),
				heroSubtitle: fields.text({
					label: "Subtítulo",
					multiline: true,
				}),
			},
		}),
	},
});
