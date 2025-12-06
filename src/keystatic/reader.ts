import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";

// The repoPath parameter is still required even with GitHub storage
// It's used as a base path for resolving local imports during development
// In production with GitHub storage, it will be ignored
export const reader = createReader(process.cwd(), config);