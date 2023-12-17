<template>
    <div class="text-center py-6 xl:py-12">
        <div class="mb-12">
            <h1 class="mb-6">Tales from the Bush</h1>

            <p :class="['text-gray-900']">
                Listen to a series of evocative podcasts, written and narrated
                by Mark Deeble during the making of The Elephant Queen.
            </p>
        </div>

        <ul
            v-if="collection"
            :class="['grid grid-cols-2 gap-3 md:grid-cols-4 xl:gap-6']"
        >
            <li
                v-for="(item, i) in collection.audios"
                :key="`tales-from-the-bush-${i}`"
                :style="{ height: `${taleFromTheBushWidth}px` }"
            >
                <BgImg
                    :img="item.image"
                    :class="[
                        'tale-from-the-bush text-white relative rounded-xl h-full w-full',
                    ]"
                >
                    <span
                        :class="[
                            'tale-from-the-bush-file-title text-left left-0 px-3 bottom-3 absolute w-full text-sm md:text-base 2xl:text-lg 3xl:px-6 3xl:bottom-6',
                        ]"
                    >
                        {{ item.title }}
                    </span>

                    <PlayButton
                        v-if="!audioToPlay || audioToPlay.title !== item.title"
                        @click="selectAudioToPlay(item)"
                    />
                </BgImg>
            </li>
        </ul>

        <p :class="['mt-6 text-gray-900']">
            All podcasts & original blogs © Wild Inspiration Ltd
            {{ currentYear }} All Rights Reserved
        </p>

        <AudioPlayer
            v-if="audioToPlay"
            :src="audioToPlay.downloads[0].url"
            :title="audioToPlay.title"
            @close="audioToPlay = null"
        />
    </div>
</template>

<script setup lang="ts">
import type { Audio } from '~/utils/dto/Audio'
import { isAudioCollection } from '~/utils/dto/AudioCollection'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/audio-collections/tales-from-the-bush`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const collection = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isAudioCollection(data.value.data)
        ? data.value.data
        : null
})

const audioToPlay = ref<Audio | null>(null)
const taleFromTheBushWidth = ref(0)
const currentYear = computed(() => new Date().getFullYear())
const viewportWidth = useViewportWidth()

function updateTaleFromTheBushHeight() {
    const tales = document.getElementsByClassName('tale-from-the-bush')

    if (tales.length > 0) {
        taleFromTheBushWidth.value = tales[0].clientWidth
    }
}

watch(collection, () => {
    setTimeout(() => {
        updateTaleFromTheBushHeight()
    }, 500)
})

watch(viewportWidth, () => {
    updateTaleFromTheBushHeight()
})

onMounted(() => {
    updateTaleFromTheBushHeight()
})

function selectAudioToPlay(audio: Audio) {
    if (!audioToPlay.value) {
        audioToPlay.value = audio
    } else {
        audioToPlay.value = null

        setTimeout(() => {
            audioToPlay.value = audio
        }, 500)
    }
}
</script>

<style scoped>
.tale-from-the-bush-file-title {
    text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.66);
}
</style>
