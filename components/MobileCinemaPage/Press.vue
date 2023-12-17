<template>
    <div id="press">
        <h2 class="mb-6 xl:mb-12">Press</h2>

        <ul
            v-if="pressItems"
            :class="['grid grid-cols-1 gap-6 xl:grid-cols-2']"
        >
            <li v-for="(pressItem, i) in pressItems" :key="`press-item-${i}`">
                <a :href="pressItem.url" target="_blank">
                    <div class="font-bold xl:inline">
                        {{ pressItem.title }}
                    </div>

                    <div class="xl:inline">
                        - {{ pressItem.publication_name }}
                    </div>
                </a>
            </li>
        </ul>

        <p v-else class="text-gray-900">Coming soon</p>
    </div>
</template>

<script setup lang="ts">
import { isPressItemList } from '~/utils/dto/PressItem'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/press-items`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const pressItems = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isPressItemList(data.value.data)
        ? data.value.data
        : null
})
</script>

<style></style>
