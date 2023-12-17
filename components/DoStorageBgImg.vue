<template>
    <div
        :style="{
            backgroundImage: `url(${imgSrc})`,
        }"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const { src } = defineProps<{ src: string }>()
const runtimeConfig = useRuntimeConfig()

const imgSrc = computed(() => {
    return src.startsWith('http')
        ? src
        : src.startsWith('/')
          ? runtimeConfig.public.doStorageUrl + src
          : `${runtimeConfig.public.doStorageUrl}/${src}`
})
</script>

<style></style>
