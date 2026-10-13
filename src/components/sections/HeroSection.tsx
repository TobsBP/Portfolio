'use client';

import { motion } from 'framer-motion';
import Highlight from '@/components/Highlight';
import { usePrefs } from '@/components/PrefsProvider';
import HeroCode from '../HeroCode';

export default function HeroSection() {
	const { t } = usePrefs();

	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center pt-20 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden"
		>
			{/* Ambient blobs */}
			<div
				className="bg-blob top-25 right-25 h-125 w-125"
				style={{
					background:
						'radial-gradient(ellipse, var(--accent) 0%, transparent 70%)',
					position: 'absolute',
					opacity: 'calc(var(--blob-opacity) * 0.2)',
				}}
			/>
			<div
				className="bg-blob bottom-0 left-20 h-100 w-100"
				style={{
					background:
						'radial-gradient(ellipse, var(--accent) 0%, transparent 70%)',
					position: 'absolute',
					opacity: 'calc(var(--blob-opacity) * 0.12)',
				}}
			/>

			<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
				{/* Left — text */}
				<div className="flex-1 min-w-0">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="mb-4 font-mono text-xs tracking-[0.25em] text-accent uppercase"
					>
						{t.hero.role}
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						className="gradient-text text-6xl sm:text-7xl lg:text-8xl font-serif leading-none mb-6"
					>
						Tobias
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.35 }}
						className="mb-10 max-w-xl text-base leading-relaxed text-muted md:text-lg"
					>
						<Highlight text={t.hero.bio} />
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="flex flex-wrap gap-4"
					>
						<a
							href="#projects"
							className="group glow-cyan flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-contrast transition-all duration-200 hover:opacity-90"
						>
							{t.hero.viewProjects}
							<svg
								width="14"
								height="14"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								className="group-hover:translate-y-0.5 transition-transform"
							>
								<title>scroll down</title>
								<path d="M12 5v14M5 12l7 7 7-7" />
							</svg>
						</a>
						<a
							href="#contact"
							className="glass rounded-full px-6 py-3 text-sm font-medium text-fg transition-all duration-200 hover:text-accent"
						>
							{t.hero.getInTouch}
						</a>
					</motion.div>
				</div>

				{/* Right — animated code */}
				<motion.div
					initial={{ opacity: 0, x: 40 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex-1 w-full min-w-0 max-w-lg lg:max-w-none"
				>
					<div className="glass rounded-2xl p-1">
						<HeroCode />
					</div>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
			>
				<span className="text-xs tracking-widest text-subtle uppercase">
					{t.hero.scroll}
				</span>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
					className="h-8 w-px bg-linear-to-b from-accent/50 to-transparent"
				/>
			</motion.div>
		</section>
	);
}
