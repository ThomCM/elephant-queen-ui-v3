<template>
    <div id="latest-news">
        <FilmPageHeading2> Latest News </FilmPageHeading2>

        <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod.Lorem ipsum dolor sit
            amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod.Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod.Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod.Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit, sed diam nonummy nibh euismod.Lorem ipsum dolor sit amet,
            consectetuer adipiscing elit, sed diam nonummy nibh euismod.
        </p>

        <button class="text-link mt-3" type="button" @click="showModal = true">
            Read More >
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <div id="latest-news-modal-content">
                <h2>Latest News</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod.Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod.Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod.Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod.Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod.Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit, sed diam nonummy nibh euismod.Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod.
                </p>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped>
#latest-news-modal-content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: theme('spacing.6');
}
</style>
