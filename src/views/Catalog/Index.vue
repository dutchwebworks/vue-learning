<template>
    <main>
        <h1>Catalog overview</h1>

        <ul class="catalogList">
            <li v-for="product in productList" :key="product.slug">
                <RouterLink :to="{ name: 'catalog-detail', params: { slug: product.slug } }">{{ product.label }}</RouterLink>
            </li>
        </ul>
    </main>
</template>

<script setup lang="ts">
const productList = [
    {
        label: "Sony PlayStation 3",
        slug: "ps3"
    },
    {
        label: "Sony PlayStation 4",
        slug: "ps4"
    },
    {
        label: "Sony PlayStation 4 Pro",
        slug: "ps4-pro"
    },
    {
        label: "Sony PlayStation 5",
        slug: "ps5"
    }
];
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
