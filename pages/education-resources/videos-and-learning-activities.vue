<template>
    <div class="text-center py-6 xl:py-12">
        <div class="mb-6">
            <h2 class="mb-3">Videos & Learning Activities</h2>

            <p :class="['mb-3 text-gray-900']">
                Become an elephant expert! Explore a selection of elephant
                videos and learning activities. Ideal for all ages at home,
                school or in wildlife clubs. Are available in
                English,&nbsp;Kiswahili&nbsp;and&nbsp;Maa.
            </p>
        </div>

        <ul v-if="educationResources">
            <li
                v-for="(unit, i) in educationResources.learning_units"
                :key="`unit-${i}`"
            >
                <div
                    :class="[
                        '-content-mx content-px',
                        {
                            'border-b border-gray pb-12 mb-12':
                                i <
                                educationResources.learning_units.length - 1,
                        },
                    ]"
                >
                    <div class="flex items-center justify-center mb-6">
                        <div class="text-center">
                            <div
                                :class="[
                                    'bg-black rounded-full text-white px-2 mb-3',
                                ]"
                            >
                                UNIT {{ i + 1 }}
                            </div>

                            <button
                                class="text-link"
                                @click="unitToDownload = unit"
                            >
                                Download materials >
                            </button>
                        </div>
                    </div>

                    <div v-if="unit.video_collection" class="mb-6">
                        <h3>
                            {{ unit.video_collection.name }}
                        </h3>
                    </div>

                    <LearningUnitVideoList
                        v-if="
                            unit.video_collection &&
                            Array.isArray(unit.video_collection.videos) &&
                            unit.video_collection.videos.length > 0
                        "
                        :videos="unit.video_collection.videos"
                    />

                    <div
                        :class="[
                            'w-full mt-6 flex items-center justify-center',
                        ]"
                    >
                        <BgImg
                            :class="['unit-downloadable rounded-xl relative']"
                            :img="unit.image"
                        >
                            <TileDownloadButton
                                @click="unitToDownload = unit"
                            />
                        </BgImg>
                    </div>
                </div>
            </li>
        </ul>

        <UnitDownloadModal
            v-if="unitToDownload"
            :unit="unitToDownload"
            @close="unitToDownload = null"
        />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'The Elephant Queen: Videos & Learning Activities',
    meta: [
        {
            name: 'description',
            content: 'Videos & Learning Activities',
        },
    ],
})

import { isEducationResources } from '~/utils/dto/EducationResources'
import type { LearningUnit } from '~/utils/dto/LearningUnit'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.apiUrl}/education-resources`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const educationResources = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isEducationResources(data.value.data)
        ? data.value.data
        : null
})

const unitToDownload = ref<LearningUnit | null>(null)
</script>

<style scoped>
.unit-downloadable {
    width: 290px;
    height: 403px;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
}

@media (min-width: theme('screens.3xl')) {
    .unit-downloadable {
        width: 398px;
        height: 533px;
    }
}
</style>
