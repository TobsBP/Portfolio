import type { Project } from '@/types';
import { ProjectSchema } from '@/types';

const FIELDS =
	'id,tittle,description,cover_img,live_url,technologies.Technologies_id.*';

export async function getProjects(): Promise<Project[]> {
	try {
		const url = `${process.env.NEXT_DIRECTUS_URL}/items/Projects?fields=${FIELDS}`;
		const res = await fetch(url);

		if (!res.ok) throw new Error(`Directus responded with ${res.status}`);

		const json = await res.json();
		return ProjectSchema.array().parse(json.data);
	} catch (err) {
		console.error('Failed to fetch projects:', err);
		return [];
	}
}
