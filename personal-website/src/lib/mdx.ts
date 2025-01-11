// src/lib/mdx.ts
import fs from 'fs/promises';  // Change to use promises version
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt: string;
    readTime?: string;
    tags?: string[];
  };
  content: string;
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const files = await fs.readdir(POSTS_PATH);
  
  const posts = await Promise.all(
    files
      .filter((file) => /\.mdx?$/.test(file))
      .map(async (file) => {
        const filePath = path.join(POSTS_PATH, file);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        return {
          slug: file.replace(/\.mdx?$/, ''),
          frontMatter: {
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            readTime: data.readTime,
            tags: data.tags,
          },
          content,
        };
      })
  );
    
  return posts.sort((a, b) => 
    new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      frontMatter: {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        readTime: data.readTime,
        tags: data.tags,
      },
      content,
    };
  } catch (error) {
    return null;
  }
}