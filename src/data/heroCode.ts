export type Token = { text: string; cls: string };
export type Line = Token[];

export const lines: Line[] = [
	// const developer = {
	[
		{ text: 'const ', cls: 'text-purple-400' },
		{ text: 'developer', cls: 'text-blue-300' },
		{ text: ' = {', cls: 'text-zinc-300' },
	],
	// name
	[
		{ text: '  name', cls: 'text-red-300' },
		{ text: ': ', cls: 'text-zinc-300' },
		{ text: '"Tobias"', cls: 'text-green-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	// role
	[
		{ text: '  role', cls: 'text-red-300' },
		{ text: ': ', cls: 'text-zinc-300' },
		{ text: '"Full-Stack Dev"', cls: 'text-green-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	// available
	[
		{ text: '  available', cls: 'text-red-300' },
		{ text: ': ', cls: 'text-zinc-300' },
		{ text: 'true', cls: 'text-orange-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	// };
	[{ text: '};', cls: 'text-zinc-300' }],

	// blank
	[{ text: '', cls: '' }],

	// const skills = {
	[
		{ text: 'const ', cls: 'text-purple-400' },
		{ text: 'skills', cls: 'text-blue-300' },
		{ text: ' = {', cls: 'text-zinc-300' },
	],

	// frontend: [
	[
		{ text: '  frontend', cls: 'text-red-300' },
		{ text: ': [', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"Next.js"', cls: 'text-green-400' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"React"', cls: 'text-cyan-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"TypeScript"', cls: 'text-blue-400' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Tailwind CSS"', cls: 'text-sky-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"JavaScript"', cls: 'text-yellow-400' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Vite"', cls: 'text-purple-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[{ text: '  ],', cls: 'text-zinc-300' }],

	// backend: [
	[
		{ text: '  backend', cls: 'text-red-300' },
		{ text: ': [', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"Node.js"', cls: 'text-green-500' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Fastify"', cls: 'text-white' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"PostgreSQL"', cls: 'text-blue-400' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Prisma"', cls: 'text-teal-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"Supabase"', cls: 'text-emerald-400' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Docker"', cls: 'text-blue-500' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[{ text: '  ],', cls: 'text-zinc-300' }],

	// tools: [
	[
		{ text: '  tools', cls: 'text-red-300' },
		{ text: ': [', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"Git"', cls: 'text-orange-500' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Linux"', cls: 'text-yellow-300' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Python"', cls: 'text-yellow-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[
		{ text: '    ', cls: '' },
		{ text: '"Swagger"', cls: 'text-green-400' },
		{ text: ', ', cls: 'text-zinc-300' },
		{ text: '"Postman"', cls: 'text-orange-400' },
		{ text: ',', cls: 'text-zinc-300' },
	],
	[{ text: '  ],', cls: 'text-zinc-300' }],

	// };
	[{ text: '};', cls: 'text-zinc-300' }],

	// blank
	[{ text: '', cls: '' }],

	// export default developer;
	[
		{ text: 'export default ', cls: 'text-purple-400' },
		{ text: 'developer', cls: 'text-blue-300' },
		{ text: ';', cls: 'text-zinc-300' },
	],
];
