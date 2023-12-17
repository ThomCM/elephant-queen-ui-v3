<template>
    <div class="text-center py-6 xl:py-12">
        <div
            :class="[
                '-content-mx content-px border-b border-gray pb-6 xl:pb-12',
            ]"
        >
            <h1>Education Resources</h1>
        </div>

        <div v-if="!pending && !error">
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
const {
    data: educationResources,
    pending,
    error,
    refresh,
} = await useApiFetch('education-resources')
</script>

<style></style>
