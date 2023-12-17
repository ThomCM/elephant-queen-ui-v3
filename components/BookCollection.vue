<template>
    <div>
        <div class="text-center mb-6">
            <h2>{{ collection.name }}</h2>
        </div>

        <BookList>
            <BookListItem
                v-for="book in collection.books"
                :key="`${book.slug}`"
            >
                <BgImg :img="book.image">
                    <TileDownloadButton @click="bookToDownload = book" />
                </BgImg>
            </BookListItem>
        </BookList>

        <BookDownloadModal
            v-if="bookToDownload && !showPreview"
            :book="bookToDownload"
            :collection="collection"
            :preview-images="bookToDownload.preview_images"
            @close="bookToDownload = null"
            @preview="showPreview = true"
        />

        <PreviewImagesModal
            v-if="showPreview && bookToDownload"
            :images="bookToDownload.preview_images"
            @close="showPreview = false"
        />
    </div>
</template>

<script setup lang="ts">
import type { Book } from '~/utils/dto/Book'
import type { BookCollection } from '~/utils/dto/BookCollection'

defineProps<{ collection: BookCollection }>()

const showPreview = ref(false)
const bookToDownload = ref<Book | null>(null)
</script>

<style></style>
