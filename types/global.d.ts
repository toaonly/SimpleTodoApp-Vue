declare namespace Todo {
  interface State {
    todoList: Todo.Item[]
  }

  interface Item {
    id: string
    title: string
    contents: string
    completed: boolean
  }
}