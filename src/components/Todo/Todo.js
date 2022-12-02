import React from 'react'
import './Todo.css'

const Todo = () => {
    return (
        <div className='todo'>
            <ul className='todoUl'>
                <li className='todoLi'>
                    first todo
                    <div>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                </li>
                <li className='todoLi'>
                    second todo
                    <div>
                        <button>complete</button>
                        <button>delete</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Todo