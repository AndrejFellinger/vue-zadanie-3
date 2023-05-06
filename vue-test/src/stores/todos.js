import { ref, computed, useTransitionState } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {

  state: () => {
    // if(localStorage.getItem("todos")){
    //   return JSON.parse(localStorage.getItem("todos"));
    // }
    return {
      todos: [],
      deleted: [],
      editing: false,
      editingId: null,
      recoverId: null,
      deleteId: null,
      currentEdited: null,
      input: null,
    }
  },
  actions: {
    recoverTask(){
      this.todos.push(this.deleted.splice(this.recoverId, 1)[0])
    },
    deleteTask(){
      this.deleted.push(this.todos.splice(this.deleteId, 1)[0])
    },
    addTask(){
      if(this.editing == false && this.input != '') {

        this.todos.push(this.input)
        this.input = '' 

      }if(this.editing == true && this.input != '') {

        this.todos[this.editingId] = this.input
        this.editing = false
        this.input = ''

      }
    },
  }
})
