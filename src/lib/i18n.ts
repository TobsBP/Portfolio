export type Locale = 'pt' | 'en';
export type Theme = 'light' | 'dark';

export const LOCALES: Locale[] = ['pt', 'en'];

/** Texto da interface. O conteudo dos projetos vem traduzido do Directus. */
const dictionaries = {
	en: {
		nav: {
			home: 'Home',
			experience: 'Experience',
			projects: 'Projects',
			skills: 'Skills',
			about: 'About',
			contact: 'Contact',
		},
		hero: {
			role: 'Development Manager · Full-stack',
			// {texto} vira destaque em cor de acento
			bio: "Development manager at {Upvox}, where I built a platform serving {600+ active customers} end to end, and full-stack at {Mulher em Forma}, an app with 1.1M+ students. Full-stack with {Next.js}, {TypeScript}, {Node.js}, {PostgreSQL} and {Supabase}, and award winner at Inatel's FETIN with {OneFit}.",
			viewProjects: 'View projects',
			getInTouch: 'Get in touch',
			scroll: 'scroll',
		},
		experience: {
			title: 'Experience',
			now: 'Now',
			jobs: [
				{
					company: 'Upvox',
					role: 'Development Manager',
					metric: { value: '600+', label: 'active customers in production' },
					summary:
						'I lead development at Upvox, the course and tools platform behind {Profissão Laser}, and built it end to end, back end and front end. It runs in production with {600+ active customers}, Stripe subscriptions and Redis.',
					highlights: [
						'Multi-tenant platform: API gateway, shared Zod contracts and Firebase Auth',
						'Stripe subscriptions plus usage credits for paid tools',
						'AI tools for laser work: vectorizing, DXF export, background removal',
						'One design system for Next.js and Expo (React Native Web + NativeWind)',
					],
					stack: [
						'Next.js',
						'TypeScript',
						'Node.js',
						'Fastify',
						'PostgreSQL',
						'Supabase',
						'Drizzle',
						'Redis',
						'Stripe',
					],
					link: 'https://www.profissaolaser.com.br/',
					linkLabel: 'profissaolaser.com.br',
					image: '/profissao-laser.jpg',
				},
				{
					company: 'Mulher em Forma',
					role: 'Junior Full-stack Developer',
					metric: { value: '1.1M+', label: 'students on the platform' },
					summary:
						"Full-stack across the {Mulher em Forma} ecosystem, a women's fitness app with {1.1 million+ students} and 50k+ downloads on Google Play: React Native app, GraphQL BFF and Node.js microservices.",
					highlights: [
						'Customer-support backoffice and the BFF behind it',
						'AI ticket triage: classification and RAG with Gemini + Qdrant, wired to Jira',
						'App APIs: GraphQL BFF, social, push notifications and the workout core',
					],
					stack: [
						'React Native',
						'TypeScript',
						'Node.js',
						'Fastify',
						'GraphQL',
						'PostgreSQL',
						'Prisma',
						'MongoDB',
						'Redis',
						'Firebase',
					],
					link: 'https://mulheremforma.com',
					linkLabel: 'mulheremforma.com',
					image: '/mulher-em-forma.jpg',
				},
			],
		},
		featured: {
			label: 'Featured project',
			title: 'OneFit',
			summary:
				'Your whole health team in one app: personal trainer, nutritionist, personal chef and physiotherapist working on the same plan. Mobile app in Expo, web dashboards per role, a GraphQL API over Strapi, a RAG assistant that drafts workouts and diets for professionals to review, and video consultations.',
			event: '45th FETIN · Inatel · 2026',
			awards: [
				'1st place · Social Impact',
				'2nd place · Technical Complexity',
				'Inatel Startups Award',
			],
			team: 'With José Roberto Pereira Neto and João Victor Ferreira Fraga',
			visit: 'Visit OneFit',
			source: 'Inatel news',
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
				{
					title: 'Development manager at Upvox',
					description:
						'Built Profissão Laser end to end: 600+ active customers, Stripe and Redis.',
				},
				{
					title: 'OneFit awarded at the 45th FETIN',
					description:
						'1st in Social Impact, 2nd in Technical Complexity and the Inatel Startups Award.',
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
			experience: 'Experiência',
			projects: 'Projetos',
			skills: 'Tecnologias',
			about: 'Sobre',
			contact: 'Contato',
		},
		hero: {
			role: 'Gerente de desenvolvimento · Full-stack',
			bio: 'Gerente de desenvolvimento na {Upvox}, onde construí de ponta a ponta uma plataforma com {mais de 600 clientes ativos}, e full-stack na {Mulher em Forma}, app com mais de 1,1 milhão de alunas. Full-stack com {Next.js}, {TypeScript}, {Node.js}, {PostgreSQL} e {Supabase}, e premiado na FETIN do Inatel com o {OneFit}.',
			viewProjects: 'Ver projetos',
			getInTouch: 'Falar comigo',
			scroll: 'role',
		},
		experience: {
			title: 'Experiência',
			now: 'Atual',
			jobs: [
				{
					company: 'Upvox',
					role: 'Gerente de desenvolvimento',
					metric: { value: '600+', label: 'clientes ativos em produção' },
					summary:
						'Lidero o desenvolvimento da Upvox, a plataforma de cursos e ferramentas por trás da {Profissão Laser}, e construí tudo de ponta a ponta, back-end e front-end. Está em produção com {mais de 600 clientes ativos}, assinaturas via Stripe e Redis.',
					highlights: [
						'Plataforma multi-tenant: API gateway, contratos Zod compartilhados e Firebase Auth',
						'Assinaturas no Stripe e créditos por uso das ferramentas pagas',
						'Ferramentas com IA para o laser: vetorização, exportação DXF, remoção de fundo',
						'Um design system para Next.js e Expo (React Native Web + NativeWind)',
					],
					stack: [
						'Next.js',
						'TypeScript',
						'Node.js',
						'Fastify',
						'PostgreSQL',
						'Supabase',
						'Drizzle',
						'Redis',
						'Stripe',
					],
					link: 'https://www.profissaolaser.com.br/',
					linkLabel: 'profissaolaser.com.br',
					image: '/profissao-laser.jpg',
				},
				{
					company: 'Mulher em Forma',
					role: 'Desenvolvedor full-stack júnior',
					metric: { value: '1,1 mi+', label: 'alunas na plataforma' },
					summary:
						'Full-stack no ecossistema da {Mulher em Forma}, app de fitness feminino com {mais de 1,1 milhão de alunas} e 50 mil+ downloads na Google Play: app React Native, BFF GraphQL e microsserviços em Node.js.',
					highlights: [
						'Backoffice de atendimento e o BFF que o alimenta',
						'Triagem de tickets com IA: classificação e RAG com Gemini + Qdrant, integrada ao Jira',
						'APIs do app: BFF GraphQL, social, notificações push e core de treinos',
					],
					stack: [
						'React Native',
						'TypeScript',
						'Node.js',
						'Fastify',
						'GraphQL',
						'PostgreSQL',
						'Prisma',
						'MongoDB',
						'Redis',
						'Firebase',
					],
					link: 'https://mulheremforma.com',
					linkLabel: 'mulheremforma.com',
					image: '/mulher-em-forma.jpg',
				},
			],
		},
		featured: {
			label: 'Projeto em destaque',
			title: 'OneFit',
			summary:
				'Seu time de saúde inteiro no mesmo app: personal, nutricionista, personal chef e fisioterapeuta trabalhando sobre o mesmo plano. App mobile em Expo, painéis web por papel, API GraphQL sobre Strapi, assistente RAG que rascunha treinos e dietas para o profissional revisar e consultas por vídeo.',
			event: '45ª FETIN · Inatel · 2026',
			awards: [
				'1º lugar · Impacto Social',
				'2º lugar · Complexidade Técnica',
				'Prêmio Inatel Startups',
			],
			team: 'Com José Roberto Pereira Neto e João Victor Ferreira Fraga',
			visit: 'Conhecer o OneFit',
			source: 'Notícia do Inatel',
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
				{
					title: 'Gerente de desenvolvimento na Upvox',
					description:
						'Construí a Profissão Laser de ponta a ponta: mais de 600 clientes ativos, Stripe e Redis.',
				},
				{
					title: 'OneFit premiado na 45ª FETIN',
					description:
						'1º em Impacto Social, 2º em Complexidade Técnica e Prêmio Inatel Startups.',
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
