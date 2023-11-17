import { useState } from "react"
import "./styles.css"
//import crypto from "crypto"; crypto is library to generate id but it didnt work in with me 
import { v4 as uuidv4 } from 'uuid'; //

export default  function App() { 
  const [newItem , setNewItem ]  = useState("")
  const [Todos , setTodos] = useState([])
  function handleSubmit(e){
    e.preventDefault()
  // setTodos([...Todos, {id: uuidv4(), title: newItem, completed: false}]) this way works but its better to use a new variable called (currentTodo) so we dont always start from (Todos) variable which is empty array 
  setTodos(currentTodos => {
  return [
    ...currentTodos, {id: uuidv4(), title: newItem, completed: false}]})
}
console.log(Todos);
  return (<>
  <form  onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New item </label>
      <input value={newItem} onChange={e=>setNewItem(e.target.value)} type="text" id = "item"/>
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">Todo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox"/>
        item 2
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}