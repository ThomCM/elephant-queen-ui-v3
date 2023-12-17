<template>
    <div id="team">
        <div class="mb-12">
            <h2>Meet the Outreach Team</h2>
        </div>

        <ul
            v-if="teamMembers"
            :class="['grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4']"
        >
            <li v-for="(member, i) in teamMembers" :key="`member-${i}`">
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
import { isTeamMemberList } from '~/utils/dto/TeamMember'

const runtimeConfig = useRuntimeConfig()

const { data, pending, error, refresh } = await useFetch(
    `${runtimeConfig.public.productionApiUrl}/team-members`,
    {
        headers: {
            Accept: 'application/json',
        },
    }
)

const teamMembers = computed(() => {
    return typeof data.value === 'object' &&
        data.value &&
        'data' in data.value &&
        typeof data.value.data === 'object' &&
        data.value.data &&
        isTeamMemberList(data.value.data)
        ? data.value.data
        : null
})
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
