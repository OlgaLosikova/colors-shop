import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
  state: () => ({
    addedItems: [],
    totalPrice: 0,
    quantity: 0,
  }),
  actions: {
    addToCart(obj) {
      this.totalPrice += obj.price;
      this.quantity++;
      if (!this.addedItems.find((item) => obj.id === item.id)) {
        obj.count = 1;
        this.addedItems.push(obj);
      } else {
        this.addedItems.find((item) => {
          if (obj.id === item.id) {
            item.count++;
          }
        });
      }
      return this.addedItems;
    },
    decrementProduct(id) {
      
      this.addedItems.find((item) => {
        if (id === item.id) {
          if (item.count > 1) {
            item.count--;
            this.quantity--;
            this.totalPrice -= item.price;
          } else this.deleteProduct(id);
        }
      });
    },
    incrementProduct(id) {
      this.quantity++;
      this.addedItems.find((item) => {
        if (id === item.id) {
          item.count++;
          this.totalPrice += item.price;
        }
      });
    },
    deleteProduct(id) {
      this.addedItems = this.addedItems.filter((item) => {
        if (item.id === id) {
          this.totalPrice -= item.price * item.count;
          this.quantity -= item.count;
        }
        if (item.id !== id) {
          return this.addedItems;
        }
      });
    },
    cleanCart(){
      this.addedItems=[];
      this.totalPrice=0;
      this.quantity=0;
    }
  },
});
