import { ActionContext, ActionTree } from 'vuex'

/**
 * @type {ActionTree<Todo.State, Todo.State>}
 */
const actions = {
  /**
   * 
   * @param {ActionContext<Todo.State>} context
   * @param {Todo.Item} todoItem
   */
  set({ commit, state }, todoItem) {
    return new Promise((resolve, reject) => {
      if(todoItem.title && todoItem.title.length && todoItem.contents && todoItem.contents.length) {
        const lastTodoItem = _.last(state.todoList)
        const id = (lastTodoItem && Number(lastTodoItem.id) + 1) || 0
        
        todoItem.id = id + ''
        todoItem.completed = false
    
        commit('SET', todoItem)
        commit('REFRESH_LOCALSTORAGE')

        resolve()
      } else {
        reject(new Error('입력값을 확인해주세요'))
      }
    })
  },

  /**
   * 
   * @param {ActionContext} context
   * @param {string} id
   */
  remove({ commit }, id) {
    commit('REMOVE', id)
    commit('REFRESH_LOCALSTORAGE')
  }
}

export default actions
