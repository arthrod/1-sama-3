import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "github",
    repo: "arthrod/1-sama-3",
  },
  ui: {
    brand: { name: "Sá Marias" },
    navigation: {
      "Conteúdo": ["posts"],
      "Configurações": ["site", "home"],
    },
  },
  collections: {
    posts: collection({
      label: "Blog Posts",
      slugField: "title",
      path: "content/posts/*",
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
        }),
        excerpt: fields.text({
          label: "Resumo",
          multiline: true,
        }),
        featuredImage: fields.image({
          label: "Imagem Destacada",
          directory: "public/images/blog",
          publicPath: "/images/blog",
        }),
        categories: fields.multiselect({
          label: "Categorias",
          options: [
            { label: "Vinhos", value: "vinhos" },
            { label: "Harmonização", value: "harmonizacao" },
            { label: "Cultura", value: "cultura" },
            { label: "Eventos", value: "eventos" },
            { label: "Dicas", value: "dicas" },
          ],
        }),
        author: fields.object(
          {
            name: fields.text({ label: "Nome do Autor" }),
            avatar: fields.image({
              label: "Avatar",
              directory: "public/images/authors",
              publicPath: "/images/authors",
            }),
          },
          { label: "Autor" }
        ),
        seo: fields.object(
          {
            metaTitle: fields.text({ label: "Meta Título" }),
            metaDescription: fields.text({
              label: "Meta Descrição",
              multiline: true,
            }),
          },
          { label: "SEO" }
        ),
        content: fields.markdoc({
          label: "Conteúdo",
        }),
      },
    }),
  },
  singletons: {
    site: singleton({
      label: "Configurações do Site",
      path: "content/site/site",
      schema: {
        siteName: fields.text({ label: "Nome do Site" }),
        siteDescription: fields.text({
          label: "Descrição do Site",
          multiline: true,
        }),
        logo: fields.image({
          label: "Logo",
          directory: "public/images",
          publicPath: "/images",
        }),
      },
    }),
    home: singleton({
      label: "Página Inicial",
      path: "content/home/home",
      schema: {
        heroTitle: fields.text({ label: "Título Principal" }),
        heroSubtitle: fields.text({
          label: "Subtítulo",
          multiline: true,
        }),
        heroImage: fields.image({
          label: "Imagem do Hero",
          directory: "public/images",
          publicPath: "/images",
        }),
      },
    }),
  },
});
