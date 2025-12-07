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

export const metadata: Metadata = {
	title: "Sá Marias | Vinhos Finos de Ritápolis",
	description:
		"Vinhedo familiar em Minas Gerais. Vinhos finos de colheita de inverno, expressando o terroir único de Ritápolis.",
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
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
