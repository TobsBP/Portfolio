'use client';

import { motion } from 'framer-motion';
import HeroCode from '../HeroCode';

export default function HeroSection() {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex items-center pt-20 pb-10 px-6 md:px-12 lg:px-24 overflow-hidden"
		>
			{/* Ambient blobs */}
			<div
				className="bg-blob w-125 h-125 top-25 right-25 opacity-20"
				style={{
					background:
						'radial-gradient(ellipse, rgba(56,189,248,0.6) 0%, transparent 70%)',
					position: 'absolute',
				}}
			/>
			<div
				className="bg-blob w-100 h-100 bottom-0 left-20 opacity-10"
				style={{
					background:
						'radial-gradient(ellipse, rgba(99,102,241,0.7) 0%, transparent 70%)',
					position: 'absolute',
				}}
			/>

			<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
				{/* Left — text */}
				<div className="flex-1 min-w-0">
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-sky-400 text-xs font-mono mb-4 tracking-[0.25em] uppercase"
					>
						Software Developer
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
						className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
					>
						Full-stack engineer crafting scalable web applications with{' '}
						<span className="text-sky-400 font-medium">Next.js</span>,{' '}
						<span className="text-sky-400 font-medium">React</span> &{' '}
						<span className="text-sky-400 font-medium">TypeScript</span>. Expert
						in database design (
						<span className="text-sky-400 font-medium">PostgreSQL</span>,{' '}
						<span className="text-sky-400 font-medium">MongoDB</span>,{' '}
						<span className="text-sky-400 font-medium">Neo4j</span>), backend
						APIs (<span className="text-sky-400 font-medium">Node.js</span>,{' '}
						<span className="text-sky-400 font-medium">Fastify</span>),
						containerization & DevOps.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="flex flex-wrap gap-4"
					>
						<a
							href="#projects"
							className="group px-6 py-3 bg-sky-400 text-[#05050f] text-sm font-semibold rounded-full hover:bg-sky-300 transition-all duration-200 glow-cyan flex items-center gap-2"
						>
							View Projects
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
							className="px-6 py-3 glass text-white text-sm font-medium rounded-full hover:text-sky-400 transition-all duration-200"
						>
							Get in touch
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
				<span className="text-zinc-600 text-xs tracking-widest uppercase">
					scroll
				</span>
				<motion.div
					animate={{ y: [0, 6, 0] }}
					transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
					className="w-px h-8 bg-linear-to-b from-sky-400/50 to-transparent"
				/>
			</motion.div>
		</section>
	);
}
