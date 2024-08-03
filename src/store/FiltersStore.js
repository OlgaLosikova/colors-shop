import { defineStore } from "pinia";
import { useProductStore } from "./ProductsStore";

export const useFiltersStore = defineStore("filtersStore", {
  state: () => ({
    type: "all",
    sortType: "-price",
    sortTitle: "сначала дорогие",
    categorySearchStr: "",
    categories: [],
    isOpenSort: false,
  }),
  actions: {
    changeSort(title, type) {
      const productStore = useProductStore();
      this.isOpenSort = false;
      this.sortTitle = title;
      this.sortType = type;
      productStore.fetchProducts();
    },
    selectCategory(e, categoryNumber) {
      const productStore = useProductStore();
      if (e.target.checked && !this.categories.includes(categoryNumber)) {
        this.categories.push(categoryNumber);
        this.categories.sort();
      } else {
        this.categories = this.categories.filter(
          (item) => item !== categoryNumber
        );
      }
      this.categories.length
        ? (this.categorySearchStr = this.categories.reduce((acc, item) => {
            return acc + "," + item;
          }))
        : (this.categorySearchStr = "");
      productStore.fetchProducts();
    },
  },
});
