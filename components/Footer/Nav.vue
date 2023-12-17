<template>
    <div
        :class="[
            'grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-6',
        ]"
    >
        <div v-for="(group, i) in linkGroups" :key="`link-group-${i}`">
            <div :class="['mb-6 font-black text-lg']">
                <span v-if="typeof group.heading === 'string'">
                    {{ group.heading }}
                </span>

                <a
                    v-if="group.heading.to.includes('http')"
                    :href="group.heading.to"
                    target="_blank"
                >
                    {{ group.heading.label }}
                </a>

                <NuxtLink v-else :to="group.heading.to">
                    {{ group.heading.label }}
                </NuxtLink>
            </div>

            <ul
                v-for="(link, j) in group.links"
                :key="`link-group-${i}-link-${j}`"
            >
                <li>
                    <a
                        v-if="link.to.includes('http')"
                        :href="link.to"
                        target="_blank"
                    >
                        {{ link.label }}
                    </a>

                    <NuxtLink v-else :to="link.to">
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
const linkGroups = useFullMenu()
</script>

<style></style>
