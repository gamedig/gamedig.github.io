import type { DefaultTheme } from 'vitepress';

const SidebarGuide: DefaultTheme.SidebarItem[] = [
    {
        text: 'Guides',
        items: [
            {
                text: 'Getting Started',
                link: '/guide/',
            },
            {
                text: 'How to Contribute',
                link: '/guide/contributing',
            },
            {
                text: 'Key Features',
                link: '/guide/features',
            },
            {
                text: 'Explore the CLI',
                link: '/guide/cli',
            },
            {
                text: 'Troubleshooting Common Issues',
                link: '/guide/troubleshooting',
            },
        ],
    },
];

const SidebarNodeLib: DefaultTheme.SidebarItem[] = [
    {
        text: '//todo: add sidebar',
        items: [
            {
                text: 'node-lib',
                link: '/package/node/library/',
            },
        ],
    },
];

const SidebarNodeCli: DefaultTheme.SidebarItem[] = [
    {
        text: '//todo: add sidebar',
        items: [
            {
                text: 'node-cli',
                link: '/package/node/cli/',
            },
        ],
    },
];

const SidebarRustLib: DefaultTheme.SidebarItem[] = [
    {
        text: '//todo: add sidebar',
        items: [
            {
                text: 'rust-lib',
                link: '/package/rust/library/',
            },
        ],
    },
];

const SidebarRustCli: DefaultTheme.SidebarItem[] = [
    {
        text: '//todo: add sidebar',
        items: [
            {
                text: 'rust-cli',
                link: '/package/rust/cli/',
            },
        ],
    },
];

export default function sidebar(): DefaultTheme.Sidebar {
    return {
        '/guide/': SidebarGuide,
        '/package/node/library/': SidebarNodeLib,
        '/package/node/cli/': SidebarNodeCli,
        '/package/rust/library/': SidebarRustLib,
        '/package/rust/cli/': SidebarRustCli,
    };
}
