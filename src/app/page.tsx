import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import { getProjects } from '@/services/projects';

export default async function Home() {
	const projects = await getProjects();

	return (
		<main className="relative">
			{/* Global ambient blobs */}
			<div
				aria-hidden="true"
				style={{
					position: 'fixed',
					top: '-150px',
					right: '-150px',
					width: '600px',
					height: '600px',
					borderRadius: '50%',
					filter: 'blur(100px)',
					background:
						'radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%)',
					pointerEvents: 'none',
					zIndex: -1,
				}}
			/>
			<div
				aria-hidden="true"
				style={{
					position: 'fixed',
					bottom: '-100px',
					left: '-100px',
					width: '500px',
					height: '500px',
					borderRadius: '50%',
					filter: 'blur(100px)',
					background:
						'radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)',
					pointerEvents: 'none',
					zIndex: -1,
				}}
			/>

			<HeroSection />

			{/* Section separator */}
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				<div className="h-px bg-linear-to-r from-transparent via-sky-400/20 to-transparent" />
			</div>

			<ProjectsSection projects={projects} />

			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				<div className="h-px bg-linear-to-r from-transparent via-sky-400/20 to-transparent" />
			</div>

			<SkillsSection />

			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				<div className="h-px bg-linear-to-r from-transparent via-sky-400/20 to-transparent" />
			</div>

			<AboutSection />

			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
				<div className="h-px bg-linear-to-r from-transparent via-sky-400/20 to-transparent" />
			</div>

			<ContactSection />
		</main>
	);
}
