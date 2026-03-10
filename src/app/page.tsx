import Link from 'next/link';
import HeroCode from '../components/HeroCode';

export default function Home() {
	return (
		<div className="bg-black">
			{/* Hero */}
			<section className="pl-30 pr-8 pt-16 pb-14">
				<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
					{/* Left — text */}
					<div className="flex-1 min-w-0">
						<p className="text-zinc-500 text-xs font-mono mb-4 tracking-widest uppercase">
							Software Developer
						</p>
						<h1 className="text-white text-5xl sm:text-6xl font-serif leading-tight mb-5">
							Tobias
						</h1>
						<p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-lg">
							Full-stack developer building clean, performant web applications.
							Focused on TypeScript, Next.js and backend APIs.
						</p>
						<div className="flex flex-wrap gap-3">
							<Link
								href="/projects"
								className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-200 transition-colors"
							>
								View Projects
							</Link>
							<Link
								href="/contact"
								className="px-5 py-2.5 border border-zinc-700 text-white text-sm font-medium rounded-full hover:border-zinc-500 hover:bg-white/5 transition-colors"
							>
								Get in touch
							</Link>
						</div>
					</div>

					{/* Right — animated code */}
					<div className="flex-1 w-full min-w-0 max-w-lg lg:max-w-none mr-15">
						<HeroCode />
					</div>
				</div>
			</section>
		</div>
	);
}
