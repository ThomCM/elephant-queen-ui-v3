<template>
    <li class="book-list-item aspect-[601/781]">
        <slot></slot>
    </li>
</template>

<style>
.book-list-item {
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
}

.book-list-item > div {
    border-radius: theme('borderRadius.xl');
    position: relative;
    height: 100%;
    width: 100%;
}
</style>
