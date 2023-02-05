<template>
    <main>
        <h1>Todo shopping list</h1>

        <form @submit.prevent="addTodo">
            <input type="text" v-model.trim="newItem" id="newItem" placeholder="Add Item">
            <input type="submit" value="Add todo">
        </form>

        <h2>Items: {{ nrOfTodos }}</h2>
        <p>Checked: {{ nrOfCheckedTodos }}</p>
        <p>Unchecked: {{ nrOfUncheckedTodos }}</p>

        <ul v-if="nrOfTodos > 0" class="shopping-list">
            <li v-for="{checked, label} in todos" :key="label" @click="todoStore.markTodo(label)" title="Mark item" :class="{ 'is-checked': checked }" class="shopping-list__item">
                <component :is="checked ? 's' : 'span'">{{ label }}</component>

                <button @click.prevent="todoStore.removeTodo(label)" title="Remove" class="shopping-list__btn-remove">&times;</button>
            </li>
        </ul>

        <p v-else>No items on the list</p>
    </main>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, inject } from "vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/TodoStore";

const storageKey = inject("shoppingListKey");
const todoStore =  useTodoStore();
const { todos, nrOfTodos, nrOfCheckedTodos, nrOfUncheckedTodos } = storeToRefs(todoStore);
let newItem = ref("");

onBeforeMount(() => {
    if (localStorage.getItem(storageKey) === null) {
        todoStore.fill();
    } else {
        todoStore.fill(JSON.parse(localStorage.getItem(storageKey)));
    }
});

function addTodo() {
    todoStore.addTodo(newItem.value);
    newItem.value = "";
}
</script>

<style scoped lang="scss">
h2 {
    margin-top: 20px;
}

form {
    display: flex;
    gap: 20px;
    align-items: center;
}

label {
    font-size: 2rem;
    color: var(--secondary-brand-color);
}

input[type="text"] {
    padding: 15px;
    border: 1px solid var(--body-text-color-alt);
    border-radius: 10px;
}

input[type="submit"] {
    padding: 20px 15px;
    border-radius: 10px;
    color: white;
    border: none;
    cursor: pointer;
    background-color: var(--primary-brand-color);
}

.shopping-list {
    margin: 0;
    padding: 0;
}

.shopping-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 10px 0;
    padding: 20px 20px;
    list-style: none;
    border-radius: 10px;
    font-size: 1.5rem;
    color: var(--body-text-color-alt);
    background-color: #ccc;
    transition: background-color .3s;
    cursor: pointer;

    &:hover {
        background-color: #eee;
    }

    &.is-checked {
        s {
            color: green;
        }
    }
}

.shopping-list__btn-remove {
    border: none;
    padding: 10px 10px;
    color: white;
    background-color: var(--secondary-brand-color);
    border-radius: 10px;
    font-size: 2rem;
    cursor: pointer;
}
</style>
