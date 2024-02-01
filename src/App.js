import React,{useState} from 'react';

import './App.css';
import Todolist from './Todolist';

function App() {

  const [task,setTask]=useState('')
  const [todos,setTodos]=useState([])

  const  onChangeTodo = event => {
    setTask(event.target.value)
  }

  const onSubmitTodo = event =>{
    event.preventDefault()
    const newTodo = [...todos,task]
    setTodos(newTodo)
    setTask('')
  }

  const deleteHandler = indexval =>{
    const filteredTodo = todos.filter((todo,index)=> index !== indexval)
    setTodos(filteredTodo)
  }

  return (
    <div className="App">
      <center>
        <div className='card'>
          <div className='card-body'>
            <h5>Todo Management Application</h5>
            <form onSubmit={onSubmitTodo}>
              <input type="text" name="task" value={task} onChange={onChangeTodo}/>  &nbsp; &nbsp;
              <input type="submit" value="Add" name="Add" />
            </form>
            <Todolist todolist={todos} deleteHandler={deleteHandler}/>
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
