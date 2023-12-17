<template>
    <div id="video-diary">
        <div :class="['mb-12 flex items-center justify-between']">
            <h2>Videos</h2>
        </div>

        <div v-if="videos">
            <Carousel>
                <Slide v-for="(video, i) in videos" :key="`video-gallery-${i}`">
                    <div
                        :class="[
                            'h-full px-2 flex items-center justify-center',
                        ]"
                    >
                        <div class="max-h-full">
                            <div class="max-h-full relative">
                                <img
                                    v-if="video.image"
                                    class="max-h-full mx-auto rounded-xl"
                                    :src="video.image"
                                    :alt="video.title"
                                />

                                <PlayButton
                                    class="text-white"
                                    @click="videoToPlay = video.video"
                                />
                            </div>

                            <div
                                :class="[
                                    'text-sm text-center line-clamp-3 mt-2',
                                ]"
                            >
                                {{ video.title }}
                            </div>
                        </div>
                    </div>
                </Slide>
            </Carousel>
        </div>

        <p v-else class="text-gray-900">Coming soon</p>

        <VideoPlayer
            v-if="videoToPlay"
            :video="videoToPlay"
            @close="videoToPlay = null"
        />
    </div>
</template>

<script setup lang="ts">
import { isVideoDiaryEntryList } from '~/utils/dto/VideoDiaryEntry'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/video-diary-entries`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const videos = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isVideoDiaryEntryList(data.value.data)
        ? data.value.data
        : null
})

const videoToPlay = ref<string | null>(null)

const viewportWidth = useViewportWidth()

const carouselPerPage = computed(() => {
    return viewportWidth.value >= 768 ? 4 : 2
})

const pages = computed(() => {
    return Array.isArray(videos)
        ? Math.ceil(videos.length / carouselPerPage.value)
        : 0
})
</script>
<style></style>
