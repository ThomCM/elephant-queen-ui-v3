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
const {
    data: photos,
    pending,
    error,
    refresh,
} = await useApiFetch('photo-diary-entries')

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
