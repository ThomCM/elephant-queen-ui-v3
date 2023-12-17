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
import { isPartnerList } from '~/utils/dto/Partner'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/partners`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const partners = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isPartnerList(data.value.data)
        ? data.value.data
        : null
})

const mainPartners = computed(() => {
    return isPartnerList(partners) ? [...partners].slice(0, 4) : []
})

const otherPartners = computed(() => {
    return isPartnerList(partners) ? [...partners].slice(4) : []
})
</script>

<style></style>
