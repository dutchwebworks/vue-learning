<template>
    <main>
        <h1>Todo shopping list</h1>

        <form @submit.prevent="addItemToShoppingList">
            <input type="text" v-model="newItem" id="newItem" placeholder="Add Item">
            <input type="submit" value="&plus;">
        </form>

        <h2 v-if="nrOfItems > 0">Items: {{ nrOfItems }}</h2>

        <ul v-if="nrOfItems > 0" class="shopping-list">
            <li v-for="{checked, label} in shoppingList" :key="label" @click="markItemOnShoppingList(label)" title="Mark item" :class="{ 'is-checked': checked }" class="shopping-list__item">
                <component :is="checked ? 's' : 'span'">{{ label }}</component>

                <button @click.prevent="removeItemFromShoppingList(label)" title="Remove" class="shopping-list__btn-remove">&times;</button>
            </li>
        </ul>

        <p v-else>No items on the list</p>
    </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

let newItem = ref("");

const shoppingList = ref([
    { checked: false, label: "Cheese" },
    { checked: false, label: "Milk" }
]);

let nrOfItems = computed(() => shoppingList.value.length);

function addItemToShoppingList() {
    if(newItem.value != "") {
        shoppingList.value.push({ checked: false, label: newItem.value});
        newItem.value = "";
    }
}

function removeItemFromShoppingList(name: string) {
    shoppingList.value = shoppingList.value.filter(item => item.label != name);
}

function markItemOnShoppingList(name: string) {
    shoppingList.value.forEach((item) => {
        if(item.label === name) {
            item.checked = !item.checked;
        }
    });
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
