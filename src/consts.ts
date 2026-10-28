/** Shared identity, navigation, and link data used across the site. */
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
	description: string;
	href: string;
}

/** Add projects here when ready to feature on the homepage and in menu. */
export const PROJECTS: Project[] = [];
