import { z } from 'zod';
import { TechnologySchema } from './technology';

const ProjectTechnologySchema = z.object({
	Technologies_id: TechnologySchema,
});

export const ProjectSchema = z.object({
	id: z.number(),
	tittle: z.string(), // typo mantido — é o nome do campo no Directus
	description: z.string(),
	cover_img: z.string().uuid().nullable(),
	live_url: z.string().url(),
	technologies: z.array(ProjectTechnologySchema).optional().default([]),
});

export type Project = z.infer<typeof ProjectSchema>;
