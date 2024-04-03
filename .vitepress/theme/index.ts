import { h, watch } from 'vue';
import Theme from 'vitepress/theme';

import type { Router } from 'vitepress';

import 'uno.css';
import './styles/vars.css';
import './styles/rainbow.css';
import './styles/overrides.css';

import HomePage from './components/HomePage.vue';

let homePageStyle: HTMLStyleElement | undefined;

export default {
    ...Theme,

    Layout: () =>
        // Create a Vue component with Theme.Layout as the base,
        // and inject HomePage component after home features
        h(Theme.Layout, null, {
            'home-features-after': () => h(HomePage),
        }),

    enhanceApp({ router }: { router: Router }) {
        // Skip this if not running in the browser
        if (typeof window === 'undefined') return;

        (() => {
            // Detect the user's browser from the userAgent string
            const browserClass = ['chrome', 'firefox', 'safari'].find((browser) =>
                navigator.userAgent.toLowerCase().includes(browser),
            );

            if (browserClass) {
                document.documentElement.classList.add(browserClass);
            }
        })();

        // Speed up the rainbow animation on the homepage
        const updateHomePageStyle = (isHomePage: boolean) => {
            if (isHomePage) {
                if (!homePageStyle) {
                    homePageStyle = document.createElement('style');
                    homePageStyle.innerHTML = ':root { animation: rainbow 12s linear infinite; }';
                    document.body.appendChild(homePageStyle);
                }
            } else {
                homePageStyle?.remove();
                homePageStyle = undefined;
            }
        };

        // Watch for route changes to dynamically apply the homepage style
        watch(
            () => router.route.data.relativePath,
            () => updateHomePageStyle(location.pathname === '/'),
            { immediate: true },
        );
    },
};
