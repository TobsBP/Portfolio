import { MdOutlineEmail } from 'react-icons/md';
import { SiGithub, SiLinkerd } from 'react-icons/si';

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

export default function ContactPage() {
	return (
		<div className="bg-black min-h-screen flex items-center justify-center px-6 py-16">
			<div className="w-full max-w-lg flex flex-col gap-10">
				{/* Header */}
				<div className="flex flex-col gap-3">
					<h1 className="text-white text-5xl font-serif">Get in touch</h1>
					<p className="text-zinc-400 text-base leading-relaxed">
						I&apos;m always open to new opportunities and conversations. Pick
						your preferred channel and let&apos;s talk.
					</p>
				</div>

				{/* Divider */}
				<div className="h-px bg-white/10" />

				{/* Contact cards */}
				<div className="flex flex-col gap-3">
					{contacts.map(({ href, label, value, icon: Icon, external }) => (
						<a
							key={label}
							href={href}
							target={external ? '_blank' : undefined}
							rel={external ? 'noopener noreferrer' : undefined}
							className="group flex items-center gap-5 border border-zinc-800 rounded-2xl px-6 py-5 hover:border-zinc-500 hover:bg-zinc-900/50 transition-all duration-200"
						>
							<span className="flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-700 group-hover:border-zinc-500 transition-colors shrink-0">
								<Icon className="text-xl text-zinc-300" />
							</span>
							<div className="flex flex-col gap-0.5">
								<span className="text-zinc-500 text-xs uppercase tracking-widest">
									{label}
								</span>
								<span className="text-white text-sm font-medium">{value}</span>
							</div>
							<svg
								className="ml-auto text-zinc-700 group-hover:text-zinc-400 transition-colors"
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
					))}
				</div>
			</div>
		</div>
	);
}
