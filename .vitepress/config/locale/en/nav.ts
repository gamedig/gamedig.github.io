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
                        { text: 'Key Features', link: '/guide/features' },
                        { text: 'Explore the CLI', link: '/guide/cli' },
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
                            link: '/archive/category/game/',
                            activeMatch: '^/archive/category/game',
                        },
                        {
                            text: 'Libraries',
                            link: '/archive/category/library/',
                            activeMatch: '^/archive/category/library',
                        },
                        {
                            text: 'Services',
                            link: '/archive/category/service/',
                            activeMatch: '^/archive/category/service',
                        },
                        {
                            text: 'Protocols',
                            link: '/archive/category/protocol/',
                            activeMatch: '^/archive/category/protocol',
                        },
                    ],
                },
                {
                    text: 'Glossary',
                    link: '/archive/glossary/',
                },
            ],
        },
    ];
}
