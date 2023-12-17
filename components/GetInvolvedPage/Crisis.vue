<template>
    <div id="crisis">
        <FilmPageHeading2>The Elephant Crisis</FilmPageHeading2>

        <p>
            The number of elephants in Africa has plummeted in little over a
            century from approximately 10 million to less than half a million
            today - a decrease of 95%. Elephants continue to be illegally killed
            (poached) for their tusks - modified teeth - made of ivory. In the
            past ivory was fashioned into ornaments and exported to be made into
            piano keys, brush handles, billiard balls, combs, name seals
            (hankos) and also used as inlay and for intricate carvings. Today,
            the legal trade in ivory has been shut down, but there is still an
            illegal trade run by criminals.
        </p>

        <button class="text-link mt-3" type="button" @click="showModal = true">
            Read More >
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <div id="get-involved-crisis-modal-content">
                <h2>The Elephant Crisis</h2>

                <p>
                    The number of elephants in Africa has plummeted in little
                    over a century from approximately 10 million to less than
                    half a million today - a decrease of 95%. Elephants continue
                    to be illegally killed (poached) for their tusks - modified
                    teeth - made of ivory. In the past ivory was fashioned into
                    ornaments and exported to be made into piano keys, brush
                    handles, billiard balls, combs, name seals (hankos) and also
                    used as inlay and for intricate carvings. Today, the legal
                    trade in ivory has been shut down, but there is still an
                    illegal trade run by criminals.
                </p>

                <p>
                    China, previously the world's largest importer of ivory,
                    closed down its remaining state-owned ivory carving
                    factories in 2017. This sent a strong message to the
                    industry and to those who had collected ivory as an
                    investment (betting on the elephants' eventual extinction)
                    and over several months the price of raw ivory halved from
                    $2000 / kg to $1000. The illegal trade continues to flourish
                    however, especially in the Far East - in Laos, Thailand and
                    Vietnam. Approximately 20-30,000 African elephants are
                    poached each year - an off-take that the population cannot
                    sustain; a rate of slaughter faster than their birth rate
                    can support. If left unchecked, it will lead to the
                    elephants' extinction. Conservation efforts focus on three
                    areas: protecting elephant populations to stop the killing;
                    stopping the trafficking of ivory and reducing demand.
                </p>

                <p>
                    Male elephants have the largest tusks, and poachers target
                    them first. The iconic giant Tsavo tusker Satao, who
                    features in the film, had the largest tusks in the world
                    when he was killed in May 2014. His death caused an
                    international outcry as he was the 'poster-boy' of giant
                    tuskers - one of the world's last giant tuskers. Today only
                    a handful of giant tuskers (elephants with tusks weighing
                    over 100 lbs / 45kg ) remain. Estimates vary, but numbers
                    are likely as low as 25-30, of which around 12 live in Tsavo
                    National Park.
                </p>

                <p>
                    After bulls, the largest tusks are found on mature cows and
                    it is the oldest of these (like Athena, the 50yr old
                    Elephant Queen) who become matriarchs. Athena had the
                    largest tusks of any of Tsavo's matriarchs which would have
                    marked her out as a target for poachers. Killing matriarchs
                    throws their families into turmoil, resulting in split,
                    dysfunctional groups, led by younger less-experienced cows
                    that can never match the stability and leadership provided
                    by the more experienced matriarchs.
                </p>

                <p>
                    Most recently, elephant poaching in Kenya was at it's worst
                    between 2011-14. Since then it has improved - protection and
                    anti-poaching measures led by Kenya Wildlife Service and
                    supported by conservation NGOs have been effective.
                </p>

                <p>
                    Today, it is not poaching that is the biggest problem, but
                    human wildlife conflict and loss of habitat. As more land
                    becomes farmed, wilderness areas shrink and elephants are
                    either fenced out of their former rangelands or lose their
                    traditional migration routes. In some areas, crops are grown
                    right up to the boundaries of protected areas and when
                    elephants turn to eating crops, they come into conflict with
                    farmers. A herd of elephants can destroy a small farmer’s
                    maize crop in a single night. There are ways to mitigate the
                    conflict - beehive fences, the establishment of elephant
                    corridors, and planting crops like chillies and sunflowers
                    that aren’t attractive to elephants are all important. As
                    elephants lose habitat to an expanding human population that
                    requires more and more land to farm, it will be issue that
                    needs addressing for decades to come. It is why The Elephant
                    Queen Outreach and Education program, working together with
                    Save the Elephants and Bestseller® Foundation is making the
                    area of human-elephant conflict a priority. From late 2021 a
                    mobile cinema will take The Elephant Queen, with Kiswahili
                    and Maa translations into schools and communities next to
                    protected areas across Kenya. A Kenyan team will tour with
                    the film for 8 months to put on plays, initiate
                    conversations, convene workshops and hold classes. The aim
                    is to foster an understanding of elephants that will play a
                    part in their continued coexistence with humans.
                </p>

                <p>
                    In Kenya, elephant populations have stabilised, but across
                    Africa elephant numbers are still in serious decline. The
                    Selous game reserve, a huge wilderness area in Tanzania,
                    until recently had an elephant population of over 100,000
                    and was regarded as a stronghold for the species - in the
                    space of two decades this has been reduced by 90%, due to
                    poaching. Forest elephants that inhabit the rainforests of
                    Central and West Africa are thought to have declined by 60%
                    in little over a decade. Such catastrophic declines have
                    severe impacts on ecosystems as elephants are
                    keystone-species - they disperse the seeds of trees and
                    their loss will imperil Africa's rainforests. They create
                    paths and waterholes for other animals and are ecosystem
                    engineers whose loss impacts the entire ecosystem.
                </p>

                <p>
                    Across Africa, poaching is the threat to elephants that
                    needs addressing immediately. In the long term, the major
                    threats to elephants are habitat loss and human-wildlife
                    conflict. Elephants are large free-ranging animals,
                    surprisingly similar to us, that live in family groups led
                    by wise and experienced matriarchs. It is up to every one of
                    us to decide whether we want these remarkable, sentient
                    animals to continue to share the planet with us - the choice
                    is ours.
                </p>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped>
#get-involved-crisis-modal-content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: theme('spacing.6');
}
</style>
