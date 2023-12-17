<template>
    <footer :class="['content-px border-t border-gray py-12']">
        <FooterNav class="mb-12" />

        <div class="xl:hidden">
            <div
                :class="[
                    'mb-6 md:flex md:items-center md:flex-row-reverse md:justify-between',
                ]"
            >
                <FooterBestSellerFoundation />
            </div>

            <FooterCopyright />
        </div>

        <div class="hidden xl:flex xl:items-center xl:justify-between">
            <NuxtLink to="/">
                <BrandLogo class="h-11" />
            </NuxtLink>

            <FooterBestSellerFoundation />

            <FooterCopyright />
        </div>
    </footer>
</template>

<style scoped>
@media (min-width: theme('screens.3xl')) {
    footer {
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
