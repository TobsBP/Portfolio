'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const links = [
	{ href: '#hero', label: 'Home' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#about', label: 'About' },
	{ href: '#contact', label: 'Contact' },
];

export default function NavBar() {
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
		<nav className="fixed top-0 z-50 w-full flex items-center px-6 py-3 bg-[#05050f]/80 backdrop-blur-xl border-b border-white/[0.06]">
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

			<div className="ml-auto flex items-center gap-1">
				{links.map(({ href, label }) => {
					const isActive = active === href;
					return (
						<a
							key={href}
							href={href}
							className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
								isActive
									? 'text-[#05050f]'
									: 'text-zinc-400 hover:text-white hover:bg-white/10'
							}`}
						>
							{isActive && (
								<motion.span
									layoutId="nav-pill"
									className="absolute inset-0 rounded-full bg-sky-400"
									transition={{ type: 'spring', stiffness: 380, damping: 30 }}
								/>
							)}
							<span className="relative z-10">{label}</span>
						</a>
					);
				})}
			</div>
		</nav>
	);
}
