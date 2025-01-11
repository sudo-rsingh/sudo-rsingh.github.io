import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ChevronRight } from 'lucide-react';

// Blog post type definition
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Optimizing Neural Networks for Edge Devices',
    excerpt: 'Exploring techniques for running efficient neural networks on resource-constrained devices...',
    date: 'January 10, 2025',
    readTime: '5 min read',
    slug: 'optimizing-neural-networks'
  },
  {
    id: '2',
    title: 'The Future of Distributed Computing',
    excerpt: 'Analyzing trends and innovations in distributed systems architecture...',
    date: 'January 5, 2025',
    readTime: '7 min read',
    slug: 'future-distributed-computing'
  },
  // Add more blog posts as needed
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Blog Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Thoughts on engineering, research, and technology
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    {post.title}
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                  <span className="mx-2">•</span>
                  {post.readTime}
                </div>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
};

export default BlogPage;