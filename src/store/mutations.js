import { MutationTree } from 'vuex'
import _ from 'lodash'

const VUE_APP_TODO_LIST = process.env.VUE_APP_TODO_LIST

/**
 * @type {MutationTree<Todo.State>}
 */
const mutations = {
  /**
   * @param {Todo.State} state
   */
  REFRESH_LOCALSTORAGE({ todoList }) {
    localStorage.setItem(VUE_APP_TODO_LIST, JSON.stringify(todoList))
  },
  
  /**
   * @param {Todo.State} state 
   * @param {Todo.Item} todoItem 
   */
  SET({ todoList }, todoItem) {
    todoList.push(todoItem)
  },

  /**
   * @param {Todo.State} state
   * @param {string} id
   */
  REMOVE(state, id) {
    _.remove(state.todoList, todoItem => {
      return todoItem.id == id
    })

    state.todoList = state.todoList.slice(0)
  }
}

export default mutations
