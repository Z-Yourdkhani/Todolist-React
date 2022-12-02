import React, { useState } from 'react'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'

const App = () => {

  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [status , setStatus]=useState('all')

  return (
    <div>
      <Form
        inputTodo={inputTodo}
        setInputTodo={setInputTodo}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App