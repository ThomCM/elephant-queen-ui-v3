<template>
    <div
        :class="[
            'audio-player-wrapper fixed bottom-0 inset-x-0 text-white content-px',
        ]"
    >
        <audio id="audio-player" class="hidden">
            <source :src="src" type="audio/mpeg" />
            Your browser does not support the audio tag.
        </audio>

        <div
            :class="[
                'relative h-full w-full py-6 md:flex md:items-center md:justify-between md:space-x-6',
            ]"
        >
            <button
                :class="[
                    'audio-player-close-button text-sm absolute right-0 top-0 -mt-10 h-10 -mr-6 px-3 flex items-center md:text-base xl:-mr-12',
                ]"
                @click="$emit('close')"
            >
                <XMarkIcon class="h-6 w-6 mr-1" />
                Close
            </button>

            <div>
                <span class="text-white text-opacity-50">Now Playing: </span
                ><span>{{ title }}</span>
            </div>

            <div
                :class="[
                    'flex items-center justify-between space-x-3 md:flex-grow',
                ]"
            >
                <div>{{ playbackTimeForDisplay }}</div>

                <div
                    :class="['h-0.5 flex-grow bg-white bg-opacity-30 relative']"
                >
                    <div
                        :class="['absolute h-full left-0 top-0 bg-white']"
                        :style="{
                            width: `${(playbackTime / audioDuration) * 100}%`,
                        }"
                    ></div>
                </div>

                <div>{{ audioDurationForDisplay }}</div>
            </div>

            <div :class="['flex items-center justify-center space-x-3']">
                <button @click="rewind">
                    <BackwardIcon class="h-7 w-7" />
                </button>

                <button @click="toggleAudio">
                    <PlayIcon v-show="!isPlaying" class="h-7 w-7" />

                    <PauseIcon v-show="isPlaying" class="h-7 w-7" />
                </button>

                <button @click="fastForward">
                    <ForwardIcon class="h-7 w-7" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    BackwardIcon,
    ForwardIcon,
    PauseIcon,
    PlayIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'

defineProps<{ src: string; title: string }>()

const audioDurationForDisplay = ref('00:00')
const audioDuration = ref(100)
const audioLoaded = ref(false)
const isPlaying = ref(false)
const listenerActive = ref(false)
const playbackTimeForDisplay = ref('00:00')
const playbackTime = ref(0)

onMounted(() => {
    if (process.client) {
        const audio = document.getElementById(
            'audio-player'
        ) as HTMLMediaElement | null

        if (audio) {
            audio.addEventListener('loadedmetadata', function (_e) {
                initSlider()
            })

            audio.addEventListener('canplay', function (_e) {
                audioLoaded.value = true
            })
        }

        setTimeout(() => {
            if (!isPlaying.value) toggleAudio()
        }, 500)
    }
})

watch(isPlaying, () => {
    if (isPlaying.value) {
        const audio = document.getElementById(
            'audio-player'
        ) as HTMLMediaElement | null

        if (audio) {
            initSlider()

            if (!listenerActive.value) {
                listenerActive.value = true

                audio.addEventListener('timeupdate', playbackListener)
            }
        }
    }
})

watch(playbackTime, () => {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        var diff = Math.abs(playbackTime.value - audio.currentTime)

        if (diff > 0.01) audio.currentTime = playbackTime.value
    }
})

function cleanupListeners() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        audio.removeEventListener('timeupdate', playbackListener)
        audio.removeEventListener('ended', endListener)
        audio.removeEventListener('pause', pauseListener)
    }
}

function convertTime(seconds: number) {
    const format = (val: number) => `0${Math.floor(val)}`.slice(-2)
    let hours = seconds / 3600
    let minutes = (seconds % 3600) / 60
    return [minutes, seconds % 60].map(format).join(':')
}

function elapsedTime() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    return audio ? convertTime(audio.duration) : '00:00'
}

function endListener() {
    isPlaying.value = false
    listenerActive.value = false
    cleanupListeners()
}

function fastForward() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio && audioDuration.value - playbackTime.value + 10 > 0) {
        playbackTime.value = playbackTime.value + 10
        audio.currentTime = playbackTime.value
    }
}

function initSlider() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        audioDurationForDisplay.value = convertTime(audio.duration)
        audioDuration.value = Math.round(audio.duration)
    }
}

function pauseListener() {
    isPlaying.value = false
    listenerActive.value = false
    cleanupListeners()
}

function playbackListener(_e: any) {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        playbackTime.value = audio.currentTime
        playbackTimeForDisplay.value = convertTime(audio.currentTime)
        audio.addEventListener('ended', endListener)
        audio.addEventListener('pause', pauseListener)
    }
}

function playVideo() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        audio.play()
    }
}

function rewind() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        if (playbackTime.value - 10 > 0) {
            playbackTime.value = playbackTime.value - 10
            audio.currentTime = playbackTime.value
        }
    }
}

function toggleAudio() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    if (audio) {
        if (audio.paused) {
            audio.play()
            isPlaying.value = true
        } else {
            audio.pause()
            isPlaying.value = false
        }
    }
}

function totalTime() {
    const audio = document.getElementById(
        'audio-player'
    ) as HTMLMediaElement | null

    return audio ? convertTime(audio.duration) : '00:00'
}
</script>

<style scoped>
.audio-player-wrapper,
.audio-player-close-button {
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(20px);
}
</style>
