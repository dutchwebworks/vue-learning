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

        <h2 class="heading">Firebase realtime database</h2>

        <table cellspacing="0" class="users__listing">
            <thead>
                <tr>
                    <th>Username</th>
                    <th>E-mail</th>
                    <th>Age</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(user, index) in users"
                    :key="index">
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.age }}</td>
                    <td>
                        <button 
                            class="users__delete-button button button--02"
                            @click="deleteUser(user)"
                            title="Delete this user">
                            &times;
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script>
import { db } from "@/firebase";
import { usersRef } from "@/firebase";

export default {
    data() {
        return {
            username: "",
            email: "",
            age: null,
            users: []            
        }
    },
    created() {
        usersRef.on("child_added", snapshot => this.users.push({...snapshot.val(), id: snapshot.key }));
        usersRef.on("child_removed", snapshot => {
            const deletedUser = this.users.find(user => user.id = snapshot.key);
            this.users.splice(this.users.indexOf(deletedUser), 1);
        });
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
        },
        deleteUser(user) {
            if(confirm("Delete user with username: " + user.username + "?") == true) {
                usersRef.child(user.id).remove();
            }
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

.users__fieldset {
    padding: 10px 15px;
    border: 3px solid map-get($colors, 01);
}

.users__legend {
    font-weight: 300;
    font-size: 26px;
    padding-left: 10px;
    padding-right: 10px;
    color: map-get($colors, 01);
	font-family: "Roboto", sans-serif;
}

.users__listing {
    width: 100%;
    margin-top: 40px;
    font-weight: 300;
	font-family: "Roboto", sans-serif;
    border: 3px solid map-get($colors, 02);

    tr:nth-child(even) td {
        background-color: map-get($colors, 05);
    }

    th,
    td {
        padding: 10px 15px;
    }

    th {
        font-size: 26px;
        text-align: left;
        color: white;
        background-color: map-get($colors, 02);
    }    

    td {
        color: map-get($colors, 03);
    }
}

.users__delete-button {
    font-size: 26px;
    border-radius: 8px;
    cursor: pointer;
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>