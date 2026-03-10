export type Certificate = {
	title: string;
	issuer: string;
	href?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'Neo4j Fundamentals',
		issuer: 'Neo4j',
		href: 'https://graphacademy.neo4j.com/c/34063fe5-004c-4bc5-b385-060d4e65edd9/',
	},
	{
		title: 'Python Programming Basics',
		issuer: 'Huawei',
	},
	{
		title: 'Introduction to Data Science',
		issuer: 'Cisco',
		href: 'https://www.credly.com/badges/0a234333-5ba0-4260-9794-7e45739a63df/linked_in_profile',
	},
	{
		title:
			'Python e Inteligência Artificial: Aplicações Inteligentes para seus Projetos',
		issuer: 'Inatel',
	},
	{
		title: 'Escrita Científica: Produção de Artigos de Alto Impacto',
		issuer: 'ZucoEscrita',
	},
];

export const issuerColors: Record<string, string> = {
	Neo4j: 'text-green-400',
	Huawei: 'text-red-400',
	Cisco: 'text-blue-400',
	Inatel: 'text-orange-400',
	ZucoEscrita: 'text-purple-400',
};
