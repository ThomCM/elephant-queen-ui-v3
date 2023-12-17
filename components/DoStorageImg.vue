<template>
    <img :src="imgSrc" :alt="alt" />
</template>

<script setup lang="ts">
const { src, alt } = defineProps<{ src: string; alt?: string }>()
const runtimeConfig = useRuntimeConfig()

const imgSrc = computed(() => {
    return src.startsWith('http')
        ? src
        : src.startsWith('/')
          ? runtimeConfig.public.doStorageUrl + src
          : `${runtimeConfig.public.doStorageUrl}/${src}`
})
</script>
