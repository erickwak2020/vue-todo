<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems"
              v-on:removeItem="removeOneItem" @toggleItem="toggleOneItem">
    </TodoList>
    <TodoFooter @clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";
export default {
  name: 'TodoComponent',
  created: function () {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  data: function () {
    return {
      todoItems: []
    }
  },
  components: {
    TodoFooter, TodoList, TodoInput, TodoHeader
  },
  methods: {
    addOneItem: function (todoItem) {
      let newTodoItem = {
        completed: false,
        item: todoItem
      }
      localStorage.setItem(todoItem, JSON.stringify(newTodoItem));
      this.todoItems.push(newTodoItem);
    },
    removeOneItem: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function (todoItem,  index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      //todoItem.completed = !todoItem.completed;
      this.updateItem(todoItem);
    },
    clearAllItem: function() {
      localStorage.clear();
      this.todoItems = [];
    },
    updateItem(todoItem) { //로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1)
}
</style>
