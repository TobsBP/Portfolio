import CertificatesCard from '../components/CertificatesCard';
import Knowledge from '../components/Knowledge';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
	return (
		<div className="bg-black">
			<main className="mt-1 ml-2">
				<ProjectCard />
				<CertificatesCard />
				<Knowledge />
			</main>
		</div>
	);
}
