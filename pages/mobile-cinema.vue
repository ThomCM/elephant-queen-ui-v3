<template>
    <div class="py-6 xl:py-12">
        <div class="text-center mb-12">
            <h1 class="mb-6">Mobile Cinema</h1>

            <p :class="['mb-6 text-gray-900']">
                Taking 'The Elephant Queen' to the children & people of Kenya
            </p>
        </div>

        <div id="route" class="-content-mx mb-6 xl:mb-12">
            <iframe
                src="https://www.gaiagps.com/public/yGsBmGQYK4STlgz8ox7oZN8Y?embed=True"
                style="
                    border: none;
                    overflow-y: hidden;
                    background-color: white;
                    height: 420px;
                    width: 100%;
                "
                scrolling="no"
                :seamless="true"
            ></iframe>
        </div>

        <MobileCinemaPageVideoGallery
            :class="[
                '-content-mx content-px border-b border-gray mb-6 pb-6 xl:pb-12 xl:mb-12',
            ]"
        />

        <MobileCinemaPagePhotoGallery
            :class="[
                '-content-mx content-px border-b border-gray mb-6 pb-6 xl:pb-12 xl:mb-12',
            ]"
        />

        <MobileCinemaPagePress
            :class="[
                '-content-mx content-px border-b border-gray mb-6 pb-6 xl:pb-12 xl:mb-12',
            ]"
        />

        <MobileCinemaPageOutreachTeam
            :class="[
                '-content-mx content-px border-b border-gray mb-6 pb-6 xl:pb-12 xl:mb-12',
            ]"
        />

        <MobileCinemaPagePartners />
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'The Elephant Queen: Mobile Cinema',
    meta: [
        {
            name: 'description',
            content:
                "Taking 'The Elephant Queen' to the children & people of Kenya",
        },
    ],
})
</script>
