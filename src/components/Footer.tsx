'use client';

import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkerd } from 'react-icons/si';
import { usePrefs } from '@/components/PrefsProvider';

const links = [
	{ href: '#hero', key: 'home' },
	{ href: '#projects', key: 'projects' },
	{ href: '#skills', key: 'skills' },
	{ href: '#about', key: 'about' },
	{ href: '#contact', key: 'contact' },
] as const;

const socials = [
	{
		href: 'https://github.com/tobsBP',
		label: 'GitHub',
		icon: SiGithub,
	},
	{
		href: 'https://linkedin.com/in/tobias-bueno-92b382259',
		label: 'LinkedIn',
		icon: SiLinkerd,
	},
	{
		href: 'mailto:tobias.bp2004@gmail.com',
		label: 'Email',
		icon: MdOutlineEmail,
	},
];

export default function Footer() {
	const { t } = usePrefs();

	return (
		<footer className="mt-4 border-t border-line bg-bg">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
				{/* Nav links */}
				<nav className="flex gap-6 flex-wrap justify-center">
					{links.map(({ href, key }) => (
						<a
							key={href}
							href={href}
							className="text-sm text-subtle transition-colors hover:text-accent"
						>
							{t.nav[key]}
						</a>
					))}
				</nav>

				{/* Credit */}
				<p className="order-last text-xs text-subtle sm:order-none">
					© {new Date().getFullYear()} Tobias — {t.footer.credit}
				</p>

				{/* Socials */}
				<div className="flex gap-4">
					{socials.map(({ href, label, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target={href.startsWith('mailto') ? undefined : '_blank'}
							rel="noopener noreferrer"
							aria-label={label}
							className="text-subtle transition-colors hover:text-accent"
						>
							<Icon className="text-xl" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
