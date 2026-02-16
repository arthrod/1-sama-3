import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Sá Marias - Vinhos Finos de Ritápolis";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export async function GET() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 40,
				background:
					"linear-gradient(135deg, #0a0909 0%, #1a1818 50%, #2e2b29 100%)",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				color: "#faf9f7",
				fontFamily: "serif",
				position: "relative",
			}}
		>
			{/* Decorative border */}
			<div
				style={{
					position: "absolute",
					top: 40,
					left: 40,
					right: 40,
					bottom: 40,
					border: "1px solid rgba(250, 249, 247, 0.1)",
					display: "flex",
				}}
			/>

			{/* Accent line */}
			<div
				style={{
					width: 100,
					height: 2,
					background: "#541e23",
					marginBottom: 40,
				}}
			/>

			{/* Logo */}
			<div
				style={{
					fontSize: 120,
					fontStyle: "italic",
					marginBottom: 20,
					color: "#faf9f7",
				}}
			>
				Sá Marias
			</div>

			{/* Tagline */}
			<div
				style={{
					fontSize: 28,
					color: "rgba(250, 249, 247, 0.7)",
					letterSpacing: "0.2em",
					textTransform: "uppercase",
					marginBottom: 40,
				}}
			>
				Vinhos Finos
			</div>

			{/* Location */}
			<div
				style={{
					fontSize: 18,
					color: "rgba(250, 249, 247, 0.5)",
					letterSpacing: "0.3em",
					textTransform: "uppercase",
				}}
			>
				Ritápolis • Minas Gerais • Brasil
			</div>

			{/* Bottom accent */}
			<div
				style={{
					position: "absolute",
					bottom: 60,
					width: 60,
					height: 2,
					background: "#8c3b44",
				}}
			/>
		</div>,
		{
			...size,
		},
	);
}
