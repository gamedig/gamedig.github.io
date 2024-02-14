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
  <div class="horizontal-team-members-wrapper">
    <VPTeamMembers
      ref="componentRef"
      :size="size"
      :members="members"
      class="horizontal-team-members"
    />
  </div>
</template>
<style>
.horizontal-team-members.VPTeamMembers.small .container .item {
  flex: 1 0 224px;
}

.horizontal-team-members.VPTeamMembers.medium .container .item {
  flex: 1 0 256px;
}

@media (min-width: 375px) {
  .horizontal-team-members.VPTeamMembers.medium .container .item {
    flex: 1 0 288px;
  }
}
.horizontal-team-members .container {
  display: flex;
  overflow-x: scroll;
  max-width: 1152px;
}
</style>
