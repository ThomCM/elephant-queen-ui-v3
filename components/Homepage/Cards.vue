<template>
    <div
        :class="[
            'homepage-cards grid grid-cols-1 gap-y-6 -mx-6 pb-6 md:pt-6 md:mx-0 xl:-mx-6',
        ]"
    >
        <slot></slot>
    </div>
</template>

<style>
.homepage-cards > div {
    justify-content: center;
}

@media (min-width: theme('screens.md')) {
    .homepage-cards > div:nth-child(even) {
        justify-content: flex-end;
    }

    .homepage-cards > div:nth-child(odd) {
        justify-content: flex-start;
    }
}
</style>
