<template>
    <button
        :class="[
            'absolute transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2',
        ]"
        type="button"
    >
        <PlayIcon class="h-10 w-10 3xl:h-16 3xl:w-16" />
    </button>
</template>

<script setup lang="ts">
import { PlayIcon } from '@heroicons/vue/24/outline'
</script>

<style></style>
