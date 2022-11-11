<template>
  <div>
    <ul>
      <li v-for="(todoItem,index) in propsdata" class="shadow" :key="todoItem.item">
        <i class="checkBtn fas fa-check"  :class="{checkBtnCompleted: todoItem.completed}"
           @click="toggleComplete(todoItem)"></i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem.item, index)">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    propsdata: Array
  },
  methods: {
    removeTodo: function(todoItem, index) {
      this.$emit('removeItem', todoItem, index);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed;
      this.updateItem(todoItem);
    },
    updateItem(todoItem) { //로컬스토리지 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },

}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  /* color: black; */
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  /* color: #62acde; */
  color: black;
}
.textCompleted {
  text-decoration: line-through;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>