<template>
    <div id="video-diary">
        <div :class="['mb-12 flex items-center justify-between']">
            <h2>Videos</h2>
        </div>

        <div
            v-if="
                !pending && !error && Array.isArray(videos) && videos.length > 0
            "
        >
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
const {
    data: videos,
    pending,
    error,
    refresh,
} = await useApiFetch('video-diary-entries')

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
