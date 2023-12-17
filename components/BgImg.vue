<template>
    <div :class="bgClassList" :style="{ backgroundImage: `url(${img})` }">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        bgClassList?: string
        img: string
    }>(),
    {
        bgClassList: 'bg-no-repeat bg-cover bg-center',
    }
)
</script>

<style></style>
