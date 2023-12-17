<template>
    <DoStorageBgImg
        :class="[
            'content-px -content-mx py-12 bg-cover bg-center bg-no-repeat flex items-end justify-center xl:items-center xl:justify-start xl:relative',
        ]"
        :style="{
            minHeight: mainMinHeight,
        }"
        :src="`film_page/film_banner_${device}.jpg`"
    >
        <div
            :class="[
                'text-white lg:flex lg:justify-between lg:items-center lg:w-full lg:px-12 xl:block xl:px-0 xl:max-w-xs',
            ]"
        >
            <div
                :class="[
                    'text-center mb-6 md:max-w-sm md:mx-auto lg:ml-0 lg:text-left xl:max-w-none xl:mb-2 xl:text-center',
                ]"
            >
                <h1 class="hero-heading mb-2 xl:mb-0">The Film</h1>

                <FilmPageHeroDescription class="xl:hidden" />
            </div>

            <div
                :class="[
                    'px-8 md:px-0 md:max-w-xs md:mx-auto lg:mr-0 lg:max-w-none lg:w-72 xl:mx-auto xl:w-64',
                ]"
            >
                <div class="mb-3">
                    <Button
                        class="w-full"
                        color="white"
                        @click="showTrailer = true"
                    >
                        Watch the Trailer
                    </Button>
                </div>

                <div class="mb-3">
                    <Button
                        class="w-full"
                        color="white"
                        @click="showWatchModal = true"
                    >
                        Watch the Film
                    </Button>
                </div>

                <p class="font-semibold text-sm text-center">
                    Availabile in English, Kiswahili & Maa
                </p>
            </div>
        </div>

        <FilmPageHeroDescription
            :class="[
                'hidden xl:block xl:absolute xl:bottom-0 xl:w-full xl:-ml-12 xl:px-12 xl:bg-black xl:bg-opacity-60 xl:text-center xl:py-4',
            ]"
        />

        <FilmPageWatchModal
            v-if="showWatchModal"
            @close="showWatchModal = false"
        />

        <YouTubeVideoPlayer
            v-if="showTrailer"
            video-id="Kej1hkYExho"
            @close="showTrailer = false"
        />
    </DoStorageBgImg>
</template>

<script setup lang="ts">
const showTrailer = ref(false)
const showWatchModal = ref(false)
const device = useDevice()
const mainMinHeight = useMainMinHeight()
</script>

<style scoped>
.hero-heading {
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
}
</style>
