const VUE_APP_TODO_LIST = process.env.VUE_APP_TODO_LIST

function fetch() {
  let hasTodoList = false
  let todoList = localStorage.getItem(VUE_APP_TODO_LIST)

  if(todoList !== null && todoList !== undefined) {
    try {
      hasTodoList = true
      todoList = JSON.parse(todoList)
    } catch(e) {
      
    }
  }

  if(!hasTodoList) {
    todoList = []

    localStorage.setItem(VUE_APP_TODO_LIST, JSON.stringify(todoList))
  }

  state.todoList = todoList
}

/**
 * @type {Todo.State}
 */
const state = {
  todoList: []
}

fetch()

export default state