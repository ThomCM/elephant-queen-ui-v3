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
            v-if="conservationOrgs"
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
import { isConservationOrganisationList } from '~/utils/dto/ConvervationOrganisation'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.apiUrl}/conservation-organisations`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const conservationOrgs = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isConservationOrganisationList(data.value.data)
        ? data.value.data
        : null
})
</script>

<style></style>
