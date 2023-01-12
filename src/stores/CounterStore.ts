import { defineStore } from "pinia";

export const useCounterStore = defineStore("counterStore", {
  state: () => ({
    counter: 0,
  }),
  actions: {
    incrementCounter() {
        this.counter++;
    },
    decrementCounter() {
        if(this.counter > 0) {
            this.counter--;
        }
    }
  }
});
