import type { Metadata } from "next";
import { Great_Vibes, Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	display: "swap",
});

const lato = Lato({
	variable: "--font-lato",
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	display: "swap",
});

const greatVibes = Great_Vibes({
	variable: "--font-great-vibes",
	subsets: ["latin"],
	weight: "400",
	display: "swap",
});

const siteUrl = "https://samarias.org";

export const metadata: Metadata = {
	// Basic metadata
	title: {
		default: "Sá Marias | Vinhos Finos de Ritápolis",
		template: "%s | Sá Marias",
	},
	description:
		"Vinhedo familiar em Minas Gerais próximo a Tiradentes. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis através de três gerações de conhecimento.",
	keywords: [
		"vinho",
		"vinhos finos",
		"vinhedo",
		"Ritápolis",
		"Minas Gerais",
		"vinho brasileiro",
		"colheita de inverno",
		"enoturismo",
		"São João del Rei",
		"Tiradentes",
		"próximo a Tiradentes",
		"vinho perto de Tiradentes",
		"vinhedo próximo a Tiradentes",
		"Caminho Real",
		"Estrada Real",
		"vinho no Caminho Real",
		"vinho mineiro",
		"Sá Marias",
		"vinho artesanal",
		"rota do vinho Minas Gerais",
		"circuito das cidades históricas",
	],
	authors: [{ name: "Sá Marias" }],
	creator: "Sá Marias",
	publisher: "Sá Marias",

	// Robots
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	// Open Graph
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: siteUrl,
		siteName: "Sá Marias",
		title: "Sá Marias | Vinhos Finos de Ritápolis",
		description:
			"Vinhedo familiar em Minas Gerais próximo a Tiradentes. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis.",
		images: [
			{
				url: `${siteUrl}/opengraph-image`,
				width: 1200,
				height: 630,
				alt: "Sá Marias - Vinhos Finos de Ritápolis",
			},
		],
	},

	// Twitter
	twitter: {
		card: "summary_large_image",
		title: "Sá Marias | Vinhos Finos de Ritápolis",
		description:
			"Vinhedo familiar em Minas Gerais próximo a Tiradentes. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis.",
		images: [`${siteUrl}/opengraph-image`],
	},

	// Icons (handled by icon.tsx and apple-icon.tsx)
	icons: {
		icon: "/icon",
		apple: "/apple-icon",
	},

	// Manifest
	manifest: "/manifest.json",

	// Verification (add your actual verification codes)
	// verification: {
	// 	google: "your-google-verification-code",
	// },

	// Alternate languages
	alternates: {
		canonical: siteUrl,
		languages: {
			"pt-BR": siteUrl,
		},
	},

	// Category
	category: "food & drink",

	// Other
	metadataBase: new URL(siteUrl),
};

// JSON-LD Schema
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Winery",
	name: "Sá Marias",
	alternateName: "Vinhedo Sá Marias",
	description:
		"Vinhedo familiar em Minas Gerais. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis através de três gerações de conhecimento.",
	url: siteUrl,
	logo: `${siteUrl}/icon`,
	image: `${siteUrl}/opengraph-image`,
	telephone: "+55 (32) 99988-8075",
	email: "contato@samarias.org",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Rua Belo Horizonte, 74",
		addressLocality: "Ritápolis",
		addressRegion: "MG",
		addressCountry: "BR",
	},
	geo: {
		"@type": "GeoCoordinates",
		latitude: -21.016581,
		longitude: -44.315856,
	},
	sameAs: [
		"https://instagram.com/vinhedosamarias",
		"https://facebook.com/vinhedosamarias",
	],
	priceRange: "$$",
	servesCuisine: "Wine",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Vinhos Sá Marias",
		itemListElement: [
			{
				"@type": "Offer",
				itemOffered: {
					"@type": "Product",
					name: "Vinho Tinto Seco",
					category: "Vinho Fino",
				},
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<head>
				{/* Google Analytics */}
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-6W2C54R7EF" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-6W2C54R7EF');
						`,
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased`}
			>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
