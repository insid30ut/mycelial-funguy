import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const teksDirectory = path.join(process.cwd(), 'content/teks');

export interface Tek {
  slug: string;
  title: string;
  content: string;
  difficulty: string;
  time: string;
  description: string;
  materials: string[];
}

export function getTeks(): Tek[] {
  const fileNames = fs.readdirSync(teksDirectory);
  const allTeksData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(teksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      title: matterResult.data.title,
      content: matterResult.content,
      difficulty: matterResult.data.difficulty || 'Unknown',
      time: matterResult.data.time || 'N/A',
      description: matterResult.data.description || '',
      materials: matterResult.data.materials || [],
    };
  });

  return allTeksData;
}


export async function getTekBySlug(slug: string): Promise<Tek | undefined> {
  const fullPath = path.join(teksDirectory, `${slug}.md`);
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
    content: contentHtml,
    difficulty: matterResult.data.difficulty || 'Unknown',
    time: matterResult.data.time || 'N/A',
    description: matterResult.data.description || '',
    materials: matterResult.data.materials || [],
  };
}
