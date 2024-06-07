import React from 'react'
import {todoItems} from '../Components/todoItems/'

export const Todos = (props) => {
  return (
    <div className='container'>
      <h3>Todo List</h3>
      <todoItems todo = {props.Todos[0]}/>
    </div>
  )
}
