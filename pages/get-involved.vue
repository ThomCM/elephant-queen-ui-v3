<template>
    <div class="pt-6 xl:pt-12">
        <div
            :class="[
                '-content-mx content-px text-center mb-6 pb-6 border-b border-gray xl:pb-12 xl:mb-12',
            ]"
        >
            <h1>Get Involved</h1>
        </div>

        <GetInvolvedPageHow
            :class="[
                '-content-mx content-px mb-6 pb-6 border-b border-gray xl:pb-12 xl:mb-12',
            ]"
        />

        <GetInvolvedPageCrisis
            :class="[
                '-content-mx content-px mb-6 pb-6 border-b border-gray xl:pb-12 xl:mb-12',
            ]"
        />

        <GetInvolvedPageLearn
            :class="['-content-mx content-px pb-6 xl:pb-12']"
        />

        <GetInvolvedPageApple
            :class="[
                '-content-mx content-px py-6 xl:py-12 bg-black text-white',
            ]"
        />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'The Elephant Queen: Get Involved',
    meta: [
        {
            name: 'description',
            content:
                'Follow our journey, join us at a Mobile Cinema screening and spread the word.',
        },
    ],
})
</script>
