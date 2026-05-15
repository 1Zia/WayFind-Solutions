import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getPost } from "@/content/blog-posts";
import { BlogArticleClient } from "./blog-article-client";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = getPost(params.slug);
  if (!p) return {};
  return {
    title: p.title,
    description: p.excerpt,
    openGraph: { title: p.title, description: p.excerpt },
  };
}

export default function BlogArticlePage({ params }: Props) {
  const post = getPost(params.slug);
  if (!post) notFound();
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return <BlogArticleClient post={post} related={related} />;
}
