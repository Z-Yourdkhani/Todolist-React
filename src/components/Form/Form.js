import React from 'react'
import { MdAddCircle } from 'react-icons/md'
import './Form.css'

const Form = () => {
    return (
        <form className='form'>
            <input className='inputForm' type='text' placeholder='New Todo ...' />
            <button className='inputBtn' type='submit'>
                <MdAddCircle />
            </button>
            <div>
                <select className='inputselect'>
                    <option value='All'>All</option>
                    <option value='Complete'>Complete</option>
                    <option value='unComplete'>unComplete</option>
                </select>
            </div>
        </form>
    )
}

export default Form