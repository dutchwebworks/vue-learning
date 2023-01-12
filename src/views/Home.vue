<template>
    <main>
        <h1>Home</h1>

        <nav>
            <ul class="overview">
                <li v-for="{label, routerName} in navItems" :key="routerName" class="overview__item"><RouterLink :to="{ name: routerName }">{{ label }}</RouterLink></li>
            </ul>
        </nav>
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCounterStore } from "@/stores/CounterStore";

const navItems = ref([
    {
        label: "Routing",
        routerName: "catalog-overview"
    },
    {
        label: "Form simple",
        routerName: "form-simple"
    },
    {
        label: "Todo",
        routerName: "to-do"
    },
    {
        label: "Counter",
        routerName: "counter"
    }
]);
</script>

<style scoped lang="scss">
.overview {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    grid-auto-rows: 175px;
    margin: 0;
    padding: 0;
    list-style: none;
}

.overview__item {
    margin: 0;
    text-align: center;
    cursor: pointer;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-size: 1.2rem;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        background-color: var(--primary-brand-color);
        transition: background-color .3s;

        &:hover {
            background-color: var(--secondary-brand-color);
        }
    }
}
</style>
