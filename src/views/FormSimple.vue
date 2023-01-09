<template>
    <main>
        <h1>Form simple</h1>

        <h2>My name is: {{ name }}</h2>

        <div><input type="text" class="form__input" v-model="name" placeholder="Your name" /></div>
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

let name = ref("");
</script>

<style scoped lang="scss">
.form__input {
    padding: 15px 20px;
    border: 1px solid var(--body-text-color-alt);
    border-radius: 10px;
}
</style>
