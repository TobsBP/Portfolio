export {
	type Project,
	ProjectSchema,
	ProjectTechnologySchema,
} from './project';
export { type Technology, TechnologySchema } from './technology';

import type { Project } from './project';
import type { Technology } from './technology';

export interface Schema {
	Projects: Project[];
	Technologies: Technology[];
}
