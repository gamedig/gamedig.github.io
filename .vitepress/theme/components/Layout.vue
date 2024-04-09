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

// Maximum radius for the circle transition effect based on click position
const calculateMaxRadius = (x: number, y: number): number => {
    const maxWidth = Math.max(x, window.innerWidth - x);
    const maxHeight = Math.max(y, window.innerHeight - y);

    return Math.hypot(maxWidth, maxHeight);
};

// Provide a function for toggling the appearance (dark/light mode)
provide('toggle-appearance', async (event: MouseEvent) => {
    const { clientX: x, clientY: y } = event;

    // If transitions are disabled/unsupported, simply toggle the appearance
    if (!shouldEnableTransitions()) {
        isDark.value = !isDark.value;
        return;
    }

    const maxRadius = calculateMaxRadius(x, y);
    const clipPathValues = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${maxRadius}px at ${x}px ${y}px)`,
    ];

    // Transition view with the startViewTransition API
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/startViewTransition
    await document.startViewTransition(async () => {
        isDark.value = !isDark.value;
        await nextTick();
    }).ready;

    // Animate the transition using the calculated clip path values
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

<style>
::view-transition-old(root),
::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
    z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
    z-index: 9999;
}

.VPSwitchAppearance {
    /* Override width for the switch to look like a button */
    width: 22px !important;
}

.VPSwitchAppearance .check {
    /* Disable transformation applied to the checkmark */
    transform: none !important;
}
</style>
