'use client';

import Image from 'next/image';
import FadeUp from '@/components/FadeUp';
import Highlight from '@/components/Highlight';
import { usePrefs } from '@/components/PrefsProvider';

export default function ExperienceSection() {
	const { t } = usePrefs();

	return (
		<section id="experience" className="relative px-6 py-24 md:px-12 lg:px-24">
			<div className="mx-auto max-w-7xl">
				<FadeUp>
					<div className="section-line mb-14">
						<h2 className="font-serif text-4xl text-fg md:text-5xl">
							{t.experience.title}
						</h2>
					</div>
				</FadeUp>

				<div className="flex flex-col gap-6">
					{t.experience.jobs.map((job, i) => (
						<FadeUp key={job.company} delay={i * 0.1}>
							<article
								className={`glass grid gap-8 rounded-2xl p-6 md:p-8 ${'image' in job ? 'lg:grid-cols-[1fr_minmax(0,1.1fr)]' : ''}`}
							>
								<div className="flex flex-col gap-5">
									<div className="flex flex-wrap items-center gap-3">
										<span className="rounded-full border border-accent/40 px-2.5 py-0.5 font-mono text-[11px] tracking-widest text-accent uppercase">
											{t.experience.now}
										</span>
										<span className="text-sm text-subtle">{job.role}</span>
									</div>

									<h3 className="font-serif text-4xl leading-none text-fg md:text-5xl">
										{job.company}
									</h3>

									{'metric' in job && (
										<p className="flex items-baseline gap-3">
											<span className="gradient-text font-serif text-6xl leading-none md:text-7xl">
												{job.metric.value}
											</span>
											<span className="max-w-[14ch] text-sm leading-snug text-muted">
												{job.metric.label}
											</span>
										</p>
									)}

									<p className="max-w-[60ch] text-base leading-relaxed text-muted">
										<Highlight text={job.summary} />
									</p>

									<ul className="flex flex-col gap-1.5 text-sm text-muted">
										{job.highlights.map((h) => (
											<li key={h} className="flex gap-2">
												<span aria-hidden="true" className="text-accent">
													→
												</span>
												{h}
											</li>
										))}
									</ul>

									{'stack' in job && (
										<ul className="mt-auto flex flex-wrap gap-2 pt-2">
											{job.stack.map((s) => (
												<li
													key={s}
													className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-subtle"
												>
													{s}
												</li>
											))}
										</ul>
									)}
								</div>

								{'image' in job && (
									<a
										href={job.link}
										target="_blank"
										rel="noopener noreferrer"
										className="project-card group relative block self-start overflow-hidden rounded-xl border border-line focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
									>
										<Image
											src={job.image}
											alt={job.linkLabel}
											width={1440}
											height={900}
											sizes="(max-width: 1024px) 100vw, 640px"
											className="project-card-img h-auto w-full"
										/>
										<span className="absolute right-3 bottom-3 rounded-full bg-bg/80 px-3 py-1 text-xs text-fg backdrop-blur group-hover:text-accent">
											{job.linkLabel} &#8599;
										</span>
									</a>
								)}
							</article>
						</FadeUp>
					))}
				</div>
			</div>
		</section>
	);
}
