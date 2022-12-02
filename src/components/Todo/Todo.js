import React from 'react'
import './Todo.css'

const Todo = (props) => {

    const handleDeleteTodo = () => {
        props.setTodos(props.todos.filter((item) => item.id !== props.todo.id))
    }

    const handleCompleteTodo = () => {
        props.setTodos(props.todos.map((item) => {
            if (item.id === props.todo.id) {
                return {
                    ...item, complete: !item.complete
                }
            } else {
                return item
            }
        }))
    }

    return (
        <>
            <li className={`todoLi ${props.todo.complete?'complete' :''}`}>
                {props.text}
                <div>
                    <button onClick={handleCompleteTodo}>complete</button>
                    <button onClick={handleDeleteTodo}>delete</button>
                </div>
            </li>
        </>
    )
}

export default Todo