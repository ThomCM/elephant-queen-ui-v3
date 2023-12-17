<template>
    <DoStorageImg :src="imgSrc" :alt="`Elephant Queen Logo (${color})`" />
</template>

<script setup lang="ts">
const { color } = defineProps<{ color: 'black' | 'white' }>()

const imgSrc = computed(() => {
    return color === 'white'
        ? `brand/teq-white-logo.png`
        : `brand/teq-black-logo.png`
})
</script>

<style></style>
