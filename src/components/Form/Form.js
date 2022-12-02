import React from 'react'
import { MdAddCircle } from 'react-icons/md'
import './Form.css'

const Form = (props) => {

    const handleInputChange = (event) => {
        props.setInputTodo(event.target.value)
    }

    const handleAddTodo = (event) => {
        event.preventDefault()
        if (props.inputTodo) {
            props.setTodos([
                ...props.todos,
                { text: props.inputTodo, complete: false, id: Date.now() }
            ])
            props.setInputTodo('')
        } else return;
    }

    const handleStatus = (event) => {
        props.setStatus(event.target.value)
    }

    return (
        <form className='form'>
            <input className='inputForm'
                type='text'
                placeholder='New Todo ...'
                value={props.inputTodo}
                onChange={handleInputChange}
            />
            <button className='inputBtn'
                type='submit'
                onClick={handleAddTodo}
            >
                <MdAddCircle />
            </button>
            <div>
                <select className='inputselect'
                    onChange={handleStatus}
                >
                    <option value='All'>All</option>
                    <option value='Complete'>Complete</option>
                    <option value='unComplete'>unComplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form