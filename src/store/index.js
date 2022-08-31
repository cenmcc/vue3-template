import { defineStore } from 'pinia'
import { toHandlers } from 'vue'

export const todoList = defineStore('todoList', {
  state() {
    return {
      filter: 'all',
      todos: [
      ],
      nextId: 0,
    }
  },
  actions: {
    addTodo(label) {
      this.todos.unshift({
        label,type: 0
      })
    },
    updateTaskStatus(index) {
      const task = this.todos[index]
      if(task.type === 0) {
        task.type = 1
        this.todos.splice(index, 1)
        this.todos.push(task)
      }
    },
    deleteTask(index) {
      this.todos.splice(index, 1)
    }
  },
})

export const useStore = defineStore('main', {
  state: () => {
    return {}
  },
  getters: {},
  actions: {},
})

export const useCartStore = defineStore('cart', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
})
