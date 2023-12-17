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
            v-if="!pending && !error"
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
import type { Video } from '~/utils/dto/Video'

const {
    data: interviewVideoCollection,
    pending,
    error,
    refresh,
} = await useApiFetch('/video-collections/mentorship-interviews')

const videoToPlay = ref<Video | null>(null)
</script>

<style scoped>
.interviewee {
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.66);
}

.video-list-item {
    height: 167px;
}

@media screen and (min-width: 450px) {
    .video-list-item {
        height: 210px;
    }
}

@media screen and (min-width: 575px) {
    .video-list-item {
        height: 240px;
    }
}

@screen sm {
    .video-list-item {
        height: 270px;
    }
}

@media screen and (min-width: 700px) {
    .video-list-item {
        height: 300px;
    }
}

@screen md {
    .video-list-item {
        height: 167px;
    }
}

@media screen and (min-width: 900px) {
    .video-list-item {
        height: 210px;
    }
}

@screen lg {
    .video-list-item {
        height: 240px;
    }
}

@media screen and (min-width: 1150px) {
    .video-list-item {
        height: 280px;
    }
}

@screen xl {
    .video-list-item {
        height: 320px;
    }
}

@screen 2xl {
    .video-list-item {
        height: 370px;
    }
}

@screen 3xl {
    .video-list-item {
        height: 415px;
    }
}
</style>
