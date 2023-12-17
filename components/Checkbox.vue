<template>
    <button class="flex items-center gap-x-3" type="button" @click="toggle">
        <div
            :class="[
                'border-3 flex-shrink-0 h-7 w-7 border-black flex items-center justify-center',
            ]"
        >
            <div v-if="checked" class="h-4 w-4 bg-blue-900"></div>
        </div>

        <label :class="['text-sm font-semibold text-left cursor-pointer']">
            <slot></slot>
        </label>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: boolean }>()

const emit = defineEmits<{
    (event: 'update:modelValue', payload: boolean): void
}>()

const checked = ref(props.modelValue)

watch(checked, () => {
    emit('update:modelValue', checked.value)
})

watch(
    () => props.modelValue,
    () => {
        checked.value = props.modelValue
    }
)

function toggle() {
    checked.value = !checked.value
}
</script>

<style></style>
