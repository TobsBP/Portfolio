import type { Project } from '@/types';

/** Projeto sem deploy: nao ha interface para mostrar, entao o texto carrega a linha. */
export default function ProjectRow({
	project,
	description,
}: {
	project: Project;
	description: string;
}) {
	return (
		<a
			href={project.live_url}
			target="_blank"
			rel="noopener noreferrer"
			className="project-row group block border-t border-line py-5 pr-4 pl-4 transition-colors hover:bg-fg/4 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
		>
			<h3 className="flex items-baseline gap-2 font-serif text-lg text-fg transition-colors group-hover:text-accent">
				{project.tittle}
				<span
					aria-hidden="true"
					className="text-accent/0 transition-colors duration-200 group-hover:text-accent/70"
				>
					&#8599;
				</span>
			</h3>

			<p className="mt-1.5 line-clamp-2 max-w-[62ch] text-sm leading-relaxed text-subtle">
				{description}
			</p>

			{project.technologies.length > 0 && (
				<ul className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
					{project.technologies.map(({ Technologies_id: tech }) => (
						<li key={tech.id} className="text-[11px] text-subtle">
							{tech.name}
						</li>
					))}
				</ul>
			)}
		</a>
	);
}
