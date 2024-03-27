<template>
    <Modal @close="$emit('close')">
        <div class="text-center">
            <div class="mb-6">
                <h2 class="mb-3">Download</h2>

                <p :class="['mb-3 text-gray-900']">
                    Select a language and download a series of 4 books.
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

            <div v-if="download && downloadUrl">
                <a
                    :class="[{ disabled: !disclaimerChecked }]"
                    :href="downloadUrl"
                    target="_blank"
                >
                    <Button
                        class="w-full"
                        :disabled="!disclaimerChecked"
                        native-type="submit"
                    >
                        <div>Download Series*</div>
                        <div class="text-gray-900 text-sm">(4 PDF ~100MB)</div>
                    </Button>
                </a>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import type { BookCollection } from '~/utils/dto/BookCollection'
import type { BookPreviewImage } from '~/utils/dto/BookPreviewImage'

const { collection, previewImages } = defineProps<{
    collection: BookCollection
    previewImages: BookPreviewImage[]
}>()

const disclaimerChecked = ref(false)
const downloadUrl = ref<string | null>(null)
const selectedLanguage = ref('English')

const downloads = computed(() => {
    return collection.downloads
})

const download = computed(() => {
    return downloads.value.find(
        (download) => download.language === selectedLanguage.value
    )
})

const supportedLanguages = computed(() => {
    return downloads.value.map((download) => download.language).filter((n) => n)
})

watch(supportedLanguages, () => {
    if (supportedLanguages.value.length === 1) {
        selectedLanguage.value = supportedLanguages.value[0]
    }
})

watch([disclaimerChecked, selectedLanguage], () => {
    getDownloadUrl()
})

const runtimeConfig = useRuntimeConfig()

async function getDownloadUrl() {
    downloadUrl.value = null

    if (!disclaimerChecked.value) return

    if (!download.value?.id) {
        onFail()
        return
    }

    const data = await $fetch(
        `${runtimeConfig.public.apiUrl}/downloads/${download.value.id}`
    ).catch(onFail)

    if (typeof data === 'string') {
        downloadUrl.value = data
    } else {
        onFail()
    }
}

function onFail() {
    alert(
        'Sorry, there was an error getting the download link. Please refresh the page to retry.'
    )
}
</script>

<style scoped>
a.disabled {
    pointer-events: none;
    cursor: default;
}
</style>
