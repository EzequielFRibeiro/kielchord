import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

function toDateString(value: unknown): string {
  if (value instanceof Date) return value.toISOString().split('T')[0];
  return String(value);
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  tags: string[];
  content: string;
}

export type PostMeta = Omit<Post, 'content'>;

export function getAllPosts(): PostMeta[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return {
          slug,
          title: data.title as string,
          date: toDateString(data.date),
          description: data.description as string,
          author: data.author as string,
          tags: (data.tags as string[]) ?? [],
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch {
    return [];
  }
}

export function getPostBySlug(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title as string,
    date: toDateString(data.date),
    description: data.description as string,
    author: data.author as string,
    tags: (data.tags as string[]) ?? [],
    content,
  };
}
