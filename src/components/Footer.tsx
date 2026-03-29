import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkerd } from 'react-icons/si';

const links = [
	{ href: '#hero', label: 'Home' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#about', label: 'About' },
	{ href: '#contact', label: 'Contact' },
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
		<footer className="mt-4 border-t border-white/[0.06] bg-[#05050f]">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
				{/* Nav links */}
				<nav className="flex gap-6 flex-wrap justify-center">
					{links.map(({ href, label }) => (
						<a
							key={href}
							href={href}
							className="text-zinc-500 text-sm hover:text-sky-400 transition-colors"
						>
							{label}
						</a>
					))}
				</nav>

				{/* Credit */}
				<p className="text-zinc-600 text-xs order-last sm:order-none">
					© {new Date().getFullYear()} Tobias — Built with Next.js
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
							className="text-zinc-500 hover:text-sky-400 transition-colors"
						>
							<Icon className="text-xl" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
