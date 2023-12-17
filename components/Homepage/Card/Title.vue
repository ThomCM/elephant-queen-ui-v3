<template>
    <h1 v-if="first">
        <slot></slot>
    </h1>

    <h2 v-else>
        <slot></slot>
    </h2>
</template>

<script setup lang="ts">
defineProps<{ first?: boolean }>()
</script>

<style scoped>
h1,
h2 {
    margin-bottom: theme('spacing.2');
}

@media (min-width: theme('screens.xl')) {
    h1,
    h2 {
        margin-bottom: theme('spacing.3');
    }
}
</style>
