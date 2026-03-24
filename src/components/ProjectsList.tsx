'use client';

import { useProjects } from '@/hooks/useProjects';
import ProjectCard from './ProjectCard';

export default function ProjectsList() {
	const { projects, loading } = useProjects();

	if (loading)
		return <p className="text-zinc-600 text-sm font-mono">Loading...</p>;

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
					<ProjectCard key={project.id} project={project} index={i} />
				))}
			</div>
		</section>
	);
}
