<template>

  <form @submit.prevent="preventDefault">

      <div class="container">
        <div class="todo-container cont-css">
          <h2 v-if="todosStore.editing == false">Active Tasks - {{ todosStore.todos.length }}</h2>
          <h2 v-else>Edit Task
            <p class="edited-task">({{ todosStore.currentEdited }})</p>
          </h2>
          <Todo />
          <div class="todo-input">
            <input minlength="2" id="input" v-model="todosStore.input" type="text" placeholder="Start typing...">
            <input type="submit" value="submit" @click="todosStore.addTask()"/>
          </div>

        </div>

        <div class="deleted-container cont-css">
          <h2>Deleted Tasks - {{ todosStore.deleted.length }}</h2>
          <DeletedTasks />
        </div>

      </div>

  </form>


</template>

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
    // addTodo(){
    //   if(this.todosStore.editing == false && this.input != '') {

    //     this.todosStore.todos.push(this.input)
    //     this.input = '' 

    //   }if(this.todosStore.editing == true && this.input != '') {

    //     this.todosStore.todos[this.todosStore.editingId] = this.input
    //     this.todosStore.editing = false
    //     this.input = ''

    //   }
    // },
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

.edited-task{
  font-size: 18px;
  color: rgb(71, 71, 71);
}

</style>