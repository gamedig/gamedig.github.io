<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useData } from 'vitepress';
import Giscus from '@giscus/vue';

const { isDark, frontmatter, title } = useData();

// Theme based on dark mode
const theme = computed(() => (isDark.value ? 'transparent_dark' : 'light'));
// Initialize `isLocal` as a ref, with a default value of false.
const isLocal = ref(false);

// onMounted ensures this runs only in the client-side environment.
// This is necessary because `window.origin` is not available "server-side".
onMounted(() => {
    isLocal.value = /http:\/\/localhost:[0-9]+/.test(window.origin);
});
</script>

<template>
    <!--
     Conditional rendering of the comments section based on frontmatter and host conditions. 
     We refuse all connections unless it is the official domain.
     This just hides the connection refused error message when running locally.
     -->
    <div v-if="!(frontmatter.comments === false || isLocal)" class="comments-container">
        <!-- Spacer div for styling -->
        <div style="margin-top: 2rem" />
        <!-- Giscus component widget for embedding GitHub discussions -->
        <div :key="title" class="comments-giscus-container">
            <Giscus
                id="comments"
                repo="gamedig/gamedig.github.io"
                repoId="R_kgDOJ2zv5Q"
                category="Pages"
                categoryId="DIC_kwDOJ2zv5c4Ce1-N"
                mapping="title"
                reactionsEnabled="1"
                emitMetadata="0"
                strict="1"
                inputPosition="top"
                :theme="theme"
                lang="en"
                loading="lazy"
            />
        </div>
    </div>
</template>
