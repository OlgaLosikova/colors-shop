import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    addedItems: [],
  }),
  actions: {
    addToCart(obj) {
      return this.addedItems.push(obj);
    },
  },
});
