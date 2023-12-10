import React from 'react'
import { TodoList } from './TodoList'
import AddPost from './AddPost'

function Todo() {
  return (
    <main>
      <AddPost/>
        <TodoList />
    </main>
  )
}

export default Todo