<template>
    <div :class="['modal-container z-40 fixed inset-0 bg-white bg-opacity-90']">
        <div
            :class="[
                'relative content-px flex items-center justify-center h-full w-full',
            ]"
        >
            <button class="absolute right-6 top-6" @click="onClose">
                <XMarkIcon class="h-10 w-10" />
            </button>

            <div
                :class="[
                    'modal bg-white rounded-2xl p-6 w-full md:w-auto md:max-w-lg',
                    { 'overflow-y-auto': allowOverflowY },
                ]"
                v-click-outside="onClickOutside"
            >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'

withDefaults(defineProps<{ allowOverflowY?: boolean }>(), {
    allowOverflowY: true,
})

const emit = defineEmits<{
    (event: 'close'): void
}>()

const mainMinHeight = useMainMinHeight()

const createdTimestamp = ref<number | null>(null)

onMounted(() => {
    createdTimestamp.value = +new Date()

    if (process.client) document.body.style.overflowY = 'hidden'
})

function onClickOutside() {
    const now = +new Date()

    if (createdTimestamp.value && createdTimestamp.value - now < -250) {
        emit('close')
    }
}

function onClose() {
    emit('close')
}

onBeforeUnmount(() => {
    if (process.client) document.body.style.overflowY = 'auto'
})
</script>

<style scoped>
.modal-container {
    backdrop-filter: blur(26px);
}

.modal {
    max-height: 75%;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: theme('screens.md')) {
    .modal {
        min-width: 24rem;
    }
}

@media (min-width: theme('screens.xl')) {
    .modal {
        max-height: 90%;
    }
}
</style>
