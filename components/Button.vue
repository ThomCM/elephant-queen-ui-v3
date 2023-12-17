<template>
    <button
        :class="[
            'rounded-full font-semibold border-3 px-6 py-3 leading-none',
            color,
            { 'cursor-not-allowed': disabled || processing },
        ]"
        :disabled="disabled || processing"
        :type="nativeType"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        color?: 'black' | 'blue' | 'white'
        disabled?: boolean
        nativeType?: 'button' | 'submit'
        processing?: boolean
    }>(),
    {
        color: 'black',
        nativeType: 'button',
    }
)
</script>

<style scoped>
button.black {
    border-color: theme('colors.black');
    color: theme('colors.black');
}

button.blue {
    border-color: theme('colors.blue.DEFAULT');
    background-color: theme('colors.blue.DEFAULT');
    color: theme('colors.white');
}

button.white {
    border-color: theme('colors.white');
    color: theme('colors.white');
    background-color: theme('colors.black');
    background-opacity: 0.1;
}
</style>
