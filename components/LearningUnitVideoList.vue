<template>
    <div>
        <ul
            :class="['videos text-white grid grid-cols-1 gap-6 md:grid-cols-2']"
        >
            <li
                v-for="(video, v) in videos"
                :key="`learning-unit-video-list-${v}`"
            >
                <BgImg
                    :class="['h-full w-full rounded-xl relative']"
                    :img="video.image"
                >
                    <span
                        :class="[
                            'video-title text-lg font-semibold left-0 top-0 p-3 absolute 3xl:p-6',
                        ]"
                    >
                        {{ video.title }}
                    </span>

                    <TileDownloadButton
                        v-if="
                            videoToShowLanguageOptions === null ||
                            videoToShowLanguageOptions.slug !== video.slug
                        "
                        @click="videoToDownload = video"
                    />

                    <PlayButton
                        v-if="
                            videoToShowLanguageOptions === null ||
                            videoToShowLanguageOptions.slug !== video.slug
                        "
                        @click="videoToShowLanguageOptions = video"
                    />

                    <div
                        v-else-if="
                            videoToShowLanguageOptions &&
                            videoToShowLanguageOptions.slug === video.slug
                        "
                        :class="[
                            'bg-black absolute inset-0 z-10 rounded-xl flex items-center justify-center',
                        ]"
                    >
                        <ul :class="['flex space-x-3 3xl:space-x-6']">
                            <li
                                v-for="(videoOption, l) in languageVideoOptions"
                                :key="`$learning-unit-video-list-${v}-video-opt-${l}`"
                            >
                                <button
                                    type="button"
                                    @click="videoIdToPlay = videoOption.id"
                                >
                                    <PlayIcon
                                        :class="['h-10 w-10 3xl:h-16 3xl:w-16']"
                                    />
                                </button>

                                <div :class="['font-bold']">
                                    {{ videoOption.language }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </BgImg>
            </li>
        </ul>

        <YouTubeVideoPlayer
            v-if="videoIdToPlay"
            :video-id="videoIdToPlay"
            @close="videoIdToPlay = null"
        />

        <VideoDownloadModal
            v-if="videoToDownload"
            :video="videoToDownload"
            @close="videoToDownload = null"
        />
    </div>
</template>

<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
import type { Video } from '~/utils/dto/Video'

defineProps<{
    videos: Video[]
}>()

const videoIdToPlay = ref<string | null>(null)
const videoToDownload = ref<Video | null>(null)
const videoToShowLanguageOptions = ref<Video | null>(null)

const languageVideoOptions = computed(() => {
    const options = [
        {
            id: videoToShowLanguageOptions.value?.youtube_id_english,
            language: 'English',
        },
        {
            id: videoToShowLanguageOptions.value?.youtube_id_swahili,
            language: 'Kiswahili',
        },
        {
            id: videoToShowLanguageOptions.value?.youtube_id_maa,
            language: 'Maa',
        },
    ]

    return options.filter(
        (n): n is { id: string; language: string } => typeof n.id === 'string'
    )
})

watch(videoIdToPlay, (newValue, _oldValue) => {
    if (newValue) videoToShowLanguageOptions.value = null
})
</script>

<style scoped>
.video-title {
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.66);
}

.videos > li {
    height: 256px;
}

@media (min-width: theme('screens.3xl')) {
    .videos > li {
        height: 416px;
    }
}
</style>
