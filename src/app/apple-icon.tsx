import { ImageResponse } from "next/og";

export const size = {
	width: 180,
	height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 120,
				background: "#541e23",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#faf9f7",
				fontFamily: "Great Vibes, cursive",
				fontWeight: 400,
				borderRadius: "24px",
			}}
		>
			Sá
		</div>,
		{
			...size,
		},
	);
}
