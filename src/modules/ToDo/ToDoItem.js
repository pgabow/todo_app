import React from 'react'
import './ToDoItem.css'
import './fonts.css'

const ToDoItem = (props) => {
   return (
      <article>
         <div className="todo_wrapp" onClick={props.handleChange}>
            <span
               className={`icon-checkmark${
                  props.completed ? '' : '2'
               } checkmark`}
            ></span>
            &nbsp; 
            {props.description}&nbsp;&nbsp;
         </div>
         <div className="todo-delete" onClick={props.deleteChange}>
            <span className="icon-cross cross"></span>
         </div>
      </article>
   )
}

export default ToDoItem
