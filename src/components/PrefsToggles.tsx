'use client';

import { usePrefs } from '@/components/PrefsProvider';

/** Troca de tema e de idioma, lado a lado na navbar. */
export default function PrefsToggles() {
	const { locale, setLocale, theme, setTheme, t } = usePrefs();
	const nextTheme = theme === 'dark' ? 'light' : 'dark';

	return (
		<div className="flex items-center gap-1">
			<button
				type="button"
				onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
				aria-label={t.prefs.language}
				title={t.prefs.language}
				className="rounded-full px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:bg-fg/8 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				<span className={locale === 'pt' ? 'text-accent' : undefined}>PT</span>
				<span className="px-1 opacity-40">/</span>
				<span className={locale === 'en' ? 'text-accent' : undefined}>EN</span>
			</button>

			<button
				type="button"
				onClick={() => setTheme(nextTheme)}
				aria-label={t.prefs.theme}
				title={t.prefs.theme}
				className="rounded-full p-2 text-muted transition-colors hover:bg-fg/8 hover:text-fg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
			>
				{theme === 'dark' ? (
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						aria-hidden="true"
					>
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
					</svg>
				) : (
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
					</svg>
				)}
			</button>
		</div>
	);
}
