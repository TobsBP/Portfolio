import { z } from 'zod';

export const TechnologySchema = z.object({
	id: z.number(),
	name: z.string(),
	icon: z.uuid(),
});

export type Technology = z.infer<typeof TechnologySchema>;
