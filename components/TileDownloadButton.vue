<template>
    <button
        :class="[
            'absolute rounded-b-xl bottom-0 w-full bg-black bg-opacity-60 left-0 py-1 font-bold text-white lg:py-2',
        ]"
        type="button"
        @click="handleClick"
    >
        {{ label }}
    </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ label?: string }>(), { label: 'Download' })

const emit = defineEmits<{
    (event: 'click', payload: MouseEvent): void
}>()

const authorised = useAuthorised()

function handleClick(e: MouseEvent) {
    if (authorised.value) {
        emit('click', e)
    } else {
        alert(
            `Sorry these resources are only available for download in East Africa.`
        )
    }
}
</script>

<style></style>
