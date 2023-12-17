<template>
    <div>
        <div class="mb-6">
            <h2 class="mb-3">Colouring Books</h2>

            <p :class="['mb-3 text-gray-900']">
                Colour your own book! Available in English and Kiswahili.
            </p>

            <NuxtLink
                to="/education-resources/colouring-books"
                class="text-link"
            >
                View all available colouring books >
            </NuxtLink>
        </div>

        <BookList>
            <BookListItem
                v-for="collection in collections"
                :key="`${collection.slug}`"
            >
                <DoStorageBgImg
                    :src="collection.image"
                    class="bg-top bg-cover bg-no-repeat"
                >
                    <TileDownloadButton
                        @click="collectionToDownload = collection"
                    />
                </DoStorageBgImg>
            </BookListItem>
        </BookList>

        <BookCollectionDownloadModal
            v-if="collectionToDownload && previewImages && !showPreview"
            :collection="collectionToDownload"
            :preview-images="previewImages"
            @close="collectionToDownload = null"
            @preview="showPreview = true"
        />

        <PreviewImagesModal
            v-if="showPreview && previewImages"
            :images="previewImages"
            @close="onPreviewImagesModalClose"
        />
    </div>
</template>

<script setup lang="ts">
import type { BookCollection } from '~/utils/dto/BookCollection'

const { collections } = defineProps<{ collections: BookCollection[] }>()

const collectionToDownload = ref<BookCollection | null>(null)

const showPreview = ref(false)

const previewImages = computed(() => {
    if (!collectionToDownload.value) return null

    return collectionToDownload.value.books
        .map((book) => book.preview_images)
        .flat()
})

function onPreviewImagesModalClose() {
    setTimeout(() => (showPreview.value = false), 250)
}
</script>

<style scoped></style>
