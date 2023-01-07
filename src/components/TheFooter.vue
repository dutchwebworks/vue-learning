<template>
    <footer>
        <div>&copy; Dutchwebworks, 2023</div>
        <div><a href="https://github.com/dutchwebworks/vue-learning" target="_blank">View on Github</a></div>
    </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
footer {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    padding-top: 10px;
    border-top: 1px solid var(--body-text-color);

    a {
        color: inherit;

        &:hover {
            color: var(--secondary-brand-color);
        }
    }
}
footer div {
    margin: 0;
    color: var(--body-text-color);
    font-size: 0.875rem;
    font-weight: 300;

    &:last-child {
        text-align: right;
    }
}
</style>
