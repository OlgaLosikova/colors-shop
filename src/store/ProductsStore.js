import { defineStore } from "pinia";
import { useFiltersStore } from "./FiltersStore";
import axios from "axios";

const baseUrl = "https://568abbd2ee538587.mokky.dev/items";

export const useProductStore = defineStore("productStore", {
  state: () => ({
    products: [],
    status: "loading",
  }),
  actions: {
    async fetchProducts() {
      try {
        const filtersStore = useFiltersStore();
        const params = { sortBy: `${filtersStore.sortType}` };

        filtersStore.categorySearchStr &&
        (params.categories = `*${filtersStore.categorySearchStr}`);
        
        const { data } = await axios.get(baseUrl, { params });
        this.products = data;
        this.status = "success";
      } catch (err) {
        this.status = "error";
      }
    },
  },
});
