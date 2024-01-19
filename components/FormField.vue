<template>
    <div :class="['form-field', { invalid: errorMessage }]">
        <label v-if="label" class="mb-1 font-bold">
            {{ label }}
        </label>

        <slot></slot>

        <p v-if="message" class="message text-sm font-bold mt-1">
            {{ message }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { apiErrorStateKey } from '~/utils/states/ApiError'

const { label, tip } = defineProps<{
    label?: string | null
    tip?: string | null
}>()

const apiFailure = inject(apiErrorStateKey, ref())

const apiErrorKey = computed(() => {
    return label
        ? label
              .toLowerCase()
              .replace(/[^a-z0-9]/gi, ' ')
              .trim()
              .replace(/\s+/g, '_')
        : null
})

const errorMessage = computed(() => {
    if (apiFailure.value === undefined) return null

    if (apiErrorKey.value === null) return null

    if (apiFailure.value.response === undefined) return null

    if (apiFailure.value.response._data === undefined) return null

    return apiFailure.value.response._data.hasOwnProperty(apiErrorKey.value)
        ? apiFailure.value.response._data[apiErrorKey.value].join(', ')
        : null
})

const message = computed(() => {
    return errorMessage.value ? errorMessage.value : tip ? tip : null
})
</script>

<style scoped>
.form-field.invalid label,
.form-field.invalid .message {
    color: theme('colors.red.DEFAULT');
}
</style>
