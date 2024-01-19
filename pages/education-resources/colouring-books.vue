<template>
    <div class="text-center py-6 xl:py-12">
        <div class="mb-12">
            <h1 class="mb-6">Colouring Books</h1>

            <p :class="['mb-6 text-gray-900']">
                Click to download Colouring Books in English or Kiswahili
            </p>

            <div class="md:flex md:items-center md:justify-center">
                <div class="mb-3 md:mb-0 md:mr-3">
                    <NuxtLink
                        :to="`/education-resources/colouring-books?reading_level=${encodeURIComponent(
                            'Young Reader'
                        )}`"
                    >
                        <Button
                            :color="
                                fetchOptions.query.reading_level ===
                                'Young Reader'
                                    ? 'blue'
                                    : 'black'
                            "
                            :disabled="
                                fetchOptions.query.reading_level ===
                                'Young Reader'
                            "
                        >
                            Young Reader
                        </Button>
                    </NuxtLink>
                </div>

                <div>
                    <NuxtLink
                        :to="`/education-resources/colouring-books?reading_level=${encodeURIComponent(
                            'Confident Reader'
                        )}`"
                    >
                        <Button
                            :color="
                                fetchOptions.query.reading_level ===
                                'Confident Reader'
                                    ? 'blue'
                                    : 'black'
                            "
                            :disabled="
                                fetchOptions.query.reading_level ===
                                'Confident Reader'
                            "
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
useHead({
    title: 'The Elephant Queen: Colouring Books',
    meta: [
        {
            name: 'description',
            content: 'Colouring Books',
        },
    ],
})

import { isBookCollectionList } from '~/utils/dto/BookCollection'

const route = useRoute()
const runtimeConfig = useRuntimeConfig()

const fetchOptions = ref({
    headers: {
        Accept: 'application/json',
    },
    query: {
        reading_level: 'Young Reader',
        type: 'Colouring Book',
    },
})

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/book-collections`,
    fetchOptions.value
)

const collections = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isBookCollectionList(data.value.data)
        ? data.value.data
        : null
})

watch(
    () => route.query,
    () => {
        const newReadingLevel =
            typeof route.query.reading_level === 'string'
                ? route.query.reading_level
                : 'Young Reader'

        if (fetchOptions.value.query.reading_level !== newReadingLevel) {
            fetchOptions.value.query.reading_level = newReadingLevel

            refresh()
        }
    },
    { deep: true, immediate: true }
)
</script>

<style></style>
