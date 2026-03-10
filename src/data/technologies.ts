import type { IconType } from 'react-icons';
import {
	SiArduino,
	SiBootstrap,
	SiCss,
	SiDocker,
	SiFastify,
	SiGit,
	SiGodotengine,
	SiGrafana,
	SiHtml5,
	SiJavascript,
	SiLinux,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPostgresql,
	SiPostman,
	SiPrisma,
	SiPython,
	SiReact,
	SiStrapi,
	SiStripe,
	SiSupabase,
	SiSwagger,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from 'react-icons/si';

export type Tech = {
	name: string;
	icon?: IconType;
	letter?: string;
	color: string;
};

export const technologies: Tech[] = [
	{ name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
	{ name: 'React', icon: SiReact, color: 'text-cyan-400' },
	{ name: 'TypeScript', icon: SiTypescript, color: 'text-blue-500' },
	{ name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
	{ name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
	{ name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
	{ name: 'Fastify', icon: SiFastify, color: 'text-white' },
	{ name: 'Supabase', icon: SiSupabase, color: 'text-emerald-400' },
	{ name: 'Swagger', icon: SiSwagger, color: 'text-green-400' },
	{ name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
	{ name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
	{ name: 'Git', icon: SiGit, color: 'text-orange-500' },
	{ name: 'Postman', icon: SiPostman, color: 'text-orange-400' },
	{ name: 'Linux', icon: SiLinux, color: 'text-yellow-300' },
	{ name: 'Prisma', icon: SiPrisma, color: 'text-teal-400' },
	{ name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
	{ name: 'CSS3', icon: SiCss, color: 'text-blue-400' },
	{ name: 'Python', icon: SiPython, color: 'text-yellow-400' },
	{ name: 'Vite', icon: SiVite, color: 'text-purple-400' },
	{ name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-500' },
	{ name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
	{ name: 'Strapi', icon: SiStrapi, color: 'text-indigo-400' },
	{ name: 'Stripe', icon: SiStripe, color: 'text-violet-400' },
	{ name: 'Grafana', icon: SiGrafana, color: 'text-orange-400' },
	{ name: 'Arduino', icon: SiArduino, color: 'text-teal-400' },
	{ name: 'Godot', icon: SiGodotengine, color: 'text-blue-400' },
	{ name: 'Neo4j', letter: 'N', color: 'text-green-400' },
];
