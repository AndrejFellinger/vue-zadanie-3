<template>

  <form @submit.prevent="preventDefault">

      <div class="container">
        <div class="todo-container cont-css">
          <h2>Active Tasks</h2>
          <Todo />
          <div class="todo-input">
            <input id="input" v-model="input" type="text" placeholder="Start typing...">
            <input type="submit" value="add" @click="addTodo()"/>
          </div>

        </div>

        <div class="deleted-container cont-css">
          <h2>Deleted Tasks</h2>
          <DeletedTasks />
        </div>

      </div>

  </form>


</template>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

#app{
  display: flex !important;
}

.container{
  display: flex;
  grid-auto-columns: auto;
}

.cont-css{
  background: rgb(15, 15, 15);
  margin: 10px;
  padding: 10px;
  border-radius: 6px;
  min-width: 300px;
}

.cont-css h2{
  text-align: left;
}

.deleted-container{
  height: fit-content;
}

.todo-container{
  height: fit-content;
}

.todo-input{
  display: grid;
}

.todo-input input[type=text]{
  margin-top: 10px;
  margin-bottom: 5px;
}

.todo-input input[type=submit]{
  background: greenyellow;
  color: green;
  cursor: pointer;
}

input{
  border-radius: 5px;
  padding: 5px;
  border: none;
}

</style>

<script>

import { useTodosStore } from '../stores/todos'
import { useCounterStore } from '../stores/counter'
import Todo from '../components/Todo.vue'
import DeletedTasks from '../components/DeletedTasks.vue'


export default{
  components: {
    Todo,
    DeletedTasks,
  },
  data() {
    return {
      inputValue: ''
    }
  },
  methods: {
    addTodo(){
      this.todosStore.todos.push(this.input)

      document.getElementById('input').value = ''
      input = ''
    },
    preventDefault(e){
      e.preventDefault();
    }
  },
  setup() {
    const todosStore = useTodosStore()
    const counterStore = useCounterStore()

    return { todosStore, counterStore }
  }
}

</script>