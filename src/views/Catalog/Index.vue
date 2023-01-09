<template>
    <main>
        <h1>Catalog overview</h1>

        <ul class="catalogList">
            <li v-for="{label, slug} in productList" :key="slug">
                <RouterLink :to="{ name: 'catalog-detail', params: { slug: slug } }">{{ label }}</RouterLink>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const productList = ref([
    {
        label: "Sony PlayStation 3",
        slug: "playstation-3"
    },
    {
        label: "Sony PlayStation 4",
        slug: "playstation-4"
    },
    {
        label: "Sony PlayStation 4 Pro",
        slug: "playstation-4-pro"
    },
    {
        label: "Sony PlayStation 5",
        slug: "playstation-5"
    }
]);
</script>

<style scoped lang="scss">
.catalogList {
    a {
        color: var(--primary-brand-color);

        &:hover {
            color: var(--secondary-brand-color);
        }
    }
}
</style>
