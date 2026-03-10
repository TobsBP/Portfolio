import { technologies } from '../data/technologies';

export default function Knowledge() {
	return (
		<div className="mt-8 ml-5 mr-5">
			<div className="text-white text-4xl mb-6">Knowledge</div>
			<div className="flex flex-wrap gap-3 justify-center">
				{technologies.map((tech) => (
					<div
						key={tech.name}
						className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-lg"
					>
						{tech.icon ? (
							<tech.icon className={`text-xl ${tech.color}`} />
						) : tech.letter ? (
							<span className={`text-xl font-bold ${tech.color}`}>
								{tech.letter}
							</span>
						) : null}
						<span className="text-white text-sm font-medium">{tech.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
