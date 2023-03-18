import React, { useState } from 'react'
import './ToDoItem.css'
import './fonts.css'
import ToDoData from './ToDoData'
import ToDoItem from './ToDoItem'

const ToDo = () => {
  const [valueInput, setValueInput] = useState('')
  const [todoAll, setTodos] = useState(
    localStorage.getItem('todo') ? JSON.parse(localStorage.getItem('todo')) : ToDoData
  )

  const todoActive = todoAll.filter((item) => item.completed === false)
  const todoCompleted = todoAll.filter((item) => item.completed === true)

  const todoStorage = (item) => {
    setTodos(item)
    localStorage.setItem('todo', JSON.stringify(item))
  }

  const addToDo = (item) => {
    todoStorage(
      todoAll.concat([
        {
          text: item,
          completed: false,
          id: Date.now(),
        },
      ])
    )
  }

  const handleChange = (id) => {
    todoStorage(
      todoAll.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const deleteTodo = (id) => {
    todoStorage(
      todoAll.filter((todo) => {
        return todo.id !== id
      })
    )
  }

  const todosOut = (x) => {
    return x.map((item, index) => {
      return (
        <ToDoItem
          key={index}
          id={item.id}
          completed={item.completed}
          description={item.text}
          handleChange={() => handleChange(item.id)}
          deleteChange={() => deleteTodo(item.id)}
        />
      )
    })
  }

  const getSubmitTodo = (e) => {
    e.preventDefault()
    if (valueInput) {
      addToDo(valueInput)
      setValueInput('')
    }
  }

  return (
    <main>
      <h3>
        <span className='icon-list-numbered list-numbered'></span> Список дел. Как бы это
        развидеть?..
      </h3>
      {todosOut([...todoActive, ...todoCompleted])}
      <div className='todo-input__wrapp'>
        <form action='' onSubmit={(e) => getSubmitTodo(e)}>
          <input
            className='todo-input'
            placeholder='даже не думай тут что-то писать! проще забить и ничего не делать'
            type='text'
            name='newTodo'
            id='newTodo'
            onChange={(e) => setValueInput(e.target.value)}
            value={valueInput}
          />
          &nbsp;&nbsp;&nbsp;
          <button type='submit' className='icon-plus list-numbered'></button>
        </form>
      </div>
    </main>
  )
}

export default ToDo
