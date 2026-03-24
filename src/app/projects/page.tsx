import ProjectsList from '../../components/ProjectsList';

export default function ProjectsPage() {
	return (
		<div className="bg-black min-h-screen">
			<main className="p-8">
				<h1 className="text-white text-4xl font-serif mb-8">Projects</h1>
				<ProjectsList />
			</main>
		</div>
	);
}
