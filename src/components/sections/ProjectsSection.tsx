'use client';

import FadeUp from '@/components/FadeUp';
import ProjectCard from '@/components/ProjectCard';
import type { Project } from '@/types';

interface ProjectsSectionProps {
	projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
	return (
		<section id="projects" className="relative py-24 px-6 md:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<FadeUp>
					<div className="section-line mb-12">
						<div className="flex items-end gap-4">
							<h2 className="text-white text-4xl md:text-5xl font-serif">
								Projects
							</h2>
							<span className="text-sky-400/60 text-sm font-mono pb-1">
								{projects.length} projects
							</span>
						</div>
					</div>
				</FadeUp>

				{/* Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, i) => (
						<FadeUp key={project.id} delay={i * 0.1}>
							<ProjectCard project={project} index={i} />
						</FadeUp>
					))}

					{projects.length === 0 && (
						<FadeUp className="col-span-2">
							<div className="glass rounded-2xl p-12 text-center">
								<p className="text-zinc-500 text-sm">No projects yet.</p>
							</div>
						</FadeUp>
					)}
				</div>
			</div>
		</section>
	);
}
