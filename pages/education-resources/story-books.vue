<template>
    <div class="text-center py-6 xl:py-12">
        <div class="mb-12">
            <h1 class="mb-6">Story Books</h1>

            <p :class="['mb-6 text-gray-900']">
                Click to download Story Books in English or Kiswahili
            </p>

            <div class="md:flex md:items-center md:justify-center">
                <div class="mb-3 md:mb-0 md:mr-3">
                    <NuxtLink
                        :to="`/education-resources/story-books?reading_level=${encodeURIComponent(
                            'Young Reader'
                        )}`"
                    >
                        <Button
                            :color="
                                readingLevel === 'Young Reader'
                                    ? 'blue'
                                    : 'black'
                            "
                            :disabled="readingLevel === 'Young Reader'"
                        >
                            Young Reader
                        </Button>
                    </NuxtLink>
                </div>

                <div>
                    <NuxtLink
                        :to="`/education-resources/story-books?reading_level=${encodeURIComponent(
                            'Confident Reader'
                        )}`"
                    >
                        <Button
                            :color="
                                readingLevel === 'Confident Reader'
                                    ? 'blue'
                                    : 'black'
                            "
                            :disabled="readingLevel === 'Confident Reader'"
                        >
                            Confident Reader
                        </Button>
                    </NuxtLink>
                </div>
            </div>
        </div>

        <ul v-if="collections" :class="['grid grid-cols-1 gap-y-12']">
            <li
                v-for="collection in collections"
                :key="`collection-${collection.slug}`"
            >
                <BookCollection :collection="collection" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import type { BookCollection } from '~/utils/dto/BookCollection'

const route = useRoute()

const collections = ref<BookCollection[] | null>(null)

const readingLevel = ref<string>('Young Reader')

async function fetchBookCollections() {
    readingLevel.value =
        typeof route.query.reading_level === 'string'
            ? route.query.reading_level
            : 'Young Reader'

    const { data, pending, error, refresh } = await useApiFetch(
        'book-collections',
        {
            reading_level: encodeURIComponent(readingLevel.value),
            type: encodeURIComponent('Story Book'),
        }
    )

    collections.value = data
}

watch(route, fetchBookCollections, { immediate: true })
</script>

<style></style>
