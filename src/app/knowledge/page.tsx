import TechGrid from '../../components/TechGrid';
import { certificates, issuerColors } from '../../data/certificates';

const VerifiedIcon = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		className="shrink-0 text-zinc-500"
	>
		<title>Open credential</title>
		<path d="M7 17L17 7M17 7H7M17 7v10" />
	</svg>
);

export default function KnowledgePage() {
	const verified = certificates.filter((c) => c.href);
	const unverified = certificates.filter((c) => !c.href);

	return (
		<div className="bg-black min-h-screen px-8 py-10">
			{/* Header */}
			<div className="mb-10 flex items-end justify-between border-b border-white/10 pb-6">
				<h1 className="text-white text-4xl font-serif">Knowledge</h1>
				<span className="text-zinc-600 text-sm font-mono">27 technologies</span>
			</div>

			{/* Tech icons grid */}
			<TechGrid />

			{/* Certificates divider */}
			<div className="flex items-end justify-between border-b border-white/10 pb-6 mb-10">
				<h2 className="text-white text-4xl font-serif">Certificates</h2>
				<span className="text-zinc-600 text-sm font-mono">
					{certificates.length} certificates
				</span>
			</div>

			{/* Verified */}
			{verified.length > 0 && (
				<div className="mb-10">
					<p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-5">
						Verified credentials
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{verified.map(({ title, issuer, href }) => {
							const color = issuerColors[issuer] ?? 'text-zinc-400';
							return (
								<a
									key={title}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="group border border-zinc-700 hover:border-zinc-400 hover:bg-white/[0.02] rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200"
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
									<span className="text-zinc-500 text-xs group-hover:text-zinc-300 transition-colors">
										View credential →
									</span>
								</a>
							);
						})}
					</div>
				</div>
			)}

			{/* Unverified */}
			{unverified.length > 0 && (
				<div>
					<p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-5">
						Other certificates
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{unverified.map(({ title, issuer }) => {
							const color = issuerColors[issuer] ?? 'text-zinc-400';
							return (
								<div
									key={title}
									className="border border-zinc-800 rounded-2xl p-5 flex flex-col gap-4"
								>
									<span
										className={`text-xs font-semibold uppercase tracking-wider ${color}`}
									>
										{issuer}
									</span>
									<p className="text-white text-sm font-medium leading-snug flex-1">
										{title}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
