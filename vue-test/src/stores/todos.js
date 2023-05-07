import { ref, computed, useTransitionState } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', {
    
  state: () => {

    return {
      todos: JSON.parse(localStorage.getItem('todos')),
      deleted: JSON.parse(localStorage.getItem('deleted')),
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
      localStorage.setItem('todos', JSON.stringify(this.todos))
      localStorage.setItem('deleted', JSON.stringify(this.deleted))
    },
    deleteTask(){
      this.deleted.push(this.todos.splice(this.deleteId, 1)[0])
      localStorage.setItem('todos', JSON.stringify(this.todos))
      localStorage.setItem('deleted', JSON.stringify(this.deleted))
    },
    addTask(){
      if(this.editing == false && this.input != '') {

        this.todos.push(this.input)
        this.input = ''
        localStorage.setItem('todos', JSON.stringify(this.todos))

      }if(this.editing == true && this.input != '') {

        this.todos[this.editingId] = this.input
        this.editing = false
        this.input = ''
        localStorage.setItem('todos', JSON.stringify(this.todos))

      }
    },
  }
})
