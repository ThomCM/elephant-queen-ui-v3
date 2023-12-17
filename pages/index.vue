<template>
    <HomepageCards>
        <HomepageCard background="the_film" bg-position="bg-center md:bg-left">
            <HomepageCardTitle first> The Film </HomepageCardTitle>

            <HomepageCardSubtitle>
                Watch The Elephant Queen in<br />
                English, Kiswahili or&nbsp;Maa.
            </HomepageCardSubtitle>

            <HomepageCardLink to="/film" />
        </HomepageCard>

        <HomepageCard
            background="mobile_cinema"
            bg-position="bg-right md:bg-right lg:bg-center xl:bg-right"
            class="relative"
        >
            <span
                :class="[
                    'px-8 py-2 leading-none bg-red rounded-full uppercase text-lg font-black absolute top-6 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:right-6 md:left-auto',
                ]"
            >
                Live Now
            </span>

            <HomepageCardTitle>
                Mobile<br class="hidden md:block" />
                Cinema
            </HomepageCardTitle>

            <HomepageCardSubtitle>
                Follow the adventure.<br />
                Come to a&nbsp;screening.
            </HomepageCardSubtitle>

            <HomepageCardLink to="/mobile-cinema" />
        </HomepageCard>

        <HomepageCard background="education_resources">
            <HomepageCardTitle>
                Education<br class="hidden xl:block" />
                Resources
            </HomepageCardTitle>

            <HomepageCardSubtitle>
                Books, theatre, videos<br />
                and more to&nbsp;explore.
            </HomepageCardSubtitle>

            <HomepageCardLink to="/education-resources" />
        </HomepageCard>

        <HomepageCard
            background="mentorship_interviews"
            bg-position="bg-top md:bg-right xl:bg-center"
        >
            <HomepageCardTitle>
                Mentorship<br class="hidden xl:block" />
                Series
            </HomepageCardTitle>

            <HomepageCardSubtitle>
                Be inspired by some of Kenya's<br />
                leading elephant&nbsp;experts
            </HomepageCardSubtitle>

            <HomepageCardLink to="/education-resources/mentorship-series" />
        </HomepageCard>

        <HomepageCard background="get_involved" bg-position="bg-top md:bg-left">
            <HomepageCardTitle> Get Involved </HomepageCardTitle>

            <HomepageCardSubtitle>
                You can make a difference!<br />
                Mimi na Wewe,&nbsp;pamoja!
            </HomepageCardSubtitle>

            <HomepageCardLink to="/get-involved" />
        </HomepageCard>

        <HomepageCard
            background="tales_from_the_bush"
            bg-position="bg-top md:bg-right"
        >
            <HomepageCardTitle>
                Tales from <br class="hidden md:block" />the&nbsp;Bush
            </HomepageCardTitle>

            <HomepageCardSubtitle>
                Listen to wildlife podcasts from<br class="hidden md:block" />
                the bush -<br class="md:hidden" />
                created during the<br class="hidden md:block" />
                making of the film.
            </HomepageCardSubtitle>

            <HomepageCardLink to="/education-resources/tales-from-the-bush" />
        </HomepageCard>
    </HomepageCards>
</template>

<script setup lang="ts">
useHead({
    title: 'The Elephant Queen',
    meta: [
        {
            name: 'description',
            content: 'Watch The Elephant Queen in English, Kiswahili or Maa.',
        },
    ],
})
</script>
