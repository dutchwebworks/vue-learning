<template>
    <main>
        <h1>Todo Pomodore</h1>

        <form @submit.prevent="addItemToShoppingList">
            <input type="text" v-model="newItem" id="newItem" placeholder="Add Item">
            <input type="submit" value="+">
        </form>

        <h2>Shopping list</h2>

        <ul v-if="shoppingList.length > 0" class="shopping-list">
            <li v-for="name in shoppingList" class="shopping-list__item">
                {{ name }}
                <button @click="removeItemFromShoppingList(name)" title="Remove" class="shopping-list__btn-remove">&times;</button>
            </li>
        </ul>

        <p v-else>No items on the list</p>
    </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

let newItem = ref("");
const shoppingList = ref(["Cheese", "Milk"]);

function addItemToShoppingList() {
    if(newItem.value != "") {
        shoppingList.value.push(newItem.value);
        newItem.value = "";
    }
}

function removeItemFromShoppingList(name: string) {
    shoppingList.value.splice(shoppingList.value.indexOf(name), 1);
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
    // cursor: pointer;

    &:hover {
        // background-color: #eee;
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
