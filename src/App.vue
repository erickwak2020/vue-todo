<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader";
import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import TodoFooter from "@/components/TodoFooter";
export default {
  name: 'App',
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
