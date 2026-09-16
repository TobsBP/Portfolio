export type Locale = 'pt' | 'en';
export type Theme = 'light' | 'dark';

export const LOCALES: Locale[] = ['pt', 'en'];

/** Texto da interface. O conteudo dos projetos vem traduzido do Directus. */
const dictionaries = {
	en: {
		nav: {
			home: 'Home',
			projects: 'Projects',
			skills: 'Skills',
			about: 'About',
			contact: 'Contact',
		},
		hero: {
			role: 'Software Developer',
			// {texto} vira destaque em cor de acento
			bio: 'Full-stack engineer crafting scalable web applications with {Next.js}, {React} & {TypeScript}. Expert in database design ({PostgreSQL}, {MongoDB}, {Neo4j}), backend APIs ({Node.js}, {Fastify}), containerization & DevOps.',
			viewProjects: 'View projects',
			getInTouch: 'Get in touch',
			scroll: 'scroll',
		},
		projects: {
			title: 'Projects',
			live: 'Live',
			liveCount: (n: number) => `${n} running in production`,
			source: 'Source',
			sourceCount: (n: number) => `${n} on GitHub, no public deployment`,
			empty: 'The project list is empty. Add one in the CMS to see it here.',
		},
		skills: {
			title: 'Skills',
			count: (n: number) => `${n} technologies`,
			certificates: 'Certificates',
			certificatesCount: (n: number) => `${n} certificates`,
		},
		about: {
			title: 'About me',
			bio: 'Full-stack engineer specializing in modern web applications. Proficient in React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, and cloud platforms. Experienced with Docker, DevOps practices, and API development. Also exploring game development (Godot), IoT (Arduino), and data science (Python, Neo4j). Passionate about clean code and scalable architectures.',
			timeline: 'Timeline',
			funFacts: 'Fun facts',
			photoAlt: 'Profile photo',
			items: [
				{
					title: 'Started learning HTML and CSS',
					description: 'Began my journey with a course at IF.',
				},
				{
					title: 'IT technician',
					description:
						'Dived into IT fundamentals, programming basics and algorithms.',
				},
				{
					title: 'Started software engineering',
					description: 'Began my degree in computer science.',
				},
				{
					title: 'Joined the robotics club',
					description: 'Won four first places and one second place.',
				},
				{
					title: 'First real project',
					description:
						'Built my first real-world projects exploring web technologies and JavaScript.',
				},
				{
					title: 'Growing as a developer',
					description:
						'Expanded my skills with modern frameworks, tools and best practices.',
				},
			],
			facts: [
				{
					title: 'Robotics competitor',
					desc: 'Four first places and one second place in robotics competitions.',
				},
				{
					title: 'Security curious',
					desc: 'Interested in cybersecurity and how systems can be protected.',
				},
				{
					title: 'Started early',
					desc: 'Began learning HTML and CSS at 15, before formally studying engineering.',
				},
				{
					title: 'IT background',
					desc: 'Hands-on IT technician experience before becoming a developer.',
				},
				{
					title: 'Full-stack minded',
					desc: 'Enjoys working across the stack, from UI design to backend logic.',
				},
				{
					title: 'Fast learner',
					desc: 'From HTML to modern frameworks in a few years of self-driven study.',
				},
			],
		},
		contact: {
			title: 'Contact',
			intro:
				"I'm always open to new opportunities and conversations. Pick your preferred channel and let's talk.",
		},
		footer: { credit: 'Built with Next.js' },
		prefs: {
			theme: 'Switch theme',
			language: 'Switch language',
		},
	},
	pt: {
		nav: {
			home: 'Início',
			projects: 'Projetos',
			skills: 'Tecnologias',
			about: 'Sobre',
			contact: 'Contato',
		},
		hero: {
			role: 'Desenvolvedor de software',
			bio: 'Engenheiro full-stack construindo aplicações web escaláveis com {Next.js}, {React} e {TypeScript}. Modelagem de banco de dados ({PostgreSQL}, {MongoDB}, {Neo4j}), APIs de backend ({Node.js}, {Fastify}), containers e DevOps.',
			viewProjects: 'Ver projetos',
			getInTouch: 'Falar comigo',
			scroll: 'role',
		},
		projects: {
			title: 'Projetos',
			live: 'No ar',
			liveCount: (n: number) => `${n} rodando em produção`,
			source: 'Código',
			sourceCount: (n: number) => `${n} no GitHub, sem deploy público`,
			empty:
				'A lista de projetos está vazia. Cadastre um no CMS para vê-lo aqui.',
		},
		skills: {
			title: 'Tecnologias',
			count: (n: number) => `${n} tecnologias`,
			certificates: 'Certificados',
			certificatesCount: (n: number) => `${n} certificados`,
		},
		about: {
			title: 'Sobre mim',
			bio: 'Engenheiro full-stack especializado em aplicações web modernas. Trabalho com React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB e plataformas de nuvem, além de Docker, práticas de DevOps e desenvolvimento de APIs. Também exploro desenvolvimento de jogos (Godot), IoT (Arduino) e ciência de dados (Python, Neo4j). Gosto de código limpo e arquiteturas que escalam.',
			timeline: 'Linha do tempo',
			funFacts: 'Curiosidades',
			photoAlt: 'Foto de perfil',
			items: [
				{
					title: 'Comecei a aprender HTML e CSS',
					description: 'Primeiros passos em um curso no IF.',
				},
				{
					title: 'Técnico em informática',
					description:
						'Mergulhei em fundamentos de TI, lógica de programação e algoritmos.',
				},
				{
					title: 'Entrei na engenharia de software',
					description: 'Início da graduação em computação.',
				},
				{
					title: 'Entrei no clube de robótica',
					description: 'Quatro primeiros lugares e um segundo lugar.',
				},
				{
					title: 'Primeiro projeto real',
					description:
						'Construí meus primeiros projetos de verdade, explorando tecnologias web e JavaScript.',
				},
				{
					title: 'Crescendo como desenvolvedor',
					description:
						'Ampliei o repertório com frameworks modernos, ferramentas e boas práticas.',
				},
			],
			facts: [
				{
					title: 'Competidor de robótica',
					desc: 'Quatro primeiros lugares e um segundo lugar em competições de robótica.',
				},
				{
					title: 'Curioso por segurança',
					desc: 'Interessado em cibersegurança e em como proteger sistemas.',
				},
				{
					title: 'Comecei cedo',
					desc: 'Aprendi HTML e CSS aos 15 anos, antes de estudar engenharia formalmente.',
				},
				{
					title: 'Base em TI',
					desc: 'Experiência prática como técnico em informática antes de virar desenvolvedor.',
				},
				{
					title: 'Cabeça full-stack',
					desc: 'Gosto de transitar por toda a stack, do design de interface à lógica do backend.',
				},
				{
					title: 'Aprendo rápido',
					desc: 'De HTML a frameworks modernos em poucos anos de estudo por conta própria.',
				},
			],
		},
		contact: {
			title: 'Contato',
			intro:
				'Estou sempre aberto a novas oportunidades e conversas. Escolha o canal que preferir.',
		},
		footer: { credit: 'Feito com Next.js' },
		prefs: {
			theme: 'Alternar tema',
			language: 'Alternar idioma',
		},
	},
} as const;

export type Dictionary = (typeof dictionaries)['en'];

export function getDictionary(locale: Locale): Dictionary {
	return dictionaries[locale] as unknown as Dictionary;
}
