import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'personal-portfolio-directus.6v8shu.easypanel.host',
				pathname: '/assets/**',
			},
		],
	},
	env: {
		NEXT_DIRECTUS_URL: process.env.NEXT_DIRECTUS_URL ?? '',
	},
};

export default nextConfig;
