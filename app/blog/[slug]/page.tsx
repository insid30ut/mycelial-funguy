import { getBlogPostBySlug, getBlogPosts } from "lib/blog";
import React from "react";

export async function generateStaticParams() {
	const posts = getBlogPosts();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function BlogPostPage({
	params,
}: {
	params: { slug: string };
}) {
	const post = await getBlogPostBySlug(params.slug);

	if (!post) {
		return <div>Post not found</div>; // Or a 404 page
	}

	return (
		<div>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
	);
}
