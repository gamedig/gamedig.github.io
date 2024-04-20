import { defineConfig } from 'vitepress';

import common from './common';
import en from './locale/en';

export default defineConfig({
    ...common,
    locales: {
        root: { label: 'English', ...en },
    },
});

