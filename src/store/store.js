import { createStore } from 'vuex'

const storage = {
  fetch() {
    const arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
  update(todoItem) {
    localStorage.removeItem(todoItem.item);
    localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  }
}

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      todoItems: storage.fetch()
    }
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: {
    addOneItem(state, todoItem) {
      let newTodoItem = {
        completed: false,
        item: todoItem
      }
      localStorage.setItem(todoItem, JSON.stringify(newTodoItem));
      state.todoItems.push(newTodoItem);
    },
    removeOneItem(state, payload) {
      localStorage.removeItem(payload.todoItem.item);
      state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
      const index = payload.index;
      const todoItem = payload.todoItem;
      state.todoItems[index].completed = !state.todoItems[index].completed;
      storage.update(todoItem);
    },
    clearAllItem(state) {
      localStorage.clear();
      state.todoItems = [];
    },
  }
})