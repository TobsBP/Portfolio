import Image from 'next/image';
import { usePrefs } from '@/components/PrefsProvider';

// ponytail: fica no codigo e nao no Directus porque premios e equipe nao cabem no schema de Projects
const ONEFIT_URL = 'https://web-onefit.vercel.app';
const INATEL_URL =
	'https://inatel.br/noticias/45-fetin-celebra-ideias-que-ganham-vida-na-engenharia';
const STACK = [
	'Expo',
	'React Native',
	'Next.js 16',
	'GraphQL (Apollo)',
	'Strapi v5',
	'MongoDB',
	'Redis',
	'Qdrant (RAG)',
	'Firebase Auth',
];

/** OneFit: projeto premiado na FETIN, com mais espaco que um card comum. */
export default function FeaturedProject() {
	const { t } = usePrefs();
	const f = t.featured;

	return (
		<article className="card-border glass mb-20 grid overflow-hidden rounded-2xl lg:grid-cols-[minmax(0,1.15fr)_1fr]">
			<a
				href={ONEFIT_URL}
				target="_blank"
				rel="noopener noreferrer"
				className="project-card relative block overflow-hidden border-line max-lg:border-b lg:border-r focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent"
			>
				<Image
					src="/onefit.jpg"
					alt="OneFit"
					width={1440}
					height={900}
					sizes="(max-width: 1024px) 100vw, 720px"
					className="project-card-img h-full w-full object-cover object-left-top"
				/>
			</a>

			<div className="flex flex-col gap-5 p-6 md:p-8">
				<p className="font-mono text-xs tracking-[0.25em] text-accent uppercase">
					{f.label}
				</p>
				<h3 className="font-serif text-5xl leading-none text-fg">{f.title}</h3>
				<p className="text-sm leading-relaxed text-muted">{f.summary}</p>

				<div>
					<p className="mb-2.5 font-mono text-xs text-subtle">{f.event}</p>
					<ul className="flex flex-col gap-2">
						{f.awards.map((award, i) => (
							<li
								key={award}
								className="flex items-center gap-3 text-sm text-fg"
							>
								<span aria-hidden="true" className="text-base">
									{['🥇', '🥈', '🚀'][i]}
								</span>
								{award}
							</li>
						))}
					</ul>
				</div>

				<p className="text-xs text-subtle">{f.team}</p>

				<ul className="flex flex-wrap gap-2">
					{STACK.map((s) => (
						<li
							key={s}
							className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-subtle"
						>
							{s}
						</li>
					))}
				</ul>

				<div className="mt-auto flex flex-wrap gap-3 pt-2">
					<a
						href={ONEFIT_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-contrast transition-opacity hover:opacity-90"
					>
						{f.visit} &#8599;
					</a>
					<a
						href={INATEL_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="glass rounded-full px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:text-accent"
					>
						{f.source} &#8599;
					</a>
				</div>
			</div>
		</article>
	);
}
