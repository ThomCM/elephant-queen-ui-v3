<template>
    <div class="text-center py-6 xl:py-12">
        <div
            :class="[
                '-content-mx content-px border-b border-gray pb-6 xl:pb-12',
            ]"
        >
            <h1>Education Resources</h1>
        </div>

        <div v-if="educationResources">
            <div
                :class="[
                    '-content-mx content-px border-b border-gray py-6 xl:py-12',
                ]"
            >
                <EducationResourcesPageStoryBookCollections
                    :collections="educationResources.story_book_collections"
                />
            </div>

            <div
                :class="[
                    '-content-mx content-px border-b border-gray py-6 xl:py-12',
                ]"
            >
                <EducationResourcesPageColouringBookCollections
                    :collections="educationResources.colouring_book_collections"
                />
            </div>

            <div
                :class="[
                    '-content-mx content-px border-b border-gray py-6 xl:py-12',
                ]"
            >
                <EducationResourcesPageTheatre />
            </div>

            <div class="py-6 xl:py-12">
                <EducationResourcesPageLearningUnits
                    :units="educationResources.learning_units"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'The Elephant Queen: Education Resources',
    meta: [
        {
            name: 'description',
            content:
                'Colouring Books, Story Books, Tales from the Bush & More...',
        },
    ],
})

import { isEducationResources } from '~/utils/dto/EducationResources'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.apiUrl}/education-resources`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const educationResources = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isEducationResources(data.value.data)
        ? data.value.data
        : null
})
</script>

<style></style>
