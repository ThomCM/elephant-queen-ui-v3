<template>
    <Modal :allow-overflow-y="false" @close="handleClose">
        <div class="text-center">
            <h2 class="mb-3">Preview</h2>
        </div>

        <div>
            <Carousel>
                <Slide
                    v-for="(img, i) in images"
                    :key="`image-${i}`"
                    class="w-full"
                >
                    <img class="mx-auto xl:h-80" :src="img.url" />
                </Slide>
            </Carousel>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import type { BookPreviewImage } from '~/utils/dto/BookPreviewImage'

defineProps<{ images: BookPreviewImage[] }>()

const emit = defineEmits<{
    (event: 'close'): void
}>()

function handleClose() {
    emit('close')
}
</script>

<style></style>
