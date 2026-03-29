import { z } from 'zod';
import type { Project } from '@/types';
import { ProjectSchema, ProjectTechnologySchema } from '@/types/project';

export async function getProjects(): Promise<Project[]> {
	const BASE = process.env.NEXT_DIRECTUS_URL;
	if (!BASE) {
		console.warn('NEXT_DIRECTUS_URL is not set — returning empty projects');
		return [];
	}

	try {
		const [projectsRes, junctionRes] = await Promise.all([
			fetch(
				`${BASE}/items/Projects?fields=id,tittle,description,cover_img,live_url`,
			),
			fetch(
				`${BASE}/items/Projects_Technologies?fields=Projects_id,Technologies_id.*&limit=-1`,
			),
		]);

		if (!projectsRes.ok) throw new Error(`Projects: ${projectsRes.status}`);
		if (!junctionRes.ok) throw new Error(`Junction: ${junctionRes.status}`);

		const projectsJson = await projectsRes.json();
		const junctionJson = await junctionRes.json();

		const junctions = z.array(ProjectTechnologySchema).parse(junctionJson.data);

		const projects = projectsJson.data.map((p: unknown) => {
			const project = ProjectSchema.omit({ technologies: true }).parse(p);
			const technologies = junctions
				.filter((j) => j.Projects_id === project.id)
				.map((j) => ({ Technologies_id: j.Technologies_id }));
			return { ...project, technologies };
		});

		return projects as Project[];
	} catch (err) {
		console.error('Failed to fetch projects:', err);
		return [];
	}
}
