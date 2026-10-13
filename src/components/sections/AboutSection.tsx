'use client';

import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import { usePrefs } from '@/components/PrefsProvider';

const timelineYears = [
	'2019',
	'2020',
	'2023',
	'2024',
	'2024',
	'2025',
	'2026',
	'2026',
];
const factIcons = ['🤖', '🔐', '⚡', '🛠️', '🌐', '📈'];

export default function AboutSection() {
	const { t } = usePrefs();
	const timelineItems = t.about.items.map((item, i) => ({
		...item,
		year: timelineYears[i],
	}));
	const funFacts = t.about.facts.map((fact, i) => ({
		...fact,
		icon: factIcons[i],
	}));

	return (
		<section id="about" className="relative py-24 px-6 md:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<FadeUp>
					<div className="section-line mb-12">
						<h2 className="font-serif text-4xl text-fg md:text-5xl">
							{t.about.title}
						</h2>
					</div>
				</FadeUp>

				{/* Profile card */}
				<FadeUp delay={0.1}>
					<div className="glass rounded-2xl p-6 mb-16 max-w-2xl flex gap-6 items-center">
						<div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-accent/30 md:h-28 md:w-28">
							<Image
								src="/profilePicture.jpeg"
								alt={t.about.photoAlt}
								width={112}
								height={112}
								className="w-full h-full object-cover"
								priority
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="font-serif text-xl text-fg">Tobias</h3>
							<p className="text-sm leading-relaxed text-muted">
								{t.about.bio}
							</p>
						</div>
					</div>
				</FadeUp>

				{/* Timeline + Fun facts */}
				<div className="flex flex-col lg:flex-row gap-12 items-start">
					{/* Timeline */}
					<div className="flex-1 relative">
						<FadeUp>
							<h3 className="mb-8 font-serif text-2xl text-fg">
								{t.about.timeline}
							</h3>
						</FadeUp>

						<div className="relative">
							{/* Vertical line */}
							<div className="absolute top-2 bottom-2 left-18 w-px bg-linear-to-b from-accent/40 via-accent/20 to-transparent" />

							<div className="flex flex-col gap-8">
								{timelineItems.map((item, i) => (
									<FadeUp key={item.title} delay={i * 0.08}>
										<div className="flex gap-6 items-start relative">
											<div className="w-14 shrink-0 text-right pt-0.5">
												<span className="font-mono text-xs text-accent/70">
													{item.year}
												</span>
											</div>
											<div className="timeline-dot z-10 mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-bg bg-accent" />
											<div className="glass rounded-xl p-4 flex-1">
												<h4 className="mb-1 font-serif text-sm text-fg">
													{item.title}
												</h4>
												<p className="text-xs leading-relaxed text-muted">
													{item.description}
												</p>
											</div>
										</div>
									</FadeUp>
								))}
							</div>
						</div>
					</div>

					{/* Fun facts */}
					<div className="w-full lg:w-80 shrink-0">
						<FadeUp>
							<h3 className="mb-8 font-serif text-2xl text-fg">
								{t.about.funFacts}
							</h3>
						</FadeUp>
						<div className="flex flex-col gap-3">
							{funFacts.map((fact, i) => (
								<FadeUp key={fact.title} delay={i * 0.07}>
									<div className="glass rounded-xl p-4 flex gap-3 items-start">
										<span className="text-xl">{fact.icon}</span>
										<div>
											<h4 className="mb-1 text-sm font-semibold text-fg">
												{fact.title}
											</h4>
											<p className="text-xs leading-relaxed text-muted">
												{fact.desc}
											</p>
										</div>
									</div>
								</FadeUp>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
