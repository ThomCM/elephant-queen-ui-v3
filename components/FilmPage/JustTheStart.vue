<template>
    <div id="just-the-start">
        <FilmPageHeading2> The Film is Just the Start </FilmPageHeading2>

        <p>
            From the outset, the team wanted the film to make a real difference
            for elephants in Kenya - to help conserve elephants and support and
            foster environmental education. Through their commitment and
            determination, that hope became reality when, with the support of
            Bestseller Foundation, they were given the opportunity to design and
            develop a dedicated Elephant Queen Outreach and Education Project
            (O&E) which aimed to use the film to inspire an appreciation for
            wildlife, conservation and the environment. This website
            www.elephant.co.ke serves as the home for a toolbox of Elephant
            Queen conservation education resources which were created in
            collaboration with the Kenyan Institute of Curriculum Development
            (KICD), the Youth Theatre of Kenya,
            <a
                href="https://www.kivukoni.co.ke/"
                target="_blank"
                class="text-link"
                >Kivukoni School</a
            >
            and StoryMoja.
        </p>

        <button class="text-link mt-3" type="button" @click="showModal = true">
            Read More >
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <div id="just-the-start-modal-content">
                <h2>The Elephant Queen Outreach Program</h2>

                <p>
                    From the outset, the film team wanted the film to make a
                    real difference for elephants in Kenya - to help conserve
                    elephants and support and foster environmental education.
                </p>

                <p>
                    Through their commitment and determination, that hope became
                    reality when, with the support of Bestseller Foundation,
                    they were given the opportunity to design and develop a
                    dedicated Elephant Queen Outreach and Education Project
                    (O&E) which aimed to use the film to inspire an appreciation
                    for wildlife, conservation and the environment.
                </p>

                <p>
                    This website <i>www.elephant.co.ke</i> serves as the home
                    for a toolbox of Elephant Queen conservation education
                    resources which were created in collaboration with the
                    Kenyan Institute of Curriculum Development (KICD), the Youth
                    Theatre of Kenya, Kivukoni School and StoryMoja.
                </p>

                <p>
                    The mission is to take the film across Kenya, with a focus
                    on schools and communities around national parks and
                    conservancies which are most affected by human-elephant
                    conflict. (HEC)
                </p>

                <p>
                    In partnership with Save the Elephants the film team have
                    recruited a dynamic Kenyan
                    <NuxtLink to="/mobile-cinema#team" class="text-link">
                        mobile cinema team</NuxtLink
                    >. Over 8 months from November 2021, in a 4x4 lorry with a
                    giant cinema screen, they will
                    <NuxtLink to="/mobile-cinema" class="text-link"
                        >travel across Kenya</NuxtLink
                    >
                    to show the film to over 150 schools and 60 communities and
                    engage them in conservation education related conversations.
                    All in collaboration with our partners from a huge range of
                    <NuxtLink
                        to="/get-involved#conservation-organisations"
                        class="text-link"
                        >conservation and civic organizations</NuxtLink
                    >
                    across the country.
                </p>

                <p>
                    The objective is simple – to use The Elephant Queen film to
                    inspire people to fall in love with elephants and encourage
                    an appreciation of Kenya’s unique wildlife and wilderness.
                    Everyone involved hopes the impact of the film and the
                    Outreach program endures and helps foster human-elephant
                    coexistence in the country in which it was created.
                </p>

                <p>
                    <NuxtLink to="/mobile-cinema" class="text-link"
                        >Join us all on this journey</NuxtLink
                    >
                </p>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped>
#just-the-start-modal-content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: theme('spacing.6');
}
</style>
