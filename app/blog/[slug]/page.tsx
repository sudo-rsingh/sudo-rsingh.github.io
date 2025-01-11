interface BlogPostParams {
    params: {
      slug: string;
    };
  }
  
  export default function BlogPost({ params }: BlogPostParams) {
    // In a real app, you'd fetch the post data based on the slug
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose lg:prose-xl">
          <h1>Blog Post Title</h1>
          <div className="text-gray-600 mb-8">
            January 10, 2025 • 5 min read
          </div>
          <div>
            {/* Blog post content goes here */}
            <p>Your blog post content...</p>
          </div>
        </article>
      </div>
    );
  }