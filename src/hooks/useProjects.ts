'use client';
import { useEffect, useState } from 'react';
import type { Project } from '@/types';

export function useProjects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		fetch('/api/projects')
			.then((res) => res.json())
			.then(setProjects)
			.catch(setError)
			.finally(() => setLoading(false));
	}, []);

	return { projects, loading, error };
}
