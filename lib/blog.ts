import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  content: string;
  featured_image: string;
  author: string;
  excerpt: string;
  tags: string[];
}

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      content: matterResult.content,
      featured_image: matterResult.data.featured_image || '/images/general/hero-mushroom-psychedelic.jpg',
      author: matterResult.data.author || 'Mycelial FunGuy',
      excerpt: matterResult.data.excerpt || '',
      tags: matterResult.data.tags || [],
    };
  });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: matterResult.data.title,
    date: matterResult.data.date,
    content: contentHtml,
    featured_image: matterResult.data.featured_image || '/images/general/hero-mushroom-psychedelic.jpg',
    author: matterResult.data.author || 'Mycelial FunGuy',
    excerpt: matterResult.data.excerpt || '',
    tags: matterResult.data.tags || [],
  };
}
