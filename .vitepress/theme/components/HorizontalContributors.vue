<script setup lang="ts">
// Based on https://github.com/vuejs/vitepress/blob/20511006dba516ca8c06ed1dd3516547af668a0e/src/client/theme-default/components/VPTeamMembers.vue

import { onMounted, onUnmounted, ref, nextTick, type Ref } from 'vue';
import { VPTeamMembers, type DefaultTheme } from 'vitepress/theme';

/**
 * Wrapper for scroll component
 */
interface VPTeamMembersComponent {
    /** The scroll container element. */
    $el: HTMLElement;
}

/**
 * Props for the HorizontalContributors component.
 */
interface Props {
    /** The size of the parent container. */
    size?: 'small' | 'medium';
    /** The contributors to display. */
    members: DefaultTheme.TeamMember[];
}

// Setup component props with default values using withDefaults.
const props = withDefaults(defineProps<Props>(), {
    // Default size is set to 'medium'.
    size: 'medium',
});

/**
 * Reference to the scroll component instance.
 */
const componentRef: Ref<VPTeamMembersComponent | null> = ref(null);

/**
 * Pause state for scrolling.
 */
const pauseScroll = ref(false);

/**
 * Scroll control object.
 */
const scroll = {
    /**
     * Pause the scrolling.
     */
    pause: () => (pauseScroll.value = true),
    /**
     * Resume the scrolling.
     */
    play: () => (pauseScroll.value = false),
};

/**
 * Interval for continuous scrolling.
 */
let interval: ReturnType<typeof setInterval> | null = null;

// Requires to be stated before other lifecycle hooks.
// Causes no active component instance if not
onUnmounted(() => {
    // Clean up the interval
    if (interval) {
        clearInterval(interval);
    }
});

// Lifecycle hook for component mount.
onMounted(async () => {
    // Ensure the DOM is updated.
    await nextTick();

    // Get the component instance and validate it.
    const component = componentRef.value;
    if (!component || !(component.$el instanceof HTMLElement)) return;

    // Attempt to find the scroll container within the component.
    const scrollContainer = component.$el.querySelector('.container') as HTMLElement | null;
    if (!scrollContainer) return;

    // Initialize scroll behavior.
    let scrollAmount = 1;
    const scrollFunction = () => {
        // Pause scrolling if set to true.
        if (pauseScroll.value) return;
        // Stop scrolling if the container is fully visible.
        if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

        // Scroll and reverse direction at boundaries.
        scrollContainer.scrollLeft += scrollAmount;
        if (
            scrollContainer.scrollLeft >=
                scrollContainer.scrollWidth - scrollContainer.clientWidth ||
            scrollContainer.scrollLeft <= 0
        ) {
            scrollAmount = -scrollAmount;
        }
    };

    // Set the interval for continuous scrolling.
    interval = setInterval(scrollFunction, 20);
});
</script>

<template>
    <div
        class="horizontal-contributors-container"
        @mouseenter="scroll.pause"
        @mouseleave="scroll.play"
        @touchstart="scroll.pause"
        @touchend="scroll.play"
        @touchcancel="scroll.play"
    >
        <VPTeamMembers
            ref="componentRef"
            :size="size"
            :members="members"
            class="horizontal-contributors"
        />
    </div>
</template>
<style>
/* Flex container setup for horizontal scrolling */
.horizontal-contributors .container {
    display: flex;
    overflow-x: scroll;

    /* Maximum container width */
    max-width: 1152px;
    /* Default scrollbar width for Firefox */
    scrollbar-width: auto;
    /* Initial transparent scrollbar for Firefox */
    scrollbar-color: transparent transparent;
    /* Transition for scrollbar color */
    transition: scrollbar-color 0.5s ease;
}

/* Webkit-specific scrollbar styles */
.horizontal-contributors .container::-webkit-scrollbar {
    height: 8px;
    /* Initially hidden scrollbar track */
    background-color: transparent;
    /* Background color transition */
    transition: background-color 0.5s ease;
}

.horizontal-contributors .container::-webkit-scrollbar-thumb {
    /* Initially hidden scrollbar thumb */
    background-color: transparent;
    border-radius: 4px;
    /* Thumb color transition */
    transition: background-color 0.5s ease;
}

/* Hover effects for default (light) theme - scrollbar becomes darker on light backgrounds */
.horizontal-contributors .container:hover {
    scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
}

.horizontal-contributors .container:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
}

.horizontal-contributors .container:hover::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Hover effects for .dark theme - scrollbar becomes lighter on dark backgrounds */
.dark .horizontal-contributors .container:hover {
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
}

.dark .horizontal-contributors .container:hover::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
}

.dark .horizontal-contributors .container:hover::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Item sizing and responsive adjustments */
.horizontal-contributors.VPTeamMembers.small .container .item {
    /* Base size for small items */
    flex: 1 0 224px;
}

.horizontal-contributors.VPTeamMembers.medium .container .item {
    /* Base size for medium items */
    flex: 1 0 256px;
}

@media (min-width: 375px) {
    .horizontal-contributors.VPTeamMembers.medium .container .item {
        /* Adjusted size for medium items on wider screens */
        flex: 1 0 288px;
    }
}
</style>
