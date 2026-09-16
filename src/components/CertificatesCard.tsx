import { certificates, issuerColors } from '../data/certificates';

const VerifiedIcon = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		className="shrink-0 text-subtle"
	>
		<title>Open credential</title>
		<path d="M7 17L17 7M17 7H7M17 7v10" />
	</svg>
);

export default function CertificatesCard() {
	const verified = certificates.filter((c) => c.href);
	const unverified = certificates.filter((c) => !c.href);

	return (
		<section className="px-8 py-10">
			{/* Header */}
			<div className="mb-10 flex items-end justify-between border-b border-line pb-6">
				<h1 className="text-fg text-4xl font-serif">Certificates</h1>
				<span className="text-subtle text-sm font-mono">
					{certificates.length} certificates
				</span>
			</div>

			{/* Verified */}
			{verified.length > 0 && (
				<div className="mb-10">
					<p className="text-subtle text-xs font-mono uppercase tracking-widest mb-5">
						Verified credentials
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{verified.map(({ title, issuer, href }) => {
							const color = issuerColors[issuer] ?? 'text-muted';
							return (
								<a
									key={title}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="group border border-zinc-700 hover:border-zinc-400 hover:bg-fg/2 rounded-2xl p-5 flex flex-col gap-4 transition-all duration-200"
								>
									<div className="flex items-center justify-between">
										<span
											className={`text-xs font-semibold uppercase tracking-wider ${color}`}
										>
											{issuer}
										</span>
										<VerifiedIcon />
									</div>

									<p className="text-fg text-sm font-medium leading-snug flex-1">
										{title}
									</p>

									<span className="text-subtle text-xs group-hover:text-muted transition-colors">
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
					<p className="text-subtle text-xs font-mono uppercase tracking-widest mb-5">
						Other certificates
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
						{unverified.map(({ title, issuer }) => {
							const color = issuerColors[issuer] ?? 'text-muted';
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

									<p className="text-fg text-sm font-medium leading-snug flex-1">
										{title}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</section>
	);
}
