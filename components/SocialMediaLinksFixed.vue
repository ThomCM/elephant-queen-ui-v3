<template>
    <div
        :class="[
            'fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col',
        ]"
    >
        <a
            v-for="link in socialLinks"
            :key="`social-link-${link.site}`"
            :href="link.link"
            target="_blank"
            class="flex"
        >
            <DoStorageImg
                class="w-8 md:w-10"
                :src="`misc/social_icons/${link.site.toLowerCase()}.png`"
                :alt="link.handle || link.site"
            />

            <div
                :class="[
                    'flex items-center text-white h-8 px-3 md:h-10',
                    link.bgColor,
                ]"
            >
                {{ link.handle || link.site }}
            </div>
        </a>
    </div>
</template>

<script setup lang="ts">
const socialLinks = ref([
    {
        bgColor: 'bg-black',
        handle: '@theelephantqueenkenya',
        site: 'TikTok',
        link: 'https://www.tiktok.com/@theelephantqueenkenya',
    },
    {
        bgColor: 'bg-twitter',
        handle: '@TEQkenya',
        site: 'Twitter',
        link: 'https://twitter.com/@TEQkenya',
    },
    {
        bgColor: 'bg-facebook',
        handle: '@theelephantqueenmovie',
        site: 'Facebook',
        link: 'https://facebook.com/theelephantqueenmovie',
    },
    {
        bgColor: 'bg-instagram',
        handle: '@thelephantqueenkenya',
        site: 'Instagram',
        link: 'https://instagram.com/theelephantqueenkenya/',
    },
])
</script>

<style scoped>
a > div {
    display: hidden;
}

a:hover > div {
    display: flex;
}
</style>
