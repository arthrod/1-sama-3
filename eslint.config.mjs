import path from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
	baseDirectory: path.dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: [
			".next/**",
			".open-next/**",
			"out/**",
			"build/**",
			"next-env.d.ts",
			"worker-configuration.d.ts",
			"worker.ts",
		],
	},
];

export default eslintConfig;
