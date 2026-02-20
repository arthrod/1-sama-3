import { createGitHubReader } from "@keystatic/core/reader/github";
import keystaticConfig from "../../keystatic.config";
import "./keystatic-client";

export const getReader = async () => {
	return createGitHubReader(keystaticConfig, {
		repo: "arthrod/1-sama-3",
		token: process.env.KEYSTATIC_GITHUB_TOKEN,
	});
};
