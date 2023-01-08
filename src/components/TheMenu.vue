<template>
    <nav>
        <menu>
            <li v-for="(item, index) in navMenu" :key="index">
                <RouterLink :to="{ name: item.routeName }">{{item.label}}</RouterLink>
            </li>
        </menu>
    </nav>
</template>

<script setup lang="ts">
const navMenu = [
    {
        label: "Home",
        routeName: "home"
    },
    {
        label: "About",
        routeName: "about"
    }
]
</script>

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
