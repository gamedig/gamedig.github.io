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
