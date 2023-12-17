<template>
    <div :class="['fixed z-50 inset-0 bg-black']">
        <div :class="['relative h-full w-full']">
            <div class="h-full w-full flex flex-col">
                <div :class="['h-9/10 flex items-center justify-center']">
                    <img class="max-h-full" :src="img" />
                </div>

                <div class="h-1/10 flex items-center justify-center">
                    <FullScreenCloseButton @click="$emit('close')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    img: string
}>()

onMounted(() => {
    document.body.style.overflowY = 'hidden'
})

onBeforeUnmount(() => {
    document.body.style.overflowY = 'auto'
})
</script>

<style></style>
