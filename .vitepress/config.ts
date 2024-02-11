import { defineConfig } from "vitepress";
import { readFileSync } from "fs";
import { resolve } from "path";

import Unocss from "unocss/vite";
import Components from "unplugin-vue-components/vite";

const title = "GameDig";
const description =
  "GameDig is a library for querying game servers and parsing responses.";
const author = "GameDig Organization & Contributors";

const read = (relative: string) =>
  readFileSync(resolve(process.cwd(), ".vitepress", relative), "utf-8");

export default defineConfig({
  lang: "en-US",
  title,
  titleTemplate: title,
  description,
  outDir: "dist",
  srcDir: "src",

  vite: {
    plugins: [
      Unocss({
        configFile: "../unocss.config.ts",
      }),
      Components({
        // Specify the directories to search for Vue components
        dirs: ["../.vitepress/theme/components"],

        // Specify the file types to be included in the component scanning process
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

        // TS doesn't have a absolute clue in what it's doing with vue
        dts: false,
      }),
    ],
    server: {
      // Hot Module Replacement (HMR) settings
      hmr: {
        // Disable the error overlay when there is a compile error
        overlay: false,
      },
    },
  },
  sitemap: {
    hostname: "https://gamedig.github.io",
  },

  head: [
    [
      "link",
      { rel: "icon", href: "/favicon.ico", type: "image/png", sizes: "16x16" },
    ],
    ["meta", { name: "author", content: "GameDig" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: "GameDig" }],
    [
      "meta",
      {
        name: "og:description",
        content:
          "GameDig is a library for querying game servers and parsing responses.",
      },
    ],
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
  },

  themeConfig: {
    logo: "/favicon.ico",
    search: {
      provider: "local",
    },
    sidebar: {},
    editLink: {
      pattern:
        "https://github.com/gamedig/gamedig.github.io/edit/main/src/:path",
      text: "Suggest changes to this page",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/gamedig" },
      { icon: "discord", link: "https://discord.gg/aEFPRkm984" },
      {
        icon: { svg: read("../src/public/assets/images/icons/npm.svg") },
        link: "https://www.npmjs.com/package/gamedig",
      },
      {
        icon: { svg: read("../src/public/assets/images/icons/rust.svg") },
        link: "https://crates.io/crates/gamedig",
      },
    ],
    footer: {
      message:
        "Made with ❤️ | Copyright © 2022-2024 GameDig Organization & Contributors. Licensed under the <a href='/license'>MIT License</a>",
      copyright: `The npm, Rust, GitHub, and Discord logos are displayed here for navigational purposes only, to facilitate direct links to associated projects and our community. This use does not imply any endorsement, sponsorship, or affiliation with npm, Inc., the Rust Foundation, GitHub, Inc., or Discord Inc. These logos are acknowledged as trademarks of their respective owners and are utilized within the scope of fair use.`,
    },
  },
});
