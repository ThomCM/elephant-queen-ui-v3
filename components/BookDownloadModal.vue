<template>
    <Modal @close="$emit('close')">
        <div class="text-center">
            <div class="mb-6">
                <h2 class="mb-3">Download</h2>

                <p :class="['mb-3 text-gray-900']">
                    Select a language and whether you want to download the
                    single book or series.
                </p>

                <button
                    v-if="
                        Array.isArray(previewImages) && previewImages.length > 0
                    "
                    class="text-link"
                    type="button"
                    @click="$emit('preview')"
                >
                    See Preview >
                </button>
            </div>

            <ul
                :class="[
                    'mb-6 md:w-64 md:mx-auto',
                    supportedLanguages.length > 1
                        ? 'grid gap-3 grid-cols-2'
                        : 'flex justify-center items-center',
                ]"
            >
                <li v-for="language in supportedLanguages" :key="`${language}`">
                    <Radio v-model="selectedLanguage" :value="language">
                        {{ language }}
                    </Radio>
                </li>
            </ul>

            <div class="mb-6">
                <Checkbox v-model="disclaimerChecked">
                    *All rights are reserved for Wild Inspiration Ltd and/or its
                    affiliated companies. Any use or download of materials from
                    this website may be made for non-commercial educational
                    purposes only. I will not use the materials for any other
                    purposes.
                </Checkbox>
            </div>

            <div>
                <div v-if="bookDownload && bookDownloadUrl">
                    <a
                        :class="[{ disabled: !disclaimerChecked }]"
                        :href="bookDownloadUrl"
                        target="_blank"
                    >
                        <Button class="w-full">
                            <div>Download Book*</div>
                            <div class="text-gray-900 text-sm">
                                (1 PDF ~25MB)
                            </div>
                        </Button>
                    </a>
                </div>

                <div
                    v-if="collectionDownload && collectionDownloadUrl"
                    class="mt-3"
                >
                    <a
                        :class="[{ disabled: !disclaimerChecked }]"
                        :href="collectionDownloadUrl"
                        target="_blank"
                    >
                        <Button class="w-full">
                            <div>Download Series*</div>
                            <div class="text-gray-900 text-sm">
                                (4 PDF ~100MB)
                            </div>
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import type { Book } from '~/utils/dto/Book'
import type { BookCollection } from '~/utils/dto/BookCollection'
import type { BookPreviewImage } from '~/utils/dto/BookPreviewImage'

const props = defineProps<{
    book: Book
    collection: BookCollection
    previewImages: BookPreviewImage[]
}>()

const bookDownloadUrl = ref<string | null>(null)
const collectionDownloadUrl = ref<string | null>(null)
const disclaimerChecked = ref(false)
const selectedLanguage = ref('English')

const bookDownload = computed(() =>
    props.book.downloads.find(
        (download) => download.language === selectedLanguage.value
    )
)

const bookSupportedLanguages = computed(() =>
    props.book.downloads.map((download) => download.language).filter((n) => n)
)

const collectionDownload = computed(() =>
    props.collection.downloads.find(
        (download) => download.language === selectedLanguage.value
    )
)

const collectionSupportedLanguages = computed(() =>
    props.collection.downloads
        .map((download) => download.language)
        .filter((n) => n)
)

const supportedLanguages = computed(() =>
    [...bookSupportedLanguages.value].filter((language) =>
        collectionSupportedLanguages.value.includes(language)
    )
)

watch(selectedLanguage, () => {
    getDownloadUrl('book')
    getDownloadUrl('collection')
})

watch(supportedLanguages, (newValue, _oldValue) => {
    if (newValue.length === 1) {
        selectedLanguage.value = newValue[0]
    }
})

onMounted(() => {
    if (supportedLanguages.value.length === 1) {
        selectedLanguage.value = supportedLanguages.value[0]
    }

    getDownloadUrl('book')
    getDownloadUrl('collection')
})

function onFail() {
    alert(
        'Sorry, there was an error getting the download link. Please refresh the page to retry..'
    )
}

async function getDownloadUrl(type: string) {
    let downloadId = null

    if (type === 'book') {
        bookDownloadUrl.value = null
        downloadId = bookDownload.value?.id
    } else {
        collectionDownloadUrl.value = null
        downloadId = collectionDownload.value?.id
    }

    if (!downloadId) {
        onFail()
        return
    }

    const data = await $fetch(`/downloads/${downloadId}`).catch(onFail)

    if (typeof data === 'string') {
        if (type === 'book') {
            bookDownloadUrl.value = data
        } else {
            collectionDownloadUrl.value = data
        }
    } else {
        onFail()
    }
}
</script>

<style scoped>
a.disabled {
    pointer-events: none;
    cursor: default;
}
</style>
