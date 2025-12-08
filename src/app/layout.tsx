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

// JSON-LD schema.org graph for rich search results
const jsonLd = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "Organization",
			"@id": "https://samarias.org/#organization",
			name: "Sá Marias",
			alternateName: "Vinhedo Samarias",
			url: "https://samarias.org",
			logo: "https://samarias.org/images/logo.png",
			description:
				"Vinhedo familiar em Minas Gerais produzindo vinhos finos de colheita de inverno",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Rua Belo Horizonte, 74",
				addressLocality: "Ritápolis",
				addressRegion: "MG",
				postalCode: "36345-000",
				addressCountry: "BR",
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: -21.016581,
				longitude: -44.315856,
			},
			contactPoint: {
				"@type": "ContactPoint",
				telephone: "+55-32-99988-8075",
				contactType: "customer service",
				email: "contato@samarias.org",
			},
			sameAs: [],
		},
		{
			"@type": ["Winery", "TouristAttraction"],
			"@id": "https://samarias.org/#winery",
			name: "Vinhedo Sá Marias",
			image: "https://samarias.org/images/vineyard.jpg",
			priceRange: "$$",
			address: {
				"@type": "PostalAddress",
				streetAddress: "Rua Belo Horizonte, 74",
				addressLocality: "Ritápolis",
				addressRegion: "MG",
				addressCountry: "BR",
			},
			openingHoursSpecification: {
				"@type": "OpeningHoursSpecification",
				dayOfWeek: ["Saturday", "Sunday"],
				opens: "09:00",
				closes: "17:00",
			},
		},
		{
			"@type": "LodgingBusiness",
			"@id": "https://samarias.org/sitio-dutra#lodging",
			name: "Sítio Dutra",
			description:
				"Casa na roça com trilha e experiência rural em Ritápolis, a 30 minutos de São João del Rei",
			image: "https://samarias.org/images/sitio-dutra.jpg",
			address: {
				"@type": "PostalAddress",
				addressLocality: "Ritápolis",
				addressRegion: "MG",
				addressCountry: "BR",
			},
			geo: {
				"@type": "GeoCoordinates",
				latitude: -21.016581,
				longitude: -44.315856,
			},
			amenityFeature: [
				{ "@type": "LocationFeatureSpecification", name: "Vineyard view" },
				{ "@type": "LocationFeatureSpecification", name: "Garden view" },
				{ "@type": "LocationFeatureSpecification", name: "Kitchen" },
				{ "@type": "LocationFeatureSpecification", name: "Wifi" },
				{ "@type": "LocationFeatureSpecification", name: "Free parking" },
				{ "@type": "LocationFeatureSpecification", name: "Pets allowed" },
			],
			numberOfRooms: 3,
			petsAllowed: true,
			aggregateRating: {
				"@type": "AggregateRating",
				ratingValue: "4.89",
				reviewCount: "47",
			},
		},
		{
			"@type": "WebSite",
			"@id": "https://samarias.org/#website",
			url: "https://samarias.org",
			name: "Sá Marias",
			publisher: { "@id": "https://samarias.org/#organization" },
			potentialAction: {
				"@type": "SearchAction",
				target: "https://samarias.org/?s={search_term_string}",
				"query-input": "required name=search_term_string",
			},
		},
	],
} as const;

// Rich SEO metadata
export const metadata: Metadata = {
	metadataBase: new URL("https://samarias.org"),
	title:
		"Sá Marias | Vinhos Finos de Ritápolis - Vinhedo Artesanal em Minas Gerais",
	description:
		"Vinhedo familiar em Minas Gerais. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis. Visite o Sítio Dutra e experimente a autêntica vida rural mineira.",
	keywords: [
		"vinho",
		"vinhos finos",
		"Ritápolis",
		"Minas Gerais",
		"vinhedo",
		"Sítio Dutra",
		"enoturismo",
		"colheita de inverno",
		"vinho artesanal",
		"São João del Rei",
		"Tiradentes",
	],
	authors: [{ name: "Sá Marias - As Três Sás" }],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		url: "https://samarias.org/",
		title: "Sá Marias | Vinhos Finos de Ritápolis",
		description:
			"Vinhedo familiar em Minas Gerais. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis.",
		siteName: "Sá Marias",
		locale: "pt_BR",
		images: [
			{
				url: "https://samarias.org/images/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Vinhedo Sá Marias em Ritápolis",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Sá Marias | Vinhos Finos de Ritápolis",
		description:
			"Vinhedo familiar em Minas Gerais. Vinhos finos de colheita de inverno.",
		images: ["https://samarias.org/images/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	other: {
		"geo.region": "BR-MG",
		"geo.placename": "Ritápolis",
		"geo.position": "-21.0165810;-44.3158560",
		ICBM: "-21.0165810, -44.3158560",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR" suppressHydrationWarning>
			<body
				className={`${playfair.variable} ${lato.variable} ${greatVibes.variable} antialiased`}
			>
				{/* JSON-LD structured data for search engines */}
				{/* Prefer Metadata route or framework support; if inline is required: */}
				<script type="application/ld+json">
				  {JSON.stringify(jsonLd)}
				</script>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
