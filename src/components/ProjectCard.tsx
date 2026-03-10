'use client';

import Image from 'next/image';
import { projects } from '../data/projects';

export default function ProjectCard() {
	return (
		<section className="px-8 py-10">
			{/* Header */}
			<div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
				<h1 className="text-white text-4xl font-serif">Projects</h1>
				<span className="text-zinc-600 text-sm font-mono">
					{projects.length} projects
				</span>
			</div>

			{/* Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{projects.map((project, i) => (
					<div
						key={project.title}
						className="border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-white/25 transition-colors duration-200"
					>
						{/* Card top */}
						<div className="bg-zinc-950 h-48 relative flex items-center justify-center overflow-hidden select-none">
							{project.image ? (
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-cover opacity-80"
								/>
							) : (
								<span className="text-zinc-800 text-8xl font-serif font-bold leading-none">
									{String(i + 1).padStart(2, '0')}
								</span>
							)}
							{/* Floating tech icons */}
							<div className="absolute top-4 right-4 flex gap-2.5 z-10">
								{project.techs.slice(0, 4).map((tech) => (
									<tech.icon
										key={tech.name}
										className="text-white/60 text-lg drop-shadow"
										title={tech.name}
									/>
								))}
							</div>
						</div>

						{/* Content */}
						<div className="p-6 flex flex-col gap-4 flex-1">
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-white font-serif text-lg hover:underline underline-offset-4 flex items-center gap-1.5 group w-fit"
							>
								{project.title}
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
								{project.techs.map((tech) => (
									<span
										key={tech.name}
										className="flex items-center gap-1.5 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full text-xs text-zinc-300"
									>
										<tech.icon className="text-sm" />
										{tech.name}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
