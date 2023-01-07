<template>
    <Header />

    <div class="container">
        <RouterView />
    </div>

    <Footer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";
</script>

<style scoped lang="scss"></style>
