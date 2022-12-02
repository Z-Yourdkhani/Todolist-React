import React, { useState, useEffect } from 'react'
import Form from './components/Form/Form'
import TodoList from './components/TodoList/TodoList'

const App = () => {

  const [inputTodo, setInputTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filterTodos, setFilterTodos] = useState([])

  useEffect(() => {
    switch (status) {
      case 'Complete':
        setFilterTodos(todos.filter((todo) => todo.complete === true))
        break;
      case 'unComplete':
        setFilterTodos(todos.filter((todo) => todo.complete === false))
        break;
      default:
        setFilterTodos(todos)
        break;
    }
  }, [todos, status])

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
        filterTodos={filterTodos}
      />
    </div>
  )
}

export default App