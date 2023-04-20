import { ref, computed, useTransitionState } from 'vue'
import { defineStore } from 'pinia'

export const useTodosStore = defineStore('todos', () => {
  const count = ref('ahoj')
  const todos = ref([])
  const deleted = ref([])

  return { count, todos, deleted }

  // state: () => {
  //   return {
  //     // all these properties will have their type inferred automatically
  //     count: 0,
  //     name: 'Eduardo',
  //     isAdmin: true,
  //     items: [],
  //     hasChanged: true,
  //   }
  // }
})
