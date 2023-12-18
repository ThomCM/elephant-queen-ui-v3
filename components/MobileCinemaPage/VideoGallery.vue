<template>
    <div id="video-diary">
        <div :class="['mb-12 flex items-center justify-between']">
            <h2>Videos</h2>

            <!-- <MobileCinemaPageGalleryNav
                v-if="numberOfPhotos > numberOfSlides"
                :numberOfSlides="numberOfSlides"
                v-model="currentSlide"
            /> -->
        </div>

        <div v-if="videosWithImage" class="space-y-4">
            <!-- <Carousel :itemsToShow="itemsToShow">
                <Slide v-for="(video, i) in videosWithImage" :key="`video-gallery-${i}`">
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
                                    loading="lazy"
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
            </Carousel> -->

            <Carousel
                id="gallery"
                :items-to-show="1"
                :wrap-around="false"
                v-model="currentSlide"
            >
                <Slide
                    v-for="(slide, i) in videosWithImage"
                    :key="`main${slide.position}`"
                >
                    <div class="flex flex-col space-y-2">
                        <div class="relative">
                            <img
                                v-if="i < currentSlide + 10"
                                class="rounded-xl max-h-[550px]"
                                :src="slide.image"
                                :alt="slide.title"
                            />

                            <PlayButton
                                class="text-white"
                                @click="videoToPlay = slide.video"
                            />
                        </div>

                        <p class="text-sm text-center line-clamp-3">
                            {{ slide.title }}
                        </p>
                    </div>
                </Slide>
            </Carousel>

            <Carousel
                id="thumbnails"
                :items-to-show="itemsToShow"
                :wrap-around="true"
                v-model="currentSlide"
                ref="carousel"
            >
                <Slide
                    v-for="(slide, i) in videosWithImage"
                    :key="slide.position"
                >
                    <div class="w-full px-0.5" @click="slideTo(i)">
                        <BgImg
                            v-if="i < currentSlide + 10"
                            class="min-h-[100px] w-full rounded md:min-h-[150px]"
                            :img="slide.image"
                        />
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
import {
    isVideoDiaryEntryList,
    type VideoDiaryEntry,
} from '~/utils/dto/VideoDiaryEntry'

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

const videosWithImage = computed(() => {
    return (
        videos.value &&
        videos.value.filter(
            (video): video is VideoDiaryEntry & { image: string } =>
                typeof video.image === 'string'
        )
    )
})

const videoToPlay = ref<string | null>(null)

const viewportWidth = useViewportWidth()

const currentSlide = ref(0)

const itemsToShow = computed(() => (viewportWidth.value >= 768 ? 4 : 2))

const numberOfPhotos = computed(() => (videos.value ? videos.value.length : 0))

const numberOfSlides = computed(() =>
    Math.ceil(numberOfPhotos.value / itemsToShow.value)
)

function slideTo(slide: number) {
    currentSlide.value = slide
}
</script>
<style></style>
