<template>
    <main>
        <h1>Catalog: Detail</h1>

        <p><RouterLink :to="{ name: 'catalog-overview' }">Overview</RouterLink></p>

        <div>Slug: {{ productItem }}</div>

        <p><RouterLink :to="{ name: 'catalog-checkout' }">Checkout</RouterLink></p>
    </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const productItem = route.params.slug;
</script>

<style scoped lang="scss"></style>
