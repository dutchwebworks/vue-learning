<template>
    <main>
        <h1>Pinia counter</h1>

        <p>
            Current counter is: {{ counter }}
        </p>

        <div>
            <button @click="incrementCounter">Increment counter</button>
            <button @click="decrementCounter">Decrement counter</button>
        </div>
    </main>
</template>

<script setup lang="ts">
import { useCounterStore } from "@/stores/CounterStore";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { counter } = storeToRefs(store);
const { incrementCounter, decrementCounter } = store;
</script>

<style scoped lang="scss">
button {
    border: none;
    padding: 20px 25px;
    color: white;
    background-color: var(--primary-brand-color);
    border-radius: 10px;
    transition: background-color .3s;
    cursor: pointer;

    &:hover {
        background-color: var(--secondary-brand-color);
    }

    & + & {
        margin-left: 10px;
    }
}
</style>
