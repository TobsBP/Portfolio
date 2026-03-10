'use client';

import { technologies } from '../data/technologies';

export default function TechGrid() {
	return (
		<div className="flex flex-wrap gap-3 mb-16 justify-center">
			{technologies.map((tech, i) => {
				const Icon = tech.icon;
				return (
					<div
						key={tech.name}
						style={{ animationDelay: `${i * 45}ms` }}
						className="opacity-0 animate-fade-in-up flex items-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-800 hover:scale-105 hover:-translate-y-0.5 px-4 py-2.5 rounded-xl transition-all duration-200 cursor-default"
					>
						{Icon ? (
							<Icon className={`text-xl ${tech.color}`} />
						) : (
							<span className={`text-sm font-bold leading-none ${tech.color}`}>
								{tech.letter}
							</span>
						)}
						<span className="text-white text-sm font-medium">{tech.name}</span>
					</div>
				);
			})}
		</div>
	);
}
