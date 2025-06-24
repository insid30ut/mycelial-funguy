"use client";

import React from "react";
import Link from "next/link";
import { Tek } from "lib/teks";
import { getDifficultyColor } from "lib/teks.utils";

interface TekCardProps {
	tek: Tek;
}

const TekCard: React.FC<TekCardProps> = ({ tek }) => {
	const difficultyColor = getDifficultyColor(tek.difficulty);

	return (
		<Link
			href={`/teks/${tek.slug}`}
			className="block group"
		>
			<article className="organic-card p-6 h-full border-l-4 border-[var(--color-electric-blue)]/50">
				{/* Header */}
				<div className="flex items-start justify-between mb-4">
					<div className="flex-1">
						<h3 className="text-lg font-bold text-[var(--color-forest-brown-dark)] group-hover:text-[var(--color-electric-blue)] transition-colors duration-300 mb-2">
							{tek.title}
						</h3>

						{/* Difficulty and Time */}
						<div className="flex items-center space-x-3 mb-3">
							<span className={`difficulty-badge ${difficultyColor}`}>
								{tek.difficulty}
							</span>
							<div className="flex items-center text-sm text-[var(--color-forest-brown)]/70">
								<svg
									className="w-4 h-4 mr-1"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<circle
										cx="12"
										cy="12"
										r="10"
									/>
									<polyline points="12,6 12,12 16,14" />
								</svg>
								{tek.time}
							</div>
						</div>
					</div>

					{/* Visual Indicator */}
					<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-electric-blue)] to-[var(--color-deep-purple)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
						<svg
							className="w-6 h-6 text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
							/>
						</svg>
					</div>
				</div>

				{/* Description */}
				<p className="text-[var(--color-forest-brown)] leading-relaxed mb-4">
					{tek.description}
				</p>

				{/* Materials Preview */}
				<div className="mb-4">
					<h4 className="text-sm font-semibold text-[var(--color-forest-brown-dark)] mb-2">
						Key Materials:
					</h4>
					<div className="flex flex-wrap gap-1">
						{tek.materials.slice(0, 3).map((material, index) => (
							<span
								key={index}
								className="px-2 py-1 bg-[var(--color-warm-cream)] text-[var(--color-forest-brown)] text-xs rounded-full border border-[var(--color-earth-green)]/20"
							>
								{material}
							</span>
						))}
						{tek.materials.length > 3 && (
							<span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
								+{tek.materials.length - 3} more
							</span>
						)}
					</div>
				</div>

				{/* Read Tutorial Link */}
				<div className="pt-2 border-t border-[var(--color-earth-green)]/20">
					<span className="inline-flex items-center text-[var(--color-electric-blue)] font-medium group-hover:text-[var(--color-deep-purple)] transition-colors duration-300">
						View Tutorial
						<svg
							className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</span>
				</div>
			</article>
		</Link>
	);
};

export default TekCard;
