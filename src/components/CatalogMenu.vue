<template>
    <nav>
        <menu>
            <li>
                <RouterLink to="/catalog">Catalog</RouterLink>
            </li>
            <li>
                <RouterLink to="/catalog/detail">Detail</RouterLink>
            </li>
            <li>
                <RouterLink to="/catalog/checkout">Checkout</RouterLink>
            </li>
            <li>
                <RouterLink to="/catalog/thank-you">Thank You</RouterLink>
            </li>
        </menu>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
menu {
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }

    a {
        color: var(--primary-brand-color);

        &.is-active,
        &:hover {
            color: var(--secondary-brand-color);
        }
    }
}
</style>
