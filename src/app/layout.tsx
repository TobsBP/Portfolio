import type { Metadata } from 'next';
import { Instrument_Serif } from 'next/font/google';
import NavBar from '../components/NavBar';
import './globals.css';
import Footer from '../components/Footer';
import { PrefsProvider } from '../components/PrefsProvider';

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

/** Aplica o tema antes da primeira pintura, para nao piscar branco no escuro. */
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-theme="dark"
			className={`${instrumentSerif.variable}`}
			suppressHydrationWarning
		>
			<head>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: script sincrono para evitar flash de tema */}
				<script dangerouslySetInnerHTML={{ __html: themeScript }} />
			</head>
			<body>
				<PrefsProvider>
					<NavBar />
					{children}
					<Footer />
				</PrefsProvider>
			</body>
		</html>
	);
}
