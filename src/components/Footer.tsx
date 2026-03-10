import Link from 'next/link';
import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkerd } from 'react-icons/si';

const links = [
	{ href: '/', label: 'Home' },
	{ href: '/about', label: 'About Me' },
	{ href: '/contact', label: 'Contact' },
];

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
	return (
		<footer className="mt-16 border-t border-white/10 bg-black">
			<div className="max-w-5xl mx-auto px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
				{/* Nav links */}
				<nav className="flex gap-6">
					{links.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="text-zinc-500 text-sm hover:text-white transition-colors"
						>
							{label}
						</Link>
					))}
				</nav>

				{/* Crédito central */}
				<p className="text-zinc-600 text-xs order-last sm:order-0">
					© {new Date().getFullYear()} Tobias — Built with Next.js
				</p>

				{/* Sociais */}
				<div className="flex gap-4">
					{socials.map(({ href, label, icon: Icon }) => (
						<a
							key={label}
							href={href}
							target={href.startsWith('mailto') ? undefined : '_blank'}
							rel="noopener noreferrer"
							aria-label={label}
							className="text-zinc-500 hover:text-white transition-colors"
						>
							<Icon className="text-xl" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
