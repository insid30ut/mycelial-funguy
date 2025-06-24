import React from "react";
import BlogCard from "components/BlogCard";
import { BlogPost, getBlogPosts } from "lib/blog";

export default async function BlogListPage() {
	const posts = await getBlogPosts();

	return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-4xl sm:text-5xl font-bold psychedelic-heading mb-6">
					The FunGuy Blog
				</h1>
				<p className="text-lg text-[var(--color-forest-brown)] max-w-2xl mx-auto leading-relaxed">
					Follow my adventures in mushroom cultivation, from beginner mistakes
					to breakthrough discoveries. These are the real stories behind the
					spores!
				</p>
			</div>

			{/* Blog Posts Grid */}
			{posts.length > 0 ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{posts.map((post) => (
						<BlogCard
							key={post.slug}
							post={post}
						/>
					))}
				</div>
			) : (
				<div className="text-center py-12">
					<div className="organic-card p-12 max-w-md mx-auto">
						<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] flex items-center justify-center">
							<span className="text-2xl">🍄</span>
						</div>
						<h3 className="text-xl font-bold text-[var(--color-forest-brown-dark)] mb-2">
							No Posts Yet
						</h3>
						<p className="text-[var(--color-forest-brown)]">
							Check back soon for cultivation stories and growing adventures!
						</p>
					</div>
				</div>
			)}

			{/* Fun Stats Section */}
			<div className="mt-16 pt-12 border-t border-[var(--color-earth-green)]/20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
					<div className="organic-card p-6">
						<div className="text-3xl font-bold text-[var(--color-electric-blue)] mb-2">
							{posts.length}
						</div>
						<div className="text-[var(--color-forest-brown)] font-medium">
							Stories Shared
						</div>
					</div>

					<div className="organic-card p-6">
						<div className="text-3xl font-bold text-[var(--color-bright-orange)] mb-2">
							12+
						</div>
						<div className="text-[var(--color-forest-brown)] font-medium">
							Species Grown
						</div>
					</div>

					<div className="organic-card p-6">
						<div className="text-3xl font-bold text-[var(--color-deep-purple)] mb-2">
							2
						</div>
						<div className="text-[var(--color-forest-brown)] font-medium">
							Years Growing
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
