<template>
    <Modal @close="handleClose">
        <div class="text-center">
            <div class="mb-6">
                <h2 class="mb-3">Download</h2>

                <p :class="['text-gray-900']">Select a language.</p>
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
                    purposes. I and the organisation I represent will always
                    credit The Elephant Queen Outreach program in any publicity.
                </Checkbox>
            </div>

            <div v-if="download && downloadUrl">
                <a
                    :class="[{ disabled: !disclaimerChecked }]"
                    :href="downloadUrl"
                    target="_blank"
                >
                    <Button class="w-full">
                        <div>Download Unit</div>
                        <div class="text-gray-900 text-sm">(2 PDF ~1MB)</div>
                    </Button>
                </a>
            </div>
        </div>
    </Modal>
</template>

<script setup lang="ts">
import type { LearningUnit } from '~/utils/dto/LearningUnit'

const { unit } = defineProps<{ unit: LearningUnit }>()

const emit = defineEmits<{
    (event: 'close'): void
}>()

function handleClose() {
    emit('close')
}

const disclaimerChecked = ref(false)
const downloadUrl = ref<string | null>(null)
const selectedLanguage = ref('English')

const downloads = computed(() => {
    return unit.downloads
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
        `${runtimeConfig.public.productionApiUrl}/downloads/${download.value.id}`
    ).catch(onFail)

    if (typeof data === 'string') {
        downloadUrl.value = data
    } else {
        onFail()
    }
}

function onFail() {
    alert(
        'Sorry, there was an error getting the download link. Please refresh the page to retry..'
    )
}
</script>

<style scoped>
a.disabled {
    pointer-events: none;
    cursor: default;
}
</style>
