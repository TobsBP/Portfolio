'use client';

import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkerd } from 'react-icons/si';
import FadeUp from '@/components/FadeUp';

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
						'radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)',
					pointerEvents: 'none',
					zIndex: 0,
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto">
				{/* Section header */}
				<FadeUp>
					<div className="section-line mb-12">
						<h2 className="text-white text-4xl md:text-5xl font-serif">
							Contact
						</h2>
					</div>
				</FadeUp>

				<div className="max-w-xl">
					<FadeUp delay={0.1}>
						<p className="text-zinc-400 text-base leading-relaxed mb-10">
							I&apos;m always open to new opportunities and conversations. Pick
							your preferred channel and let&apos;s talk.
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
									<span className="flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 border border-sky-400/20 group-hover:border-sky-400/50 group-hover:bg-sky-400/10 transition-all duration-200 shrink-0">
										<Icon className="text-xl text-sky-400" />
									</span>
									<div className="flex flex-col gap-0.5">
										<span className="text-zinc-500 text-xs uppercase tracking-widest">
											{label}
										</span>
										<span className="text-white text-sm font-medium">
											{value}
										</span>
									</div>
									<svg
										className="ml-auto text-zinc-700 group-hover:text-sky-400 transition-colors"
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
