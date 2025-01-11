// src/lib/mdx.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const POSTS_PATH = path.join(process.cwd(), 'content/blog');

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

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(POSTS_PATH);
  
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
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
    .sort((a, b) => new Date(b.frontMatter.date).getTime() - new Date(a.frontMatter.date).getTime());
    
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
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