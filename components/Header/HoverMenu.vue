<template>
    <ul :class="['flex-grow flex']">
        <li
            v-for="(link, i) in links"
            :key="`link${i}`"
            :class="['flex-grow border-l border-gray font-semibold']"
        >
            <NuxtLink
                :to="link.to"
                :class="[
                    'nuxt-link w-full h-full flex items-center justify-center border-b-8 border-t-8 xl:text-base 3xl:text-lg',
                ]"
            >
                {{ link.label }}
            </NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
const links = ref([
    { label: 'The Film', to: '/film' },
    { label: 'Mobile Cinema', to: '/mobile-cinema' },
    { label: 'Education Resources', to: '/education-resources' },
    { label: 'Get Involved', to: '/get-involved' },
    {
        label: 'Mentorship Series',
        to: '/education-resources/mentorship-series',
    },
    {
        label: 'Tales from the Bush',
        to: '/education-resources/tales-from-the-bush',
    },
])
</script>

<style scoped>
.nuxt-link:not(.nuxt-link-exact-active) {
    border: transparent;
}

.nuxt-link:not(.nuxt-link-exact-active):hover {
    color: white;
    background-color: black;
}

.nuxt-link.nuxt-link-exact-active {
    border-top-color: transparent;
    border-bottom-color: black;
}
</style>
