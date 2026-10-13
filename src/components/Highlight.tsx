/** Renderiza texto com {termos} entre chaves destacados na cor de acento. */
export default function Highlight({ text }: { text: string }) {
	// partes impares do split sao os termos entre chaves
	return text.split(/\{([^}]+)\}/g).map((part, i) =>
		i % 2 === 1 ? (
			// biome-ignore lint/suspicious/noArrayIndexKey: partes fixas do texto
			<span key={i} className="font-medium text-accent">
				{part}
			</span>
		) : (
			part
		),
	);
}
