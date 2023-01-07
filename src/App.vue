<template>
    <div class="container">
        <Header />

        <RouterView />

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "@/components/TheHeader.vue";
import Footer from "@/components/TheFooter.vue";
</script>

<style scoped lang="scss">
.container {
    max-width: 1200px;
    margin: 20px auto 0;
    padding: 0 10px;
}
</style>
