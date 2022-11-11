<template>
  <div>
    <h1>Login</h1>
    <todo-component></todo-component>
  </div>
</template>

<script>
import TodoComponent from "@/components/TodoComponent";
export default {
  name: 'App',
  components: {TodoComponent}
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
