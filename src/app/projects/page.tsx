import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/services/projects';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<div className="bg-black min-h-screen">
			<main className="px-8 py-10">
				<div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
					<h1 className="text-white text-4xl font-serif">Projects</h1>
					<span className="text-zinc-600 text-sm font-mono">
						{projects.length} projects
					</span>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{projects.map((project, i) => (
						<ProjectCard key={project.id} project={project} index={i} />
					))}
				</div>
			</main>
		</div>
	);
}
