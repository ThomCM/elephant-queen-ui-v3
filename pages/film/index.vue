<template>
    <div>
        <FilmPageHero />

        <FilmPageFromTheDirectors
            :class="['-content-mx border-b border-gray mb-6 xl:mb-12']"
        />

        <FilmPageJustTheStart
            :class="[
                '-content-mx content-px pb-6 border-b border-gray mb-6 xl:pb-12 xl:mb-12',
            ]"
        />

        <FilmPageReviewsAndPress
            :class="[
                '-content-mx content-px border-b border-gray mb-6 pb-6 xl:pb-12 xl:mb-12',
            ]"
        />

        <div
            :class="[
                '-content-mx content-px border-b border-gray mb-6 pb-6 xl:pb-12 xl:mb-12',
            ]"
        >
            <DoStorageImg
                class="mx-auto"
                :src="`film_page/team_2_${device}.jpg`"
                alt="The Team"
            />
        </div>

        <FilmPageCredits class="pb-6 xl:pb-12" />
    </div>
</template>

<script setup lang="ts">
const device = useDevice()
</script>

<style></style>
