import { createDirectus, rest } from '@directus/sdk';
import type { Schema } from '@/types';

const directus = createDirectus<Schema>(
	process.env.NEXT_DIRECTUS_URL ?? '',
).with(rest());
export default directus;

export function assetUrl(uuid: string | null | undefined): string | null {
	if (!uuid) return null;
	return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${uuid}`;
}
