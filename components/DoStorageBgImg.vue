<template>
    <div
        :style="{
            backgroundImage: `url(${src.startsWith('http') ? src : imgSrc})`,
        }"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ src: string }>()

const runtimeConfig = useRuntimeConfig()

const imgSrc = computed(() => {
    return props.src.startsWith('/')
        ? runtimeConfig.public.doStorageUrl + props.src
        : `${runtimeConfig.public.doStorageUrl}/${props.src}`
})
</script>

<style></style>
