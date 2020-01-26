<template>
    <main class="users">
        <h1 class="heading">Users page</h1>

        <fieldset class="users__fieldset">
            <legend class="users__legend paragraph">Manage users</legend>

            <form 
                @submit.prevent="onSubmit"
                class="users__form">
                <label for="username" class="users__labels paragraph">Username:</label>
                <input id="username" ref="username" type="text" v-model="username" class="users__input paragraph" required>
                
                <label for="email" class="users__labels paragraph">E-mail:</label>
                <input id="email" type="text" v-model="email" class="users__input paragraph" required>                

                <label for="age" class="users__labels paragraph">Age:</label>
                <input id="age" type="number" v-model.number="age" class="users__input paragraph" required>

                <input type="submit" value="Add" class="button button--01">
            </form>            
        </fieldset>

        <div class="users__listing">
            <ul class="users__list">
                <li 
                    v-for="user in users"
                    :key="user['.key']"
                    class="users__list-item">
                    {{ user }}
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
import { usersRef } from "@/firebase";

export default {
    data() {
        return {
            username: "",
            email: "",
            age: null,
            
        }
    },
    firebase: {
        users: usersRef
    },
    methods: {
        onSubmit() {
            usersRef.push({
                username: this.username,
                email: this.email,
                age: this.age,
                edit: false
            });

            this.resetFields();
        },
        resetFields() {
            this.username = "";
            this.email = "";
            this.age = null;
            this.$refs.username.focus();
        }
    }
}
</script>

<style lang="scss">
// ---------------------------------------------
// Block
// ---------------------------------------------

.users__form {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 150px 1fr;
}

.users__labels {
    grid-column-start: 1;
}

.users__input {
    grid-column-start: 2;
}

// ---------------------------------------------
// Element
// ---------------------------------------------



// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>