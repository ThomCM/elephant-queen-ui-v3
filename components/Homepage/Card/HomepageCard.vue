<template>
    <DoStorageBgImg
        :style="{
            height: sectionHeight,
        }"
        :class="[
            'bg-cover bg-no-repeat text-white flex items-end text-center px-9 py-12 md:rounded-xl md:items-center xl:px-24',
            bgPosition,
        ]"
        :src="`home_page/${background}_${device}.jpg`"
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

const mobileSectionHeight = ref(`667px`)

const mainMinHeight = useMainMinHeight()

const viewportWidth = useViewportWidth()

const device = computed(() => {
    if (viewportWidth.value >= 1280) return 'desktop'

    if (viewportWidth.value >= 768) return 'tablet'

    return 'mobile'
})

const sectionHeight = computed(() => {
    if (viewportWidth.value >= 1280) return '668px'

    if (viewportWidth.value >= 768) return '356px'

    return mobileSectionHeight.value
})

onMounted(() => {
    if (process.client) {
        mobileSectionHeight.value = mainMinHeight.value
    }
})
</script>

<style></style>
