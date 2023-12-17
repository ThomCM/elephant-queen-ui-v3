<template>
    <div id="theatre">
        <div class="mb-12">
            <h2 class="mb-3">Theatre</h2>

            <p :class="['text-gray-900']">
                Inspirational theatre scripts and music for primary & secondary
                schools, based on The&nbsp;Elephant&nbsp;Queen.
            </p>
        </div>

        <div
            :class="[
                'flex flex-col space-y-6 md:space-y-0 md:flex-row md:space-x-6',
            ]"
        >
            <div class="flex-grow">
                <div :class="['text-lg font-bold mb-3 xl:text-xl']">
                    Big Small World
                </div>

                <DoStorageBgImg
                    :class="['video-bg']"
                    src="theatre_resources/big_small_world/big_small_world_thumbnail.jpg"
                >
                    <PlayButton @click="videoToPlay = 'PB_uI75HE-I'" />

                    <TileDownloadButton
                        label="Download the Script, Music and Production Notes"
                        @click="
                            resourceToDownload = `${runtimeConfig.public.doStorageUrl}/theatre_resources/big_small_world/big_small_world.zip`
                        "
                    />
                </DoStorageBgImg>
            </div>

            <div class="flex-grow">
                <div :class="['text-lg font-bold mb-3 xl:text-xl']">
                    Trial of Athena
                </div>

                <DoStorageBgImg
                    :class="['video-bg']"
                    src="theatre_resources/the_trial_of_athena/the_trial_of_athena_thumbnail.jpg"
                >
                    <PlayButton @click="videoToPlay = 'bwIhgNMB9Vk'" />

                    <TileDownloadButton
                        label="Download the Script and Production Notes"
                        @click="
                            resourceToDownload = `${runtimeConfig.public.doStorageUrl}/theatre_resources/the_trial_of_athena/the_trial_of_athena.zip`
                        "
                    />
                </DoStorageBgImg>
            </div>
        </div>

        <YouTubeVideoPlayer
            v-if="videoToPlay"
            :video-id="videoToPlay"
            @close="videoToPlay = null"
        />

        <TheatreResourceDownloadModal
            v-if="resourceToDownload"
            :download="resourceToDownload"
            @close="resourceToDownload = null"
        />
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const resourceToDownload = ref<string | null>(null)
const videoToPlay = ref<string | null>(null)
</script>

<style scoped>
.video-bg {
    border-radius: theme('borderRadius.xl');
    margin-left: calc(theme('spacing.5') * -1);
    margin-right: calc(theme('spacing.5') * -1);
    position: relative;
    color: theme('colors.white');
    height: 400px;
}

@media (min-width: theme('screens.md')) {
    .video-bg {
        margin-left: 0;
        margin-right: 0;
        height: 230px;
    }
}

@media (min-width: theme('screens.lg')) {
    .video-bg {
        height: 286px;
    }
}

@media (min-width: theme('screens.xl')) {
    .video-bg {
        height: 350px;
    }
}

@media (min-width: theme('screens.2xl')) {
    .video-bg {
        height: 420px;
    }
}

@media (min-width: theme('screens.3xl')) {
    .video-bg {
        height: 542px;
    }
}
</style>
