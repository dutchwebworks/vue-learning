<template>
    <main class="users">
        <h1 class="heading">Users</h1>

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
                    :key="user.id">
                    <td>{{ user.username }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.age }}</td>
                    <td>
                        <button 
                            class="users__delete-button button button--01"
                            @click="editUser(user)"
                            title="Edit this user">
                            Edit
                        </button>

                        &nbsp;

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

        <h2 class="sub-heading">Simple Firebase CRUD app.</h2>

        <fieldset class="users__fieldset">
            <legend class="users__legend paragraph">Manage users</legend>

            <form 
                @submit.prevent="onSubmit"
                class="users__form">
                <label
                    for="username"
                    class="users__labels paragraph">
                    Username:
                </label>

                <input
                    @blur="$v.username.$touch()"
                    id="username"
                    ref="username"
                    type="text"
                    v-model="username"
                    class="users__input paragraph"
                    required>

                <small
                    class="users__form-error"
                    v-if="$v.username.$error">
                    Please enter your username
                </small>

                <small
                    class="users__form-error"
                    v-if="!$v.username.minLen">
                    Name must be at least {{ $v.username.$params.minLen.min }} characters long
                </small>
                
                <label
                    for="email"
                    class="users__labels paragraph">
                    E-mail:
                </label>

                <input
                    @blur="$v.email.$touch()"
                    id="email"
                    type="email"
                    v-model="email"
                    class="users__input paragraph"
                    required> 

                <small
                    class="users__form-error"
                    v-if="$v.email.$error">
                    Please enter an e-mail address
                </small>

                <small 
                    class="users__form-error"
                    v-if="!$v.email.email">
                    Please provide a valid e-mail address
                </small>            

                <label
                    for="age"
                    class="users__labels paragraph">
                    Age:
                </label>

                <input
                    @blur="$v.age.$touch()"
                    id="age"
                    type="number"
                    v-model.number="age"
                    class="users__input paragraph"
                    required>

                <small
                    class="users__form-error"
                    v-if="$v.age.$error">
                    Please enter your age
                </small>

                <div 
                    v-if="!editingUser"
                    class="users__form-buttons">
                    <input  
                        :disabled="$v.$invalid"        
                        type="submit"
                        value="Add"
                        class="button button--01">
                </div>
                
                <div 
                    v-else
                    class="users__form-buttons">   
                    <button
                        @click="updateUser"
                        :disabled="$v.$invalid"  
                        value="Update"
                        class="button button--02">
                        Update
                    </button>

                    &nbsp;

                    <button
                        @click="cancelEditUser"
                        value="Cancel"
                        class="button button--01">
                        Cancel
                    </button>
                </div>
            </form>            
        </fieldset>
    </main>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import { db } from "@/firebase";
import { usersRef } from "@/firebase";

export default {
    data() {
        return {
            username: "",
            email: "",
            age: null,
            users: [],
            editingUser: null                     
        }
    },
    created() {
        usersRef.on("child_added", snapshot => this.users.push({...snapshot.val(), id: snapshot.key }));

        usersRef.on("child_removed", snapshot => {
            const deletedUser = this.users.find(user => user.id === snapshot.key);
            this.users.splice(this.users.indexOf(deletedUser), 1);
        });

        usersRef.on("child_changed", snapshot => {
            const updatedUser = this.users.find(user => user.id === snapshot.key);
            updatedUser.username = snapshot.val().username;
            updatedUser.email = snapshot.val().email;
            updatedUser.age = snapshot.val().age;
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

            this.cancelEditUser();
        },
        deleteUser(user) {
            if(confirm("Delete user with username: " + user.username + "?") == true) {
                usersRef.child(user.id).remove();
            }
        },
        editUser(user) {
            this.editingUser = user;
            this.username = user.username;
            this.email = user.email;
            this.age = user.age;
        },
        cancelEditUser() {
            this.editingUser = null;
            this.username = "";
            this.email = "";
            this.age = null;
            this.$refs.username.focus();
        },
        updateUser() {
            usersRef.child(this.editingUser.id).update({
                username: this.username,
                email: this.email,
                age: this.age
            });

            this.cancelEditUser();
        }
    },
    validations: {
        username: {
            required,
			minLen: minLength(2)
        },
        email: {
            required,
			email
        },
        age: {
            required,
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

.users__form-buttons {
    grid-column: span 2;
}

.users__form-error {
    grid-column: 2;
	display: block;
    margin: 0;
	color: red;
    font-weight: 300;
	font-family: "Roboto", sans-serif;
	@include align-self(center);
}

// ---------------------------------------------
// Modifier
// ---------------------------------------------




</style>