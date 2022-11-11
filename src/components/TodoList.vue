<template>
  <div>
    <ul>
      <li v-for="(todoItem,index) in todoItems" class="shadow" v-bind:key="index">
        {{todoItem}}
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </ul>
  </div>
</template>
d
<script>
export default {
  name: "TodoList",
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  created: function () {
    console.log("created todoList");
    for (const key in localStorage) {
      if( key === localStorage.getItem(key) && key.length > 0) {
        console.log(key + " , " + localStorage.getItem(key));
        this.todoItems.push(localStorage.getItem(key));
      }
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