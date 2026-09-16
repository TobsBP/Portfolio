'use client';

import {
	createContext,
	type ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import {
	type Dictionary,
	getDictionary,
	type Locale,
	type Theme,
} from '@/lib/i18n';

interface Prefs {
	locale: Locale;
	theme: Theme;
	t: Dictionary;
	setLocale: (l: Locale) => void;
	setTheme: (t: Theme) => void;
}

const PrefsContext = createContext<Prefs | null>(null);

/**
 * Server e cliente renderizam 'en' + 'dark' para casar a hidratacao; a
 * preferencia real (salva ou do sistema) entra no primeiro efeito. O tema
 * tambem e aplicado antes da pintura pelo script inline em layout.tsx.
 */
export function PrefsProvider({ children }: { children: ReactNode }) {
	const [locale, setLocaleState] = useState<Locale>('en');
	const [theme, setThemeState] = useState<Theme>('dark');

	useEffect(() => {
		const savedLocale = localStorage.getItem('locale');
		const initialLocale: Locale =
			savedLocale === 'pt' || savedLocale === 'en'
				? savedLocale
				: navigator.language.toLowerCase().startsWith('pt')
					? 'pt'
					: 'en';
		setLocaleState(initialLocale);

		const current = document.documentElement.getAttribute('data-theme');
		if (current === 'light' || current === 'dark') setThemeState(current);
	}, []);

	useEffect(() => {
		document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
	}, [locale]);

	const value = useMemo<Prefs>(
		() => ({
			locale,
			theme,
			t: getDictionary(locale),
			setLocale: (l) => {
				setLocaleState(l);
				try {
					localStorage.setItem('locale', l);
				} catch {}
			},
			setTheme: (next) => {
				setThemeState(next);
				document.documentElement.setAttribute('data-theme', next);
				try {
					localStorage.setItem('theme', next);
				} catch {}
			},
		}),
		[locale, theme],
	);

	return (
		<PrefsContext.Provider value={value}>{children}</PrefsContext.Provider>
	);
}

export function usePrefs(): Prefs {
	const ctx = useContext(PrefsContext);
	if (!ctx) throw new Error('usePrefs precisa estar dentro de PrefsProvider');
	return ctx;
}
