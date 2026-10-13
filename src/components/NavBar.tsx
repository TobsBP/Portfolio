'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePrefs } from '@/components/PrefsProvider';
import PrefsToggles from '@/components/PrefsToggles';

const links = [
	{ href: '#hero', key: 'home' },
	{ href: '#experience', key: 'experience' },
	{ href: '#projects', key: 'projects' },
	{ href: '#skills', key: 'skills' },
	{ href: '#about', key: 'about' },
	{ href: '#contact', key: 'contact' },
] as const;

export default function NavBar() {
	const { t } = usePrefs();
	const [active, setActive] = useState('#hero');

	useEffect(() => {
		const sectionIds = links.map((l) => l.href.slice(1));

		const observers = sectionIds.map((id) => {
			const el = document.getElementById(id);
			if (!el) return null;

			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) setActive(`#${id}`);
				},
				{ threshold: 0.4 },
			);
			obs.observe(el);
			return obs;
		});

		return () => {
			for (const obs of observers) obs?.disconnect();
		};
	}, []);

	return (
		<nav className="fixed top-0 z-50 flex w-full items-center border-b border-line bg-bg/80 px-6 py-3 backdrop-blur-xl">
			<a href="#hero" className="shrink-0">
				<Image
					alt="Site logo"
					width={40}
					height={40}
					src="/logo.png"
					priority
					className="rounded-full"
				/>
			</a>

			<div className="ml-4 flex min-w-0 flex-1 items-center justify-end gap-1">
				<div className="no-scrollbar flex items-center gap-1 overflow-x-auto">
					{links.map(({ href, key }) => {
						const isActive = active === href;
						return (
							<a
								key={href}
								href={href}
								className={`relative shrink-0 rounded-full px-3 py-1.5 text-sm font-medium transition-colors sm:px-4 ${
									isActive
										? 'text-accent-contrast'
										: 'text-muted hover:bg-fg/10 hover:text-fg'
								}`}
							>
								{isActive && (
									<motion.span
										layoutId="nav-pill"
										className="absolute inset-0 rounded-full bg-accent"
										transition={{ type: 'spring', stiffness: 380, damping: 30 }}
									/>
								)}
								<span className="relative z-10">{t.nav[key]}</span>
							</a>
						);
					})}
				</div>

				<div className="ml-1 shrink-0 border-l border-line pl-2">
					<PrefsToggles />
				</div>
			</div>
		</nav>
	);
}
