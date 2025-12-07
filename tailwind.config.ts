import type { Config } from "tailwindcss";

// Minimal Tailwind v4 configuration
// Theme customization has been moved to src/app/globals.css using @theme directive
const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	darkMode: "class",
};

export default config;
