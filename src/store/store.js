import { createStore } from 'vuex'
import todoStore from "@/store/modules/todoStore";
import deleteStore from "@/store/modules/deleteStore";

// Create a new store instance.
export const store = createStore({
  modules: {
    todoStore, deleteStore
  }
});