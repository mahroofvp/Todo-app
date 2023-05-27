import { useEffect, useRef, useState } from 'react'
import { BsTrash, BsPencil } from 'react-icons/bs'

import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState("")
  const [editId, setEditId] = useState(0)

  const todoSet = (e) => {
    
    todo ? setTodos([...todos, { list: todo, id: Date.now(), status: false }]) : null;
    setTodo("")
  }
  const todoReset = (e) => {
    
    // editTodo? setTodos([...todos, { list: editTodo, id: Date.now() , status:false}]) : null;
    if(editId){

      const resetTodo =  todos.find((todo)=>todo.id === editId)
      const updateTodo = todos.map((data)=>data.id === resetTodo.id  
      ? (data = { id: data.id , list:  editTodo})
      :(data = { id: data.id , list: data.list}))
      setTodos(updateTodo)
    }
      setEditId(0)
    
    setEditTodo("")

  }


 
  const onDelete = (id) => {
    setTodos(todos.filter((val) => val.id !== id))
  }
  const handleClick = (id) => {
    const completed = todos.map((val) => {
      if (val.id === id) {
        return ({ ...val, status: !val.status })
      }
      return val;
    })
    setTodos(completed)
  }

  const onEdit = (id) => { 
    const sortedtodos = todos.find((data) => data.id === id)
    console.log(sortedtodos.list);
    setEditTodo(sortedtodos.list)
    setEditId(sortedtodos.id)
  }

  const onClear = ()=> {
    setEditTodo("")
  }


  return (

    <div className='todo-main-div'>

      <div className='todo-container-div'>


        <h1>Todo List</h1>
        <div className='adding-input-section'>
          <input type="text" value={todo} placeholder='New Todo' onChange={(e) => setTodo(e.target.value)} />
          <button onClick={todoSet}>ADD TODO</button>
        </div>
        <div className='todo-ul-div'>
          <ul>
            {todos.map((to) => {

              return <li key={to.id}  >
                <span id={to.status && "complete"} onClick={() => handleClick(to.id)}>{to.list} </span>
                <span><BsPencil className='li-icons' id='pen-icon' title='Edit' onClick={() => onEdit(to.id)} /> 
                <BsTrash title='Delete' className='li-icons' id='trash-icon' onClick={() => onDelete(to.id)} />
                </span>
                 </li>
            })}


          </ul>
        </div>

        <div className='editing-input-div'>
          <input type="text" value={editTodo} placeholder='Edit Current Todo' onChange={(e) => setEditTodo(e.target.value)} />
          <button id='save-btn' onClick={editTodo ? todoReset: null}>Save</button>
          <button id='cancel-btn' onClick={onClear}>cancel</button>
        </div>

      </div>
    </div>

  )
}

export default App
