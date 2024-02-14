<script setup lang="ts">
// Based on https://github.com/vuejs/vitepress/blob/20511006dba516ca8c06ed1dd3516547af668a0e/src/client/theme-default/components/VPTeamMembers.vue

import { onMounted, onUnmounted, ref, nextTick, Ref } from "vue";
import type { DefaultTheme } from "vitepress/theme";
import { VPTeamMembers } from "vitepress/theme";

interface VPTeamMembersComponent {
  $el: HTMLElement;
}

interface Props {
  size?: "small" | "medium";
  members: DefaultTheme.TeamMember[];
}

const props = withDefaults(defineProps<Props>(), {
  size: "medium",
});

const componentRef: Ref<VPTeamMembersComponent | null> = ref(null);
const isMouseOver = ref(false);

function onMouseEnter() {
  isMouseOver.value = true;
}

function onMouseLeave() {
  isMouseOver.value = false;
}

onMounted(async () => {
  await nextTick();

  const component = componentRef.value;
  if (!component || !(component.$el instanceof HTMLElement)) return;

  const scrollContainer = component.$el.querySelector(
    ".container"
  ) as HTMLElement | null;
  if (!scrollContainer) return;

  let scrollAmount = 1;
  const scrollFunction = () => {
    if (isMouseOver.value) return;
    if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) return;

    scrollContainer.scrollLeft += scrollAmount;

    if (
      scrollContainer.scrollLeft >=
      scrollContainer.scrollWidth - scrollContainer.clientWidth ||
      scrollContainer.scrollLeft <= 0
    ) {
      scrollAmount = -scrollAmount;
    }
  };

  const interval = setInterval(scrollFunction, 20);

  onUnmounted(() => {
    clearInterval(interval);
  });
});
</script>

<template>
  <div
    class="horizontal-team-members-wrapper"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
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
/* General styles for the container to enable horizontal scrolling of team member items */
.horizontal-team-members .container {
  display: flex;
  /* Ensures items are laid out horizontally */
  overflow-x: scroll;
  /* Enables horizontal scrolling */
  max-width: 1152px;
  /* Maximum width of the container */
  gap: 10px;
  /* Space between items */
  scrollbar-width: thin;
  /* For Firefox, makes scrollbar less obtrusive */
  scrollbar-color: transparent transparent;
  /* Makes scrollbar transparent in Firefox */
  transition: scrollbar-color 0.5s ease;
  /* Transition effect for the scrollbar color in Firefox */
}

/* Custom scrollbar styling for Webkit browsers */
.horizontal-team-members .container::-webkit-scrollbar {
  height: 10px;
  /* Height of the scrollbar */
  background-color: transparent;
  /* Initial background color for a "hidden" effect */
  transition: background-color 0.5s ease;
  /* Fade effect for the scrollbar background */
}

.horizontal-team-members .container::-webkit-scrollbar-thumb {
  background-color: transparent;
  /* Initial state of the scrollbar thumb */
  border-radius: 4px;
  /* Rounded corners for the scrollbar thumb */
  transition: background-color 0.5s ease;
  /* Fade effect for the scrollbar thumb */
}

/* Show the scrollbar on hover */
.horizontal-team-members .container:hover {
  scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
  /* For Firefox, changes scrollbar color on hover */
}

.horizontal-team-members .container:hover::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.5);
  /* For Webkit, makes the scrollbar thumb visible on hover */
}

.horizontal-team-members .container:hover::-webkit-scrollbar {
  background-color: rgba(0, 0, 0, 0.1);
  /* For Webkit, changes the scrollbar track color on hover */
}

/* Styles for small and medium items */
.horizontal-team-members.VPTeamMembers.small .container .item {
  flex: 1 0 224px;
  /* Flex basis for small items */
}

.horizontal-team-members.VPTeamMembers.medium .container .item {
  flex: 1 0 256px;
  /* Flex basis for medium items */
}

/* Responsive design adjustments for items within larger viewports */
@media (min-width: 375px) {
  .horizontal-team-members.VPTeamMembers.medium .container .item {
    flex: 1 0 288px;
    /* Increased flex basis for medium items on larger screens */
  }
}</style>
