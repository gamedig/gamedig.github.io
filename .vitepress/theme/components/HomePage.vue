<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { VPTeamMembers } from 'vitepress/theme';

import { createLinks } from '../utils/links';
import { data as team } from '../composables/team.data';

import HorizontalContrbutors from './HorizontalContributors.vue';

/**
 * Contributor fetched from GitHub API
 */
interface GitHubContributor {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
    contributions: number;
}

/**
 * Simplified contributor information used in the template
 */
interface Contributor {
    avatar: string;
    name: string;
    github: string;
}

/**
 * List of contributors fetched from GitHub
 */
const contributors = ref<Contributor[]>([]);
/**
 * Flag to indicate if an error occurred while fetching contributors
 */
const fetchError = ref(false);

/**
 * Cache key for storing contributors in localStorage
 */
const cacheKey = 'github-contributors';

/**
 * Try to fetch contributors from cache, otherwise fetch new contributors
 */
const fetchContributors = async () => {
    const cachedData = localStorage.getItem(cacheKey);
    const now = new Date().getTime();
    // Expiry time for cache (24 hours in milliseconds)
    const cacheExpiry = 24 * 60 * 60 * 1000;

    // Check if cached data exists and is still valid
    if (cachedData) {
        const { timestamp, data } = JSON.parse(cachedData);
        if (now - timestamp < cacheExpiry) {
            contributors.value = data;
        } else {
            // If cache is expired, remove it and fetch new contributors
            localStorage.removeItem(cacheKey);
            await fetchNewContributors(now);
        }
    } else {
        // If no cache found, fetch new contributors
        await fetchNewContributors(now);
    }
};

/**
 * Fetch contributors from GitHub API and update the cache
 */
const fetchNewContributors = async (now: number) => {
    // Repositories to fetch contributors from
    const repos = [
        { owner: 'gamedig', repo: 'rust-gamedig' },
        { owner: 'gamedig', repo: 'node-gamedig' },
        { owner: 'gamedig', repo: 'gamedig.github.io' },
    ];

    let contributionsMap = new Map();

    try {
        // Fetch contributors for each repository
        for (const { owner, repo } of repos) {
            const response: GitHubContributor[] = await (
                await fetch(`https://api.github.com/repos/${owner}/${repo}/contributors`)
            ).json();

            // Process and accumulate contributors from all repositories
            response.forEach((contributor) => {
                let contribution = contributionsMap.get(contributor.login) || {
                    ...contributor,
                    repos: [],
                };

                // Add the repo name to the contributor's list of repos
                contribution.repos.push(repo);
                contributionsMap.set(contributor.login, contribution);
            });
        }

        // Convert the accumulated Map to an array, filter, and map to the Contributor interface
        const contributorsArray: Contributor[] = Array.from(contributionsMap.values())
            .filter(
                // Exclude team members
                (contributor) =>
                    !team.members.some((teamMember) => teamMember.github === contributor.login),
            )
            .filter(
                // Exclude bots
                (contributor) =>
                    contributor.login !== 'actions-user' &&
                    contributor.login !== 'dependabot[bot]' &&
                    contributor.login !== 'github-actions[bot]',
            )
            .map((contributor) => ({
                avatar: contributor.avatar_url,
                name: contributor.login,
                github: contributor.html_url,
                title: `${contributor.repos.join('\n')}`,
            }))
            .map(createLinks);

        contributors.value = contributorsArray;

        // Update the cache with new data
        localStorage.setItem(
            cacheKey,
            JSON.stringify({ timestamp: now, data: contributors.value }),
        );
    } catch (error) {
        // Handle fetch errors
        console.error('Failed to fetch GitHub contributors:', error);
        fetchError.value = true;
    }
};

// Fetch contributors on component mount
onMounted(fetchContributors);
</script>

<template>
    <div class="homepage-content">
        <div class="homepage-content-container">
            <main class="homepage-main-content">
                <!-- Section to display team members -->
                <div class="section vp-doc flex flex-col items-center mt-10">
                    <h2 id="meet-the-team" class="section-title op70 font-normal">Meet The Team</h2>

                    <!-- Workaround to display team members with odd number in two columns -->
                    <div class="section-content-top w-full p-10 pb-1">
                        <VPTeamMembers size="small" :members="team.members.slice(0, 2)" />
                    </div>
                    <div class="section-content-bottom w-full p-10 pt-1">
                        <VPTeamMembers size="small" :members="team.members.slice(2)" />
                    </div>
                </div>

                <!-- Section to display contributors, shown only if no error occurred -->
                <div v-if="!fetchError" class="section vp-doc flex flex-col items-center mt-10">
                    <h2
                        id="meet-the-contributors"
                        class="section-title section-title-wrap op70 font-normal"
                    >
                        Those Who Helped Make This Possible
                    </h2>
                    <div class="section-content w-full p-10">
                        <HorizontalContrbutors size="small" :members="contributors" />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>
<style>
@media (max-width: 430px) {
    .section-title-wrap {
        /* Center-align the text for better readability (430px or below) */
        text-align: center;
    }
}
</style>
