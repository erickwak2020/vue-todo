<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>
  </div>

  <alert-modal :show="showModal" @close="showModal = false">
    <template #header>
      <h3>
        경고 <i class="closeModalBtn fa fa-times" aria-hidden="true" @click="showModal = false"></i>
      </h3>
    </template>
    <template #body>
      할 일을 입력 하세요.
    </template>
  </alert-modal>
</template>

<script>

import AlertModal from "@/components/common/AlertModal";
import { mapMutations } from 'vuex';
export default {
  name: "TodoInput",
  components: {AlertModal},
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    ...mapMutations(['addOneItem']),
    addTodo() {
      if (this.newTodoItem !== '') {
        this.addOneItem(this.newTodoItem);
        //this.$store.commit('addOneItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  width: 90%;
  /*height: 100%;*/
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
</style>