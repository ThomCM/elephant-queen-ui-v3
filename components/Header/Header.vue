<template>
    <header
        :class="[
            'px-6 fixed z-30 w-full xl:px-0 xl:flex',
            touchMenuVisible
                ? 'flex flex-col bg-black fixed inset-0 z-50'
                : 'border-b border-gray bg-white',
        ]"
    >
        <div
            :class="[
                'flex items-center justify-between h-16 flex-shrink-0 xl:h-20',
            ]"
            @mouseenter="onMouseenter"
            @mouseleave="mouseover = false"
        >
            <NuxtLink
                to="/"
                :class="[
                    'brand-link h-full flex items-center xl:w-full xl:px-6 2xl:px-12',
                ]"
            >
                <BrandLogo
                    class="h-11 xl:h-9 2xl:h-11 3xl:h-12"
                    :color="touchMenuVisible || mouseover ? 'white' : 'black'"
                />
            </NuxtLink>

            <button
                v-if="viewportWidth < 1280"
                class="block"
                @click="toggleTouchMenu"
            >
                <XMarkIcon v-if="touchMenuVisible" class="h-5 w-5 text-white" />

                <Bars3Icon v-else class="h-5 w-5" />
            </button>
        </div>

        <HeaderHoverMenu v-if="viewportWidth >= 1280" />

        <HeaderTouchMenu v-else-if="touchMenuVisible" />
    </header>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const mouseover = ref(false)

const touchMenuVisible = ref(false)
watch(touchMenuVisible, () => {
    document.body.style.overflowY = touchMenuVisible.value ? 'hidden' : 'auto'

    if (!touchMenuVisible.value) mouseover.value = false
})

const route = useRoute()
watch(route, () => {
    mouseover.value = false
    touchMenuVisible.value = false
})

const viewportWidth = useViewportWidth()
watch(viewportWidth, () => {
    if (viewportWidth.value >= 1280) touchMenuVisible.value = false
})

function onMouseenter() {
    if (viewportWidth.value >= 1280) mouseover.value = true
}

function toggleTouchMenu() {
    touchMenuVisible.value = !touchMenuVisible.value
}
</script>

<style scoped>
@media (min-width: theme('screens.xl')) {
    .brand-link:hover {
        background-color: black;
    }
}

@media (min-width: theme('screens.3xl')) {
    header {
        max-width: 1920px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
