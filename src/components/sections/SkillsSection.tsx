'use client';

import FadeUp from '@/components/FadeUp';
import { certificates, issuerColors } from '@/data/certificates';
import { type Tech, technologies } from '@/data/technologies';

const VerifiedIcon = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		className="shrink-0 text-sky-400"
	>
		<title>Open credential</title>
		<path d="M7 17L17 7M17 7H7M17 7v10" />
	</svg>
);

function TechBadge({ tech }: { tech: Tech }) {
	const Icon = tech.icon;
	return (
		<div className="glass flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default shrink-0 hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200">
			{Icon ? (
				<Icon className={`text-lg ${tech.color}`} />
			) : (
				<span className={`text-sm font-bold leading-none ${tech.color}`}>
					{tech.letter}
				</span>
			)}
			<span className="text-white text-sm font-medium whitespace-nowrap">
				{tech.name}
			</span>
		</div>
	);
}

/* Split technologies into 3 rows for the marquee */
const row1 = technologies.slice(0, 9);
const row2 = technologies.slice(9, 18);
const row3 = technologies.slice(18);

export default function SkillsSection() {
	const verified = certificates.filter((c) => c.href);
	const unverified = certificates.filter((c) => !c.href);

	return (
		<section id="skills" className="relative py-24">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				{/* Section header */}
				<FadeUp>
					<div className="section-line mb-12">
						<div className="flex items-end gap-4">
							<h2 className="text-white text-4xl md:text-5xl font-serif">
								Skills
							</h2>
							<span className="text-sky-400/60 text-sm font-mono pb-1">
								{technologies.length} technologies
							</span>
						</div>
					</div>
				</FadeUp>
			</div>

			{/* Marquee rows — full width, overflow hidden */}
			<FadeUp delay={0.1}>
				<div className="overflow-hidden mb-20">
					{/* Row 1 → bounces left */}
					<div
						className="marquee-track"
						style={
							{
								'--marquee-offset': '-30%',
								'--marquee-duration': '28s',
							} as React.CSSProperties
						}
					>
						{row1.map((tech) => (
							<TechBadge key={tech.name} tech={tech} />
						))}
						{/* duplicate for continuous look */}
						{row1.map((tech) => (
							<TechBadge key={`dup-${tech.name}`} tech={tech} />
						))}
					</div>

					{/* Row 2 → bounces right (reverse) */}
					<div
						className="marquee-track reverse mt-3"
						style={
							{
								'--marquee-offset': '-30%',
								'--marquee-duration': '32s',
							} as React.CSSProperties
						}
					>
						{row2.map((tech) => (
							<TechBadge key={tech.name} tech={tech} />
						))}
						{row2.map((tech) => (
							<TechBadge key={`dup-${tech.name}`} tech={tech} />
						))}
					</div>

					{/* Row 3 → bounces left, slower */}
					<div
						className="marquee-track mt-3"
						style={
							{
								'--marquee-offset': '-20%',
								'--marquee-duration': '24s',
							} as React.CSSProperties
						}
					>
						{row3.map((tech) => (
							<TechBadge key={tech.name} tech={tech} />
						))}
						{row3.map((tech) => (
							<TechBadge key={`dup-${tech.name}`} tech={tech} />
						))}
					</div>
				</div>
			</FadeUp>

			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				{/* Certificates header */}
				<FadeUp>
					<div className="section-line mb-10">
						<div className="flex items-end gap-4">
							<h2 className="text-white text-4xl md:text-5xl font-serif">
								Certificates
							</h2>
							<span className="text-sky-400/60 text-sm font-mono pb-1">
								{certificates.length} certificates
							</span>
						</div>
					</div>
				</FadeUp>

				{/* Verified */}
				{verified.length > 0 && (
					<div className="mb-10">
						<FadeUp>
							<p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-5">
								Verified credentials
							</p>
						</FadeUp>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{verified.map(({ title, issuer, href }, i) => {
								const color = issuerColors[issuer] ?? 'text-zinc-400';
								return (
									<FadeUp key={title} delay={i * 0.08}>
										<a
											href={href}
											target="_blank"
											rel="noopener noreferrer"
											className="group card-border glass rounded-2xl p-5 flex flex-col gap-4 h-full"
										>
											<div className="flex items-center justify-between">
												<span
													className={`text-xs font-semibold uppercase tracking-wider ${color}`}
												>
													{issuer}
												</span>
												<VerifiedIcon />
											</div>
											<p className="text-white text-sm font-medium leading-snug flex-1">
												{title}
											</p>
											<span className="text-zinc-500 text-xs group-hover:text-sky-400 transition-colors">
												View credential →
											</span>
										</a>
									</FadeUp>
								);
							})}
						</div>
					</div>
				)}

				{/* Unverified */}
				{unverified.length > 0 && (
					<div>
						<FadeUp>
							<p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-5">
								Other certificates
							</p>
						</FadeUp>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
							{unverified.map(({ title, issuer }, i) => {
								const color = issuerColors[issuer] ?? 'text-zinc-400';
								return (
									<FadeUp key={title} delay={i * 0.08}>
										<div className="glass rounded-2xl p-5 flex flex-col gap-4">
											<span
												className={`text-xs font-semibold uppercase tracking-wider ${color}`}
											>
												{issuer}
											</span>
											<p className="text-white text-sm font-medium leading-snug flex-1">
												{title}
											</p>
										</div>
									</FadeUp>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
