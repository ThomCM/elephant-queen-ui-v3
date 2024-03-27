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
const authorised = useAuthorised()
const runtimeConfig = useRuntimeConfig()

const locationData = ref<{
    ip_address: string
    location: string
    valid: boolean
    whitelisted_ip_address: boolean
} | null>(null)

const locationError = ref<any>(null)

onMounted(() => {
    if (process.client) {
        fetchLocationData()
    }
})

async function fetchLocationData() {
    try {
        locationData.value = await $fetch(
            `${runtimeConfig.public.apiUrl}/user-location`,
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        )
    } catch (error) {
        locationError.value = error
    }
}

watch(locationData, () => {
    authorised.value = locationData.value
        ? locationData.value.valid || locationData.value.whitelisted_ip_address
        : false
})
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
