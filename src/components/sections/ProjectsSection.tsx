'use client';

import FadeUp from '@/components/FadeUp';
import FeaturedProject from '@/components/FeaturedProject';
import { usePrefs } from '@/components/PrefsProvider';
import ProjectCard from '@/components/ProjectCard';
import ProjectRow from '@/components/ProjectRow';
import type { Project } from '@/types';

interface ProjectsSectionProps {
	projects: Project[];
}

const isDeployed = (p: Project) => !p.live_url.includes('github.com');

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
	const { locale, t } = usePrefs();
	const describe = (p: Project) =>
		(locale === 'pt' ? p.description_pt : p.description_en) ?? p.description;

	const deployed = projects.filter(isDeployed);
	const sourceOnly = projects.filter((p) => !isDeployed(p));

	return (
		<section id="projects" className="relative px-6 py-24 md:px-12 lg:px-24">
			<div className="mx-auto max-w-7xl">
				<FadeUp>
					<div className="section-line mb-14">
						<div className="flex items-end gap-4">
							<h2 className="font-serif text-4xl text-fg md:text-5xl">
								{t.projects.title}
							</h2>
							<span className="pb-1 font-mono text-sm text-accent/70">
								{projects.length + 1}
							</span>
						</div>
					</div>
				</FadeUp>

				<FadeUp>
					<FeaturedProject />
				</FadeUp>

				{deployed.length > 0 && (
					<FadeUp>
						<div className="mb-6 flex items-baseline gap-3">
							<h3 className="font-serif text-2xl text-fg">{t.projects.live}</h3>
							<p className="text-sm text-subtle">
								{t.projects.liveCount(deployed.length)}
							</p>
						</div>

						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
							{deployed.map((project) => (
								<ProjectCard
									key={project.id}
									project={project}
									description={describe(project)}
								/>
							))}
						</div>
					</FadeUp>
				)}

				{sourceOnly.length > 0 && (
					<FadeUp>
						<div className="mt-20 mb-2 flex items-baseline gap-3">
							<h3 className="font-serif text-2xl text-fg">
								{t.projects.source}
							</h3>
							<p className="text-sm text-subtle">
								{t.projects.sourceCount(sourceOnly.length)}
							</p>
						</div>

						<div className="grid grid-cols-1 border-b border-line md:grid-cols-2 md:gap-x-10">
							{sourceOnly.map((project) => (
								<ProjectRow
									key={project.id}
									project={project}
									description={describe(project)}
								/>
							))}
						</div>
					</FadeUp>
				)}

				{projects.length === 0 && (
					<p className="py-12 text-center text-sm text-subtle">
						{t.projects.empty}
					</p>
				)}
			</div>
		</section>
	);
}
