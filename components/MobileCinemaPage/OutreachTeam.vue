<template>
    <div id="team">
        <div class="mb-12">
            <h2>Meet the Outreach Team</h2>
        </div>

        <ul
            v-if="!pending && !error"
            :class="['grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4']"
        >
            <li v-for="(member, i) in teamMembers" :key="`${_uid}-member-${i}`">
                <img
                    class="rounded-xl w-full mb-3"
                    :src="member.image"
                    :alt="member.full_name"
                />

                <p class="font-black">{{ member.full_name }}</p>

                <p class="text-gray-900">{{ member.role }}</p>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
const {
    data: teamMembers,
    pending,
    error,
    refresh,
} = await useApiFetch('team-members')
</script>

<style scoped>
@media (min-width: theme('screens.3xl')) {
    .grid {
        max-width: 1425px;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
