<template>
    <div class="text-center py-6 xl:py-12">
        <div class="mb-12">
            <h1 class="mb-6">Mentorship Series</h1>

            <p :class="['mb-3 text-gray-900 md:mb-0']">
                Be inspired by some of Kenya's leading elephant experts.
            </p>

            <p class="text-gray-900">
                An excellent resource for young Kenyans with a professional
                interest in wildlife.
            </p>
        </div>

        <ul
            v-if="interviewVideoCollection"
            :class="['grid grid-cols-1 gap-6 md:grid-cols-2']"
        >
            <li
                v-for="video in interviewVideoCollection.videos"
                :key="`video-${video.slug}`"
                class="video-list-item"
            >
                <BgImg
                    :img="video.image"
                    :class="['relative h-full w-full rounded-xl text-white']"
                >
                    <span
                        :class="[
                            'left-0 top-0 p-3 absolute interviewee 3xl:p-6',
                        ]"
                    >
                        {{ video.title }}
                    </span>

                    <PlayButton @click="videoToPlay = video" />
                </BgImg>
            </li>
        </ul>

        <YouTubeVideoPlayer
            v-if="videoToPlay"
            :video-id="videoToPlay.youtube_id_english"
            @close="videoToPlay = null"
        />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'The Elephant Queen: Mentorship Series',
    meta: [
        {
            name: 'description',
            content: 'Mentorship Series',
        },
    ],
})

import type { Video } from '~/utils/dto/Video'
import { isVideoCollection } from '~/utils/dto/VideoCollection'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.apiUrl}/video-collections/mentorship-interviews`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const interviewVideoCollection = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isVideoCollection(data.value.data)
        ? data.value.data
        : null
})

const videoToPlay = ref<Video | null>(null)
</script>

<style scoped>
.interviewee {
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.66);
}

.video-list-item {
    height: 167px;
}

@media (min-width: 450px) {
    .video-list-item {
        height: 210px;
    }
}

@media (min-width: 575px) {
    .video-list-item {
        height: 240px;
    }
}

@media (min-width: theme('screens.sm')) {
    .video-list-item {
        height: 270px;
    }
}

@media (min-width: 700px) {
    .video-list-item {
        height: 300px;
    }
}

@media (min-width: theme('screens.md')) {
    .video-list-item {
        height: 167px;
    }
}

@media (min-width: 900px) {
    .video-list-item {
        height: 210px;
    }
}

@media (min-width: theme('screens.lg')) {
    .video-list-item {
        height: 240px;
    }
}

@media (min-width: 1150px) {
    .video-list-item {
        height: 280px;
    }
}

@media (min-width: theme('screens.xl')) {
    .video-list-item {
        height: 320px;
    }
}

@media (min-width: theme('screens.2xl')) {
    .video-list-item {
        height: 370px;
    }
}

@media (min-width: theme('screens.3xl')) {
    .video-list-item {
        height: 415px;
    }
}
</style>
