<template>
    <div id="gallery">
        <div :class="['mb-6 flex items-center justify-between md:mb-12']">
            <h2>Gallery</h2>

            <!-- <MobileCinemaPageGalleryNav
                v-if="numberOfPhotos > numberOfSlides"
                :numberOfSlides="numberOfSlides"
                v-model="currentSlide"
            /> -->
        </div>

        <div v-if="photos" class="space-y-4">
            <!-- <Carousel :items-to-show="itemsToShow" v-model="currentSlide">
                <Slide v-for="(photo, i) in photos" :key="`photo-gallery-${i}`">
                    <div
                        :class="[
                            'h-full px-2 flex items-center justify-center',
                        ]"
                        @click="photoToViewInFullScreen = photo.photo"
                    >
                        <div class="max-h-full">
                            <img
                                class="max-h-full mx-auto rounded-xl"
                                :src="photo.photo"
                                :alt="photo.title"
                            />

                            <div
                                :class="[
                                    'text-sm text-center line-clamp-3 mt-2',
                                ]"
                            >
                                {{ photo.title }}
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
                    v-for="(slide, i) in photos"
                    :key="`main${slide.position}`"
                >
                    <div class="flex flex-col space-y-2">
                        <img
                            v-if="i < currentSlide + 10"
                            class="rounded-xl max-h-[550px]"
                            :src="slide.photo"
                            :alt="slide.title"
                        />

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
                <Slide v-for="(slide, i) in photos" :key="slide.position">
                    <div class="w-full px-0.5" @click="slideTo(i)">
                        <BgImg
                            v-if="i < currentSlide + 10"
                            class="min-h-[100px] w-full rounded md:min-h-[150px]"
                            :img="slide.photo"
                        />
                    </div>
                </Slide>
            </Carousel>
        </div>

        <p v-else class="text-gray-900">Coming soon</p>

        <FullScreenImageViewer
            v-if="photoToViewInFullScreen"
            :img="photoToViewInFullScreen"
            @close="photoToViewInFullScreen = null"
        />
    </div>
</template>

<script setup lang="ts">
import { isPhotoDiaryEntryList } from '~/utils/dto/PhotoDiaryEntry'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/photo-diary-entries`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const photos = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isPhotoDiaryEntryList(data.value.data)
        ? data.value.data
        : null
})

const photoToViewInFullScreen = ref<string | null>(null)

const viewportWidth = useViewportWidth()

const currentSlide = ref(0)

const itemsToShow = computed(() => (viewportWidth.value >= 768 ? 4 : 2))

const numberOfPhotos = computed(() => (photos.value ? photos.value.length : 0))

const numberOfSlides = computed(() =>
    Math.ceil(numberOfPhotos.value / itemsToShow.value)
)

function slideTo(slide: number) {
    currentSlide.value = slide
}
</script>

<style></style>
