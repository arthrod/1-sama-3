"server-only"
import { createGitHubReader } from "@keystatic/core/reader/github";
import React from "react";
import Markdoc from "@markdoc/markdoc";
import keystaticConfig from "../../../../keystatic.config";

const reader = createGitHubReader(keystaticConfig, {
  repo: 'arthrod/1-sama-3',
  token: process.env.KEYSTATIC_GITHUB_TOKEN,
});

type PostParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post({ params }: PostParams) {
  const { slug } = await params;
  const post = await reader.collections.posts.read(slug);

  if (!post) {
    return <div>No Post Found</div>;
  }

  const { node } = await post.content();
  const errors = Markdoc.validate(node);

  if (errors.length) {
    console.error(errors);
    throw new Error('Invalid content');
  }

  const renderable = Markdoc.transform(node);

  return (
    <>
      <h1>{post.title}</h1>
      {Markdoc.renderers.react(renderable, React)}
      <hr />
      <a href={`/posts`}>Back to Posts</a>
    </>
  );
}