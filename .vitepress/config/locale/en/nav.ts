import type { DefaultTheme } from 'vitepress';

import { guideNav } from './components/guide';

export default function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            items: [
                {
                    text: 'Guide',
                    items: guideNav,
                },
            ],
            activeMatch: '^/guide/',
        },
        {
            text: 'Libraries',
            link: '/library/',
            activeMatch: '/library/',
        },
        { text: 'CLI', link: '/cli/' },
        { text: 'Archive', link: '/archive/' },
    ];
}
