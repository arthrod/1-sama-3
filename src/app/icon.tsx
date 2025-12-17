import { ImageResponse } from "next/og";

export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/png";

export default function Icon() {
	return new ImageResponse(
		<div
			style={{
				fontSize: 18,
				background: "#541e23",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#faf9f7",
				fontFamily: "Great Vibes, cursive",
				fontWeight: 400,
				borderRadius: "4px",
			}}
		>
			Sá
		</div>,
		{
			...size,
		},
	);
}
