<template>
    <main>
        <h1>Catalog: Checkout</h1>

        <p><RouterLink :to="{ name: 'catalog-overview' }">Overview</RouterLink></p>

        <p>Product checkout page</p>

        <p><RouterLink :to="{ name: 'catalog-thank-you' }">Order now</RouterLink></p>
    </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
