<template>
    <div id="partners">
        <div class="mb-6">
            <FilmPageHeading2>Meet Our Partners</FilmPageHeading2>
        </div>

        <div v-if="!pending && !error">
            <ul
                :class="[
                    'grid mb-6 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6',
                ]"
            >
                <li v-for="(partner, i) in mainPartners" :key="`partner-${i}`">
                    <a :href="partner.url || '#'" target="_blank">
                        <img :src="partner.image" :alt="partner.name" />
                    </a>
                </li>
            </ul>

            <ul
                :class="[
                    'grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6',
                ]"
            >
                <li v-for="(partner, i) in otherPartners" :key="`partner-${i}`">
                    <a :href="partner.url || '#'" target="_blank">
                        <img :src="partner.image" :alt="partner.name" />
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const {
    data: partners,
    pending,
    error,
    refresh,
} = await useApiFetch('partners')

const mainPartners = computed(() => {
    return Array.isArray(partners) ? [...partners].slice(0, 4) : []
})

const otherPartners = computed(() => {
    return Array.isArray(partners) ? [...partners].slice(4) : []
})
</script>

<style></style>
