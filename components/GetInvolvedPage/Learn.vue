<template>
    <div id="conservation-organisations">
        <div class="mb-6">
            <FilmPageHeading2>Learn about Elephants</FilmPageHeading2>

            <p class="md:max-w-lg 3xl:max-w-2xl">
                Explore the organisations that are working to protect Kenya's
                elephants. They differ in their areas of expertise but all are
                effective, accountable and united by a common goal:
            </p>
        </div>

        <ul
            v-if="!pending && !error"
            :class="['grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6']"
        >
            <li v-for="(org, i) in conservationOrgs" :key="`org-${i}`">
                <a :href="org.url" target="_blank">
                    <img :src="org.image" :alt="org.name" />
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const {
    data: conservationOrgs,
    pending,
    error,
    refresh,
} = await useApiFetch('conservation-organisations')
</script>

<style></style>
