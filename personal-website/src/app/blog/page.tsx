import { getAllPosts } from '@/lib/mdx';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ChevronRight } from 'lucide-react';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts on engineering, research, and technology
          </p>
        </header>

        <div className="space-y-6">
          {posts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {post.frontMatter.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.frontMatter.date}
                  {post.frontMatter.readTime && (
                    <>
                      <span className="mx-2">•</span>
                      {post.frontMatter.readTime}
                    </>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{post.frontMatter.excerpt}</p>
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Read more
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}