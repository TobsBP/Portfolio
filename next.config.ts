import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'personal-portfolio-directus.6v8shu.easypanel.host',
				pathname: '/assets/**',
			},
		],
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
	},
	env: {
		NEXT_DIRECTUS_URL: process.env.NEXT_DIRECTUS_URL ?? '',
	},
};

export default nextConfig;
