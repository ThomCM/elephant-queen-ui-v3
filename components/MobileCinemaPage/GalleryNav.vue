<template>
    <div :class="['text-gray-900 flex items-center justify-between']">
        <button @click="moveToPreviousSlide">
            <ArrowLongLeftIcon class="h-6" />
        </button>

        <span class="font-bold mx-2">
            {{ modelValue }} of
            {{ numberOfSlides }}
        </span>

        <button @click="moveToNextSlide">
            <ArrowLongRightIcon class="h-6" />
        </button>
    </div>
</template>

<script setup lang="ts">
import {
    ArrowLongLeftIcon,
    ArrowLongRightIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps<{ modelValue: number; numberOfSlides: number }>()

const emit = defineEmits<{
    (event: 'update:modelValue', payload: number): void
}>()

function moveToPreviousSlide() {
    emit('update:modelValue', props.modelValue - 1)
}

function moveToNextSlide() {
    emit('update:modelValue', props.modelValue + 1)
}
</script>

<style></style>
