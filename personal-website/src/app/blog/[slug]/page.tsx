// src/app/blog/[slug]/page.tsx
import { getPostBySlug } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function BlogPost({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose lg:prose-xl mx-auto">
        <h1>{post.frontMatter.title}</h1>
        <div className="text-gray-600 mb-8">
          {post.frontMatter.date}
          {post.frontMatter.readTime && (
            <>
              <span className="mx-2">•</span>
              {post.frontMatter.readTime}
            </>
          )}
        </div>
        <MDXRemote source={post.content} />
      </article>
    </div>
  );
}