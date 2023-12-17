<template>
    <NuxtLink class="font-semibold text-lg xl:text-xl" :to="to">
        See more >
    </NuxtLink>
</template>

<script setup lang="ts">
const { to } = defineProps<{ to: string }>()
</script>

<style></style>
