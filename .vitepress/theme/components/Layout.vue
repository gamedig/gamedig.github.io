<script setup lang="ts">
import { useData } from 'vitepress';
import { nextTick, provide } from 'vue';
import DefaultTheme from 'vitepress/theme';

import HomePage from './HomePage.vue';

// isDark reactive property from Vitepress's global state
const { isDark } = useData();

// Determine if transitions should be enabled based on browser support and preference
const shouldEnableTransitions = (): boolean =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

// Provide a function for toggling the appearance (dark/light mode)
provide('toggle-appearance', async (event: MouseEvent) => {
    const { clientX: x, clientY: y } = event;

    // If transitions are disabled/unsupported, simply toggle the appearance
    if (!shouldEnableTransitions()) {
        isDark.value = !isDark.value;
        return;
    }

    // Maximum radius for the circle transition effect based on click position
    const maxRadius = (x: number, y: number): number => {
        const maxWidth = Math.max(x, window.innerWidth - x);
        const maxHeight = Math.max(y, window.innerHeight - y);

        return Math.hypot(maxWidth, maxHeight);
    };

    // Clip paths for the transition effect
    const clipPathValues = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius(x, y)}px at ${x}px ${y}px)`,
    ];

    // Transition view with the startViewTransition API
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition
    await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
    }).ready;

    // Animate the transition using the calculated clip paths
    document.documentElement.animate(
        { clipPath: isDark.value ? clipPathValues.reverse() : clipPathValues },
        {
            duration: isDark.value ? 600 : 800,
            easing: 'ease-in-out',
            pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
        },
    );
});
</script>

<template>
    <DefaultTheme.Layout>
        <!-- Layout overrides for the default theme -->
        <template #home-features-after>
            <HomePage />
        </template>
    </DefaultTheme.Layout>
</template>
