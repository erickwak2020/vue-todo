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
  }
}

// Create a new store instance.
export const store = createStore({
  state () {
    return {
      todoItems: storage.fetch()
    }
  },
  mutations: {
  }
})