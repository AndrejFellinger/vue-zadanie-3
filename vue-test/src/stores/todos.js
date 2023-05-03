import { ref, computed, useTransitionState } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
  // const count = ref('ahoj')
  // const todos = ref([])
  // const deleted = ref([])
  // const editing = ref(false)
  // const editingId = ref()
  // const currentEdited = ref('')

  // return { count, todos, deleted, editing, editingId, currentEdited }

  state: () => {
    // if(localStorage.getItem("todos")){
    //   return JSON.parse(localStorage.getItem("todos"));
    // }
    return {
      todos: [],
      deleted: [],
      editing: false,
      editingId: null,
      currentEdited: null
    }
  }
})
