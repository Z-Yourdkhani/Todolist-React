import React from 'react'
import Todo from '../Todo/Todo'
import './TodoList.css'

const TodoList = (props) => {
    return (
        <div className='todoList'>
            <ul>{
                props.todos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            text={todo.text}
                            todo={todo}
                            todos={props.todos}
                            setTodos={props.setTodos}
                        />
                    )
                })
            }
            </ul>
        </div>
    )
}

export default TodoList