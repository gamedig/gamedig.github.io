import type { DefaultTheme } from 'vitepress';

export default function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: 'Guide',
            items: [
                {
                    text: 'Overview',
                    items: [
                        { text: 'Getting Started', link: '/guide/' },
                        { text: 'How to Contribute', link: '/guide/contributing' },
                        { text: 'Troubleshooting Common Issues', link: '/guide/troubleshooting' },
                    ],
                },
            ],

            activeMatch: '^/guide/',
        },
        {
            text: 'Package',
            items: [
                {
                    text: 'Whats Currently Supported?',
                    link: '/package/support-list',
                },
                {
                    text: 'Node Gamedig',
                    items: [
                        {
                            text: 'Library',
                            link: '/package/node/library/',
                            activeMatch: '^/package/node/library/',
                        },
                        {
                            text: 'CLI',
                            link: '/package/node/cli/',
                            activeMatch: '^/package/node/cli/',
                        },
                    ],
                },
                {
                    text: 'Rust Gamedig',
                    items: [
                        {
                            text: 'Library',
                            link: '/package/rust/library/',
                            activeMatch: '^/package/rust/library/',
                        },
                        {
                            text: 'CLI',
                            link: '/package/rust/cli/',
                            activeMatch: '^/package/rust/cli/',
                        },
                    ],
                },
            ],
        },
        {
            text: 'Archive',
            items: [
                {
                    text: 'Overview',
                    link: '/archive/',
                    activeMatch: '^/archive/',
                },

                {
                    text: 'Categories',
                    items: [
                        {
                            text: 'Games',
                            link: '/archive/game/',
                            activeMatch: '^/archive/game/',
                        },
                        {
                            text: 'Libraries',
                            link: '/archive/library/',
                            activeMatch: '^/archive/library/',
                        },
                        {
                            text: 'Services',
                            link: '/archive/service/',
                            activeMatch: '^/archive/service/',
                        },
                        {
                            text: 'Protocols',
                            link: '/archive/protocol/',
                            activeMatch: '^/archive/protocol/',
                        },
                    ],
                },
                {
                    text: 'Glossary',
                    link: '/archive/glossary',
                },
            ],
        },
    ];
}
