import type { IconType } from 'react-icons';
import {
	SiBootstrap,
	SiCss,
	SiDocker,
	SiFastify,
	SiHtml5,
	SiJavascript,
	SiNextdotjs,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiSupabase,
	SiSwagger,
	SiTailwindcss,
	SiTypescript,
	SiVite,
} from 'react-icons/si';

export type Project = {
	title: string;
	description: string;
	url: string;
	techs: { icon: IconType; name: string }[];
	image: string;
};

export const projects: Project[] = [
	{
		title: 'OiFit — Fitness Apparel Store',
		description:
			'E-commerce de roupas fitness criado com Next.js. A loja oferece coleções de tops, calças, shorts, conjuntos e macacões voltados para treino e performance. Design minimalista moderno com navegação por categorias e carrinho de compras.',
		url: 'https://oi-fit.vercel.app/',
		techs: [
			{ icon: SiNextdotjs, name: 'Next.js' },
			{ icon: SiReact, name: 'React' },
			{ icon: SiTailwindcss, name: 'Tailwind CSS' },
		],
		image: '/OiFIt.jpg',
	},
	{
		title: 'OiFit API',
		description:
			'API RESTful backend do e-commerce OiFit. Gerencia produtos, usuários, endereços e autenticação JWT. Arquitetura em camadas (routes, controllers, services, repositories) com validação via Zod e documentação Swagger interativa.',
		url: 'https://github.com/TobsBP/Oi-Fit-API',
		techs: [
			{ icon: SiFastify, name: 'Fastify' },
			{ icon: SiTypescript, name: 'TypeScript' },
			{ icon: SiSupabase, name: 'Supabase' },
			{ icon: SiDocker, name: 'Docker' },
			{ icon: SiSwagger, name: 'Swagger' },
		],
		image: '/oifitAPI.png',
	},
	{
		title: 'SoccerInfo',
		description:
			'Plataforma full-stack para gerenciamento de campeonatos de futebol com dashboard interativo. Permite gerenciar times, partidas e resultados com autenticação de usuários.',
		url: 'https://github.com/TobsBP/SoccerInfo',
		techs: [
			{ icon: SiNextdotjs, name: 'Next.js' },
			{ icon: SiTypescript, name: 'TypeScript' },
			{ icon: SiTailwindcss, name: 'Tailwind CSS' },
			{ icon: SiPostgresql, name: 'PostgreSQL' },
			{ icon: SiPrisma, name: 'Prisma' },
		],
		image: '/logo.png',
	},
	{
		title: 'Aero Coffee',
		description:
			'Interface frontend moderna para a cafeteria Aero Coffee. Aplicação React com TypeScript e Tailwind CSS, construída com Vite para desenvolvimento rápido e build otimizado.',
		url: 'https://github.com/TobsBP/Aero_Coffe_Front',
		techs: [
			{ icon: SiReact, name: 'React' },
			{ icon: SiTypescript, name: 'TypeScript' },
			{ icon: SiTailwindcss, name: 'Tailwind CSS' },
			{ icon: SiVite, name: 'Vite' },
		],
		image: '/logo.png',
	},
	{
		title: 'Student Performance Factors',
		description:
			'Visualização interativa de fatores que influenciam o desempenho acadêmico de estudantes. Analisa relações entre educação parental, tempo de estudo, suporte familiar, acesso à internet e outros fatores com as notas finais.',
		url: 'https://github.com/TobsBP/Student-Performance-Factors',
		techs: [
			{ icon: SiHtml5, name: 'HTML5' },
			{ icon: SiCss, name: 'CSS3' },
			{ icon: SiJavascript, name: 'JavaScript' },
			{ icon: SiPython, name: 'Python' },
			{ icon: SiVite, name: 'Vite' },
			{ icon: SiBootstrap, name: 'Bootstrap' },
		],
		image: '/logo.png',
	},
	{
		title: 'Nutri-Play',
		description:
			'Quiz game interativo sobre nutrição, vitaminas e minerais. Três níveis de dificuldade com sistema de vidas e tempo limite por questão. Perguntas aleatorizadas a cada sessão com bônus de velocidade.',
		url: 'https://github.com/TobsBP/Nutri-Play',
		techs: [
			{ icon: SiHtml5, name: 'HTML5' },
			{ icon: SiCss, name: 'CSS3' },
			{ icon: SiJavascript, name: 'JavaScript' },
		],
		image: '/logo.png',
	},
];
