<template>
    <Modal @close="$emit('close')">
        <div class="text-center">
            <div class="mb-6">
                <h2 class="mb-3">Watch the Film</h2>

                <p :class="['text-gray-900']">
                    You can watch the film on Apple TV+ or have free access to
                    the film for education and conservation purposes in East
                    Africa. Please select an option below.
                </p>
            </div>

            <div class="px-12">
                <div class="mb-3">
                    <NuxtLink to="/film/educational-access">
                        <Button class="w-full">
                            Apply for Educational Access
                        </Button>
                    </NuxtLink>
                </div>

                <div>
                    <a
                        href="https://tv.apple.com/us/movie/the-elephant-queen/umc.cmc.1ybrwww83rknjtwiuuemjfbvq"
                        target="_blank"
                    >
                        <Button class="w-full">Watch on Apple TV+</Button>
                    </a>
                </div>
            </div>
        </div>
    </Modal>
</template>
