import React from 'react'

const Todolist = (props) => {
    const {todolist,deleteHandler}=props
  return (
    <div className='mt-3'>{todolist.map((todo,index)=>
        <div key={index} className='mt-2'>
            <h5>{todo} &nbsp; <button onClick={()=>deleteHandler(index)}>Delete</button></h5>
        </div>)}
        </div>
  )
}

export default Todolist