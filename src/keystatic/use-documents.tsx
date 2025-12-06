"use client";

import { useQuery } from "@tanstack/react-query";
import { reader } from "./reader";
import type { Collection } from "@keystatic/core/reader";

export function useDocuments<T extends Collection>(collection: T) {
  return useQuery({
    queryKey: ["keystatic", collection.name],
    queryFn: async () => {
      const docs = await reader(collection).all();
      return docs;
    },
  });
}