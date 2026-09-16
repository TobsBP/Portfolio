import { z } from 'zod';
import { TechnologySchema } from './technology';

export const ProjectTechnologySchema = z.object({
	Projects_id: z.number().optional(),
	Technologies_id: TechnologySchema,
});

export const ProjectSchema = z.object({
	id: z.number(),
	tittle: z.string(),
	description: z.string(),
	description_pt: z.string().nullable().optional(),
	description_en: z.string().nullable().optional(),
	cover_img: z.uuid().nullable(),
	live_url: z.url(),
	technologies: z.array(ProjectTechnologySchema).optional().default([]),
});

export type Project = z.infer<typeof ProjectSchema>;
