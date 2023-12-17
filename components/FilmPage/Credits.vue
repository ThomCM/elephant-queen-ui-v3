<template>
    <div id="credits" class="text-center">
        <h2 class="mb-6">Film Credits</h2>

        <ul :class="['text-center grid grid-cols-1 gap-y-6']">
            <li>
                Told by<br />
                Chiwetel Ejiofor
            </li>

            <li>
                Directed by<br />
                Mark Deeble & Victoria Stone
            </li>

            <li>
                Assistant Director<br />
                Etienne Oliff
            </li>

            <li>
                Written By<br />
                Mark Deeble
            </li>

            <li>
                Produced by<br />
                Victoria Stone
            </li>

            <li>
                Produced by<br />
                Lucinda Englehart
            </li>
        </ul>

        <button class="text-link mt-6" type="button" @click="showModal = true">
            Read More >
        </button>

        <Modal v-if="showModal" @close="showModal = false">
            <div id="film-credits-modal-content">
                <h2>Film Credits</h2>

                <ul :class="['text-center grid grid-cols-1 gap-y-6']">
                    <li>
                        Told by<br />
                        Chiwetel Ejiofor
                    </li>

                    <li>
                        Directed by<br />
                        Mark Deeble & Victoria Stone
                    </li>

                    <li>
                        Assistant Director<br />
                        Etienne Oliff
                    </li>

                    <li>
                        Written By<br />
                        Mark Deeble
                    </li>

                    <li>
                        Produced by<br />
                        Victoria Stone
                    </li>

                    <li>
                        Produced by<br />
                        Lucinda Englehart
                    </li>

                    <li>
                        Cinematography<br />
                        Mark Deeble
                    </li>

                    <li>
                        Music by<br />
                        Alex Heffes
                    </li>

                    <li>
                        Edited by<br />
                        David Dickie
                    </li>

                    <li>
                        Co-edited by<br />
                        Victoria Stone
                    </li>

                    <li>
                        Filmed in Kenya Tsavo East National Park & The Greater
                        Amboseli Tsavo Ecosystem
                    </li>

                    <li>
                        Executive Producers<br />
                        Alan Root, Sara & Nick Williams
                    </li>

                    <li>
                        Co-executive Producers<br />
                        Anders Holch Povlsen & Anne Storm Holch Povlsen, Sam
                        Pattullo, Tim Owens
                    </li>

                    <li>
                        Associate Producer<br />
                        Myles Connolly
                    </li>

                    <li>
                        Field Sound Recordists<br />
                        Norbert Rottcher, Peter Cayless
                    </li>

                    <li>
                        Contributing Field Naturalist<br />
                        Norbert Rottcher
                    </li>

                    <li>
                        Camera Assistant<br />
                        Peter Cayless
                    </li>

                    <li>
                        Field Assistant<br />
                        Harry Williams
                    </li>

                    <li>
                        Production Assistant<br />
                        Laura Smith
                    </li>

                    <li>
                        Field Production Assistant<br />
                        Kerry Roberts
                    </li>

                    <li>
                        Field Edit Assistant<br />
                        Sarah Bright
                    </li>

                    <li>
                        Additional Photography<br />
                        Etienne Oliff, Peter Cayless
                    </li>

                    <li>
                        Stills Photographer<br />
                        Mia Collis
                    </li>

                    <li>
                        Field Crew Musili Sakayo, Maurice Oyier, Mbogho
                        Kidelela, Jackson Chepkwony, Michael Ogutu, Roony
                        Onyango
                    </li>

                    <li>
                        Base Support Joshua Ochieng, Josphat Gona, Samuel
                        Mtengo, David Omondi, Silas Kenga, Mtawali Chumbi, Shani
                        Mohamed and Justus Ngowa
                    </li>

                    <li>Visual Post Production Onsight</li>

                    <li>
                        Colourist<br />
                        Andy Lee
                    </li>

                    <li>
                        Online Editor<br />
                        Maggie Maciejczek
                    </li>

                    <li>
                        VFX artist<br />
                        Tudor Colac
                    </li>

                    <li>
                        Post Producer<br />
                        Jeff Halsey
                    </li>

                    <li>
                        Head of Operations<br />
                        Rik Tester
                    </li>

                    <li>
                        Development Producer<br />
                        Laura Smith
                    </li>

                    <li>
                        Head of Development<br />
                        Tony Maher
                    </li>

                    <li>
                        Post Production Supervision<br />
                        Flat Dog Productions Ltd
                    </li>

                    <li>Narration recorded at Warner Bros. De Lane Lea</li>

                    <li>
                        Voice Over Recording<br />
                        Nick Roberts
                    </li>

                    <li>
                        Visual Effects<br />
                        Panton Creative Ltd<br />
                        Peerless Ltd
                    </li>

                    <li>
                        Audio Post Production<br />
                        Wounded Buffalo Sound Studio
                    </li>

                    <li>
                        Sound Supervisor and Editor<br />
                        Tim Owens
                    </li>

                    <li>
                        Sound Editor<br />
                        Kate Hopkins
                    </li>

                    <li>
                        Foley Editor<br />
                        Hannah Gregory
                    </li>

                    <li>
                        Re-recording Mixer<br />
                        Ben Peace
                    </li>

                    <li>
                        Foley Artists<br />
                        Paul Ackerman, Ben Jones
                    </li>

                    <li>
                        Audio Post Production Manager<br />
                        Diana Smith
                    </li>

                    <li>
                        Supervising Orchestrator<br />
                        John Aston Thomas
                    </li>

                    <li>
                        Orchestrators<br />
                        Tommy Laurence, Geoff Lawson, Jessica Dannheiser,
                        Rebecca Dale
                    </li>

                    <li>
                        Music Editor<br />
                        Lewis Morison
                    </li>

                    <li>
                        Score Preparation<br />
                        Colin Rae
                    </li>

                    <li>
                        Additional Score Preparation<br />
                        Mark Graham, Joann Kane Music Service
                    </li>

                    <li>
                        Score Coordinator & Musician Contractor<br />
                        Hilary Skewes
                    </li>

                    <li>
                        Assistant Contractor<br />
                        Jenny Plant
                    </li>

                    <li>
                        Conductor<br />
                        Rebecca Dale
                    </li>

                    <li>
                        Orchestral Leader<br />
                        David Juritz
                    </li>

                    <li>
                        African Winds and Harp<br />
                        Dirk Campbell
                    </li>

                    <li>
                        Solo Vocals<br />
                        Sona Jobarteh, Lincoln Jean-Marie Guitars Jonathen
                        Martin Berry
                    </li>

                    <li>
                        Percussion Programming<br />
                        Bath Cauci
                    </li>

                    <li>Score recorded at Air Lyndhurst Studios, London</li>

                    <li>
                        Recording and Mix Engineer<br />
                        Nick Wollage
                    </li>

                    <li>
                        Score Recordist<br />
                        Chris Barrett
                    </li>

                    <li>
                        Engineer Assistant<br />
                        Ashley Andrew-Jones
                    </li>

                    <li>
                        Additional Engineering<br />
                        Rupert Coulson, Jon Bailey
                    </li>

                    <li>
                        Additional Arrangements<br />
                        Anthony Willis, Red Bennett, TJ Lindgren
                    </li>

                    <li>
                        Scoring Assistants<br />
                        Red Bennett, Zoe Zelkind
                    </li>

                    <li>
                        Music Consultant<br />
                        David Dickie
                    </li>

                    <li>
                        Dolby Atmos Engineer<br />
                        Robert Huckle
                    </li>

                    <li>
                        Consultant<br />
                        Paul Federbush
                    </li>

                    <li>
                        Post Production Assistant<br />
                        Bodhipaksini
                    </li>

                    <li>
                        Interns<br />
                        Jacca Deeble, Edward Dance, Elsa Kent
                    </li>

                    <li>
                        Logo Design and Motion Graphics<br />
                        Janna Deeble
                    </li>

                    <li>
                        Business Affairs<br />
                        Richard Morris
                    </li>

                    <li>
                        Production Insurance Travellers Insurance Ltd &
                        Gallagher
                    </li>

                    <li>
                        Legal Services Lee and Thompson - Reno Antoniades,
                        Angela Scurrah
                    </li>

                    <li>
                        Additional Legal Services Kate de la Grense, Katharine
                        Otway
                    </li>

                    <li>Accountants Robinson Reed Layton Ltd</li>

                    <li>
                        UK Tax Credit Consultants Saffery Champness LLP - Moses
                        Nyachae
                    </li>

                    <li>With Special thanks to</li>

                    <li>
                        Bestseller Foundation Bestseller Foundation - Regina M.
                        Andersen, Kristian Sloth Petersen
                    </li>

                    <li>Mister Smith Entertainment</li>

                    <li>
                        Iain Douglas-Hamilton, Gail Egan, Stephen Frears, David
                        Garrett, Lisa Gerrard, Colin Goodwille, Jean Hartley,
                        Paula Kahumbu, Liz Keynes, Mike Kirkland, Terrence &
                        Ecky Malick, Charlie Mayhew, Karen McComb, Barbara
                        McKnight, Fran Michelmore, Matthew & Jennifer Rowland,
                        Angela Sheldrick, Nick Trent, Jon Turteltaub
                    </li>

                    <li>
                        With the generous support of John Heminway, Susannah
                        Rouse, The Charles Engelhard Foundation, Kathy Snowden,
                        Scott Asen, Fred & Suzie Fehsenfeld, The Rubin Family,
                        Meegan Rubin & Alex Favin, Molly Rouse Terlevich & Fabio
                        Terlevich
                    </li>

                    <li>
                        With thanks to Kenya Wildlife Service - Julius Kimani,
                        Richard Leakey, Robert O'Brein, Dickson Too, Dominic
                        Wambua, John Wambua, David Oyugi, William Tanui, George
                        Mwangi, Peter Waweru, Jeremiah Poghon, Arthur Tuda, Edin
                        Kalla, Robert Muasya, Robert Njue
                    </li>

                    <li>
                        Dominique Antoine, Millie Ball, Lesley Blume, David
                        Bonnouvrier & Trish Goff, Andrew Brent, Andrea
                        Calderwood, Humphrey Carter, Ian Craig, Gary Cullen,
                        Renson Dio, Rob Dodson, Dudu DouglasHamilton, Saba
                        Douglas-Hamilton, Laura Engel, Naomi Frears, Soiya
                        Gecaga, Alan Herd, The Kamen Family, Kilifi Plantations,
                        Andrew Kreisberg, Dominy Lenjo, Julius Letooyia, James
                        Mbogua, Richard Moller, Cynthia Moss, Paul Ndunda,
                        Michael Nderitu, David Ngala, Monique Oliff, Debs
                        Paterson, Alan Piper, Ingrid Pittana, Frank Pope, Ari
                        Presler, Gig Rackauskas & Duncan Ferguson, Maggie
                        Rodford, Torben Rune, Satao Camp, Joseph Sauni, Sentrim
                        Tsavo Camp, Neville Sheldrick, Claire Taylor, Chris
                        Thouless, Simon Trevor, Cissy Walker
                    </li>

                    <li>
                        In recognition of the work of Elephant Crisis Fund,
                        WildlifeDirect, Save the Elephants, Amboseli Trust for
                        Elephants, Tusk, David Sheldrick Wildlife Trust, The
                        Milgis Trust, Big Life Foundation, WWF, Tsavo Elephant
                        Research, Tsavo Trust, IFAW, Wildlife Works, The Nature
                        Conservancy, ElephantVoices, Mara Elephant Project, Lewa
                        Wildlife Conservancy, Conservation International, The
                        Elephants and Bees Project, Space for Giants, Reteti
                        Elephant Sanctuary, Northern Rangelands Trust, Stop
                        Ivory, African Wildlife Foundation, Mount Kenya Trust,
                        Mpala Research Centre and Wildlife Foundation, Lumo
                        Community Wildlife Conservancy, Galana Conservancy,
                        Elephant Neighbors Center, Taita Taveta Wildlife Forum,
                        Laikipia Wildlife Forum, Tsavo Conservation Group
                    </li>

                    <li>
                        Filmed with the kind co-operation of Taita Ranching
                        Company Ltd. Kenya
                    </li>

                    <li>
                        Special people who supported us & shared the journey
                        Lucy, Freddy, Jacca, Lila, Amelie, David, Ivo, Tassia
                    </li>

                    <li>
                        Dedicated to the memory of our friend & mentor<br />
                        Alan Root
                    </li>
                </ul>

                <DoStorageImg
                    class="mx-auto"
                    src="film_page/credits_logos.jpg"
                />

                <p>
                    A Deeble, Stone and<br />
                    Oliff production
                </p>

                <p>
                    © Wild Inspiration 2018<br />
                    All rights reserved<br />
                    Worldwide Licensing and Distribution by Mister Smith
                    Entertainment & Endeavor Content.
                </p>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
const showModal = ref(false)
</script>

<style scoped>
#film-credits-modal-content {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: theme('spacing.6');
}
</style>
