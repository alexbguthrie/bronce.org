/**
 * Shared site data for the homepage, SiteMenu.astro, and SocialLinks.tsx.
 * Edit navigation, app cards, and social destinations here instead of in markup.
 */
/** Edit this object to change the homepage introduction and initials avatar. */
export const PROFILE = {
	name: 'bronce',
	initials: 'b',
	intro: 'A personal corner of the web for writing, projects, and things I’m exploring.',
};

// Derive the site title from the profile name to avoid updating both separately.
export const SITE_TITLE = PROFILE.name;
export const SITE_DESCRIPTION = 'A personal site for writing and projects.';

export interface MenuLink {
	label: string;
	href: string;
}

/** Primary pages shown in the menu. Keep these in the order you want them displayed. */
export const MENU_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about/' },
	{ label: 'Writing', href: '/blog/' },
] satisfies MenuLink[];

/** Project destinations listed beneath the Projects heading in the menu. */
export const PROJECT_LINKS = [
	{ label: 'Agent', href: '/Zeus' },
	{ label: 'Apps', href: '/apps/' },
] satisfies MenuLink[];

export type SocialIconName = 'github' | 'rss' | 'coffee';

export interface SocialLink {
	label: string;
	href: string;
	icon: SocialIconName;
}

/** Social destinations shown at the bottom of the open menu. */
export const SOCIAL_LINKS: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/alexbguthrie', icon: 'github' },
	{ label: 'RSS feed', href: '/rss.xml', icon: 'rss' },
	{ label: 'Ko-fi', href: 'https://ko-fi.com/alexbguthrie', icon: 'coffee' },
];

export interface Project {
	title: string;
	href: string;
	/** Short date or detail shown below an app name, e.g. "2024". */
	date?: string;
	/** Optional image path, usually from /public, for the app icon. */
	icon?: string;
	/** Optional summary used on the homepage project list. */
	description?: string;
}

/** Projects are rendered in the menu grid, Apps page, and homepage list. */
export const PROJECTS: Project[] = [];

/** Temporary sample cards used only to preview the Apps page before projects are added. */
export const PROJECT_GRID_PREVIEW: Project[] = [
	{ title: 'Studio', href: '', date: 'May 2025' },
	{ title: 'Field Notes', href: '', date: 'April 2025' },
	{ title: 'Canvas', href: '', date: 'March 2025' },
	{ title: 'Garden', href: '', date: 'March 2025' },
	{ title: 'Archive', href: '', date: 'February 2025' },
	{ title: 'Compass', href: '', date: 'February 2025' },
	{ title: 'Reader', href: '', date: 'January 2025' },
	{ title: 'Soundboard', href: '', date: 'January 2025' },
	{ title: 'Journal', href: '', date: 'December 2024' },
	{ title: 'Focus', href: '', date: 'December 2024' },
	{ title: 'Gallery', href: '', date: 'November 2024' },
	{ title: 'Weather', href: '', date: 'November 2024' },
	{ title: 'Map Room', href: '', date: 'October 2024' },
	{ title: 'Pocket List', href: '', date: 'October 2024' },
	{ title: 'Timer', href: '', date: 'September 2024' },
];
