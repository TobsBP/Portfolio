import { NextResponse } from 'next/server';
import { getProjects } from '@/services/projects';

export async function GET() {
	const projects = await getProjects();
	return NextResponse.json(projects);
}
