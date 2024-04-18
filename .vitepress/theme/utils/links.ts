import type { DefaultTheme } from 'vitepress';
import type { TeamMember } from '../composables/team.data';

/**
 * Creates social links for a team member object.
 * @param tm Team member object
 * @returns Team member object with social links array
 */
export function createLinks(tm: TeamMember): TeamMember {
    const githubUrl = tm.github.startsWith('http') ? tm.github : `https://github.com/${tm.github}`;
    const links: DefaultTheme.SocialLink[] = [{ icon: 'github', link: githubUrl }];

    if (tm.linkedin) {
        links.push({ icon: 'linkedin', link: tm.linkedin });
    }
    if (tm.mastodon) {
        links.push({ icon: 'mastodon', link: tm.mastodon });
    }
    if (tm.twitter) {
        links.push({ icon: 'x', link: tm.twitter });
    }
    if (tm.youtube) {
        links.push({ icon: 'youtube', link: tm.youtube });
    }

    tm.links = links;
    return { ...tm };
}
