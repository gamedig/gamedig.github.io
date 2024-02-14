<script setup lang="ts">
// Based on https://github.com/vuejs/vitepress/blob/20511006dba516ca8c06ed1dd3516547af668a0e/src/client/theme-default/components/VPTeamMembers.vue

import type { DefaultTheme } from 'vitepress/theme'
import { VPTeamMembers } from "vitepress/theme"

interface Props {
  size?: 'small' | 'medium'
  members: DefaultTheme.TeamMember[]
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<template>
    <VPTeamMembers
        :size="size"
        :members="members"
        class="horizontal-team-members"
    />
</template>

<style>
.horizontal-team-members.VPTeamMembers.small .container .item {
  flex: 1 0 224px;
}

.horizontal-team-members.VPTeamMembers.medium .container .item {
  flex: 1 0 256px;
}

@media (min-width: 375px) {
    .horizontal-team-members.VPTeamMembers.medium .container .item  {
    flex: 1 0 288px;
  }
}
.horizontal-team-members .container {
  display: flex;
  overflow-x: scroll;
  max-width: 1152px;
}
</style>