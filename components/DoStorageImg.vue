<template>
    <img
        :src="src.startsWith('http') ? src : imgSrc"
        :alt="alt"
        :loading="loading"
    />
</template>

<script setup lang="ts">
const props = withDefaults(
    defineProps<{ src: string; alt?: string; loading?: 'eager' | 'lazy' }>(),
    { loading: 'eager' }
)

const runtimeConfig = useRuntimeConfig()

const imgSrc = computed(() => {
    return props.src.startsWith('/')
        ? runtimeConfig.public.doStorageUrl + props.src
        : `${runtimeConfig.public.doStorageUrl}/${props.src}`
})
</script>
