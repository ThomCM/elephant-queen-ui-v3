<template>
    <button
        class="flex items-center gap-x-3"
        type="button"
        @click="handleSelect"
    >
        <div
            :class="[
                'border-3 flex-shrink-0 h-7 w-7 border-black rounded-full flex items-center justify-center',
            ]"
        >
            <div
                v-if="modelValue === value"
                class="h-4 w-4 rounded-full bg-blue-900"
            ></div>
        </div>

        <label :class="['font-semibold text-left cursor-pointer']">
            <slot></slot>
        </label>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    modelValue: number | string | boolean
    value: number | string | boolean
}>()

const emit = defineEmits<{
    (event: 'update:modelValue', payload: number | string | boolean): void
}>()

function handleSelect() {
    emit('update:modelValue', props.value)
}
</script>

<style></style>
