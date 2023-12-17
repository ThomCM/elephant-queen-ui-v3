<template>
    <div id="press">
        <h2 class="mb-6 xl:mb-12">Press</h2>

        <ul
            v-if="
                !pending &&
                !error &&
                Array.isArray(pressItems) &&
                pressItems.length > 0
            "
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
const {
    data: pressItems,
    pending,
    error,
    refresh,
} = await useApiFetch('press-items')
</script>

<style></style>
