'use client';

import Image from 'next/image';
import FadeUp from '@/components/FadeUp';

const timelineItems = [
	{
		year: '2019',
		title: 'Started learning HTML and CSS',
		description: 'Began my journey making a course from IF.',
	},
	{
		year: '2020',
		title: 'IT Technician',
		description:
			'Dived into IT fundamentals, programming basics and algorithms.',
	},
	{
		year: '2023',
		title: 'Started Software Engineering',
		description: 'Began my journey in Computer Science.',
	},
	{
		year: '2024',
		title: 'Joined Robotics Club',
		description: 'Won 4× first place and 1× second place in competitions.',
	},
	{
		year: '2024',
		title: 'First Real Project',
		description:
			'Built my first real-world projects exploring web technologies and JS.',
	},
	{
		year: '2025',
		title: 'Growing as a Developer',
		description:
			'Expanded skills with modern frameworks, tools and best practices.',
	},
];

const funFacts = [
	{
		icon: '🤖',
		title: 'Robotics competitor',
		desc: '4× first place and 1× second place in robotics competitions.',
	},
	{
		icon: '🔐',
		title: 'Security curious',
		desc: 'Interested in cybersecurity and how systems can be protected.',
	},
	{
		icon: '⚡',
		title: 'Started early',
		desc: 'Began learning HTML & CSS at 15, before formally studying engineering.',
	},
	{
		icon: '🛠️',
		title: 'IT background',
		desc: 'Hands-on IT technician experience before becoming a developer.',
	},
	{
		icon: '🌐',
		title: 'Full-stack minded',
		desc: 'Enjoys working across the stack — from UI design to backend logic.',
	},
	{
		icon: '📈',
		title: 'Fast learner',
		desc: 'From HTML to modern frameworks in a few years of self-driven study.',
	},
];

export default function AboutSection() {
	return (
		<section id="about" className="relative py-24 px-6 md:px-12 lg:px-24">
			<div className="max-w-7xl mx-auto">
				{/* Section header */}
				<FadeUp>
					<div className="section-line mb-12">
						<h2 className="text-white text-4xl md:text-5xl font-serif">
							About Me
						</h2>
					</div>
				</FadeUp>

				{/* Profile card */}
				<FadeUp delay={0.1}>
					<div className="glass rounded-2xl p-6 mb-16 max-w-2xl flex gap-6 items-center">
						<div className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-sky-400/30">
							<Image
								src="/profilePicture.jpeg"
								alt="Profile photo"
								width={112}
								height={112}
								className="w-full h-full object-cover"
								priority
							/>
						</div>
						<div className="flex flex-col gap-2">
							<h3 className="text-white text-xl font-serif">Tobias</h3>
							<p className="text-zinc-400 text-sm leading-relaxed">
								Full-stack engineer specializing in modern web applications.
								Proficient in React, Next.js, TypeScript, Node.js, PostgreSQL,
								MongoDB, and cloud platforms. Experienced with Docker, DevOps
								practices, and API development. Also exploring game development
								(Godot), IoT (Arduino), and data science (Python, Neo4j).
								Passionate about clean code and scalable architectures.
							</p>
						</div>
					</div>
				</FadeUp>

				{/* Timeline + Fun facts */}
				<div className="flex flex-col lg:flex-row gap-12 items-start">
					{/* Timeline */}
					<div className="flex-1 relative">
						<FadeUp>
							<h3 className="text-white text-2xl font-serif mb-8">Timeline</h3>
						</FadeUp>

						<div className="relative">
							{/* Vertical line */}
							<div className="absolute left-18 top-2 bottom-2 w-px bg-linear-to-b from-sky-400/40 via-sky-400/20 to-transparent" />

							<div className="flex flex-col gap-8">
								{timelineItems.map((item, i) => (
									<FadeUp key={item.title} delay={i * 0.08}>
										<div className="flex gap-6 items-start relative">
											<div className="w-14 shrink-0 text-right pt-0.5">
												<span className="text-sky-400/70 text-xs font-mono">
													{item.year}
												</span>
											</div>
											<div className="shrink-0 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#05050f] mt-1 z-10 timeline-dot" />
											<div className="glass rounded-xl p-4 flex-1">
												<h4 className="text-white font-serif text-sm mb-1">
													{item.title}
												</h4>
												<p className="text-zinc-400 text-xs leading-relaxed">
													{item.description}
												</p>
											</div>
										</div>
									</FadeUp>
								))}
							</div>
						</div>
					</div>

					{/* Fun facts */}
					<div className="w-full lg:w-80 shrink-0">
						<FadeUp>
							<h3 className="text-white text-2xl font-serif mb-8">Fun Facts</h3>
						</FadeUp>
						<div className="flex flex-col gap-3">
							{funFacts.map((fact, i) => (
								<FadeUp key={fact.title} delay={i * 0.07}>
									<div className="glass rounded-xl p-4 flex gap-3 items-start">
										<span className="text-xl">{fact.icon}</span>
										<div>
											<h4 className="text-white text-sm font-semibold mb-1">
												{fact.title}
											</h4>
											<p className="text-zinc-400 text-xs leading-relaxed">
												{fact.desc}
											</p>
										</div>
									</div>
								</FadeUp>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
