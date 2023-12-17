<template>
    <div :class="['form-field', { invalid: errors && errors.length > 0 }]">
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
const { errors, label, tip } = withDefaults(
    defineProps<{
        errors?: string[] | null
        label?: string | null
        tip?: string | null
    }>(),
    {
        errors: () => [],
    }
)

const message = computed(() => {
    if (!Array.isArray(errors)) return null

    if (errors.length === 0 && !tip) return null

    return errors.length > 0 ? errors.join(' ') : tip
})
</script>

<style scoped>
.form-field.invalid label,
.form-field.invalid .message {
    color: theme('colors.red.DEFAULT');
}
</style>
