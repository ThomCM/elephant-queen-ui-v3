<template>
    <div id="gallery">
        <div :class="['mb-6 flex items-center justify-between md:mb-12']">
            <h2>Gallery</h2>
        </div>

        <div
            v-if="
                !pending && !error && Array.isArray(photos) && photos.length > 0
            "
        >
            <Carousel>
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

const carouselPerPage = computed(() => {
    return viewportWidth.value >= 768 ? 4 : 2
})

const pages = computed(() => {
    return Array.isArray(photos)
        ? Math.ceil(photos.length / carouselPerPage.value)
        : 0
})
</script>

<style></style>
