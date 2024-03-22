<script setup lang="ts">
// Based on https://github.com/vuejs/vitepress/blob/20511006dba516ca8c06ed1dd3516547af668a0e/src/client/theme-default/components/VPTeamMembers.vue

import { onMounted, onUnmounted, ref, nextTick, Ref } from 'vue';
import type { DefaultTheme } from 'vitepress/theme';
import { VPTeamMembers } from 'vitepress/theme';

// Wrapper for component element.
interface VPTeamMembersComponent {
    $el: HTMLElement;
}

// Defines the props expected by this component, with size being optional.
interface Props {
    size?: 'small' | 'medium';
    members: DefaultTheme.TeamMember[];
}

// Setup component props with default values using withDefaults.
const props = withDefaults(defineProps<Props>(), {
    // Default size is set to 'medium'.
    size: 'medium',
});

// Refs for the component instance and mouse over state.
const componentRef: Ref<VPTeamMembersComponent | null> = ref(null);
const pauseScroll = ref(false);

// Handler for scroll state.
const scroll = {
    pause: () => (pauseScroll.value = true),
    play: () => (pauseScroll.value = false),
};

// Interval for continuous scrolling.
let interval: ReturnType<typeof setInterval> | null = null;

// Requires to be stated before the lifecycle hooks.
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
        class="horizontal-team-members-wrapper"
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
            class="horizontal-team-members"
        />
    </div>
</template>
<style>
/* Flex container setup for horizontal scrolling */
.horizontal-team-members .container {
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
.horizontal-team-members .container::-webkit-scrollbar {
    height: 8px;
    /* Initially hidden scrollbar track */
    background-color: transparent;
    /* Background color transition */
    transition: background-color 0.5s ease;
}

.horizontal-team-members .container::-webkit-scrollbar-thumb {
    /* Initially hidden scrollbar thumb */
    background-color: transparent;
    border-radius: 4px;
    /* Thumb color transition */
    transition: background-color 0.5s ease;
}

/* Hover effects for default (light) theme - scrollbar becomes darker on light backgrounds */
.horizontal-team-members .container:hover {
    scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
}

.horizontal-team-members .container:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
}

.horizontal-team-members .container:hover::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Hover effects for .dark theme - scrollbar becomes lighter on dark backgrounds */
.dark .horizontal-team-members .container:hover {
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
}

.dark .horizontal-team-members .container:hover::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
}

.dark .horizontal-team-members .container:hover::-webkit-scrollbar {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Item sizing and responsive adjustments */
.horizontal-team-members.VPTeamMembers.small .container .item {
    /* Base size for small items */
    flex: 1 0 224px;
}

.horizontal-team-members.VPTeamMembers.medium .container .item {
    /* Base size for medium items */
    flex: 1 0 256px;
}

@media (min-width: 375px) {
    .horizontal-team-members.VPTeamMembers.medium .container .item {
        /* Adjusted size for medium items on wider screens */
        flex: 1 0 288px;
    }
}
</style>
