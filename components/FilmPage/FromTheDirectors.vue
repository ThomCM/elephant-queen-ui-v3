<template>
    <div
        id="from-the-directors"
        :class="[
            'py-6 xl:flex xl:flex-row-reverse xl:items-center xl:py-12 xl:px-12',
        ]"
    >
        <div
            :class="[
                'border-b border-gray px-6 pb-6 mb-6 xl:border-b-0 xl:pb-0 xl:px-0 xl:mb-0 xl:flex-shrink-0 xl:w-1/2 xl:pl-12',
            ]"
        >
            <DoStorageImg
                class="w-full mb-3"
                :src="`film_page/team_1_${device}.jpg`"
                alt="The Field Team"
            />

            <small class="text-center">
                <span class="font-bold"
                    >The Field Team from left to right:</span
                >
                Harry Williams, Etienne Oliff, Pete Cayless, Mourice Oyier, Mark
                Deeble, Mbogo Kidelela, Victoria Stone, Norbert Rottcher, Musili
                Sakayo, Kerry Roberts.
            </small>
        </div>

        <div class="px-6 xl:px-0 xl:w-1/2 xl:pr-12">
            <FilmPageHeading2> From the Directors </FilmPageHeading2>

            <p>
                The Elephant Queen film is the result of 4 years filming in the
                greater Tsavo ecosystem, and 3 years in postproduction by a
                diverse, talented and committed team. We’ve always worked with a
                small team - several of us including Etienne Oliff and Norbert
                Rottcher have worked together for 25 years in Africa, making
                wildlife films for international distribution.
            </p>

            <button
                class="text-link mt-3"
                type="button"
                @click="showModal = true"
            >
                Read More >
            </button>
        </div>

        <Modal v-if="showModal" @close="showModal = false">
            <div id="from-the-directors-modal-content">
                <h2>From the Directors of The Elephant Queen.</h2>

                <p>
                    The Elephant Queen film is the result of 4 years filming in
                    the greater Tsavo ecosystem, and 3 years in postproduction
                    by a diverse, talented and committed team. We’ve always
                    worked with a small team - several of us including Etienne
                    Oliff and Norbert Rottcher have worked together for 25 years
                    in Africa, making wildlife films for international
                    distribution.
                </p>

                <p>
                    Elephants had always been tangential part to our lives in
                    the bush, but never characters in any of our films. Over the
                    years we had stored up memories of scenes, experiences and
                    interactions we'd seen, particularly of smaller animals with
                    elephants - but we’d never thought of telling a story about
                    them until we got caught up in a devastating drought in East
                    Africa in 2009. Seeing how the elephants reacted, as
                    families, in the face of such adversity made us realise just
                    how like humans they are - the planning, decision making,
                    leadership, empathy, grieving and sentience that they showed
                    were astonishing.
                </p>

                <p>
                    But elephants don't live in isolation - we had unique
                    experience of the relationships they had with much smaller
                    animals. We were excited about what the combination of an
                    elephant family story, together with the drama of the daily
                    struggles of the creatures that lived at elephant toenail
                    height, could bring to the big screen. The cast of the
                    elephants' tiny neighbours promised to give us scenes of
                    intimacy and humour compared to the elephants and their
                    adventures. After three decades of living in the bush, we
                    finally felt ready to make a film about elephants.
                </p>

                <p>
                    Our primary aim was to make a story-led film that would take
                    an audience into the mind of an elephant matriarch and, by
                    extension, deep into the elephants’ world. We wanted to show
                    the decisions she had to make and what it took in terms of
                    leadership, for her family to survive and flourish.
                </p>

                <p>
                    We didn't want to make a traditional information-driven
                    documentary, but tell an emotional story, based on what we
                    saw over the four year filming period, backed up by 25 years
                    of wildlife observation and experience. We wanted audiences
                    to fall in love with elephants - for the simple reason that
                    we need to love before we care, and only if we care are we
                    moved to act.
                </p>

                <p>
                    It is a critical time for elephants and they need our care
                    and support more now than ever. When it came to
                    story-telling style - our aim was for a film that would
                    combine elements of the
                    <strong>Lion King</strong> with <strong>Shrek</strong> and
                    <strong>March of the Penguins</strong>. Our objective was a
                    film that would appeal to everyone - a combination of
                    observational live action, combined with the type of humour
                    and visuals that are more commonly associated with
                    animation. If we had a narrative mantra, it would be 'show,
                    not tell' - to give the audience the satisfaction of having
                    their own experience.
                </p>

                <p>
                    Chiwetel Ejiofor was the perfect voice for the film with a
                    soft, story-telling delivery - at times empathetic, at other
                    times moving the story along. We didn't want a voice that
                    sat 'out front' or led the film, but a voice that bedded-in
                    and was soft and lilting. We looked for a voice that would
                    not trample on its subject, but coax it along - at times
                    standing back to let the elephants and others speak for
                    themselves, at others to be leaning in and warmly engaging,
                    and we found this in Chiwetel's voice.
                </p>

                <p>
                    The writing was an integral part of the process from the
                    start of filming. At times we knew the lines we wanted to
                    use before filming and they determined what we filmed, the
                    type of shot and sometimes its duration. Possibly the
                    biggest decision we had to make was on naming some of our
                    characters (not something we have done before).
                </p>

                <p>
                    In part, this happened because we tended to give them names
                    so as to distinguish one from another when discussing them.
                    When it came to the script, we considered whether it was too
                    anthropomorphic, but we felt that elephants share so many of
                    our human emotions and feelings that not to name them (even
                    scientists now do so) or show them as animals with emotions,
                    would have been to do them a huge disservice.
                </p>

                <p>
                    As for Stephen, well the name just stuck and we couldn't let
                    it go - we tried a more Swahili name but feedback from a
                    Kenyan test screening was hugely in favour of keeping
                    Stephen.
                </p>

                <p>
                    From the outset we knew that natural sound would be an
                    important part of the story-telling. The recording of these
                    sounds was led by sound recordist and consultant naturalist,
                    Norbert Rottcher and camera assistant Pete Cayless who,
                    during the four years we spent in the field dedicated
                    hundreds of hours to recording all the sounds we might need;
                    from the squeak of a baby elephant to a Tsavo thunderstorm.
                </p>

                <p>
                    After an early demonstration of Dolby Atmos® at Wounded
                    Buffalo Sound Studio we knew that the system would deliver
                    the immersive soundscape we planned for the big screen. It
                    gave us the ability to have up to 128 distinct tracks and
                    pan the sounds across the cinema in a way that we hadn't
                    been able to achieve before. So much of elephant
                    communication is by infrasound - that if you are close to
                    them you feel, but it also has a auditory component in our
                    hearing range that Tim Owens, the film's sound supervisor
                    brought to life in a way we wouldn't have thought possible -
                    the result is immersive.
                </p>

                <p>
                    We knew from composer Alex Heffes' previous scores for
                    <strong>The Last King of Scotland</strong>,
                    <strong>Queen of Katwe</strong> and
                    <strong>The First Grader</strong> that he was highly attuned
                    to African sensibilities and subjects and that he had the
                    ability to produce both epic melodies and work with the
                    smaller more intimate scenes that are so much a part of the
                    film. What we didn't know was how much he cared about
                    elephants, so it was the perfect fit. His music is at times
                    powerful and dramatic, at others haunting, evocative and
                    restrained but it has a coherence and apparent simplicity
                    that complements the film in a way we could only have dreamt
                    of at the outset. It can be difficult to read animal
                    feelings and intentions, and we wanted to avoid predictable
                    music for animals and sometimes play them 'against type'.
                    Alex's score perfectly demonstrates what can emerge when the
                    composer spends enough time immersed in the subject and
                    reads it right.
                </p>

                <p>
                    For visual style, the most important word was intimacy - we
                    wanted proximity so the audience would feel they were there
                    - whether at the home waterhole or travelling with Athena's
                    family. During the ‘pre-journey’ phase of the film the
                    camera is more static to suggest the concept and
                    tranquillity of 'home' as a place where it feels good to be
                    still and to dwell.
                </p>

                <p>
                    On the ‘journey’ we try to keep the camera on the move;
                    sometimes accompanying the family, at other moments
                    conjuring the feeling of travelling with the dust-storms or
                    the rolling desperation associated with the drought.
                </p>

                <p>
                    Trying to achieve proximity sometimes meant flying up
                    amongst thunder clouds in torrential rain in our light
                    planes, with one person operating the strut-mounted camera
                    with one hand and controlling the plane with the other,
                    while another person filmed out of an open cargo door.
                </p>

                <p>
                    At other times it meant spending months in a cramped steel
                    filming box below ground to film the action at dung-beetle
                    eye level, or weeks waist-deep in waterholes waiting for
                    metamorphosing bullfrogs.
                </p>

                <p>
                    Wherever we could, we shot the action from the viewpoint of
                    the two worlds - either that of the elephants or the tiny
                    creatures that live at elephant toenail height. Before the
                    project started we had tested shooting RAW and were early
                    adopters of the RED® camera system. We knew the film would
                    take years to shoot and wanted to future-proof the material
                    by shooting in 5/6K - the highest resolution available at
                    the time, which was perfect for 4K display. Cinematographer,
                    Mark Deeble was particularly keen to shoot RAW because of
                    the artistic latitude it would provide in post-production,
                    rather than having the 'look' baked in when filming.
                </p>

                <p>
                    So much of shooting wildlife under natural conditions is
                    about 'getting the shot' and building the sequence and he
                    felt this was where the emphasis should be, rather than be
                    concerned with the 'look' in the field. After weeks of
                    testing we shot the film using a variety of vintage lenses
                    which had a smoother character that matched the timeless
                    story we were telling, and were less clinical than their
                    modern digital equivalents.
                </p>

                <p>
                    In editing, the same principle applied. We wanted to make an
                    audience feel they were there, as if they'd experienced at
                    first hand what we'd filmed. It meant letting shots play out
                    as long as the action warranted it. It involved trying to
                    avoid fast cuts that might help a difficult junction in a
                    sequence, or add a pace that wasn't naturally there, but
                    would ultimately be less satisfying. Some shots, like the
                    dung-beetle fight scene run for almost a minute without an
                    edit. Over such a long period filming, it was essential that
                    editing should begin in the field so that we could start to
                    achieve the story-telling style we wanted, and make sure
                    that sequences were fully covered.
                </p>

                <p>
                    Director, Victoria Stone, with the support of Laura Smith,
                    Sarah Bright & Kerry Roberts, edited for the entire time we
                    were in the field and then Victoria worked alongside editor
                    David Dickie when back in the UK.
                </p>

                <p>
                    Editing and logging in tents had its challenges: scorpions
                    and venomous centipedes liked to live in the dark recesses
                    of the edit equipment cases; ants built their nests in
                    computers; thunderstorms flooded the edit tent and rodents
                    bit through electric cables and caused power outages on a
                    regular basis. Keeping the generator topped up, meant a walk
                    out into the bush in the dark with a can of petrol, where an
                    encounter with elephants was a probability and a lion or
                    leopard a distinct possibility.
                </p>

                <p>
                    We wanted a setting for the film that was different to
                    anything that had gone before and would be completely fresh
                    - Tsavo offered it. We knew Tsavo would be both a challenge
                    and a risk, but one we decided to take. Tsavo's elephants
                    are not as tame and habituated as those in Amboseli or
                    Samburu and consequently less photographed and less well
                    known, but Tsavo is home to most of the world's last
                    remaining giant tuskers. They are iconic elephants of which
                    only about 12 remain. They have enormous tusks - so large
                    that they almost reach the ground, and it was these
                    elephants that we wanted to celebrate. We wanted characters
                    that took us back to a timeless elephant Eden - in part for
                    narrative reasons, but also to show what we still have, and
                    what is so threatened.
                </p>

                <p>
                    The problem was that they had been heavily poached and
                    consequently were wary and secretive - some of the largest
                    bulls only emerged from deep cover at night to feed, and
                    some matriarchs were so defensive that they would charge
                    from hundreds of meters away. It took almost two years to
                    find our star matriarch and then months to win her trust,
                    and be able to get close enough to film her family. We could
                    never have imagined that one of our ‘stars’, the world’s
                    largest tusker, Satao, would be killed by poachers over the
                    period we filmed.
                </p>

                <p>
                    Tsavo offered us the cast of smaller animals we wanted to
                    film alongside the elephants - animals that were absent from
                    Amboseli and other elephant strongholds like Samburu. We
                    knew that filming them would be a challenge. Bullfrogs mate
                    for only a few minutes, normally at night, and only when the
                    rains have been very heavy - which might be years apart.
                    Finding them meant wading through pans inhabited by
                    crocodiles and driving thousands of kilometres through the
                    bush, stopping at every flooded pan and listening for their
                    calls. We saw them mating, and managed to film it, only once
                    in four years.
                </p>

                <p>
                    Finding their youngsters was slightly easier, for the
                    tadpoles formed shoals that were visible from the air if we
                    flew low and slow. We knew that the inclusion of the smaller
                    animals would give a sense of scale and bring a unique
                    dimension to the project, but it was essential that they had
                    to add to the narrative by interacting with the elephants in
                    some way, and it was achieving those sequences that took
                    time.
                </p>

                <p>
                    To achieve the movie took a dedicated field team - it always
                    does, except this time the team needed to be in the bush for
                    four years! Led by Etienne Oliff, the team grew and thrived
                    through the intensity of close-living under canvas and the
                    challenges that 4 years of filmmaking brought.
                </p>

                <p>
                    Musili Sakayo & Mourice Oyier with their small team, oversaw
                    the camp kitchen and the upkeep of a small fleet of 4x4
                    filming vehicles and bush-planes. Over the course of filming
                    we had a series of enthusiastic assistants and interns -
                    notably Harry Williams, Jacca Deeble, Elsa Kent and Edward
                    Dance. It was a happy crew and with assistant director
                    Etienne’s talent at team building, a special camaraderie
                    developed from which life-long friendships have evolved.
                </p>

                <p>
                    Thank you to everyone for inspiring the world to fall in
                    love with elephants !
                </p>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
const device = useDevice()
</script>

<style scoped>
#from-the-directors-modal-content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: theme('spacing.6');
}
</style>
