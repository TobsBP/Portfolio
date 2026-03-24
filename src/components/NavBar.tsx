'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/knowledge', label: 'Knowledge' },
	{ href: '/about', label: 'About Me' },
	{ href: '/contact', label: 'Contact' },
];

export default function NavBar() {
	const pathname = usePathname();

	return (
		<nav className="sticky top-0 z-50 flex items-center px-6 py-3 bg-black/60 backdrop-blur-md border-b border-white/10">
			<Link href="/">
				<Image
					alt="Site logo"
					width={48}
					height={48}
					src="/logo.png"
					priority
					className="rounded-full"
				/>
			</Link>

			<div className="ml-auto flex items-center gap-1">
				{links.map(({ href, label }) => {
					const active = pathname === href;
					return (
						<Link
							key={href}
							href={href}
							className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
								active
									? 'text-black'
									: 'text-zinc-400 hover:text-white hover:bg-white/10'
							}`}
						>
							{active && (
								<motion.span
									layoutId="nav-pill"
									className="absolute inset-0 rounded-full bg-white"
									transition={{ type: 'spring', stiffness: 380, damping: 30 }}
								/>
							)}
							<span className="relative z-10">{label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
