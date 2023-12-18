<template>
    <DoStorageImg :src="imgSrc" :alt="`Elephant Queen Logo (${color})`" />
</template>

<script setup lang="ts">
const props = defineProps<{ color: 'black' | 'white' }>()

const imgSrc = computed(() => {
    return props.color === 'white'
        ? `brand/teq-white-logo.png`
        : `brand/teq-black-logo.png`
})
</script>

<style></style>
