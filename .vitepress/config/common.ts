import { resolve } from 'path';
import { readFileSync } from 'fs';
import { defineConfig } from 'vitepress';

import Unocss from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';

const read = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf-8');

const title = 'GameDig';

export default defineConfig({
    title,
    titleTemplate: title,

    outDir: 'dist',
    srcDir: 'src',

    metaChunk: true,
    cleanUrls: true,
    lastUpdated: true,

    sitemap: {
        hostname: 'https://gamedig.github.io',
    },

    markdown: {
        math: true,
        theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        },
    },

    vite: {
        plugins: [
            Unocss({
                configFile: '../unocss.config.ts',
            }),

            Components({
                dirs: ['../.vitepress/theme/components'],
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                dts: false,
            }),
        ],
    },

    head: [
        ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
        ['meta', { name: 'author', content: 'GameDig' }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { name: 'og:title', content: 'GameDig' }],
        [
            'meta',
            {
                name: 'og:description',
                content: 'GameDig is a library for querying game servers and parsing responses.',
            },
        ],
    ],

    themeConfig: {
        logo: '/favicon.ico',

        search: {
            provider: 'local',
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/gamedig' },
            { icon: 'discord', link: 'https://discord.gg/aEFPRkm984' },
            {
                icon: { svg: read('src/public/assets/images/icons/npm.svg') },
                link: 'https://www.npmjs.com/package/gamedig',
            },
            {
                icon: { svg: read('src/public/assets/images/icons/rust.svg') },
                link: 'https://crates.io/crates/gamedig',
            },
        ],
    },
});
