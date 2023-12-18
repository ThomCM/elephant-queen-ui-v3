<template>
    <DoStorageBgImg
        :style="{
            height: sectionHeight,
        }"
        :class="[
            'bg-cover bg-no-repeat text-white flex items-end text-center px-9 py-12 md:rounded-xl md:items-center xl:px-24',
            bgPosition,
        ]"
        :src="bgImg"
    >
        <div>
            <slot></slot>
        </div>
    </DoStorageBgImg>
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{ background: string; bgPosition?: string }>(),
    {
        bgPosition: 'bg-top',
    }
)

const mainMinHeight = useMainMinHeight()
const viewportWidth = useViewportWidth()
const device = useDevice()

const bgImg = computed(() => {
    return `home_page/${props.background}_${device.value}.jpg`
})

const sectionHeight = computed(() => {
    if (viewportWidth.value >= 1280) return '668px'

    if (viewportWidth.value >= 768) return '356px'

    return mainMinHeight.value === '90vh' ? '667px' : mainMinHeight.value
})
</script>

<style></style>
