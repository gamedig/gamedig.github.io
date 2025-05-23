import { defineConfig } from 'vitepress';

import Nav from './nav';
import SideBar from './sidebar';

export default defineConfig({
    lang: 'en-US',
    description: 'GameDig is a library for querying game servers and parsing responses.',

    themeConfig: {
        nav: Nav(),
        sidebar: SideBar(),

        editLink: {
            pattern: 'https://github.com/gamedig/gamedig.github.io/edit/main/src/:path',
            text: 'Suggest changes to this page',
        },

        footer: {
            message:
                "Made with ❤️ | Adheres to the <a href='/code-of-conduct'>Contributor Covenant Code of Conduct</a>",
            copyright: `Copyright © 2022-2025 GameDig Organization & Contributors. Licensed under the <a href='/legal'>MIT License</a>.`,
        },
    },
});
