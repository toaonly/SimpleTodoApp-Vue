import { GetterTree } from 'vuex'

/**
 * @type {GetterTree<Todo.State, Todo.State>}
 */
const getters = {
  todoList: ({ todoList }) => todoList
}

export default getters
