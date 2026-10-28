import type { ReactElement, SVGProps } from 'react';
import { SOCIAL_LINKS, type SocialIconName } from '../consts';

type SocialIcon = (props: SVGProps<SVGSVGElement>) => ReactElement;

/** Keep this map's keys in sync with SocialIconName in consts.ts. */
const icons: Record<SocialIconName, SocialIcon> = {
	github: (props) => (
		<svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
			<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.38.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
		</svg>
	),
	rss: (props) => (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M4 11a9 9 0 0 1 9 9" />
			<path d="M4 4a16 16 0 0 1 16 16" />
			<circle cx="5" cy="19" r="1" />
		</svg>
	),
	coffee: (props) => (
		<svg
			viewBox="0 0 24 24"
			aria-hidden="true"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path d="M10 2v2M14 2v2M6 2v2" />
			<path d="M4 8h13v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Z" />
			<path d="M17 10h1a3 3 0 1 1 0 6h-1" />
		</svg>
	),
};

/** Astro renders this icon-only link row on the server; it needs no client hydration. */
export default function SocialLinks() {
	return (
		<nav className="menu-socials" aria-label="Social links">
			{SOCIAL_LINKS.map(({ label, href, icon }) => {
				const Icon = icons[icon];

				return (
					<a key={href} href={href} aria-label={label} title={label}>
						<Icon />
					</a>
				);
			})}
		</nav>
	);
}
