import Image from 'next/image';
import Knowledge from '../../components/Knowledge';

const timelineItems = [
	{
		year: '2019',
		title: 'Started learn HTML and CSS',
		description: 'Began my journey making a couse from IF',
	},
	{
		year: '2020',
		title: 'IT technician',
		description:
			'Then my journey in IT technician, diving into programming fundamentals and algorithms.',
	},
	{
		year: '2023',
		title: 'Started Software Engineering',
		description: 'Began my journey in Computer Science.',
	},
	{
		year: '2024/2',
		title: 'Started participate in a Robotic club',
		description: 'Where i won 4 times in 1fist place and one in seconde.',
	},
	{
		year: '2024',
		title: 'Random Password generator',
		description:
			'Built my first real-world projects, working with web technologies and exploring JS.',
	},
	{
		year: '2025',
		title: 'Growing as a Developer',
		description:
			'Expanded my skill set with modern frameworks, tools and best practices in software engineering.',
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

export default function AboutPage() {
	return (
		<div className="bg-black min-h-screen p-8 flex flex-col items-center">
			{/* Profile card */}
			<div className="border- border-white rounded-2xl p-6 max-w-2xl w-full flex gap-6 items-center">
				<div className="shrink-0 w-36 h-36 rounded-full overflow-hidden border-2 border-white">
					<Image
						src="/profilePicture.jpeg"
						alt="Profile photo"
						width={144}
						height={144}
						className="w-full h-full object-cover"
						priority
					/>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-white text-2xl font-serif">Tobias</h2>
					<p className="text-gray-300 text-sm leading-relaxed">
						Software developer passionate about building clean and efficient
						applications. Currently studying Software engineering and always
						looking for new challenges to grow my skills.
					</p>
				</div>
			</div>

			{/* Divider */}
			<div className="w-full max-w-5xl my-12 h-px bg-white/20" />

			{/* Timeline + Fun facts side by side */}
			<div className="w-full max-w-5xl flex gap-12 items-start">
				{/* Timeline */}
				<div className="flex-1 relative">
					<h2 className="text-white text-2xl font-serif mb-8">Timeline</h2>
					<div className="absolute left-18 top-16 bottom-0 w-px bg-white/30" />
					<div className="flex flex-col gap-10">
						{timelineItems.map((item) => (
							<div key={item.title} className="flex gap-6 items-start relative">
								<div className="w-16 shrink-0 text-right">
									<span className="text-gray-400 text-sm font-mono">
										{item.year}
									</span>
								</div>
								<div className="shrink-0 w-3 h-3 rounded-full bg-white border-2 border-black mt-1 z-10" />
								<div className="border border-white/20 rounded-xl p-4 flex-1 hover:border-white transition-colors">
									<h3 className="text-white font-serif text-base mb-1">
										{item.title}
									</h3>
									<p className="text-gray-400 text-xs leading-relaxed">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Fun facts */}
				<div className="w-72 shrink-0">
					<h2 className="text-white text-2xl font-serif mb-8">
						Interesting facts
					</h2>
					<div className="flex flex-col gap-4">
						{funFacts.map((fact) => (
							<div
								key={fact.title}
								className="border border-white/20 rounded-xl p-4 hover:border-white transition-colors flex gap-3 items-start"
							>
								<span className="text-xl">{fact.icon}</span>
								<div>
									<h3 className="text-white text-sm font-semibold mb-1">
										{fact.title}
									</h3>
									<p className="text-gray-400 text-xs leading-relaxed">
										{fact.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Divider */}
			<div className="w-full max-w-5xl my-12 h-px bg-white/20" />
		</div>
	);
}
