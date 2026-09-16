import Image from 'next/image';
import { assetUrl } from '@/lib/directus';
import type { Project } from '@/types';

/** Projeto com deploy no ar: a captura da interface e o conteudo principal. */
export default function ProjectCard({
	project,
	description,
}: {
	project: Project;
	description: string;
}) {
	const imageUrl = assetUrl(project.cover_img);

	return (
		<a
			href={project.live_url}
			target="_blank"
			rel="noopener noreferrer"
			className="project-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
		>
			<div className="relative aspect-[16/10] overflow-hidden bg-line">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt=""
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
						className="project-card-img object-cover object-top"
					/>
				) : (
					<span className="absolute inset-0 flex items-center px-7 font-serif text-3xl leading-tight text-fg/25">
						{project.tittle}
					</span>
				)}
				<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg via-transparent to-transparent opacity-70" />
			</div>

			<div className="flex flex-1 flex-col gap-3 px-6 pt-5 pb-6">
				<h3 className="flex items-baseline gap-2 font-serif text-xl text-fg transition-colors group-hover:text-accent">
					{project.tittle}
					<span
						aria-hidden="true"
						className="translate-y-px text-accent/0 transition-colors duration-200 group-hover:text-accent/70"
					>
						&#8599;
					</span>
				</h3>

				<p className="line-clamp-3 text-sm leading-relaxed text-muted">
					{description}
				</p>

				{project.technologies.length > 0 && (
					<ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 pt-2">
						{project.technologies.map(({ Technologies_id: tech }) => (
							<li
								key={tech.id}
								className="flex items-center gap-1.5 text-xs text-subtle"
							>
								<Image
									src={assetUrl(tech.icon) ?? ''}
									alt=""
									width={13}
									height={13}
									className="object-contain opacity-60"
								/>
								{tech.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</a>
	);
}
