<template>
    <div id="help">
        <FilmPageHeading2> How Can I Get Involved and Help? </FilmPageHeading2>

        <ul :class="['grid grid-cols-1 gap-y-3 list-inside list-decimal']">
            <li>
                Follow the journey of the Education Outreach team as they travel
                across Kenya, taking the Elephant Queen to schools and
                communities.
            </li>

            <li>
                Bring your family and friends and come and join us at a Mobile
                Cinema Screening of ‘The Elephant Queen’.
            </li>

            <li>
                Spread the word! Talk to your friends and family about the
                importance of Elephants and other wildlife and encourage them to
                watch the film and explore the resources available here on the
                website. Download the resources available and read and learn
                more about all the other characters in the film.
            </li>
        </ul>

        <button class="text-link mt-3" type="button" @click="showModal = true">
            Read More >
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <div id="how-to-get-involved-modal-content">
                <h2>How to get Involved</h2>

                <ul
                    :class="[
                        'grid grid-cols-1 gap-y-6 list-decimal list-inside',
                    ]"
                >
                    <li>
                        <a href="https://earthranger.com/" target="_blank">
                            <strong
                                >Follow the journey of the Education Outreach
                                team</strong
                            >
                            as they travel across Kenya, taking the Elephant
                            Queen to schools and communities.
                        </a>
                    </li>

                    <li>
                        <strong
                            >Bring your family and friends and come and join us
                            at a Mobile Cinema Screening</strong
                        >
                        of ‘The Elephant Queen’
                    </li>

                    <li>
                        <NuxtLink to="/education-resources"
                            ><strong>Spread the word!</strong> Talk to your
                            friends and family about the importance of Elephants
                            and other wildlife and encourage them to watch the
                            film and explore the resources available here on the
                            website. Download the resources available and read
                            and learn more about all the other characters in the
                            film</NuxtLink
                        >
                    </li>

                    <li>
                        <strong>Become a Wildlife Warrior</strong> by either
                        sending an email to
                        <a href="mailto:jo@wildlifedirect.org" class="text-link"
                            >jo@wildlifedirect.org</a
                        >
                        or signing up at
                        <a
                            href="https://wildlifedirect.org/education-and-outreach-2/"
                            target="_blank"
                            class="text-link"
                            >https://wildlifedirect.org/education-and-outreach-2/</a
                        >
                    </li>

                    <li>
                        <div class="inline mb-3">
                            <strong
                                >Start a wildlife/conservation club in your
                                school.</strong
                            >Get a group of your friends to join you then ask
                            your head teacher to assign a teacher who can serve
                            as your club patron. Choose one day a week when your
                            club can meet to discuss conservation issues
                            affecting your school environment or the community
                            where you live. The solutions to the problems in
                            your school and community should be things that you
                            and your friends can do to solve or stop the
                            problem. You can contact WildlifeDirect Education
                            and Outreach Team at
                            <a
                                href="mailto:jo@wildlifedirect.org"
                                class="text-link"
                                >jo@wildlifedirect.org</a
                            >
                            to get help to register your club.
                            <a
                                href="https://wildlifedirect.org"
                                target="_blank"
                                class="text-link"
                                >https://wildlifedirect.org</a
                            >
                        </div>

                        <div class="mb-3">
                            Some activities that you can do in your community
                            can include:
                        </div>

                        <ul class="list-disc list-inside">
                            <li>
                                Community clean-ups to remove plastic waste;
                                campaign against the use of single use plastic.
                                The plastic collected can be sent to (<a
                                    href="https://gjenge.co.ke/"
                                    target="_blank"
                                    class="text-link"
                                    >https://gjenge.co.ke/</a
                                >;
                                <a
                                    href="https://plastikirafiki.com/"
                                    target="_blank"
                                    class="text-link"
                                    >https://plastikirafiki.com/</a
                                >).
                                <strong
                                    >Please do not burn any plastic. It is
                                    dangerous to the environment.</strong
                                >
                            </li>

                            <li>
                                Recycling waste (e.g. making briquettes from
                                waste paper to reduce the use of charcoal for
                                firewood)
                            </li>

                            <li>
                                Beach clean-up projects where you can collect
                                rubbish collected along the beach. You can
                                contact
                                <a
                                    href="https://www.watamuassociation.com/"
                                    target="_blank"
                                    class="text-link"
                                    >https://www.watamuassociation.com/</a
                                >
                                to help you dispose of marine waste in the best
                                way.
                            </li>

                            <li>
                                Grow indigenous trees to increase our forest
                                cover. Contact the Kenya Forest service in your
                                area for more details.
                            </li>

                            <li>
                                Start a pollinator garden by growing flowers in
                                your school that can attract bees and
                                butterflies.
                            </li>

                            <li>
                                Write songs, stories or film reviews of the
                                documentaries that you have watched. Share them
                                and we will share them too
                                <a
                                    href="mailto:jo@wildlifedirect.org"
                                    class="text-link"
                                    >jo@wildlifedirect.org</a
                                >.
                            </li>

                            <li>
                                If you are in university or have finished
                                school, you can volunteer in schools and
                                organizations that have conservation programs.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped>
#how-to-get-involved-modal-content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: theme('spacing.6');
}
</style>
