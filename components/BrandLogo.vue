<template>
    <img :src="imgSrc" :alt="`Elephant Queen Logo (${color})`" />
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

const props = withDefaults(defineProps<{ color?: 'black' | 'white' }>(), {
    color: 'black',
})

const imgSrc = computed(() => {
    return props.color === 'white'
        ? `${runtimeConfig.public.doStorageUrl}/brand/teq-white-logo.png`
        : `${runtimeConfig.public.doStorageUrl}/brand/teq-black-logo.png`
})
</script>

<style></style>
