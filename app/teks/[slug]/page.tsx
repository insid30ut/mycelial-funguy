import { getTekBySlug, getTeks } from "lib/teks";
import React from "react";

export async function generateStaticParams() {
	const teks = getTeks();
	return teks.map((tek) => ({
		slug: tek.slug,
	}));
}

export default async function TekDetailPage({
	params,
}: {
	params: { slug: string };
}) {
	const tek = await getTekBySlug(params.slug);

	if (!tek) {
		return <div>Tek not found</div>; // Or a 404 page
	}

	return (
		<div>
			<h1>{tek.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: tek.content }} />
		</div>
	);
}
