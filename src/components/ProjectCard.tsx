import Image from 'next/image';

export default function ProjectCard() {
	return (
		<div className="bg-black p-8">
			<h1 className="text-white text-4xl font-serif mb-8">Projects</h1>

			<div className="border-2 border-white rounded-2xl p-6 max-w-2x2 flex gap-6 items-start">
				{/* Imagem à esquerda */}
				<div className="bg-gray-100 rounded-lg shrink-0 w-64 h-48 overflow-hidden">
					<Image
						alt="project preview"
						width={256}
						height={192}
						src="/logo.png"
						className="w-full h-full object-cover"
						priority
					/>
				</div>

				{/* Conteúdo à direita */}
				<div className="flex-1 flex flex-col gap-3">
					<div className="flex items-center justify-between">
						<h2 className="text-white text-2xl font-serif">Title</h2>
						<button
							type="button"
							className="text-white hover:translate-x-1 transition-transform"
						>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
							>
								<title>Image</title>
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</button>
					</div>

					{/* Linhas de placeholder */}
					<div className="space-y-2">
						<div className="bg-gray-400 h-3 rounded"></div>
						<div className="bg-gray-400 h-3 rounded"></div>
						<div className="bg-gray-400 h-3 rounded"></div>
						<div className="bg-gray-400 h-3 rounded"></div>
						<div className="bg-gray-400 h-3 rounded"></div>
						<div className="bg-gray-400 h-3 rounded w-5/6"></div>
					</div>
				</div>
			</div>
		</div>
	);
}
