import { expect, test, describe } from "bun:test";
import { reader } from "./reader";

describe("Keystatic Reader", () => {
	test("reader is defined", () => {
		expect(reader).toBeDefined();
	});

	test("reader has expected collections", () => {
		expect(reader.collections).toBeDefined();
		expect(reader.collections.posts).toBeDefined();
		expect(reader.collections.wines).toBeDefined();
	});

	test("reader has expected singletons", () => {
		expect(reader.singletons).toBeDefined();
		expect(reader.singletons.site).toBeDefined();
		expect(reader.singletons.home).toBeDefined();
	});
});
