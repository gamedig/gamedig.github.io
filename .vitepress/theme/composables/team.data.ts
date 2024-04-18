import { defineLoader, type DefaultTheme } from 'vitepress';
import { createLinks } from '../utils/links';

/**
 * Defines the structure of a team member object. Extends the `DefaultTheme.TeamMember`
 * from VitePress where needed, providing additional custom properties specific to our application.
 */
export interface TeamMember extends Partial<DefaultTheme.TeamMember> {
    /** URL to the member's avatar image */
    avatar: string;
    /** Name of the member */
    name: string;
    /** GitHub username */
    github: string;
    /** LinkedIn profile URL (optional) */
    linkedin?: string;
    /** Mastodon URL (optional) */
    mastodon?: string;
    /** Twitter URL (optional) */
    twitter?: string;
    /** YouTube channel URL (optional) */
    youtube?: string;
    /** Sponsorship link (optional) */
    sponsor?: string;
    /** Title of profession */
    title?: string;
    /** Organization the member is affiliated with */
    org?: string;
    /** Description of the member */
    desc?: string;
}

/**
 * Represents the data structure containing team members
 * that will be loaded by vp.
 */
export interface Data {
    members: TeamMember[];
}

/**
 * Declares a global data object, conforming to the `Data` interface,
 * which will be populated by the loader and made accessible at build time.
 */
export declare const data: Data;

/**
 * Array of team members to be displayed on the team page.
 */
const teamMembers: TeamMember[] = [
    {
        avatar: 'https://github.com/mmorrisontx.png',
        github: 'mmorrisontx',
        name: 'Michael',
        title: 'Full Stack Developer',
        org: 'Indeed, Inc.',
        desc: 'Founder of the GameDig Project & Organization.',
    },
    {
        avatar: 'https://github.com/CosminPerRam.png',
        github: 'CosminPerRam',
        name: 'CosminPerRam',
        title: 'Programmer',
        org: 'nerds-sh',
        desc: 'Founder of Rust GameDig & GameDig Maintainer.',
    },
    {
        avatar: 'https://github.com/cainthebest.png',
        github: 'cainthebest',
        name: 'Cain',
        title: 'Backend Developer',
        desc: 'Rust GameDig & Documentation Maintainer.',
    },
    {
        avatar: 'https://github.com/Douile.png',
        github: 'Douile',
        name: 'Tom',
        title: 'Programmer',
        desc: 'Rust GameDig Maintainer.',
    },
];

/**
 * Loader definition for vitepress that constructs and exports
 * a data object filled with team members.
 */
export default defineLoader({
    load(): Data {
        return {
            members: teamMembers.map(createLinks),
        };
    },
});
