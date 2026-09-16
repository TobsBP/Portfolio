'use client';

import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkerd } from 'react-icons/si';
import FadeUp from '@/components/FadeUp';
import { usePrefs } from '@/components/PrefsProvider';

const contacts = [
	{
		href: 'mailto:tobias.bp2004@gmail.com',
		label: 'Email',
		value: 'tobias.bp2004@gmail.com',
		icon: MdOutlineEmail,
		external: false,
	},
	{
		href: 'https://github.com/tobsBP',
		label: 'GitHub',
		value: 'github.com/tobsBP',
		icon: SiGithub,
		external: true,
	},
	{
		href: 'https://linkedin.com/in/tobias-bueno-92b382259',
		label: 'LinkedIn',
		value: 'linkedin.com/in/tobias-bueno',
		icon: SiLinkerd,
		external: true,
	},
];

export default function ContactSection() {
	const { t } = usePrefs();

	return (
		<section id="contact" className="relative py-24 px-6 md:px-12 lg:px-24">
			{/* Ambient blob */}
			<div
				style={{
					position: 'absolute',
					bottom: '-80px',
					right: '-80px',
					width: '400px',
					height: '400px',
					borderRadius: '50%',
					filter: 'blur(80px)',
					background:
						'radial-gradient(ellipse, var(--accent-dim) 0%, transparent 70%)',
					pointerEvents: 'none',
					zIndex: 0,
					opacity: 'var(--blob-opacity)',
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section header */}
				<FadeUp>
					<div className="section-line mb-12">
						<h2 className="font-serif text-4xl text-fg md:text-5xl">
							{t.contact.title}
						</h2>
					</div>
				</FadeUp>

				<div className="max-w-xl">
					<FadeUp delay={0.1}>
						<p className="mb-10 text-base leading-relaxed text-muted">
							{t.contact.intro}
						</p>
					</FadeUp>

					<div className="flex flex-col gap-3">
						{contacts.map(({ href, label, value, icon: Icon, external }, i) => (
							<FadeUp key={label} delay={0.15 + i * 0.1}>
								<a
									href={href}
									target={external ? '_blank' : undefined}
									rel={external ? 'noopener noreferrer' : undefined}
									className="group glass flex items-center gap-5 rounded-2xl px-6 py-5"
								>
									<span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-fg/5 transition-all duration-200 group-hover:border-accent/50 group-hover:bg-accent/10">
										<Icon className="text-xl text-accent" />
									</span>
									<div className="flex flex-col gap-0.5">
										<span className="text-xs tracking-widest text-subtle uppercase">
											{label}
										</span>
										<span className="text-sm font-medium text-fg">{value}</span>
									</div>
									<svg
										className="ml-auto text-subtle transition-colors group-hover:text-accent"
										width="16"
										height="16"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<title>Open</title>
										<path d="M7 17L17 7M17 7H7M17 7v10" />
									</svg>
								</a>
							</FadeUp>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
