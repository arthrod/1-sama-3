import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  // Ensure params is awaited to silence the unused warning
  await params;
  notFound();
}