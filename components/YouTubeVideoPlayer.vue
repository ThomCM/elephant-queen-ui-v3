<template>
    <div
        :class="[
            'fixed inset-0 z-50 bg-black flex items-center justify-center',
        ]"
    >
        <div class="w-full max-w-xl" v-click-outside="handleClickOutside">
            <FullScreenCloseButton class="ml-auto" @click="handleClose" />

            <ClientOnly>
                <YouTube
                    :src="`https://www.youtube.com/watch?v=${videoId}`"
                    :vars="playerVars"
                    ref="youtube"
                />
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
import YouTube from 'vue3-youtube'

defineProps<{ videoId: string }>()

const emit = defineEmits<{
    (event: 'close'): void
}>()

const createdTimestamp = ref<number | null>(null)

const playerVars = ref({
    autoplay: 1,
})

function handleClickOutside() {
    if (createdTimestamp.value && createdTimestamp.value - +new Date() < -250) {
        emit('close')
    }
}

function handleClose() {
    emit('close')
}

onMounted(() => {
    createdTimestamp.value = +new Date()
})
</script>
