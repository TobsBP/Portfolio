import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';
import Footer from '../components/Footer';

export const metadata: Metadata = {
	title: 'Tobias - Full-Stack Developer',
	description:
		'Full-stack engineer specializing in Next.js, React, TypeScript, Node.js, and modern database design. Building scalable web applications with clean architecture and DevOps practices.',
};

const instrumentSerif = Instrument_Serif({
	variable: '--font-instrument',
	subsets: ['latin'],
	weight: '400', // Required for non-variable fonts
	display: 'swap',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${instrumentSerif.variable}`}>
			<body>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
