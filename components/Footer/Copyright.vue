<template>
    <div :class="['text-black/20 text-sm']">
        © Outreach & Education Ltd {{ currentYear }}. All rights Reserved.
    </div>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<style></style>
