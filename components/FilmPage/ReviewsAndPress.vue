<template>
    <div id="reviews-and-press">
        <h2 class="mb-6 xl:mb-12">Reviews & Press</h2>

        <ul class="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <li v-for="(review, i) in reviews" :key="`review-${i}`">
                <a :href="review.url" target="_blank">
                    <div class="font-bold xl:inline">
                        {{ review.publication }}
                    </div>

                    <div class="xl:inline">- {{ review.author }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { isReviewList } from '~/utils/dto/Review'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/reviews`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const reviews = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isReviewList(data.value.data)
        ? data.value.data
        : null
})
</script>

<style></style>
