<template>
  <div>
    <TransitionGroup tag="ul" name="fade" class="container">
      <li v-for="(todoItem,index) in storedTodoItems" class="item" :key="todoItem.item">
        <i class="checkBtn fas fa-check"  :class="{checkBtnCompleted: todoItem.completed}"
           @click="toggleOneItem({todoItem, index})"></i>
        <span :class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeOneItem({todoItem, index})">
          <i class="removeBtn fas fa-trash-alt"></i>
        </span>
      </li>
    </TransitionGroup>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
  name: "TodoList",
  methods: {
    ...mapMutations(['removeOneItem','toggleOneItem'])
  },
  computed: {
    ...mapGetters(['storedTodoItems'])
  }

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


.container {
  position: relative;
  padding: 0;
}

.item {
  width: 100%;
  height: 30px;
  background-color: #f3f3f3;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>