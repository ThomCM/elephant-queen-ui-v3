<template>
    <div>
        <Header />

        <div id="header-spacer" :style="{ height: `${headerHeight}px` }"></div>

        <main
            :style="{ minHeight: mainMinHeight }"
            class="px-6 xl:px-12 3xl:mx-auto"
        >
            <NuxtPage />
        </main>

        <Footer />

        <SocialMediaLinksFixed />
    </div>
</template>

<script setup lang="ts">
const headerHeight = useHeaderHeight()
const mainMinHeight = useMainMinHeight()
</script>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

@media (min-width: theme('screens.3xl')) {
    main {
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
