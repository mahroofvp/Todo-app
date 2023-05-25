import { useState } from 'react'
import { BsTrash, BsPencil } from 'react-icons/bs'

import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

// const todoSet = (e) => {
  
// setTodo(e.target.value);
// }
  return (

    <div className='todo-main-div'>

      <div className='todo-container-div'>
        
        
        <h1>Todo List</h1>
        <div className='adding-input-section'>
          <input type="text" placeholder='New Todo'onChange={(e)=>setTodo(e.target.value)} />
          <button onClick={()=> setTodos([...todos,todo])}>ADD TODO</button>
        </div>
        <div className='todo-ul-div'>
          <ul>
            {todos.map((data)=>{

            <li><span>{data}</span> <span><BsPencil className='li-icons' id='pen-icon' /> <BsTrash className='li-icons' id='trash-icon' /></span> </li>
            })}

          </ul>
        </div>

        <div className='editing-input-div'>
          <input type="text" placeholder='Editing Current Todo Item' />
          <button id='save-btn'>Save</button>
          <button id='cancel-btn'>cancel</button>
        </div>

      </div>
    </div>

  )
}

export default App
