import { defineStore } from "pinia";
import { inject } from "vue";

const storageKey = inject("shoppingListKey");

export const useTodoStore = defineStore("todoStore", {
    state: () => ({
        todos: [],
    }),
    getters: {
        nrOfTodos: (state) => state.todos.length,
        nrOfCheckedTodos: (state) => state.todos.reduce((accumulator, item) => accumulator += item.checked ? 1 : 0, 0),
        nrOfUncheckedTodos: (state) => state.todos.reduce((accumulator, item) => accumulator += item.checked ? 0 : 1, 0)
    },
    actions: {
        async fill(data) {
            if(typeof data === Object) {
                this.todos = data;
            } else {
                this.todos = (await import("@/data/InitalTodos.json")).default;
            }

            this.saveTodos();
        },
        addTodo(label: String) {
            if(label != "") {
                this.todos.push({
                    checked: false,
                    label: label
                });
            }

            this.saveTodos();
        },
        removeTodo(label: String) {
            this.todos = this.todos.filter(item => item.label != label);
            this.saveTodos();
        },
        markTodo(label: String) {
            this.todos.forEach((item) => {
                if (item.label === label) {
                    item.checked = !item.checked;
                }
            });

            this.saveTodos();
        },
        saveTodos() {
            debugger;
            localStorage.setItem(storageKey, JSON.stringify(this.todos));
        }
    }
});
