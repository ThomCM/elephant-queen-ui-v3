<template>
    <div id="learning">
        <div class="mb-6">
            <h2 class="mb-3">Videos & Learning Activities</h2>

            <p :class="['mb-3 text-gray-900']">
                Become an elephant expert! Explore a selection of elephant
                videos and learning activities. Ideal for all ages at home,
                school or in wildlife clubs. Available in
                English,&nbsp;Kiswahili&nbsp;and&nbsp;Maa.
            </p>

            <NuxtLink
                to="/education-resources/videos-and-learning-activities"
                class="text-link"
            >
                View all videos & learning activities >
            </NuxtLink>
        </div>

        <LearningUnitVideoList v-if="videos.length > 0" :videos="videos" />
    </div>
</template>

<script setup lang="ts">
import type { LearningUnit } from '~/utils/dto/LearningUnit'
import type { Video } from '~/utils/dto/Video'

const { units } = defineProps<{ units: LearningUnit[] }>()

const videos = ref<Video[]>([])

onMounted(() => {
    units.forEach((unit) => {
        if (unit.video_collection.videos.length > 0) {
            videos.value.push(unit.video_collection.videos[0])
        }
    })
})
</script>

<style scoped></style>
