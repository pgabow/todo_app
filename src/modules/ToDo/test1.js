import React, { useState } from 'react'
import ToDoItem from './toDoList/ToDoItem/ToDoItem'
import todosData from './toDoList/todosData'

function App() {
   const [todos, setTodos] = useState(todosData)
   const [value, setValue] = useState('')


         setTodos(
            todos.filter((todo) => {
               return todo.id !== id
            })
         )

   const addText = (e) => {
      e.preventDefault()
      if (value) {
         todos.concat({
            text: value,
            completed: false,
            id: Date.now(),
         })
         setValue('')
      }
      console.log(value)
   }
   const handelChangeValue = (e) => {
      setValue(e.target.value)
   }
   const handelChange = (id) => {
      setTodos(
         todos.map((item) => {
            if (item.id === id) {
               item.completed = !item.completed
            }
            return item
         })
      )
   }

   const activeTodo = todos.filter((task) => task.completed === false)
   const completedTodo = todos.filter((task) => task.completed === true)
   const finalTodos = [...activeTodo, ...completedTodo].map((item) => {
      return (
         <div>
            <ToDoItem
               key={item.id}
               description={item.text}
               completed={item.completed}
               handelChange={() => handelChange(item.id)}
            />
         </div>
      )
   })
   return (
      <div className="App">
         <h1>Мой распорядок дня :</h1>
         <div className="input_wrapper">
            <form action="" onSubmit={addText}>
               <input
                  placeholder="Введите текст"
                  className="input"
                  type="text"
                  onChange={handelChangeValue}
                  value={value}
               />
               <button type="submit">Добавить задачу</button>
            </form>
         </div>
         {finalTodos}
      </div>
   )
}

export default App
