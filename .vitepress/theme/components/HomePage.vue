<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { orgMembers, contributors } from '../composables/contributors'
</script>

<template>
  <div class="homepage-content">
    <div class="homepage-content-container">
      <main class="homepage-main-content">
        <!-- Looping through the team section and contributor section -->
        <div
          v-for="(members, index) in [{ title: 'Meet The Team', members: orgMembers }, { title: 'Meet The Contributors', members: contributors }]"
          :key="index" class="section vp-doc flex flex-col items-center mt-10">
          <h2 :id="members.title.toLowerCase().split(' ').join('-')" class="section-title op70 font-normal p='t-10 b-2'">
            {{ members.title }}
          </h2>
          <div class="section-content w-full p-10">
            <VPTeamMembers size="small" :members="members.members" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
