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
const { data: reviews, pending, error, refresh } = await useApiFetch('reviews')
</script>

<style></style>
