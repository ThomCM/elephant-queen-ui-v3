<template>
    <div :class="['fixed z-50 inset-0 bg-black']">
        <div :class="['relative h-full w-full']">
            <div class="h-full w-full flex flex-col">
                <div class="h-1/10 flex items-center justify-center">
                    <FullScreenCloseButton @click="handleClose" />
                </div>

                <div :class="['h-9/10 flex items-center justify-center']">
                    <video
                        class="max-w-full max-h-full"
                        :src="video"
                        controls
                    ></video>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{ video: string }>()

const emit = defineEmits<{
    (event: 'close'): void
}>()

function handleClose() {
    emit('close')
}

onMounted(() => {
    if (process.client) document.body.style.overflowY = 'hidden'
})

onBeforeUnmount(() => {
    if (process.client) document.body.style.overflowY = 'auto'
})
</script>

<style></style>
