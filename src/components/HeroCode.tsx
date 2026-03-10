'use client';

import { useEffect, useState } from 'react';
import { lines } from '../data/heroCode';

export default function HeroCode() {
	const [visible, setVisible] = useState(0);

	useEffect(() => {
		if (visible >= lines.length) {
			const t = setTimeout(() => setVisible(0), 2500);
			return () => clearTimeout(t);
		}
		const t = setTimeout(() => setVisible((v) => v + 1), 110);
		return () => clearTimeout(t);
	}, [visible]);

	return (
		<div className="rounded-xl border border-white/10 bg-zinc-950 overflow-hidden font-mono text-xs w-full">
			{/* Title bar */}
			<div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10 bg-zinc-900/60">
				<span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
				<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
				<span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
				<span className="ml-3 text-zinc-500 text-[11px]">developer.ts</span>
			</div>

			{/* Code lines */}
			<div className="p-5 leading-6 select-none">
				{lines.map((line, i) => (
					<div
						key={`line-${
							// biome-ignore lint/suspicious/noArrayIndexKey: static list
							i
						}`}
						className={`flex items-center transition-opacity duration-150 ${
							i < visible ? 'opacity-100' : 'opacity-0'
						}`}
					>
						{/* Line number */}
						<span className="text-zinc-700 w-6 shrink-0 text-right mr-4 select-none">
							{i + 1}
						</span>

						{/* Tokens */}
						<span>
							{line.map((token, j) => (
								<span
									key={`token-${
										// biome-ignore lint/suspicious/noArrayIndexKey: static list
										j
									}`}
									className={token.cls}
								>
									{token.text}
								</span>
							))}
						</span>

						{/* Blinking cursor on last visible line */}
						{i === visible - 1 && visible < lines.length && (
							<span className="inline-block w-[2px] h-3.5 bg-blue-400 ml-0.5 align-middle animate-pulse" />
						)}
					</div>
				))}
			</div>
		</div>
	);
}
