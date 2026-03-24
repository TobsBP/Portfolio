'use client';

import Image from 'next/image';
import { assetUrl } from '@/lib/directus';
import type { Project } from '@/types';

export default function ProjectCard({
	project,
	index,
}: {
	project: Project;
	index: number;
}) {
	const imageUrl = assetUrl(project.cover_img);

	return (
		<div className="border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/25 transition-colors duration-200">
			{/* Card top */}
			<div className="bg-zinc-950 h-48 relative flex items-center justify-center overflow-hidden select-none">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt={project.tittle}
						fill
						className="object-cover opacity-80"
					/>
				) : (
					<span className="text-zinc-800 text-8xl font-serif font-bold leading-none">
						{String(index + 1).padStart(2, '0')}
					</span>
				)}

				{/* Floating tech icons */}
				{project.technologies.length > 0 && (
					<div className="absolute top-4 right-4 flex gap-2.5 z-10">
						{project.technologies
							.slice(0, 4)
							.map(({ Technologies_id: tech }) => (
								<Image
									key={tech.id}
									src={assetUrl(tech.icon) ?? ''}
									alt={tech.name}
									width={20}
									height={20}
									className="opacity-60 drop-shadow object-contain"
									title={tech.name}
								/>
							))}
					</div>
				)}
			</div>

			{/* Content */}
			<div className="p-6 flex flex-col gap-4 flex-1">
				<a
					href={project.live_url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-white font-serif text-lg hover:underline underline-offset-4 flex items-center gap-1.5 group w-fit"
				>
					{project.tittle}
					<svg
						width="13"
						height="13"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
					>
						<title>Open</title>
						<path d="M7 17L17 7M17 7H7M17 7v10" />
					</svg>
				</a>

				<p className="text-zinc-400 text-sm leading-relaxed flex-1">
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2 pt-1">
					{project.technologies.map(({ Technologies_id: tech }) => (
						<span
							key={tech.id}
							className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300"
						>
							<Image
								src={assetUrl(tech.icon) ?? ''}
								alt={tech.name}
								width={14}
								height={14}
								className="object-contain"
							/>
							{tech.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}
